"use client"

import { useState } from "react"
import { Navbar } from "@/components/navbar"
import { cn } from "@/lib/utils"
import { ArrowRight, ArrowUpRight } from "lucide-react"
import { motion, Variants } from "framer-motion"

// --- Animation Variants ---
const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1, y: 0,
    transition: { duration: 0.8, ease: [0.21, 0.47, 0.32, 0.98] }
  }
}

export default function portofolioPage() {
  const [lang, setLang] = useState<"id" | "en">("id")

  const dict = {
    id: {
      hero: {
        tag: "Selected Works",
        title: "Karya Unggulan",
        titleHighlight: "Kami.",
        desc: "Bukan sekadar desain visual. Berikut adalah beberapa bukti bagaimana kami membangun infrastruktur digital yang memecahkan masalah operasional dan meningkatkan kredibilitas klien kami.",
      },
      projectLabels: {
        viewCase: "Kunjungi Website",
        year: "Tahun Rilis",
        type: "Jenis Layanan"
      },
      cta: {
        title: "Punya masalah yang ingin",
        titleHighlight: "diselesaikan?",
        desc: "Mari luangkan waktu 30 menit. Kita akan membedah alur operasional Anda dan merancang solusi teknologinya.",
        button: "Jadwalkan Bedah Bisnis",
      },
    },
    en: {
      hero: {
        tag: "Selected Works",
        title: "Our Featured",
        titleHighlight: "Projects.",
        desc: "Not just visual design. Here is the proof of how we build digital infrastructure that solves operational problems and boosts our clients' credibility.",
      },
      projectLabels: {
        viewCase: "Visit Website",
        year: "Release Year",
        type: "Service Type"
      },
      cta: {
        title: "Have a bottleneck you want",
        titleHighlight: "to solve?",
        desc: "Let's take 30 minutes. We'll dissect your operational flow and architect the tech solution.",
        button: "Schedule Workflow Audit",
      },
    },
  }

  const t = dict[lang]

  // Data proyek tetap sama, tidak perlu atribut 'category' lagi
  const projects = [
    {
      id: 1,
      title: "Woodelio Kitchen",
      type: "Corporate Web Portal",
      desc: lang === "id"
        ? "Spesialis Kitchen Set Berkualitas Tinggi dengan Harga Rasional"
        : "Specialized in high-quality kitchen sets with competitive prices.",
      year: "2025",
      image: "/portofolio/mockup-woodelio.png",
      url: "https://customkitchenbandung.com/",
    },
    {
      id: 2,
      title: "PT New Star Asia",
      type: "Corporate Web Portal",
      desc: lang === "id"
        ? "Mendigitalisasi kehadiran B2B untuk penyedia jasa konstruksi dan perawatan mesin industri. Dibangun untuk meningkatkan kepercayaan mitra dan kelancaran informasi profil (general supplies)."
        : "Digitalizing B2B presence for construction and industrial machine maintenance services. Built to increase partner trust and smooth profile information (general supplies).",
      year: "2025",
      image: "/portofolio/mockup-wjp.png",
      url: "https://wibawajatiputra.com",
    },
    {
      id: 3,
      title: "PT New Star Asia",
      type: "Company Profile System",
      desc: lang === "id"
        ? "Membangun representasi digital tingkat enterprise untuk mitra produksi alas kaki berskala besar. Menghadirkan standar kualitas tinggi perusahaan langsung ke hadapan calon klien global."
        : "Building an enterprise-level digital representation for a large-scale footwear production partner. Delivering the company's high quality standards directly to potential global clients.",
      year: "2026",
      image: "/portofolio/mockup-newfei.png",
      url: "https://newfeiofficial.com",
    },
    {
      id: 4,
      title: "PT Mitrakon Persada Abadi",
      type: "Business Profile & Infrastructure",
      desc: lang === "id"
        ? "Merancang struktur informasi layanan terpadu (Fire Alarm, Hydrant, Suppression System). Memastikan perusahaan tampil solid dan mematuhi standar visibilitas NFPA & SNI di ranah digital."
        : "Designing an integrated service information structure (Fire Alarm, Hydrant, Suppression System). Ensuring the company appears solid and complies with NFPA & SNI visibility standards digitally.",
      year: "2026",
      image: "/portofolio/mockup-mitrakon.png",
      url: "https://mitrakon.co.id",
    },
    {
      id: 5,
      title: "PT Maju Inspirasi Bangsa",
      type: "Digital Presence",
      desc: lang === "id"
        ? "Otomatisasi penyampaian informasi untuk solusi acara profesional. Menjadikan website sebagai garda terdepan untuk menarik prospek B2B yang mencari layanan serba guna."
        : "Information delivery automation for professional event solutions. Making the website the frontline to attract B2B prospects looking for all-in-one services.",
      year: "2026",
      image: "/portofolio/mockup-abeventorg.png",
      url: "https://abeventorg.com/",
    },
    {
      id: 6, // Perbaikan ID duplikat
      title: "PT Yama Electrical Support",
      type: "Industrial Tech Portal",
      desc: lang === "id"
        ? "Sebuah platform yang merepresentasikan solusi teknologi tinggi (PLC, HMI, SCADA, AGV). Kami memastikan arsitektur website mencerminkan efisiensi operasional yang ditawarkan klien kepada pelanggannya."
        : "A platform representing high-tech solutions (PLC, HMI, SCADA, AGV). We ensured the website architecture reflects the operational efficiency the client offers to its customers.",
      year: "2026",
      image: "/portofolio/mockup-yama.png",
      url: "https://yamaelectrical.com/",
    }
  ]

  // SEO: Schema Markup (JSON-LD)
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    "name": lang === "id" ? "Karya Unggulan Indevtech" : "Indevtech Selected Works",
    "description": t.hero.desc,
    "hasPart": projects.map((project) => ({
      "@type": "CreativeWork",
      "name": project.title,
      "headline": project.title,
      "description": project.desc,
      "image": project.image,
      "dateCreated": project.year
    }))
  }

  const handleContact = () => {
    const phone = "6283877995846"
    const message = lang === "id"
      ? `Halo Indevtech, saya tertarik untuk membedah masalah operasional bisnis saya.`
      : `Hello Indevtech, I am interested in dissecting my business operational bottlenecks.`
    window.open(`https://wa.me/${phone}?text=${encodeURIComponent(message)}`, "_blank")
  }

  const openProject = (url: string) => {
    if (!url) return
    window.open(url, "_blank", "noopener,noreferrer")
  }

  return (
    <div className="min-h-screen bg-background text-foreground font-sans selection:bg-primary/30">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <Navbar lang={lang} setLang={setLang} />

      <main>
        {/* Hero Section (Bersih dan Fokus pada Teks) */}
        <section className="pt-48 pb-32 px-6">
          <div className="max-w-7xl mx-auto">
            <motion.header
              initial="hidden"
              animate="visible"
              variants={fadeInUp}
              className="space-y-8 max-w-4xl"
            >
              <div className="inline-flex items-center gap-3">
                <div className="w-2 h-2 rounded-full bg-primary" />
                <span className="text-foreground text-sm uppercase tracking-[0.2em] font-bold">{t.hero.tag}</span>
              </div>
              <h1 className="text-5xl sm:text-7xl md:text-8xl font-extrabold tracking-tight leading-[1.05]">
                {t.hero.title} <br className="hidden md:block" />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-blue-500">
                  {t.hero.titleHighlight}
                </span>
              </h1>
              <p className="text-muted-foreground text-lg md:text-xl leading-relaxed max-w-2xl font-light">
                {t.hero.desc}
              </p>
            </motion.header>
          </div>
        </section>

        {/* Project Showcase (Alternating Rows) */}
        <section className="py-20 px-6" aria-label="Selected Projects">
          <div className="max-w-7xl mx-auto space-y-40">
            {projects.map((project, index) => {
              const isEven = index % 2 !== 0;

              return (
                <motion.article
                  key={project.id}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, margin: "-100px" }}
                  variants={fadeInUp}
                  className={`flex flex-col gap-12 lg:gap-20 items-center ${isEven ? 'lg:flex-row-reverse' : 'lg:flex-row'}`}
                >
                  {/* Project Image Box */}
                  <div className="w-full lg:w-3/5 group cursor-pointer" onClick={() => openProject(project.url)}>
                    <div className="relative aspect-[4/3] lg:aspect-auto lg:h-[600px] w-full rounded-[40px] bg-secondary/10 border border-border/50 overflow-hidden flex items-center justify-center p-8 sm:p-16">

                      {/* Subtle Glow Background */}
                      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />

                      {/* Main Image Container */}
                      <div className="relative w-full h-full rounded-2xl shadow-2xl group-hover:scale-[1.02] group-hover:-translate-y-2 transition-transform duration-700 ease-out overflow-hidden">
                        <img
                          src={project.image}
                          alt={`Tampilan proyek ${project.title}`}
                          loading="lazy"
                          className="object-contain w-full h-full"
                        />
                      </div>

                      {/* Floating View Badge (Muncul saat hover) */}
                      <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
                        <div className="bg-foreground text-background px-6 py-3 rounded-full font-bold text-sm tracking-wider uppercase shadow-2xl flex items-center gap-2 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                          {t.projectLabels.viewCase} <ArrowUpRight className="w-4 h-4" />
                        </div>
                      </div>

                    </div>
                  </div>

                  {/* Project Details (Text) */}
                  <div className="w-full lg:w-2/5 flex flex-col justify-center space-y-8">

                    {/* Meta Data */}
                    <div className="flex items-center gap-6 border-b border-border/50 pb-6">
                      <div>
                        <p className="text-[10px] uppercase tracking-[0.2em] font-bold text-muted-foreground mb-1">{t.projectLabels.year}</p>
                        <p className="text-foreground font-medium">{project.year}</p>
                      </div>
                      <div className="w-px h-8 bg-border" />
                      <div>
                        <p className="text-[10px] uppercase tracking-[0.2em] font-bold text-muted-foreground mb-1">{t.projectLabels.type}</p>
                        <p className="text-primary font-bold">{project.type}</p>
                      </div>
                    </div>

                    {/* Title & Desc */}
                    <div className="space-y-6">
                      <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight text-foreground leading-[1.1]">
                        {project.title}
                      </h2>
                      <p className="text-muted-foreground text-lg leading-relaxed font-light">
                        {project.desc}
                      </p>
                    </div>

                    {/* Button Link */}
                    {project.url && (
                      <div className="pt-4">
                        <button
                          onClick={() => openProject(project.url)}
                          className="inline-flex items-center gap-3 text-sm font-bold uppercase tracking-widest text-foreground hover:text-primary transition-colors group"
                        >
                          {t.projectLabels.viewCase}
                          <span className="w-10 h-10 rounded-full border border-border flex items-center justify-center group-hover:border-primary group-hover:bg-primary/10 transition-all">
                            <ArrowRight className="w-4 h-4 -rotate-45 group-hover:rotate-0 transition-transform" />
                          </span>
                        </button>
                      </div>
                    )}
                  </div>
                </motion.article>
              );
            })}
          </div>
        </section>

        {/* Minimalist CTA Section */}
        <section className="py-40 px-6 border-t border-border/50 relative overflow-hidden">
          {/* Background Accents */}
          <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-primary/10 rounded-t-full blur-[120px] -z-10" />

          <div className="max-w-4xl mx-auto text-center space-y-10">
            <h2 className="text-4xl md:text-6xl font-extrabold tracking-tight leading-tight">
              {t.cta.title} <br />
              <span className="text-primary">{t.cta.titleHighlight}</span>
            </h2>
            <p className="text-muted-foreground text-xl leading-relaxed max-w-2xl mx-auto font-light">
              {t.cta.desc}
            </p>
            <button
              onClick={handleContact}
              className="inline-flex items-center gap-3 px-10 py-5 bg-foreground text-background rounded-full font-bold hover:scale-105 hover:bg-primary transition-all shadow-xl text-lg group"
            >
              {t.cta.button} <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" aria-hidden="true" />
            </button>
          </div>
        </section>
      </main>

      {/* Simplified Footer */}
      <footer className="py-12 px-6 border-t border-border/40 text-center text-muted-foreground text-sm font-light">
        <p>&copy; 2026 Indev Tech Solutions. All Rights Reserved. — {lang === "id" ? "Business Automation Partner" : "Business Automation Partner"}</p>
      </footer>
    </div>
  )
}