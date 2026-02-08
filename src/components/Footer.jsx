import { useLanguage } from "../context/LanguageContext";

const LINK_KEYS = [
  { key: "about", href: "#about" },
  { key: "services", href: "#services" },
  { key: "contact", href: "#contact" },
];

export default function Footer() {
  const { t } = useLanguage();
  const year = new Date().getFullYear();

  return (
    <footer className="bg-gradient-to-b from-slate-900 via-slate-800 to-slate-900">
      <div className="max-w-6xl mx-auto px-6 py-12 md:py-14">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-8">
          <div>
            <a href="#" className="text-white font-bold text-xl tracking-tight">
              PAYROT
            </a>
            <p className="text-white/70 text-sm mt-2 max-w-xs">
              {t("footer.tagline")}
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-8 sm:gap-12">
            <div>
              <h3 className="text-white font-semibold text-sm uppercase tracking-wider mb-4">
                {t("footer.quickLinks")}
              </h3>
              <ul className="flex flex-col gap-3">
                {LINK_KEYS.map(({ key, href }) => (
                  <li key={href}>
                    <a
                      href={href}
                      className="text-white/70 hover:text-white text-sm transition"
                    >
                      {t(`nav.${key}`)}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="text-white font-semibold text-sm uppercase tracking-wider mb-4">
                {t("footer.contact")}
              </h3>
              <ul className="flex flex-col gap-3 text-white/70 text-sm">
                <li>
                  <a href="mailto:hello@payrot.com" className="hover:text-white transition">
                    hello@payrot.com
                  </a>
                </li>
                <li>
                  <a href="tel:+15551234567" className="hover:text-white transition">
                    (555) 123-4567
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="mt-10 pt-8 border-t border-white/10 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
          <p className="text-white/60 text-sm">
            © {year} Payrot. {t("footer.copyright")}
          </p>
          <p className="text-white/60 text-sm">
            {t("footer.designedBy")} <span className="text-white/80 font-medium">Ali Youssef</span>
          </p>
        </div>
      </div>
    </footer>
  );
}