"use client"

import { Menu, X } from "lucide-react"
import { useState } from "react"

const links = [
  { href: "#", label: "HOME" },
  { href: "#estilos", label: "ESTILOS" },
  { href: "#quienes-somos", label: "NOSOTROS" },
  { href: "#contacto", label: "CONTACTO" },
]

export default function NavBar() {
  const [open, setOpen] = useState(false)

  const handleClick = (href: string) => {
    setOpen(false)
    if (href === "#") {
      window.scrollTo({ top: 0, behavior: "smooth" })
      return
    }
    const el = document.querySelector(href)
    if (el) {
      el.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <nav className="w-full bg-[#F5F5F0] border-b border-zinc-200/50">
      <div className="flex justify-between items-center px-6 md:px-12 py-6 max-w-[1440px] mx-auto h-24">
        <div
          className="flex items-center w-[145px] md:w-40 z-[60] bg-black/90 py-4 px-4 rounded-b-3xl shadow-2xl ml-0 relative top-0"
          style={{ clipPath: "polygon(0 0, 100% 0, 100% 85%, 50% 100%, 0 85%)" }}
        >
          <img
            alt="LaFama Logo"
            className="w-full pt-[60px] md:pt-[90px]"
            src="/images/logo.png"
          />
        </div>

        <div className="hidden md:flex flex-1 justify-center gap-12 font-headline-lg uppercase tracking-[0.2em] text-xs">
          {links.map((link) => (
            <button
              key={link.label}
              onClick={() => handleClick(link.href)}
              className="text-zinc-500 hover:text-zinc-900 transition-all duration-300 cursor-pointer bg-transparent border-0"
            >
              {link.label}
            </button>
          ))}
        </div>

        <div className="flex justify-end w-40">
          <a
            href="https://wa.me/573195020806?text=Hola!%20Quiero%20cotizar%20mi%20nuevo%20tattoo"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-primary text-on-primary px-10 py-4 font-label-caps text-sm tracking-[0.2em] scale-100 active:scale-95 transition-transform rounded-btn btn-lift hidden lg:inline-block text-center no-underline"
          >
            RESERVA AHORA
          </a>
          <button
            className="lg:hidden text-on-surface cursor-pointer bg-transparent border-0"
            onClick={() => setOpen(!open)}
          >
            {open ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {open && (
        <div className="md:hidden bg-white/95 backdrop-blur-md border-t border-zinc-200 px-6 py-8 flex flex-col gap-6 items-center">
          {links.map((link) => (
            <button
              key={link.label}
              onClick={() => handleClick(link.href)}
              className="font-headline-lg uppercase tracking-[0.2em] text-sm text-zinc-700 hover:text-zinc-900 cursor-pointer bg-transparent border-0"
            >
              {link.label}
            </button>
          ))}
          <a
            href="https://wa.me/573195020806?text=Hola!%20Quiero%20cotizar%20mi%20nuevo%20tattoo"
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => setOpen(false)}
            className="bg-primary text-on-primary px-10 py-4 font-label-caps text-sm tracking-[0.2em] rounded-btn w-full inline-block text-center no-underline"
          >
            RESERVA AHORA
          </a>
        </div>
      )}
    </nav>
  )
}
