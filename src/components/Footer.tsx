import { MessageCircle } from "lucide-react"
import { business } from "@/data/business"

export default function Footer() {
  const { address, contact, social, name } = business

  return (
    <footer className="bg-black text-white w-full py-[67px] px-12 border-t border-zinc-800">
      <div className="max-w-[1440px] mx-auto grid grid-cols-1 md:grid-cols-4 gap-12 items-start">
        <div className="flex flex-col items-center md:items-start col-span-1">
          <div className="flex justify-center md:justify-start w-full mb-8">
            <img alt="Logo" className="w-48 h-auto" src="/images/logo.png" />
          </div>
        </div>
        <div>
          <h4 className="font-headline-lg font-bold mb-6 text-sm uppercase tracking-widest text-zinc-300">
            Contáctanos
          </h4>
          <div className="space-y-3 font-body-md text-xs text-zinc-400 tracking-wide mb-6">
            <p>{contact.phoneDisplay}</p>
            <p>{contact.email}</p>
            <p>{social.instagram}</p>
          </div>
          <div className="flex gap-4">
            <a
              className="w-10 h-10 bg-zinc-800 rounded-full flex items-center justify-center hover:bg-white hover:text-black transition-colors"
              href={social.instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
            >
              <svg fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="20"><rect height="20" rx="5" ry="5" width="20" x="2" y="2"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"></line></svg>
            </a>
            <a
              className="w-10 h-10 bg-zinc-800 rounded-full flex items-center justify-center hover:bg-white hover:text-black transition-colors"
              href={`https://wa.me/${contact.whatsapp}`}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="WhatsApp"
            >
              <MessageCircle size={20} />
            </a>
          </div>
        </div>
        <div>
          <h4 className="font-headline-lg font-bold mb-6 text-sm uppercase tracking-widest text-zinc-300">
            Encuéntranos
          </h4>
          <div className="space-y-3 font-body-md text-xs text-zinc-400 tracking-wide">
            <p>{address.street}</p>
            <p>{address.neighborhood}, {address.city}</p>
            <p>{address.department}, {address.country}</p>
          </div>
        </div>
        <div>
          <h4 className="font-headline-lg font-bold mb-6 text-sm uppercase tracking-widest text-zinc-300">
            Horarios
          </h4>
          <div className="space-y-3 font-body-md text-xs text-zinc-400 tracking-wide">
            <p>Lunes–sábados 10am–8pm</p>
            <p>Domingo y festivos atención bajo cita previa</p>
          </div>
        </div>
      </div>
      <div className="max-w-[1440px] mx-auto mt-20 pt-8 border-t border-zinc-800 text-center">
        <p className="font-body-md uppercase tracking-widest text-[10px] text-zinc-500">
          &copy; {new Date().getFullYear()} {name.toUpperCase()}. {address.neighborhood.toUpperCase()}, {address.city.toUpperCase()}.
        </p>
      </div>
    </footer>
  )
}
