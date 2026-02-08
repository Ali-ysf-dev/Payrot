import { createContext, useContext, useState, useCallback } from "react";
import { translations } from "../translations";

const LanguageContext = createContext(null);

const STORAGE_KEY = "payrot-lang";

export function LanguageProvider({ children }) {
  const [lang, setLangState] = useState(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY);
      if (saved === "de" || saved === "en") return saved;
    } catch (_) {}
    return "en";
  });

  const setLang = useCallback((next) => {
    const value = next === "de" ? "de" : "en";
    setLangState(value);
    try {
      localStorage.setItem(STORAGE_KEY, value);
    } catch (_) {}
  }, []);

  const t = useCallback(
    (key) => {
      const keys = key.split(".");
      let obj = translations[lang];
      for (const k of keys) {
        obj = obj?.[k];
      }
      return obj ?? key;
    },
    [lang]
  );

  return (
    <LanguageContext.Provider value={{ lang, setLang, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const ctx = useContext(LanguageContext);
  if (!ctx) throw new Error("useLanguage must be used within LanguageProvider");
  return ctx;
}
