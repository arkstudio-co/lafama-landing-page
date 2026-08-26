"use client"

import Image from "next/image"
import Link from "next/link"
import { useTranslations } from "@/i18n"
import type { Locale } from "@/i18n"

const navLinks = [
  { key: "portfolio" as const, href: "#portfolio" },
  { key: "experience" as const, href: "#experience" },
  { key: "styles" as const, href: "#styles" },
  { key: "location" as const, href: "#location" },
]

export default function LandingHeader() {
  const { locale, setLocale, t } = useTranslations()

  const scrollToSection = (href: string) => {
    const id = href.replace("#", "")
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <header className="sticky top-0 z-50 bg-background border-b border-outline-variant/20">
      <div className="max-w-[1440px] mx-auto flex items-center justify-between h-20 px-5 md:h-24 md:px-16">

        <Link
          href="/"
          className="flex items-center w-[120px] md:w-[150px] z-[60] bg-black/90 py-3 px-3 rounded-b-3xl shadow-2xl relative -mt-1 md:-mt-2 shrink-0"
          style={{ clipPath: "polygon(0 0, 100% 0, 100% 85%, 50% 100%, 0 85%)" }}
        >
          <Image
            src="/images/logo.png"
            alt="La Fama Tattoo Studio"
            width={1224}
            height={2016}
            className="w-full pt-[65px] md:pt-[85px]"
            priority
          />
        </Link>

        <nav className="hidden lg:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={(e) => { e.preventDefault(); scrollToSection(link.href) }}
              className="font-label-caps text-[11px] tracking-[0.15em] text-on-surface-variant hover:text-on-surface transition-all duration-300 hover:scale-[1.05]"
            >
              {t.header[link.key]}
            </a>
          ))}
        </nav>

        <div className="flex items-center shrink-0">
          <div className="flex bg-surface-container-high rounded-full p-1 gap-1">
            <button
              onClick={() => {
                setLocale("en" as Locale)
                if (typeof window !== "undefined" && window.dataLayer) {
                  window.dataLayer.push({ event: "language_change", language: "en" })
                }
              }}
              className={`px-4 py-2 rounded-full font-label-caps text-[11px] tracking-[0.12em] transition-all duration-300 cursor-pointer border-0 ${
                locale === "en"
                  ? "bg-on-surface text-background shadow-sm"
                  : "text-on-surface-variant hover:text-on-surface"
              }`}
            >
              ENG
            </button>
            <button
              onClick={() => {
                setLocale("es" as Locale)
                if (typeof window !== "undefined" && window.dataLayer) {
                  window.dataLayer.push({ event: "language_change", language: "es" })
                }
              }}
              className={`px-4 py-2 rounded-full font-label-caps text-[11px] tracking-[0.12em] transition-all duration-300 cursor-pointer border-0 ${
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
    </header>
  )
}
