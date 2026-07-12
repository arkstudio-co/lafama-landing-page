import type { Metadata } from "next"
import NavBar from "@/components/NavBar"
import PiercingHero from "@/components/PiercingHero"
import PiercingEstilos from "@/components/PiercingEstilos"
import PiercingAsesoria from "@/components/PiercingAsesoria"
import PiercingGaleria from "@/components/PiercingGaleria"
import PiercingAgendar from "@/components/PiercingAgendar"
import PiercingContacto from "@/components/PiercingContacto"
import Ubicacion from "@/components/Ubicacion"
import Footer from "@/components/Footer"
import WhatsAppFloat from "@/components/WhatsAppFloat"
import AnimatedSection from "@/components/AnimatedSection"

export const metadata: Metadata = {
  title: "Perforaciones Profesionales | La Fama Tattoo Estudio | Medellín",
  description:
    "Perforaciones profesionales en Medellín. Daith, Septum, Lóbulo y más. Materiales hipoalergénicos, técnicas seguras y atención personalizada en El Poblado.",
  openGraph: {
    title: "Perforaciones Profesionales | La Fama Tattoo Estudio",
    description:
      "Perforaciones profesionales en Medellín. Daith, Septum, Lóbulo y más. Materiales hipoalergénicos.",
    locale: "es_CO",
    type: "website",
    images: [
      {
        url: "/images/perfo/perfo1.jpg",
        width: 1200,
        height: 630,
        alt: "Perforaciones La Fama Tattoo Estudio",
      },
    ],
  },
}

export default function PiercingPage() {
  return (
    <>
      <NavBar
        links={[
          { href: "/", label: "HOME" },
          { href: "#estilos-perforacion", label: "ESTILOS" },
          { href: "#quienes-somos", label: "NOSOTROS" },
          { href: "#contacto", label: "CONTACTO" },
        ]}
        whatsappMessage="Hola!%20Quiero%20agendar%20mi%20perforaci%C3%B3n"
      />
      <PiercingHero />
      <AnimatedSection>
        <PiercingEstilos />
      </AnimatedSection>
      <AnimatedSection animation="slide-left">
        <PiercingAsesoria />
      </AnimatedSection>
      <AnimatedSection animation="scale-in">
        <PiercingGaleria />
      </AnimatedSection>
      <AnimatedSection>
        <PiercingAgendar />
      </AnimatedSection>
      <AnimatedSection>
        <PiercingContacto />
      </AnimatedSection>
      <AnimatedSection animation="fade-up">
        <Ubicacion />
      </AnimatedSection>
      <Footer />
      <WhatsAppFloat />
    </>
  )
}
