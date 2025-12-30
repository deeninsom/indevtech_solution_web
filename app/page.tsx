"use client"

import { useState, useEffect, useMemo } from "react"
import Link from "next/link"
import { motion, Variants, AnimatePresence } from "framer-motion"
import { Navbar } from "@/components/navbar"
import {
  ArrowRight, Code, Smartphone, Zap, Rocket, MessageSquare,
  Layers, ShieldCheck, Globe, Plus, Briefcase, Mail, Search, ChevronUp
} from "lucide-react"
import { cn } from "@/lib/utils"

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

const imageReveal: Variants = {
  hidden: { clipPath: "inset(10% 10% 10% 10% rounded 60px)", opacity: 0 },
  visible: {
    clipPath: "inset(0% 0% 0% 0% rounded 60px)",
    opacity: 1,
    transition: { duration: 1.2, ease: "circOut" }
  }
}

// --- Data ---
const clientLogos = [
  { name: "PT Wibawa Jati Putra", url: "/partners/wjp-logo.jpeg" },
  { name: "PT Yama Electrical Support", url: "/partners/yama-electrical.png" },
  { name: "PT AMJ", url: "/partners/amj.jpeg" }
];

const content = {
  id: {
    hero: {
      badge: "Creative Tech Collective",
      title: "Membangun Arsitektur",
      titleItalic: "Masa Depan.",
      desc: "Indev Tech adalah studio rekayasa digital tempat ide-ide ambisius diwujudkan menjadi kenyataan. Kami bukan sekadar pengembang; kami adalah partner teknis yang tumbuh bersama visi Anda.",
      btns: ["Mulai Diskusi", "Eksplorasi Karya"]
    },
    clients: "Berkolaborasi Dengan Visi-Visi Hebat",
    services: {
      tag: "Keahlian Kami",
      title: "Solusi Digital &",
      titleItalic: "Teknologi Andal.",
      desc: "Kami menyediakan layanan digital yang membantu bisnis Anda berkembang dengan efektif dan efisien.",
      items: [
        {
          title: "Website Basic",
          desc: "Website profesional untuk usaha kecil atau personal, dirancang agar mudah digunakan dan menarik pengunjung.",
          icon: Globe
        },
        {
          title: "Website Custom",
          desc: "Website yang dibuat sesuai kebutuhan spesifik bisnis Anda, lengkap dengan fitur dan desain unik.",
          icon: Code
        },
        {
          title: "Mobile App",
          desc: "Aplikasi mobile untuk Android & iOS yang meningkatkan interaksi dan pengalaman pengguna.",
          icon: Smartphone
        },
        {
          title: "Maintenance & Support",
          desc: "Layanan pemeliharaan dan dukungan agar website atau aplikasi Anda selalu aman dan berjalan lancar.",
          icon: ShieldCheck
        },
        {
          title: "Digital Consulting",
          desc: "Bimbingan dan solusi strategi digital untuk mengoptimalkan proses bisnis dan kehadiran online Anda.",
          icon: Layers
        },
      ],
      more: "Lihat Detail",
    },
    about: {
      tag: "Siapa Kami",
      title: "Kreativitas Bertemu",
      titleItalic: "Eksperimentalitas.",
      desc: "Indev Tech lahir dari semangat untuk membawa teknologi kelas dunia ke tangan para kreator dan inovator. Kami adalah kolektif yang percaya bahwa setiap baris kode harus memiliki tujuan.",
      features: [
        { icon: Zap, title: "Standar Artisan", desc: "Setiap proyek dikerjakan dengan ketelitian tingkat tinggi layaknya sebuah karya seni." },
        { icon: Briefcase, title: "Eksplorasi Bersama", desc: "Kami tidak mendikte; kami mendengarkan dan berevolusi bersama tantangan Anda." }
      ],
      exp: "5+ Tahun Berkolaborasi"
    },
    process: {
      tag: "Alur Kerja",
      title: "Dari Ide Menuju",
      titleItalic: "Karya Digital.",
      desc: "Kami ingin Anda merasa terlibat di setiap langkah. Proses kami dibuat agar mudah dimengerti, transparan, dan menyenangkan.",
      steps: [
        {
          title: "Ngobrol & Pahami Ide",
          desc: "Kita duduk bareng, ngobrol santai tentang visi dan kebutuhan Anda, supaya solusi yang dibuat benar-benar pas.",
          icon: MessageSquare
        },
        {
          title: "Buat Gambaran Awal",
          desc: "Kami bikin sketsa atau prototipe sederhana agar Anda bisa melihat dan merasakan hasilnya sebelum dibuat secara teknis.",
          icon: Search
        },
        {
          title: "Bangun & Kembangkan",
          desc: "Tim kami mulai membangun produk digital, sambil memberi update secara berkala agar Anda selalu tahu progresnya.",
          icon: Zap
        },
        {
          title: "Serah Terima & Dampingi",
          desc: "Setelah produk siap, kami tetap mendampingi untuk memastikan semuanya berjalan lancar dan sesuai harapan.",
          icon: ShieldCheck
        },
      ],
      cta: {
        title: "Punya ide yang ingin dibahas?",
        desc: "Obrolan santai bisa jadi awal dari sesuatu yang hebat. Mari diskusikan potensi teknologi untuk Anda.",
        btn: "Ngobrol Bersama Kami"
      }
    },
    footer: {
      ctaTitle: "Mari buat sesuatu",
      ctaItalic: "yang bermakna.",
      ctaBtn: "Hubungi Kami",
      tagline: "Kolektif engineer dan desainer yang berfokus pada pembangunan solusi digital yang berdampak.",
      labels: {
        connectivity: "Koneksi",
        studio: "Creative Studio",
        location: "Surabaya, Indonesia",
        channels: "Hubungi Melalui"
      },
      nav: {
        company: { title: "Navigasi", links: [{ n: "Karya", h: "#services" }, { n: "Tentang Kami", h: "#about" }, { n: "Proses", h: "#process" }] },
        social: { title: "Ruang Sosial", links: ["LinkedIn", "Instagram", "Twitter X"] }
      }
    }
  },
  en: {
    hero: {
      badge: "Creative Tech Collective",
      title: "Architecting the",
      titleItalic: "Digital Future.",
      desc: "Indev Tech is a digital engineering studio where ambitious ideas come to life. We are more than developers; we are tech partners growing with your vision.",
      btns: ["Start a Talk", "Explore Works"]
    },
    clients: "Collaborating With Great Visions",
    services: {
      tag: "Our Expertise",
      title: "Digital Craft &",
      titleItalic: "Engineering.",
      desc: "We provide digital services that help your business grow effectively and efficiently.",
      items: [
        {
          title: "Website Basic",
          desc: "Professional websites for small businesses or personal use, designed to be user-friendly and engaging.",
          icon: Globe
        },
        {
          title: "Website Custom",
          desc: "Websites built according to your business needs, complete with unique features and design.",
          icon: Code
        },
        {
          title: "Mobile App",
          desc: "Mobile applications for Android & iOS that enhance interaction and user experience.",
          icon: Smartphone
        },
        {
          title: "Maintenance & Support",
          desc: "Maintenance and support services to keep your website or app secure and running smoothly.",
          icon: ShieldCheck
        },
        {
          title: "Digital Consulting",
          desc: "Guidance and digital strategy solutions to optimize your business processes and online presence.",
          icon: Layers
        },
      ],
      more: "View Details",
    },
    about: {
      tag: "Who We Are",
      title: "Creativity Meets",
      titleItalic: "Experimentation.",
      desc: "Indev Tech was born from a passion for bringing world-class technology to creators and innovators. We are a collective believing every line of code should have a purpose.",
      features: [
        { icon: Zap, title: "Artisan Standard", desc: "Every project is crafted with high-level precision, much like a piece of art." },
        { icon: Briefcase, title: "Co-Exploration", desc: "We don't dictate; we listen and evolve alongside your challenges." }
      ],
      exp: "5+ Years Collaborating"
    },
    process: {
      tag: "Workflow",
      title: "From Idea to",
      titleItalic: "Digital Work.",
      desc: "We want you to feel involved at every step. Our process is simple, clear, and easy to follow.",
      steps: [
        {
          title: "Talk & Understand",
          desc: "We sit together and have a casual conversation about your vision and needs, ensuring the solution fits perfectly.",
          icon: MessageSquare
        },
        {
          title: "Create Initial Sketch",
          desc: "We make simple sketches or prototypes so you can see and feel the result before technical development.",
          icon: Search
        },
        {
          title: "Build & Develop",
          desc: "Our team starts building the digital product, providing regular updates so you always know the progress.",
          icon: Zap
        },
        {
          title: "Handover & Support",
          desc: "Once the product is ready, we continue supporting to ensure everything runs smoothly and meets expectations.",
          icon: ShieldCheck
        },
      ],
      cta: {
        title: "Have an idea to discuss?",
        desc: "A casual chat can be the start of something great. Let's explore the tech potential for you.",
        btn: "Chat With Us"
      }
    },
    footer: {
      ctaTitle: "Let's build something",
      ctaItalic: "meaningful.",
      ctaBtn: "Get in Touch",
      tagline: "A collective of engineers and designers focused on building impactful digital solutions.",
      labels: {
        connectivity: "Connectivity",
        studio: "Creative Studio",
        location: "Surabaya, Indonesia",
        channels: "Reach Us Via"
      },
      nav: {
        company: { title: "Navigation", links: [{ n: "Works", h: "#services" }, { n: "About Us", h: "#about" }, { n: "Process", h: "#process" }] },
        social: { title: "Social Spaces", links: ["LinkedIn", "Instagram", "Twitter X"] }
      }
    }
  }
}


export default function Home() {
  const [lang, setLang] = useState<"id" | "en">("id")
  const [showScrollTop, setShowScrollTop] = useState(false)
  const t = useMemo(() => content[lang], [lang])

  // Logic for Back to Top Button visibility
  useEffect(() => {
    const handleScroll = () => setShowScrollTop(window.scrollY > 800)
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" })
  }

  return (
    <main className="relative min-h-screen bg-background text-foreground selection:bg-primary/30">
      <Navbar lang={lang} setLang={setLang} />

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden px-6 pt-20">
        <div className="absolute inset-0 z-0">
          <div className="absolute top-1/4 -left-1/4 w-[600px] h-[600px] bg-primary/20 rounded-full blur-[160px] opacity-50" />
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:60px_60px] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_0%,#000_70%,transparent_100%)]" />
        </div>

        <motion.div initial="hidden" animate="visible" variants={staggerContainer} className="relative z-10 max-w-6xl text-center space-y-12">
          <motion.div variants={fadeInUp} className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs font-bold uppercase tracking-[0.2em]">
            <Rocket className="w-3.5 h-3.5" /> {t.hero.badge}
          </motion.div>

          <motion.h1 variants={fadeInUp} className="text-5xl sm:text-7xl md:text-8xl lg:text-9xl font-serif leading-[0.95] tracking-tight text-balance">
            {t.hero.title} <br />
            <span className="text-primary italic font-light">{t.hero.titleItalic}</span>
          </motion.h1>

          <motion.p variants={fadeInUp} className="text-muted-foreground text-lg md:text-2xl max-w-3xl mx-auto font-light leading-relaxed text-balance">
            {t.hero.desc}
          </motion.p>

          <motion.div variants={fadeInUp} className="flex flex-col sm:flex-row items-center justify-center gap-6 pt-6">
            <button className="w-full sm:w-auto px-12 py-6 bg-primary text-primary-foreground rounded-full font-bold text-lg flex items-center justify-center gap-3 hover:scale-105 transition-all shadow-xl shadow-primary/25">
              {t.hero.btns[0]} <ArrowRight className="w-5 h-5" />
            </button>
            <button className="w-full sm:w-auto px-12 py-6 border border-border bg-background/50 backdrop-blur-md rounded-full font-bold text-lg hover:bg-secondary transition-all">
              {t.hero.btns[1]}
            </button>
          </motion.div>
        </motion.div>
      </section>

      {/* Infinite Marquee */}
      <section className="py-24 border-y border-border/50 bg-secondary/5 overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 mb-12">
          <p className="text-center text-[10px] font-bold uppercase tracking-[0.5em] text-muted-foreground">
            {t.clients}
          </p>
        </div>

        <div className="relative flex overflow-x-hidden">
          <motion.div
            className="flex whitespace-nowrap gap-16 md:gap-24 items-center"
            animate={{ x: ["0%", "-50%"] }}
            transition={{ ease: "linear", duration: 30, repeat: Infinity }}
          >
            {[...clientLogos, ...clientLogos].map((logo, i) => (
              <div
                key={i}
                className="relative w-32 h-12 md:w-40 md:h-16 flex items-center justify-center grayscale opacity-40 hover:grayscale-0 hover:opacity-100 transition-all duration-500 cursor-default px-4"
              >
                <img
                  src={logo.url}
                  alt={`${logo.name} Partner Indev Tech`}
                  className="max-w-full max-h-full object-contain pointer-events-none"
                  loading="lazy"
                />
              </div>
            ))}
          </motion.div>

          {/* Gradient Overlays untuk efek fade di pinggir */}
          <div className="pointer-events-none absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-background to-transparent z-10" />
          <div className="pointer-events-none absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-background to-transparent z-10" />
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-40 px-6">
        <div className="max-w-7xl mx-auto">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={fadeInUp} className="space-y-6 mb-28">
            <div className="flex items-center gap-4">
              <div className="h-px w-12 bg-primary" />
              <span className="text-primary text-xs uppercase tracking-[0.4em] font-black">{t.services.tag}</span>
            </div>
            <h2 className="text-5xl md:text-7xl font-serif leading-[1.1]">
              {t.services.title} <br />
              <span className="text-primary italic font-light">{t.services.titleItalic}</span>
            </h2>
            <p className="text-muted-foreground text-xl max-w-2xl font-light">{t.services.desc}</p>
          </motion.div>

          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={staggerContainer} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {t.services.items.map((item, i) => (
              <motion.div key={i} variants={fadeInUp} whileHover={{ y: -15 }} className="group p-12 rounded-[48px] border border-border/60 bg-gradient-to-br from-secondary/30 to-background hover:border-primary/40 transition-all duration-500">
                <div className="w-20 h-20 rounded-3xl bg-primary/10 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-500 mb-10 shadow-inner">
                  <item.icon className="w-10 h-10" />
                </div>
                <h3 className="text-3xl font-serif mb-6 group-hover:text-primary transition-colors">{item.title}</h3>
                <p className="text-muted-foreground text-base leading-relaxed font-light mb-8">{item.desc}</p>
                {/* <div className="flex items-center gap-3 text-primary font-bold text-xs tracking-[0.2em] uppercase opacity-0 group-hover:opacity-100 transition-all transform translate-x-[-10px] group-hover:translate-x-0">
                  {t.services.more} <Plus className="w-4 h-4" />
                </div> */}
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-40 px-6 bg-secondary/5 relative overflow-hidden">
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="grid lg:grid-cols-2 gap-24 items-center">
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={imageReveal} className="relative">
              <div className="aspect-[4/5] rounded-[80px] overflow-hidden shadow-2xl border-[12px] border-background">
                <img src="https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=800" alt="Leadership" className="w-full h-full object-cover" />
              </div>
              <div className="absolute -bottom-10 -right-10 w-48 h-48 bg-primary rounded-full flex items-center justify-center text-primary-foreground p-8 text-center font-serif italic text-lg leading-tight -rotate-12 shadow-2xl">
                {t.about.exp}
              </div>
            </motion.div>

            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={staggerContainer} className="space-y-12">
              <div className="space-y-6">
                <span className="text-primary text-xs uppercase tracking-[0.5em] font-black">{t.about.tag}</span>
                <h2 className="text-5xl md:text-7xl font-serif leading-tight">{t.about.title} <br /><span className="text-primary italic font-light">{t.about.titleItalic}</span></h2>
                <p className="text-muted-foreground text-xl leading-relaxed font-light">{t.about.desc}</p>
              </div>
              <div className="grid gap-8">
                {t.about.features.map((f, i) => (
                  <motion.div variants={fadeInUp} key={i} className="flex items-start gap-8 p-6 rounded-3xl hover:bg-background transition-colors border border-transparent hover:border-border">
                    <div className="w-16 h-16 shrink-0 rounded-2xl bg-background border border-border flex items-center justify-center text-primary shadow-xl">
                      <f.icon className="w-7 h-7" />
                    </div>
                    <div>
                      <h4 className="font-bold text-xl mb-2">{f.title}</h4>
                      <p className="text-muted-foreground leading-relaxed">{f.desc}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section id="process" className="py-40 px-6 overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp} className="text-center space-y-6 mb-32">
            <span className="text-primary text-xs uppercase tracking-[0.5em] font-black">{t.process.tag}</span>
            <h2 className="text-5xl md:text-8xl font-serif leading-tight">
              {t.process.title} <br />
              <span className="text-primary italic font-light">{t.process.titleItalic}</span>
            </h2>
            <p className="text-muted-foreground text-xl max-w-2xl mx-auto font-light">{t.process.desc}</p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 relative">
            <div className="hidden lg:block absolute top-1/2 left-0 w-full h-px bg-border -z-10" />
            {t.process.steps.map((step, i) => (
              <motion.div key={i} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp} className="relative group">
                <div className="bg-background border border-border p-10 rounded-[40px] space-y-8 hover:border-primary/40 transition-all duration-500 hover:shadow-2xl h-full flex flex-col justify-between">
                  <div className="flex justify-between items-start">
                    <div className="text-5xl font-serif italic text-primary/20 group-hover:text-primary transition-colors">0{i + 1}</div>
                    <div className="w-12 h-12 rounded-2xl bg-secondary/50 flex items-center justify-center border border-border group-hover:bg-primary group-hover:text-primary-foreground transition-all">
                      <step.icon className="w-5 h-5" />
                    </div>
                  </div>
                  <div className="space-y-4">
                    <h4 className="text-2xl font-serif">{step.title}</h4>
                    <p className="text-muted-foreground font-light leading-relaxed text-sm">{step.desc}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp} className="mt-32 p-12 md:p-20 rounded-[60px] bg-primary text-primary-foreground text-center space-y-8 shadow-2xl">
            <h3 className="text-3xl md:text-5xl font-serif max-w-3xl mx-auto">{t.process.cta.title}</h3>
            <p className="text-primary-foreground/80 text-lg max-w-2xl mx-auto font-light">{t.process.cta.desc}</p>
            <button className="px-10 py-5 bg-background text-foreground rounded-full font-bold hover:scale-105 transition-all shadow-xl">{t.process.cta.btn}</button>
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
              <a href="mailto:hello@indevtechsolutions.com" className="inline-flex group px-10 py-5 bg-primary text-primary-foreground rounded-full font-bold items-center gap-3 hover:pr-12 transition-all shadow-2xl">
                {t.footer.ctaBtn} <ArrowRight className="w-5 h-5 group-hover:translate-x-2 transition-transform" />
              </a>
            </div>

            <div className="grid sm:grid-cols-2 gap-6">
              <div className="group p-8 rounded-[32px] bg-secondary/10 border border-border/40 hover:border-primary/20 transition-all space-y-6">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center text-primary"><Globe className="w-4 h-4" /></div>
                  <span className="text-primary uppercase tracking-widest font-bold text-[10px]">{t.footer.labels.connectivity}</span>
                </div>
                <div>
                  <h4 className="text-lg font-bold mb-1">{t.footer.labels.studio}</h4>
                  <p className="text-xs text-muted-foreground">{t.footer.labels.location}</p>
                </div>
              </div>

              <div className="group p-8 rounded-[32px] bg-primary text-primary-foreground space-y-6 shadow-xl">
                <div className="flex items-center gap-3 border-b border-white/10 pb-4">
                  <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center text-white"><Mail className="w-4 h-4" /></div>
                  <span className="uppercase tracking-widest font-bold text-[10px] text-white/70">{t.footer.labels.channels}</span>
                </div>
                <div className="space-y-1">
                  <p className="text-lg font-medium tracking-tight">hello@indevtechsolutions.com</p>
                  <p className="text-xs text-white/70 font-normal">+62 838-7799-5846</p>
                </div>
              </div>
            </div>
          </div>

          <div className="flex flex-col md:flex-row justify-between pt-20 border-t border-border gap-16">
            <div className="space-y-8 max-w-sm">
              <Link href="/" className="text-4xl font-serif font-bold tracking-tighter">Indev Tech<span className="text-primary italic">.</span></Link>
              <p className="text-muted-foreground font-light">{t.footer.tagline}</p>
              <p className="text-[10px] uppercase tracking-widest text-muted-foreground/60 font-bold">© 2025 Indev Tech Solutions. All Rights Reserved.</p>
            </div>

            <div className="grid grid-cols-2 gap-20">
              {Object.entries(t.footer.nav).map(([key, nav]: any) => (
                <div key={key} className="space-y-8">
                  <p className="font-bold text-xs uppercase tracking-[0.3em]">{nav.title}</p>
                  <ul className="space-y-4 text-muted-foreground">
                    {nav.links.map((link: any, i: number) => (
                      <li key={i}>
                        {link.h ? (
                          <Link href={link.h} className="hover:text-primary transition-colors">{link.n}</Link>
                        ) : (
                          <a href="#" className="hover:text-primary transition-colors">{link}</a>
                        )}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>
      </footer>

      {/* Back to Top Button */}
      <AnimatePresence>
        {showScrollTop && (
          <motion.button
            initial={{ opacity: 0, scale: 0.5, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.5, y: 20 }}
            onClick={scrollToTop}
            className="fixed bottom-8 right-8 z-50 w-14 h-14 bg-primary text-primary-foreground rounded-full flex items-center justify-center shadow-2xl hover:scale-110 transition-transform"
            aria-label="Back to Top"
          >
            <ChevronUp className="w-6 h-6" />
          </motion.button>
        )}
      </AnimatePresence>
    </main>
  )
}