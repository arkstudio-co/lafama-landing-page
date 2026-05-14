import Image from "next/image"

export default function Hero() {
  return (
    <section className="relative h-screen w-full overflow-hidden flex items-center justify-center noise-overlay">
      <Image
        alt="Cinematic close-up of a professional tattoo artist"
        fill
        className="object-cover brightness-[0.45] grayscale-[0.25]"
        src="/images/hero-image.JPG"
        sizes="100vw"
        quality={100}
        preload
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-black/30 pointer-events-none z-[1]" />
      <div className="relative z-10 text-center px-4 max-w-4xl mt-24">
        <span className="font-label-caps text-label-caps text-white/60 mb-6 block uppercase tracking-[0.3em] hero-subtitle">
          LA FAMA TATTOO STUDIO · MEDELLÍN
        </span>
        <h1 className="font-display-lg text-display-lg text-white mb-6 uppercase hero-headline">
          TATÚATE CON EXPERTOS EN EL CORAZÓN DE MEDELLÍN
        </h1>
        <p className="font-body-lg text-white/80 mb-12 max-w-3xl mx-auto italic text-xl md:text-2xl hero-subtitle">
          Vive una experiencia diferente, en un espacio sobrio y tranquilo,
          atención personalizada y altos estándares de higiene
        </p>
        <div className="flex flex-col sm:flex-row gap-6 justify-center hero-cta">
          <a
            className="inline-block bg-white text-black px-12 py-5 font-label-caps text-sm tracking-[0.2em] hover:bg-white/90 transition-all duration-500 uppercase rounded-btn btn-lift"
            href="#contacto"
          >
            RESERVA TU SESIÓN
          </a>
          <a
            className="inline-block bg-white/10 backdrop-blur-md border border-white/30 text-white px-12 py-5 font-label-caps text-sm tracking-[0.2em] hover:bg-white/20 transition-all duration-500 uppercase rounded-btn btn-lift hero-cta-secondary"
            href="#contacto"
          >
            WALK-INS
          </a>
        </div>
      </div>
    </section>
  )
}
