import Image from "next/image"
import { portafolio } from "@/data/portafolio"

export default function Portafolio() {
  return (
    <section className="py-section-gap overflow-hidden bg-surface-container-low" id="portafolio" style={{ scrollMarginTop: 100 }}>
      <div className="px-6 md:px-margin-edge max-w-container-max mx-auto mb-16">
        <h2 className="section-title text-center tracking-widest">PORTAFOLIO</h2>
        <p className="text-center text-secondary font-body-md mt-4 uppercase tracking-[0.2em] text-sm">
          Descubre nuestros artistas
        </p>
      </div>
      <div className="carousel-container no-scrollbar gap-6 px-12 md:px-[5%] group/carousel">
        {portafolio.map((src, i) => (
          <div
            key={i}
            className="carousel-item relative group aspect-[3/4] transition-transform duration-500 group-hover/carousel:scale-[0.96] hover:!scale-105 z-0 hover:z-10"
          >
            <Image
              alt={`Portafolio ${i + 1}`}
              fill
              className="object-cover grayscale group-hover:grayscale-0 transition-all duration-1000 rounded-xl"
              src={src}
              sizes="(max-width: 768px) 85vw, 31vw"
            />
          </div>
        ))}
      </div>
    </section>
  )
}
