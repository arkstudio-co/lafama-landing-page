"use client"

import Image from "next/image"
import { useTranslations } from "@/i18n"
import { business } from "@/data/business"

export default function LandingLocation() {
  const { t } = useTranslations()
  const { address, google } = business

  const scrollToForm = () => {
    if (typeof window !== "undefined" && window.dataLayer) {
      window.dataLayer.push({ event: "cta_click", cta_name: "location_availability" })
    }
    document.getElementById("lead-form")?.scrollIntoView({ behavior: "smooth" })
  }

  const handleDirectionsClick = () => {
    if (typeof window !== "undefined" && window.dataLayer) {
      window.dataLayer.push({ event: "directions_click" })
    }
  }

  return (
    <section className="py-section-gap bg-background scroll-mt-28 md:scroll-mt-32" id="location">
      <div className="px-5 md:px-16 max-w-[1440px] mx-auto">
        <div className="grid md:grid-cols-2 gap-10 md:gap-16 items-center">
          <div className="order-2 md:order-1">
            <h2 className="section-title mb-5">{t.location.title}</h2>
            <p className="section-body max-w-md mb-8">
              {t.location.subtitle}
            </p>

            <div className="space-y-4 mb-10">
              <div>
                <p className="font-label-caps text-[11px] tracking-[0.12em] text-secondary uppercase mb-1">
                  {t.location.address}
                </p>
                <p className="font-body-md text-on-surface">
                  {address.street}, {address.neighborhood}
                  <br />
                  {address.city}, {address.department}
                </p>
              </div>
              <div>
                <p className="font-label-caps text-[11px] tracking-[0.12em] text-secondary uppercase mb-1">
                  {t.location.hours}
                </p>
                <p className="font-body-md text-on-surface">{t.location.hoursDetail}</p>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href={google.directionsUrl}
                target="_blank"
                rel="noopener noreferrer"
                onClick={handleDirectionsClick}
                className="inline-block border border-primary px-8 py-3.5 font-label-caps text-[11px] tracking-[0.15em] hover:bg-primary hover:text-white transition-all duration-300 uppercase rounded-btn text-center"
              >
                {t.location.getDirections}
              </a>
              <button
                onClick={scrollToForm}
                className="inline-block bg-primary text-on-primary px-8 py-3.5 font-label-caps text-[11px] tracking-[0.15em] hover:bg-zinc-800 transition-all duration-300 uppercase rounded-btn btn-lift cursor-pointer border-0 text-center"
              >
                {t.location.checkAvailability}
              </button>
            </div>
          </div>

          <div className="order-1 md:order-2 relative aspect-[4/3] md:aspect-auto md:h-[400px] overflow-hidden rounded-lg">
            <Image
              alt="La Fama Tattoo Studio - El Poblado, Medellín"
              fill
              className="object-cover"
              src="/images/somos.png"
              sizes="(max-width: 768px) 100vw, 50vw"
              loading="lazy"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
