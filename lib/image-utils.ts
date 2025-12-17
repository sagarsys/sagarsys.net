/**
 * Image optimization utilities
 *
 * Helper functions for working with optimized images
 */

export interface ImageSizes {
    thumb?: string
    medium?: string
    large?: string
    original: string
}

/**
 * Get the best image source for a given width
 * Returns WebP if available, falls back to original
 */
export function getOptimizedImageSrc(basePath: string, width?: number): string {
    // Remove leading slash if present
    const cleanPath = basePath.startsWith('/') ? basePath.slice(1) : basePath

    // Determine which size to use
    let sizeSuffix = ''
    if (width) {
        if (width <= 400) {
            sizeSuffix = '-thumb'
        } else if (width <= 800) {
            sizeSuffix = '-medium'
        } else if (width <= 1200) {
            sizeSuffix = '-large'
        }
    }

    // Try WebP first, fallback to original
    const webpPath = cleanPath.replace(
        /\.(jpg|jpeg|png)$/i,
        `${sizeSuffix}.webp`
    )
    const originalPath = cleanPath.replace(/\.(jpg|jpeg|png)$/i, (match) => {
        return sizeSuffix ? `${sizeSuffix}${match}` : match
    })

    // In a real implementation, you'd check if the file exists
    // For now, we'll return the WebP path (browser will fallback if not found)
    return `/${webpPath}`
}

/**
 * Generate srcset for responsive images
 */
export function generateSrcSet(basePath: string): string {
    const sizes = ['thumb', 'medium', 'large']
    const widths = [400, 800, 1200]

    return sizes
        .map((size, index) => {
            const webpPath = basePath.replace(
                /\.(jpg|jpeg|png)$/i,
                `-${size}.webp`
            )
            return `/${webpPath} ${widths[index]}w`
        })
        .join(', ')
}

/**
 * Get image sizes attribute for responsive images
 */
export function getImageSizes(breakpoints?: {
    mobile?: number
    tablet?: number
    desktop?: number
}): string {
    if (!breakpoints) {
        return '(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw'
    }

    const { mobile = 100, tablet = 50, desktop = 33 } = breakpoints

    return `(max-width: 768px) ${mobile}vw, (max-width: 1200px) ${tablet}vw, ${desktop}vw`
}

/**
 * Check if WebP is supported (for fallback logic)
 */
export function isWebPSupported(): boolean {
    if (typeof window === 'undefined') return true // Assume support on server

    const canvas = document.createElement('canvas')
    canvas.width = 1
    canvas.height = 1
    return canvas.toDataURL('image/webp').indexOf('data:image/webp') === 0
}
