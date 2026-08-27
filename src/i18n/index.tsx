"use client"

import { createContext, useContext, useState, useCallback, useEffect, type ReactNode } from "react"
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

interface LanguageProviderProps {
  children: ReactNode
  initialLocale: Locale
}

export function LanguageProvider({ children, initialLocale }: LanguageProviderProps) {
  const [locale, setLocaleState] = useState<Locale>(initialLocale)

  useEffect(() => {
    document.documentElement.lang = locale
  }, [locale])

  const setLocale = useCallback((newLocale: Locale) => {
    setLocaleState(newLocale)
    localStorage.setItem("lafama-locale", newLocale)
    document.cookie = `lafama-locale=${newLocale}; path=/; max-age=31536000; SameSite=Lax`
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
