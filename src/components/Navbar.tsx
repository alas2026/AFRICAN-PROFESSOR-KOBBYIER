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
            : "bg-[#0e0d0b]/85 backdrop-blur-sm border-b border-[#d4af37]/15 py-3 sm:py-4"
        }`}
      >
        <div className="max-w-7xl mx-auto px-3.5 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between gap-2">
            
            {/* Zone 1: Single text element wordmark */}
            <a
              href="#"
              className="text-sm sm:text-base md:text-lg lg:text-xl font-bold tracking-wider font-display text-[#fcedb6] hover:text-[#d4af37] transition-colors truncate max-w-[200px] sm:max-w-none shrink"
            >
              {t.brand}
            </a>

            {/* Zone 2: Navigation Links (Strictly Desktop: 1024px and above) */}
            <nav className="hidden lg:flex items-center gap-5 xl:gap-7 text-xs tracking-widest font-semibold uppercase text-[#d6cdbd]">
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

            {/* Zone 3: Primary Actions (Strictly Desktop: 1024px and above) */}
            <div className="hidden lg:flex items-center gap-3 shrink-0">
              <LanguageSwitcher />

              <a
                href="https://wa.me/351920755945?text=Hello%20Prof.%20Kobbyier%2C%20I%20would%20like%20to%20request%20a%20spiritual%20consultation."
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 px-3.5 py-2 text-xs font-semibold text-[#1e1b15] bg-[#d4af37] hover:bg-[#e2c159] transition-all rounded shadow-sm hover:shadow-md whitespace-nowrap active:scale-95 min-h-[38px]"
              >
                <MessageSquare className="w-3.5 h-3.5" />
                <span>{t.whatsAppNow}</span>
              </a>

              <button
                onClick={onOpenBooking}
                className="px-3.5 py-2 text-xs font-semibold uppercase tracking-wider text-[#ede8df] border border-[#d4af37]/60 hover:bg-[#d4af37]/10 transition-colors rounded whitespace-nowrap min-h-[38px]"
              >
                {t.book}
              </button>
            </div>

            {/* Mobile / Tablet Controls (Strictly Below 1024px: phones & tablets) */}
            <div className="flex lg:hidden items-center gap-1.5 sm:gap-2 shrink-0">
              {/* Language Switcher */}
              <LanguageSwitcher />

              {/* Mobile WhatsApp direct trigger with >=44px touch target */}
              <a
                href="https://wa.me/351920755945"
                target="_blank"
                rel="noopener noreferrer"
                className="w-11 h-11 min-w-[44px] min-h-[44px] flex items-center justify-center text-[#1e1b15] bg-[#d4af37] hover:bg-[#e2c159] rounded transition-all active:scale-95 shadow-sm"
                aria-label="WhatsApp Prof. Kobbyier"
              >
                <MessageSquare className="w-4 h-4" />
              </a>

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
          {/* Backdrop with quick tap-to-close */}
          <div
            className="fixed inset-0 bg-black/85 backdrop-blur-sm transition-opacity"
            onClick={closeMenu}
            aria-hidden="true"
          />

          {/* Slide-in drawer container with finger-friendly spacing */}
          <div className="fixed top-0 right-0 bottom-0 w-full sm:w-80 max-w-[85vw] bg-[#12100d] border-l border-[#d4af37]/35 p-5 sm:p-6 flex flex-col justify-between shadow-2xl overflow-y-auto">
            
            <div className="space-y-5">
              {/* Drawer Top Row: Title & Distinct Close Button */}
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

              {/* Navigation Links with large comfortable touch targets */}
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

            {/* Bottom Contact Actions in Drawer */}
            <div className="space-y-3 pt-6 border-t border-[#d4af37]/20 mt-4">
              <a
                href="tel:920370153"
                className="flex items-center justify-center gap-2 w-full py-3 px-4 text-xs font-semibold text-[#f5ebd7] border border-[#d4af37]/50 hover:bg-[#1a1713] rounded min-h-[44px] transition-colors active:scale-95"
              >
                <Phone className="w-4 h-4 text-[#d4af37]" />
                <span>920 370 153</span>
              </a>

              <a
                href="https://wa.me/351920755945?text=Hello%20Prof.%20Kobbyier%2C%20I%20would%20like%20to%20request%20a%20spiritual%20consultation."
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 w-full py-3 px-4 text-xs font-bold text-[#14120f] bg-[#d4af37] hover:bg-[#e2c159] rounded min-h-[44px] transition-all active:scale-95 shadow-md"
              >
                <MessageSquare className="w-4 h-4" />
                <span>WhatsApp: 920 755 945</span>
              </a>
            </div>

          </div>
        </div>
      )}
    </>
  );
};
