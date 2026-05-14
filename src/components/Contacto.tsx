import { Phone, Mail } from "lucide-react"

export default function Contacto() {
  return (
    <section className="py-section-gap bg-surface-container-low border-y border-outline-variant/30" id="contacto">
      <div className="max-w-container-max mx-auto px-margin-edge grid md:grid-cols-2 gap-24">
        <div>
          <span className="font-label-caps text-label-caps text-secondary mb-4 block uppercase tracking-widest">
            Tu Próxima Pieza
          </span>
          <h2 className="section-title mb-8">AQUÍ COMIENZA TU HISTORIA</h2>
          <p className="section-body max-w-sm mb-12">
            Cuéntanos tu idea. En LaFama Tattoo Estudio diseñamos piezas únicas que trascienden el tiempo.
          </p>
          <div className="space-y-6">
            <div className="flex items-center gap-4">
              <Phone size={28} />
              <span className="font-body-md text-xl">3195020806</span>
            </div>
            <div className="flex items-center gap-4">
              <Mail size={28} />
              <span className="font-body-md text-xl">tattolafama@gmail.com</span>
            </div>
          </div>
        </div>
        <form className="space-y-10">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            <div className="flex flex-col gap-3">
              <label className="font-headline-lg text-2xl italic">Nombre</label>
              <input
                className="bg-transparent border-0 border-b border-primary focus:ring-0 focus:border-b-2 transition-all py-4 text-xl placeholder-zinc-400"
                placeholder="Escribe tu nombre completo"
                type="text"
              />
            </div>
            <div className="flex flex-col gap-3">
              <label className="font-headline-lg text-2xl italic">WhatsApp</label>
              <input
                className="bg-transparent border-0 border-b border-primary focus:ring-0 focus:border-b-2 transition-all py-4 text-xl placeholder-zinc-400"
                placeholder="+57"
                type="tel"
              />
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            <div className="flex flex-col gap-3">
              <label className="font-headline-lg text-2xl italic">Estilo deseado</label>
              <select className="bg-transparent border-0 border-b border-primary focus:ring-0 focus:border-b-2 transition-all py-4 text-xl">
                <option>Realismo</option>
                <option>Fine Line</option>
                <option>Neotradicional</option>
                <option>Blackwork</option>
              </select>
            </div>
            <div className="flex flex-col gap-3">
              <label className="font-headline-lg text-2xl italic">Zona del cuerpo</label>
              <input
                className="bg-transparent border-0 border-b border-primary focus:ring-0 focus:border-b-2 transition-all py-4 text-xl"
                placeholder="Brazo, espalda, etc."
                type="text"
              />
            </div>
          </div>
          <div className="flex flex-col gap-3">
            <label className="font-headline-lg text-2xl italic">Descripción</label>
            <textarea
              className="bg-transparent border-0 border-b border-primary focus:ring-0 focus:border-b-2 transition-all py-4 text-xl resize-none"
              placeholder="Cuéntanos sobre el diseño que tienes en mente..."
              rows={4}
            />
          </div>
          <button
            className="w-full bg-primary text-on-primary py-6 font-label-caps text-sm tracking-[0.2em] hover:bg-zinc-800 transition-colors uppercase rounded-btn"
            type="submit"
          >
            ENVIAR SOLICITUD
          </button>
        </form>
      </div>
    </section>
  )
}
