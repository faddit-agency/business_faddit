"use client";

import React, { createContext, useContext, useState, useEffect } from "react";
import { ko } from "@/locales/ko";
import { en } from "@/locales/en";
import { zhTW } from "@/locales/zh-TW";

type Locale = "ko" | "en" | "zh-TW";
type Translations = typeof ko | typeof en | typeof zhTW;

interface I18nContextType {
  locale: Locale;
  setLocale: (locale: Locale) => void;
  t: Translations;
}

const I18nContext = createContext<I18nContextType | undefined>(undefined);

export function I18nProvider({ children }: { children: React.ReactNode }) {
  const [locale, setLocaleState] = useState<Locale>("ko");

  useEffect(() => {
    // Load saved locale from localStorage
    const savedLocale = localStorage.getItem("locale") as Locale | null;
    if (savedLocale && (savedLocale === "ko" || savedLocale === "en" || savedLocale === "zh-TW")) {
      setLocaleState(savedLocale);
      // Update html lang attribute
      document.documentElement.lang = savedLocale;
    }
  }, []);

  const setLocale = (newLocale: Locale) => {
    setLocaleState(newLocale);
    localStorage.setItem("locale", newLocale);
    // Update html lang attribute
    document.documentElement.lang = newLocale;
  };

  const translations = (
    locale === "ko" ? ko : 
    locale === "en" ? en : 
    zhTW
  ) as Translations;

  return (
    <I18nContext.Provider value={{ locale, setLocale, t: translations }}>
      {children}
    </I18nContext.Provider>
  );
}

export function useI18n() {
  const context = useContext(I18nContext);
  if (!context) {
    throw new Error("useI18n must be used within I18nProvider");
  }
  return context;
}
