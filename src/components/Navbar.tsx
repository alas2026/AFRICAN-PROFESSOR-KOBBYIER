import React, { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { useLanguage } from "../context/LanguageContext";
import { TRANSLATIONS } from "../data/translations";
import { LanguageSwitcher } from "./LanguageSwitcher";

interface NavbarProps {
  onOpenBooking?: () => void;
}

export const Navbar: React.FC<NavbarProps> = () => {
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

  // Prevent background scroll when mobile drawer is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  const closeMenu = () => setIsOpen(false);

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 w-full ${
          isScrolled
            ? "bg-[#0e0d0b]/95 backdrop-blur-md border-b border-[#d4af37]/25 shadow-lg shadow-black/40 py-2.5 sm:py-3"
            : "bg-[#0e0d0b]/85 backdrop-blur-sm border-b border-[#d4af37]/15 py-3.5 sm:py-4"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between gap-4">
            
            {/* Brand Logo / Wordmark */}
            <a
              href="#"
              className="text-base sm:text-lg lg:text-xl font-bold tracking-wider font-display text-[#fcedb6] hover:text-[#d4af37] transition-colors whitespace-nowrap shrink-0"
            >
              {t.brand}
            </a>

            {/* Desktop Navigation Links (Visible on lg: 1024px and above) */}
            <nav className="hidden lg:flex items-center gap-6 xl:gap-8 text-xs tracking-widest font-semibold uppercase text-[#d6cdbd]">
              <a
                href="#home"
                className="hover:text-[#d4af37] transition-colors py-1 relative after:absolute after:bottom-0 after:left-0 after:w-0 hover:after:w-full after:h-0.5 after:bg-[#d4af37] after:transition-all whitespace-nowrap shrink-0"
              >
                {t.home}
              </a>
              <a
                href="#about"
                className="hover:text-[#d4af37] transition-colors py-1 relative after:absolute after:bottom-0 after:left-0 after:w-0 hover:after:w-full after:h-0.5 after:bg-[#d4af37] after:transition-all whitespace-nowrap shrink-0"
              >
                {t.about}
              </a>
              <a
                href="#services"
                className="hover:text-[#d4af37] transition-colors py-1 relative after:absolute after:bottom-0 after:left-0 after:w-0 hover:after:w-full after:h-0.5 after:bg-[#d4af37] after:transition-all whitespace-nowrap shrink-0"
              >
                {t.services}
              </a>
              <a
                href="#how-it-works"
                className="hover:text-[#d4af37] transition-colors py-1 relative after:absolute after:bottom-0 after:left-0 after:w-0 hover:after:w-full after:h-0.5 after:bg-[#d4af37] after:transition-all whitespace-nowrap shrink-0"
              >
                {t.howItWorks}
              </a>
              <a
                href="#consultation"
                className="hover:text-[#d4af37] transition-colors py-1 relative after:absolute after:bottom-0 after:left-0 after:w-0 hover:after:w-full after:h-0.5 after:bg-[#d4af37] after:transition-all whitespace-nowrap shrink-0"
              >
                {t.consultation}
              </a>
              <a
                href="#contact"
                className="hover:text-[#d4af37] transition-colors py-1 relative after:absolute after:bottom-0 after:left-0 after:w-0 hover:after:w-full after:h-0.5 after:bg-[#d4af37] after:transition-all whitespace-nowrap shrink-0"
              >
                {t.contact}
              </a>
            </nav>

            {/* Desktop Language Switcher (Only EN / FR) */}
            <div className="hidden lg:flex items-center shrink-0">
              <LanguageSwitcher />
            </div>

            {/* Mobile / Tablet Controls (Below 1024px) */}
            <div className="flex lg:hidden items-center gap-2 shrink-0">
              <LanguageSwitcher />

              {/* Hamburger Button with >=44px touch target */}
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="w-11 h-11 min-w-[44px] min-h-[44px] flex items-center justify-center text-[#ede8df] hover:text-[#d4af37] rounded border border-[#d4af37]/30 hover:border-[#d4af37]/60 bg-[#16130f] transition-colors focus:outline-none focus:ring-1 focus:ring-[#d4af37]/50 active:scale-95"
                aria-label={isOpen ? "Close Navigation Menu" : "Open Navigation Menu"}
                aria-expanded={isOpen}
              >
                {isOpen ? <X className="w-5 h-5 text-[#d4af37]" /> : <Menu className="w-5 h-5" />}
              </button>
            </div>

          </div>
        </div>
      </header>

      {/* Mobile Drawer (Below 1024px) */}
      {isOpen && (
        <div className="fixed inset-0 z-50 lg:hidden" role="dialog" aria-modal="true">
          {/* Backdrop with tap-to-close */}
          <div
            className="fixed inset-0 bg-black/85 backdrop-blur-sm transition-opacity"
            onClick={closeMenu}
            aria-hidden="true"
          />

          {/* Slide-in drawer container */}
          <div className="fixed top-0 right-0 bottom-0 w-full sm:w-80 max-w-[85vw] bg-[#12100d] border-l border-[#d4af37]/35 p-5 sm:p-6 flex flex-col justify-between shadow-2xl overflow-y-auto">
            
            <div className="space-y-5">
              {/* Drawer Top Row: Title & Close Button */}
              <div className="flex items-center justify-between border-b border-[#d4af37]/20 pb-3 pt-1">
                <span className="text-xs uppercase tracking-widest font-bold text-[#d4af37]">
                  {language === "fr" ? "Menu Principal" : "Main Menu"}
                </span>

                <button
                  onClick={closeMenu}
                  className="w-11 h-11 min-w-[44px] min-h-[44px] flex items-center justify-center text-[#cdc4b4] hover:text-white rounded border border-[#d4af37]/25 hover:border-[#d4af37]/60 bg-[#1a1713] transition-colors"
                  aria-label="Close menu"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Language Selector row inside drawer */}
              <div className="flex items-center justify-between py-2 px-1 rounded bg-[#171410] border border-[#d4af37]/20">
                <span className="text-xs uppercase tracking-wider text-[#b8ad9b] font-medium pl-2">
                  {language === "fr" ? "Langue" : "Language"}
                </span>
                <LanguageSwitcher />
              </div>

              {/* All Navigation Links on Mobile */}
              <nav className="flex flex-col space-y-1 pt-2">
                <a
                  href="#home"
                  onClick={closeMenu}
                  className="text-[#ede8df] hover:text-[#d4af37] hover:bg-[#1a1713] transition-colors py-3 px-3 rounded text-base font-medium min-h-[44px] flex items-center"
                >
                  {t.home}
                </a>
                <a
                  href="#about"
                  onClick={closeMenu}
                  className="text-[#ede8df] hover:text-[#d4af37] hover:bg-[#1a1713] transition-colors py-3 px-3 rounded text-base font-medium min-h-[44px] flex items-center"
                >
                  {t.about}
                </a>
                <a
                  href="#services"
                  onClick={closeMenu}
                  className="text-[#ede8df] hover:text-[#d4af37] hover:bg-[#1a1713] transition-colors py-3 px-3 rounded text-base font-medium min-h-[44px] flex items-center"
                >
                  {t.services}
                </a>
                <a
                  href="#how-it-works"
                  onClick={closeMenu}
                  className="text-[#ede8df] hover:text-[#d4af37] hover:bg-[#1a1713] transition-colors py-3 px-3 rounded text-base font-medium min-h-[44px] flex items-center"
                >
                  {t.howItWorks}
                </a>
                <a
                  href="#consultation"
                  onClick={closeMenu}
                  className="text-[#ede8df] hover:text-[#d4af37] hover:bg-[#1a1713] transition-colors py-3 px-3 rounded text-base font-medium min-h-[44px] flex items-center"
                >
                  {t.consultation}
                </a>
                <a
                  href="#contact"
                  onClick={closeMenu}
                  className="text-[#ede8df] hover:text-[#d4af37] hover:bg-[#1a1713] transition-colors py-3 px-3 rounded text-base font-medium min-h-[44px] flex items-center"
                >
                  {t.contact}
                </a>
              </nav>
            </div>

            {/* Bottom brand note */}
            <div className="pt-6 border-t border-[#d4af37]/20 text-center">
              <span className="text-[11px] uppercase tracking-widest text-[#a89d8b]">
                {t.brand}
              </span>
            </div>

          </div>
        </div>
      )}
    </>
  );
};
