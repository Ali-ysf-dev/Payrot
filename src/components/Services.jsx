import { useLanguage } from "../context/LanguageContext";

const SERVICE_KEYS = [
  { key: "1", icon: "📋" },
  { key: "2", icon: "📊" },
  { key: "3", icon: "🛡️" },
];

export default function Services() {
  const { t } = useLanguage();

  return (
    <section id="services" className="services-section py-20 md:py-28 px-6 bg-[#fca311]">
      <div className="max-w-5xl mx-auto overflow-visible">
        <p className="services-badge text-sm font-semibold text-white/90 uppercase tracking-wider mb-3 text-center">
          {t("services.badge")}
        </p>
        <h2 className="services-title text-3xl md:text-4xl lg:text-5xl font-bold text-white text-center mb-12 tracking-tight drop-shadow-sm">
          {t("services.title")}
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {SERVICE_KEYS.map(({ key, icon }) => (
            <div
              key={key}
              className="services-card group bg-white p-7 rounded-2xl shadow-xl border-0 hover:shadow-2xl hover:-translate-y-1 transition-all duration-300"
              data-card-index={icon}
            >
              <div className="w-12 h-12 rounded-xl bg-[#fca311]/20 flex items-center justify-center mb-5 text-2xl group-hover:bg-[#fca311]/30 transition-colors">
                {icon}
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">
                {t(`services.item${key}Title`)}
              </h3>
              <p className="text-slate-600 leading-relaxed text-[15px]">
                {t(`services.item${key}Desc`)}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}