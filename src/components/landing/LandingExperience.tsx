"use client"

import Image from "next/image"
import { useTranslations } from "@/i18n"

const experienceImages = [
  { type: "video" as const, src: "/videos/your-idea.mp4", alt: "Your idea come to life" },
  { type: "image" as const, src: "/images/tu-artista.jpg", alt: "Tattoo artist at work" },
  { type: "image" as const, src: "/images/IMG_3205.PNG", alt: "Studio experience" },
  { type: "image" as const, src: "/images/CB69FAC2-7220-4B79-AA73-1F1687A916FE.jpg", alt: "Comfortable environment" },
]

export default function LandingExperience() {
  const { t } = useTranslations()

  return (
    <section className="py-section-gap bg-background scroll-mt-28 md:scroll-mt-32" id="experience">
      <div className="px-5 md:px-16 max-w-[1440px] mx-auto">
        <h2 className="section-title text-center mb-12 md:mb-16">{t.experience.title}</h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {t.experience.cards.map((card, i) => (
            <div
              key={card.title}
              className="group cursor-default"
            >
              <div className="relative aspect-[3/4] overflow-hidden rounded-lg mb-5">
                {experienceImages[i].type === "video" ? (
                  <video
                    autoPlay
                    loop
                    muted
                    playsInline
                    className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.04]"
                    src={experienceImages[i].src}
                  />
                ) : (
                  <Image
                    alt={experienceImages[i].alt}
                    fill
                    className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.04]"
                    src={experienceImages[i].src}
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                    loading="lazy"
                  />
                )}
              </div>
              <h3 className="font-headline-lg text-lg md:text-xl uppercase tracking-wider mb-2">
                {card.title}
              </h3>
              <p className="font-body-md text-sm text-secondary leading-relaxed">
                {card.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
