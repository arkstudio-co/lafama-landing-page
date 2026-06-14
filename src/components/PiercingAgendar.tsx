import { MessageCircle, Sparkles, Calendar, MapPin } from "lucide-react"
import { business } from "@/data/business"

const pasos = [
  {
    icon: MessageCircle,
    title: "Contáctanos",
    description: "Escríbenos por WhatsApp o llámanos. Te atenderemos personalmente.",
  },
  {
    icon: Sparkles,
    title: "Elige tu perforación",
    description: "Te asesoramos sobre el tipo de perforación ideal para ti.",
  },
  {
    icon: Calendar,
    title: "Agenda tu cita",
    description: "Selecciona el día y hora que mejor se ajuste a tu agenda.",
  },
  {
    icon: MapPin,
    title: "Visita el estudio",
    description: "Te esperamos en El Poblado, Medellín. Vive la experiencia La Fama.",
  },
]

export default function PiercingAgendar() {
  return (
    <section className="py-section-gap px-6 md:px-margin-edge max-w-container-max mx-auto bg-background" id="agendar-cita">
      <div className="text-center mb-16">
        <span className="font-label-caps text-label-caps text-secondary mb-4 block uppercase tracking-widest">
          Proceso
        </span>
        <h2 className="section-title text-on-surface">CÓMO AGENDAR TU CITA</h2>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-4 gap-8 md:gap-12">
        {pasos.map((paso, i) => (
          <div key={paso.title} className="text-center group">
            <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-primary/5 flex items-center justify-center transition-colors group-hover:bg-primary/10">
              <paso.icon size={28} className="text-primary" />
            </div>
            <span className="font-label-caps text-xs text-secondary block mb-3 tracking-widest">
              PASO {i + 1}
            </span>
            <h3 className="font-headline-lg text-xl md:text-2xl uppercase tracking-wide mb-3">
              {paso.title}
            </h3>
            <p className="font-body-md text-secondary text-sm leading-relaxed max-w-xs mx-auto">
              {paso.description}
            </p>
          </div>
        ))}
      </div>
      <div className="text-center mt-12">
        <a
          className="inline-block bg-primary text-on-primary px-12 py-5 font-label-caps text-sm tracking-[0.2em] hover:bg-zinc-800 transition-all duration-500 uppercase rounded-btn btn-lift"
          href={`https://wa.me/${business.contact.whatsapp}?text=Hola!%20Quiero%20agendar%20mi%20perforaci%C3%B3n`}
          target="_blank"
          rel="noopener noreferrer"
        >
          RESERVA TU CITA
        </a>
      </div>
    </section>
  )
}
