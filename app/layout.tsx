import type { Metadata, Viewport } from 'next'
import { Titillium_Web, Play } from 'next/font/google'
import './globals.css'

const titilliumWeb = Titillium_Web({
    weight: ['300', '400', '600', '700'],
    subsets: ['latin'],
    variable: '--font-primary',
    display: 'swap',
})

const play = Play({
    weight: ['400'],
    subsets: ['latin'],
    variable: '--font-secondary',
    display: 'swap',
})

export const metadata: Metadata = {
    title: 'sagarsys - Web developer',
    description: 'Sagar Sawuck Portfolio website',
    keywords: [
        'sagarsys',
        'web developer',
        'portfolio',
        'freelance',
        'mauritius',
        'web and software development',
    ],
    authors: [{ name: 'Sagar Sawuck' }],
    openGraph: {
        title: 'sagarsys - Web developer',
        description: 'Sagar Sawuck Portfolio website',
        url: 'https://sagarsys.net',
        siteName: 'sagarsys',
        images: [
            {
                url: 'https://i.ibb.co/jh6SRP9/sagarsys-og-img.png',
                width: 1200,
                height: 627,
                alt: 'sagarsys - Web developer',
            },
        ],
        locale: 'en_US',
        type: 'website',
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
    themeColor: '#333',
}

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode
}>) {
    return (
        <html lang="en" className={`${titilliumWeb.variable} ${play.variable}`}>
            <body>{children}</body>
        </html>
    )
}
