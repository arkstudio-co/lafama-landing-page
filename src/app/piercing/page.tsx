import type { Metadata } from "next"
import PiercingHero from "@/components/PiercingHero"
import PiercingEstilos from "@/components/PiercingEstilos"
import PiercingAsesoria from "@/components/PiercingAsesoria"
import PiercingGaleria from "@/components/PiercingGaleria"
import PiercingAgendar from "@/components/PiercingAgendar"
import Ubicacion from "@/components/Ubicacion"
import Footer from "@/components/Footer"
import WhatsAppFloat from "@/components/WhatsAppFloat"
import StickyCTA from "@/components/StickyCTA"
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
      <AnimatedSection animation="fade-up">
        <Ubicacion />
      </AnimatedSection>
      <Footer />
      <WhatsAppFloat />
      <StickyCTA />
    </>
  )
}
