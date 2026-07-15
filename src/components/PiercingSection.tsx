import Image from "next/image"

export default function PiercingSection() {
  return (
    <section className="py-section-gap bg-surface-container-low" id="piercing">
      <div className="max-w-container-max mx-auto px-6 md:px-margin-edge grid md:grid-cols-2 gap-12 md:gap-24 items-center">
        <div className="grid grid-cols-3 gap-3 md:gap-4">
          {[
            { src: "hero.jpg", position: "center" },
            { src: "Septum.jpg", position: "center" },
            { src: "portafolio1.jpg", position: "center" },
          ].map((img) => (
            <div
              key={img.src}
              className="h-[300px] md:h-[480px] overflow-hidden rounded-xl shadow-lg bg-black/10"
            >
              <Image
                alt="Piercing"
                className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
                src={`/images/perfo/${img.src}`}
                style={{ objectPosition: img.position }}
                width={800}
                height={200}
              />
            </div>
          ))}
        </div>
        <div className="text-left">
          <span className="font-label-caps text-label-caps text-secondary mb-6 block uppercase tracking-[0.3em]">
            Piercing
          </span>
          <h2 className="section-title mb-10 tracking-tight">DESCUBRE TU ESTILO</h2>
          <p className="section-body mb-12">
            Un piercing no es solo una perforación. Es una declaración de quién
            eres, una forma de contar tu historia sin palabras. En La Fama te
            ayudamos a encontrar la pieza que mejor exprese tu personalidad con
            la seguridad que mereces.
          </p>
          <a
            href="https://www.lafamatattoo.com/piercing"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-primary text-on-primary px-12 py-5 font-label-caps text-sm tracking-[0.2em] hover:bg-zinc-800 transition-colors uppercase rounded-btn btn-lift cursor-pointer border-0"
          >
            VER PIERCING
          </a>
        </div>
      </div>
    </section>
  )
}
