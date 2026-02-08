import { useLanguage } from "../context/LanguageContext";

const POINT_KEYS = ["point1", "point2", "point3"];

export default function About() {
  const { t } = useLanguage();

  return (
    <section id="about" className="about-section py-20 md:py-28 px-6 bg-[#F1F6F9]">
      <div className="max-w-4xl mx-auto">
        <div className="flex justify-center mb-4">
          <div className="section-accent" />
        </div>
        <p className="about-badge text-sm font-semibold text-emerald-600 uppercase tracking-wider mb-3 text-center">
          {t("about.badge")}
        </p>
        <h2 className="about-title text-3xl md:text-4xl lg:text-5xl font-bold text-slate-900 mb-6 text-center tracking-tight">
          {t("about.title")}
        </h2>
        <div className="bg-white rounded-2xl shadow-sm border border-slate-200/60 p-8 md:p-10">
          <p className="about-text text-slate-600 text-lg leading-relaxed mb-8">
            {t("about.text")}
          </p>
          <ul className="about-list flex flex-wrap gap-4 md:gap-6">
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
    </section>
  );
}