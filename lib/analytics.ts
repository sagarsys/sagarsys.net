/**
 * Analytics utilities
 *
 * Provides a unified interface for tracking events across different analytics platforms
 */

import { isGTMLoaded } from './gtm'

export interface AnalyticsEvent {
    action: string
    category?: string
    label?: string
    value?: number
    [key: string]: any
}

export interface PageViewEvent {
    page_path: string
    page_title?: string
    page_location?: string
}

/**
 * Track a custom event
 */
export function trackEvent(event: AnalyticsEvent) {
    // Log in development
    if (process.env.NODE_ENV === 'development') {
        console.log('📊 Analytics Event:', event)
        return
    }

    // Send to GTM if loaded
    if (typeof window !== 'undefined' && isGTMLoaded()) {
        window.dataLayer.push({
            event: event.action,
            event_category: event.category,
            event_label: event.label,
            event_value: event.value,
            ...event,
        })
    }
}

/**
 * Track a page view
 */
export function trackPageView(data: PageViewEvent) {
    // Log in development
    if (process.env.NODE_ENV === 'development') {
        console.log('📄 Page View:', data)
        return
    }

    // Send to GTM if loaded
    if (typeof window !== 'undefined' && isGTMLoaded()) {
        window.dataLayer.push({
            event: 'page_view',
            page_path: data.page_path,
            page_title: data.page_title || document.title,
            page_location: data.page_location || window.location.href,
        })
    }
}

/**
 * Track a click event
 */
export function trackClick(
    elementName: string,
    additionalData?: Record<string, any>
) {
    trackEvent({
        action: 'click',
        category: 'engagement',
        label: elementName,
        ...additionalData,
    })
}

/**
 * Track a form submission
 */
export function trackFormSubmit(
    formName: string,
    additionalData?: Record<string, any>
) {
    trackEvent({
        action: 'form_submit',
        category: 'engagement',
        label: formName,
        ...additionalData,
    })
}

/**
 * Track a download
 */
export function trackDownload(fileName: string, fileType?: string) {
    trackEvent({
        action: 'download',
        category: 'engagement',
        label: fileName,
        file_type: fileType,
    })
}

/**
 * Track scroll depth
 */
export function trackScrollDepth(depth: number) {
    trackEvent({
        action: 'scroll',
        category: 'engagement',
        label: `${depth}%`,
        value: depth,
    })
}

/**
 * Track outbound link click
 */
export function trackOutboundLink(url: string) {
    trackEvent({
        action: 'outbound_link',
        category: 'engagement',
        label: url,
        outbound_url: url,
    })
}

/**
 * Track search
 */
export function trackSearch(searchTerm: string, resultsCount?: number) {
    trackEvent({
        action: 'search',
        category: 'engagement',
        label: searchTerm,
        search_term: searchTerm,
        results_count: resultsCount,
    })
}

/**
 * Track custom conversion
 */
export function trackConversion(
    conversionName: string,
    value?: number,
    currency?: string
) {
    trackEvent({
        action: 'conversion',
        category: 'conversions',
        label: conversionName,
        value: value,
        currency: currency || 'EUR',
    })
}
