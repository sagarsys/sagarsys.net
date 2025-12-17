# Blog Post Generator from PDF/Keynote

This script extracts content from PDF or Keynote presentation files and
generates a blog post in markdown format.

## Installation

First, install the required dependencies:

```bash
npm install
```

This will install:

-   `pdf-parse` - For extracting text from PDF files
-   `yauzl` - For extracting content from Keynote files (.key)

## Usage

### Basic Usage

```bash
# Generate from PDF
npm run blog:generate path/to/presentation.pdf

# Generate from Keynote
npm run blog:generate path/to/presentation.key
```

### With Options

```bash
npm run blog:generate presentation.pdf \
  --title "My Awesome Presentation" \
  --description "A comprehensive guide to..." \
  --author "Sagar Sawuck" \
  --categories "Web Development,React" \
  --tags "Tutorial,Guide,Next.js" \
  --featured \
  --order 3 \
  --image "/images/blog/my-image.jpg"
```

## Options

-   `--title "Title"` - Override auto-generated title (default: filename or PDF
    title)
-   `--description "Description"` - Override auto-generated description
    (default: first 160 chars)
-   `--author "Author Name"` - Set author (default: "Sagar Sawuck" or PDF
    author)
-   `--categories "Cat1,Cat2"` - Comma-separated categories (default:
    ["General"])
-   `--tags "Tag1,Tag2"` - Comma-separated tags (default: [])
-   `--featured` - Mark as featured post
-   `--order N` - Set order number (default: auto-incremented)
-   `--image "/path/to/image"` - Set featured image (default:
    "/images/blog/default.jpg")

## Examples

### Example 1: Simple PDF conversion

```bash
npm run blog:generate ~/Downloads/my-presentation.pdf
```

### Example 2: Full customization

```bash
npm run blog:generate ~/Documents/slides.key \
  --title "Building Modern Web Apps with Next.js" \
  --description "Learn how to build scalable web applications using Next.js 15" \
  --categories "Web Development,Next.js,React" \
  --tags "Tutorial,Next.js,TypeScript,App Router" \
  --featured \
  --order 5
```

### Example 3: With custom image

```bash
npm run blog:generate presentation.pdf \
  --title "My Presentation" \
  --image "/images/blog/custom-hero.jpg"
```

## Output

The script will:

1. Extract text content from the file
2. Format it as markdown with appropriate headings
3. Generate frontmatter with metadata
4. Save to `content/blog/XX-slug.md` (where XX is auto-incremented)

## Notes

-   **PDF files**: Text extraction works well for most PDFs. Complex layouts may
    require manual editing.
-   **Keynote files**: Keynote extraction is limited as .key files are complex
    archives. The script extracts text from XML/plist files, but formatting may
    need manual adjustment.
-   **Review required**: Always review and edit the generated markdown file
    before publishing, especially for:
    -   Formatting and structure
    -   Code blocks (may need syntax highlighting)
    -   Images and diagrams (need to be added manually)
    -   Links and references

## Troubleshooting

### PDF extraction fails

-   Ensure the PDF is not password-protected
-   Check if the PDF contains actual text (not just images)
-   Try a different PDF reader to verify text is selectable

### Keynote extraction limited

-   Keynote files are complex archives. For best results:
    -   Export Keynote to PDF first, then use PDF extraction
    -   Or manually copy content from Keynote slides

### Missing dependencies

If you see errors about missing modules:

```bash
npm install pdf-parse yauzl
```
