"use client"

import { Phone } from "lucide-react"

export default function StickyCTA() {
  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault()
    e.stopPropagation()
    const href = e.currentTarget.href
    setTimeout(() => {
      window.dataLayer = window.dataLayer || []
      window.dataLayer.push({ event: "JoinChats" })
    }, 0)
    window.open(href, "_blank", "noopener")
  }

  return (
    <div className="sticky-mobile-cta">
      <a
        href="https://wa.me/573195020806"
        className="flex-1 bg-primary text-on-primary py-4 font-label-caps text-sm tracking-[0.2em] uppercase rounded-btn flex items-center justify-center gap-3 btn-lift"
        onClick={handleClick}
      >
        <Phone size={18} />
        RESERVA POR WHATSAPP
      </a>
    </div>
  )
}
