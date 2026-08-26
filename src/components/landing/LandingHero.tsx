"use client"

import Image from "next/image"
import { useTranslations } from "@/i18n"

export default function LandingHero() {
  const { t } = useTranslations()

  const scrollToForm = () => {
    if (typeof window !== "undefined" && window.dataLayer) {
      window.dataLayer.push({ event: "cta_click", cta_name: "hero_quote" })
    }
    document.getElementById("lead-form")?.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <section className="relative h-[85vh] md:h-screen w-full overflow-hidden flex items-center justify-center noise-overlay">
      <Image
        alt="La Fama Tattoo Studio - Professional tattoo artist at work"
        fill
        className="object-cover brightness-[0.4] grayscale-[0.2]"
        src="/images/IMG_1832.jpg"
        sizes="100vw"
        quality={90}
        priority
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-black/20 pointer-events-none z-[1]" />
      <div className="relative z-10 text-center px-5 max-w-4xl mt-8 md:mt-16">
        <h1 className="font-display-lg text-3xl sm:text-4xl md:text-5xl lg:text-6xl leading-[1.15] text-white mb-5 md:mb-6 uppercase hero-headline">
          {t.hero.title}
        </h1>
        <p className="text-white/60 mb-8 md:mb-12 max-w-xl mx-auto text-sm md:text-base leading-relaxed hero-subtitle">
          {t.hero.subtitle}
        </p>
        <div className="hero-cta">
          <button
            onClick={scrollToForm}
            className="inline-block bg-white text-black px-8 py-4 md:px-12 md:py-5 font-label-caps text-[11px] md:text-xs tracking-[0.2em] hover:bg-white/90 transition-all duration-500 uppercase rounded-btn btn-lift cursor-pointer border-0"
          >
            {t.hero.cta}
          </button>
        </div>
      </div>
    </section>
  )
}
