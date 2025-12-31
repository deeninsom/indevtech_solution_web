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

  const projects = [
    {
      id: 1,
      title: "PT Yama Electrical Support",
      category: "basic",
      type: lang === "id" ? "Company Profile Website" : "Company Profile Website",
      desc: lang === "id"
        ? "Melayani perencanaan, instalasi, hingga pemeliharaan sistem elektrikal dan otomasi, serta pengembangan aplikasi berbasis kebutuhan industri."
        : "Providing planning, installation, to maintenance of electrical and automation systems, and custom industrial application development.",
      year: "2024",
      image: "/portofolio/yama-web.png",
      url: "",
    },
    {
      id: 2,
      title: "PT Wibawa Jati Putra",
      category: "basic",
      type: lang === "id" ? "Company Profile Website" : "Company Profile Website",
      desc: lang === "id"
        ? "Website profil perusahaan untuk penyedia jasa konstruksi, perawatan mesin industri, dan general supplies."
        : "Corporate profile website for construction services, industrial machine maintenance, and general supplies.",
      year: "2024",
      image: "/portofolio/wjp-web.png",
      url: "https://wibawajatiputra.com",
    },
    {
      id: 3,
      title: "Lumina Enterprise Analytics",
      category: "custom",
      type: "Custom Website & Dashboard",
      desc: lang === "id" ? "Sistem internal analitik untuk mengelola data perusahaan." : "Internal analytics system to manage corporate data.",
      year: "2024",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=1200",
      url: "https://lumina-demo.com",
    },
  ]

  const filteredProjects = useMemo(() => {
    return activeCategory === "all" ? projects : projects.filter((p) => p.category === activeCategory)
  }, [activeCategory, projects, lang])

  const handleContact = () => {
    const phone = "6283877995846"
    const message = lang === "id"
      ? `Halo Indevtech, saya ingin bertanya tentang proyek ${activeCategory}`
      : `Hello Indevtech, I want to ask about ${activeCategory} project.`
    window.open(`https://wa.me/${phone}?text=${encodeURIComponent(message)}`, "_blank")
  }

  const openProject = (url: string) => {
    if (!url) return
    window.open(url, "_blank", "noopener,noreferrer")
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

      {/* Project Grid */}
      <section className="py-20 px-6 min-h-[600px] flex items-center">
        <div className="max-w-7xl mx-auto w-full">
          {filteredProjects.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-20">
              {filteredProjects.map((project) => (
                <div key={project.id} className="group flex flex-col gap-8">

                  {/* Image Container */}
                  <div
                    onClick={() => openProject(project.url)}
                    className={cn(
                      "aspect-[4/3] bg-secondary/20 rounded-[48px] overflow-hidden relative shadow-2xl border border-border/50 group/img",
                      project.url ? "cursor-pointer" : "cursor-default"
                    )}
                  >
                    {/* Layer 1: Blurred Background */}
                    <img
                      src={project.image}
                      alt=""
                      className="absolute inset-0 object-cover w-full h-full blur-3xl opacity-20 scale-125"
                    />

                    {/* Layer 2: Main Image with soft rounding & shadow */}
                    <div className="relative w-full h-full flex items-center justify-center p-8 md:p-14">
                      <div className="relative w-full h-full shadow-[0_20px_50px_rgba(0,0,0,0.3)] rounded-2xl overflow-hidden transition-all duration-700 group-hover/img:scale-[1.03] group-hover/img:-translate-y-2">
                        <img
                          src={project.image}
                          alt={project.title}
                          className="object-cover w-full h-full"
                        />
                      </div>
                    </div>

                    {/* Hover Overlay */}
                    {project.url && (
                      <div className="absolute inset-0 bg-primary/5 opacity-0 group-hover/img:opacity-100 transition-opacity duration-500 flex items-center justify-center z-10">
                        <div className="bg-background/90 backdrop-blur-sm px-6 py-3 rounded-full shadow-xl translate-y-4 group-hover/img:translate-y-0 transition-transform duration-500 border border-border/50">
                          <span className="text-sm font-bold uppercase tracking-widest text-foreground">
                            {lang === 'id' ? 'Lihat Website' : 'Visit Website'}
                          </span>
                        </div>
                      </div>
                    )}
                  </div>

                  {/* Text Details */}
                  <div className="px-2 flex justify-between items-start gap-6">
                    <div className="space-y-3">
                      <div className="flex items-center gap-3">
                        <span className="text-primary text-[10px] uppercase tracking-[0.2em] font-black">{project.type}</span>
                        <span className="text-muted-foreground/40 text-[10px]">—</span>
                        <span className="text-muted-foreground text-[10px] font-bold">{project.year}</span>
                      </div>
                      <h3 className="text-3xl md:text-4xl font-serif leading-tight group-hover:text-primary transition-colors">{project.title}</h3>
                      <p className="text-muted-foreground font-light leading-relaxed max-w-lg">{project.desc}</p>
                    </div>

                    {project.url && (
                      <button
                        onClick={() => openProject(project.url)}
                        className="w-14 h-14 rounded-full border border-border flex items-center justify-center group-hover:bg-primary group-hover:border-primary group-hover:text-primary-foreground transition-all flex-shrink-0"
                      >
                        <ArrowRight className="w-6 h-6 -rotate-45 group-hover:rotate-0 transition-transform" />
                      </button>
                    )}
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="max-w-2xl mx-auto text-center space-y-8 py-20 border-2 border-dashed border-border/50 rounded-[40px] bg-secondary/10 px-6">
              <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <Sparkles className="w-10 h-10 text-primary animate-pulse" />
              </div>
              <div className="space-y-4">
                <h3 className="text-3xl md:text-4xl font-serif leading-tight">{t.empty.title}</h3>
                <p className="text-muted-foreground text-lg leading-relaxed">{t.empty.desc}</p>
              </div>
              <button onClick={handleContact} className="inline-flex items-center gap-2 text-primary font-bold hover:gap-4 transition-all group">
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
          <button onClick={handleContact} className="inline-flex items-center gap-3 px-10 py-5 bg-primary text-primary-foreground rounded-full font-bold hover:scale-105 transition-all shadow-lg shadow-primary/20 text-lg">
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