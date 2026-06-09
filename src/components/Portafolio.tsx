"use client"

import Image from "next/image"
import { portafolio } from "@/data/portafolio"
import { useRef, useState, useEffect, useCallback } from "react"
import { X, ChevronLeft, ChevronRight } from "lucide-react"

const AUTO_PLAY_INTERVAL = 4000
const GAP = 24

function getCardWidth() {
  if (typeof document === "undefined") return 400
  const el = document.querySelector<HTMLDivElement>(".portafolio-card")
  return (el?.offsetWidth ?? 400) + GAP
}

export default function Portafolio() {
  const scrollRef = useRef<HTMLDivElement>(null)
  const autoPlayRef = useRef<ReturnType<typeof setInterval>>(undefined)
  const scrollTimeoutRef = useRef<ReturnType<typeof setTimeout>>(undefined)
  const [isDragging, setIsDragging] = useState(false)
  const [activeIndex, setActiveIndex] = useState(0)
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null)
  const dragStartRef = useRef(0)
  const scrollStartRef = useRef(0)
  const wasDraggedRef = useRef(false)

  const itemsPerSet = portafolio.length
  const extendedPortafolio = [...portafolio, ...portafolio, ...portafolio]

  const itemWidth = () => getCardWidth()

  const stopAutoPlay = useCallback(() => {
    if (autoPlayRef.current) clearInterval(autoPlayRef.current)
  }, [])

  const updateActiveIndex = useCallback(() => {
    const container = scrollRef.current
    if (!container) return
    const w = itemWidth()
    if (!w) return
    const raw = container.scrollLeft / w
    const idx = ((Math.round(raw) % itemsPerSet) + itemsPerSet) % itemsPerSet
    setActiveIndex(idx)
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

  const startAutoPlay = useCallback(() => {
    stopAutoPlay()
    autoPlayRef.current = setInterval(() => {
      const container = scrollRef.current
      if (!container || isDragging) return
      const w = itemWidth()
      if (!w) return
      container.scrollBy({ left: w, behavior: "smooth" })
      updateActiveIndex()
    }, AUTO_PLAY_INTERVAL)
  }, [isDragging, updateActiveIndex, stopAutoPlay])

  useEffect(() => {
    const container = scrollRef.current
    if (container) {
      container.style.scrollBehavior = "auto"
      container.scrollLeft = itemWidth() * itemsPerSet
      container.style.scrollBehavior = "smooth"
    }
    startAutoPlay()
    return stopAutoPlay
  }, [startAutoPlay, stopAutoPlay, itemsPerSet])

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

  const handlePointerDown = (e: React.PointerEvent) => {
    const container = scrollRef.current
    if (!container) return
    setIsDragging(true)
    stopAutoPlay()
    container.style.scrollSnapType = "none"
    container.style.scrollBehavior = "auto"
    container.style.touchAction = "none"
    container.setPointerCapture(e.pointerId)
    dragStartRef.current = e.clientX
    scrollStartRef.current = container.scrollLeft
  }

  const handlePointerMove = (e: React.PointerEvent) => {
    if (!isDragging) return
    e.preventDefault()
    const container = scrollRef.current
    if (!container) return
    const delta = e.clientX - dragStartRef.current
    container.scrollLeft = scrollStartRef.current - delta
  }

  const handlePointerUp = (e: React.PointerEvent) => {
    const container = scrollRef.current
    if (!container) return
    setIsDragging(false)
    wasDraggedRef.current = true
    container.style.scrollSnapType = "x mandatory"
    container.style.scrollBehavior = "smooth"
    container.style.touchAction = ""
    container.releasePointerCapture(e.pointerId)
    const w = itemWidth()
    if (w) {
      const nearest = Math.round(container.scrollLeft / w)
      container.scrollLeft = nearest * w
    }
    updateActiveIndex()
    jumpToMiddle()
    startAutoPlay()
  }

  const openLightbox = (index: number) => {
    stopAutoPlay()
    setLightboxIndex(index)
  }

  const closeLightbox = () => {
    setLightboxIndex(null)
    startAutoPlay()
  }

  const goToPrev = (e: React.MouseEvent) => {
    e.stopPropagation()
    setLightboxIndex((prev) => (prev !== null ? (prev - 1 + itemsPerSet) % itemsPerSet : null))
  }

  const goToNext = (e: React.MouseEvent) => {
    e.stopPropagation()
    setLightboxIndex((prev) => (prev !== null ? (prev + 1) % itemsPerSet : null))
  }

  useEffect(() => {
    if (lightboxIndex === null) return
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") closeLightbox()
      if (e.key === "ArrowLeft")
        setLightboxIndex((prev) => (prev !== null ? (prev - 1 + itemsPerSet) % itemsPerSet : null))
      if (e.key === "ArrowRight")
        setLightboxIndex((prev) => (prev !== null ? (prev + 1) % itemsPerSet : null))
    }
    window.addEventListener("keydown", handleKey)
    return () => window.removeEventListener("keydown", handleKey)
  }, [lightboxIndex, itemsPerSet])

  return (
    <section className="py-section-gap overflow-hidden bg-surface-container-low" id="portafolio">
      <div className="px-6 md:px-margin-edge max-w-container-max mx-auto mb-16">
        <h2 className="section-title text-center tracking-widest">PORTAFOLIO</h2>
        <p className="text-center text-secondary font-body-md mt-4 uppercase tracking-[0.2em] text-sm">
          Descubre nuestros artistas
        </p>
      </div>
      <div
        ref={scrollRef}
        className="carousel-container no-scrollbar gap-6 px-12 md:px-[5%] group/carousel cursor-grab active:cursor-grabbing"
        style={{ scrollSnapType: "x mandatory", scrollBehavior: "smooth" }}
        onScroll={handleScroll}
        onPointerDown={handlePointerDown}
        onPointerMove={handlePointerMove}
        onPointerUp={handlePointerUp}
        onPointerCancel={handlePointerUp}
      >
        {extendedPortafolio.map((src, i) => (
          <div
            key={`${src}-${i}`}
            className="carousel-item portafolio-card relative group aspect-[3/4] transition-transform duration-500 group-hover/carousel:scale-[0.96] hover:!scale-105 z-0 hover:z-10 cursor-pointer select-none"
            onClick={() => openLightbox(i % itemsPerSet)}
          >
            <Image
              alt={`Portafolio ${(i % itemsPerSet) + 1}`}
              fill
              className="object-cover rounded-xl pointer-events-none"
              src={src}
              sizes="(max-width: 768px) 85vw, 31vw"
            />
          </div>
        ))}
      </div>

      <div className="flex justify-center gap-2 mt-8">
        {portafolio.map((_, i) => (
          <div
            key={i}
            className={`w-2 h-2 rounded-full transition-colors duration-300 ${
              i === activeIndex ? "bg-primary" : "bg-primary/30"
            }`}
          />
        ))}
      </div>

      {lightboxIndex !== null && (
        <div
          className="fixed inset-0 z-[100] bg-black/90 flex items-center justify-center"
          onClick={closeLightbox}
        >
          <button
            className="absolute top-6 right-6 text-white/70 hover:text-white transition-colors cursor-pointer bg-transparent border-0 z-10"
            onClick={closeLightbox}
            aria-label="Cerrar"
          >
            <X size={32} />
          </button>

          <button
            className="absolute left-4 md:left-6 top-1/2 -translate-y-1/2 text-white/70 hover:text-white transition-colors cursor-pointer bg-transparent border-0 z-10"
            onClick={goToPrev}
            aria-label="Anterior"
          >
            <ChevronLeft size={40} />
          </button>

          <button
            className="absolute right-4 md:right-6 top-1/2 -translate-y-1/2 text-white/70 hover:text-white transition-colors cursor-pointer bg-transparent border-0 z-10"
            onClick={goToNext}
            aria-label="Siguiente"
          >
            <ChevronRight size={40} />
          </button>

          <div
            className="relative w-[90vw] h-[80vh] max-w-5xl max-h-[90vh]"
            onClick={(e) => e.stopPropagation()}
          >
            <Image
              alt={`Portafolio ${lightboxIndex + 1}`}
              fill
              className="object-contain"
              src={portafolio[lightboxIndex]}
              sizes="90vw"
              priority
            />
          </div>

          <span className="absolute bottom-6 text-white/50 text-sm font-body-md">
            {lightboxIndex + 1} / {itemsPerSet}
          </span>
        </div>
      )}
    </section>
  )
}
