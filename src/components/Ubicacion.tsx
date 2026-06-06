import { business } from "@/data/business"

export default function Ubicacion() {
  const { address, hours, contact, google, name } = business

  return (
    <section className="py-section-gap px-6 md:px-margin-edge max-w-container-max mx-auto bg-background" id="ubicacion" style={{ scrollMarginTop: 100 }}>
      <div className="flex flex-col md:flex-row gap-12 items-center">
        <div className="w-full md:w-1/2">
          <span className="font-label-caps text-label-caps text-secondary mb-4 block uppercase tracking-widest">
            Ubicación Central
          </span>
          <h2 className="section-title mb-6 uppercase">VISÍTANOS</h2>
          <div className="space-y-6 section-body mb-8">
            <div>
              <p className="font-semibold text-on-surface">Dirección</p>
              <p className="text-secondary">
                {address.street}, {address.neighborhood}
                <br />
                {address.city}, {address.department}
              </p>
            </div>
            <div>
              <p className="font-semibold text-on-surface">Horario</p>
              <p className="text-secondary">{hours.display}</p>
            </div>
            <div>
              <p className="font-semibold text-on-surface">Teléfono</p>
              <p className="text-secondary">{contact.phoneDisplay}</p>
            </div>

          </div>
          <a
            href="https://www.google.com/maps/place/La+Fama+Tattoo+Estudio/@6.2097121,-75.5742569,17z/data=!3m1!4b1!4m6!3m5!1s0x8e44295a5a318455:0x8152fc21be642c3f!8m2!3d6.2097068!4d-75.571682!16s%2Fg%2F11xkzlvxr3?entry=ttu&g_ep=EgoyMDI2MDUxMi4wIKXMDSoASAFQAw%3D%3D"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block border border-primary px-10 py-4 font-label-caps text-sm tracking-[0.2em] hover:bg-primary hover:text-white transition-all uppercase rounded-btn"
          >
            CÓMO LLEGAR
          </a>
        </div>
        <div className="w-full md:w-1/2 h-[300px] md:h-[450px] relative overflow-hidden rounded-xl grayscale hover:grayscale-0 transition-all duration-700">
          <iframe
            src={google.mapsEmbedUrl}
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title={`${name} en Google Maps`}
          />
        </div>
      </div>
    </section>
  )
}
