import type { Metadata, Viewport } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "sagarsys - Web developer",
  description: "Sagar Sawuck Portfolio website",
  keywords: [
    "sagarsys",
    "web developer",
    "portfolio",
    "freelance",
    "mauritius",
    "web and software development",
  ],
  authors: [{ name: "Sagar Sawuck" }],
  openGraph: {
    title: "sagarsys - Web developer",
    description: "Sagar Sawuck Portfolio website",
    url: "https://sagarsys.net",
    siteName: "sagarsys",
    images: [
      {
        url: "https://i.ibb.co/jh6SRP9/sagarsys-og-img.png",
        width: 1200,
        height: 627,
        alt: "sagarsys - Web developer",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  icons: {
    icon: "/favicon.ico",
    apple: "/logo192.png",
  },
  manifest: "/manifest.json",
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  minimumScale: 1,
  themeColor: "#333",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}

