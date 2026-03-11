"use client"

import { useState, useEffect, useMemo } from "react"
import Link from "next/link"
import Image from "next/image"
import { motion, Variants, AnimatePresence } from "framer-motion"
import { Navbar } from "@/components/navbar" // Pastikan path ini benar
import {
  ArrowRight,
  Code,
  Zap,
  Rocket,
  ShieldCheck,
  Globe,
  Mail,
  Search,
  ChevronUp,
  Workflow,
  Cpu,
  RefreshCcw,
  ShieldAlert,
  BarChart3,
  CheckCircle2,
  CalendarClock,
  Network,
  TerminalSquare
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

const scrollingLogos = [...clientLogos, ...clientLogos];

const content = {
  id: {
    hero: {
      badge: "Business Automation Partner",
      title: "Otomatisasi & Integrasi",
      titleItalic: "Untuk Skala Bisnis Anda.",
      desc: "Kami merancang ekosistem software kustom yang mengubah proses manual yang rentan error menjadi alur kerja otomatis, aman, dan terukur. Fokus pada pertumbuhan, biarkan sistem yang bekerja.",
      btns: ["Jadwalkan Konsultasi", "Pelajari Solusi"],
      pillars: [
        { title: "Otomatisasi Operasional", desc: "Pangkas proses manual & kurangi inefisiensi waktu tim hingga 70%.", icon: RefreshCcw },
        { title: "Integrasi Terpusat", desc: "Hubungkan data antar departemen dalam satu ekosistem real-time.", icon: Workflow },
        { title: "Infrastruktur Stabil", desc: "Setup server yang optimal dengan pemeliharaan rutin untuk performa yang andal.", icon: ShieldAlert }
      ]
    },
    clients: {
      tag: "Mitra Kepercayaan",
      title: "Dipercaya oleh ",
      titleHighlight: "berbagai brand / industri.",
      desc: "Telah diuji dan dipercaya oleh perusahaan skala menengah hingga enterprise dalam mendigitalisasi operasional mereka.",
      placeholder: "Proyek Selanjutnya" // <-- Tambahan baru
    },
    // --- REVISI SERVICES (FOKUS AUTOMATION) ---
    services: {
      tag: "Ekosistem Layanan",
      title: "Satu Mitra Untuk",
      titleItalic: "Semua Kebutuhan IT.",
      desc: "Kami membagi keahlian kami ke dalam tiga pilar utama. Apapun kebutuhan digital bisnis Anda, kami memiliki tim dan teknologi untuk mengeksekusinya.",
      items: [
        {
          title: "Digital Presence & Bisnis Portal",
          desc: "Pembuatan Company Profile, Landing Page, dan Portal Bisnis berkinerja tinggi. Kami membangun wajah digital perusahaan Anda agar tampil profesional, cepat, dan meyakinkan di mata mitra korporat.",
          icon: Globe,
          priceLabel: "Website Standard",
          price: "Mulai Dari"
        },
        {
          title: "Custom Software & Automation",
          desc: "Pengembangan sistem internal kustom, produk SaaS, hingga otomatisasi alur kerja tingkat lanjut. Kami menerjemahkan logika bisnis perusahaan yang rumit menjadi perangkat lunak presisi untuk efisiensi operasional.",
          icon: Zap,
          priceLabel: "Sistem Kompleks",
          price: "Custom Quote"
        },
        {
          title: "Infrastructure & Maintenance",
          desc: "Anda fokus pada bisnis, kami yang menjaga sistemnya. Meliputi arsitektur server (Cloud/VPS), konfigurasi keamanan, optimasi performa, hingga perawatan rutin agar aplikasi Anda beroperasi tanpa henti.",
          icon: Cpu,
          priceLabel: "Dukungan Teknis",
          price: "Retainer"
        },
      ],
    },
    process: {
      tag: "Alur Otomatisasi",
      title: "4 Langkah Menuju",
      titleItalic: "Sistem Terintegrasi.",
      desc: "Proses kerja yang transparan dan terukur. Kami fokus pada penyelesaian masalah operasional Anda tanpa prosedur yang berbelit-belit.",
      steps: [
        {
          title: "1. Menganalisa Masalah",
          desc: "Kami mempelajari cara kerja tim Anda saat ini. Menemukan proses mana yang lambat, berulang, atau sering terjadi human error akibat pencatatan manual.",
          icon: Search,
          highlight: "Audit"
        },
        {
          title: "2. Struktur Ulang Alur",
          desc: "Merancang ulang alur kerja menjadi lebih efisien. Menentukan bagaimana data harus mengalir otomatis antar departemen agar sistem lebih rapi.",
          icon: Workflow,
          highlight: "Design"
        },
        {
          title: "3. Proses Development",
          desc: "Tim kami mulai menulis kode. Membangun aplikasi kustom yang fungsional, cepat, dan aman, sesuai dengan desain alur yang sudah disepakati.",
          icon: TerminalSquare,
          highlight: "Coding"
        },
        {
          title: "4. Sistem Selesai (Go Live)",
          desc: "Sistem diluncurkan ke server produksi dan siap digunakan. Kami mendampingi tim Anda dalam masa transisi untuk memastikan semuanya berjalan lancar.",
          icon: RefreshCcw,
          highlight: "Go Live"
        },
      ],
      cta: {
        title: "Kapan Anda ingin menghentikan operasional manual?",
        desc: "Mari mulai dari langkah pertama. Jadwalkan sesi diskusi singkat untuk menganalisa alur kerja bisnis Anda saat ini.",
        btn: "Mulai Analisa Bisnis"
      }
    },
    footer: {
      ctaTitle: "Mari bangun sistem",
      ctaItalic: "yang efisien.",
      ctaBtn: "Hubungi Tim Ahli",
      tagline: "Mitra pengembangan software untuk otomatisasi Bisnis dan sistem skala produksi.",
      labels: { connectivity: "Koneksi", channels: "Hubungi Melalui" },
      supportText: {
        line1: "Beroperasi sepenuhnya secara ",
        highlight1: "online",
        line2: ", berbasis di ",
        highlight2: "Surabaya, ID."
      },
      nav: {
        company: { title: "Navigasi", links: [{ n: "Solusi Otomatisasi", h: "#hero" }, { n: "Layanan Ekosistem", h: "#services" }, { n: "Cara Kerja", h: "#process" }] },
        social: { title: "Ruang Sosial", links: ["LinkedIn", "Instagram", "Twitter X"] }
      }
    }
  },
  en: {
    hero: {
      badge: "Business Automation Partner",
      title: "Automation & Integration",
      titleItalic: "For Business Scale.",
      desc: "We engineer custom software ecosystems that transform error-prone manual processes into automated, secure, and scalable workflows. Focus on growth, let the system do the work.",
      btns: ["Schedule Consultation", "Explore Solutions"],
      pillars: [
        { title: "Operational Automation", desc: "Cut manual processes & reduce team time-inefficiency by up to 70%.", icon: RefreshCcw },
        { title: "Centralized Integration", desc: "Connect data across departments in a single real-time ecosystem.", icon: Workflow },
        { title: "Stable Infrastructure", desc: "Optimal server setup with routine maintenance for reliable performance.", icon: ShieldAlert }
      ]
    },
    clients: {
      tag: "Trusted Partners",
      title: "Trusted by ",
      titleHighlight: "various brands / industries.",
      desc: "Tested and trusted by mid-market to enterprise companies in digitalizing their core operations.",
      placeholder: "Next Project" // <-- Tambahan baru
    },
    // --- REVISI SERVICES (FOKUS AUTOMATION) ---
    services: {
      tag: "Service Ecosystem",
      title: "One Partner For",
      titleItalic: "All Your IT Needs.",
      desc: "We divide our expertise into three main pillars. Whatever your business's digital needs, we have the team and technology to execute them.",
      items: [
        {
          title: "Digital Presence & Business Portals",
          desc: "Development of high-performance Company Profiles, Landing Pages, and Business Portals. We build your company's digital face to look professional, fast, and credible to your clients and partners.",
          icon: Globe,
          priceLabel: "Standard Websites",
          price: "Starting From"
        },
        {
          title: "Custom Software & Automation",
          desc: "Development of custom internal systems, SaaS products, and advanced workflow automation. We translate complex business logic into precision software for maximum operational efficiency.",
          icon: Zap,
          priceLabel: "Complex Systems",
          price: "Custom Quote"
        },
        {
          title: "Infrastructure & Maintenance",
          desc: "You focus on the business, we maintain the systems. Includes server architecture (Cloud/VPS), security configurations, performance optimization, and routine maintenance to keep your applications running seamlessly.",
          icon: Cpu,
          priceLabel: "Technical Support",
          price: "Retainer"
        },
      ],
    },
    process: {
      tag: "Automation Flow",
      title: "4 Steps to an",
      titleItalic: "Integrated System.",
      desc: "A transparent and measurable workflow. We focus on solving your operational problems without overly complicated procedures.",
      steps: [
        {
          title: "1. Analyze the Problem",
          desc: "We study how your team currently works. Identifying which processes are slow, repetitive, or prone to human error due to manual data entry.",
          icon: Search,
          highlight: "Audit"
        },
        {
          title: "2. Restructure the Flow",
          desc: "Redesigning workflows for maximum efficiency. Determining how data should automatically move between departments to keep the system organized.",
          icon: Workflow,
          highlight: "Design"
        },
        {
          title: "3. Development Phase",
          desc: "Our team starts coding. Building a custom, functional, fast, and secure application tailored to the agreed-upon workflow design.",
          icon: TerminalSquare,
          highlight: "Coding"
        },
        {
          title: "4. Done & Go Live",
          desc: "The system is deployed to production servers and ready to use. We guide your team through the transition to ensure everything runs smoothly.",
          icon: RefreshCcw,
          highlight: "Go Live"
        },
      ],
      cta: {
        title: "When do you want to stop manual operations?",
        desc: "Let's start with step one. Schedule a brief discussion to analyze your current business workflows.",
        btn: "Start Business Analysis"
      }
    },
    footer: {
      ctaTitle: "Let's build an",
      ctaItalic: "efficient system.",
      ctaBtn: "Contact Our Experts",
      tagline: "A software development partner for Bisnis automation and production-scale systems.",
      labels: { connectivity: "Connectivity", channels: "Contact Via" },
      supportText: {
        line1: "Operating fully ",
        highlight1: "online",
        line2: ", based in ",
        highlight2: "Surabaya, ID."
      },
      nav: {
        company: { title: "Navigation", links: [{ n: "Automation Solutions", h: "#hero" }, { n: "Ecosystem Services", h: "#services" }, { n: "How We Work", h: "#process" }] },
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
      ? "Halo Indevtech Solutions, saya tertarik untuk mendiskusikan otomatisasi sistem untuk bisnis saya."
      : "Hello Indevtech Solutions, I am interested in discussing system automation for my business."
    window.open(`https://wa.me/${phone}?text=${encodeURIComponent(message)}`, "_blank")
  }

  return (
    <main className="relative min-h-screen bg-background text-foreground selection:bg-primary/30 font-sans">
      <Navbar lang={lang} setLang={setLang} />

      {/* Hero Section */}
      <section id="hero" className="relative min-h-[90vh] flex flex-col items-center justify-center overflow-hidden px-6 pt-32 pb-16">
        <div className="absolute inset-0 z-0" aria-hidden="true">
          <div className="absolute top-1/4 -left-1/4 w-[600px] h-[600px] bg-primary/20 rounded-full blur-[160px] opacity-60" />
          <div className="absolute bottom-1/4 -right-1/4 w-[500px] h-[500px] bg-blue-500/10 rounded-full blur-[160px] opacity-40" />
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:60px_60px] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_0%,#000_70%,transparent_100%)]" />
        </div>

        <motion.div initial="hidden" animate="visible" variants={staggerContainer} className="relative z-10 w-full max-w-6xl mx-auto flex flex-col items-center">
          <div className="text-center space-y-6 mb-10 max-w-4xl mx-auto">
            <motion.div variants={fadeInUp} className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs font-bold uppercase tracking-[0.2em] backdrop-blur-sm">
              <Rocket className="w-3.5 h-3.5" aria-hidden="true" /> {t.hero.badge}
            </motion.div>

            <motion.h1 variants={fadeInUp} className="text-4xl sm:text-6xl md:text-7xl font-extrabold tracking-tight leading-[1.05] text-balance">
              {t.hero.title} <br className="hidden md:block" />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-blue-500">
                {t.hero.titleItalic}
              </span>
            </motion.h1>

            <motion.p variants={fadeInUp} className="text-muted-foreground text-lg md:text-xl font-light leading-relaxed text-balance max-w-3xl mx-auto">
              {t.hero.desc}
            </motion.p>

            <motion.div variants={fadeInUp} className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
              <button onClick={handleContact} className="w-full sm:w-auto px-8 py-4 bg-foreground text-background rounded-full font-semibold flex items-center justify-center gap-3 hover:bg-primary hover:text-primary-foreground transition-all shadow-xl group">
                {t.hero.btns[0]} <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>
              <Link href="#services" className="w-full sm:w-auto px-8 py-4 bg-background/50 backdrop-blur-md border border-border text-foreground rounded-full font-semibold flex items-center justify-center hover:border-primary/50 transition-all">
                {t.hero.btns[1]}
              </Link>
            </motion.div>
          </div>

          <motion.div variants={fadeInUp} className="w-full grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
            {t.hero.pillars.map((pillar, i) => (
              <div key={i} className="flex items-start gap-4 p-6 rounded-3xl bg-background/40 backdrop-blur-md border border-border/50 hover:bg-background/80 hover:border-primary/30 transition-all">
                <div className="w-12 h-12 rounded-2xl bg-primary/10 flex items-center justify-center text-primary shrink-0">
                  <pillar.icon className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="font-bold text-base md:text-lg text-foreground mb-1 tracking-tight">{pillar.title}</h3>
                  <p className="text-sm text-muted-foreground font-light leading-relaxed">{pillar.desc}</p>
                </div>
              </div>
            ))}
          </motion.div>
        </motion.div>
      </section>

      {/* Interactive Floating Clients Section */}
      <section className="py-24 border-y border-border/40 bg-background/50 relative overflow-hidden">
        {/* Background Decoration */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full bg-[radial-gradient(60%_50%_at_50%_0%,#3b82f610_0%,transparent_100%)]" />

        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-16">

            {/* Left Side: Text Content (TETAP SAMA) */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
              className="w-full lg:w-1/3 text-center lg:text-left space-y-6"
            >
              <div className="inline-flex items-center gap-3 px-4 py-1.5 rounded-full bg-primary/5 border border-primary/10">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
                </span>
                <span className="text-primary text-[10px] font-black uppercase tracking-[0.2em]">{t.clients.tag}</span>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-foreground leading-tight">
                {t.clients.title} <span className="text-primary underline decoration-primary/20 underline-offset-8">{t.clients.titleHighlight}</span>
              </h2>
              <p className="text-muted-foreground text-sm md:text-base font-light leading-relaxed">
                {t.clients.desc}
              </p>
            </motion.div>

            {/* Right Side: Floating Interactive Logos (CARD BERUBAH) */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={staggerContainer}
              className="w-full lg:w-3/5 grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6"
            >
              {clientLogos.map((logo, i) => (
                <motion.div
                  key={i}
                  variants={fadeInUp}
                  // --- ANIMASI ACAK DINAMIS (TETAP SAMA) ---
                  animate={{
                    y: [0, i % 2 === 0 ? -12 : 12, 0],
                    rotate: [0, i % 2 === 0 ? 1 : -1, 0],
                  }}
                  transition={{
                    duration: 4 + (i % 3),
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                  whileHover={{
                    scale: 1.05,
                    y: -5,
                    rotate: 0,
                    zIndex: 20,
                    transition: { duration: 0.2 }
                  }}
                  className={`
              relative group flex items-center justify-center p-6 md:p-8 rounded-2xl 
              bg-gradient-to-b from-background/80 to-background/40 backdrop-blur-md
              border border-border/40 shadow-[0_4px_20px_-10px_rgba(0,0,0,0.05)]
              hover:border-primary/50 hover:bg-background/90
              hover:shadow-[0_0_30px_-5px_rgba(59,130,246,0.15)]
              transition-all duration-500 overflow-hidden
              ${i === 1 ? 'md:mt-10' : ''} ${i === 4 ? 'md:-mt-10' : ''} 
            `}
                >
                  {/* NEW: Top Dynamic Highlight Line */}
                  <div className="absolute top-0 left-1/2 -translate-x-1/2 w-0 h-[2px] bg-gradient-to-r from-transparent via-primary to-transparent group-hover:w-full transition-all duration-700 ease-out" />

                  {/* NEW: Inner Ambient Glow */}
                  <div className="absolute inset-0 bg-primary/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-2xl rounded-full scale-150 pointer-events-none" />

                  {/* Logo Image */}
                  <div className="relative w-full aspect-[3/1] grayscale opacity-40 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-500 z-10">
                    <Image
                      src={logo.url}
                      alt={`Partner: ${logo.name}`}
                      fill
                      className="object-contain"
                      loading="lazy"
                    />
                  </div>
                </motion.div>
              ))}

              {/* Placeholder/Empty Card with Dash (DISESUAIKAN DENGAN TEMA BARU) */}
              <motion.div
                animate={{ y: [0, 8, 0] }}
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                className="hidden md:flex relative group items-center justify-center p-8 rounded-2xl border border-dashed border-border/50 bg-background/20 backdrop-blur-sm opacity-40 hover:opacity-100 transition-opacity duration-300 cursor-default"
              >
                <div className="absolute inset-0 bg-border/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl" />
                <span className="relative text-[10px] font-bold uppercase tracking-widest text-muted-foreground group-hover:text-foreground transition-colors">Next Project</span>
              </motion.div>
            </motion.div>

          </div>
        </div>
      </section>

      {/* Services Section (Fokus Otomatisasi) */}
      <section id="services" className="py-32 px-6">
        <div className="max-w-7xl mx-auto">
          <motion.header initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={fadeInUp} className="space-y-6 mb-24 text-center">
            <div className="inline-flex items-center gap-4 justify-center">
              <div className="h-px w-8 bg-primary" aria-hidden="true" />
              <span className="text-primary text-xs uppercase tracking-[0.4em] font-black">{t.services.tag}</span>
              <div className="h-px w-8 bg-primary" aria-hidden="true" />
            </div>
            <h2 className="text-4xl md:text-6xl font-extrabold tracking-tight leading-[1.1]">
              {t.services.title} <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-blue-500 font-bold">{t.services.titleItalic}</span>
            </h2>
            <p className="max-w-2xl mx-auto text-muted-foreground text-lg md:text-xl font-light">{t.services.desc}</p>
          </motion.header>

          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={staggerContainer} className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {t.services.items.map((item, i) => (
              <article key={i} className="group relative p-10 rounded-[40px] border border-border/80 bg-background hover:bg-secondary/10 hover:border-primary/50 transition-all duration-500 flex flex-col justify-between h-full shadow-sm hover:shadow-2xl hover:shadow-primary/5 cursor-default overflow-hidden">
                <div className="absolute -inset-4 bg-gradient-to-br from-primary/10 to-transparent opacity-0 group-hover:opacity-100 blur-2xl transition-opacity duration-500 -z-10" />
                <div className="mb-8">
                  <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-500 mb-8">
                    <item.icon className="w-8 h-8" aria-hidden="true" />
                  </div>
                  <h3 className="text-2xl font-bold mb-4 tracking-tight group-hover:text-primary transition-colors">{item.title}</h3>
                  <p className="text-muted-foreground leading-relaxed font-light">{item.desc}</p>
                </div>
                <div className="pt-8 border-t border-border/50 mt-auto flex items-center justify-between">
                  <span className="text-xs uppercase tracking-wider font-semibold text-muted-foreground group-hover:text-primary/70">{item.priceLabel}</span>
                  <span className="text-sm font-bold bg-secondary/50 px-3 py-1 rounded-full group-hover:bg-primary group-hover:text-primary-foreground transition-colors">{item.price}</span>
                </div>
              </article>
            ))}
          </motion.div>
        </div>
      </section>

      {/* --- NEW AUTOMATION PROCESS SECTION --- */}
      <section id="process" className="py-32 px-6 bg-secondary/5 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-primary/5 rounded-full blur-[100px] opacity-60 pointer-events-none" />

        <div className="max-w-7xl mx-auto z-10 relative">
          <motion.header initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={fadeInUp} className="text-center space-y-6 mb-24">
            <div className="inline-flex items-center gap-4 justify-center">
              <span className="text-primary text-xs uppercase tracking-[0.4em] font-black bg-primary/10 px-4 py-2 rounded-full">{t.process.tag}</span>
            </div>
            <h2 className="text-4xl md:text-6xl font-extrabold tracking-tight leading-tight text-foreground">
              {t.process.title} <br />
              <span className="text-primary font-bold">{t.process.titleItalic}</span>
            </h2>
            <p className="max-w-2xl text-muted-foreground text-lg md:text-xl mx-auto font-light leading-relaxed">{t.process.desc}</p>
          </motion.header>

          {/* Connected Nodes Layout */}
          <div className="relative mb-32">
            {/* Horizontal Line connecting nodes (Hidden on mobile) */}
            <div className="hidden lg:block absolute top-12 left-[10%] right-[10%] h-0.5 bg-gradient-to-r from-primary/10 via-primary/50 to-primary/10 z-0" aria-hidden="true" />

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 relative z-10">
              {t.process.steps.map((step, i) => (
                <motion.div
                  key={i}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, margin: "-50px" }}
                  variants={fadeInUp}
                  className="relative group"
                >
                  <div className="flex flex-col items-center text-center space-y-6">

                    {/* Icon Node */}
                    <div className="relative w-24 h-24 rounded-3xl bg-background border-2 border-border flex items-center justify-center shadow-lg group-hover:border-primary group-hover:shadow-primary/20 transition-all duration-500">
                      <step.icon className="w-10 h-10 text-primary group-hover:scale-110 transition-transform duration-500" />
                      {/* Number Badge */}
                      <div className="absolute -top-3 -right-3 w-8 h-8 rounded-full bg-primary text-primary-foreground font-bold text-sm flex items-center justify-center shadow-md">
                        {i + 1}
                      </div>
                    </div>

                    {/* Arrow for Mobile (Between steps) */}
                    {i !== t.process.steps.length - 1 && (
                      <div className="lg:hidden text-primary/30">
                        <ArrowRight className="w-6 h-6 rotate-90" />
                      </div>
                    )}

                    {/* Content */}
                    <div className="bg-background p-6 rounded-3xl border border-border/50 shadow-sm h-full group-hover:bg-secondary/10 transition-colors duration-300">
                      <span className="text-[10px] font-bold uppercase tracking-widest text-primary/70 mb-3 block">
                        {step.highlight}
                      </span>
                      <h3 className="text-xl font-bold mb-3 text-foreground tracking-tight">{step.title}</h3>
                      <p className="text-muted-foreground font-light leading-relaxed text-sm">{step.desc}</p>
                    </div>

                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* CTA Box inside Process */}
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp} className="max-w-4xl mx-auto p-10 md:p-14 rounded-[40px] bg-foreground text-background shadow-2xl text-center space-y-8 relative overflow-hidden">
            {/* Decorative pattern */}
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff10_1px,transparent_1px),linear-gradient(to_bottom,#ffffff10_1px,transparent_1px)] bg-[size:32px_32px] opacity-20" />

            <div className="relative z-10">
              <h3 className="text-2xl md:text-4xl font-bold max-w-2xl mx-auto mb-4">{t.process.cta.title}</h3>
              <p className="text-background/70 text-lg mx-auto font-light max-w-2xl mb-8">{t.process.cta.desc}</p>
              <button
                onClick={handleContact}
                className="px-8 py-4 bg-primary text-primary-foreground rounded-full font-bold hover:scale-105 transition-transform shadow-xl shadow-primary/20 flex items-center justify-center gap-3 mx-auto group"
              >
                {t.process.cta.btn}
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          </motion.div>

        </div>
      </section>
      {/* ------------------------------------------- */}

      {/* Footer */}
      <footer id="contact" className="pt-20 pb-10 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-20 mb-32 items-center">
            <div className="space-y-8">
              <h2 className="text-5xl md:text-7xl font-extrabold leading-[1] tracking-tight">
                {t.footer.ctaTitle} <br /><span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-blue-500">{t.footer.ctaItalic}</span>
              </h2>
              <button
                onClick={handleContact}
                className="inline-flex group px-8 py-4 bg-foreground text-background hover:bg-primary hover:text-primary-foreground rounded-full font-bold items-center gap-3 hover:pr-10 transition-all shadow-xl"
              >
                {t.footer.ctaBtn} <ArrowRight className="w-5 h-5 group-hover:translate-x-2 transition-transform" aria-hidden="true" />
              </button>
            </div>

            <div className="grid sm:grid-cols-2 gap-6">
              <div className="group relative p-8 rounded-3xl bg-secondary/20 border border-border/50 hover:border-primary/30 transition-all duration-500">
                <div className="flex items-center gap-3 mb-6">
                  <Globe className="w-5 h-5 text-primary" aria-hidden="true" />
                  <span className="uppercase tracking-[0.2em] font-bold text-[10px] text-muted-foreground">{t.footer.labels.connectivity}</span>
                </div>
                <h3 className="text-xl font-bold mb-2">Digital Support</h3>
                <p className="text-muted-foreground text-sm font-light leading-relaxed">
                  {t.footer.supportText.line1}
                  <span className="font-semibold text-foreground">{t.footer.supportText.highlight1}</span>
                  {t.footer.supportText.line2}
                  <span className="font-semibold text-primary">{t.footer.supportText.highlight2}</span>
                </p>
              </div>

              <div className="group relative p-8 rounded-3xl bg-primary text-primary-foreground shadow-xl hover:-translate-y-2 transition-transform duration-500">
                <div className="flex items-center gap-3 mb-6">
                  <Mail className="w-5 h-5 text-primary-foreground/70" aria-hidden="true" />
                  <span className="uppercase tracking-[0.2em] font-bold text-[10px] text-primary-foreground/70">{t.footer.labels.channels}</span>
                </div>
                <a href="mailto:hello@indevtechsolutions.com" className="block text-lg font-semibold mb-4 hover:underline decoration-white/30 underline-offset-4 break-all">
                  indevtechsolutions@gmail.com
                </a>
                <button onClick={handleContact} className="inline-flex items-center gap-2 px-4 py-2 bg-background/10 hover:bg-background hover:text-primary rounded-full text-sm font-semibold transition-colors">
                  <span className="relative flex h-2 w-2">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
                  </span>
                  +62 838-7799-5846
                </button>
              </div>
            </div>
          </div>

          <div className="flex flex-col md:flex-row justify-between pt-12 border-t border-border/60 gap-12">
            <div className="space-y-6 max-w-xs">
              <Link href="/" className="text-2xl font-extrabold tracking-tight">IndevTech<span className="text-primary">.</span></Link>
              <p className="text-muted-foreground font-light text-sm">{t.footer.tagline}</p>
              <p className="text-[10px] uppercase tracking-wider text-muted-foreground font-semibold">© 2026 IndevTech Solutions.</p>
            </div>

            <nav className="flex gap-16" aria-label="Footer Navigation">
              {Object.entries(t.footer.nav).map(([key, nav]: any) => (
                <div key={key} className="space-y-6">
                  <p className="font-bold text-xs uppercase tracking-[0.2em] text-foreground">{nav.title}</p>
                  <ul className="space-y-3 text-sm text-muted-foreground font-light">
                    {nav.links.map((link: any, i: number) => (
                      <li key={i}>
                        {link.h ? (
                          <Link href={link.h} className="hover:text-primary transition-colors">{link.n}</Link>
                        ) : (
                          <span className="cursor-default hover:text-foreground transition-colors">{link}</span>
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
            className="fixed bottom-8 right-8 z-50 w-12 h-12 bg-foreground text-background rounded-full flex items-center justify-center shadow-2xl hover:bg-primary hover:text-primary-foreground hover:scale-110 transition-all"
            aria-label="Back to Top"
          >
            <ChevronUp className="w-5 h-5" aria-hidden="true" />
          </motion.button>
        )}
      </AnimatePresence>
    </main>
  )
}