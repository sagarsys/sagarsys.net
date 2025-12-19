/**
 * Accessibility utilities
 *
 * Helpers for ARIA attributes and screen reader support
 */

/**
 * Generate unique ID for ARIA relationships
 */
export function generateA11yId(prefix: string): string {
    return `${prefix}-${Math.random().toString(36).substr(2, 9)}`
}

/**
 * Get ARIA props for external links
 */
export function getExternalLinkProps() {
    return {
        target: '_blank',
        rel: 'noopener noreferrer',
        'aria-label': 'Opens in new tab',
    }
}

/**
 * Get ARIA props for icon-only buttons
 */
export function getIconButtonProps(label: string) {
    return {
        'aria-label': label,
        role: 'button',
    }
}

/**
 * Get ARIA props for dialogs/modals
 */
export function getDialogProps(
    titleId: string,
    descriptionId?: string
): Record<string, string | boolean> {
    return {
        role: 'dialog',
        'aria-modal': 'true',
        'aria-labelledby': titleId,
        ...(descriptionId && { 'aria-describedby': descriptionId }),
    }
}

/**
 * Get ARIA props for navigation menus
 */
export function getNavigationProps(label: string = 'Main navigation') {
    return {
        role: 'navigation',
        'aria-label': label,
    }
}

/**
 * Get ARIA props for live regions
 */
export function getLiveRegionProps(
    politeness: 'polite' | 'assertive' = 'polite'
) {
    return {
        'aria-live': politeness,
        'aria-atomic': 'true',
    }
}

/**
 * Get ARIA props for tab panels
 */
export function getTabPanelProps(id: string, labelledBy: string) {
    return {
        role: 'tabpanel',
        id,
        'aria-labelledby': labelledBy,
    }
}

/**
 * Get ARIA props for expandable sections
 */
export function getExpandableProps(
    isExpanded: boolean,
    controlsId: string
): Record<string, string | boolean> {
    return {
        'aria-expanded': isExpanded,
        'aria-controls': controlsId,
    }
}

/**
 * Announce message to screen readers
 */
export function announceToScreenReader(
    message: string,
    politeness: 'polite' | 'assertive' = 'polite'
) {
    const announcement = document.createElement('div')
    announcement.setAttribute('role', 'status')
    announcement.setAttribute('aria-live', politeness)
    announcement.setAttribute('aria-atomic', 'true')
    announcement.className = 'sr-only'
    announcement.textContent = message

    document.body.appendChild(announcement)

    // Remove after announcement
    setTimeout(() => {
        document.body.removeChild(announcement)
    }, 1000)
}
