import { createContext, useContext, useEffect, useState, type ReactNode } from "react";
import type { Lang } from "@/data/content";

interface I18nContextValue {
  lang: Lang;
  setLang: (l: Lang) => void;
  t: <T extends Record<Lang, string> | string>(value: T) => string;
}

const I18nContext = createContext<I18nContextValue | null>(null);

export function I18nProvider({ children }: { children: ReactNode }) {
  const [lang, setLangState] = useState<Lang>(() => {
    if (typeof window === "undefined") return "es";
    const saved = localStorage.getItem("lang");
    if (saved === "es" || saved === "en") return saved;
    return navigator.language.toLowerCase().startsWith("en") ? "en" : "es";
  });

  useEffect(() => {
    document.documentElement.lang = lang;
    localStorage.setItem("lang", lang);
  }, [lang]);

  const t = <T extends Record<Lang, string> | string>(value: T): string => {
    if (typeof value === "string") return value;
    return (value as Record<Lang, string>)[lang];
  };

  return (
    <I18nContext.Provider value={{ lang, setLang: setLangState, t }}>
      {children}
    </I18nContext.Provider>
  );
}

export function useI18n() {
  const ctx = useContext(I18nContext);
  if (!ctx) throw new Error("useI18n must be used within I18nProvider");
  return ctx;
}
