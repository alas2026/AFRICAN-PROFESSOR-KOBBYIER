import React from "react";
import { Phone, MessageSquare } from "lucide-react";
import { useLanguage } from "../context/LanguageContext";
import { TRANSLATIONS } from "../data/translations";

interface FooterProps {
  onOpenLegalModal: (tab: "disclaimer" | "privacy") => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenLegalModal }) => {
  const { language } = useLanguage();
  const t = TRANSLATIONS[language].footer;
  const navT = TRANSLATIONS[language].nav;

  return (
    <footer className="bg-[#090807] border-t border-[#d4af37]/20 pt-16 pb-12 text-[#b0a592]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Footer Row */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-12 border-b border-[#d4af37]/15">
          
          {/* Brand Identity Column */}
          <div className="lg:col-span-5 space-y-4">
            <div>
              <span className="text-xs uppercase tracking-[0.25em] text-[#d4af37] font-semibold">
                {t.role}
              </span>
              <h2 className="text-xl sm:text-2xl font-bold font-display text-white tracking-wider mt-1">
                {language === "fr" ? "PROFESSEUR AFRICAIN KOBBYIER" : "AFRICAN PROFESSOR KOBBYIER"}
              </h2>
              <div className="text-xs font-semibold uppercase tracking-widest text-[#fcedb6] mt-1">
                {t.titles}
              </div>
            </div>

            <p className="text-xs sm:text-sm text-[#cdc4b4] italic font-light">
              {t.quote}
            </p>

            <p className="text-xs text-[#8c8272] max-w-sm leading-relaxed">
              {t.desc}
            </p>
          </div>

          {/* Quick Links Column */}
          <div className="lg:col-span-3 space-y-3">
            <h3 className="text-xs uppercase tracking-widest text-white font-semibold border-b border-[#d4af37]/20 pb-2">
              {t.navTitle}
            </h3>
            <ul className="space-y-2 text-xs">
              <li>
                <a href="#home" className="hover:text-[#d4af37] transition-colors">
                  {navT.home}
                </a>
              </li>
              <li>
                <a href="#about" className="hover:text-[#d4af37] transition-colors">
                  {navT.about}
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-[#d4af37] transition-colors">
                  {navT.services}
                </a>
              </li>
              <li>
                <a href="#how-it-works" className="hover:text-[#d4af37] transition-colors">
                  {navT.howItWorks}
                </a>
              </li>
              <li>
                <a href="#consultation" className="hover:text-[#d4af37] transition-colors">
                  {navT.consultation}
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:text-[#d4af37] transition-colors">
                  {navT.contact}
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Details Column */}
          <div className="lg:col-span-4 space-y-4">
            <h3 className="text-xs uppercase tracking-widest text-white font-semibold border-b border-[#d4af37]/20 pb-2">
              {t.contactTitle}
            </h3>
            
            <div className="space-y-3 text-xs">
              <a
                href="tel:920370153"
                className="flex items-center gap-2.5 text-[#e5ddcf] hover:text-[#d4af37] transition-colors"
              >
                <Phone className="w-4 h-4 text-[#d4af37]" />
                <span>{language === "fr" ? "Téléphone" : "Telephone"}: <strong className="text-white font-semibold">920 370 153</strong></span>
              </a>

              <a
                href="https://wa.me/351920755945"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2.5 text-[#e5ddcf] hover:text-[#25D366] transition-colors"
              >
                <MessageSquare className="w-4 h-4 text-[#25D366]" />
                <span>WhatsApp: <strong className="text-white font-semibold">920 755 945</strong></span>
              </a>
            </div>

            <div className="p-3 rounded bg-[#13110e] border border-[#d4af37]/20 text-[11px] text-[#9a8f7e] leading-relaxed">
              {t.worldwideNotice}
            </div>
          </div>

        </div>

        {/* Bottom Legal / Policy Bar */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-[#7e7465]">
          <div>
            © {new Date().getFullYear()} African Professor Kobbyier. {t.rights}
          </div>

          <div className="flex flex-wrap items-center gap-6">
            <button
              onClick={() => onOpenLegalModal("disclaimer")}
              className="hover:text-[#d4af37] transition-colors"
            >
              {t.disclaimer}
            </button>
            <span>·</span>
            <button
              onClick={() => onOpenLegalModal("privacy")}
              className="hover:text-[#d4af37] transition-colors"
            >
              {t.privacy}
            </button>
            <span>·</span>
            <a href="#contact" className="hover:text-[#d4af37] transition-colors">
              {navT.contact}
            </a>
          </div>
        </div>

      </div>
    </footer>
  );
};
