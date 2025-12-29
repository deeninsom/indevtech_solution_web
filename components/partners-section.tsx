"use client"

interface Partner {
  id: number
  name: string
  logo: string
  category: string
}

interface PartnersSectionProps {
  lang: "id" | "en"
}

export function PartnersSection({ lang }: PartnersSectionProps) {
  const content = {
    id: {
      title: "Mitra",
      titleItalic: "Terpercaya",
      desc: "Kami telah bermitra dengan perusahaan terkemuka untuk menghadirkan solusi digital terbaik.",
    },
    en: {
      title: "Trusted",
      titleItalic: "Partners",
      desc: "We have partnered with leading companies to deliver the best digital solutions.",
    },
  }

  const t = content[lang]

  const partners: Partner[] = [
    {
      id: 1,
      name: "YAMA Electrical Support",
      logo: "/partners/yama-electrical.png",
      category: "Electrical Services",
    },
  ]

  return (
    <section className="py-20 px-6 border-t border-border/50">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="space-y-6 max-w-4xl mb-16">
          <h2 className="text-4xl md:text-6xl font-serif leading-tight">
            {t.title} <span className="text-primary italic">{t.titleItalic}</span>
          </h2>
          <p className="text-muted-foreground text-lg leading-relaxed">{t.desc}</p>
        </div>

        {/* Partners Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {partners.map((partner) => (
            <div
              key={partner.id}
              className="group flex flex-col items-center justify-center p-8 rounded-2xl border border-border/50 bg-secondary/30 hover:bg-secondary/50 hover:border-primary/50 transition-all duration-300 shadow-sm hover:shadow-lg hover:shadow-primary/10"
            >
              <div className="w-32 h-32 flex items-center justify-center mb-6 bg-background rounded-xl p-4">
                <img
                  src={partner.logo || "/placeholder.svg"}
                  alt={partner.name}
                  className="max-w-full max-h-full object-contain group-hover:scale-110 transition-transform duration-300"
                />
              </div>
              <h3 className="text-lg font-semibold text-center text-foreground mb-2">{partner.name}</h3>
              <p className="text-sm text-muted-foreground text-center">{partner.category}</p>
            </div>
          ))}

          {/* Add Partner CTA Card */}
          <div className="flex flex-col items-center justify-center p-8 rounded-2xl border-2 border-dashed border-border/50 bg-secondary/10 hover:bg-secondary/30 hover:border-primary/50 transition-all duration-300">
            <div className="text-4xl mb-4">+</div>
            <h3 className="text-lg font-semibold text-center text-foreground mb-2">
              {lang === "id" ? "Tambah Mitra" : "Add Partner"}
            </h3>
            <p className="text-sm text-muted-foreground text-center">
              {lang === "id" ? "Kirim logo Anda untuk ditampilkan di sini" : "Send your logo to be featured here"}
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
