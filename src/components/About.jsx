import { useLanguage } from "../context/LanguageContext";
import aboutImage from "../assets/sculp.png";

const POINT_KEYS = ["point1", "point2", "point3"];

export default function About() {
  const { t } = useLanguage();

  return (
  <section id="about" className="about-section py-16 md:py-20 px-6 bg-[#F1F6F9]">
      <div className="max-w-6xl mx-auto">
        <div className="flex justify-center mb-5">
          <div className="section-accent" />
        </div>
        <p className="about-badge text-sm font-semibold text-emerald-600 uppercase tracking-wider mb-4 text-center">
          {t("about.badge")}
        </p>
        <h2 className="about-title text-3xl md:text-4xl lg:text-5xl font-bold text-slate-900 mb-10 md:mb-12 text-center tracking-tight">
          {t("about.title")}
        </h2>
        <div className="flex flex-col lg:flex-row items-stretch gap-8 lg:gap-12 justify-center mx-auto max-w-4xl">
          <div className="w-full lg:w-1/2 flex">
            <div className="bg-white rounded-2xl shadow-sm border border-slate-200/60 p-6 md:p-8 w-full h-full flex flex-col gap-6 md:gap-8">
              <p className="about-text text-slate-600 text-base md:text-lg leading-relaxed border-l-4 border-emerald-400 pl-4 italic">
                {t("about.text")}
              </p>
              <ul className="about-list flex flex-col gap-3">
                {POINT_KEYS.map((key) => (
                  <li
                    key={key}
                    className="flex items-center gap-4 p-4 rounded-xl bg-gradient-to-r from-emerald-50 to-white border border-emerald-100 shadow-sm hover:shadow-md hover:border-emerald-300 transition-all duration-200"
                  >
                    <span className="flex items-center justify-center w-8 h-8 rounded-full bg-emerald-500 text-white text-sm font-bold shrink-0 shadow-sm">
                      ✓
                    </span>
                    <span className="text-slate-800 font-semibold">{t(`about.${key}`)}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div className="about-image w-full lg:w-1/2 flex items-stretch">
            <div className="w-full min-h-[260px] h-full rounded-2xl overflow-hidden border border-slate-200/80 shadow-lg bg-white">
              <img
                src={aboutImage}
                alt=""
                className="w-full h-full object-cover block"
              />
            </div>
          </div>
        </div>
        {/* 
        <div className="clipped-container">
                  <svg width="0" height="0" aria-hidden>
                    <defs>
                      <clipPath id="aboutRoundedClip" clipPathUnits="objectBoundingBox">
                        <path d="M 0 0 
                                L 0.5 0
                                L 0.5 0.2
                                Q 0.5 0.25 0.55 0.25
                                L 1 0.25
                                L 1 1
                                L 0 1
                                Z" />   
                      </clipPath>
                    </defs>
                  </svg>
        </div>
        */}
      </div>
    </section>
  );
}