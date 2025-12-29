"use client"

import { useState } from "react"
import { Navbar } from "@/components/navbar"
import { cn } from "@/lib/utils"
import { ArrowRight, Globe, Smartphone, Layers, Code, ShieldCheck } from "lucide-react"
import { PartnersSection } from "@/components/partners-section"

export default function PortfolioPage() {
  // 1. State Bahasa (Default: ID)
  const [lang, setLang] = useState<"id" | "en">("id")
  const [activeCategory, setActiveCategory] = useState("all")

  // 2. Kamus Konten (Dictionary)
  const dict = {
    id: {
      hero: {
        tag: "Portfolio",
        title: "Karya yang Kami",
        titleItalic: "Banggakan.",
        desc: "Kumpulan proyek digital yang telah kami kembangkan untuk berbagai industri dengan solusi inovatif dan teknologi terkini.",
        stats: ["Proyek Selesai", "Klien Puas", "Tingkat Kepuasan", "Support Tersedia"],
      },
      categories: [
        { id: "all", label: "Semua Proyek", icon: Layers },
        { id: "web", label: "Web Application", icon: Globe },
        { id: "mobile", label: "Mobile App", icon: Smartphone },
        { id: "corporate", label: "Corporate Website", icon: Globe },
        { id: "custom", label: "Custom System", icon: Code },
        { id: "maintenance", label: "Support & Maintenance", icon: ShieldCheck },
      ],
      cta: {
        title: "Siap Membuat Proyek",
        titleItalic: "Berikutnya?",
        desc: "Mari diskusikan bagaimana kami dapat membantu mewujudkan visi digital Anda menjadi kenyataan.",
        button: "Mulai Konsultasi Gratis",
      },
    },
    en: {
      hero: {
        tag: "Portfolio",
        title: "Works We Are",
        titleItalic: "Proud Of.",
        desc: "A collection of digital projects we have developed for various industries with innovative solutions and the latest technology.",
        stats: ["Completed Projects", "Happy Clients", "Satisfaction Rate", "Support Available"],
      },
      categories: [
        { id: "all", label: "All Projects", icon: Layers },
        { id: "web", label: "Web Application", icon: Globe },
        { id: "mobile", label: "Mobile App", icon: Smartphone },
        { id: "corporate", label: "Corporate Website", icon: Globe },
        { id: "custom", label: "Custom System", icon: Code },
        { id: "maintenance", label: "Support & Maintenance", icon: ShieldCheck },
      ],
      cta: {
        title: "Ready for the Next",
        titleItalic: "Project?",
        desc: "Let's discuss how we can help turn your digital vision into reality.",
        button: "Start Free Consultation",
      },
    },
  }

  const t = dict[lang]

  // 3. Data Proyek (Disesuaikan berdasarkan bahasa)
  const projects = [
    {
      id: 1,
      title: "Lumina Enterprise Analytics",
      category: "web",
      type: lang === "id" ? "Platform Analitik Data" : "Data Analytics Platform",
      desc:
        lang === "id"
          ? "Platform analitik data real-time untuk enterprise dengan visualisasi interaktif dan dashboard kustom."
          : "Real-time data analytics platform for enterprises with interactive visualizations and custom dashboards.",
      img: "abstract analytics dashboard with charts",
      tech: ["Next.js", "TypeScript", "PostgreSQL", "D3.js"],
      year: "2024",
    },
    {
      id: 2,
      title: "Vortex Fintech Gateway",
      category: "mobile",
      type: lang === "id" ? "Aplikasi Perbankan & Pembayaran" : "Payment & Banking App",
      desc:
        lang === "id"
          ? "Aplikasi mobile banking next-generation dengan fitur pembayaran instan dan manajemen keuangan AI."
          : "Next-generation mobile banking app featuring instant payments and AI-driven financial management.",
      img: "modern mobile banking app interface",
      tech: ["React Native", "Node.js", "MongoDB", "Stripe"],
      year: "2024",
    },
    // ... Anda bisa menambahkan proyek lainnya dengan pola kondisional lang === "id" yang sama
  ]

  const filteredProjects = activeCategory === "all" ? projects : projects.filter((p) => p.category === activeCategory)

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* 4. Kirim props ke Navbar */}
      <Navbar lang={lang} setLang={setLang} />

      <section className="pt-40 pb-20 px-6 border-b border-border/50 animate-fade-in-up">
        <div className="max-w-7xl mx-auto">
          <div className="space-y-6 max-w-4xl">
            <span className="text-primary text-xs uppercase tracking-[0.3em] font-black">{t.hero.tag}</span>
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-serif leading-tight">
              {t.hero.title} <span className="text-primary italic">{t.hero.titleItalic}</span>
            </h1>
            <p className="text-muted-foreground text-xl leading-relaxed max-w-2xl">{t.hero.desc}</p>
          </div>

          {/* <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-16 pt-16 border-t border-border/50">
            <div className="space-y-2">
              <div className="text-5xl font-serif text-primary">50+</div>
              <div className="text-muted-foreground text-sm uppercase tracking-widest">{t.hero.stats[0]}</div>
            </div>
            <div className="space-y-2">
              <div className="text-5xl font-serif text-primary">35+</div>
              <div className="text-muted-foreground text-sm uppercase tracking-widest">{t.hero.stats[1]}</div>
            </div>
            <div className="space-y-2">
              <div className="text-5xl font-serif text-primary">98%</div>
              <div className="text-muted-foreground text-sm uppercase tracking-widest">{t.hero.stats[2]}</div>
            </div>
            <div className="space-y-2">
              <div className="text-5xl font-serif text-primary">24/7</div>
              <div className="text-muted-foreground text-sm uppercase tracking-widest">{t.hero.stats[3]}</div>
            </div>
          </div> */}
        </div>
      </section>

      <section
        className="py-12 px-6 sticky top-20 bg-background/95 backdrop-blur-md border-b border-border/50 z-40 overflow-x-auto scrollbar-hide animate-fade-in"
        style={{ animationDelay: "0.2s" }}
      >
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-nowrap md:flex-wrap gap-3 pb-2">
            {t.categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={cn(
                  "px-6 py-3 rounded-full border text-sm font-medium uppercase tracking-wider transition-all flex items-center gap-2 whitespace-nowrap",
                  activeCategory === cat.id
                    ? "bg-primary text-primary-foreground border-primary shadow-lg shadow-primary/20"
                    : "border-border/50 hover:border-primary/50 hover:bg-secondary/50",
                )}
              >
                <cat.icon className="w-4 h-4" />
                {cat.label}
              </button>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 px-6 animate-fade-in-up" style={{ animationDelay: "0.3s" }}>
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16 animate-stagger-container">
            {filteredProjects.map((project) => (
              <div key={project.id} className="group flex flex-col gap-6 animate-stagger-item">
                <div className="aspect-[4/3] bg-secondary/50 rounded-[40px] overflow-hidden relative shadow-2xl">
                  <img
                    src={`https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=1200&h=900`}
                    alt={project.title}
                    className="object-cover w-full h-full group-hover:scale-110 transition-transform duration-1000"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end p-8">
                    <div className="space-y-3 w-full">
                      <div className="flex flex-wrap gap-2">
                        {project.tech.map((tech, idx) => (
                          <span
                            key={idx}
                            className="px-3 py-1 bg-background/80 backdrop-blur-sm border border-border/50 rounded-full text-xs uppercase tracking-wider font-bold"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                  <div className="absolute top-6 right-6 px-4 py-2 bg-primary/90 backdrop-blur-sm rounded-full text-primary-foreground text-xs font-bold uppercase tracking-wider">
                    {project.year}
                  </div>
                </div>
                <div className="px-2 space-y-4">
                  <div className="flex justify-between items-start gap-4">
                    <div className="flex-grow space-y-2">
                      <span className="text-primary text-xs uppercase tracking-widest font-bold">{project.type}</span>
                      <h3 className="text-3xl font-serif leading-tight group-hover:text-primary transition-colors">
                        {project.title}
                      </h3>
                      <p className="text-muted-foreground leading-relaxed">{project.desc}</p>
                    </div>
                    <div className="w-12 h-12 rounded-full border border-border flex items-center justify-center group-hover:bg-primary group-hover:border-primary group-hover:text-primary-foreground transition-all flex-shrink-0">
                      <ArrowRight className="w-5 h-5 -rotate-45 group-hover:rotate-0 transition-transform" />
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <div className="animate-fade-in-up" style={{ animationDelay: "0.4s" }}>
        <PartnersSection lang={lang} />
      </div>

      <section
        className="py-32 px-6 bg-secondary/20 border-t border-border/50 animate-fade-in-up"
        style={{ animationDelay: "0.5s" }}
      >
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <h2 className="text-4xl md:text-6xl font-serif leading-tight">
            {t.cta.title} <span className="text-primary italic">{t.cta.titleItalic}</span>
          </h2>
          <p className="text-muted-foreground text-xl leading-relaxed">{t.cta.desc}</p>
          <button className="inline-flex items-center gap-3 px-10 py-5 bg-primary text-primary-foreground rounded-full font-bold hover:scale-105 transition-all shadow-lg shadow-primary/20 text-lg">
            {t.cta.button} <ArrowRight className="w-5 h-5" />
          </button>
        </div>
      </section>

      <footer
        className="py-16 px-6 border-t border-border/50 text-center text-muted-foreground text-sm animate-fade-in-up"
        style={{ animationDelay: "0.6s" }}
      >
        <p>
          &copy; 2025 indevtech.id - {lang === "id" ? "Solusi Pengembangan Software" : "Software Development Solutions"}
        </p>
      </footer>
    </div>
  )
}
