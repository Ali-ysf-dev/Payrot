import { useLanguage } from "../context/LanguageContext";
import notesEuro from "../assets/noteseuro.png";

const REVIEW_KEYS = [
  { key: "1", name: "Sarah M.", initial: "S" },
  { key: "2", name: "James K.", initial: "J" },
  { key: "3", name: "Lisa T.", initial: "L" },
];

function Stars({ n }) {
  return (
    <span className="text-amber-400 text-sm tracking-wide" aria-hidden>
      {"★".repeat(n)}
    </span>
  );
}

export default function Reviews() {
  const { t } = useLanguage();

  return (
    <section
      id="reviews"
      className="reviews-section py-20 md:py-28 px-6 relative"
      style={{
        backgroundImage: `url(${notesEuro})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="absolute inset-0 bg-slate-900/60" />
      <div className="max-w-5xl mx-auto relative z-10">
        <div className="flex justify-center mb-4">
          <div className="section-accent" />
        </div>
        <p className="reviews-badge text-sm font-semibold text-emerald-400 uppercase tracking-wider mb-3 text-center">
          {t("reviews.badge")}
        </p>
        <h2 className="reviews-title text-3xl md:text-4xl lg:text-5xl font-bold text-white text-center mb-12 tracking-tight">
          {t("reviews.title")}
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {REVIEW_KEYS.map(({ key, name, initial }) => (
            <div
              key={key}
              className="reviews-card bg-white p-6 rounded-2xl border border-slate-200/80 shadow-sm hover:shadow-lg hover:border-emerald-200/50 transition-all duration-300"
            >
              <span className="text-4xl text-slate-300/80 font-serif leading-none select-none">"</span>
              <p className="text-slate-700 leading-relaxed mb-5 -mt-2 pl-1">
                {t(`reviews.review${key}Quote`)}
              </p>
              <div className="flex items-center gap-3 pt-4 border-t border-slate-100">
                <div className="w-10 h-10 rounded-full bg-emerald-500 text-white font-bold text-sm flex items-center justify-center shrink-0">
                  {initial}
                </div>
                <div>
                  <p className="font-semibold text-slate-900">{name}</p>
                  <p className="text-slate-500 text-sm">
                    {t(`reviews.review${key}Context`)}
                  </p>
                </div>
                <div className="ml-auto">
                  <Stars n={5} />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}