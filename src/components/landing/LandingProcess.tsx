"use client"

import { useTranslations } from "@/i18n"

export default function LandingProcess() {
  const { t } = useTranslations()

  return (
    <section className="py-section-gap bg-background">
      <div className="px-5 md:px-16 max-w-[1440px] mx-auto">
        <h2 className="section-title text-center mb-12 md:mb-16">{t.process.title}</h2>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-0 md:gap-0">
          {t.process.steps.map((step, i) => (
            <div
              key={step.number}
              className={`flex flex-col text-center py-8 md:py-0 ${
                i < 3 ? "border-b md:border-b-0 md:border-r border-outline-variant/30" : ""
              } ${i === 0 ? "md:pl-0 md:pr-8" : i === 3 ? "md:pl-8 md:pr-0" : "md:px-8"}`}
            >
              <span className="font-display-lg text-4xl md:text-5xl text-outline-variant/40 mb-4">
                {step.number}
              </span>
              <h3 className="font-headline-lg text-base md:text-lg uppercase tracking-wider mb-3">
                {step.title}
              </h3>
              <p className="font-body-md text-sm text-secondary leading-relaxed max-w-[260px] mx-auto">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
