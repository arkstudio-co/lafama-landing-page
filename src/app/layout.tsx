import type { Metadata } from "next"
import { Noto_Serif, Manrope } from "next/font/google"
import "./globals.css"

const notoSerif = Noto_Serif({
  subsets: ["latin"],
  variable: "--font-noto-serif",
  display: "swap",
})

const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-manrope",
  display: "swap",
})

export const metadata: Metadata = {
  metadataBase: new URL("https://lafamatattoo.com"),
  title: "La Fama Tattoo Studio | El Poblado, Medellín",
  description:
    "Tatúate con expertos en el corazón de Medellín. Realismo, Fine Line, Neotradicional y Blackwork. Atención personalizada y altos estándares de higiene.",
  icons: {
    icon: "/images/logo-circulo.png",
  },
  verification: {
    google: "F5Ftr_OEJA9wLNWYkpMRtMUbB4An4V821V6mhHfz2fU",
  },
  robots: "index, follow",
  openGraph: {
    title: "La Fama Tattoo Studio",
    description:
      "Estudio de tatuajes en El Poblado, Medellín. Expertos en Realismo, Fine Line, Neotradicional y Blackwork.",
    locale: "es_CO",
    type: "website",
    images: [
      {
        url: "/images/hero.jpg",
        width: 1200,
        height: 630,
        alt: "La Fama Tattoo Studio",
      },
    ],
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="es" className={`${notoSerif.variable} ${manrope.variable} overflow-x-hidden`}>
      <body className="bg-background text-on-background font-body-md overflow-x-hidden antialiased">
        {children}
      </body>
    </html>
  )
}
