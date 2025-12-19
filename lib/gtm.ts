/**
 * Google Tag Manager (GTM) utilities
 *
 * Implements lazy loading for GTM to improve initial page load performance
 */

declare global {
    interface Window {
        dataLayer: any[]
        gtag: (...args: any[]) => void
    }
}

let gtmLoaded = false
let gtmLoadPromise: Promise<void> | null = null

/**
 * Check if Do Not Track is enabled
 */
export function isDNTEnabled(): boolean {
    if (typeof window === 'undefined') return false

    const dnt =
        navigator.doNotTrack ||
        (window as any).doNotTrack ||
        (navigator as any).msDoNotTrack

    return dnt === '1' || dnt === 'yes'
}

/**
 * Initialize GTM data layer with consent defaults (always denied initially)
 */
function initDataLayer() {
    window.dataLayer = window.dataLayer || []
    window.gtag = function gtag() {
        window.dataLayer.push(arguments)
    }

    // Set consent defaults to denied - this MUST happen before GTM loads
    window.gtag('consent', 'default', {
        analytics_storage: 'denied',
        ad_storage: 'denied',
        ad_user_data: 'denied',
        ad_personalization: 'denied',
    })
    console.log('GTM: Consent defaults set to denied')
}

/**
 * Update consent state - call this when user accepts cookies
 */
export function updateGTMConsent(granted: boolean) {
    if (typeof window === 'undefined' || !window.gtag) return

    const state = granted ? 'granted' : 'denied'
    window.gtag('consent', 'update', {
        analytics_storage: state,
        ad_storage: state,
        ad_user_data: state,
        ad_personalization: state,
    })
    console.log(`GTM: Consent updated to ${state}`)
}

/**
 * Load GTM script
 * @param gtmId - Google Tag Manager container ID
 * @param hasConsent - Whether user has already given consent
 */
export function loadGTM(
    gtmId: string,
    hasConsent: boolean = false
): Promise<void> {
    // Return existing promise if already loading
    if (gtmLoadPromise) return gtmLoadPromise

    // Return resolved promise if already loaded
    if (gtmLoaded) return Promise.resolve()

    // Check for GTM ID
    if (!gtmId) {
        console.warn('GTM ID not provided')
        return Promise.resolve()
    }

    // Respect Do Not Track
    if (isDNTEnabled()) {
        console.log('GTM: Do Not Track is enabled, skipping analytics')
        return Promise.resolve()
    }

    gtmLoadPromise = new Promise<void>((resolve, reject) => {
        try {
            // Initialize data layer with consent defaults (denied)
            initDataLayer()

            // Create script element
            const script = document.createElement('script')
            script.async = true
            script.src = `https://www.googletagmanager.com/gtm.js?id=${gtmId}`

            script.onload = () => {
                gtmLoaded = true
                console.log('GTM: Script loaded successfully')

                // IMPORTANT: Send consent update AFTER GTM has loaded
                // This ensures GTM processes the consent change and fires GA4 tags
                if (hasConsent) {
                    // Small delay to ensure GTM has fully initialized
                    setTimeout(() => {
                        window.gtag('consent', 'update', {
                            analytics_storage: 'granted',
                            ad_storage: 'granted',
                            ad_user_data: 'granted',
                            ad_personalization: 'granted',
                        })
                        console.log(
                            'GTM: Consent updated to granted (post-load)'
                        )
                    }, 100)
                }

                resolve()
            }

            script.onerror = () => {
                console.error('GTM: Failed to load script')
                reject(new Error('Failed to load GTM script'))
            }

            // Append to document
            document.head.appendChild(script)
        } catch (error) {
            console.error('GTM: Error loading script', error)
            reject(error)
        }
    })

    return gtmLoadPromise
}

/**
 * Setup lazy loading for GTM
 * Loads after user interaction or after a delay
 * @param gtmId - Google Tag Manager container ID
 * @param delayMs - Delay in milliseconds before loading
 * @param hasConsent - Whether user has already given consent
 */
export function setupLazyGTM(
    gtmId: string,
    delayMs: number = 5000,
    hasConsent: boolean = false
) {
    if (typeof window === 'undefined') return

    let loaded = false

    const load = () => {
        if (loaded) return
        loaded = true
        loadGTM(gtmId, hasConsent)
    }

    // Load after delay
    setTimeout(load, delayMs)

    // Load on first user interaction
    const events = ['mousedown', 'touchstart', 'keydown', 'scroll']
    const loadOnce = () => {
        load()
        events.forEach((event) => {
            document.removeEventListener(event, loadOnce)
        })
    }

    events.forEach((event) => {
        document.addEventListener(event, loadOnce, { passive: true })
    })
}

/**
 * Check if GTM is loaded
 */
export function isGTMLoaded(): boolean {
    return gtmLoaded && typeof window !== 'undefined' && !!window.dataLayer
}
