import { describe, it, expect } from 'vitest'
import { render, screen } from '@/__tests__/setup/test-utils'
import { axe } from 'vitest-axe'
import BlogPostCard from '@/components/features/blog/BlogPostCard'
import { mockBlogPost } from '@/__tests__/setup/test-utils'

describe('BlogPostCard', () => {
    it('should render blog post information', () => {
        render(<BlogPostCard post={mockBlogPost} />)

        expect(
            screen.getByText(mockBlogPost.frontmatter.title)
        ).toBeInTheDocument()
        expect(
            screen.getByText(mockBlogPost.frontmatter.description)
        ).toBeInTheDocument()
    })

    it('should display categories', () => {
        render(<BlogPostCard post={mockBlogPost} />)

        mockBlogPost.frontmatter.categories?.forEach((category) => {
            expect(screen.getByText(category)).toBeInTheDocument()
        })
    })

    it('should have proper link to blog post', () => {
        render(<BlogPostCard post={mockBlogPost} />)

        const link = screen.getByRole('link')
        expect(link).toHaveAttribute('href', `/blog/${mockBlogPost.slug}`)
    })

    it('should not have accessibility violations', async () => {
        const { container } = render(<BlogPostCard post={mockBlogPost} />)
        const results = await axe(container)
        expect(results).toHaveNoViolations()
    })
})
