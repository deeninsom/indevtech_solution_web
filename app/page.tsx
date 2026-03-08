"use client"

import { useState, useEffect, useMemo } from "react"
import Link from "next/link"
import Image from "next/image" // Import Next Image
import { motion, Variants, AnimatePresence } from "framer-motion"
import { Navbar } from "@/components/navbar"
import {
  ArrowRight, Code, Smartphone, Zap, Rocket, MessageSquare,
  Layers, ShieldCheck, Globe, Mail, Search, ChevronUp
} from "lucide-react"

// --- Animation Variants ---
const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1, y: 0,
    transition: { duration: 0.8, ease: [0.21, 0.47, 0.32, 0.98] }
  }
}

const staggerContainer: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15, delayChildren: 0.1 }
  }
}

// --- Data ---
const clientLogos = [
  { name: "PT Wibawa Jati Putra", url: "/partners/logo-wjp.png" },
  { name: "PT New Star Asia", url: "/partners/logo-newfei.png" },
  { name: "PT Yama Electrical Support", url: "/partners/logo-yama.png" },
  { name: "PT AMJ", url: "/partners/logo-amj.png" },
  { name: "PT Maju Inspirasi Bangsa", url: "/partners/logo-abevent.png" }
];

const content = {
  id: {
    hero: {
      badge: "CUSTOM SOFTWARE & INTERNAL SYSTEM",
      title: "Solusi Software",
      titleItalic: "yang Mendukung Pertumbuhan Bisnis.",
      desc: "Indevtech Solutions membantu bisnis dan startup membangun software kustom yang rapi, mudah digunakan tim, dan siap dikembangkan dalam jangka panjang — mulai dari aplikasi web, mobile, hingga sistem internal terintegrasi.",
      btns: ["Diskusikan Kebutuhan Project"]
    },
    clients: "Berkolaborasi Dengan Visi-Visi Hebat",
    services: {
      tag: "Layanan Kami",
      title: "Jasa Pengembangan",
      titleItalic: "Software.",
      desc: "Kami fokus pada pengembangan software berdasarkan kebutuhan nyata bisnis, mulai dari website sederhana hingga sistem custom dan aplikasi mobile yang mendukung operasional dan pertumbuhan.",
      items: [
        { title: "Website Basic (Company Profile)", desc: "Pembuatan website company profile, landing page, atau website usaha sederhana yang profesional, cepat, dan mudah dikelola.", icon: Globe },
        { title: "Website Custom", desc: "Pengembangan website custom sesuai kebutuhan bisnis Anda, termasuk sistem internal, dashboard, dan fitur khusus.", icon: Code },
        { title: "Mobile App (Android & iOS)", desc: "Pembuatan aplikasi mobile Android dan iOS, baik untuk kebutuhan bisnis, internal perusahaan, maupun produk digital.", icon: Smartphone },
        { title: "Maintenance & Support", desc: "Layanan perawatan, perbaikan bug, update fitur, dan dukungan teknis untuk website atau aplikasi agar tetap stabil dan aman.", icon: ShieldCheck },
        { title: "Project Skripsi (Web / App)", desc: "Pengerjaan dan bantuan project skripsi berbasis web atau aplikasi, disesuaikan dengan kebutuhan akademik dan studi kasus.", icon: Layers },
      ],
    },
    process: {
      tag: "Proses Kerja",
      title: "Alur Pengerjaan",
      titleItalic: "Yang Sederhana.",
      desc: "Kami menggunakan alur kerja yang jelas, transparan, dan terstruktur agar proyek berjalan efisien, terkontrol, dan sesuai kebutuhan bisnis.",
      steps: [
        { title: "Diskusi Kebutuhan", desc: "Kami membahas tujuan, fitur, dan ruang lingkup proyek agar kebutuhan Anda jelas sejak awal.", icon: MessageSquare },
        { title: "Perencanaan", desc: "Kami menyusun gambaran awal seperti alur sistem atau tampilan sebagai acuan pengerjaan.", icon: Search },
        { title: "Pengembangan", desc: "Proyek dikerjakan sesuai rencana dengan update progres secara berkala.", icon: Zap },
        { title: "Serah Terima", desc: "Hasil akhir diserahkan dan diuji bersama untuk memastikan semuanya berjalan dengan baik.", icon: ShieldCheck },
      ],
      cta: {
        title: "Siap memulai proyek?",
        desc: "Sampaikan kebutuhan Anda, kami akan membantu mengerjakannya secara jelas dan terarah.",
        btn: "Mulai Diskusi"
      }
    },
    footer: {
      ctaTitle: "Mari buat sesuatu",
      ctaItalic: "yang bermakna.",
      ctaBtn: "Hubungi Kami",
      tagline: "Partner pengembangan software untuk website dan aplikasi yang siap digunakan.",
      labels: { connectivity: "Koneksi", channels: "Hubungi Melalui" },
      supportText: {
        line1: "Beroperasi sepenuhnya secara ",
        highlight1: "online",
        line2: ", berbasis di ",
        highlight2: "Surabaya, ID."
      },
      nav: {
        company: { title: "Navigasi", links: [{ n: "Karya", h: "#services" }, { n: "Tentang Kami", h: "#about" }, { n: "Proses", h: "#process" }] },
        social: { title: "Ruang Sosial", links: ["LinkedIn", "Instagram", "Twitter X"] }
      }
    }
  },
  en: {
    hero: {
      badge: "CUSTOM SOFTWARE & INTERNAL SYSTEM",
      title: "Software Solutions",
      titleItalic: "That Support Business Growth.",
      desc: "Indevtech Solutions helps businesses and startups build custom software that is structured, easy to use by teams, and designed for long-term scalability — from web and mobile applications to integrated internal systems.",
      btns: ["Discuss Project Requirements"]
    },
    clients: "Collaborating With Vision-Driven Clients",
    services: {
      tag: "Our Services",
      title: "Software Development",
      titleItalic: "Services.",
      desc: "We focus on software development based on real business needs, ranging from simple websites to custom systems and mobile applications that support operations and drive growth.",
      items: [
        { title: "Basic Website (Company Profile)", desc: "Development of company profile websites, landing pages, or simple business websites that are professional, fast, and easy to manage.", icon: Globe },
        { title: "Custom Website", desc: "Custom website development tailored to your business needs, including internal systems, dashboards, and specific features.", icon: Code },
        { title: "Mobile App (Android & iOS)", desc: "Mobile application development for Android and iOS, for business needs, internal use, or digital products.", icon: Smartphone },
        { title: "Maintenance & Support", desc: "Ongoing maintenance, bug fixes, feature updates, and technical support to keep your website or application stable and secure.", icon: ShieldCheck },
        { title: "Thesis Project (Web / App)", desc: "Development and assistance for academic thesis projects based on web or mobile applications, adjusted to study requirements and case studies.", icon: Layers },
      ],
    },
    process: {
      tag: "Process",
      title: "A Simple",
      titleItalic: "Workflow.",
      desc: "We follow a clear and transparent workflow, structured to keep projects efficient, well-managed, and fully aligned with business goals.",
      steps: [
        { title: "Requirements Discussion", desc: "We discuss goals, features, and project scope to ensure everything is clearly defined from the start.", icon: MessageSquare },
        { title: "Planning", desc: "We prepare initial plans such as system flows or interface outlines as a development reference.", icon: Search },
        { title: "Development", desc: "The project is developed according to the plan, with regular progress updates.", icon: Zap },
        { title: "Delivery", desc: "The final product is delivered and reviewed together to ensure everything works as expected.", icon: ShieldCheck },
      ],
      cta: {
        title: "Ready to start your project?",
        desc: "Share your requirements and we’ll help bring them to life with a clear and structured approach.",
        btn: "Start Discussion"
      }
    },
    footer: {
      ctaTitle: "Let’s build something",
      ctaItalic: "meaningful.",
      ctaBtn: "Contact Us",
      tagline: "A software development partner for production-ready websites and applications.",
      labels: { connectivity: "Connectivity", channels: "Contact Via" },
      supportText: {
        line1: "Operating fully ",
        highlight1: "online",
        line2: ", based in ",
        highlight2: "Surabaya, ID."
      },
      nav: {
        company: { title: "Navigation", links: [{ n: "Services", h: "#services" }, { n: "About Us", h: "#about" }, { n: "Process", h: "#process" }] },
        social: { title: "Social", links: ["LinkedIn", "Instagram", "Twitter X"] }
      }
    }
  }
}

export default function Home() {
  const [lang, setLang] = useState<"id" | "en">("id")
  const [showScrollTop, setShowScrollTop] = useState(false)
  const t = useMemo(() => content[lang], [lang])

  useEffect(() => {
    const handleScroll = () => setShowScrollTop(window.scrollY > 800)
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const scrollToTop = () => window.scrollTo({ top: 0, behavior: "smooth" })

  const handleContact = () => {
    const phone = "6283877995846"
    const message = lang === "id"
      ? "Halo Indevtech Solutions, saya tertarik untuk mendiskusikan proyek software saya."
      : "Hello Indevtech Solutions, I am interested in discussing my software project."
    window.open(`https://wa.me/${phone}?text=${encodeURIComponent(message)}`, "_blank")
  }

  // SEO Schema
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    "name": "Indevtech Solutions",
    "url": "https://indevtechsolutions.com",
    "logo": "https://indevtechsolutions.com/logo.png",
    "description": t.hero.desc,
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Surabaya",
      "addressCountry": "ID"
    },
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": "+62-838-7799-5846",
      "contactType": "customer service"
    }
  }

  return (
    <main className="relative min-h-screen bg-background text-foreground selection:bg-primary/30">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <Navbar lang={lang} setLang={setLang} />

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden px-6 pt-20">
        <div className="absolute inset-0 z-0" aria-hidden="true">
          <div className="absolute top-1/4 -left-1/4 w-[600px] h-[600px] bg-primary/20 rounded-full blur-[160px] opacity-50" />
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:60px_60px] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_0%,#000_70%,transparent_100%)]" />
        </div>

        <motion.div initial="hidden" animate="visible" variants={staggerContainer} className="relative z-10 max-w-6xl text-center space-y-12">
          <motion.div variants={fadeInUp} className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs font-bold uppercase tracking-[0.2em]">
            <Rocket className="w-3.5 h-3.5" aria-hidden="true" /> {t.hero.badge}
          </motion.div>

          <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-serif leading-[0.95] tracking-tight text-balance">
            {t.hero.title} <br />
            <span className="text-primary italic font-light">{t.hero.titleItalic}</span>
          </h1>

          <p className="text-muted-foreground text-lg md:text-2xl max-w-3xl mx-auto font-light leading-relaxed text-balance">
            {t.hero.desc}
          </p>

          <motion.div variants={fadeInUp} className="flex flex-col sm:flex-row items-center justify-center gap-6 pt-6">
            <button
              onClick={handleContact}
              className="w-full cursor-pointer sm:w-auto px-12 py-6 bg-primary text-primary-foreground rounded-full font-bold text-lg flex items-center justify-center gap-3 hover:scale-105 transition-all shadow-xl shadow-primary/25"
            >
              {t.hero.btns[0]} <ArrowRight className="w-5 h-5" aria-hidden="true" />
            </button>
          </motion.div>
        </motion.div>
      </section>

      {/* Clients Marquee - FIXED IMAGE DIMENSIONS */}
      <section className="py-24 border-y border-border/50 bg-secondary/5 overflow-hidden" aria-label="Clients & Partners">
        <div className="max-w-7xl mx-auto px-6 mb-12">
          <p className="text-center text-[10px] font-bold uppercase tracking-[0.5em] text-muted-foreground">
            {t.clients}
          </p>
        </div>

        <div className="relative flex overflow-hidden group">
          <motion.div
            className="flex whitespace-nowrap gap-16 md:gap-24 items-center"
            animate={{ x: ["0%", "-50%"] }}
            transition={{ ease: "linear", duration: 25, repeat: Infinity }}
          >
            {[...clientLogos, ...clientLogos, ...clientLogos, ...clientLogos].map((logo, i) => (
              <div key={i} className="relative shrink-0 w-32 h-12 md:w-40 md:h-16 flex items-center justify-center transition-all duration-500 px-4">
                <Image
                  src={logo.url}
                  alt={`Partner: ${logo.name}`}
                  width={160} // Set Explicit Width
                  height={64}  // Set Explicit Height
                  className="max-w-full max-h-full object-contain pointer-events-none"
                  loading="lazy"
                />
              </div>
            ))}
          </motion.div>
          <div className="pointer-events-none absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-background via-background/80 to-transparent z-10" />
          <div className="pointer-events-none absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-background via-background/80 to-transparent z-10" />
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-40 px-6">
        <div className="max-w-7xl mx-auto">
          <motion.header initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={fadeInUp} className="space-y-6 mb-28">
            <div className="flex items-center gap-4">
              <div className="h-px w-12 bg-primary" aria-hidden="true" />
              <span className="text-primary text-xs uppercase tracking-[0.4em] font-black">{t.services.tag}</span>
            </div>
            <h2 className="text-5xl md:text-7xl font-serif leading-[1.1]">
              {t.services.title} <br />
              <span className="text-primary italic font-light">{t.services.titleItalic}</span>
            </h2>
            <p className="max-w-prose text-muted-foreground text-xl font-light">{t.services.desc}</p>
          </motion.header>

          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={staggerContainer} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {t.services.items.map((item, i) => (
              <article key={i} className="group p-12 rounded-[48px] border border-border/60 bg-gradient-to-br from-secondary/30 to-background hover:border-primary/40 transition-all duration-500">
                <div className="w-20 h-20 rounded-3xl bg-primary/10 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-500 mb-10 shadow-inner">
                  <item.icon className="w-10 h-10" aria-hidden="true" />
                </div>
                <h3 className="text-3xl font-semibold mb-6 group-hover:text-primary transition-colors">{item.title}</h3>
                <p className="max-w-prose text-muted-foreground text-base leading-relaxed font-light">{item.desc}</p>
              </article>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Process Section */}
      <section id="process" className="py-40 px-6 overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <motion.header initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp} className="text-center space-y-6 mb-32">
            <span className="text-primary text-xs uppercase tracking-[0.5em] font-black">{t.process.tag}</span>
            <h2 className="text-4xl md:text-7xl font-serif leading-tight">
              {t.process.title} <br />
              <span className="text-primary italic font-light">{t.process.titleItalic}</span>
            </h2>
            <p className="max-w-prose text-muted-foreground text-xl mx-auto font-light">{t.process.desc}</p>
          </motion.header>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 relative">
            <div className="hidden lg:block absolute top-1/2 left-0 w-full h-px bg-border -z-10" aria-hidden="true" />
            {t.process.steps.map((step, i) => (
              <motion.div key={i} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp} className="relative h-full">
                <div className="bg-background border border-border p-10 rounded-[40px] space-y-8 hover:border-primary/40 transition-all duration-500 hover:shadow-2xl h-full flex flex-col justify-between group">
                  <div className="flex justify-between items-start">
                    <div className="text-xl font-serif italic text-primary/20 group-hover:text-primary transition-colors">0{i + 1}</div>
                    <div className="w-12 h-12 rounded-2xl bg-secondary/50 flex items-center justify-center border border-border group-hover:bg-primary group-hover:text-primary-foreground transition-all">
                      <step.icon className="w-5 h-5" aria-hidden="true" />
                    </div>
                  </div>
                  <div className="space-y-4">
                    {/* FIXED: H4 changed to H3 for semantic order */}
                    <h3 className="text-2xl font-serif">{step.title}</h3>
                    <p className="max-w-prose text-muted-foreground font-light leading-relaxed text-sm">{step.desc}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp} className="mt-32 p-12 md:p-20 rounded-[60px] bg-primary text-primary-foreground text-center space-y-8 shadow-2xl">
            <h3 className="text-3xl md:text-5xl font-semibold max-w-3xl mx-auto">{t.process.cta.title}</h3>
            <p className="max-w-prose text-primary-foreground/80 text-lg mx-auto font-light">{t.process.cta.desc}</p>
            <button
              onClick={handleContact}
              className="px-10 py-5 bg-background text-foreground rounded-full font-bold hover:scale-105 transition-all shadow-xl"
            >
              {t.process.cta.btn}
            </button>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer id="contact" className="pt-40 pb-20 px-6 border-t border-border/50">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-32 mb-40">
            <div className="space-y-12">
              <h2 className="text-6xl md:text-8xl font-serif leading-[0.9] tracking-tighter">
                {t.footer.ctaTitle} <br /><span className="text-primary italic font-light">{t.footer.ctaItalic}</span>
              </h2>
              <button
                onClick={handleContact}
                className="inline-flex group px-10 py-5 bg-primary text-primary-foreground rounded-full font-bold items-center gap-3 hover:pr-12 transition-all shadow-2xl"
              >
                {t.footer.ctaBtn} <ArrowRight className="w-5 h-5 group-hover:translate-x-2 transition-transform" aria-hidden="true" />
              </button>
            </div>

            <div className="grid sm:grid-cols-2 gap-6">
              <div className="group relative p-8 rounded-[32px] bg-secondary/5 border border-border/50 hover:border-primary/30 transition-all duration-500 space-y-8 flex flex-col justify-between overflow-hidden">
                <div className="relative space-y-6">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-2xl bg-primary/10 flex items-center justify-center text-primary group-hover:scale-110 transition-transform">
                      <Globe className="w-5 h-5" aria-hidden="true" />
                    </div>
                    <span className="text-primary uppercase tracking-[0.3em] font-black text-[10px]">{t.footer.labels.connectivity}</span>
                  </div>
                  <div>
                    <h3 className="text-2xl font-serif mb-2">Digital Support</h3>
                    <p className="text-muted-foreground font-light leading-relaxed">
                      {t.footer.supportText.line1}
                      <span className="font-medium text-foreground">{t.footer.supportText.highlight1}</span>
                      {t.footer.supportText.line2}
                      <span className="font-medium text-primary/80">{t.footer.supportText.highlight2}</span>
                    </p>
                  </div>
                </div>
              </div>

              <div className="group relative p-8 rounded-[32px] bg-primary text-primary-foreground shadow-2xl hover:-translate-y-2 transition-all duration-500 flex flex-col justify-between overflow-hidden border border-white/5">
                <div className="relative space-y-8">
                  {/* Header Section */}
                  <div className="flex items-center gap-4 border-b border-white/10 pb-6">
                    <div className="w-12 h-12 rounded-2xl bg-white/10 flex items-center justify-center text-white transition-all group-hover:scale-110 group-hover:bg-white/20">
                      <Mail className="w-6 h-6" aria-hidden="true" />
                    </div>
                    <div className="flex flex-col">
                      <span className="uppercase tracking-[0.2em] font-bold text-[10px] text-white/50 leading-none">
                        {t.footer.labels.channels}
                      </span>
                      <span className="text-sm font-medium text-white/80">Get in touch</span>
                    </div>
                  </div>

                  {/* Contact Info Section */}
                  <div className="space-y-6">
                    <div className="space-y-2">
                      <a
                        href="mailto:hello@indevtechsolutions.com"
                        className="block text-xl md:text-2xl font-semibold tracking-tight hover:text-white transition-colors break-all underline-offset-8 hover:underline decoration-white/20"
                      >
                        indevtechsolutions@gmail.com
                      </a>
                    </div>

                    <button
                      onClick={handleContact}
                      className="inline-flex items-center gap-3 px-5 py-2.5 bg-white/10 rounded-full text-sm font-semibold hover:bg-white hover:text-primary transition-all duration-300 group/btn"
                    >
                      <span className="relative flex h-2 w-2">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                        <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
                      </span>
                      <span className="tracking-wide">+62 838-7799-5846</span>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="flex flex-col md:flex-row justify-between pt-20 border-t border-border gap-16">
            <div className="space-y-8 max-w-sm">
              <Link href="/" className="text-4xl font-serif font-bold tracking-tighter">IndevTech Solutions<span className="text-primary italic">.</span></Link>
              <p className="max-w-prose text-muted-foreground font-light">{t.footer.tagline}</p>
              {/* FIXED: Removed /60 for better color contrast accessibility */}
              <p className="text-[10px] uppercase tracking-widest text-muted-foreground font-bold">© 2025 Indev Tech Solutions. All Rights Reserved.</p>
            </div>

            <nav className="grid grid-cols-2 gap-20" aria-label="Footer Navigation">
              {Object.entries(t.footer.nav).map(([key, nav]: any) => (
                <div key={key} className="space-y-8">
                  <p className="font-bold text-xs uppercase tracking-[0.3em]">{nav.title}</p>
                  <ul className="space-y-4 text-muted-foreground">
                    {nav.links.map((link: any, i: number) => (
                      <li key={i}>
                        {link.h ? (
                          <Link href={link.h} className="hover:text-primary transition-colors">{link.n}</Link>
                        ) : (
                          <span className="cursor-default">{link}</span>
                        )}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </nav>
          </div>
        </div>
      </footer>

      {/* Back to Top */}
      <AnimatePresence>
        {showScrollTop && (
          <motion.button
            initial={{ opacity: 0, scale: 0.5, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.5, y: 20 }}
            onClick={scrollToTop}
            className="fixed bottom-8 right-8 z-50 w-14 h-14 cursor-pointer bg-primary text-primary-foreground rounded-full flex items-center justify-center shadow-2xl hover:scale-110 transition-transform"
            aria-label="Back to Top"
          >
            <ChevronUp className="w-6 h-6" aria-hidden="true" />
          </motion.button>
        )}
      </AnimatePresence>
    </main>
  )
}