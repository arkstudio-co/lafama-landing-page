"use client"

import { useTranslations } from "@/i18n"

export default function LandingStickyCTA() {
  const { t } = useTranslations()

  const whatsappUrl = "https://wa.me/573188433214?text=Hola!%20Quiero%20cotizar%20mi%20proximo%20tattoo"

  return (
    <div className="fixed bottom-0 left-0 right-0 z-[60] md:hidden safe-area-bottom">
      <div className="bg-background/95 backdrop-blur-sm border-t border-outline-variant/20 px-5 py-3">
        <a
          href={whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="block w-full bg-primary text-on-primary py-4 font-label-caps text-[11px] tracking-[0.2em] hover:bg-zinc-800 transition-all duration-300 uppercase rounded-btn btn-lift text-center"
        >
          {t.stickyCta.text}
        </a>
      </div>
    </div>
  )
}
