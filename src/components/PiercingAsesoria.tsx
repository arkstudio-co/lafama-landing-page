import Image from "next/image"

export default function PiercingAsesoria() {
  return (
    <section className="py-section-gap bg-background" id="asesoria-perforacion">
      <div className="max-w-container-max mx-auto px-6 md:px-margin-edge grid md:grid-cols-2 gap-12 md:gap-24 items-center">
        <div className="h-[300px] md:h-[500px] overflow-hidden rounded-xl shadow-2xl">
          <Image
            alt="Asesoría de perforación"
            className="w-full h-full object-cover transition-transform duration-700 hover:scale-110"
            src="/images/perfo/perfo6.jpg"
            width={800}
            height={500}
          />
        </div>
        <div className="text-left">
          <span className="font-label-caps text-label-caps text-secondary mb-6 block uppercase tracking-[0.3em]">
            Exclusividad
          </span>
          <h2 className="section-title mb-10 tracking-tight">ASESORÍA PERSONALIZADA</h2>
          <p className="section-body mb-12">
            Te guiamos en cada paso: desde elegir la perforación ideal para tu anatomía
            hasta los cuidados posteriores. Trabajamos con materiales hipoalergénicos de
            la más alta calidad para garantizar una experiencia segura y satisfactoria.
          </p>
          <div className="w-16 h-[1px] bg-zinc-300" />
        </div>
      </div>
    </section>
  )
}
