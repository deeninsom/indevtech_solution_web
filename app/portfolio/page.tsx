"use client"

import { useState, useMemo } from "react"
import { Navbar } from "@/components/navbar"
import { cn } from "@/lib/utils"
import { ArrowRight, Globe, Smartphone, Layers, Code, ShieldCheck, Sparkles } from "lucide-react"

export default function PortfolioPage() {
  const [lang, setLang] = useState<"id" | "en">("id")
  const [activeCategory, setActiveCategory] = useState("all")

  const dict = {
    id: {
      hero: {
        tag: "Portfolio",
        title: "Karya yang Kami",
        titleItalic: "Banggakan.",
        desc: "Kumpulan proyek digital yang telah kami kembangkan untuk berbagai industri dengan solusi inovatif dan teknologi terkini.",
      },
      categories: [
        { id: "all", label: "Semua Proyek", icon: Layers },
        { id: "basic", label: "Company Profile", icon: Globe },
        { id: "custom", label: "Custom Website", icon: Code },
        { id: "mobile", label: "Mobile App", icon: Smartphone },
        { id: "maintenance", label: "Support", icon: ShieldCheck },
        { id: "thesis", label: "Project Skripsi", icon: Layers },
      ],
      empty: {
        title: "Proyek Berikutnya Adalah Milik Anda",
        desc: "Kami belum menampilkan proyek di kategori ini, tapi kami siap mewujudkan ide Anda menjadi karya hebat berikutnya.",
        button: "Mulai Proyek Sekarang",
      },
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
      },
      categories: [
        { id: "all", label: "All Projects", icon: Layers },
        { id: "basic", label: "Company Profile", icon: Globe },
        { id: "custom", label: "Custom Website", icon: Code },
        { id: "mobile", label: "Mobile App", icon: Smartphone },
        { id: "maintenance", label: "Support", icon: ShieldCheck },
        { id: "thesis", label: "Thesis Project", icon: Layers },
      ],
      empty: {
        title: "Your Project Could Be Here",
        desc: "We haven't showcased a project in this category yet. Be the first to build something amazing with us!",
        button: "Start Project Now",
      },
      cta: {
        title: "Ready for the Next",
        titleItalic: "Project?",
        desc: "Let's discuss how we can help turn your digital vision into reality.",
        button: "Start Free Consultation",
      },
    },
  }

  const t = dict[lang]

  // Data Proyek (Hanya kategori tertentu untuk testing empty state)
  const projects = [
    {
      id: 1,
      title: "Lumina Enterprise Analytics",
      category: "custom",
      type: lang === "id" ? "Custom Website & Dashboard" : "Custom Website & Dashboard",
      desc: lang === "id" ? "Sistem internal analitik untuk mengelola data perusahaan." : "Internal analytics system to manage corporate data.",
      tech: ["Next.js", "TypeScript", "PostgreSQL"],
      year: "2024",
    },
    {
      id: 2,
      title: "Vortex Fintech Gateway",
      category: "mobile",
      type: "Mobile Application",
      desc: lang === "id" ? "Aplikasi mobile untuk manajemen keuangan." : "Mobile application for financial management.",
      tech: ["React Native", "Node.js", "Stripe"],
      year: "2024",
    },
    // Kategori 'basic', 'maintenance', dan 'thesis' sengaja dikosongkan untuk testing
  ]

  const filteredProjects = useMemo(() => {
    return activeCategory === "all" ? projects : projects.filter((p) => p.category === activeCategory)
  }, [activeCategory, lang])

  const handleContact = () => {
    const phone = "6283877995846"
    const message = lang === "id"
      ? "Halo Indevtech, saya ingin bertanya tentang proyek " + activeCategory
      : "Hello Indevtech, I want to ask about " + activeCategory + " project."
    window.open(`https://wa.me/${phone}?text=${encodeURIComponent(message)}`, "_blank")
  }

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar lang={lang} setLang={setLang} />

      {/* Hero Section */}
      <section className="pt-40 pb-20 px-6 border-b border-border/50">
        <div className="max-w-7xl mx-auto">
          <div className="space-y-6 max-w-4xl">
            <span className="text-primary text-xs uppercase tracking-[0.3em] font-black">{t.hero.tag}</span>
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-serif leading-tight">
              {t.hero.title} <span className="text-primary italic">{t.hero.titleItalic}</span>
            </h1>
            <p className="text-muted-foreground text-xl leading-relaxed max-w-2xl">{t.hero.desc}</p>
          </div>
        </div>
      </section>

      {/* Category Filter */}
      <section className="py-12 px-6 sticky top-20 bg-background/95 backdrop-blur-md border-b border-border/50 z-40 overflow-x-auto scrollbar-hide">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-nowrap md:flex-wrap gap-3">
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

      {/* Project Grid / Empty State */}
      <section className="py-20 px-6 min-h-[600px] flex items-center">
        <div className="max-w-7xl mx-auto w-full">
          {filteredProjects.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16">
              {filteredProjects.map((project) => (
                <div key={project.id} className="group flex flex-col gap-6">
                  <div className="aspect-[4/3] bg-secondary/50 rounded-[40px] overflow-hidden relative shadow-2xl">
                    <img
                      src={`https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=1200&h=900`}
                      alt={project.title}
                      className="object-cover w-full h-full group-hover:scale-110 transition-transform duration-1000"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end p-8">
                      <div className="flex flex-wrap gap-2">
                        {project.tech.map((tech, idx) => (
                          <span key={idx} className="px-3 py-1 bg-background/80 backdrop-blur-sm border border-border/50 rounded-full text-[10px] uppercase tracking-wider font-bold">
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>

                  <div className="px-2 flex justify-between items-start gap-4">
                    <div className="space-y-2">
                      <span className="text-primary text-[10px] uppercase tracking-[0.2em] font-black">{project.type}</span>
                      <h3 className="text-3xl font-serif leading-tight group-hover:text-primary transition-colors">{project.title}</h3>
                      <p className="text-muted-foreground font-light leading-relaxed">{project.desc}</p>
                    </div>
                    <button onClick={handleContact} className="w-12 h-12 rounded-full border border-border flex items-center justify-center group-hover:bg-primary group-hover:border-primary group-hover:text-primary-foreground transition-all flex-shrink-0">
                      <ArrowRight className="w-5 h-5 -rotate-45 group-hover:rotate-0 transition-transform" />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            /* --- BEAUTIFUL EMPTY STATE --- */
            <div className="max-w-2xl mx-auto text-center space-y-8 py-20 border-2 border-dashed border-border/50 rounded-[40px] bg-secondary/10 px-6">
              <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <Sparkles className="w-10 h-10 text-primary animate-pulse" />
              </div>
              <div className="space-y-4">
                <h3 className="text-3xl md:text-4xl font-serif leading-tight">
                  {t.empty.title}
                </h3>
                <p className="text-muted-foreground text-lg leading-relaxed">
                  {t.empty.desc}
                </p>
              </div>
              <button
                onClick={handleContact}
                className="inline-flex items-center gap-2 text-primary font-bold hover:gap-4 transition-all group"
              >
                {t.empty.button} <ArrowRight className="w-5 h-5" />
              </button>
            </div>
          )}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-32 px-6 bg-secondary/20 border-t border-border/50">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <h2 className="text-4xl md:text-6xl font-serif leading-tight">
            {t.cta.title} <span className="text-primary italic">{t.cta.titleItalic}</span>
          </h2>
          <p className="text-muted-foreground text-xl leading-relaxed">{t.cta.desc}</p>
          <button
            onClick={handleContact}
            className="inline-flex items-center gap-3 px-10 py-5 bg-primary text-primary-foreground rounded-full font-bold hover:scale-105 transition-all shadow-lg shadow-primary/20 text-lg"
          >
            {t.cta.button} <ArrowRight className="w-5 h-5" />
          </button>
        </div>
      </section>

      <footer className="py-16 px-6 border-t border-border/50 text-center text-muted-foreground text-sm">
        <p>&copy; 2025 indevtech.id - {lang === "id" ? "Solusi Pengembangan Software" : "Software Development Solutions"}</p>
      </footer>
    </div>
  )
}