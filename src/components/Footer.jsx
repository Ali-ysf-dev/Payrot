import { useLanguage } from "../context/LanguageContext";
import { FaInstagram, FaLinkedinIn, FaFacebookF } from "react-icons/fa";
import logo from "../assets/logo.svg";

const LINK_KEYS = [
  { key: "about", href: "#about" },
  { key: "services", href: "#services" },
  { key: "contact", href: "#contact" },
];

export default function Footer() {
  const { t } = useLanguage();
  const year = new Date().getFullYear();

  return (
    <footer className="bg-linear-to-b from-slate-900 via-slate-800 to-slate-900">
      <div className="max-w-6xl mx-auto px-6 py-12 md:py-14">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-8">
          <div className="flex items-center gap-3">
            <img src={logo} alt="Payrot" className="h-6 w-auto object-contain mr-3" />
            <div>
              <p className="text-white/70 text-sm max-w-xs">
                {t("footer.tagline")}
              </p>
            </div>
          </div>
          <div className="flex flex-col sm:flex-row gap-8 sm:gap-12">
            <div className="flex flex-col items-center">
              <h3 className="text-white font-semibold text-sm uppercase tracking-wider mb-4">
                {t("footer.social")}
              </h3>
              <div className="flex flex-col gap-2 items-center">
                <a
                  href="https://www.instagram.com/baskansteuerberatung/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center w-8 h-8 rounded-full bg-white/10 text-white/80 hover:bg-white/20 hover:text-white hover:scale-110 focus:outline-none focus:ring-2 focus:ring-white/50 focus:ring-offset-2 focus:ring-offset-slate-800 transition-all duration-200"
                  aria-label="Instagram"
                >
                  <FaInstagram className="w-4 h-4" />
                </a>
                <a
                  href="https://www.linkedin.com/company/baskan-steuerberatung/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center w-8 h-8 rounded-full bg-white/10 text-white/80 hover:bg-white/20 hover:text-white hover:scale-110 focus:outline-none focus:ring-2 focus:ring-white/50 focus:ring-offset-2 focus:ring-offset-slate-800 transition-all duration-200"
                  aria-label="LinkedIn"
                >
                  <FaLinkedinIn className="w-4 h-4" />
                </a>
                <a
                  href="https://www.facebook.com/BaskanSteuerberatung/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center w-8 h-8 rounded-full bg-white/10 text-white/80 hover:bg-white/20 hover:text-white hover:scale-110 focus:outline-none focus:ring-2 focus:ring-white/50 focus:ring-offset-2 focus:ring-offset-slate-800 transition-all duration-200"
                  aria-label="Facebook"
                >
                  <FaFacebookF className="w-4 h-4" />
                </a>
              </div>
            </div>
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
                  <a href="tel:+4930880013170" className="hover:text-white transition">
                    {t("contact.phone")}
                  </a>
                </li>
                <li className="text-white font-medium">{t("contact.company")}</li>
                <li>{t("contact.address")}</li>
                <li>
                  <a href="mailto:info@baskan.de" className="hover:text-white transition">
                    {t("contact.email")}
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="mt-10 pt-8 border-t border-white/10 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
          <p className="text-white/60 text-sm">
            © {year} BAŞKAN {t("footer.copyright")}
          </p>
          <p className="text-white/60 text-sm">
            {t("footer.designedBy")} <span className="text-white/80 font-medium">Ali Youssef</span>
          </p>
        </div>
      </div>
    </footer>
  );
}