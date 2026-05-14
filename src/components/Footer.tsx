import { MessageCircle } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-black text-white w-full py-24 px-12 border-t border-zinc-800">
      <div className="max-w-[1440px] mx-auto grid grid-cols-1 md:grid-cols-4 gap-12 items-start">
        <div className="flex flex-col items-center md:items-start col-span-1">
          <div className="flex justify-center md:justify-start w-full mb-8">
            <img
              alt="Logo"
              className="w-48 h-auto"
              src="https://lh3.googleusercontent.com/aida/ADBb0uht3WyammSLHq0cw09zFwoqbx1xvxp_t4y8IotaNhiPozIMhlyebEbSx2xXeFahr-aW0ydEPpXpnetaoIagHNjM5hHcSWKIPyh_ffxuAO-VNhU1aO0SjiVe5h7OQv37WG_PAqXakqFk6lIy5GZX273Nnt6YpwnHpjuSK3S5gOwtr4UD8W0UUtBJA6FCKvWhmrozvI_wCpf-AVTnYvwxubweX688NOU_qAFtePryzWV7D-ovPWKy7YjDWG7wjAP9lLowu4DRuiQnWag"
            />
          </div>
        </div>
        <div>
          <h4 className="font-headline-lg font-bold mb-6 text-sm uppercase tracking-widest text-zinc-300">
            Contáctanos
          </h4>
          <div className="space-y-3 font-body-md text-xs text-zinc-400 tracking-wide mb-6">
            <p>3195020806</p>
            <p>tattolafama@gmail.com</p>
            <p>@lafamatattooestudio</p>
          </div>
          <div className="flex gap-4">
            <a
              className="w-10 h-10 bg-zinc-800 rounded-full flex items-center justify-center hover:bg-white hover:text-black transition-colors"
              href="#"
            >
              <svg fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="20"><rect height="20" rx="5" ry="5" width="20" x="2" y="2"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"></line></svg>
            </a>
            <a
              className="w-10 h-10 bg-zinc-800 rounded-full flex items-center justify-center hover:bg-white hover:text-black transition-colors"
              href="#"
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
            <p>Carrera 43b #8-31</p>
            <p>El Poblado, Medellín</p>
            <p>Antioquia, Colombia</p>
          </div>
        </div>
        <div>
          <h4 className="font-headline-lg font-bold mb-6 text-sm uppercase tracking-widest text-zinc-300">
            Horarios
          </h4>
          <div className="space-y-3 font-body-md text-xs text-zinc-400 tracking-wide">
            <p>Lunes - Sábado</p>
            <p>10:00 AM - 8:00 PM</p>
            <p>Domingos / Festivos Cerrado</p>
            <p className="italic text-zinc-500">Tattoos con cita previa</p>
          </div>
        </div>
      </div>
      <div className="max-w-[1440px] mx-auto mt-20 pt-8 border-t border-zinc-800 text-center">
        <p className="font-body-md uppercase tracking-widest text-[10px] text-zinc-500">
          © 2024 LAFAMA TATTOO STUDIO. EL POBLADO, MEDELLÍN.
        </p>
      </div>
    </footer>
  )
}
