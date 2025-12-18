import type { Metadata, Viewport } from 'next'
import { Titillium_Web, Play } from 'next/font/google'
import './globals.css'
import { Providers } from './providers'
import HydrationFix from '@/components/HydrationFix'
import WebVitalsReporter from '@/components/WebVitalsReporter'
import ServiceWorkerRegistration from '@/components/ServiceWorkerRegistration'
import HashNavigationProvider from '@/components/HashNavigationProvider'
import AppBarClient from '@/components/AppBarClient'
import GoogleTagManager from '@/components/GoogleTagManager'
import CookieConsent from '@/components/CookieConsent'
import {
    generatePersonSchema,
    generateWebSiteSchema,
    generateOrganizationSchema,
} from '@/lib/seo'

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
    metadataBase: new URL('https://sagarsys.net'),
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
    alternates: {
        canonical: 'https://sagarsys.net',
    },
    robots: {
        index: true,
        follow: true,
        googleBot: {
            index: true,
            follow: true,
            'max-video-preview': -1,
            'max-image-preview': 'large',
            'max-snippet': -1,
        },
    },
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
    // Get GTM ID from environment variable
    const gtmId = process.env.NEXT_PUBLIC_GTM_ID || ''

    return (
        <html lang="en" suppressHydrationWarning>
            <head>
                {/* JSON-LD Structured Data */}
                <script
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{
                        __html: JSON.stringify(generatePersonSchema()),
                    }}
                />
                <script
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{
                        __html: JSON.stringify(generateWebSiteSchema()),
                    }}
                />
                <script
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{
                        __html: JSON.stringify(generateOrganizationSchema()),
                    }}
                />

                {/* DNS Prefetch for external resources */}
                <link rel="dns-prefetch" href="https://fonts.googleapis.com" />
                <link rel="dns-prefetch" href="https://fonts.gstatic.com" />
                <link rel="dns-prefetch" href="https://api.github.com" />
                <link
                    rel="dns-prefetch"
                    href="https://www.googletagmanager.com"
                />
                <link
                    rel="dns-prefetch"
                    href="https://www.google-analytics.com"
                />

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
                {gtmId && <GoogleTagManager gtmId={gtmId} />}
                <CookieConsent />
                <Providers>
                    <HashNavigationProvider>
                        <AppBarClient />
                        {children}
                    </HashNavigationProvider>
                </Providers>
            </body>
        </html>
    )
}
