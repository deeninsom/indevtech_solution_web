"use client"

import { useState } from "react"
import Link from "next/link"
import { motion, Variants } from "framer-motion"
import { Navbar } from "@/components/navbar"
import PartnersCarousel from "@/components/partners-carousel"
import {
  ArrowRight,
  Code,
  Smartphone,
  Zap,
  Rocket,
  MessageSquare,
  Search,
  Terminal,
  Layers,
  ShieldCheck,
  Globe,
  Plus,
  Briefcase,
} from "lucide-react"
import { cn } from "@/lib/utils"

// --- KONFIGURASI ANIMASI ---
const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: [0.21, 0.47, 0.32, 0.98] }
  }
}

const staggerContainer: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.1
    }
  }
}

const imageReveal: Variants = {
  hidden: { clipPath: "inset(10% 10% 10% 10% rounded 60px)", opacity: 0 },
  visible: {
    clipPath: "inset(0% 0% 0% 0% rounded 60px)",
    opacity: 1,
    transition: { duration: 1.2, ease: "circOut" }
  }
}

// --- DATA KONTEN ---
const content = {
  id: {
    hero: {
      badge: "Digital Engineering Studio",
      title: "Membangun Solusi Digital",
      titleItalic: "Tanpa Kompromi.",
      desc: "indevtech.id menghadirkan teknologi kelas dunia untuk bisnis yang ambisius. Kami menggabungkan arsitektur perangkat lunak yang solid dengan desain antarmuka yang memukau.",
      btnPrimary: "Mulai Proyek",
      btnSecondary: "Karya Kami",
    },
    services: {
      tag: "Core Services",
      title: "Software Development",
      titleItalic: "Solutions.",
      desc: "Solusi teknologi terintegrasi yang dirancang untuk efisiensi dan pertumbuhan bisnis Anda.",
      items: [
        { title: "Digital & Corporate Web", desc: "Membangun kredibilitas melalui website profesional, landing page, dan company profile." },
        { title: "Business System & Apps", desc: "Sistem internal, CRM, dashboard, dan manajemen data untuk operasional yang efisien." },
        { title: "Custom & Integrations", desc: "Software kustom dan integrasi pihak ketiga (API, Payment, WA) sesuai kebutuhan unik." },
        { title: "Mobile Solutions", desc: "Aplikasi mobile (Android & iOS) untuk layanan digital pelanggan dan aktivitas internal." },
        { title: "Partnership & Support", desc: "Dukungan teknis jangka panjang, pemeliharaan sistem, dan konsultasi strategis." },
      ],
      more: "Pelajari Lebih Lanjut",
    },
    about: {
      tag: "The Visionary",
      title: "Di Balik",
      titleItalic: "indevtech.id.",
      desc: "Halo, saya adalah pendiri di balik indevtech.id. Dengan pengalaman bertahun-tahun di industri perangkat lunak, saya membangun platform ini untuk menjembatani ide bisnis Anda dengan teknologi kelas dunia.",
      feature1: "Inovasi Berkelanjutan",
      feature1Desc: "Selalu mengadopsi teknologi terbaru.",
      feature2: "Fokus Hasil",
      feature2Desc: "Mengutamakan ROI dan efisiensi bisnis Anda.",
    },
    process: {
      tag: "Alur Kerja Kami",
      title: "Dari Ide Menjadi",
      titleItalic: "Kenyataan.",
      desc: "Proses yang terstruktur, transparan, dan berorientasi pada hasil untuk memastikan kesuksesan proyek Anda.",
      ctaTitle: "Siap memulai transformasi digital Anda?",
      ctaDesc: "Jadwalkan konsultasi 30 menit gratis dengan tim ahli kami.",
      ctaBtn: "Hubungi Kami Sekarang",
      steps: [
        { title: "Discovery", desc: "Konsultasi gratis untuk memahami visi, tantangan, dan target bisnis Anda." },
        { title: "Strategy", desc: "Pemetaan solusi teknis, estimasi biaya, dan timeline yang transparan." },
        { title: "Development", desc: "Proses pembangunan dengan update berkala dan standar kualitas tinggi." },
        { title: "Launch & Growth", desc: "Peluncuran sistem yang aman diikuti dengan dukungan teknis berkelanjutan." },
      ],
    },
    projects: {
      title: "Karya Pilihan",
      desc: "Inovasi digital yang memberikan dampak nyata.",
      btn: "Lihat Semua Portofolio",
    },
    footer: {
      ctaTitle: "Mari mulai",
      ctaItalic: "sesuatu yang luar biasa.",
      emailBtn: "Kirim Email",
      waBtn: "WhatsApp Kami",
      office: "Kantor Pusat",
      contact: "Kontak Langsung",
      tagline: "Mitra strategis pengembangan teknologi untuk transformasi digital bisnis Anda.",
      navTitle: "Navigasi",
      followTitle: "Ikuti Kami",
      legalTitle: "Legal",
    },
  },
  en: {
    hero: {
      badge: "Digital Engineering Studio",
      title: "Building Digital Solutions",
      titleItalic: "Without Compromise.",
      desc: "indevtech.id delivers world-class technology for ambitious businesses. We combine solid software architecture with stunning interface design.",
      btnPrimary: "Start Project",
      btnSecondary: "Our Work",
    },
    services: {
      tag: "Core Services",
      title: "Software Development",
      titleItalic: "Solutions.",
      desc: "Integrated technology solutions designed for your business efficiency and growth.",
      items: [
        { title: "Digital & Corporate Web", desc: "Building credibility through professional websites, landing pages, and company profiles." },
        { title: "Business System & Apps", desc: "Internal systems, CRM, dashboards, and data management for efficient operations." },
        { title: "Custom & Integrations", desc: "Custom software and third-party integrations (API, Payment, WA) tailored to unique needs." },
        { title: "Mobile Solutions", desc: "Mobile applications (Android & iOS) for digital customer services and internal activities." },
        { title: "Partnership & Support", desc: "Long-term technical support, system maintenance, and strategic consultation." },
      ],
      more: "Learn More",
    },
    about: {
      tag: "The Visionary",
      title: "Behind",
      titleItalic: "indevtech.id.",
      desc: "Hello, I am the founder behind indevtech.id. With years of experience in the software industry, I built this platform to bridge your business ideas with world-class technology.",
      feature1: "Continuous Innovation",
      feature1Desc: "Always adopting the latest technologies.",
      feature2: "Result Focused",
      feature2Desc: "Prioritizing ROI and your business efficiency.",
    },
    process: {
      tag: "Our Workflow",
      title: "From Idea to",
      titleItalic: "Reality.",
      desc: "Structured, transparent, and result-oriented process to ensure your project's success.",
      ctaTitle: "Ready to start your digital transformation?",
      ctaDesc: "Schedule a free 30-minute consultation with our expert team.",
      ctaBtn: "Contact Us Now",
      steps: [
        { title: "Discovery", desc: "Free consultation to understand your vision, challenges, and business targets." },
        { title: "Strategy", desc: "Technical solution mapping, cost estimation, and transparent timeline." },
        { title: "Development", desc: "Development process with regular updates and high-quality standards." },
        { title: "Launch & Growth", desc: "Secure system launch followed by continuous technical support." },
      ],
    },
    projects: {
      title: "Selected Works",
      desc: "Digital innovations making a real impact.",
      btn: "View All Portfolio",
    },
    footer: {
      ctaTitle: "Let's start",
      ctaItalic: "something extraordinary.",
      emailBtn: "Send Email",
      waBtn: "WhatsApp Us",
      office: "Headquarters",
      contact: "Direct Contact",
      tagline: "Strategic technology partner for your business digital transformation.",
      navTitle: "Navigation",
      followTitle: "Follow Us",
      legalTitle: "Legal",
    },
  },
}

export default function Home() {
  const [lang, setLang] = useState<"id" | "en">("id")
  const t = content[lang]

  return (
    <main className="min-h-screen">
      <Navbar lang={lang} setLang={setLang} />

      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden px-6 pt-20">
        <div className="absolute inset-0 z-0">
          <div className="absolute top-1/4 -left-1/4 w-[500px] h-[500px] bg-primary/20 rounded-full blur-[140px] opacity-60" />
          <div className="absolute bottom-1/4 -right-1/4 w-[500px] h-[500px] bg-primary/10 rounded-full blur-[140px] opacity-40" />
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]" />
        </div>

        <motion.div
          initial="hidden"
          animate="visible"
          variants={staggerContainer}
          className="relative z-10 max-w-5xl text-center space-y-10"
        >
          <motion.div variants={fadeInUp} className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs font-bold uppercase tracking-widest">
            <Rocket className="w-3 h-3" /> {t.hero.badge}
          </motion.div>
          <motion.h1 variants={fadeInUp} className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-serif leading-[1.05] text-balance">
            {t.hero.title} <br className="hidden md:block" />
            <span className="text-primary italic">{t.hero.titleItalic}</span>
          </motion.h1>
          <motion.p variants={fadeInUp} className="text-muted-foreground text-base sm:text-lg md:text-xl max-w-3xl mx-auto font-light leading-relaxed">
            {t.hero.desc}
          </motion.p>
          <motion.div variants={fadeInUp} className="flex flex-col sm:flex-row items-center justify-center gap-5 pt-4">
            <button className="w-full sm:w-auto px-10 py-5 bg-primary text-primary-foreground rounded-full font-bold text-lg flex items-center justify-center gap-3 hover:scale-105 transition-all shadow-lg shadow-primary/20">
              {t.hero.btnPrimary} <ArrowRight className="w-5 h-5" />
            </button>
            <button className="w-full sm:w-auto px-10 py-5 border border-border rounded-full font-bold text-lg hover:bg-secondary transition-all">
              {t.hero.btnSecondary}
            </button>
          </motion.div>
        </motion.div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-32 px-6">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeInUp}
            className="space-y-6 mb-24 max-w-3xl"
          >
            <span className="text-primary text-xs uppercase tracking-[0.3em] font-black">{t.services.tag}</span>
            <h2 className="text-4xl md:text-6xl font-serif leading-tight">
              {t.services.title} <span className="text-primary italic">{t.services.titleItalic}</span>
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed">{t.services.desc}</p>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            variants={staggerContainer}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {[Globe, Layers, Code, Smartphone, ShieldCheck].map((Icon, i) => (
              <motion.div
                key={i}
                variants={fadeInUp}
                whileHover={{ y: -10 }}
                className={cn(
                  "relative group p-10 rounded-[40px] border border-border/50 bg-secondary/20 hover:bg-secondary/40 transition-all duration-500 flex flex-col h-full",
                  i === 4 ? "md:col-span-2 lg:col-span-1" : "",
                )}
              >
                <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-500 mb-8">
                  <Icon className="w-8 h-8" />
                </div>
                <h3 className="text-2xl font-serif leading-snug group-hover:text-primary transition-colors mb-4">
                  {t.services.items[i].title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{t.services.items[i].desc}</p>
                <div className="mt-auto pt-10 flex items-center gap-2 text-primary font-bold text-xs tracking-widest uppercase opacity-0 group-hover:opacity-100 transition-all transform translate-y-4 group-hover:translate-y-0">
                  {t.services.more} <Plus className="w-4 h-4" />
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Profile Owner Section */}
      <section id="about" className="py-32 px-6 bg-secondary/10 overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-20 items-center">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={imageReveal}
              className="relative"
            >
              <div className="aspect-[4/5] rounded-[60px] overflow-hidden shadow-2xl relative z-10 border-4 border-background">
                <img
                  src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=800"
                  alt="Owner"
                  className="w-full h-full object-cover"
                />
              </div>
            </motion.div>

            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={staggerContainer}
              className="space-y-10"
            >
              <motion.div variants={fadeInUp} className="space-y-4">
                <span className="text-primary text-xs uppercase tracking-[0.3em] font-black">{t.about.tag}</span>
                <h2 className="text-4xl md:text-6xl font-serif leading-tight">
                  {t.about.title} <span className="text-primary italic">{t.about.titleItalic}</span>
                </h2>
              </motion.div>
              <motion.p variants={fadeInUp} className="text-muted-foreground text-xl leading-relaxed">{t.about.desc}</motion.p>
              <motion.div variants={staggerContainer} className="space-y-6">
                {[
                  { icon: Zap, title: t.about.feature1, desc: t.about.feature1Desc },
                  { icon: Briefcase, title: t.about.feature2, desc: t.about.feature2Desc }
                ].map((feature, i) => (
                  <motion.div variants={fadeInUp} key={i} className="flex items-center gap-6">
                    <div className="w-12 h-12 rounded-full bg-background border border-border flex items-center justify-center text-primary shadow-sm">
                      <feature.icon className="w-5 h-5" />
                    </div>
                    <div>
                      <h4 className="font-bold text-lg">{feature.title}</h4>
                      <p className="text-muted-foreground text-sm">{feature.desc}</p>
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Order Process Section */}
      <section id="order" className="py-32 px-6 bg-secondary/10 border-y border-border/50">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="text-center space-y-6 mb-24"
          >
            <span className="text-primary text-xs uppercase tracking-[0.4em] font-black">{t.process.tag}</span>
            <h2 className="text-4xl md:text-6xl font-serif">
              {t.process.title} <span className="italic text-primary">{t.process.titleItalic}</span>
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">{t.process.desc}</p>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 relative z-10"
          >
            {[MessageSquare, Search, Terminal, Rocket].map((Icon, i) => (
              <motion.div key={i} variants={fadeInUp} className="group relative">
                <div className="bg-background border border-border/50 p-10 rounded-[40px] hover:border-primary/50 hover:shadow-2xl hover:shadow-primary/5 transition-all duration-500 h-full">
                  <div className="flex justify-between items-start mb-12">
                    <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-500 transform group-hover:rotate-6">
                      <Icon className="w-8 h-8" />
                    </div>
                    <span className="text-sm font-black text-primary/40 tracking-[0.2em]">0{i + 1}</span>
                  </div>
                  <h3 className="text-2xl font-serif mb-4 group-hover:text-primary transition-colors">
                    {t.process.steps[i].title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed italic">{t.process.steps[i].desc}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="mt-24 text-center"
          >
            <div className="bg-background border border-border/50 p-8 rounded-[40px] max-w-4xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8 shadow-xl">
              <div className="text-left space-y-2">
                <h4 className="text-xl font-serif">{t.process.ctaTitle}</h4>
                <p className="text-muted-foreground text-sm">{t.process.ctaDesc}</p>
              </div>
              <button className="whitespace-nowrap px-10 py-5 bg-primary text-primary-foreground rounded-full font-bold flex items-center gap-3 hover:scale-105 transition-all shadow-lg shadow-primary/20">
                {t.process.ctaBtn} <ArrowRight className="w-5 h-5" />
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Projects Showcase */}
      <section id="projects" className="py-32 px-6 bg-secondary/20">
        <div className="max-w-7xl mx-auto space-y-20">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="flex flex-col md:flex-row md:items-end justify-between gap-8 border-b border-border/50 pb-12"
          >
            <div className="space-y-4">
              <h2 className="text-5xl md:text-7xl font-serif leading-tight">{t.projects.title}</h2>
              <p className="text-muted-foreground text-xl">{t.projects.desc}</p>
            </div>
            <button className="text-primary font-bold flex items-center gap-2 hover:gap-4 transition-all uppercase tracking-widest text-sm">
              {t.projects.btn} <ArrowRight className="w-4 h-4" />
            </button>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="grid grid-cols-1 md:grid-cols-2 gap-16"
          >
            {[
              { title: "Lumina Enterprise", category: "Data Analytics Platform" },
              { title: "Vortex Fintech", category: "Next-gen Payment Gateway" },
            ].map((project, i) => (
              <motion.div variants={fadeInUp} key={i} className="group flex flex-col gap-8">
                <div className="aspect-[4/3] bg-secondary/50 rounded-[40px] overflow-hidden relative shadow-2xl">
                  <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end p-12">
                    <p className="text-white text-lg font-light tracking-wide">{project.category}</p>
                  </div>
                </div>
                <div className="px-4 flex justify-between items-center">
                  <h3 className="text-3xl font-serif group-hover:text-primary transition-colors">{project.title}</h3>
                  <div className="w-12 h-12 rounded-full border border-border flex items-center justify-center group-hover:bg-primary group-hover:border-primary group-hover:text-primary-foreground transition-all">
                    <ArrowRight className="w-5 h-5 -rotate-45 group-hover:rotate-0 transition-transform" />
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Partners Carousel Section */}
      <PartnersCarousel />

      {/* Footer */}
      <footer id="contact" className="py-32 px-6 bg-secondary/10 border-t border-border/50">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="grid lg:grid-cols-2 gap-20 items-center mb-32"
          >
            <div className="space-y-8">
              <motion.h2 variants={fadeInUp} className="text-5xl md:text-7xl font-serif leading-tight">
                {t.footer.ctaTitle} <br /> <span className="text-primary italic">{t.footer.ctaItalic}</span>
              </motion.h2>
              <motion.div variants={fadeInUp} className="flex flex-wrap gap-4 pt-4">
                <a href="mailto:hello@indevtech.id" className="px-8 py-4 bg-primary text-primary-foreground rounded-full font-bold flex items-center gap-3">
                  {t.footer.emailBtn} <ArrowRight className="w-5 h-5" />
                </a>
                <a href="#" className="px-8 py-4 border border-border rounded-full font-bold hover:bg-secondary transition-all">
                  {t.footer.waBtn}
                </a>
              </motion.div>
            </div>
            <motion.div variants={fadeInUp} className="bg-background p-10 md:p-16 rounded-[40px] border border-border/50 shadow-xl space-y-10">
              <div className="space-y-2">
                <p className="text-primary uppercase tracking-widest font-black text-xs">{t.footer.office}</p>
                <p className="text-2xl font-serif">Jakarta, Indonesia</p>
              </div>
              <div className="space-y-2">
                <p className="text-primary uppercase tracking-widest font-black text-xs">{t.footer.contact}</p>
                <p className="text-2xl font-serif leading-relaxed">hello@indevtech.id<br />+62 (21) 1234 5678</p>
              </div>
            </motion.div>
          </motion.div>

          <div className="flex flex-col md:flex-row justify-between pt-16 border-t border-border gap-12 text-muted-foreground">
            <div className="space-y-6">
              <Link href="/" className="text-3xl font-serif font-bold text-foreground">
                indevtech<span className="text-primary">.id</span>
              </Link>
              <p className="max-w-xs leading-relaxed">{t.footer.tagline}</p>
              <p className="text-sm">© 2025 indevtech.id. Terdaftar di Indonesia.</p>
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-16">
              <div className="space-y-6">
                <p className="text-foreground uppercase tracking-widest font-bold text-xs">{t.footer.navTitle}</p>
                <ul className="space-y-3 text-sm">
                  <li><Link href="#services" className="hover:text-primary transition-colors">Layanan</Link></li>
                  <li><Link href="#projects" className="hover:text-primary transition-colors">Proyek</Link></li>
                  <li><Link href="#about" className="hover:text-primary transition-colors">Tentang Kami</Link></li>
                </ul>
              </div>
              <div className="space-y-6">
                <p className="text-foreground uppercase tracking-widest font-bold text-xs">{t.footer.followTitle}</p>
                <ul className="space-y-3 text-sm">
                  <li><a href="#" className="hover:text-primary transition-colors">LinkedIn</a></li>
                  <li><a href="#" className="hover:text-primary transition-colors">Instagram</a></li>
                </ul>
              </div>
              <div className="space-y-6 hidden sm:block">
                <p className="text-foreground uppercase tracking-widest font-bold text-xs">{t.footer.legalTitle}</p>
                <ul className="space-y-3 text-sm">
                  <li><a href="#" className="hover:text-primary transition-colors">Privasi</a></li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </main>
  )
}