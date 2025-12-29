"use client";

import { createContext, useContext, useState, ReactNode } from "react";

// Struktur teks untuk multi-bahasa
export interface LanguageTexts {
  hero: {
    tagline: string;
    title: string;
    description: string;
    ctaProject: string;
    ctaPortfolio: string;
  };
  services: {
    title: string;
    desc: string;
    items: { title: string; desc: string }[];
  };
  aboutOwner: {
    title: string;
    desc: string;
    points: { title: string; desc: string }[];
  };
  orderProcess: {
    title: string;
    desc: string;
    steps: { step: string; title: string; desc: string }[];
    cta: string;
    ctaDesc: string;
  };
  projects: {
    title: string;
    desc: string;
    items: { title: string; category: string }[];
    button: string;
  };
  whyUs: {
    title: string;
    items: { title: string; desc: string }[];
  };
  footer: {
    ctaTitle: string;
    ctaEmail: string;
    ctaWA: string;
    email: string;
    phone: string;
    office: string;
    company: string;
    navTitle: string;
    navLinks: string[];
    socialTitle: string;
    copyright: string;
  };
}

// Teks multi-bahasa
const LANGUAGE_TEXTS: Record<"id" | "en", LanguageTexts> = {
  id: {
    hero: {
      tagline: "Visi Anda, Kode Kami",
      title: "Membangun Solusi Digital\nTanpa Kompromi.",
      description: "indevtech.id menghadirkan teknologi kelas dunia untuk bisnis yang ambisius.",
      ctaProject: "Mulai Proyek",
      ctaPortfolio: "Karya Kami",
    },
    services: {
      title: "Solusi Pengembangan Software",
      desc: "Solusi teknologi terintegrasi yang dirancang untuk efisiensi dan pertumbuhan bisnis Anda.",
      items: [
        { title: "Digital & Corporate Web", desc: "Membangun kredibilitas melalui website profesional." },
        { title: "Business System & Apps", desc: "Sistem internal, CRM, dashboard, dan manajemen data." },
        { title: "Custom & Integrations", desc: "Software kustom dan integrasi pihak ketiga sesuai kebutuhan." },
        { title: "Mobile Solutions", desc: "Aplikasi mobile untuk layanan pelanggan dan internal." },
        { title: "Partnership & Support", desc: "Dukungan teknis jangka panjang dan konsultasi strategis." },
      ],
    },
    aboutOwner: {
      title: "Di Balik indevtech.id",
      desc: "Halo, saya pendiri indevtech.id. Menghubungkan ide bisnis Anda dengan teknologi kelas dunia.",
      points: [
        { title: "Inovasi Berkelanjutan", desc: "Selalu mengadopsi teknologi terbaru." },
        { title: "Fokus Hasil", desc: "Mengutamakan ROI dan efisiensi bisnis Anda." },
      ],
    },
    orderProcess: {
      title: "Dari Ide Menjadi Kenyataan",
      desc: "Proses yang terstruktur, transparan, dan berorientasi pada hasil.",
      steps: [
        { step: "01", title: "Discovery", desc: "Konsultasi gratis untuk memahami visi Anda." },
        { step: "02", title: "Strategy", desc: "Pemetaan solusi teknis, biaya, dan timeline." },
        { step: "03", title: "Development", desc: "Pembangunan dengan update berkala." },
        { step: "04", title: "Launch & Growth", desc: "Peluncuran sistem dan dukungan berkelanjutan." },
      ],
      cta: "Hubungi Kami Sekarang",
      ctaDesc: "Jadwalkan konsultasi 30 menit gratis dengan tim ahli kami.",
    },
    projects: {
      title: "Karya Pilihan",
      desc: "Inovasi digital yang memberikan dampak nyata.",
      items: [
        { title: "Lumina Enterprise", category: "Data Analytics Platform" },
        { title: "Vortex Fintech", category: "Next-gen Payment Gateway" },
        { title: "Aura Marketplace", category: "E-Commerce Experience" },
        { title: "Nexus CRM", category: "Internal Operations System" },
      ],
      button: "Lihat Semua Portofolio",
    },
    whyUs: {
      title: "Mengapa indevtech.id?",
      items: [
        { title: "Kualitas Tanpa Kompromi", desc: "Kode diuji ketat untuk keandalan maksimal." },
        { title: "Komunikasi Transparan", desc: "Kolaborasi terbaik dari kejujuran & update rutin." },
        { title: "Fokus Masa Depan", desc: "Teknologi yang tahan lama & mudah dikembangkan." },
      ],
    },
    footer: {
      ctaTitle: "Mari mulai sesuatu yang luar biasa",
      ctaEmail: "Kirim Email",
      ctaWA: "WhatsApp Kami",
      email: "hello@indevtech.id",
      phone: "+62 (21) 1234 5678",
      office: "Kantor Pusat",
      company: "Jakarta, Indonesia",
      navTitle: "Navigasi",
      navLinks: ["Layanan", "Proyek", "Tentang Kami", "Hubungi Kami"],
      socialTitle: "Ikuti Kami",
      copyright: "© 2025 indevtech.id. Terdaftar di Indonesia.",
    },
  },
  en: {
    hero: {
      tagline: "Your Vision, Our Code",
      title: "Building Digital Solutions\nWithout Compromise.",
      description: "indevtech.id delivers world-class technology for ambitious businesses.",
      ctaProject: "Start Project",
      ctaPortfolio: "Our Work",
    },
    services: {
      title: "Software Development Solutions",
      desc: "Integrated technology solutions designed for efficiency and business growth.",
      items: [
        { title: "Digital & Corporate Web", desc: "Build credibility through professional websites." },
        { title: "Business System & Apps", desc: "Internal systems, CRM, dashboards, and data management." },
        { title: "Custom & Integrations", desc: "Custom software and third-party integrations." },
        { title: "Mobile Solutions", desc: "Mobile apps for customer services and internal operations." },
        { title: "Partnership & Support", desc: "Long-term technical support and strategic consulting." },
      ],
    },
    aboutOwner: {
      title: "Behind indevtech.id",
      desc: "Hi, I am the founder of indevtech.id, connecting your business ideas with world-class technology.",
      points: [
        { title: "Continuous Innovation", desc: "Always adopting the latest technology." },
        { title: "Results Focused", desc: "Prioritizing ROI and your business efficiency." },
      ],
    },
    orderProcess: {
      title: "From Idea to Reality",
      desc: "A structured, transparent, and results-oriented process.",
      steps: [
        { step: "01", title: "Discovery", desc: "Free consultation to understand your vision." },
        { step: "02", title: "Strategy", desc: "Mapping technical solutions, cost, and timeline." },
        { step: "03", title: "Development", desc: "Building with regular updates." },
        { step: "04", title: "Launch & Growth", desc: "System launch and continuous support." },
      ],
      cta: "Contact Us Now",
      ctaDesc: "Schedule a 30-minute free consultation with our expert team.",
    },
    projects: {
      title: "Featured Work",
      desc: "Digital innovations that deliver real impact.",
      items: [
        { title: "Lumina Enterprise", category: "Data Analytics Platform" },
        { title: "Vortex Fintech", category: "Next-gen Payment Gateway" },
        { title: "Aura Marketplace", category: "E-Commerce Experience" },
        { title: "Nexus CRM", category: "Internal Operations System" },
      ],
      button: "View All Portfolio",
    },
    whyUs: {
      title: "Why indevtech.id?",
      items: [
        { title: "Uncompromising Quality", desc: "Every line of code is rigorously tested." },
        { title: "Transparent Communication", desc: "Best collaboration comes from honesty & regular updates." },
        { title: "Future-Focused", desc: "Technology chosen to last and scale with growth." },
      ],
    },
    footer: {
      ctaTitle: "Let's start something amazing",
      ctaEmail: "Send Email",
      ctaWA: "WhatsApp Us",
      email: "hello@indevtech.id",
      phone: "+62 (21) 1234 5678",
      office: "Head Office",
      company: "Jakarta, Indonesia",
      navTitle: "Navigation",
      navLinks: ["Services", "Projects", "About Us", "Contact Us"],
      socialTitle: "Follow Us",
      copyright: "© 2025 indevtech.id. Registered in Indonesia.",
    },
  },
};

// Context
interface LanguageContextProps {
  lang: "id" | "en";
  setLang: (lang: "id" | "en") => void;
  texts: LanguageTexts;
}

const LanguageContext = createContext<LanguageContextProps>({
  lang: "id",
  setLang: () => { },
  texts: LANGUAGE_TEXTS.id,
});

export const LanguageProvider = ({ children }: { children: ReactNode }) => {
  const [lang, setLang] = useState<"id" | "en">("id");
  const texts = LANGUAGE_TEXTS[lang];

  return (
    <LanguageContext.Provider value={{ lang, setLang, texts }}>
      {children}
    </LanguageContext.Provider>
  );
};

// Hook
export const useLanguage = () => useContext(LanguageContext);
