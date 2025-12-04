// Lightweight markdown renderer - supports headings, lists, bold, italic
// No external dependencies, keeps bundle size small
import React from 'react'

export function renderMarkdown(markdown: string): React.ReactElement[] {
    const lines = markdown.split('\n')
    const elements: React.ReactElement[] = []
    let currentList: string[] = []
    let key = 0

    const flushList = () => {
        if (currentList.length > 0) {
            elements.push(
                <ul key={`list-${key++}`} className="space-y-2 my-4">
                    {currentList.map((item, i) => (
                        <li key={i} className="flex gap-3">
                            <span className="text-secondary mt-1">→</span>
                            <span
                                dangerouslySetInnerHTML={{
                                    __html: parseInline(item),
                                }}
                            />
                        </li>
                    ))}
                </ul>
            )
            currentList = []
        }
    }

    const parseInline = (text: string): string => {
        // Bold: **text** or __text__
        text = text.replace(
            /\*\*(.+?)\*\*/g,
            '<strong class="text-secondary font-semibold">$1</strong>'
        )
        text = text.replace(
            /__(.+?)__/g,
            '<strong class="text-secondary font-semibold">$1</strong>'
        )

        // Italic: *text* or _text_
        text = text.replace(/\*(.+?)\*/g, '<em class="text-gray-300">$1</em>')
        text = text.replace(/_(.+?)_/g, '<em class="text-gray-300">$1</em>')

        // Code: `code`
        text = text.replace(
            /`(.+?)`/g,
            '<code class="px-2 py-1 bg-slate-700 rounded text-sm text-secondary">$1</code>'
        )

        return text
    }

    for (let i = 0; i < lines.length; i++) {
        const line = lines[i].trim()

        // Skip empty lines
        if (!line) continue

        // H2 headings: ## Heading
        if (line.startsWith('## ')) {
            flushList()
            const text = line.replace('## ', '')
            elements.push(
                <h3
                    key={`h3-${key++}`}
                    className="text-2xl font-bold text-white mt-8 mb-4"
                >
                    {text}
                </h3>
            )
            continue
        }

        // H3 headings: ### Heading
        if (line.startsWith('### ')) {
            flushList()
            const text = line.replace('### ', '')
            elements.push(
                <h4
                    key={`h4-${key++}`}
                    className="text-xl font-bold text-white mt-6 mb-3"
                >
                    {text}
                </h4>
            )
            continue
        }

        // List items: - item or * item
        if (line.startsWith('- ') || line.startsWith('* ')) {
            const text = line.replace(/^[-*] /, '')
            currentList.push(text)
            continue
        }

        // Regular paragraph
        flushList()
        elements.push(
            <p
                key={`p-${key++}`}
                className="text-gray-300 leading-relaxed mb-4"
                dangerouslySetInnerHTML={{ __html: parseInline(line) }}
            />
        )
    }

    flushList() // Flush any remaining list items
    return elements
}
