import { describe, it, expect, beforeEach, vi } from 'vitest'
import {
    getConsent,
    setConsent,
    hasConsent,
    clearConsent,
    shouldShowConsentBanner,
} from '@/lib/consent'

describe('Consent Management', () => {
    beforeEach(() => {
        localStorage.clear()
        vi.clearAllMocks()
    })

    describe('getConsent', () => {
        it('should return null when no consent is stored', () => {
            expect(getConsent()).toBeNull()
        })

        it('should return stored consent preferences', () => {
            const consent = { analytics: true, timestamp: Date.now() }
            localStorage.setItem('cookie-consent', JSON.stringify(consent))

            const result = getConsent()
            expect(result).toEqual(consent)
        })

        it('should return null for expired consent (older than 6 months)', () => {
            const sixMonthsAgo = Date.now() - 7 * 30 * 24 * 60 * 60 * 1000
            const consent = { analytics: true, timestamp: sixMonthsAgo }
            localStorage.setItem('cookie-consent', JSON.stringify(consent))

            expect(getConsent()).toBeNull()
        })

        it('should handle invalid JSON gracefully', () => {
            localStorage.setItem('cookie-consent', 'invalid-json')
            expect(getConsent()).toBeNull()
        })
    })

    describe('setConsent', () => {
        it('should store consent preferences with timestamp', () => {
            setConsent({ analytics: true })

            const stored = localStorage.getItem('cookie-consent')
            expect(stored).toBeTruthy()

            const parsed = JSON.parse(stored!)
            expect(parsed.analytics).toBe(true)
            expect(parsed.timestamp).toBeTypeOf('number')
        })

        it('should dispatch consentChange event', () => {
            const handler = vi.fn()
            window.addEventListener('consentChange', handler)

            setConsent({ analytics: false })

            expect(handler).toHaveBeenCalled()
            window.removeEventListener('consentChange', handler)
        })
    })

    describe('hasConsent', () => {
        it('should return false when no consent', () => {
            expect(hasConsent()).toBe(false)
        })

        it('should return true when analytics consent given', () => {
            setConsent({ analytics: true })
            expect(hasConsent()).toBe(true)
        })

        it('should return false when analytics consent declined', () => {
            setConsent({ analytics: false })
            expect(hasConsent()).toBe(false)
        })
    })

    describe('clearConsent', () => {
        it('should remove consent from localStorage', () => {
            setConsent({ analytics: true })
            clearConsent()

            expect(localStorage.getItem('cookie-consent')).toBeNull()
        })

        it('should dispatch consentChange event', () => {
            const handler = vi.fn()
            window.addEventListener('consentChange', handler)

            clearConsent()

            expect(handler).toHaveBeenCalled()
            window.removeEventListener('consentChange', handler)
        })
    })

    describe('shouldShowConsentBanner', () => {
        it('should return true when no consent stored', () => {
            expect(shouldShowConsentBanner()).toBe(true)
        })

        it('should return false when consent exists', () => {
            setConsent({ analytics: true })
            expect(shouldShowConsentBanner()).toBe(false)
        })
    })
})
