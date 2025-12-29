"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { cn } from "@/lib/utils"
import { Menu, X, Languages } from "lucide-react"

// 1. Definisikan tipe untuk Props
interface NavbarProps {
  lang: "id" | "en"
  setLang: (lang: "id" | "en") => void
}

export function Navbar({ lang, setLang }: NavbarProps) {
  const [scrolled, setScrolled] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  // 2. Kamus teks untuk Menu Navigasi
  const menuContent = {
    id: {
      services: "Layanan",
      portfolio: "Portfolio",
      process: "Proses",
      about: "Tentang",
      contact: "Hubungi Kami",
    },
    en: {
      services: "Services",
      portfolio: "Portfolio",
      process: "Process",
      about: "About",
      contact: "Contact Us",
    }
  }

  const t = menuContent[lang]

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50)
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <nav
      className={cn(
        "fixed top-0 w-full z-50 transition-all duration-300 px-6 py-4",
        scrolled || mobileMenuOpen
          ? "bg-background/90 backdrop-blur-md border-b border-border/50 py-3"
          : "bg-transparent",
      )}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <Link href="/" className="text-xl font-serif font-bold tracking-tight text-primary">
          indevtech<span className="text-foreground/50">.id</span>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-8 text-sm uppercase tracking-widest font-bold">
          <Link href="/#services" className="hover:text-primary transition-colors">
            {t.services}
          </Link>
          <Link href="/portfolio" className="hover:text-primary transition-colors">
            {t.portfolio}
          </Link>
          <Link href="/#order" className="hover:text-primary transition-colors">
            {t.process}
          </Link>
          <Link href="/#about" className="hover:text-primary transition-colors">
            {t.about}
          </Link>

          <Link
            href="/#contact"
            className="px-5 py-2 bg-primary text-primary-foreground rounded-full hover:opacity-90 transition-opacity"
          >
            {t.contact}
          </Link>

          {/* Language Switcher Desktop */}
          <button
            onClick={() => setLang(lang === "id" ? "en" : "id")}
            className="flex items-center gap-2 px-3 py-1 bg-secondary/50 rounded-full border border-border hover:border-primary/50 transition-all"
          >
            <Languages className="w-3.5 h-3.5 text-primary" />
            <span className="text-[10px] tracking-normal">{lang === "id" ? "ID" : "EN"}</span>
          </button>


        </div>

        <button className="md:hidden text-foreground p-2" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
          {mobileMenuOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Navigation */}
      {mobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-background border-b border-border/50 flex flex-col p-6 gap-6 animate-in slide-in-from-top duration-300">
          <Link href="/#services" onClick={() => setMobileMenuOpen(false)} className="text-lg font-medium">
            {t.services}
          </Link>
          <Link href="/portfolio" onClick={() => setMobileMenuOpen(false)} className="text-lg font-medium">
            {t.portfolio}
          </Link>
          <Link href="/#order" onClick={() => setMobileMenuOpen(false)} className="text-lg font-medium">
            {t.process}
          </Link>
          <Link href="/#about" onClick={() => setMobileMenuOpen(false)} className="text-lg font-medium">
            {t.about}
          </Link>

          {/* Language Switcher Mobile */}
          <div className="flex items-center justify-between border-t border-border pt-4">
            <span className="text-sm font-bold uppercase tracking-widest text-muted-foreground">Language</span>
            <button
              onClick={() => {
                setLang(lang === "id" ? "en" : "id")
                setMobileMenuOpen(false)
              }}
              className="flex items-center gap-2 px-4 py-2 bg-secondary rounded-full font-bold"
            >
              <Languages className="w-4 h-4 text-primary" />
              {lang === "id" ? "Indonesia" : "English"}
            </button>
          </div>

          <Link
            href="/#contact"
            onClick={() => setMobileMenuOpen(false)}
            className="bg-primary text-primary-foreground px-6 py-4 rounded-full text-center font-bold"
          >
            {t.contact}
          </Link>
        </div>
      )}
    </nav>
  )
}
