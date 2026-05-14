"use client"

import { Star } from "lucide-react"
import { resenas } from "@/data/resenas"
import { useRef, useState, useEffect, useCallback } from "react"

const AUTO_PLAY_INTERVAL = 4000
const ITEM_WIDTH = 400
const GAP = 16

export default function Resenas() {
  const scrollRef = useRef<HTMLDivElement>(null)
  const autoPlayRef = useRef<ReturnType<typeof setInterval>>(undefined)
  const scrollTimeoutRef = useRef<ReturnType<typeof setTimeout>>(undefined)
  const [isDragging, setIsDragging] = useState(false)
  const [activeIndex, setActiveIndex] = useState(0)
  const dragStartRef = useRef(0)
  const scrollStartRef = useRef(0)
  const wasDraggedRef = useRef(false)

  const itemsPerSet = resenas.length
  const extendedResenas = [...resenas, ...resenas, ...resenas]
  const totalItemWidth = ITEM_WIDTH + GAP

  const avgRating = Math.round(
    resenas.reduce((acc, r) => acc + r.rating, 0) / resenas.length
  )

  const updateActiveIndex = useCallback(() => {
    const container = scrollRef.current
    if (!container) return
    const raw = container.scrollLeft / totalItemWidth
    const idx = ((Math.round(raw) % itemsPerSet) + itemsPerSet) % itemsPerSet
    setActiveIndex(idx)
  }, [itemsPerSet, totalItemWidth])

  const jumpToMiddle = useCallback(() => {
    const container = scrollRef.current
    if (!container) return
    const oneSetWidth = totalItemWidth * itemsPerSet
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
  }, [totalItemWidth, itemsPerSet])

  const startAutoPlay = useCallback(() => {
    stopAutoPlay()
    autoPlayRef.current = setInterval(() => {
      const container = scrollRef.current
      if (!container || isDragging) return
      container.scrollBy({ left: totalItemWidth, behavior: "smooth" })
      updateActiveIndex()
    }, AUTO_PLAY_INTERVAL)
  }, [isDragging, totalItemWidth, updateActiveIndex])

  const stopAutoPlay = useCallback(() => {
    if (autoPlayRef.current) clearInterval(autoPlayRef.current)
  }, [])

  useEffect(() => {
    const container = scrollRef.current
    if (container) {
      container.style.scrollBehavior = "auto"
      container.scrollLeft = totalItemWidth * itemsPerSet
      container.style.scrollBehavior = "smooth"
    }
    startAutoPlay()
    return stopAutoPlay
  }, [startAutoPlay, stopAutoPlay, totalItemWidth, itemsPerSet])

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
    container.style.scrollSnapType = "x mandatory"
    container.style.scrollBehavior = "smooth"
    container.releasePointerCapture(e.pointerId)
    wasDraggedRef.current = true
    const nearest = Math.round(container.scrollLeft / totalItemWidth)
    container.scrollLeft = nearest * totalItemWidth
    updateActiveIndex()
    jumpToMiddle()
    startAutoPlay()
  }

  return (
    <section className="bg-background py-section-gap" id="resenas">
      <div className="max-w-container-max mx-auto px-margin-edge">
        <div className="flex flex-col items-center mb-12">
          <div className="flex gap-1 text-primary mb-4">
            {Array.from({ length: 5 }).map((_, i) => (
              <Star key={i} size={24} fill="currentColor" />
            ))}
          </div>
          <h2 className="section-title text-center">Reseñas Reales</h2>
          <p className="text-secondary font-body-md mt-3 text-center">
            {avgRating}.0 · Basado en {resenas.length} reseñas verificadas de
            Google
          </p>
        </div>

        <div
          ref={scrollRef}
          className="overflow-x-auto no-scrollbar cursor-grab active:cursor-grabbing"
          style={{
            scrollSnapType: "x mandatory",
            scrollBehavior: "smooth",
          }}
          onScroll={handleScroll}
          onPointerDown={handlePointerDown}
          onPointerMove={handlePointerMove}
          onPointerUp={handlePointerUp}
          onPointerCancel={handlePointerUp}
        >
          <div className="flex gap-gutter">
            {extendedResenas.map((resena, i) => (
              <div
                key={`${resena.author}-${i}`}
                className="bg-white p-8 md:p-12 rounded-xl shadow-sm flex flex-col justify-between shrink-0 select-none"
                style={{ width: `${ITEM_WIDTH}px` }}
              >
                <div>
                  <div className="flex gap-0.5 text-primary mb-4">
                    {Array.from({ length: 5 }).map((_, j) => (
                      <Star
                        key={j}
                        size={16}
                        fill={
                          j < resena.rating ? "currentColor" : "none"
                        }
                      />
                    ))}
                  </div>
                  <p className="italic font-body-lg text-on-surface mb-8 text-base md:text-lg leading-relaxed">
                    {resena.text}
                  </p>
                </div>
                <div>
                  <div className="flex items-center gap-3 mb-1">
                    <img
                      src={resena.avatar}
                      alt={resena.author}
                      className="w-10 h-10 rounded-full shrink-0"
                    />
                    <div className="flex items-center gap-2 min-w-0">
                      <div className="w-10 h-[1px] bg-primary shrink-0 hidden sm:block" />
                      <span className="font-label-caps text-label-caps uppercase truncate">
                        {resena.author}
                      </span>
                    </div>
                    <svg
                      className="w-4 h-4 text-primary shrink-0 ml-auto"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                    >
                      <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" />
                    </svg>
                  </div>
                  <span className="text-secondary font-body-sm text-xs ml-[52px]">
                    Reseña verificada · {resena.date}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="flex justify-center gap-2 mt-8">
          {resenas.map((_, i) => (
            <div
              key={i}
              className={`w-2 h-2 rounded-full transition-colors duration-300 ${
                i === activeIndex ? "bg-primary" : "bg-primary/30"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
