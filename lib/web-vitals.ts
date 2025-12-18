/**
 * Web Vitals measurement utilities
 *
 * Tracks Core Web Vitals and other performance metrics
 */

import { onCLS, onFCP, onLCP, onTTFB, onINP, Metric } from 'web-vitals'

export interface WebVitalsReport {
    name: string
    value: number
    rating: 'good' | 'needs-improvement' | 'poor'
    delta: number
    id: string
    navigationType: string
}

/**
 * Web Vitals thresholds
 */
export const VITALS_THRESHOLDS = {
    LCP: { good: 2500, poor: 4000 }, // Largest Contentful Paint (ms)
    CLS: { good: 0.1, poor: 0.25 }, // Cumulative Layout Shift
    FCP: { good: 1800, poor: 3000 }, // First Contentful Paint (ms)
    TTFB: { good: 600, poor: 800 }, // Time to First Byte (ms)
    INP: { good: 200, poor: 500 }, // Interaction to Next Paint (ms) - replaces FID
}

/**
 * Get rating for a metric value
 */
export function getRating(
    name: string,
    value: number
): 'good' | 'needs-improvement' | 'poor' {
    const thresholds = VITALS_THRESHOLDS[name as keyof typeof VITALS_THRESHOLDS]
    if (!thresholds) return 'good'

    if (value <= thresholds.good) return 'good'
    if (value <= thresholds.poor) return 'needs-improvement'
    return 'poor'
}

/**
 * Format metric for logging/reporting
 */
export function formatMetric(metric: Metric): WebVitalsReport {
    return {
        name: metric.name,
        value: metric.value,
        rating: getRating(metric.name, metric.value),
        delta: metric.delta,
        id: metric.id,
        navigationType: metric.navigationType,
    }
}

/**
 * Log metric to console (development only)
 */
export function logMetric(metric: Metric) {
    if (process.env.NODE_ENV !== 'development') return

    const report = formatMetric(metric)
    const emoji =
        report.rating === 'good'
            ? '✅'
            : report.rating === 'needs-improvement'
            ? '⚠️'
            : '❌'

    console.log(
        `${emoji} ${report.name}: ${Math.round(report.value)}ms (${
            report.rating
        })`
    )
}

/**
 * Send metric to analytics
 *
 * Integrates with Google Analytics via GTM/GA4
 */
export function sendToAnalytics(metric: Metric) {
    const report = formatMetric(metric)

    // Log in development
    logMetric(metric)

    // Send to Google Analytics if available
    if (typeof window !== 'undefined') {
        // Try GTM data layer first
        if ((window as any).dataLayer) {
            ;(window as any).dataLayer.push({
                event: 'web_vitals',
                event_category: 'Web Vitals',
                event_label: report.name,
                value: Math.round(report.value),
                metric_id: report.id,
                metric_value: Math.round(report.value),
                metric_delta: Math.round(report.delta),
                metric_rating: report.rating,
                non_interaction: true,
            })
        }

        // Also try direct gtag if available
        if ((window as any).gtag) {
            ;(window as any).gtag('event', report.name, {
                event_category: 'Web Vitals',
                event_label: report.name,
                value: Math.round(report.value),
                metric_id: report.id,
                metric_delta: Math.round(report.delta),
                metric_rating: report.rating,
                non_interaction: true,
            })
        }
    }
}

/**
 * Initialize Web Vitals tracking
 */
export function initWebVitals() {
    if (typeof window === 'undefined') return

    // Track all Core Web Vitals
    onCLS(sendToAnalytics)
    onFCP(sendToAnalytics)
    onLCP(sendToAnalytics)
    onTTFB(sendToAnalytics)
    onINP(sendToAnalytics) // Interaction to Next Paint (replaces FID as Core Web Vital)
}
