"use client"

interface Partner {
  name: string
  logo: string
}

const partners: Partner[] = [
  { name: "YAMA Electrical Support", logo: "/partners/yama-electrical.png" },
  { name: "WJP Your Reliable Partner", logo: "/partners/wjp-logo.jpeg" },
  { name: "YAMA Electrical Support", logo: "/partners/yama-electrical.png" },
  { name: "WJP Your Reliable Partner", logo: "/partners/wjp-logo.jpg" },
  { name: "YAMA Electrical Support", logo: "/partners/yama-electrical.png" },
  { name: "WJP Your Reliable Partner", logo: "/partners/wjp-logo.jpg" },
]

export default function PartnersCarousel() {
  return (
    <section id="partners" className="py-20 px-6 bg-background border-y border-border/50 overflow-hidden">
      <div className="max-w-7xl mx-auto space-y-12">
        <div className="text-center">
          <span className="text-primary text-xs uppercase tracking-[0.3em] font-black">Trusted Partners</span>
          <h2 className="text-3xl md:text-5xl font-serif mt-4">
            Mitra Strategis <span className="text-primary italic">Kami</span>
          </h2>
        </div>

        {/* Scrolling Container */}
        <div className="relative overflow-hidden">
          {/* Gradient overlays for edge fade effect */}
          <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-background to-transparent z-10" />
          <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-background to-transparent z-10" />

          {/* Animated scroll track */}
          <div className="flex animate-scroll gap-8">
            {partners.map((partner, index) => (
              <div
                key={index}
                className="flex-shrink-0 w-48 h-28 flex items-center justify-center px-8 py-6 rounded-2xl border border-border/30 bg-secondary/20 hover:border-primary/50 hover:bg-secondary/40 transition-all duration-300 group"
              >
                <img
                  src={partner.logo || "/placeholder.svg"}
                  alt={partner.name}
                  className="max-w-[120px] max-h-[80px] w-auto h-auto object-contain object-center filter group-hover:drop-shadow-lg transition-all duration-300"
                />
              </div>
            ))}
            {/* Duplicate for seamless loop */}
            {partners.map((partner, index) => (
              <div
                key={`dup-${index}`}
                className="flex-shrink-0 w-48 h-28 flex items-center justify-center px-8 py-6 rounded-2xl border border-border/30 bg-secondary/20 hover:border-primary/50 hover:bg-secondary/40 transition-all duration-300 group"
              >
                <img
                  src={partner.logo || "/placeholder.svg"}
                  alt={partner.name}
                  className="max-w-[120px] max-h-[80px] w-auto h-auto object-contain object-center filter group-hover:drop-shadow-lg transition-all duration-300"
                />
              </div>
            ))}
          </div>
        </div>

        <p className="text-center text-muted-foreground text-sm">
          Dipercaya oleh perusahaan terkemuka di berbagai industri
        </p>
      </div>

      {/* Animation keyframes */}
      <style jsx>{`
        @keyframes scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
        .animate-scroll {
          animation: scroll 30s linear infinite;
        }
        .animate-scroll:hover {
          animation-play-state: paused;
        }
      `}</style>
    </section>
  )
}
