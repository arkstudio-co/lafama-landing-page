"use client"

import Image from "next/image"
import { useTranslations } from "@/i18n"
import { portafolio } from "@/data/portafolio"
import { useRef, useState, useCallback, useEffect } from "react"
import { X, ChevronLeft, ChevronRight } from "lucide-react"

const GAP = 24

const HEIGHTS = [
  "aspect-[3/4]",
  "aspect-[2/3]",
  "aspect-[3/4]",
  "aspect-[4/5]",
  "aspect-[3/4]",
  "aspect-[2/3]",
]

function getCardWidth() {
  if (typeof document === "undefined") return 400
  const el = document.querySelector<HTMLDivElement>(".landing-portfolio-card")
  return (el?.offsetWidth ?? 400) + GAP
}

export default function LandingPortfolio() {
  const { t } = useTranslations()
  const scrollRef = useRef<HTMLDivElement>(null)
  const scrollTimeoutRef = useRef<ReturnType<typeof setTimeout>>(undefined)
  const [isDragging, setIsDragging] = useState(false)
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null)
  const dragStartRef = useRef(0)
  const scrollStartRef = useRef(0)
  const wasDraggedRef = useRef(false)
  const isTouchDragRef = useRef(false)

  const itemsPerSet = portafolio.length
  const extendedPortafolio = [...portafolio, ...portafolio, ...portafolio]

  const itemWidth = () => getCardWidth()

  const updateActiveIndex = useCallback(() => {
    const container = scrollRef.current
    if (!container) return
    const w = itemWidth()
    if (!w) return
    const raw = container.scrollLeft / w
    const idx = ((Math.round(raw) % itemsPerSet) + itemsPerSet) % itemsPerSet
    return idx
  }, [itemsPerSet])

  const jumpToMiddle = useCallback(() => {
    const container = scrollRef.current
    if (!container) return
    const w = itemWidth()
    if (!w) return
    const oneSetWidth = w * itemsPerSet
    const currentScroll = container.scrollLeft
    if (currentScroll < oneSetWidth) {
      container.style.scrollBehavior = "auto"
      container.scrollLeft = currentScroll + oneSetWidth
      container.style.scrollBehavior = "smooth"
    } else if (currentScroll >= oneSetWidth * 2) {
      container.style.scrollBehavior = "auto"
      container.scrollLeft = currentScroll - oneSetWidth
      container.style.scrollBehavior = "smooth"
    }
  }, [itemsPerSet])

  useEffect(() => {
    const container = scrollRef.current
    if (container) {
      container.style.scrollBehavior = "auto"
      container.scrollLeft = itemWidth() * itemsPerSet
      container.style.scrollBehavior = "smooth"
    }
  }, [itemsPerSet])

  const handleScroll = useCallback(() => {
    if (scrollTimeoutRef.current) clearTimeout(scrollTimeoutRef.current)
    scrollTimeoutRef.current = setTimeout(() => {
      if (!wasDraggedRef.current) {
        updateActiveIndex()
        jumpToMiddle()
      }
      wasDraggedRef.current = false
    }, 150)
  }, [updateActiveIndex, jumpToMiddle])

  const handlePointerDown = useCallback((e: React.PointerEvent) => {
    const container = scrollRef.current
    if (!container) return
    setIsDragging(true)
    wasDraggedRef.current = false
    isTouchDragRef.current = e.pointerType === "touch"

    if (isTouchDragRef.current) {
      container.style.scrollSnapType = ""
      container.style.scrollBehavior = ""
      container.style.touchAction = ""
    } else {
      container.style.scrollSnapType = "none"
      container.style.scrollBehavior = "auto"
      container.style.touchAction = "none"
    }

    container.setPointerCapture(e.pointerId)
    dragStartRef.current = e.clientX
    scrollStartRef.current = container.scrollLeft
  }, [])

  const handlePointerMove = useCallback(
    (e: React.PointerEvent) => {
      if (!isDragging) return
      e.preventDefault()
      const container = scrollRef.current
      if (!container) return

      if (isTouchDragRef.current) {
        scrollStartRef.current = container.scrollLeft
      } else {
        const delta = e.clientX - dragStartRef.current
        container.scrollLeft = scrollStartRef.current - delta
      }
    },
    [isDragging]
  )

  const handlePointerUp = useCallback(
    (e: React.PointerEvent) => {
      const container = scrollRef.current
      if (!container) return
      setIsDragging(false)
      wasDraggedRef.current = true

      if (!isTouchDragRef.current) {
        container.style.scrollSnapType = "x mandatory"
        container.style.scrollBehavior = "smooth"
        container.style.touchAction = ""
        const w = itemWidth()
        if (w) {
          const nearest = Math.round(container.scrollLeft / w)
          container.scrollLeft = nearest * w
        }
      }

      container.releasePointerCapture(e.pointerId)
      updateActiveIndex()
      jumpToMiddle()
    },
    [updateActiveIndex, jumpToMiddle]
  )

  const handleImageClick = useCallback(
    (index: number) => {
      if (!wasDraggedRef.current) {
        if (typeof window !== "undefined" && window.dataLayer) {
          window.dataLayer.push({ event: "portfolio_interaction", action: "lightbox_open" })
        }
        setLightboxIndex(index)
      }
    },
    []
  )

  const closeLightbox = useCallback(() => setLightboxIndex(null), [])

  const goToPrev = useCallback(() => {
    setLightboxIndex((prev) => (prev !== null ? (prev - 1 + itemsPerSet) % itemsPerSet : null))
  }, [itemsPerSet])

  const goToNext = useCallback(() => {
    setLightboxIndex((prev) => (prev !== null ? (prev + 1) % itemsPerSet : null))
  }, [itemsPerSet])

  useEffect(() => {
    if (lightboxIndex === null) return
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") closeLightbox()
      if (e.key === "ArrowLeft") goToPrev()
      if (e.key === "ArrowRight") goToNext()
    }
    document.body.style.overflow = "hidden"
    const lightbox = document.getElementById("portfolio-lightbox")
    lightbox?.focus()
    window.addEventListener("keydown", handleKey)
    return () => {
      document.body.style.overflow = ""
      window.removeEventListener("keydown", handleKey)
    }
  }, [lightboxIndex, closeLightbox, goToPrev, goToNext])

  return (
    <section className="py-section-gap overflow-hidden bg-background scroll-mt-28 md:scroll-mt-32" id="portfolio">
      <div className="px-5 md:px-16 max-w-[1440px] mx-auto mb-10 md:mb-14">
        <h2 className="section-title text-center">{t.portfolio.title}</h2>
        <p className="text-center text-secondary font-body-md mt-3 uppercase tracking-[0.2em] text-xs">
          {t.portfolio.subtitle}
        </p>
      </div>

      <div
        ref={scrollRef}
        className="flex overflow-x-auto no-scrollbar gap-4 md:gap-6 px-5 md:px-16 cursor-grab active:cursor-grabbing"
        style={{ scrollSnapType: "x mandatory", scrollBehavior: "smooth", touchAction: "pan-x pinch-zoom" }}
        onScroll={handleScroll}
        onPointerDown={handlePointerDown}
        onPointerMove={handlePointerMove}
        onPointerUp={handlePointerUp}
        onPointerCancel={handlePointerUp}
      >
        {extendedPortafolio.map((src, i) => (
          <div
            key={`${src}-${i}`}
            className={`landing-portfolio-card shrink-0 w-[70vw] md:w-[28vw] lg:w-[22vw] ${HEIGHTS[i % HEIGHTS.length]} relative rounded-lg overflow-hidden scroll-snap-align-center select-none`}
            style={{ scrollSnapAlign: "center" }}
            onClick={() => handleImageClick(i % itemsPerSet)}
          >
            <Image
              alt={`Portfolio ${(i % itemsPerSet) + 1}`}
              fill
              className="object-cover transition-transform duration-700 motion-safe:hover:scale-105"
              src={src}
              sizes="(max-width: 768px) 70vw, (max-width: 1024px) 28vw, 22vw"
              loading="lazy"
            />
          </div>
        ))}
      </div>

      {lightboxIndex !== null && (
        <div
          id="portfolio-lightbox"
          tabIndex={-1}
          className="fixed inset-0 z-[100] bg-black/95 flex items-center justify-center outline-none"
          onClick={closeLightbox}
          role="dialog"
          aria-modal="true"
          aria-label="Image lightbox"
        >
          <button
            className="absolute top-5 right-5 text-white/60 hover:text-white transition-colors cursor-pointer bg-transparent border-0 z-10"
            onClick={closeLightbox}
            aria-label="Close"
          >
            <X size={28} />
          </button>

          <button
            className="absolute left-3 md:left-5 top-1/2 -translate-y-1/2 text-white/50 hover:text-white transition-colors cursor-pointer bg-transparent border-0 z-10"
            onClick={(e) => { e.stopPropagation(); goToPrev() }}
            aria-label="Previous"
          >
            <ChevronLeft size={36} />
          </button>

          <button
            className="absolute right-3 md:right-5 top-1/2 -translate-y-1/2 text-white/50 hover:text-white transition-colors cursor-pointer bg-transparent border-0 z-10"
            onClick={(e) => { e.stopPropagation(); goToNext() }}
            aria-label="Next"
          >
            <ChevronRight size={36} />
          </button>

          <div
            className="relative w-[92vw] h-[80vh] max-w-5xl max-h-[85vh]"
            onClick={(e) => e.stopPropagation()}
          >
            <Image
              alt={`Portfolio ${lightboxIndex + 1}`}
              fill
              className="object-contain"
              src={portafolio[lightboxIndex]}
              sizes="92vw"
              quality={90}
              priority
            />
          </div>

          <span className="absolute bottom-5 text-white/40 text-xs font-body-md tracking-wider">
            {lightboxIndex + 1} / {itemsPerSet}
          </span>
        </div>
      )}
    </section>
  )
}
