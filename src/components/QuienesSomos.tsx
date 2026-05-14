import Image from "next/image"

export default function QuienesSomos() {
  return (
    <section className="py-section-gap bg-surface-container-low" id="quienes-somos">
      <div className="max-w-container-max mx-auto px-margin-edge grid md:grid-cols-2 gap-24 items-center">
        <div className="order-2 md:order-1">
          <h2 className="section-title mb-8 tracking-widest">LA FAMA TATTOO ESTUDIO</h2>
          <p className="section-body mb-10">
            Somos uno de los mejores estudios de tatuajes en Medellín, con artistas destacados locales y
            visitantes que trabajarán estrechamente contigo para hacer un diseño de muy alta calidad. Nuestro
            compromiso con la excelencia técnica y la higiene garantiza una experiencia artística única y
            segura.
          </p>
          <button className="bg-primary text-on-primary px-12 py-5 font-label-caps text-sm tracking-[0.2em] hover:bg-zinc-800 transition-colors uppercase rounded-btn mb-8">
            COTIZA TU TATTOO
          </button>
          <div className="w-20 h-[1px] bg-primary" />
        </div>
        <div className="order-1 md:order-2 h-[600px] overflow-hidden grayscale hover:grayscale-0 transition-all duration-1000 rounded-xl">
          <Image
            alt="LaFama Studio Interior"
            className="w-full h-full object-cover"
            src="/images/somos.png"
            width={800}
            height={600}
          />
        </div>
      </div>
    </section>
  )
}
