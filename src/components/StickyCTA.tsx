"use client"

import { Phone } from "lucide-react"

export default function StickyCTA() {
  return (
    <div className="sticky-mobile-cta">
      <a
        href="https://wa.me/573195020806"
        target="_blank"
        rel="noopener noreferrer"
        className="flex-1 bg-primary text-on-primary py-4 font-label-caps text-sm tracking-[0.2em] uppercase rounded-btn flex items-center justify-center gap-3 btn-lift"
      >
        <Phone size={18} />
        RESERVA POR WHATSAPP
      </a>
    </div>
  )
}
