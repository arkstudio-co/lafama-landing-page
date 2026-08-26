"use client"

import Image from "next/image"
import Link from "next/link"
import { useTranslations } from "@/i18n"
import type { Locale } from "@/i18n"
import { business } from "@/data/business"

export default function LandingFooter() {
  const { locale, setLocale, t } = useTranslations()
  const { address, contact, social, google } = business

  const handleLanguageChange = (newLocale: Locale) => {
    setLocale(newLocale)
    if (typeof window !== "undefined" && window.dataLayer) {
      window.dataLayer.push({ event: "language_change", language: newLocale })
    }
  }

  const whatsappUrl = `https://wa.me/${contact.whatsapp}`

  return (
    <footer className="bg-background border-t border-outline-variant/30 py-10 md:py-14">
      <div className="px-5 md:px-16 max-w-[1440px] mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 md:gap-8">
          <div className="flex flex-col items-center md:items-start">
            <div className="bg-black/90 p-3 rounded-xl w-fit">
              <Image
                src="/images/logo-tight.png"
                alt="La Fama Tattoo Studio"
                width={1094}
                height={1271}
                className="w-32 md:w-40 h-auto"
              />
            </div>
          </div>

          <div>
            <h4 className="font-headline-lg text-xs uppercase tracking-widest text-on-surface-variant mb-4">
              {t.footer.contact}
            </h4>
            <div className="space-y-2 font-body-md text-xs text-secondary tracking-wide mb-5">
              <p>{contact.phoneDisplay}</p>
              <p>{contact.email}</p>
              <p>{social.instagram}</p>
            </div>
            <div className="flex gap-3">
              <a
                href={social.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 bg-surface-container-high rounded-full flex items-center justify-center text-secondary hover:bg-on-surface hover:text-background transition-colors"
                aria-label="Instagram"
              >
                <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
                </svg>
              </a>
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 bg-surface-container-high rounded-full flex items-center justify-center text-secondary hover:bg-on-surface hover:text-background transition-colors"
                aria-label="WhatsApp"
                onClick={() => {
                  if (typeof window !== "undefined" && window.dataLayer) {
                    window.dataLayer.push({ event: "whatsapp_click" })
                  }
                }}
              >
                <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                </svg>
              </a>
              <a
                href={google.mapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 bg-surface-container-high rounded-full flex items-center justify-center text-secondary hover:bg-on-surface hover:text-background transition-colors"
                aria-label="Google Maps"
              >
                <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                  <circle cx="12" cy="10" r="3" />
                </svg>
              </a>
            </div>
          </div>

          <div>
            <h4 className="font-headline-lg text-xs uppercase tracking-widest text-on-surface-variant mb-4">
              {t.footer.findUs}
            </h4>
            <div className="space-y-2 font-body-md text-xs text-secondary tracking-wide">
              <p>{address.street}</p>
              <p>{address.neighborhood}, {address.city}</p>
              <p>{address.department}, {address.country}</p>
            </div>
          </div>

          <div>
            <h4 className="font-headline-lg text-xs uppercase tracking-widest text-on-surface-variant mb-4">
              {t.footer.hours}
            </h4>
            <div className="space-y-2 font-body-md text-xs text-secondary tracking-wide mb-6">
              <p>{t.footer.hoursDetail}</p>
              <p>{t.footer.hoursDetail2}</p>
            </div>
            <div className="flex bg-surface-container-high rounded-full p-0.5 w-fit">
              <button
                onClick={() => handleLanguageChange("en" as Locale)}
                className={`px-3 py-1.5 rounded-full font-label-caps text-[10px] tracking-[0.12em] transition-all duration-300 cursor-pointer border-0 ${
                  locale === "en"
                    ? "bg-on-surface text-background shadow-sm"
                    : "text-on-surface-variant hover:text-on-surface"
                }`}
              >
                ENG
              </button>
              <button
                onClick={() => handleLanguageChange("es" as Locale)}
                className={`px-3 py-1.5 rounded-full font-label-caps text-[10px] tracking-[0.12em] transition-all duration-300 cursor-pointer border-0 ${
                  locale === "es"
                    ? "bg-on-surface text-background shadow-sm"
                    : "text-on-surface-variant hover:text-on-surface"
                }`}
              >
                ESP
              </button>
            </div>
          </div>
        </div>

        <div className="mt-10 pt-6 border-t border-outline-variant/20 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="font-body-md text-[10px] uppercase tracking-widest text-secondary/60">
            © {new Date().getFullYear()} {business.name.toUpperCase()}. {address.neighborhood.toUpperCase()}, {address.city.toUpperCase()}.
          </p>
          <Link
            href="/privacy"
            className="font-body-md text-[10px] uppercase tracking-widest text-secondary/60 hover:text-secondary transition-colors"
          >
            {t.footer.privacyPolicy}
          </Link>
        </div>
      </div>
    </footer>
  )
}
