import { useLanguage } from "../context/LanguageContext";

export default function ContactUs() {
  const { t } = useLanguage();

  return (
    <section id="contact" className="contact-section py-20 md:py-28 px-6 bg-[#F1F6F9]">
      <div className="max-w-2xl mx-auto">
        <div className="bg-white rounded-2xl shadow-lg border border-slate-200/60 p-8 md:p-12 text-center">
          <div className="flex justify-center mb-4">
            <div className="section-accent" />
          </div>
          <p className="contact-badge text-sm font-semibold text-emerald-600 uppercase tracking-wider mb-3">
            {t("contact.badge")}
          </p>
          <h2 className="contact-title text-3xl md:text-4xl lg:text-5xl font-bold text-slate-900 mb-4 tracking-tight">
            {t("contact.title")}
          </h2>
          <p className="contact-text text-slate-600 mb-8 text-lg leading-relaxed">
            {t("contact.text")}
          </p>
          <a
            href="mailto:hello@payrot.com"
            className="contact-cta inline-block px-8 py-4 bg-emerald-500 text-white font-semibold rounded-xl hover:bg-emerald-600 hover:scale-[1.02] active:scale-100 transition-all duration-200 shadow-lg hover:shadow-xl"
          >
            {t("contact.cta")}
          </a>
          <p className="mt-6 text-slate-500 text-sm">
            {t("contact.email")} · {t("contact.phone")}
          </p>
        </div>
      </div>
    </section>
  );
}