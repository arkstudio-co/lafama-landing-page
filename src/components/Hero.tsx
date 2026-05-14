import Image from "next/image"

export default function Hero() {
  return (
    <section className="relative h-screen w-full overflow-hidden flex items-center justify-center">
      <Image
        alt="Cinematic close-up of a professional tattoo artist"
        fill
        className="object-cover brightness-50 grayscale-[0.3]"
        src="https://lh3.googleusercontent.com/aida-public/AB6AXuCdC5UMWaMCYFvQOHp6y4WRxBu6xVf_q8-mx4yojnYuEsqbYDo_czZOJLLXqRwwqA4vn6WJpUARrXykvFlbHsm6oS4cCggTKCyu4IVPXXRhcGRLOtDbfoZAt8C47KlMm6YDYegXHT8H5v36EiILKNEH1WfOrEWGkPfPUThyjCdCUHQg1kpPtR-pMg26HJ0OFq_DsLxKPmSSr6HypYRzi6_ARr0XITxrO0nqsQ3M7Lg6JRfG9OzhqmzdecZ3NHNGAfZO2VPK7vSRZuJX"
        sizes="100vw"
        preload
      />
      <div className="relative z-10 text-center px-4 max-w-4xl mt-24">
        <h1 className="font-display-lg text-display-lg text-white mb-6 uppercase">
          TATÚATE CON EXPERTOS EN EL CORAZÓN DE MEDELLÍN
        </h1>
        <p className="font-body-lg text-white/80 mb-12 max-w-3xl mx-auto italic text-xl md:text-2xl">
          Vive una experiencia diferente, en un espacio sobrio y tranquilo,
          atención personalizada y altos estándares de higiene
        </p>
        <div className="flex flex-col sm:flex-row gap-6 justify-center">
          <a
            className="inline-block border border-white text-white px-12 py-5 font-label-caps text-sm tracking-[0.2em] hover:bg-white hover:text-black transition-colors duration-500 uppercase rounded-btn"
            href="#contacto"
          >
            RESERVA TU SESIÓN
          </a>
          <a
            className="inline-block bg-white/10 backdrop-blur-md border border-white/30 text-white px-12 py-5 font-label-caps text-sm tracking-[0.2em] hover:bg-white/20 transition-colors duration-500 uppercase rounded-btn"
            href="#contacto"
          >
            WALK-INS
          </a>
        </div>
      </div>
    </section>
  )
}
