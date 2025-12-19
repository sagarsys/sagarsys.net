import { describe, it, expect } from 'vitest'
import { calculateReadingTime } from '@/lib/reading-time'

describe('Reading Time Calculation', () => {
    it('should calculate reading time for short text', () => {
        const text = 'This is a short text with ten words in it'
        expect(calculateReadingTime(text)).toBe(1)
    })

    it('should calculate reading time for medium text', () => {
        const text = new Array(500).fill('word').join(' ')
        const result = calculateReadingTime(text)
        expect(result).toBeGreaterThan(1)
        expect(result).toBeLessThan(5)
    })

    it('should calculate reading time for long text', () => {
        const text = new Array(2000).fill('word').join(' ')
        const result = calculateReadingTime(text)
        expect(result).toBeGreaterThan(5)
    })

    it('should handle empty string', () => {
        expect(calculateReadingTime('')).toBe(1)
    })

    it('should handle whitespace-only string', () => {
        expect(calculateReadingTime('   \n\t  ')).toBe(1)
    })

    it('should calculate approximately 200 words per minute', () => {
        const text = new Array(200).fill('word').join(' ')
        expect(calculateReadingTime(text)).toBe(1)
    })
})
