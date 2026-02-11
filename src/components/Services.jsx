import { useLanguage } from "../context/LanguageContext";

const SERVICE_KEYS = ["1", "2", "3"];

export default function Services() {
  const { t } = useLanguage();

  return (
    <section id="services" className="services-section py-20 md:py-28 px-6">
      <div className="max-w-6xl mx-auto overflow-visible">
        <p className="services-badge text-sm font-semibold text-white/90 uppercase tracking-wider mb-3 text-center">
          {t("services.badge")}
        </p>
        <h2 className="services-title text-3xl md:text-4xl lg:text-5xl font-bold text-white text-center mb-14 tracking-tight drop-shadow-sm">
          {t("services.title")}
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {SERVICE_KEYS.map((key) => (
            <article
              key={key}
              className="services-card group"
              data-card-index={key}
            >
              <div className="services-card-inner">
                <span className="services-card-number" aria-hidden>
                  {key.padStart(2, "0")}
                </span>
                <div className="services-card-accent" />
                <h3 className="services-card-title">
                  {t(`services.item${key}Title`)}
                </h3>
                <p className="services-card-desc">
                  {t(`services.item${key}Desc`)}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}