'use client'

import { useEffect } from 'react'

/**
 * ServiceWorkerRegistration component
 *
 * Manually registers the service worker for static export builds.
 * This is needed because next-pwa's auto-registration doesn't work
 * properly with static export mode.
 */
export default function ServiceWorkerRegistration() {
    useEffect(() => {
        if (
            typeof window === 'undefined' ||
            !('serviceWorker' in navigator) ||
            typeof caches === 'undefined'
        ) {
            return
        }

        const registerServiceWorker = async () => {
            try {
                const registration = await navigator.serviceWorker.register(
                    '/sw.js',
                    {
                        scope: '/',
                    }
                )

                // Listen for updates
                registration.addEventListener('updatefound', () => {
                    // Service worker update available
                })
            } catch (error) {
                console.error('Service worker registration failed:', error)
            }
        }

        // Wait for page load before registering
        if (document.readyState === 'complete') {
            registerServiceWorker()
        } else {
            window.addEventListener('load', registerServiceWorker)
        }
    }, [])

    return null
}
