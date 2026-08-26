"use client"

import { useTranslations } from "@/i18n"
import { resenas } from "@/data/resenas"
import { useRef, useState, useCallback } from "react"

const selectedReviews = [
  resenas[0],
  resenas[1],
  resenas[2],
  resenas[4],
  resenas[5],
]

export default function LandingReviews() {
  const { t } = useTranslations()
  const scrollRef = useRef<HTMLDivElement>(null)
  const [isDragging, setIsDragging] = useState(false)
  const dragStartRef = useRef(0)
  const scrollStartRef = useRef(0)

  const handlePointerDown = useCallback((e: React.PointerEvent) => {
    const container = scrollRef.current
    if (!container) return
    setIsDragging(true)
    container.style.scrollSnapType = "none"
    container.style.scrollBehavior = "auto"
    container.setPointerCapture(e.pointerId)
    dragStartRef.current = e.clientX
    scrollStartRef.current = container.scrollLeft
  }, [])

  const handlePointerMove = useCallback(
    (e: React.PointerEvent) => {
      if (!isDragging) return
      const container = scrollRef.current
      if (!container) return
      const delta = e.clientX - dragStartRef.current
      container.scrollLeft = scrollStartRef.current - delta
    },
    [isDragging]
  )

  const handlePointerUp = useCallback((e: React.PointerEvent) => {
    const container = scrollRef.current
    if (!container) return
    setIsDragging(false)
    container.style.scrollSnapType = "x mandatory"
    container.style.scrollBehavior = "smooth"
    container.releasePointerCapture(e.pointerId)
  }, [])

  return (
    <section className="py-section-gap bg-background">
      <div className="px-5 md:px-16 max-w-[1440px] mx-auto mb-10 md:mb-14">
        <div className="flex items-center justify-center gap-2 mb-4">
          <div className="flex gap-px text-amber-500">
            {Array.from({ length: 5 }).map((_, i) => (
              <svg key={i} className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>
            ))}
          </div>
        </div>
        <h2 className="section-title text-center">{t.reviews.title}</h2>
      </div>

      <div
        ref={scrollRef}
        className="flex overflow-x-auto no-scrollbar gap-5 md:gap-6 px-5 md:px-16 cursor-grab active:cursor-grabbing"
        style={{ scrollSnapType: "x mandatory", scrollBehavior: "smooth", touchAction: "pan-x pinch-zoom" }}
        onPointerDown={handlePointerDown}
        onPointerMove={handlePointerMove}
        onPointerUp={handlePointerUp}
        onPointerCancel={handlePointerUp}
      >
        {selectedReviews.map((review) => (
          <div
            key={review.author}
            className="shrink-0 w-[80vw] md:w-[30vw] lg:w-[24vw] bg-white p-6 md:p-8 rounded-xl flex flex-col justify-between select-none scroll-snap-align-center"
            style={{ scrollSnapAlign: "center" }}
          >
            <div>
              <div className="flex gap-0.5 text-amber-500 mb-4">
                {Array.from({ length: review.rating }).map((_, j) => (
                  <svg key={j} className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <p className="italic font-body-lg text-on-surface text-sm leading-relaxed mb-6">
                {review.text}
              </p>
            </div>
            <div className="flex items-center gap-3">
              <img
                src={review.avatar}
                alt={review.author}
                className="w-8 h-8 rounded-full shrink-0"
              />
              <div className="flex items-center gap-2 min-w-0">
                <div className="w-6 h-px bg-primary shrink-0" />
                <span className="font-label-caps text-[10px] tracking-[0.1em] uppercase truncate">
                  {review.author}
                </span>
              </div>
              <svg
                className="w-3.5 h-3.5 text-primary shrink-0 ml-auto"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" />
              </svg>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
