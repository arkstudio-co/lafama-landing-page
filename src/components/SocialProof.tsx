import { business } from "@/data/business"

export default function SocialProof() {
  const { google, stats } = business

  return (
    <section className="bg-background border-y border-outline-variant/20">
      <div className="max-w-container-max mx-auto px-margin-edge py-12 md:py-16">
        <div className="flex flex-col md:flex-row items-center justify-center gap-10 md:gap-20">
          <div className="flex items-center gap-4">
            <div className="flex">
              {Array.from({ length: 5 }).map((_, i) => (
                <svg
                  key={i}
                  className="text-amber-400 w-5 h-5 md:w-6 md:h-6"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
              ))}
            </div>
            <span className="font-body-lg text-on-surface font-semibold">{google.rating}</span>
            <span className="text-secondary font-body-md hidden sm:inline">
              estrellas · Google Reviews
            </span>
          </div>

          <div className="hidden md:block w-px h-10 bg-outline-variant" />

          <div className="flex items-center gap-4">
            <span className="stat-number font-display-lg text-3xl md:text-4xl text-primary font-bold">
              {stats.tattoosCompleted}+
            </span>
            <span className="font-body-md text-secondary">
              Tatuajes realizados
            </span>
          </div>

          <div className="hidden md:block w-px h-10 bg-outline-variant" />

          <div className="flex items-center gap-4">
            <span className="font-display-lg text-3xl md:text-4xl text-primary font-bold">
              {stats.yearsExperience}+
            </span>
            <span className="font-body-md text-secondary">
              Años de experiencia
            </span>
          </div>
        </div>
      </div>
    </section>
  )
}
