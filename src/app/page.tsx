import NavBar from "@/components/NavBar"
import Hero from "@/components/Hero"
import Estilos from "@/components/Estilos"
import QuienesSomos from "@/components/QuienesSomos"
import Resenas from "@/components/Resenas"
import Portafolio from "@/components/Portafolio"
import Asesoria from "@/components/Asesoria"
import Contacto from "@/components/Contacto"
import PiercingSection from "@/components/PiercingSection"
import Ubicacion from "@/components/Ubicacion"
import Footer from "@/components/Footer"
import WhatsAppFloat from "@/components/WhatsAppFloat"
import AnimatedSection from "@/components/AnimatedSection"

export default function Home() {
  return (
    <>
      <NavBar />
      <Hero />
      <AnimatedSection>
        <Estilos />
      </AnimatedSection>
      <AnimatedSection animation="slide-left">
        <QuienesSomos />
      </AnimatedSection>
      <AnimatedSection>
        <Resenas />
      </AnimatedSection>
      <AnimatedSection animation="slide-right">
        <Portafolio />
      </AnimatedSection>
      <AnimatedSection animation="scale-in">
        <Asesoria />
      </AnimatedSection>
      <AnimatedSection>
        <Contacto />
      </AnimatedSection>
      <AnimatedSection animation="scale-in">
        <PiercingSection />
      </AnimatedSection>
      <AnimatedSection animation="fade-up">
        <Ubicacion />
      </AnimatedSection>
      <Footer />
      <WhatsAppFloat />
    </>
  )
}
