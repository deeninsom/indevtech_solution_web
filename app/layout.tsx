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

// --- KONFIGURASI SEO LENGKAP ---
export const metadata: Metadata = {
  title: {
    default: "Indevtech.id | Jasa Pembuatan Website & Software High-End",
    template: "%s | Indevtech.id"
  },
  description: "Indevtech.id spesialis pengembangan software eksklusif, desain produk digital, dan solusi IT premium untuk bisnis modern di Indonesia.",
  keywords: ["software house indonesia", "jasa pembuatan website", "digital product design", "software development jakarta", "indevtech"],
  authors: [{ name: "Indevtech Team" }],
  creator: "Indevtech Indonesia",
  publisher: "Indevtech Indonesia",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://indevtech.id'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: "Indevtech.id | Elegant Software Solutions",
    description: "Solusi software high-end dan desain produk digital untuk skala enterprise.",
    url: 'https://indevtech.id',
    siteName: 'Indevtech.id',
    images: [
      {
        url: '/og-image.jpg', // Pastikan file ini ada di folder public
        width: 1200,
        height: 630,
        alt: 'Indevtech.id Software Solutions',
      },
    ],
    locale: 'id_ID',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Indevtech.id | Elegant Software Solutions',
    description: 'Solusi software high-end dan desain produk digital.',
    images: ['/og-image.jpg'], // Pastikan file ini ada di folder public
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