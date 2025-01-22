import DOMPurify from 'isomorphic-dompurify'


export function safeParseHtmlString(htmlString) {
    const sanitizedHtml = DOMPurify.sanitize(htmlString)

    return { __html: sanitizedHtml }
}