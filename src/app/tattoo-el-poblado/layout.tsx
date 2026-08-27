import type { Metadata } from "next"
import { LanguageProvider, type Locale } from "@/i18n"
import { cookies } from "next/headers"
import "../globals.css"

export const metadata: Metadata = {
  title: "Tattoo in El Poblado, Medellín | La Fama Tattoo Studio",
  description:
    "Premium custom tattoos in El Poblado, Medellín. Professional artists, custom designs, and a world-class tattoo experience for travelers and locals.",
  openGraph: {
    title: "La Fama Tattoo Studio | El Poblado, Medellín",
    description:
      "Premium custom tattoos in El Poblado, Medellín. Professional artists and custom designs.",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "/images/hero.jpg",
        width: 1200,
        height: 630,
        alt: "La Fama Tattoo Studio - El Poblado, Medellín",
      },
    ],
  },
}

export default async function TattooElPobladoLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  const cookieStore = await cookies()
  const localeCookie = cookieStore.get("lafama-locale")?.value
  const initialLocale: Locale = localeCookie === "en" || localeCookie === "es" ? localeCookie : "es"

  return <LanguageProvider initialLocale={initialLocale}>{children}</LanguageProvider>
}
