/**
 * Lighthouse CI configuration
 *
 * Defines performance budgets and thresholds for Lighthouse audits
 */

module.exports = {
    ci: {
        collect: {
            url: ['http://localhost:3000/'],
            startServerCommand: 'npm run start',
            startServerReadyPattern: 'ready',
            startServerReadyTimeout: 10000,
            numberOfRuns: 3, // Run 3 times and take median
        },
        assert: {
            assertions: {
                'categories:performance': ['error', { minScore: 0.9 }],
                'categories:accessibility': ['error', { minScore: 0.95 }],
                'categories:best-practices': ['error', { minScore: 0.9 }],
                'categories:seo': ['error', { minScore: 0.9 }],
                'categories:pwa': ['error', { minScore: 1.0 }], // PWA should be perfect

                // Core Web Vitals
                'largest-contentful-paint': [
                    'error',
                    { maxNumericValue: 2500 },
                ],
                'interaction-to-next-paint': [
                    'error',
                    { maxNumericValue: 200 },
                ], // INP replaces FID
                'cumulative-layout-shift': ['error', { maxNumericValue: 0.1 }],
                'first-contentful-paint': ['error', { maxNumericValue: 1800 }],
                'total-blocking-time': ['error', { maxNumericValue: 200 }],

                // Performance metrics
                'speed-index': ['error', { maxNumericValue: 3400 }],
                interactive: ['error', { maxNumericValue: 3800 }],
                'server-response-time': ['error', { maxNumericValue: 600 }],

                // Resource budgets
                'total-byte-weight': ['error', { maxNumericValue: 2000000 }], // 2MB
                'dom-size': ['warn', { maxNumericValue: 1500 }],

                // Image optimization
                'uses-optimized-images': 'error',
                'uses-webp-images': 'warn',
                'uses-responsive-images': 'warn',

                // PWA requirements
                'installable-manifest': 'error',
                'service-worker': 'error',
                'offline-start-url': 'error',
                'works-offline': 'error',
            },
        },
        upload: {
            target: 'temporary-public-storage',
        },
    },
}
