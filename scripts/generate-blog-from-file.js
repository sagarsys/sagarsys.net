#!/usr/bin/env node

/**
 * Generate blog post from PDF or Keynote file
 *
 * Usage:
 *   node scripts/generate-blog-from-file.js <file-path> [options]
 *
 * Options:
 *   --title "Post Title"        - Override auto-generated title
 *   --description "Description" - Override auto-generated description
 *   --author "Author Name"      - Set author (default: Sagar Sawuck)
 *   --categories "Cat1,Cat2"    - Comma-separated categories
 *   --tags "Tag1,Tag2"          - Comma-separated tags
 *   --featured                  - Mark as featured post
 *   --order N                   - Set order number
 *   --image "/path/to/image"    - Set featured image
 */

const fs = require('fs')
const path = require('path')
const matter = require('gray-matter')

// Check if required dependencies are installed
let pdfParse, yauzl
try {
    pdfParse = require('pdf-parse')
} catch (e) {
    console.error('❌ pdf-parse is not installed. Run: npm install pdf-parse')
    process.exit(1)
}

try {
    yauzl = require('yauzl')
} catch (e) {
    console.log('⚠️  yauzl is not installed. Keynote support will be limited.')
    console.log('   Run: npm install yauzl')
}

/**
 * Extract text from PDF file
 */
async function extractFromPDF(filePath) {
    try {
        const dataBuffer = fs.readFileSync(filePath)
        const data = await pdfParse(dataBuffer)
        return {
            text: data.text,
            title: data.info?.Title || path.basename(filePath, '.pdf'),
            author: data.info?.Author,
            pages: data.numpages,
        }
    } catch (error) {
        console.error('Error extracting PDF:', error)
        throw error
    }
}

/**
 * Extract text from Keynote file (.key)
 * Keynote files are actually zip archives containing XML/plist files
 */
async function extractFromKeynote(filePath) {
    if (!yauzl) {
        throw new Error(
            'yauzl is required for Keynote extraction. Install with: npm install yauzl'
        )
    }

    return new Promise((resolve, reject) => {
        yauzl.open(filePath, { lazyEntries: true }, (err, zipfile) => {
            if (err) {
                reject(err)
                return
            }

            let textContent = []
            let title = path.basename(filePath, '.key')

            zipfile.readEntry()
            zipfile.on('entry', (entry) => {
                // Look for slide data in preview or data files
                if (
                    entry.fileName.includes('preview') ||
                    entry.fileName.includes('data')
                ) {
                    zipfile.openReadStream(entry, (err, readStream) => {
                        if (err) {
                            zipfile.readEntry()
                            return
                        }

                        let data = ''
                        readStream.on('data', (chunk) => {
                            data += chunk.toString()
                        })

                        readStream.on('end', () => {
                            // Try to extract text from XML/plist
                            const textMatches = data.match(
                                /<string[^>]*>([^<]+)<\/string>/g
                            )
                            if (textMatches) {
                                textMatches.forEach((match) => {
                                    const text = match
                                        .replace(/<\/?string[^>]*>/g, '')
                                        .trim()
                                    if (
                                        text &&
                                        text.length > 3 &&
                                        !text.startsWith('<?')
                                    ) {
                                        textContent.push(text)
                                    }
                                })
                            }
                            zipfile.readEntry()
                        })
                    })
                } else {
                    zipfile.readEntry()
                }
            })

            zipfile.on('end', () => {
                resolve({
                    text: textContent.join('\n\n'),
                    title: title,
                    author: null,
                    pages: textContent.length,
                })
            })

            zipfile.on('error', reject)
        })
    })
}

/**
 * Convert extracted text to markdown format
 */
function formatAsMarkdown(text, title) {
    // Split by common patterns (double newlines, page breaks, etc.)
    const sections = text
        .split(/\n{3,}|\f/)
        .map((section) => section.trim())
        .filter((section) => section.length > 0)

    let markdown = `# ${title}\n\n`

    sections.forEach((section, index) => {
        // Check if section looks like a heading (short, all caps, or ends with colon)
        const lines = section.split('\n')
        const firstLine = lines[0].trim()

        if (
            firstLine.length < 60 &&
            (firstLine === firstLine.toUpperCase() ||
                firstLine.endsWith(':') ||
                /^[A-Z][a-z]+(\s+[A-Z][a-z]+)*$/.test(firstLine))
        ) {
            markdown += `## ${firstLine.replace(':', '')}\n\n`
            if (lines.length > 1) {
                markdown += lines.slice(1).join('\n') + '\n\n'
            }
        } else {
            markdown += section + '\n\n'
        }
    })

    return markdown
}

/**
 * Generate frontmatter
 */
function generateFrontmatter(options, extractedData) {
    const title = options.title || extractedData.title || 'Untitled Post'
    const description =
        options.description ||
        extractedData.text.substring(0, 160).replace(/\n/g, ' ').trim() + '...'
    const author = options.author || extractedData.author || 'Sagar Sawuck'
    const date = new Date().toISOString().split('T')[0]
    const categories = options.categories
        ? options.categories.split(',').map((c) => c.trim())
        : ['General']
    const tags = options.tags
        ? options.tags.split(',').map((t) => t.trim())
        : []

    const frontmatter = {
        title,
        description,
        date,
        author,
        categories,
        tags,
    }

    if (options.featured) {
        frontmatter.featured = true
    }

    if (options.order) {
        frontmatter.order = parseInt(options.order, 10)
    }

    if (options.image) {
        frontmatter.image = options.image
    } else {
        frontmatter.image = '/images/blog/default.jpg'
    }

    return frontmatter
}

/**
 * Generate slug from title
 */
function generateSlug(title) {
    return title
        .toLowerCase()
        .replace(/[^a-z0-9]+/g, '-')
        .replace(/^-+|-+$/g, '')
}

/**
 * Main function
 */
async function main() {
    const args = process.argv.slice(2)

    if (args.length === 0) {
        console.log(`
Usage: node scripts/generate-blog-from-file.js <file-path> [options]

Options:
  --title "Post Title"
  --description "Description"
  --author "Author Name"
  --categories "Cat1,Cat2"
  --tags "Tag1,Tag2"
  --featured
  --order N
  --image "/path/to/image"

Examples:
  node scripts/generate-blog-from-file.js presentation.pdf --title "My Presentation" --categories "Web Development,React"
  node scripts/generate-blog-from-file.js slides.key --tags "Tutorial,Guide" --featured
        `)
        process.exit(1)
    }

    const filePath = args[0]

    if (!fs.existsSync(filePath)) {
        console.error(`❌ File not found: ${filePath}`)
        process.exit(1)
    }

    // Parse options
    const options = {}
    for (let i = 1; i < args.length; i += 2) {
        const key = args[i].replace('--', '')
        const value = args[i + 1]
        if (key === 'featured') {
            options.featured = true
            i-- // Don't skip next arg
        } else {
            options[key] = value
        }
    }

    console.log(`📄 Processing file: ${filePath}`)

    // Extract content based on file type
    let extractedData
    const ext = path.extname(filePath).toLowerCase()

    try {
        if (ext === '.pdf') {
            console.log('📖 Extracting text from PDF...')
            extractedData = await extractFromPDF(filePath)
        } else if (ext === '.key') {
            console.log('📊 Extracting text from Keynote...')
            extractedData = await extractFromKeynote(filePath)
        } else {
            console.error(`❌ Unsupported file type: ${ext}`)
            console.error('   Supported formats: .pdf, .key')
            process.exit(1)
        }

        console.log(`✅ Extracted ${extractedData.pages} pages/slides`)
        console.log(`📝 Extracted ${extractedData.text.length} characters`)

        // Generate markdown
        const title = options.title || extractedData.title
        const markdownContent = formatAsMarkdown(extractedData.text, title)

        // Generate frontmatter
        const frontmatter = generateFrontmatter(options, extractedData)

        // Create blog post file
        const slug = generateSlug(title)
        const blogDir = path.join(process.cwd(), 'content', 'blog')
        const existingPosts = fs
            .readdirSync(blogDir)
            .filter((f) => f.endsWith('.md'))
        const nextOrder = existingPosts.length + 1
        const filename = `${String(nextOrder).padStart(2, '0')}-${slug}.md`
        const filePath_out = path.join(blogDir, filename)

        // Write file
        const fileContent = matter.stringify(markdownContent, frontmatter)
        fs.writeFileSync(filePath_out, fileContent)

        console.log(`\n✅ Blog post created: ${filename}`)
        console.log(`📁 Location: ${filePath_out}`)
        console.log(`\n📋 Frontmatter:`)
        console.log(JSON.stringify(frontmatter, null, 2))
        console.log(
            `\n💡 Tip: Review and edit the generated markdown file before publishing.`
        )
    } catch (error) {
        console.error('❌ Error:', error.message)
        process.exit(1)
    }
}

main()
