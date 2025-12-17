#!/usr/bin/env node

/**
 * Build-time image optimization script
 *
 * Optimizes images in public/images/ directory:
 * - Converts PNG/JPG to WebP
 * - Generates multiple sizes (thumbnail, medium, large)
 * - Compresses images while maintaining quality
 * - Creates optimized versions alongside originals
 */

const sharp = require('sharp')
const fs = require('fs').promises
const path = require('path')

const IMAGE_DIR = path.join(process.cwd(), 'public', 'images')
const QUALITY = {
    webp: 85,
    jpeg: 85,
    png: 90,
}

const SIZES = {
    thumb: 400,
    medium: 800,
    large: 1200,
}

/**
 * Check if file is an image
 */
function isImageFile(filename) {
    const ext = path.extname(filename).toLowerCase()
    return ['.jpg', '.jpeg', '.png', '.webp'].includes(ext)
}

/**
 * Get optimized filename
 */
function getOptimizedFilename(originalPath, format, size = null) {
    const dir = path.dirname(originalPath)
    const name = path.basename(originalPath, path.extname(originalPath))
    const sizeSuffix = size ? `-${size}` : ''
    return path.join(dir, `${name}${sizeSuffix}.${format}`)
}

/**
 * Optimize a single image
 */
async function optimizeImage(imagePath) {
    try {
        const stats = await fs.stat(imagePath)
        const ext = path.extname(imagePath).toLowerCase()
        const isJpeg = ['.jpg', '.jpeg'].includes(ext)
        const isPng = ext === '.png'

        // Skip if already optimized
        if (ext === '.webp') {
            console.log(`⏭️  Skipping ${imagePath} (already WebP)`)
            return
        }

        console.log(`🖼️  Optimizing ${imagePath}...`)

        const image = sharp(imagePath)
        const metadata = await image.metadata()

        // Generate WebP version (main optimization)
        const webpPath = getOptimizedFilename(imagePath, 'webp')
        await image.webp({ quality: QUALITY.webp }).toFile(webpPath)

        const webpStats = await fs.stat(webpPath)
        const savings = ((1 - webpStats.size / stats.size) * 100).toFixed(1)
        console.log(
            `   ✅ WebP: ${(webpStats.size / 1024).toFixed(
                2
            )}KB (${savings}% smaller)`
        )

        // Generate responsive sizes if image is large enough
        if (metadata.width > SIZES.medium) {
            for (const [sizeName, maxWidth] of Object.entries(SIZES)) {
                if (metadata.width > maxWidth) {
                    const sizePath = getOptimizedFilename(
                        imagePath,
                        'webp',
                        sizeName
                    )
                    await image
                        .resize(maxWidth, null, {
                            withoutEnlargement: true,
                            fit: 'inside',
                        })
                        .webp({ quality: QUALITY.webp })
                        .toFile(sizePath)

                    const sizeStats = await fs.stat(sizePath)
                    console.log(
                        `   ✅ ${sizeName} (${maxWidth}px): ${(
                            sizeStats.size / 1024
                        ).toFixed(2)}KB`
                    )
                }
            }
        }
    } catch (error) {
        console.error(`❌ Error optimizing ${imagePath}:`, error.message)
    }
}

/**
 * Recursively find all images in directory
 */
async function findImages(dir) {
    const images = []

    try {
        const entries = await fs.readdir(dir, { withFileTypes: true })

        for (const entry of entries) {
            const fullPath = path.join(dir, entry.name)

            if (entry.isDirectory()) {
                // Skip node_modules and .git
                if (
                    !entry.name.startsWith('.') &&
                    entry.name !== 'node_modules'
                ) {
                    const subImages = await findImages(fullPath)
                    images.push(...subImages)
                }
            } else if (entry.isFile() && isImageFile(entry.name)) {
                images.push(fullPath)
            }
        }
    } catch (error) {
        // Directory might not exist or be inaccessible
        if (error.code !== 'ENOENT') {
            console.error(`Error reading directory ${dir}:`, error.message)
        }
    }

    return images
}

/**
 * Main function
 */
async function main() {
    console.log('🚀 Starting image optimization...\n')

    if (
        !(await fs
            .access(IMAGE_DIR)
            .then(() => true)
            .catch(() => false))
    ) {
        console.log(`⚠️  Image directory not found: ${IMAGE_DIR}`)
        console.log('   Skipping image optimization.')
        return
    }

    const images = await findImages(IMAGE_DIR)

    if (images.length === 0) {
        console.log('📭 No images found to optimize.')
        return
    }

    console.log(`📸 Found ${images.length} image(s) to optimize\n`)

    for (const imagePath of images) {
        await optimizeImage(imagePath)
    }

    console.log('\n✨ Image optimization complete!')
}

// Run if called directly
if (require.main === module) {
    main().catch((error) => {
        console.error('Fatal error:', error)
        process.exit(1)
    })
}

module.exports = { optimizeImage, findImages }
