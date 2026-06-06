import { Phone, Mail } from "lucide-react"
import { business } from "@/data/business"

export default function Contacto() {
  const { contact } = business

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
        <form className="space-y-10">
          <div className="flex flex-col md:grid md:grid-cols-2 gap-10">
            <div className="flex flex-col gap-2">
              <label className="font-headline-lg text-xl md:text-2xl italic">Nombre</label>
              <input
                className="form-input bg-transparent border-0 border-b border-primary focus:ring-0 transition-all py-4 text-xl placeholder-zinc-400"
                placeholder="Escribe tu nombre completo"
                type="text"
              />
              <span className="text-[11px] text-secondary/60 font-body-md tracking-wide hidden md:block">
                Nombre completo para tu cita
              </span>
            </div>
            <div className="flex flex-col gap-2">
              <label className="font-headline-lg text-xl md:text-2xl italic">WhatsApp</label>
              <input
                className="form-input bg-transparent border-0 border-b border-primary focus:ring-0 transition-all py-4 text-xl placeholder-zinc-400"
                placeholder="+57 300 000 0000"
                type="tel"
              />
              <span className="text-[11px] text-secondary/60 font-body-md tracking-wide hidden md:block">
                Te contactaremos por este número
              </span>
            </div>
          </div>
          <div className="flex flex-col md:grid md:grid-cols-2 gap-10">
            <div className="flex flex-col gap-2">
              <label className="font-headline-lg text-xl md:text-2xl italic">Estilo deseado</label>
              <select className="form-input bg-transparent border-0 border-b border-primary focus:ring-0 transition-all py-4 text-xl">
                {business.styles.map((style) => (
                  <option key={style}>{style}</option>
                ))}
              </select>
            </div>
            <div className="flex flex-col gap-2">
              <label className="font-headline-lg text-xl md:text-2xl italic">Zona del cuerpo</label>
              <input
                className="form-input bg-transparent border-0 border-b border-primary focus:ring-0 transition-all py-4 text-xl"
                placeholder="Brazo, espalda, costillas, etc."
                type="text"
              />
            </div>
          </div>
          <div className="flex flex-col gap-2">
            <label className="font-headline-lg text-xl md:text-2xl italic">Descripción</label>
            <textarea
              className="form-input bg-transparent border-0 border-b border-primary focus:ring-0 transition-all py-4 text-xl resize-none"
              placeholder="Cuéntanos sobre el diseño que tienes en mente..."
              rows={4}
            />
          </div>
          <button
            className="w-full bg-primary text-on-primary py-6 font-label-caps text-sm tracking-[0.2em] hover:bg-zinc-800 transition-all uppercase rounded-btn btn-lift cursor-pointer border-0 text-base"
            type="submit"
          >
            ENVIAR SOLICITUD
          </button>
        </form>
      </div>
    </section>
  )
}
