import type { Metadata } from "next"
import { Noto_Serif, Manrope } from "next/font/google"
import Script from "next/script"
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
      <Script
        id="gtm-script"
        strategy="beforeInteractive"
        dangerouslySetInnerHTML={{
          __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','GTM-PSBKDSBH');`,
        }}
      />
      <body className="bg-background text-on-background font-body-md overflow-x-hidden antialiased">
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-PSBKDSBH"
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          />
        </noscript>
        {children}
      </body>
    </html>
  )
}
