import React, { useState, useEffect } from "react";
import { Menu, X, Phone, MessageSquare } from "lucide-react";
import { useLanguage } from "../context/LanguageContext";
import { TRANSLATIONS } from "../data/translations";
import { LanguageSwitcher } from "./LanguageSwitcher";

interface NavbarProps {
  onOpenBooking: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenBooking }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const { language } = useLanguage();
  const t = TRANSLATIONS[language].nav;

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const closeMenu = () => setIsOpen(false);

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? "bg-[#0e0d0b]/95 backdrop-blur-md border-b border-[#d4af37]/25 shadow-lg shadow-black/40 py-3"
            : "bg-[#0e0d0b]/80 backdrop-blur-sm border-b border-[#d4af37]/15 py-4"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {/* Zone 1: Single text element wordmark */}
            <a
              href="#"
              className="text-base sm:text-lg md:text-xl font-bold tracking-wider font-display text-[#fcedb6] hover:text-[#d4af37] transition-colors whitespace-nowrap"
            >
              {t.brand}
            </a>

            {/* Zone 2: Navigation Links */}
            <nav className="hidden lg:flex items-center gap-6 xl:gap-7 text-xs tracking-widest font-semibold uppercase text-[#d6cdbd]">
              <a
                href="#home"
                className="hover:text-[#d4af37] transition-colors py-1 relative after:absolute after:bottom-0 after:left-0 after:w-0 hover:after:w-full after:h-0.5 after:bg-[#d4af37] after:transition-all"
              >
                {t.home}
              </a>
              <a
                href="#about"
                className="hover:text-[#d4af37] transition-colors py-1 relative after:absolute after:bottom-0 after:left-0 after:w-0 hover:after:w-full after:h-0.5 after:bg-[#d4af37] after:transition-all"
              >
                {t.about}
              </a>
              <a
                href="#services"
                className="hover:text-[#d4af37] transition-colors py-1 relative after:absolute after:bottom-0 after:left-0 after:w-0 hover:after:w-full after:h-0.5 after:bg-[#d4af37] after:transition-all"
              >
                {t.services}
              </a>
              <a
                href="#how-it-works"
                className="hover:text-[#d4af37] transition-colors py-1 relative after:absolute after:bottom-0 after:left-0 after:w-0 hover:after:w-full after:h-0.5 after:bg-[#d4af37] after:transition-all"
              >
                {t.howItWorks}
              </a>
              <a
                href="#consultation"
                className="hover:text-[#d4af37] transition-colors py-1 relative after:absolute after:bottom-0 after:left-0 after:w-0 hover:after:w-full after:h-0.5 after:bg-[#d4af37] after:transition-all"
              >
                {t.consultation}
              </a>
              <a
                href="#contact"
                className="hover:text-[#d4af37] transition-colors py-1 relative after:absolute after:bottom-0 after:left-0 after:w-0 hover:after:w-full after:h-0.5 after:bg-[#d4af37] after:transition-all"
              >
                {t.contact}
              </a>
            </nav>

            {/* Zone 3: Primary Actions + Language Switcher */}
            <div className="hidden sm:flex items-center gap-3">
              {/* Language Switcher */}
              <LanguageSwitcher />

              <a
                href="https://wa.me/351920755945?text=Hello%20Prof.%20Kobbyier%2C%20I%20would%20like%20to%20request%20a%20spiritual%20consultation."
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold text-[#1e1b15] bg-[#d4af37] hover:bg-[#e2c159] transition-all rounded shadow-sm hover:shadow-md whitespace-nowrap active:scale-95"
              >
                <MessageSquare className="w-3.5 h-3.5" />
                <span>{t.whatsAppNow}</span>
              </a>
              <button
                onClick={onOpenBooking}
                className="px-3.5 py-1.5 text-xs font-semibold uppercase tracking-wider text-[#ede8df] border border-[#d4af37]/60 hover:bg-[#d4af37]/10 transition-colors rounded whitespace-nowrap"
              >
                {t.book}
              </button>
            </div>

            {/* Mobile Actions: Language toggle + WhatsApp + Drawer trigger */}
            <div className="flex sm:hidden items-center gap-2">
              <LanguageSwitcher />
              <a
                href="https://wa.me/351920755945"
                target="_blank"
                rel="noopener noreferrer"
                className="p-1.5 text-[#1e1b15] bg-[#d4af37] rounded"
                aria-label="WhatsApp Prof. Kobbyier"
              >
                <MessageSquare className="w-4 h-4" />
              </a>
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="p-2 text-[#ede8df] hover:text-[#d4af37] transition-colors focus:outline-none"
                aria-label="Toggle Navigation Menu"
              >
                {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Drawer */}
      {isOpen && (
        <div className="fixed inset-0 z-40 lg:hidden">
          <div
            className="fixed inset-0 bg-black/80 backdrop-blur-sm transition-opacity"
            onClick={closeMenu}
          />
          <div className="fixed top-14 right-0 bottom-0 w-3/4 max-w-xs bg-[#12100d] border-l border-[#d4af37]/30 p-6 flex flex-col justify-between shadow-2xl overflow-y-auto">
            <div className="space-y-6 pt-4">
              <div className="flex items-center justify-between border-b border-[#d4af37]/20 pb-3">
                <span className="text-xs uppercase tracking-widest text-[#d4af37]">
                  {language === "fr" ? "Langue" : "Language"}
                </span>
                <LanguageSwitcher />
              </div>

              <div className="text-xs uppercase tracking-widest text-[#d4af37] border-b border-[#d4af37]/20 pb-2">
                {language === "fr" ? "Navigation" : "Navigation"}
              </div>
              <nav className="flex flex-col space-y-4 text-sm font-medium">
                <a
                  href="#home"
                  onClick={closeMenu}
                  className="text-[#ede8df] hover:text-[#d4af37] transition-colors py-1"
                >
                  {t.home}
                </a>
                <a
                  href="#about"
                  onClick={closeMenu}
                  className="text-[#ede8df] hover:text-[#d4af37] transition-colors py-1"
                >
                  {t.about}
                </a>
                <a
                  href="#services"
                  onClick={closeMenu}
                  className="text-[#ede8df] hover:text-[#d4af37] transition-colors py-1"
                >
                  {t.services}
                </a>
                <a
                  href="#how-it-works"
                  onClick={closeMenu}
                  className="text-[#ede8df] hover:text-[#d4af37] transition-colors py-1"
                >
                  {t.howItWorks}
                </a>
                <a
                  href="#consultation"
                  onClick={closeMenu}
                  className="text-[#ede8df] hover:text-[#d4af37] transition-colors py-1"
                >
                  {t.consultation}
                </a>
                <a
                  href="#contact"
                  onClick={closeMenu}
                  className="text-[#ede8df] hover:text-[#d4af37] transition-colors py-1"
                >
                  {t.contact}
                </a>
              </nav>
            </div>

            <div className="space-y-3 pt-6 border-t border-[#d4af37]/20">
              <a
                href="tel:920370153"
                className="flex items-center justify-center gap-2 w-full py-2.5 px-4 text-xs font-semibold text-[#f5ebd7] border border-[#d4af37]/50 rounded"
              >
                <Phone className="w-3.5 h-3.5 text-[#d4af37]" />
                <span>920 370 153</span>
              </a>
              <a
                href="https://wa.me/351920755945?text=Hello%20Prof.%20Kobbyier%2C%20I%20would%20like%20to%20request%20a%20spiritual%20consultation."
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 w-full py-2.5 px-4 text-xs font-bold text-[#14120f] bg-[#d4af37] hover:bg-[#e2c159] rounded"
              >
                <MessageSquare className="w-3.5 h-3.5" />
                <span>WhatsApp: 920 755 945</span>
              </a>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
