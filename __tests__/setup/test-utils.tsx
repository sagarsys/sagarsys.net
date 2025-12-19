import { ReactElement } from 'react'
import { render, RenderOptions } from '@testing-library/react'
import { Providers } from '@/app/providers'

/**
 * Custom render function that includes providers
 */
function customRender(
    ui: ReactElement,
    options?: Omit<RenderOptions, 'wrapper'>
) {
    return render(ui, {
        wrapper: ({ children }) => <Providers>{children}</Providers>,
        ...options,
    })
}

// Re-export everything
export * from '@testing-library/react'
export { customRender as render }

// Mock data helpers
export const mockContactInfo = {
    email: 'test@example.com',
    github: 'https://github.com/test',
    linkedin: 'https://linkedin.com/in/test',
    twitter: 'https://twitter.com/test',
    instagram: 'https://instagram.com/test',
    youtube: 'https://youtube.com/test',
    soundcloud: 'https://soundcloud.com/test',
    stackblitz: 'https://stackblitz.com/test',
    codeSandbox: 'https://codesandbox.io/test',
    kvk: '12345678',
    vat: 'NL123456789B01',
    tradeName: 'Test Company',
}

export const mockProject = {
    slug: 'test-project',
    frontmatter: {
        title: 'Test Project',
        description: 'A test project description',
        tech: ['React', 'TypeScript', 'Next.js'],
        featured: true,
        source: 'github' as const,
        liveUrl: 'https://example.com',
        githubUrl: 'https://github.com/test/repo',
        stars: 100,
        forks: 20,
        images: {
            thumb: '/images/test-thumb.png',
        },
    },
    content: 'Test project content',
}

export const mockBlogPost = {
    slug: 'test-post',
    frontmatter: {
        title: 'Test Blog Post',
        description: 'A test blog post',
        date: '2024-01-01',
        categories: ['Tech'],
        tags: ['JavaScript', 'React'],
        image: '/images/test-post.png',
        author: 'Test Author',
    },
    content: 'Test content',
}
