"use client"

import { useTranslations } from "@/i18n"

export default function LandingStickyCTA() {
  const { t } = useTranslations()

  const scrollToForm = () => {
    document.getElementById("lead-form")?.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <div className="fixed bottom-0 left-0 right-0 z-[60] md:hidden safe-area-bottom">
      <div className="bg-background/95 backdrop-blur-sm border-t border-outline-variant/20 px-5 py-3">
        <button
          onClick={scrollToForm}
          className="w-full bg-primary text-on-primary py-4 font-label-caps text-[11px] tracking-[0.2em] hover:bg-zinc-800 transition-all duration-300 uppercase rounded-btn cursor-pointer border-0 btn-lift"
        >
          {t.stickyCta.text}
        </button>
      </div>
    </div>
  )
}
