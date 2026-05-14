import NavBar from "@/components/NavBar"
import Hero from "@/components/Hero"
import Estilos from "@/components/Estilos"
import QuienesSomos from "@/components/QuienesSomos"
import Resenas from "@/components/Resenas"
import Portafolio from "@/components/Portafolio"
import Asesoria from "@/components/Asesoria"
import Contacto from "@/components/Contacto"
import Ubicacion from "@/components/Ubicacion"
import Footer from "@/components/Footer"
import WhatsAppFloat from "@/components/WhatsAppFloat"

export default function Home() {
  return (
    <>
      <NavBar />
      <Hero />
      <Estilos />
      <QuienesSomos />
      <Resenas />
      <Portafolio />
      <Asesoria />
      <Contacto />
      <Ubicacion />
      <Footer />
      <WhatsAppFloat />
    </>
  )
}
