import { useState } from "react";
import { useLanguage } from "../context/LanguageContext";

export default function ContactUs() {
  const { t } = useLanguage();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [sent, setSent] = useState(false);

  function handleSubmit(e) {
    e.preventDefault();
    if (!name.trim() || !email.trim() || !message.trim()) return;
    setSent(true);
    setName("");
    setEmail("");
    setMessage("");
  }

  return (
    <section id="contact" className="contact-section py-20 md:py-28 px-6 bg-[#FEFEFE]">
      <div className="max-w-2xl mx-auto">
        <div className="bg-white rounded-2xl border border-slate-200/60 p-8 md:p-12 text-center">
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

          {sent ? (
            <p className="py-4 text-emerald-600 font-medium">{t("contact.formSuccess")}</p>
          ) : (
            <form onSubmit={handleSubmit} className="text-left space-y-4 max-w-md mx-auto">
              <div>
                <label htmlFor="contact-name" className="block text-sm font-medium text-slate-700 mb-1">
                  {t("contact.formName")}
                </label>
                <input
                  id="contact-name"
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder={t("contact.formPlaceholderName")}
                  className="w-full px-4 py-2.5 rounded-lg border border-slate-200 focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500 outline-none transition text-slate-900"
                  required
                />
              </div>
              <div>
                <label htmlFor="contact-email" className="block text-sm font-medium text-slate-700 mb-1">
                  {t("contact.formEmail")}
                </label>
                <input
                  id="contact-email"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder={t("contact.formPlaceholderEmail")}
                  className="w-full px-4 py-2.5 rounded-lg border border-slate-200 focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500 outline-none transition text-slate-900"
                  required
                />
              </div>
              <div>
                <label htmlFor="contact-message" className="block text-sm font-medium text-slate-700 mb-1">
                  {t("contact.formMessage")}
                </label>
                <textarea
                  id="contact-message"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder={t("contact.formPlaceholderMessage")}
                  rows={3}
                  className="w-full px-4 py-2.5 rounded-lg border border-slate-200 focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500 outline-none transition resize-y min-h-[80px] text-slate-900"
                  required
                />
              </div>
              <button
                type="submit"
                className="w-full py-3 bg-emerald-500 text-white font-semibold rounded-xl hover:bg-emerald-600 focus:ring-2 focus:ring-emerald-500 focus:ring-offset-2 transition"
              >
                {t("contact.formSubmit")}
              </button>
            </form>
          )}

          <p className="mt-6 text-slate-500 text-sm">
            <a href="mailto:info@baskan.de" className="hover:text-slate-700 transition">{t("contact.email")}</a>
            {" · "}
            <a href="tel:+4930880013170" className="hover:text-slate-700 transition">{t("contact.phone")}</a>
          </p>
        </div>
      </div>
    </section>
  );
}