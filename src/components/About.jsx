import { useLanguage } from "../context/LanguageContext";
import aboutImage from "../assets/flat-lay-business-concept.avif";

const POINT_KEYS = ["point1", "point2", "point3"];

export default function About() {
  const { t } = useLanguage();

  return (
  <section id="about" className="about-section py-16 md:py-20 px-6 bg-[#F1F6F9]">
      <div className="max-w-6xl mx-auto">
        <div className="flex justify-center mb-4">
          <div className="section-accent" />
        </div>
        <p className="about-badge text-sm font-semibold text-emerald-600 uppercase tracking-wider mb-3 text-center">
          {t("about.badge")}
        </p>
        <h2 className="about-title text-3xl md:text-4xl lg:text-5xl font-bold text-slate-900 mb-8 md:mb-10 text-center tracking-tight">
          {t("about.title")}
        </h2>
        <div className="flex flex-col lg:flex-row items-stretch gap-6 lg:gap-8">
          <div className="flex-1 min-w-0 flex">
            <div className="bg-white rounded-2xl shadow-sm border border-slate-200/60 p-6 md:p-8 w-full h-full flex flex-col">
              <p className="about-text text-slate-600 text-base md:text-lg leading-relaxed mb-6 md:mb-8">
                {t("about.text")}
              </p>
              <ul className="about-list flex flex-wrap gap-3 md:gap-5">
                {POINT_KEYS.map((key) => (
                  <li
                    key={key}
                    className="flex items-center gap-3 px-4 py-2.5 rounded-xl bg-slate-50 border border-slate-200/60"
                  >
                    <span className="flex items-center justify-center w-7 h-7 rounded-full bg-emerald-500 text-white text-sm font-bold">
                      ✓
                    </span>
                    <span className="text-slate-700 font-medium">{t(`about.${key}`)}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div className="about-image flex-1 min-w-0 flex">
            <div className="w-full h-full min-h-[240px] md:min-h-[260px] lg:min-h-0 rounded-2xl overflow-hidden border border-slate-200/80 shadow-lg bg-white">
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