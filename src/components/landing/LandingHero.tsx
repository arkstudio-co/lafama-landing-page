"use client"

import { useTranslations } from "@/i18n"

export default function LandingHero() {
  const { t } = useTranslations()

  const whatsappUrl = "https://wa.me/573188433214?text=Hola!%20Quiero%20cotizar%20mi%20proximo%20tattoo"

  return (
    <section className="relative h-[85vh] md:h-screen w-full overflow-hidden flex items-center justify-center noise-overlay">
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover brightness-[0.4] grayscale-[0.2]"
        src="/videos/video-hero.mp4"
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
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-white text-black px-8 py-4 md:px-12 md:py-5 font-label-caps text-[11px] md:text-xs tracking-[0.2em] hover:bg-white/90 transition-all duration-500 uppercase rounded-btn btn-lift"
          >
            {t.hero.cta}
          </a>
        </div>
      </div>
    </section>
  )
}
