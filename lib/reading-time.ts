/**
 * Calculate reading time in minutes based on word count
 * Average reading speed: 200-250 words per minute
 *
 * This is a client-safe utility that doesn't import any server-side code
 */
export function calculateReadingTime(content: string): number {
    const wordsPerMinute = 225
    const wordCount = content.split(/\s+/).length
    return Math.ceil(wordCount / wordsPerMinute)
}
