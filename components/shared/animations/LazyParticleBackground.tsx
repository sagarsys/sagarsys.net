'use client'

import dynamic from 'next/dynamic'

/**
 * Lazy-loaded ParticleBackground component
 *
 * Performance optimization: Defers loading of the particle animation
 * until after the main content has loaded, improving LCP and TBT.
 *
 * Benefits:
 * - Doesn't block initial page render
 * - Loads after critical content
 * - Better mobile performance
 */
const ParticleBackground = dynamic(() => import('./ParticleBackground'), {
    ssr: false, // Canvas-based, client-only
    loading: () => null, // No loading indicator needed for background
})

export default ParticleBackground
