import Image from "next/image"

export default function Asesoria() {
  return (
    <section className="py-32 bg-background" id="asesoria">
      <div className="max-w-container-max mx-auto px-margin-edge grid md:grid-cols-2 gap-24 items-center">
        <div className="h-[500px] overflow-hidden rounded-xl shadow-2xl">
          <Image
            alt="Artist working"
            className="w-full h-full object-cover transition-transform duration-700 hover:scale-110"
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuCdC5UMWaMCYFvQOHp6y4WRxBu6xVf_q8-mx4yojnYuEsqbYDo_czZOJLLXqRwwqA4vn6WJpUARrXykvFlbHsm6oS4cCggTKCyu4IVPXXRhcGRLOtDbfoZAt8C47KlMm6YDYegXHT8H5v36EiILKNEH1WfOrEWGkPfPUThyjCdCUHQg1kpPtR-pMg26HJ0OFq_DsLxKPmSSr6HypYRzi6_ARr0XITxrO0nqsQ3M7Lg6JRfG9OzhqmzdecZ3NHNGAfZO2VPK7vSRZuJX"
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
            Asesoramos tanto en persona como por escrito, colaborando estrechamente en sesiones de diseño con
            nuestros artistas. Estamos aquí para convertir tus ideas en tatuajes memorables, asegurando que
            cada trazo cuente tu historia con perfección.
          </p>
          <div className="w-16 h-[1px] bg-zinc-300" />
        </div>
      </div>
    </section>
  )
}
