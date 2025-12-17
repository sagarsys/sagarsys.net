'use client'

import React from 'react'
import ReactMarkdown from 'react-markdown'
import type { Components } from 'react-markdown'

/**
 * MarkdownRenderer - Lazy-loaded markdown renderer with custom styling
 *
 * This component uses react-markdown to render markdown content with custom
 * Tailwind classes that match the existing design system.
 *
 * Code Splitting: This component is lazy-loaded using Next.js dynamic() imports
 * in the parent components, so the ~60KB react-markdown library is NOT included
 * in the initial bundle. It only loads when markdown content needs to be rendered.
 */
interface MarkdownRendererProps {
    children: string
}

export default function MarkdownRenderer({ children }: MarkdownRendererProps) {
    // Custom components to match existing styling
    const components: Components = {
        // H2 headings: ## Heading
        h2: ({ children }) => (
            <h2 className="text-2xl font-bold text-white mt-8 mb-4">
                {children}
            </h2>
        ),
        // H3 headings: ### Heading
        h3: ({ children }) => (
            <h3 className="text-xl font-bold text-white mt-6 mb-3">
                {children}
            </h3>
        ),
        // Paragraphs
        p: ({ children }) => (
            <p className="text-gray-300 leading-relaxed mb-4">{children}</p>
        ),
        // Unordered lists
        ul: ({ children }) => <ul className="space-y-2 my-4">{children}</ul>,
        // List items with custom arrow icon (matching current design)
        li: ({ children }) => (
            <li className="flex gap-3">
                <span className="text-secondary mt-1">→</span>
                <span>{children}</span>
            </li>
        ),
        // Links
        a: ({ href, children }) => (
            <a
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-secondary hover:underline hover:text-orange-500 transition-colors"
            >
                {children}
            </a>
        ),
        // Inline code
        code: ({ children, className }) => {
            // Check if it's a code block (has className) or inline code
            const isInline = !className
            if (isInline) {
                return (
                    <code className="px-2 py-1 bg-slate-700 rounded text-sm text-secondary">
                        {children}
                    </code>
                )
            }
            // Code blocks (```code```)
            return <code className={className}>{children}</code>
        },
        // Bold text
        strong: ({ children }) => (
            <strong className="text-secondary font-semibold">{children}</strong>
        ),
        // Italic text
        em: ({ children }) => (
            <em className="italic text-gray-300">{children}</em>
        ),
    }

    return (
        <div className="prose prose-invert max-w-none">
            <ReactMarkdown components={components}>{children}</ReactMarkdown>
        </div>
    )
}
