"use client"

import { useTranslations } from "@/i18n"

export default function LandingTrustBar() {
  const { t } = useTranslations()

  return (
    <section className="border-y border-outline-variant/30 bg-background">
      <div className="max-w-[1440px] mx-auto px-5 py-4 md:py-5 md:px-16">
        <div className="flex flex-row items-center justify-center gap-6 md:gap-12 text-on-surface-variant">
          <div className="flex items-center gap-1.5 md:gap-2">
            <div className="flex gap-px text-amber-500">
              {Array.from({ length: 5 }).map((_, i) => (
                <svg
                  key={i}
                  className="w-3 h-3 md:w-3.5 md:h-3.5"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
              ))}
            </div>
            <span className="font-label-caps text-[10px] md:text-[11px] tracking-[0.1em] uppercase">
              {t.trust.googleReviews}
            </span>
          </div>

          <div className="w-px h-4 bg-outline-variant/50" />

          <span className="font-label-caps text-[10px] md:text-[11px] tracking-[0.1em] uppercase">
            {t.trust.professionalArtists}
          </span>

          <div className="w-px h-4 bg-outline-variant/50" />

          <span className="font-label-caps text-[10px] md:text-[11px] tracking-[0.1em] uppercase">
            {t.trust.customTattoos}
          </span>
        </div>
      </div>
    </section>
  )
}
