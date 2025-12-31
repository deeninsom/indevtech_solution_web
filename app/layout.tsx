import type React from "react"
import type { Metadata } from "next"
import { Geist, Playfair_Display } from "next/font/google"
import "./globals.css"

const geistSans = Geist({
  subsets: ["latin"],
  variable: "--font-sans",
})

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-serif",
})

// --- KONFIGURASI SEO GLOBAL & LOKAL KHUSUS INDEVTECH SOLUTIONS ---
export const metadata: Metadata = {
  title: {
    default: "Indevtech Solutions | Premium Software & Website Development",
    template: "%s | Indevtech Solutions"
  },
  description: "Indevtech Solutions adalah partner global dalam pengembangan software custom, website profesional, dan desain produk digital berkualitas tinggi. Kami melayani klien di Indonesia dan seluruh dunia.",
  keywords: [
    "Indevtech Solutions",
    "software house Indonesia",
    "website development",
    "custom software",
    "digital product design",
    "premium software solutions",
    "IT solutions global"
  ],
  authors: [{ name: "Indevtech Team" }],
  creator: "Indevtech Solutions",
  publisher: "Indevtech Solutions",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://indevtechsolutions.com'),
  alternates: {
    canonical: '/',
    languages: {
      'id': '/',
      'en': '/en', // asumsikan versi Inggris ada di /en
    }
  },
  openGraph: {
    title: "Indevtech Solutions | Premium Software & Website Development",
    description: "Partner terpercaya untuk pengembangan software custom, website profesional, dan desain produk digital berkualitas tinggi. Melayani klien di Indonesia dan internasional.",
    url: 'https://indevtechsolutions.com',
    siteName: 'Indevtech Solutions',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Indevtech Solutions - Global Software & Website Premium',
      },
    ],
    locale: 'id_ID',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Indevtech Solutions | Premium Software & Website Development',
    description: 'Partner global terpercaya untuk pengembangan software custom, website profesional, dan desain produk digital berkualitas tinggi.',
    images: ['/og-image.jpg'],
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
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="id" className={`${geistSans.variable} ${playfair.variable} scroll-smooth`}>
      <body className="font-sans antialiased bg-background text-foreground selection:bg-primary selection:text-primary-foreground">
        {children}
      </body>
    </html>
  )
}
