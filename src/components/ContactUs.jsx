import { useState } from "react";
import { useLanguage } from "../context/LanguageContext";
import contactImage from "../assets/dollarhand-removebg-preview.png";

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
    <section id="contact" className="contact-section pt-0 pb-16 px-6 bg-[#FEFEFE]">
      <div className="max-w-2xl mx-auto relative">
        <img
          src={contactImage}
          alt="Contact"
          className="relative h-40 lg:h-45 w-auto pointer-events-none z-10 left-[35%] md:left-[50%]"
          style={{ transform: "translateY(24%)" }}
        />
        <div className="bg-white rounded-2xl border border-slate-200/60 p-4 md:p-5 text-center">
          <div className="flex justify-center mb-2">
            <div className="section-accent" />
          </div>
          <p className="contact-badge text-xs font-semibold text-emerald-600 uppercase tracking-wider mb-1">
            {t("contact.badge")}
          </p>
          <h2 className="contact-title text-2xl md:text-3xl font-bold text-slate-900 mb-2 tracking-tight">
            {t("contact.title")}
          </h2>
          <p className="contact-text text-slate-600 mb-4 text-sm leading-relaxed">
            {t("contact.text")}
          </p>

          {sent ? (
            <p className="py-4 text-emerald-600 font-medium">{t("contact.formSuccess")}</p>
          ) : (
            <form onSubmit={handleSubmit} className="text-left space-y-2 max-w-md mx-auto">
              <div>
                <label htmlFor="contact-name" className="block text-xs font-medium text-slate-700 mb-1">
                  {t("contact.formName")}
                </label>
                <input
                  id="contact-name"
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder={t("contact.formPlaceholderName")}
                  className="w-full px-3 py-1.5 rounded-lg border border-slate-200 focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500 outline-none transition text-slate-900 text-sm"
                  required
                />
              </div>
              <div>
                <label htmlFor="contact-email" className="block text-xs font-medium text-slate-700 mb-1">
                  {t("contact.formEmail")}
                </label>
                <input
                  id="contact-email"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder={t("contact.formPlaceholderEmail")}
                  className="w-full px-3 py-1.5 rounded-lg border border-slate-200 focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500 outline-none transition text-slate-900 text-sm"
                  required
                />
              </div>
              <div>
                <label htmlFor="contact-message" className="block text-xs font-medium text-slate-700 mb-1">
                  {t("contact.formMessage")}
                </label>
                <textarea
                  id="contact-message"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder={t("contact.formPlaceholderMessage")}
                  rows={2}
                  className="w-full px-3 py-1.5 rounded-lg border border-slate-200 focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500 outline-none transition resize-y min-h-[52px] text-slate-900 text-sm"
                  required
                />
              </div>
              <button
                type="submit"
                className="w-full py-2 bg-emerald-500 text-white font-semibold rounded-xl hover:bg-emerald-600 focus:ring-2 focus:ring-emerald-500 focus:ring-offset-2 transition text-sm"
              >
                {t("contact.formSubmit")}
              </button>
            </form>
          )}

          <p className="mt-3 text-slate-500 text-xs">
            <a href="mailto:info@baskan.de" className="hover:text-slate-700 transition">{t("contact.email")}</a>
            {" · "}
            <a href="tel:+4930880013170" className="hover:text-slate-700 transition">{t("contact.phone")}</a>
          </p>
        </div>
      </div>
    </section>
  );
}