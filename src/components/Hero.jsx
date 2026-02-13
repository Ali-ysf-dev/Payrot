import heroImage from "../assets/tornEuro.avif";
import dollarImage from "../assets/dollar.jpeg";
import torn50 from "../assets/torn50.avif";
import { useLanguage } from "../context/LanguageContext";

export default function Hero() {
  const { t } = useLanguage();

  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col md:flex-row items-center justify-center gap-8 md:gap-12 px-6 pt-24 pb-16 overflow-hidden bg-[#FEFEFE]"
    >
      {/* Decorative dollar image - bottom left on large screens 
      <img
        src={dollarImage}
        alt=""
        className="hidden lg:block absolute bottom-0 left-35 z-0 w-[320px] xl:w-[360px] h-auto object-contain object-bottom-left pointer-events-none"
        aria-hidden
      />*/}
      {/* Decorative torn50 image - top right on large screens
      <img
        src={torn50}
        alt=""
        className="hidden lg:block absolute top-0 right-35 z-0 w-[280px] xl:w-[320px] h-auto object-contain object-top-right pointer-events-none"
        aria-hidden
      />*/}
      <div className="relative z-10 flex-1 max-w-md text-left order-1 md:order-1 lg:translate-x-[30%] lg:-translate-y-[35%]">
        <span className="hero-badge inline-block px-4 py-1.5 rounded-full bg-slate-100 text-slate-600 text-xs font-medium uppercase tracking-wider mb-4 border border-slate-200">
          {t("hero.badge")}
        </span>
        <h1 className="hero-title text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-slate-900 mb-3 leading-tight tracking-tight">
          {t("hero.titleLeft")}
        </h1>
        <p className="hero-subtitle text-slate-600 text-base md:text-lg mb-6">
          {t("hero.subtitleLeft1")}
          <br />
          {t("hero.subtitleLeft2")}
        </p>
        <div className="hero-cta flex flex-wrap gap-3">
          <a
            href="#contact"
            className="px-6 py-3 bg-slate-900 text-white font-semibold rounded-xl hover:bg-slate-800 hover:scale-[1.02] active:scale-100 transition-all duration-200 shadow-lg hover:shadow-xl text-sm"
          >
            {t("hero.ctaBook")}
          </a>
        </div>
      </div>

      <div className="relative z-10 shrink-0 order-2 md:order-2">
        <div className="relative max-w-[280px] sm:max-w-[320px] md:max-w-[360px] mx-auto">
          <img
            src={heroImage}
            alt={t("hero.imgAlt")}
            className="w-full h-auto object-cover block"
          />
        </div>
      </div>

      <div className="relative z-10 flex-1 max-w-md text-right order-3 md:order-3 lg:-translate-x-[30%] lg:translate-y-[40%]">
        <h1 className="hero-title text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-slate-900 mb-3 leading-tight tracking-tight">
          {t("hero.titleRight")}
        </h1>
        <p className="hero-subtitle text-slate-600 text-base md:text-lg mb-6">
          {t("hero.subtitleRight")}
        </p>
        <div className="hero-cta flex flex-wrap gap-3 justify-end">
          <a
            href="#services"
            className="bg-emerald-500 px-6 py-3 border-2 text-white font-semibold rounded-xl  hover:scale-[1.03] active:scale-100 transition-all duration-200 text-sm"
          >
            {t("hero.ctaServices")}
          </a>
        </div>
      </div>
    </section>
  );
}