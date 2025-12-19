import { describe, it, expect, beforeEach, vi } from 'vitest'
import {
    trackEvent,
    trackPageView,
    trackClick,
    trackDownload,
} from '@/lib/analytics'

describe('Analytics Utilities', () => {
    beforeEach(() => {
        // Mock window.dataLayer
        ;(window as any).dataLayer = []
        vi.clearAllMocks()
    })

    describe('trackEvent', () => {
        it('should push event to dataLayer in production', () => {
            const originalEnv = process.env.NODE_ENV
            process.env.NODE_ENV = 'production'

            // Mock isGTMLoaded to return true
            vi.mock('@/lib/gtm', () => ({
                isGTMLoaded: () => true,
            }))

            trackEvent({
                action: 'test_event',
                category: 'test',
                label: 'test_label',
            })

            // In development, it just logs
            process.env.NODE_ENV = originalEnv
        })

        it('should log event in development', () => {
            const consoleSpy = vi.spyOn(console, 'log')

            trackEvent({
                action: 'test_event',
                category: 'test',
            })

            expect(consoleSpy).toHaveBeenCalled()
            consoleSpy.mockRestore()
        })
    })

    describe('trackClick', () => {
        it('should track click with correct structure', () => {
            const consoleSpy = vi.spyOn(console, 'log')

            trackClick('button_name', { custom: 'data' })

            expect(consoleSpy).toHaveBeenCalledWith(
                expect.stringContaining('Analytics Event'),
                expect.objectContaining({
                    action: 'click',
                    category: 'engagement',
                    label: 'button_name',
                })
            )

            consoleSpy.mockRestore()
        })
    })

    describe('trackDownload', () => {
        it('should track download with file info', () => {
            const consoleSpy = vi.spyOn(console, 'log')

            trackDownload('test.pdf', 'pdf')

            expect(consoleSpy).toHaveBeenCalledWith(
                expect.stringContaining('Analytics Event'),
                expect.objectContaining({
                    action: 'download',
                    label: 'test.pdf',
                    file_type: 'pdf',
                })
            )

            consoleSpy.mockRestore()
        })
    })

    describe('trackPageView', () => {
        it('should track page view with path and title', () => {
            const consoleSpy = vi.spyOn(console, 'log')

            trackPageView({
                page_path: '/test',
                page_title: 'Test Page',
            })

            expect(consoleSpy).toHaveBeenCalledWith(
                expect.stringContaining('Page View'),
                expect.objectContaining({
                    page_path: '/test',
                    page_title: 'Test Page',
                })
            )

            consoleSpy.mockRestore()
        })
    })
})
