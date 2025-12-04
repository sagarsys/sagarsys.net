import type { Metadata, Viewport } from 'next'
import { Titillium_Web, Play } from 'next/font/google'
import './globals.css'
import { Providers } from './providers'

const titilliumWeb = Titillium_Web({
    weight: ['300', '400', '600', '700'],
    subsets: ['latin'],
    variable: '--font-primary',
    display: 'swap',
})

const play = Play({
    weight: ['400', '700'],
    subsets: ['latin'],
    variable: '--font-secondary',
    display: 'swap',
})

export const metadata: Metadata = {
    title: 'Sagar Sawuck | Full Stack Developer',
    description:
        'Full Stack Developer with expertise in React, Next.js, TypeScript, and modern web technologies. Building scalable and performant web applications.',
    keywords: [
        'Full Stack Developer',
        'React Developer',
        'Next.js',
        'TypeScript',
        'Web Development',
        'Frontend Developer',
        'Backend Developer',
    ],
    authors: [{ name: 'Sagar Sawuck' }],
    creator: 'Sagar Sawuck',
    openGraph: {
        type: 'website',
        locale: 'en_US',
        url: 'https://sagarsys.net',
        title: 'Sagar Sawuck | Full Stack Developer',
        description:
            'Full Stack Developer specializing in React, Next.js, and TypeScript',
        siteName: 'Sagar Sawuck Portfolio',
        images: [
            {
                url: 'https://i.ibb.co/jh6SRP9/sagarsys-og-img.png',
                width: 1200,
                height: 627,
                alt: 'Sagar Sawuck Portfolio',
            },
        ],
    },
    icons: {
        icon: '/favicon.ico',
        apple: '/logo192.png',
    },
    manifest: '/manifest.json',
}

export const viewport: Viewport = {
    width: 'device-width',
    initialScale: 1,
    minimumScale: 1,
    themeColor: [
        { media: '(prefers-color-scheme: light)', color: '#FAFAFA' },
        { media: '(prefers-color-scheme: dark)', color: '#0A0A0F' },
    ],
}

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode
}>) {
    return (
        <html lang="en" suppressHydrationWarning>
            <body
                className={`${titilliumWeb.variable} ${play.variable} antialiased`}
            >
                <Providers>{children}</Providers>
            </body>
        </html>
    )
}
