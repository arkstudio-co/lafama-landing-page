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

  return (
    <nav className="fixed top-0 w-full z-50 bg-[#F5F5F0]/90 backdrop-blur-sm border-b border-zinc-200/50">
      <div className="flex justify-between items-center px-6 md:px-12 py-6 max-w-[1440px] mx-auto h-24">
        <div className="flex items-center w-40 z-[60] bg-black p-4 rounded-b-3xl shadow-2xl ml-0 relative top-0" style={{ clipPath: "polygon(0 0, 100% 0, 100% 85%, 50% 100%, 0 85%)" }}>
          <img
            alt="LaFama Logo"
            className="w-full"
            src="https://lh3.googleusercontent.com/aida/ADBb0uht3WyammSLHq0cw09zFwoqbx1xvxp_t4y8IotaNhiPozIMhlyebEbSx2xXeFahr-aW0ydEPpXpnetaoIagHNjM5hHcSWKIPyh_ffxuAO-VNhU1aO0SjiVe5h7OQv37WG_PAqXakqFk6lIy5GZX273Nnt6YpwnHpjuSK3S5gOwtr4UD8W0UUtBJA6FCKvWhmrozvI_wCpf-AVTnYvwxubweX688NOU_qAFtePryzWV7D-ovPWKy7YjDWG7wjAP9lLowu4DRuiQnWag"
          />
        </div>

        <div className="hidden lg:flex flex-1 justify-center gap-12 font-headline-lg uppercase tracking-[0.2em] text-xs">
          {links.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="text-zinc-500 hover:text-zinc-900 transition-all duration-300"
            >
              {link.label}
            </a>
          ))}
        </div>

        <div className="flex justify-end w-40">
          <button className="bg-primary text-on-primary px-10 py-4 font-label-caps text-sm tracking-[0.2em] scale-100 active:scale-95 transition-transform rounded-btn hidden md:block">
            RESERVA AHORA
          </button>
          <button
            className="md:hidden text-on-surface"
            onClick={() => setOpen(!open)}
          >
            {open ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {open && (
        <div className="lg:hidden bg-[#F5F5F0] border-t border-zinc-200 px-6 py-8 flex flex-col gap-6 items-center">
          {links.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="font-headline-lg uppercase tracking-[0.2em] text-sm text-zinc-700 hover:text-zinc-900"
              onClick={() => setOpen(false)}
            >
              {link.label}
            </a>
          ))}
          <button className="bg-primary text-on-primary px-10 py-4 font-label-caps text-sm tracking-[0.2em] rounded-btn w-full">
            RESERVA AHORA
          </button>
        </div>
      )}
    </nav>
  )
}
