import { useState } from "react";
import { useLanguage } from "../context/LanguageContext";
import logo from "../assets/logo.png";

const LINK_KEYS = [
  { key: "about", href: "#about" },
  { key: "services", href: "#services" },
  { key: "contact", href: "#contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const { lang, setLang, t } = useLanguage();

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-sm py-3">
      <div className="max-w-6xl mx-auto flex items-center px-4 md:px-6 relative">
        {/* Left: logo */}
        <div className="flex-1 flex justify-start min-w-0">
          <a href="#" className="flex items-center gap-2 font-bold text-xl tracking-tight text-slate-900">
            <img src={logo} alt="Payrot" className="h-8 w-auto object-contain" />
            PAYROT
          </a>
        </div>
        {/* Center: nav links - equal flex on both sides keeps them centered */}
        <ul className="hidden md:flex items-center gap-8 absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
          {LINK_KEYS.map(({ key, href }) => (
            <li key={href}>
              <a
                href={href}
                className="text-slate-600 hover:text-slate-900 text-sm font-medium transition-colors duration-200 hover:underline underline-offset-4 whitespace-nowrap"
              >
                {t(`nav.${key}`)}
              </a>
            </li>
          ))}
        </ul>
        {/* Right: Contact Us + toggle + menu */}
        <div className="flex-1 flex items-center justify-end gap-3 min-w-0">
          <a
            href="#contact"
            className="hidden md:inline-flex px-5 py-2.5 bg-slate-900 text-white text-sm font-semibold rounded-lg hover:bg-slate-800 hover:scale-105 active:scale-100 transition-all duration-200 shadow-sm hover:shadow-md shrink-0"
          >
            {t("nav.contactUs")}
          </a>
          <button
            type="button"
            onClick={() => setLang(lang === "en" ? "de" : "en")}
            className="flex items-center shrink-0 rounded-lg border border-slate-200 bg-slate-50 p-0.5 hover:bg-slate-100 transition-colors"
            aria-label={lang === "en" ? "Switch to Deutsch" : "Switch to English"}
          >
            <span
              className={`rounded-md px-2.5 py-1 text-sm font-medium transition-colors ${lang === "en" ? "bg-slate-900 text-white" : "text-slate-500"}`}
            >
              EN
            </span>
            <span
              className={`rounded-md px-2.5 py-1 text-sm font-medium transition-colors ${lang === "de" ? "bg-slate-900 text-white" : "text-slate-500"}`}
            >
              DE
            </span>
          </button>
          <button
            type="button"
            className="md:hidden p-2 text-slate-900"
            onClick={() => setOpen((o) => !o)}
            aria-label="Menu"
          >
            {open ? "✕" : "☰"}
          </button>
        </div>
      </div>
      {open && (
        <div className="md:hidden mx-4 rounded-lg py-3 flex flex-col gap-1 bg-white border border-slate-200 shadow-lg">
          {LINK_KEYS.map(({ key, href }) => (
            <a
              key={href}
              href={href}
              className="text-slate-700 py-2 px-4 rounded hover:bg-slate-100 transition-colors"
              onClick={() => setOpen(false)}
            >
              {t(`nav.${key}`)}
            </a>
          ))}
          <a
            href="#contact"
            className="font-semibold text-slate-900 py-2 px-4 rounded hover:bg-slate-100"
            onClick={() => setOpen(false)}
          >
            {t("nav.contactUs")}
          </a>
        </div>
      )}
    </nav>
  );
}
