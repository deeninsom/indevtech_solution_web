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

// --- KONFIGURASI SEO OPTIMIZED - INDEVTECH SOLUTIONS ---
export const metadata: Metadata = {
  metadataBase: new URL("https://indevtechsolutions.com"),
  title: {
    default: "Indevtech Solutions | Custom Software & Digital Product Development",
    template: "%s | Indevtech Solutions",
  },
  description:
    "Indevtech Solutions adalah partner global dalam pengembangan software custom, website profesional, dan desain produk digital berkualitas tinggi untuk transformasi bisnis.",
  keywords: [
    "Indevtech Solutions",
    "Pengembangan Software Custom",
    "Website Profesional",
    "Desain Produk Digital",
    "Digital Product Development",
    "Web Development Indonesia",
    "Custom Software Solutions"
  ],
  authors: [{ name: "Indevtech Solutions" }],
  creator: "Indevtech Solutions",

  // Penanganan URL agar tidak dianggap duplikat oleh Google
  alternates: {
    canonical: "/",
  },

  // Pengaturan Robot Mesin Pencari
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-image-preview': 'large',
    },
  },

  icons: {
    icon: [
      { url: "/favicon.ico" },
      { url: "/icon.png", type: "image/png" },
    ],
    shortcut: "/favicon.ico",
    apple: "/apple-icon.png",
  },

  openGraph: {
    title: "Indevtech Solutions - Custom Software & Digital Product",
    description:
      "Partner global untuk pengembangan software custom, website, dan desain produk digital berkualitas tinggi.",
    url: "https://indevtechsolutions.com",
    siteName: "Indevtech Solutions",
    images: [
      {
        url: "/logo-web.png",
        width: 1200,
        height: 630,
        alt: "Indevtech Solutions - Digital Innovation",
      },
    ],
    locale: "id_ID",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Indevtech Solutions | Digital Product Development",
    description: "Pengembangan software custom dan website profesional dengan standar kualitas tinggi.",
    images: ["/logo-web.png"],
  },

  verification: {
    google: '6NQ7STPbqvQgTqKYuHBjHCZDUdn3TOpk'
  }
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="id" className={`${geistSans.variable} ${playfair.variable} scroll-smooth`}>
      <meta name="google-site-verification" content="u-J4nkwlrW-6NQ7STPbqvQgTqKYuHBjHCZDUdn3TOpk" />
      <body className="font-sans antialiased bg-background text-foreground selection:bg-primary selection:text-primary-foreground">
        {children}
      </body>
    </html>
  )
}