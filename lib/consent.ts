/**
 * Cookie consent management utilities
 *
 * Handles GDPR-compliant cookie consent for analytics and tracking
 */

export type ConsentPreferences = {
    analytics: boolean
    timestamp: number
}

const CONSENT_KEY = 'cookie-consent'
const CONSENT_VERSION = '1.0'

/**
 * Get stored consent preferences
 */
export function getConsent(): ConsentPreferences | null {
    if (typeof window === 'undefined') return null

    try {
        const stored = localStorage.getItem(CONSENT_KEY)
        if (!stored) return null

        const data = JSON.parse(stored)
        // Check if consent is still valid (optional: expire after 6 months)
        const sixMonthsAgo = Date.now() - 6 * 30 * 24 * 60 * 60 * 1000
        if (data.timestamp < sixMonthsAgo) {
            return null
        }

        return data
    } catch {
        return null
    }
}

/**
 * Save consent preferences
 */
export function setConsent(preferences: Omit<ConsentPreferences, 'timestamp'>) {
    if (typeof window === 'undefined') return

    const data: ConsentPreferences = {
        ...preferences,
        timestamp: Date.now(),
    }

    try {
        localStorage.setItem(CONSENT_KEY, JSON.stringify(data))
        // Dispatch event for components to react to consent changes
        window.dispatchEvent(
            new CustomEvent('consentChange', { detail: preferences })
        )
    } catch (error) {
        console.error('Failed to save consent preferences:', error)
    }
}

/**
 * Check if user has given consent
 */
export function hasConsent(): boolean {
    const consent = getConsent()
    return consent?.analytics === true
}

/**
 * Clear consent preferences
 */
export function clearConsent() {
    if (typeof window === 'undefined') return

    try {
        localStorage.removeItem(CONSENT_KEY)
        window.dispatchEvent(new CustomEvent('consentChange', { detail: null }))
    } catch (error) {
        console.error('Failed to clear consent preferences:', error)
    }
}

/**
 * Check if consent banner should be shown
 */
export function shouldShowConsentBanner(): boolean {
    return getConsent() === null
}
