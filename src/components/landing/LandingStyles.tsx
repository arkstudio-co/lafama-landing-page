"use client"

import Image from "next/image"
import { useTranslations } from "@/i18n"

const styleImages = [
  { src: "/images/realismo-estilo.jpeg", alt: "Realism tattoo" },
  { src: "/images/portafolio/15.jpeg", alt: "Fine line tattoo" },
  { src: "/images/neotradicional-estilo.png", alt: "Neotraditional tattoo" },
  { src: "/images/portafolio/30.jpeg", alt: "Anime tattoo" },
]

const styleKeys = ["realism", "fineLine", "neotraditional", "anime"] as const

export default function LandingStyles() {
  const { t } = useTranslations()

  const styleNames: Record<string, string> = {
    realism: "REALISM",
    fineLine: "FINE LINE",
    neotraditional: "NEOTRADITIONAL",
    anime: "ANIME",
  }

  return (
    <section className="py-section-gap bg-background scroll-mt-28 md:scroll-mt-32" id="styles">
      <div className="px-5 md:px-16 max-w-[1440px] mx-auto">
        <h2 className="section-title text-center mb-12 md:mb-16">{t.styles.title}</h2>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
          {styleKeys.map((key, i) => (
            <div
              key={key}
              className="group relative cursor-default"
              onClick={() => {
                if (typeof window !== "undefined" && window.dataLayer) {
                  window.dataLayer.push({ event: "style_click", style: key })
                }
              }}
            >
              <div className="relative aspect-[3/4] overflow-hidden rounded-lg">
                <Image
                  alt={styleImages[i].alt}
                  fill
                  className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.06]"
                  src={styleImages[i].src}
                  sizes="(max-width: 640px) 50vw, (max-width: 1024px) 50vw, 25vw"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-500" />
              </div>
              <div className="mt-4 md:mt-5">
                <p className="font-label-caps text-xs md:text-sm tracking-[0.2em] uppercase text-center">
                  {styleNames[key]}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
