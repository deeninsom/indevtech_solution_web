"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { cn } from "@/lib/utils"
import { Menu, X, Languages, ArrowRight, Minus } from "lucide-react"

interface NavbarProps {
  lang: "id" | "en"
  setLang: (lang: "id" | "en") => void
}

export function Navbar({ lang, setLang }: NavbarProps) {
  const [scrolled, setScrolled] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  const menuContent = {
    id: { services: "Layanan", portfolio: "Portfolio", process: "Proses", about: "Tentang", contact: "Mulai Proyek" },
    en: { services: "Services", portfolio: "Portfolio", process: "Process", about: "About", contact: "Start Project" }
  }

  const t = menuContent[lang]

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  useEffect(() => {
    document.body.style.overflow = mobileMenuOpen ? "hidden" : "unset"
  }, [mobileMenuOpen])

  return (
    <div className={cn(
      "fixed top-0 w-full z-[100] px-6 py-6 transition-all duration-700 ease-in-out",
      mobileMenuOpen ? "pointer-events-auto" : "pointer-events-none"
    )}>
      {/* --- NAVIGATION BAR --- */}
      <nav
        className={cn(
          "max-w-6xl mx-auto flex items-center justify-between px-6 py-3 transition-all duration-500 pointer-events-auto rounded-full border relative z-[150]",
          scrolled || mobileMenuOpen
            ? "bg-background/80 backdrop-blur-xl border-border/50 shadow-[0_8px_32px_rgba(0,0,0,0.05)]"
            : "bg-transparent border-transparent"
        )}
      >
        {/* LEFT: LOGO (Disesuaikan agar sejajar secara vertikal) */}
        <Link href="/" className="group flex items-center gap-2 relative z-[160]" onClick={() => setMobileMenuOpen(false)}>
          <div className="flex flex-col justify-center border-r border-border/50 pr-2">
            <span className="text-lg font-black tracking-tighter text-foreground uppercase leading-none">
              indev<span className="text-primary">tech</span>
            </span>
            <span className="text-[7px] font-bold tracking-[0.3em] text-muted-foreground uppercase leading-none mt-1">
              solutions
            </span>
          </div>
          <span className="flex h-1.5 w-1.5 rounded-full bg-primary group-hover:animate-ping" />
        </Link>

        {/* RIGHT: DESKTOP NAV & TOOLS (Semua dalam satu flex row) */}
        <div className="hidden md:flex items-center gap-8">
          {/* Nav Links */}
          <div className="flex items-center gap-6">
            {[
              { n: t.services, h: "/#services" },
              { n: t.portfolio, h: "/portfolio" },
              { n: t.process, h: "/#process" },
              { n: t.about, h: "/#about" }
            ].map((link) => (
              <Link
                key={link.n}
                href={link.h}
                className="text-[10px] font-bold uppercase tracking-[0.2em] text-muted-foreground hover:text-primary transition-all relative py-1"
              >
                {link.n}
              </Link>
            ))}
          </div>

          {/* Separator */}
          <div className="h-5 w-px bg-border/60" />

          {/* Tools: Translate & CTA */}
          <div className="flex items-center gap-6">
            <button
              onClick={() => setLang(lang === "id" ? "en" : "id")}
              className="text-[10px] font-black uppercase tracking-widest text-muted-foreground hover:text-primary transition-colors flex items-center gap-2 cursor-pointer"
            >
              <Languages className="w-3.5 h-3.5" />
              <span>{lang}</span>
            </button>

            <Link
              href="/#contact"
              className="group/btn flex items-center gap-2 px-5 py-2 rounded-full bg-foreground text-background transition-all duration-300 hover:bg-primary hover:text-primary-foreground"
            >
              <span className="text-[10px] font-bold uppercase tracking-widest leading-none">
                {t.contact}
              </span>
              <ArrowRight className="w-3 h-3 transition-transform group-hover/btn:translate-x-1" />
            </Link>
          </div>
        </div>

        {/* MOBILE TOGGLE BUTTON */}
        <button
          className="md:hidden w-10 h-10 flex items-center justify-center rounded-full bg-secondary/80 border border-border/50 text-foreground relative z-[160] active:scale-90 transition-transform"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          <div className="relative w-5 h-5 flex items-center justify-center">
            <Menu className={cn("w-full h-full absolute transition-all duration-500", mobileMenuOpen ? "opacity-0 scale-50 rotate-90" : "opacity-100 scale-100 rotate-0")} />
            <X className={cn("w-full h-full absolute transition-all duration-500 text-primary font-bold", mobileMenuOpen ? "opacity-100 scale-100 rotate-0" : "opacity-0 scale-50 -rotate-90")} />
          </div>
        </button>
      </nav>

      {/* --- MOBILE MENU OVERLAY --- */}
      <div className={cn(
        "fixed inset-0 bg-background/96 backdrop-blur-2xl transition-all duration-700 ease-[cubic-bezier(0.19,1,0.22,1)] z-[110] md:hidden",
        mobileMenuOpen ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-full pointer-events-none"
      )}>
        <div className="flex flex-col h-full justify-center px-10 pt-20">
          <div className="space-y-8">
            <p className={cn("text-[10px] font-bold uppercase tracking-[0.5em] text-primary transition-all duration-700 delay-200", mobileMenuOpen ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-10")}>
              Navigation
            </p>
            <div className="flex flex-col gap-2">
              {[
                { n: t.services, h: "/#services" },
                { n: t.portfolio, h: "/portfolio" },
                { n: t.process, h: "/#process" },
                { n: t.about, h: "/#about" }
              ].map((link, i) => (
                <Link
                  key={link.n}
                  href={link.h}
                  onClick={() => setMobileMenuOpen(false)}
                  style={{ transitionDelay: `${(i + 1) * 100}ms` }}
                  className={cn("text-5xl font-black tracking-tighter py-3 transition-all duration-500 border-b border-border/10 flex items-center justify-between group", mobileMenuOpen ? "opacity-100 translate-x-0" : "opacity-0 translate-x-12")}
                >
                  <span>{link.n}<span className="text-primary text-2xl ml-1">.</span></span>
                  <ArrowRight className="w-6 h-6 opacity-0 group-hover:opacity-100 transition-all text-primary" />
                </Link>
              ))}
            </div>
          </div>
          <div className={cn("mt-16 pt-8 flex flex-col gap-8 transition-all duration-700 delay-500", mobileMenuOpen ? "opacity-100 translate-y-0" : "opacity-0 translate-y-20")}>
            <button onClick={() => { setLang(lang === "id" ? "en" : "id"); setMobileMenuOpen(false); }} className="flex items-center gap-4 text-xs font-bold uppercase tracking-widest text-muted-foreground w-max">
              <div className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center border border-border/50"><Languages className="w-4 h-4 text-primary" /></div>
              <div className="flex flex-col items-start"><span className="text-[9px] text-muted-foreground/60 leading-none">Language</span><span>{lang === "id" ? "Indonesia" : "English"}</span></div>
            </button>
            <Link href="/#contact" onClick={() => setMobileMenuOpen(false)} className="text-2xl font-black italic text-primary inline-flex items-center gap-4 group">
              {t.contact} <div className="w-12 h-12 rounded-full border border-primary/30 flex items-center justify-center group-hover:bg-primary group-hover:text-primary-foreground transition-all"><ArrowRight className="w-5 h-5" /></div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
} 