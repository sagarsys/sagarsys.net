import type { Metadata, Viewport } from 'next'
import { Titillium_Web, Play } from 'next/font/google'
import './globals.css'
import { Providers } from './providers'
import HydrationFix from '@/components/HydrationFix'
import WebVitalsReporter from '@/components/WebVitalsReporter'
import ServiceWorkerRegistration from '@/components/ServiceWorkerRegistration'

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
    title: 'Sagar Sawuck | Senior Fullstack Developer (TypeScript)',
    description:
        'Senior Fullstack Developer (Typescript) with 10+ years of experience. Front-end specialist with full-stack capabilities. Expertise in React, Next.js, Node.js, and modern web technologies. I build exceptional digital experiences for people.',
    keywords: [
        'Senior Fullstack Developer',
        'TypeScript Developer',
        'React Developer',
        'Next.js Developer',
        'Node.js Developer',
        'Full Stack Developer',
        'Frontend Developer',
        'Web Development',
        'Clean Code',
        'UX Design',
        'Performance Optimization',
        'AI Integration',
        'Badhoevedorp',
        'Netherlands',
    ],
    authors: [{ name: 'Sagar Sawuck' }],
    creator: 'Sagar Sawuck',
    openGraph: {
        type: 'website',
        locale: 'en_US',
        url: 'https://sagarsys.net',
        title: 'Sagar Sawuck | Senior Fullstack Developer (TypeScript)',
        description:
            'Senior Fullstack Developer (Typescript) with 10+ years of experience. Front-end specialist with full-stack capabilities. Expertise in React, Next.js, Node.js, and modern web technologies. I build exceptional digital experiences for people.',
        siteName: 'Sagar Sawuck Portfolio',
        images: [
            {
                url: 'https://sagarsys.net/images/sagarsys_og_img.png',
                width: 1200,
                height: 630,
                alt: 'Sagar Sawuck - Senior Fullstack Developer (TypeScript) Portfolio',
            },
        ],
    },
    twitter: {
        card: 'summary_large_image',
        title: 'Sagar Sawuck | Senior Fullstack Developer (TypeScript)',
        description:
            'Senior Fullstack Developer (Typescript) with 10+ years of experience. Front-end specialist with full-stack capabilities. Expertise in React, Next.js, Node.js, and modern web technologies. I build exceptional digital experiences for people.',
        images: ['https://sagarsys.net/images/sagarsys_og_img.png'],
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
    maximumScale: 5,
    themeColor: [
        { media: '(prefers-color-scheme: light)', color: '#FAFAFA' },
        { media: '(prefers-color-scheme: dark)', color: '#0A0A0F' },
    ],
    userScalable: true,
    viewportFit: 'cover',
}

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode
}>) {
    return (
        <html lang="en" suppressHydrationWarning>
            <head>
                {/* DNS Prefetch for external resources */}
                <link rel="dns-prefetch" href="https://fonts.googleapis.com" />
                <link rel="dns-prefetch" href="https://fonts.gstatic.com" />
                <link rel="dns-prefetch" href="https://api.github.com" />

                {/* Preconnect for critical external resources */}
                <link
                    rel="preconnect"
                    href="https://fonts.googleapis.com"
                    crossOrigin="anonymous"
                />
                <link
                    rel="preconnect"
                    href="https://fonts.gstatic.com"
                    crossOrigin="anonymous"
                />
            </head>
            <body
                className={`${titilliumWeb.variable} ${play.variable} antialiased`}
                suppressHydrationWarning
            >
                <HydrationFix />
                <WebVitalsReporter />
                <ServiceWorkerRegistration />
                <Providers>{children}</Providers>
            </body>
        </html>
    )
}
