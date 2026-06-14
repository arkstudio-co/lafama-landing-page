import Image from "next/image"
import { piercingTipos } from "@/data/piercing"

export default function PiercingEstilos() {
  return (
    <section className="py-section-gap px-6 md:px-margin-edge max-w-container-max mx-auto" id="estilos-perforacion">
      <div className="flex flex-col md:flex-row justify-between items-end mb-16">
        <div className="max-w-xl">
          <span className="font-label-caps text-label-caps text-secondary mb-4 block uppercase tracking-widest">
            Tipos
          </span>
          <h2 className="section-title text-on-surface">ESTILOS DE PERFORACIÓN</h2>
        </div>
        <div className="w-full md:w-1/2 h-[1px] bg-outline-variant mb-6 hidden md:block" />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
        {piercingTipos.map((tipo) => (
          <div key={tipo.name} className="group">
            <div className="relative aspect-[4/3] md:aspect-[3/5] overflow-hidden rounded-lg mb-6">
              <Image
                alt={tipo.name}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-110"
                src={tipo.image}
                sizes="(max-width: 768px) 50vw, 25vw"
              />
            </div>
            <div className="border-y border-outline-variant py-4">
              <p className="font-label-caps text-2xl text-center uppercase tracking-[0.2em] text-on-surface font-bold">
                {tipo.name}
              </p>
              <p className="font-body-md text-sm text-secondary text-center mt-2 leading-relaxed">
                {tipo.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
