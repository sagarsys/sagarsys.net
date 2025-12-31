'use client'

import React from 'react'
import ReactMarkdown from 'react-markdown'
import remarkGfm from 'remark-gfm'
import type { Components } from 'react-markdown'
import { Download, FileText } from 'lucide-react'
import CodeBlock from './CodeBlock'

/**
 * MarkdownRenderer - Lazy-loaded markdown renderer with custom styling
 *
 * This component uses react-markdown to render markdown content with custom
 * Tailwind classes that match the existing design system.
 *
 * Code Splitting: This component is lazy-loaded using Next.js dynamic() imports
 * in the parent components, so it's NOT included in the initial bundle.
 *
 * Syntax Highlighting: Uses Shiki (~30KB) instead of react-syntax-highlighter (~200KB+)
 * for much lighter bundle size with the same VS Code-quality highlighting.
 */
interface MarkdownRendererProps {
    children: string
}

export default function MarkdownRenderer({ children }: MarkdownRendererProps) {
    // Pre-process content to remove unsupported MDX components like <TOCInline>
    const processedContent = children.replace(/<TOCInline[^>]*\/>/g, '')

    // Custom components to match existing styling
    const components: Components = {
        // H2 headings: ## Heading - larger with more breathing room
        h2: ({ children }) => (
            <h2 className="text-3xl font-bold text-white mt-12 mb-5 border-b border-slate-700/50 pb-3">
                {children}
            </h2>
        ),
        // H3 headings: ### Heading
        h3: ({ children }) => (
            <h3 className="text-2xl font-semibold text-white mt-10 mb-4">
                {children}
            </h3>
        ),
        // H4 headings: #### Heading
        h4: ({ children }) => (
            <h4 className="text-xl font-semibold text-gray-100 mt-8 mb-3">
                {children}
            </h4>
        ),
        // Paragraphs - more breathing room
        p: ({ children }) => (
            <p className="text-lg text-gray-100 leading-relaxed mb-6">
                {children}
            </p>
        ),
        // Unordered lists - arrow markers via CSS
        ul: ({ children }) => (
            <ul className="space-y-2 my-4 max-w-full markdown-ul">
                {children}
            </ul>
        ),
        // Ordered lists - native decimal numbering with overflow handling
        ol: ({ children }) => (
            <ol className="space-y-2 my-4 max-w-full markdown-ol pl-6">
                {children}
            </ol>
        ),
        // List items - flex layout with arrow marker and overflow handling
        li: ({ children }) => (
            <li className="markdown-li flex gap-2 text-lg text-gray-100 [&>ul]:mt-2 [&>ol]:mt-2">
                <span className="markdown-li-marker mt-1 flex-shrink-0">→</span>
                <div className="min-w-0 flex-1 overflow-x-auto">{children}</div>
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
            const language = match ? match[1] : 'text'
            const codeString = String(children)

            // Code blocks have newlines, inline code doesn't
            const hasNewlines = codeString.includes('\n')
            const isCodeBlock = hasNewlines || className

            if (!isCodeBlock) {
                return (
                    <code
                        className="px-2 py-1 bg-slate-700 rounded text-sm text-secondary"
                        {...props}
                    >
                        {children}
                    </code>
                )
            }

            // Code blocks with Shiki syntax highlighting
            return (
                <CodeBlock
                    code={codeString.replace(/\n$/, '')}
                    language={language}
                />
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
        // Tables - GitHub Flavored Markdown support
        table: ({ children }) => (
            <div className="overflow-x-auto my-6">
                <table className="min-w-full border-collapse border border-slate-600 rounded-lg overflow-hidden">
                    {children}
                </table>
            </div>
        ),
        thead: ({ children }) => (
            <thead className="bg-slate-800/80">{children}</thead>
        ),
        tbody: ({ children }) => (
            <tbody className="divide-y divide-slate-700">{children}</tbody>
        ),
        tr: ({ children }) => (
            <tr className="hover:bg-slate-700/30 transition-colors">
                {children}
            </tr>
        ),
        th: ({ children }) => (
            <th className="px-4 py-3 text-left text-sm font-semibold text-secondary border-b border-slate-600">
                {children}
            </th>
        ),
        td: ({ children }) => (
            <td className="px-4 py-3 text-sm text-gray-100 border-slate-700">
                {children}
            </td>
        ),
    }

    return (
        <div className="prose prose-invert max-w-none overflow-x-hidden">
            <ReactMarkdown components={components} remarkPlugins={[remarkGfm]}>
                {processedContent}
            </ReactMarkdown>
        </div>
    )
}
