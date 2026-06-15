"use client"

import { Phone, Mail } from "lucide-react"
import { business } from "@/data/business"
import { useState, type FormEvent } from "react"

const zonas = ["oreja", "nariz", "ceja", "cara", "hombligo", "otro"]

export default function PiercingContacto() {
  const { contact } = business
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
      setSubmitted(true)
      form.reset()
    } catch {
      setError(true)
    } finally {
      setSubmitting(false)
    }
  }

  return (
    <section className="py-section-gap bg-surface-container-low border-y border-outline-variant/30" id="contacto">
      <div className="max-w-container-max mx-auto px-6 md:px-margin-edge grid md:grid-cols-2 gap-12 md:gap-24">
        <div>
          <span className="font-label-caps text-label-caps text-secondary mb-4 block uppercase tracking-widest">
            Tu Próxima Pieza
          </span>
          <h2 className="section-title mb-8">AQUÍ COMIENZA TU HISTORIA</h2>
          <p className="section-body max-w-sm mb-12">
            Cuéntanos tu idea. En LaFama Tattoo Estudio diseñamos piezas únicas que trascienden el tiempo.
          </p>
          <div className="space-y-6">
            <div className="flex items-center gap-4 group">
              <div className="w-12 h-12 rounded-full bg-primary/5 flex items-center justify-center transition-colors group-hover:bg-primary/10">
                <Phone size={22} className="text-primary" />
              </div>
              <span className="font-body-md text-xl">{contact.phoneDisplay}</span>
            </div>
            <div className="flex items-center gap-4 group">
              <div className="w-12 h-12 rounded-full bg-primary/5 flex items-center justify-center transition-colors group-hover:bg-primary/10">
                <Mail size={22} className="text-primary" />
              </div>
              <span className="font-body-md text-xl">{contact.email}</span>
            </div>
          </div>
        </div>
        {submitted ? (
          <div className="flex flex-col items-center justify-center text-center py-20">
            <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mb-6">
              <svg className="w-8 h-8 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
            </div>
            <h3 className="font-headline-lg text-2xl mb-2">¡GRACIAS!</h3>
            <p className="section-body">Te contactaremos pronto para agendar tu cita.</p>
          </div>
        ) : (
          <form className="space-y-10" onSubmit={handleSubmit}>
            <div className="flex flex-col md:grid md:grid-cols-2 gap-10">
              <div className="flex flex-col gap-2">
                <label className="font-headline-lg text-xl md:text-2xl italic" htmlFor="nombre">Nombre</label>
                <input
                  id="nombre"
                  name="nombre"
                  className="form-input bg-transparent border-0 border-b border-primary focus:ring-0 transition-all py-4 text-xl placeholder-zinc-400"
                  placeholder="Escribe tu nombre completo"
                  type="text"
                  required
                />
                <span className="text-[11px] text-secondary/60 font-body-md tracking-wide hidden md:block">
                  Nombre completo para tu cita
                </span>
              </div>
              <div className="flex flex-col gap-2">
                <label className="font-headline-lg text-xl md:text-2xl italic" htmlFor="whatsapp">WhatsApp</label>
                <input
                  id="whatsapp"
                  name="whatsapp"
                  className="form-input bg-transparent border-0 border-b border-primary focus:ring-0 transition-all py-4 text-xl placeholder-zinc-400"
                  placeholder="+57 300 000 0000"
                  type="tel"
                  required
                />
                <span className="text-[11px] text-secondary/60 font-body-md tracking-wide hidden md:block">
                  Te contactaremos por este número
                </span>
              </div>
            </div>
            <div className="flex flex-col md:grid md:grid-cols-2 gap-10">
              <div className="flex flex-col gap-2">
                <label className="font-headline-lg text-xl md:text-2xl italic" htmlFor="estilo">Estilo deseado</label>
                <select
                  id="estilo"
                  name="estilo"
                  className="form-input bg-transparent border-0 border-b border-primary focus:ring-0 transition-all py-4 text-xl"
                >
                  <option>Piercing</option>
                </select>
              </div>
              <div className="flex flex-col gap-2">
                <label className="font-headline-lg text-xl md:text-2xl italic" htmlFor="zona">Zona del cuerpo</label>
                <select
                  id="zona"
                  name="zona"
                  className="form-input bg-transparent border-0 border-b border-primary focus:ring-0 transition-all py-4 text-xl"
                  required
                >
                  <option value="" disabled selected>Selecciona una zona</option>
                  {zonas.map((z) => (
                    <option key={z} value={z}>{z}</option>
                  ))}
                </select>
              </div>
            </div>
            <div className="flex flex-col gap-2">
              <label className="font-headline-lg text-xl md:text-2xl italic" htmlFor="descripcion">Descripción</label>
              <textarea
                id="descripcion"
                name="descripcion"
                className="form-input bg-transparent border-0 border-b border-primary focus:ring-0 transition-all py-4 text-xl resize-none"
                placeholder="Cuéntanos sobre el Piercing que deseas hacerte..."
                rows={4}
              />
            </div>
            {error && (
              <p className="text-red-500 text-sm text-center">
                Hubo un error al enviar tu mensaje. Intenta de nuevo.
              </p>
            )}
            <button
              className="w-full bg-primary text-on-primary py-6 font-label-caps text-sm tracking-[0.2em] hover:bg-zinc-800 transition-all uppercase rounded-btn btn-lift cursor-pointer border-0 text-base disabled:opacity-50 disabled:cursor-not-allowed"
              type="submit"
              disabled={submitting}
            >
              {submitting ? "ENVIANDO..." : "ENVIAR SOLICITUD"}
            </button>
          </form>
        )}
      </div>
    </section>
  )
}
