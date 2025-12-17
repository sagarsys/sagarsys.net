'use client'

import React from 'react'
import ReactMarkdown from 'react-markdown'
import type { Components } from 'react-markdown'
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter'
import { nightOwl as theme } from 'react-syntax-highlighter/dist/cjs/styles/prism'
import { Download, FileText } from 'lucide-react'

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
            <p className="text-lg text-gray-100 leading-relaxed mb-4">
                {children}
            </p>
        ),
        // Unordered lists - CSS will handle nested styling
        ul: ({ children }) => (
            <ul className="space-y-2 my-4 list-none markdown-ul">{children}</ul>
        ),
        // Ordered lists - CSS will handle nested styling
        ol: ({ children }) => (
            <ol className="space-y-2 my-4 ml-6 markdown-ol">{children}</ol>
        ),
        // List items with custom markers - CSS will handle different levels
        li: ({ children }) => (
            <li className="markdown-li flex gap-3 text-lg text-gray-100">
                <span className="markdown-li-marker mt-1 flex-shrink-0">→</span>
                <span>{children}</span>
            </li>
        ),
        // Links - with special styling for PDF files
        a: ({ href, children }) => {
            const isPdf = href?.toLowerCase().endsWith('.pdf')

            if (isPdf) {
                return (
                    <a
                        href={href}
                        download
                        className="inline-flex items-center gap-2 px-4 py-2 my-2 bg-secondary/20 hover:bg-secondary/30 border border-secondary/30 rounded-lg text-secondary hover:text-orange-500 transition-all group"
                    >
                        <FileText className="w-4 h-4" />
                        <span className="font-medium">{children}</span>
                        <Download className="w-4 h-4 group-hover:translate-y-0.5 transition-transform" />
                    </a>
                )
            }

            return (
                <a
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-secondary hover:underline hover:text-orange-500 transition-colors"
                >
                    {children}
                </a>
            )
        },
        // Code blocks and inline code
        code: ({ children, className, ...props }) => {
            // Check if it's a code block (has className with language) or inline code
            const match = /language-(\w+)/.exec(className || '')
            const language = match ? match[1] : ''
            const isInline = !className || !match

            if (isInline) {
                return (
                    <code
                        className="px-2 py-1 bg-slate-700 rounded text-sm text-secondary"
                        {...props}
                    >
                        {children}
                    </code>
                )
            }

            // Code blocks with syntax highlighting
            return (
                <SyntaxHighlighter
                    language={language}
                    style={theme as any}
                    customStyle={{
                        borderRadius: '0.5rem',
                        padding: '1rem',
                        margin: '1rem 0',
                        fontSize: '0.875rem',
                        lineHeight: '1.5',
                    }}
                    PreTag="div"
                >
                    {String(children).replace(/\n$/, '')}
                </SyntaxHighlighter>
            )
        },
        // Bold text
        strong: ({ children }) => (
            <strong className="text-secondary font-semibold">{children}</strong>
        ),
        // Italic text
        em: ({ children }) => (
            <em className="italic text-gray-100">{children}</em>
        ),
    }

    return (
        <div className="prose prose-invert max-w-none">
            <ReactMarkdown components={components}>{children}</ReactMarkdown>
        </div>
    )
}
