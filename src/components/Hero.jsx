import heroImage from "../assets/tornEuro.avif";
import dollarImage from "../assets/dollar.jpeg";
import torn50 from "../assets/torn50.avif";
import { useLanguage } from "../context/LanguageContext";

export default function Hero() {
  const { t, lang } = useLanguage();
  const isDE = lang === "de";

  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col lg:flex-row items-center justify-center gap-8 lg:gap-12 px-6 pt-24 pb-16 overflow-hidden bg-[#FEFEFE]"
    >
      {/* Decorative vertical lines — left side (above left content) */}
      <div className="absolute left-[6%] top-0 bottom-0 flex gap-3 pointer-events-none z-0" aria-hidden>
        <div className="w-px h-full bg-gradient-to-b from-transparent via-slate-200 to-transparent opacity-60" />
        <div className="w-px h-full bg-gradient-to-b from-transparent via-emerald-200 to-transparent opacity-50" />
        <div className="w-px h-full bg-gradient-to-b from-transparent via-slate-200 to-transparent opacity-60" />
      </div>

      {/* Decorative vertical lines — right side (above right content) */}
      <div className="absolute right-[6%] top-0 bottom-0 flex gap-3 pointer-events-none z-0" aria-hidden>
        <div className="w-px h-full bg-gradient-to-b from-transparent via-slate-200 to-transparent opacity-60" />
        <div className="w-px h-full bg-gradient-to-b from-transparent via-emerald-200 to-transparent opacity-50" />
        <div className="w-px h-full bg-gradient-to-b from-transparent via-slate-200 to-transparent opacity-60" />
      </div>
      {/* Left content — order 1 on mobile/md, order 1 on lg */}
      <div className="relative z-10 flex-1 max-w-md text-center lg:text-left order-1 lg:translate-x-[30%] lg:-translate-y-[35%]">
        <span className="hero-badge inline-block px-4 py-1.5 rounded-full bg-slate-100 text-slate-600 text-xs font-medium uppercase tracking-wider mb-4 border border-slate-200">
          {t("hero.badge")}
        </span>
        <h1 className={`hero-title font-bold text-slate-900 mb-3 leading-tight tracking-tight ${isDE ? "text-2xl sm:text-3xl md:text-4xl lg:text-5xl" : "text-3xl sm:text-4xl md:text-5xl lg:text-6xl"}`}>
          {t("hero.titleLeft")}
        </h1>
        <p className={`hero-subtitle text-slate-600 mb-6 ${isDE ? "text-sm md:text-base" : "text-base md:text-lg"}`}>
          {t("hero.subtitleLeft1")}
          <br />
          {t("hero.subtitleLeft2")}
        </p>
        <div className="hero-cta flex flex-wrap gap-3 justify-center lg:justify-start">
          <a
            href="#contact"
            className="px-6 py-3 bg-slate-900 text-white font-semibold rounded-xl hover:bg-slate-800 hover:scale-[1.02] active:scale-100 transition-all duration-200 shadow-lg hover:shadow-xl text-sm"
          >
            {t("hero.ctaBook")}
          </a>
        </div>
      </div>

      {/* Center image — order 2 on mobile/md (between the two content blocks), order 2 on lg */}
      <div className="relative z-0 shrink-0 order-2">
        <div className="relative max-w-[280px] sm:max-w-[320px] lg:max-w-[360px] mx-auto">
          <img
            src={heroImage}
            alt={t("hero.imgAlt")}
            className="w-full h-auto object-cover block"
          />
        </div>
      </div>

      {/* Right content — order 3 on mobile/md, order 3 on lg */}
      <div className="relative z-10 flex-1 max-w-md text-center lg:text-right order-3 lg:-translate-x-[30%] lg:translate-y-[40%]">
        <h1 className={`hero-title font-bold text-slate-900 mb-3 leading-tight tracking-tight ${isDE ? "text-2xl sm:text-3xl md:text-4xl lg:text-5xl" : "text-3xl sm:text-4xl md:text-5xl lg:text-6xl"}`}>
          {t("hero.titleRight")}
        </h1>
        <p className={`hero-subtitle text-slate-600 mb-6 ${isDE ? "text-sm md:text-base" : "text-base md:text-lg"}`}>
          {t("hero.subtitleRight")}
        </p>
        <div className="hero-cta flex flex-wrap gap-3 justify-center lg:justify-end">
          <a
            href="#services"
            className="bg-emerald-500 px-6 py-3 border-2 text-white font-semibold rounded-xl hover:scale-[1.03] active:scale-100 transition-all duration-200 text-sm"
          >
            {t("hero.ctaServices")}
          </a>
        </div>
      </div>
    </section>
  );
}
