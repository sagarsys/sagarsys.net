// Global color gradient system - rotates every 30 seconds
// Used for: headings, underlines, emphasized text, logo, timeline, hover effects

export const COLOR_GRADIENTS = [
    {
        name: 'purple-pink',
        light: {
            from: '#9333ea', // purple-600
            via: '#ec4899', // pink-600
            to: '#9333ea',
        },
        dark: {
            from: '#a78bfa', // purple-400
            via: '#f472b6', // pink-400
            to: '#a78bfa',
        },
    },
    {
        name: 'blue-cyan',
        light: {
            from: '#2563eb', // blue-600
            via: '#06b6d4', // cyan-500
            to: '#2563eb',
        },
        dark: {
            from: '#60a5fa', // blue-400
            via: '#22d3ee', // cyan-400
            to: '#60a5fa',
        },
    },
    {
        name: 'orange-red',
        light: {
            from: '#ea580c', // orange-600
            via: '#dc2626', // red-600
            to: '#ea580c',
        },
        dark: {
            from: '#fb923c', // orange-400
            via: '#f87171', // red-400
            to: '#fb923c',
        },
    },
    {
        name: 'green-emerald',
        light: {
            from: '#16a34a', // green-600
            via: '#059669', // emerald-600
            to: '#16a34a',
        },
        dark: {
            from: '#4ade80', // green-400
            via: '#34d399', // emerald-400
            to: '#4ade80',
        },
    },
    {
        name: 'violet-fuchsia',
        light: {
            from: '#7c3aed', // violet-600
            via: '#c026d3', // fuchsia-600
            to: '#7c3aed',
        },
        dark: {
            from: '#a78bfa', // violet-400
            via: '#e879f9', // fuchsia-400
            to: '#a78bfa',
        },
    },
]

// Rotate interval in milliseconds (30 seconds)
export const COLOR_ROTATION_INTERVAL = 30000

// Get current gradient index based on time
export function getCurrentGradientIndex(): number {
    if (typeof window === 'undefined') return 0
    const now = Date.now()
    const index =
        Math.floor(now / COLOR_ROTATION_INTERVAL) % COLOR_GRADIENTS.length
    return index
}

// Get CSS gradient string
export function getGradientString(isDark: boolean = false): string {
    const index = getCurrentGradientIndex()
    const gradient = COLOR_GRADIENTS[index]
    const colors = isDark ? gradient.dark : gradient.light

    return `linear-gradient(135deg, ${colors.from} 0%, ${colors.via} 50%, ${colors.to} 100%)`
}

// Get gradient for text (bg-clip)
export function getTextGradientClass(isDark: boolean = false): string {
    const index = getCurrentGradientIndex()
    const gradient = COLOR_GRADIENTS[index]
    const colors = isDark ? gradient.dark : gradient.light

    return `from-[${colors.from}] via-[${colors.via}] to-[${colors.to}]`
}
