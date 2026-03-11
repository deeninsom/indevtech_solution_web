import type React from "react"
import type { Metadata } from "next"
import { Geist, Playfair_Display } from "next/font/google"
import "./globals.css"

const geistSans = Geist({
  subsets: ["latin"],
  variable: "--font-sans",
  display: 'swap',
})

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-serif",
  display: 'swap',
})

// --- KONFIGURASI SEO OPTIMIZED - INDEVTECH SOLUTIONS ---
export const metadata: Metadata = {
  metadataBase: new URL("https://indevtechsolutions.com"),
  title: {
    default: "Indevtech Solutions | Business Automation Partner",
    template: "%s | Indevtech Solutions",
  },
  description:
    "Indevtech Solutions adalah Business Automation Partner Anda. Kami membedah masalah operasional bisnis dan merancang ekosistem software kustom untuk mengotomatisasi alur kerja Anda.",
  keywords: [
    "Indevtech",
    "Indevtech Solutions",
    "Business Automation",
    "Otomatisasi Bisnis",
    "Otomatisasi Sistem",
    "Sistem Internal Custom",
    "Pengembangan Software Custom",
    "Workflow Automation",
    "B2B Software Partner",
    "SaaS Development Indonesia"
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
      { url: "/favicon-32x32.png", type: "image/png" },
    ],
    shortcut: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },

  openGraph: {
    title: "Indevtech Solutions - Business Automation Partner",
    description:
      "Partner teknologi Anda untuk otomatisasi bisnis. Kami mengubah operasional manual menjadi ekosistem software yang bekerja otomatis dan terintegrasi.",
    url: "https://indevtechsolutions.com",
    siteName: "Indevtech Solutions",
    images: [
      {
        url: "/logo-thumbnail.png",
        width: 1200,
        height: 630,
        alt: "Indevtech Solutions - Business Automation",
      },
    ],
    locale: "id_ID",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Indevtech Solutions - Business Automation Partner",
    description: "Mengubah kekacauan operasional manual menjadi sistem otomatis yang presisi dan efisien.",
    images: ["/logo-web.png"],
  },

  verification: {
    google: 'u-J4nkwlrW-6NQ7STPbqvQgTqKYuHBjHCZDUdn3TOpk'
  }
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="id" className={`${geistSans.variable} ${playfair.variable} scroll-smooth`}>
      <head>
        <meta
          name="google-site-verification"
          content="u-J4nkwlrW-6NQ7STPbqvQgTqKYuHBjHCZDUdn3TOpk"
        />
        <link rel="icon" href="/favicon.ico" />
        <meta name="description" content="Partner teknologi Anda untuk otomatisasi bisnis. Kami mengubah operasional manual menjadi ekosistem software yang bekerja otomatis dan terintegrasi." />
        <meta property="name" content="Indevtech Solutions - Business Automation Partner" />
        <meta property="description" content="Partner teknologi Anda untuk otomatisasi bisnis. Kami mengubah operasional manual menjadi ekosistem software yang bekerja otomatis dan terintegrasi." />
        <meta property="og:image" content="https://indevtechsolutions.com/logo-thumbnail.png" />
        <link rel="canonical" href="https://indevtechsolutions.com" />
        <meta property="og:url" content="https://indevtechsolutions.com" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Indevtech Solutions - Business Automation Partner" />
        <meta property="og:description" content="Partner teknologi Anda untuk otomatisasi bisnis. Kami mengubah operasional manual menjadi ekosistem software yang bekerja otomatis dan terintegrasi." />
        <meta property="og:image" content="https://indevtechsolutions.com/logo-thumbnail.png" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Indevtech Solutions - Business Automation Partner" />
        <meta name="twitter:description" content="Partner teknologi Anda untuk otomatisasi bisnis. Kami mengubah operasional manual menjadi ekosistem software yang bekerja otomatis dan terintegrasi." />
        <meta name="twitter:image" content="https://indevtechsolutions.com/logo-thumbnail.png" />

      </head>
      <body className="font-sans antialiased bg-background text-foreground selection:bg-primary selection:text-primary-foreground">
        {children}
      </body>
    </html>
  )
}