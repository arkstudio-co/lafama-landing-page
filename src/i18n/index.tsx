"use client"

import { createContext, useContext, useState, useCallback, type ReactNode } from "react"
import { en } from "./en"
import { es } from "./es"

export type Locale = "en" | "es"

const translations = { en, es } as const

type Translations = typeof en

interface LanguageContextValue {
  locale: Locale
  setLocale: (locale: Locale) => void
  t: Translations
}

const LanguageContext = createContext<LanguageContextValue | null>(null)

function getInitialLocale(): Locale {
  if (typeof window === "undefined") return "es"
  const stored = localStorage.getItem("lafama-locale") as Locale | null
  if (stored === "en" || stored === "es") {
    document.documentElement.lang = stored
    return stored
  }
  const detected = navigator.language.split("-")[0] === "es" ? "es" : "en"
  document.documentElement.lang = detected
  return detected
}

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [locale, setLocaleState] = useState<Locale>(getInitialLocale)

  const setLocale = useCallback((newLocale: Locale) => {
    setLocaleState(newLocale)
    localStorage.setItem("lafama-locale", newLocale)
    document.documentElement.lang = newLocale
  }, [])

  const t = translations[locale]

  return (
    <LanguageContext.Provider value={{ locale, setLocale, t }}>
      {children}
    </LanguageContext.Provider>
  )
}

export function useTranslations() {
  const context = useContext(LanguageContext)
  if (!context) throw new Error("useTranslations must be used within LanguageProvider")
  return context
}
