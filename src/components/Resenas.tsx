import { Star } from "lucide-react"
import { resenas } from "@/data/resenas"

export default function Resenas() {
  return (
    <section className="bg-background py-section-gap" id="resenas">
      <div className="max-w-container-max mx-auto px-margin-edge">
        <div className="flex flex-col items-center mb-16">
          <div className="flex gap-1 text-primary mb-4">
            {Array.from({ length: 5 }).map((_, i) => (
              <Star key={i} size={24} fill="currentColor" />
            ))}
          </div>
          <h2 className="section-title text-center">Reseñas Reales</h2>
        </div>
        <div className="flex overflow-x-auto no-scrollbar gap-gutter pb-8 snap-x">
          {resenas.map((resena) => (
            <div
              key={resena.author}
              className="min-w-[400px] bg-white p-12 snap-center rounded-xl shadow-sm"
            >
              <p className="italic font-body-lg text-on-surface mb-8 text-lg">
                {resena.text}
              </p>
              <div className="flex items-center gap-4">
                <div className="w-10 h-[1px] bg-primary" />
                <span className="font-label-caps text-label-caps uppercase">
                  {resena.author}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
