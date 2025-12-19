'use client'

import { useEffect } from 'react'

/**
 * Fixes hydration mismatches caused by browser extensions
 * that add data-cursor-ref attributes to DOM elements.
 * This component removes these attributes after hydration to prevent
 * React hydration errors.
 */
export default function HydrationFix() {
    useEffect(() => {
        // Remove data-cursor-ref attributes added by browser extensions
        const removeCursorRefs = () => {
            const elements = document.querySelectorAll('[data-cursor-ref]')
            elements.forEach((el) => {
                el.removeAttribute('data-cursor-ref')
            })
        }

        // Run immediately and also observe for dynamically added attributes
        removeCursorRefs()

        // Use MutationObserver to watch for new attributes added by extensions
        const observer = new MutationObserver((mutations) => {
            let shouldClean = false
            mutations.forEach((mutation) => {
                if (
                    mutation.type === 'attributes' &&
                    mutation.attributeName === 'data-cursor-ref'
                ) {
                    shouldClean = true
                }
                if (mutation.type === 'childList') {
                    mutation.addedNodes.forEach((node) => {
                        if (
                            node.nodeType === Node.ELEMENT_NODE &&
                            (node as Element).hasAttribute('data-cursor-ref')
                        ) {
                            shouldClean = true
                        }
                    })
                }
            })

            if (shouldClean) {
                removeCursorRefs()
            }
        })

        // Observe the entire document for attribute changes
        observer.observe(document.body, {
            attributes: true,
            attributeFilter: ['data-cursor-ref'],
            childList: true,
            subtree: true,
        })

        return () => {
            observer.disconnect()
        }
    }, [])

    return null
}
