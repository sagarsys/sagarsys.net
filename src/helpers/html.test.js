import { safeParseHtmlString } from './html';
import DOMPurify from 'isomorphic-dompurify';

jest.mock('isomorphic-dompurify');

describe('safeParseHtmlString', () => {
    it('returns sanitized HTML string', () => {
        const htmlString = '<div>Test</div>';
        const sanitizedHtml = '<div>Test</div>';
        DOMPurify.sanitize.mockReturnValue(sanitizedHtml);

        const result = safeParseHtmlString(htmlString);

        expect(result).toEqual({ __html: sanitizedHtml });
        expect(DOMPurify.sanitize).toHaveBeenCalledWith(htmlString);
    });

    it('returns empty HTML string when input is empty', () => {
        const htmlString = '';
        const sanitizedHtml = '';
        DOMPurify.sanitize.mockReturnValue(sanitizedHtml);

        const result = safeParseHtmlString(htmlString);

        expect(result).toEqual({ __html: sanitizedHtml });
        expect(DOMPurify.sanitize).toHaveBeenCalledWith(htmlString);
    });

    it('returns sanitized HTML string with special characters', () => {
        const htmlString = '<div>Test & <script>alert("XSS")</script></div>';
        const sanitizedHtml = '<div>Test &amp; </div>';
        DOMPurify.sanitize.mockReturnValue(sanitizedHtml);

        const result = safeParseHtmlString(htmlString);

        expect(result).toEqual({ __html: sanitizedHtml });
        expect(DOMPurify.sanitize).toHaveBeenCalledWith(htmlString);
    });
});