'use client'

import { useEffect, useState } from 'react'
import { codeToHtml } from 'shiki'

/**
 * CodeBlock - Syntax highlighted code block using Shiki
 *
 * Shiki is much lighter than react-syntax-highlighter (~30KB vs ~200KB+)
 * and uses the same highlighting engine as VS Code.
 */
interface CodeBlockProps {
    code: string
    language: string
}

export default function CodeBlock({ code, language }: CodeBlockProps) {
    const [html, setHtml] = useState<string>('')
    const [isLoading, setIsLoading] = useState(true)

    useEffect(() => {
        const highlight = async () => {
            try {
                const highlighted = await codeToHtml(code, {
                    lang: language || 'text',
                    theme: 'night-owl',
                })
                setHtml(highlighted)
            } catch {
                // Fallback for unsupported languages
                const escaped = code
                    .replace(/&/g, '&amp;')
                    .replace(/</g, '&lt;')
                    .replace(/>/g, '&gt;')
                setHtml(`<pre class="shiki"><code>${escaped}</code></pre>`)
            } finally {
                setIsLoading(false)
            }
        }
        highlight()
    }, [code, language])

    if (isLoading) {
        return (
            <div className="rounded-lg bg-slate-800 p-4 my-4 overflow-x-auto">
                <pre className="text-sm text-gray-400">
                    <code>{code}</code>
                </pre>
            </div>
        )
    }

    return (
        <div
            className="shiki-wrapper rounded-lg my-4 overflow-x-auto text-sm [&>pre]:p-4 [&>pre]:rounded-lg [&>pre]:overflow-x-auto"
            dangerouslySetInnerHTML={{ __html: html }}
        />
    )
}
