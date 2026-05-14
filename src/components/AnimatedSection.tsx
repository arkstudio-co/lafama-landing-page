"use client"

import { useEffect, useRef, type ReactNode } from "react"

type AnimationType = "fade-up" | "scale-in" | "slide-left" | "slide-right"

export default function AnimatedSection({
  children,
  animation = "fade-up",
  delay = 0,
  className = "",
}: {
  children: ReactNode
  animation?: AnimationType
  delay?: number
  className?: string
}) {
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.classList.add("in-view")
          observer.unobserve(el)
        }
      },
      { threshold: 0.15 }
    )

    observer.observe(el)
    return () => observer.disconnect()
  }, [])

  const delayClass = delay ? `delay-${delay}` : ""

  return (
    <div
      ref={ref}
      className={`animate-${animation} ${delayClass} ${className}`}
    >
      {children}
    </div>
  )
}
