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

// --- KONFIGURASI SEO LENGKAP KHUSUS INDEVTECH SOLUTIONS ---
export const metadata: Metadata = {
  title: {
    default: "Indevtech Solutions | Jasa Pembuatan Website & Software Premium",
    template: "%s | Indevtech Solutions"
  },
  description: "Indevtech Solutions adalah partner pengembangan software custom, website profesional, dan desain produk digital berkualitas tinggi untuk bisnis modern di Indonesia.",
  keywords: [
    "Indevtech Solutions",
    "jasa pembuatan website",
    "software house Indonesia",
    "digital product design",
    "software development Jakarta",
    "solusi IT premium"
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
  },
  openGraph: {
    title: "Indevtech Solutions | Solusi Software & Website Premium",
    description: "Partner terpercaya untuk pengembangan software custom, website profesional, dan desain produk digital berkualitas tinggi.",
    url: 'https://indevtechsolutions.com',
    siteName: 'Indevtech Solutions',
    images: [
      {
        url: '/og-image.jpg', // pastikan ada di folder public
        width: 1200,
        height: 630,
        alt: 'Indevtech Solutions - Software & Website Premium',
      },
    ],
    locale: 'id_ID',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Indevtech Solutions | Solusi Software & Website Premium',
    description: 'Partner terpercaya untuk pengembangan software custom, website profesional, dan desain produk digital berkualitas tinggi.',
    images: ['/og-image.jpg'], // pastikan ada di folder public
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
