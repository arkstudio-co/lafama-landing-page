import Image from "next/image"

export default function Ubicacion() {
  return (
    <section className="py-section-gap px-margin-edge max-w-container-max mx-auto bg-background">
      <div className="flex flex-col md:flex-row gap-12 items-center">
        <div className="w-full md:w-1/2">
          <span className="font-label-caps text-label-caps text-secondary mb-4 block uppercase tracking-widest">
            Ubicación Central
          </span>
          <h2 className="section-title mb-6 uppercase">VISÍTANOS</h2>
          <p className="section-body mb-8">
            Carrera 43b #8-31, El Poblado, Medellín.
            <br />
            Atención personalizada de calidad.
          </p>
          <button className="border border-primary px-10 py-4 font-label-caps text-sm tracking-[0.2em] hover:bg-primary hover:text-white transition-all uppercase rounded-btn">
            CÓMO LLEGAR
          </button>
        </div>
        <div className="w-full md:w-1/2 h-[450px] bg-surface-variant relative grayscale border border-outline-variant/30 overflow-hidden rounded-xl">
          <Image
            alt="Street map of El Poblado"
            fill
            className="object-cover"
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuBn_AeqtEEgDoEJNG0nnRHY1gscNaXjtwnO02vvwzLIQwCC6x2vabRXDaYX0rTvUqJRFZxWPZb8J1QLDdtBriGyYI8epA-dCMVBycRAgTAVRA4cO8ygnR6U-ltVp_9MCX1uWlAucJiWjgPgHLWbaBPRlPhisz-vXW-1L7CA1lCxEghP71HyD1ow_NG5qSnDhZruT16DIdgMZuTxgDScZSCcxkc9iFKKEYij06-anpyMIAZ-OFcxyePBcAsJMTAoZs0X48rb9610P-Xi"
            sizes="(max-width: 768px) 100vw, 50vw"
          />
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-8 h-8 bg-primary rounded-full animate-pulse border-4 border-white/50" />
          </div>
        </div>
      </div>
    </section>
  )
}
