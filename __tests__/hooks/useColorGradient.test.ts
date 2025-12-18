import { describe, it, expect } from 'vitest'
import { renderHook } from '@testing-library/react'
import { useColorGradient } from '@/hooks/useColorGradient'

describe('useColorGradient', () => {
    it('should return gradient colors', () => {
        const { result } = renderHook(() => useColorGradient())

        expect(result.current.colors).toHaveProperty('from')
        expect(result.current.colors).toHaveProperty('via')
        expect(result.current.colors).toHaveProperty('to')
    })

    it('should return mounted state', () => {
        const { result } = renderHook(() => useColorGradient())

        expect(typeof result.current.mounted).toBe('boolean')
    })

    it('should return valid color hex codes', () => {
        const { result } = renderHook(() => useColorGradient())

        const hexPattern = /^#[0-9A-F]{6}$/i

        expect(result.current.colors.from).toMatch(hexPattern)
        expect(result.current.colors.via).toMatch(hexPattern)
        expect(result.current.colors.to).toMatch(hexPattern)
    })
})
