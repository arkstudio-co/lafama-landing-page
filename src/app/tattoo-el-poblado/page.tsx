"use client"

import LandingHeader from "@/components/landing/LandingHeader"
import LandingHero from "@/components/landing/LandingHero"
import LandingTrustBar from "@/components/landing/LandingTrustBar"
import LandingPortfolio from "@/components/landing/LandingPortfolio"
import LandingExperience from "@/components/landing/LandingExperience"
import LandingStyles from "@/components/landing/LandingStyles"
import LandingLocation from "@/components/landing/LandingLocation"
import LandingProcess from "@/components/landing/LandingProcess"
import LandingReviews from "@/components/landing/LandingReviews"
import LandingLeadForm from "@/components/landing/LandingLeadForm"
import LandingFooter from "@/components/landing/LandingFooter"
import LandingStickyCTA from "@/components/landing/LandingStickyCTA"
import LandingWhatsAppFloat from "@/components/landing/LandingWhatsAppFloat"

function Divider() {
  return (
    <div className="max-w-[1440px] mx-auto px-5 md:px-16">
      <div className="h-px bg-outline-variant/20" />
    </div>
  )
}

export default function TattooElPobladoPage() {
  return (
    <main className="min-h-screen bg-background">
      <LandingHeader />
      <LandingHero />
      <LandingTrustBar />
      <LandingPortfolio />
      <Divider />
      <LandingExperience />
      <Divider />
      <LandingStyles />
      <Divider />
      <LandingLocation />
      <LandingProcess />
      <LandingReviews />
      <Divider />
      <LandingLeadForm />
      <LandingFooter />
      <LandingStickyCTA />
      <LandingWhatsAppFloat />
    </main>
  )
}
