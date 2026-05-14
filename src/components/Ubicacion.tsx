import { business } from "@/data/business"

export default function Ubicacion() {
  const { address, hours, contact, google, name } = business

  return (
    <section className="py-section-gap px-margin-edge max-w-container-max mx-auto bg-background" id="ubicacion">
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
            <div className="flex gap-10">
              <div>
                <p className="font-semibold text-on-surface">Horario</p>
                <p className="text-secondary">{hours.display}</p>
              </div>
              <div>
                <p className="font-semibold text-on-surface">Teléfono</p>
                <p className="text-secondary">{contact.phoneDisplay}</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <div className="flex gap-0.5 text-primary">
                {Array.from({ length: 5 }).map((_, i) => (
                  <svg key={i} className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <span className="text-sm text-secondary">
                {google.rating} · {google.reviewCount} reseñas en Google
              </span>
            </div>
          </div>
          <a
            href={google.directionsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block border border-primary px-10 py-4 font-label-caps text-sm tracking-[0.2em] hover:bg-primary hover:text-white transition-all uppercase rounded-btn"
          >
            CÓMO LLEGAR
          </a>
        </div>
        <div className="w-full md:w-1/2 h-[450px] relative overflow-hidden rounded-xl grayscale hover:grayscale-0 transition-all duration-700">
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
