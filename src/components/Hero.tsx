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
      <div className="relative z-10 text-center px-4 max-w-4xl mt-16 md:mt-24">
        <h1 className="font-display-lg text-4xl md:text-5xl lg:text-6xl leading-[1.15] text-white mb-6 uppercase hero-headline">
          TATÚATE CON EXPERTOS EN EL CORAZÓN DE MEDELLÍN
        </h1>
        <p className="text-white/70 mb-12 max-w-2xl mx-auto italic text-base md:text-lg leading-relaxed hero-subtitle">
          Vive una experiencia diferente. Un espacio sobrio y tranquilo,
          atención personalizada y altos estándares de higiene.
        </p>
        <div className="flex flex-col sm:flex-row gap-6 justify-center hero-cta">
          <a
            className="inline-block bg-white text-black px-12 py-5 font-label-caps text-sm tracking-[0.2em] hover:bg-white/90 transition-all duration-500 uppercase rounded-btn btn-lift"
            href="https://wa.me/573195020806?text=Hola!%20Quiero%20cotizar%20un%20tattoo"
            target="_blank"
            rel="noopener noreferrer"
          >
            RESERVA TU SESIÓN
          </a>
          <a
            className="inline-block bg-white/10 backdrop-blur-md border border-white/30 text-white px-12 py-5 font-label-caps text-sm tracking-[0.2em] hover:bg-white/20 transition-all duration-500 uppercase rounded-btn btn-lift hero-cta-secondary"
            href="https://wa.me/573195020806?text=Hola!%20Voy%20en%20camino%20a%20tu%20estudio"
            target="_blank"
            rel="noopener noreferrer"
          >
            WALK-INS
          </a>
        </div>
      </div>
    </section>
  )
}
