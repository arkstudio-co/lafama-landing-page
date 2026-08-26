"use client"

import { useTranslations } from "@/i18n"
import { business } from "@/data/business"
import { useState, type FormEvent } from "react"

export default function LandingLeadForm() {
  const { t } = useTranslations()
  const { contact, styles } = business
  const [submitting, setSubmitting] = useState(false)
  const [submitted, setSubmitted] = useState(false)
  const [error, setError] = useState(false)

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setSubmitting(true)
    setError(false)

    const form = e.currentTarget
    const data = new FormData(form)

    try {
      const res = await fetch("https://formspree.io/f/mykakddn", {
        method: "POST",
        body: data,
        headers: { Accept: "application/json" },
      })
      if (!res.ok) throw new Error()

      if (typeof window !== "undefined" && window.dataLayer) {
        window.dataLayer.push({ event: "form_submit" })
      }

      setSubmitted(true)
      form.reset()
    } catch {
      setError(true)
    } finally {
      setSubmitting(false)
    }
  }

  return (
    <section className="py-section-gap bg-background border-t border-outline-variant/30" id="lead-form">
      <div className="max-w-[1440px] mx-auto px-5 md:px-16 grid md:grid-cols-2 gap-12 md:gap-24">
        <div>
          <span className="font-label-caps text-[11px] tracking-[0.15em] text-secondary mb-4 block uppercase">
            {t.form.sectionLabel}
          </span>
          <h2 className="section-title mb-6">{t.form.title}</h2>
          <p className="section-body max-w-sm mb-10">
            {t.form.subtitle}
          </p>
          <div className="space-y-5">
            <div className="flex items-center gap-4">
              <div className="w-10 h-10 rounded-full bg-primary/5 flex items-center justify-center">
                <svg className="w-5 h-5 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
              </div>
              <span className="font-body-md text-base">{contact.phoneDisplay}</span>
            </div>
            <div className="flex items-center gap-4">
              <div className="w-10 h-10 rounded-full bg-primary/5 flex items-center justify-center">
                <svg className="w-5 h-5 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <span className="font-body-md text-base">{contact.email}</span>
            </div>
          </div>
        </div>

        {submitted ? (
          <div className="flex flex-col items-center justify-center text-center py-16">
            <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center mb-5">
              <svg className="w-7 h-7 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
            </div>
            <h3 className="font-headline-lg text-2xl mb-2">{t.form.successTitle}</h3>
            <p className="section-body">{t.form.successMessage}</p>
          </div>
        ) : (
          <form className="space-y-8" onSubmit={handleSubmit}>
            <div className="flex flex-col md:grid md:grid-cols-2 gap-8">
              <div className="flex flex-col gap-1.5">
                <label className="font-headline-lg text-lg md:text-xl italic" htmlFor="l-nombre">
                  {t.form.name}
                </label>
                <input
                  id="l-nombre"
                  name="nombre"
                  className="form-input bg-transparent border-0 border-b border-primary focus:ring-0 transition-all py-3.5 text-base placeholder-zinc-400"
                  placeholder={t.form.namePlaceholder}
                  type="text"
                  required
                />
                <span className="text-[11px] text-secondary/60 font-body-md tracking-wide hidden md:block">
                  {t.form.nameHint}
                </span>
              </div>
              <div className="flex flex-col gap-1.5">
                <label className="font-headline-lg text-lg md:text-xl italic" htmlFor="l-whatsapp">
                  {t.form.whatsapp}
                </label>
                <input
                  id="l-whatsapp"
                  name="whatsapp"
                  className="form-input bg-transparent border-0 border-b border-primary focus:ring-0 transition-all py-3.5 text-base placeholder-zinc-400"
                  placeholder={t.form.whatsappPlaceholder}
                  type="tel"
                  required
                />
                <span className="text-[11px] text-secondary/60 font-body-md tracking-wide hidden md:block">
                  {t.form.whatsappHint}
                </span>
              </div>
            </div>

            <div className="flex flex-col md:grid md:grid-cols-2 gap-8">
              <div className="flex flex-col gap-1.5">
                <label className="font-headline-lg text-lg md:text-xl italic" htmlFor="l-estilo">
                  {t.form.style}
                </label>
                <select
                  id="l-estilo"
                  name="estilo"
                  className="form-input bg-transparent border-0 border-b border-primary focus:ring-0 transition-all py-3.5 text-base"
                >
                  {[...styles, "Other"].map((style) => (
                    <option key={style}>{style}</option>
                  ))}
                </select>
              </div>
              <div className="flex flex-col gap-1.5">
                <label className="font-headline-lg text-lg md:text-xl italic" htmlFor="l-zona">
                  {t.form.bodyZone}
                </label>
                <input
                  id="l-zona"
                  name="zona"
                  className="form-input bg-transparent border-0 border-b border-primary focus:ring-0 transition-all py-3.5 text-base"
                  placeholder={t.form.bodyZonePlaceholder}
                  type="text"
                />
              </div>
            </div>

            <div className="flex flex-col gap-1.5">
              <label className="font-headline-lg text-lg md:text-xl italic" htmlFor="l-descripcion">
                {t.form.description}
              </label>
              <textarea
                id="l-descripcion"
                name="descripcion"
                className="form-input bg-transparent border-0 border-b border-primary focus:ring-0 transition-all py-3.5 text-base resize-none"
                placeholder={t.form.descriptionPlaceholder}
                rows={4}
              />
            </div>

            {error && (
              <p className="text-red-500 text-sm text-center">
                {t.form.errorMessage}
              </p>
            )}

            <button
              className="w-full bg-primary text-on-primary py-5 font-label-caps text-sm tracking-[0.2em] hover:bg-zinc-800 transition-all uppercase rounded-btn btn-lift cursor-pointer border-0 disabled:opacity-50 disabled:cursor-not-allowed"
              type="submit"
              disabled={submitting}
            >
              {submitting ? t.form.submitting : t.form.submit}
            </button>
          </form>
        )}
      </div>
    </section>
  )
}
