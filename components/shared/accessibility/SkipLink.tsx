/**
 * SkipLink component
 *
 * Allows keyboard users to skip directly to main content
 * Only visible when focused
 */
export default function SkipLink() {
    return (
        <a
            href="#main-content"
            className="skip-link sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-[100] focus:px-4 focus:py-2 focus:bg-secondary focus:text-white focus:rounded-lg focus:shadow-lg focus:outline-none"
        >
            Skip to main content
        </a>
    )
}
