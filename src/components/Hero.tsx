import React from "react";
import { Phone, MessageSquare, Compass, ShieldCheck, Sparkles, ArrowRight } from "lucide-react";
import { useLanguage } from "../context/LanguageContext";
import { TRANSLATIONS } from "../data/translations";
import heroImg from "../assets/images/hero_celestial_consultation_1791044183922.jpg";

interface HeroProps {
  onOpenBooking: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenBooking }) => {
  const { language } = useLanguage();
  const t = TRANSLATIONS[language].hero;

  const whatsAppMessage = encodeURIComponent(
    language === "fr"
      ? "Bonjour Professeur Kobbyier, je vous contacte pour solliciter une consultation spirituelle."
      : "Hello Prof. Kobbyier, I would like to request a spiritual consultation."
  );

  return (
    <section id="home" className="relative min-h-[90vh] flex items-center justify-center pt-20 sm:pt-24 pb-14 sm:pb-16 overflow-hidden bg-[#0c0b09] w-full max-w-full">
      {/* Background Photography with Scrim */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroImg}
          alt="African spiritual consultation sanctuary with celestial astrolabe and star charts"
          className="w-full h-full object-cover object-center scale-105 transform opacity-35 filter brightness-75 contrast-125"
          referrerPolicy="no-referrer"
        />
        {/* Measured multi-layer gradient scrim for supreme legibility */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#0e0d0b]/90 via-[#0e0d0b]/75 to-[#0e0d0b]" />
        <div className="absolute inset-0 bg-african-pattern opacity-60 pointer-events-none" />
      </div>

      <div className="relative z-10 w-full max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center flex flex-col items-center">
        {/* Sub-kicker & African Spiritual Heritage */}
        <div className="inline-flex items-center gap-2 px-3 py-1 mb-5 sm:mb-6 border border-[#d4af37]/35 rounded-full bg-[#171410]/85 backdrop-blur-sm text-[11px] sm:text-xs font-medium tracking-widest text-[#fcedb6] uppercase max-w-full truncate">
          <Sparkles className="w-3.5 h-3.5 text-[#d4af37] shrink-0" />
          <span className="truncate">{t.badge}</span>
        </div>

        {/* Display Name */}
        <h2 className="text-xs sm:text-sm md:text-base font-bold tracking-[0.2em] sm:tracking-[0.25em] text-[#d4af37] uppercase mb-2">
          {t.professorName}
        </h2>

        {/* Professional Titles */}
        <div className="flex flex-wrap items-center justify-center gap-x-2 sm:gap-x-3 gap-y-1 text-xs sm:text-sm font-semibold tracking-wider sm:tracking-widest uppercase text-[#e5ddcf] mb-4 sm:mb-5">
          <span>{t.titles}</span>
        </div>

        {/* Main Headline with responsive typography */}
        <h1
          className="text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-white mb-5 sm:mb-6 max-w-4xl font-display leading-[1.2]"
          style={{ textWrap: "balance" }}
        >
          {t.headline}
        </h1>

        {/* Supporting text */}
        <p className="text-sm sm:text-base md:text-lg lg:text-xl text-[#cdc4b4] max-w-2xl mx-auto mb-6 sm:mb-8 font-light leading-relaxed px-1">
          {t.supportingText}
        </p>

        {/* Main Tagline Banner */}
        <div className="w-full max-w-3xl mb-8 sm:mb-10 p-4 sm:p-5 rounded border border-[#d4af37]/30 bg-[#16130f]/85 backdrop-blur-sm text-center relative overflow-hidden">
          <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-[#d4af37] to-transparent" />
          <p className="text-xs sm:text-sm md:text-base font-medium italic text-[#fcedb6] tracking-wide leading-relaxed">
            {t.tagline}
          </p>
        </div>

        {/* Primary CTA Buttons with >=48px touch target */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-3.5 sm:gap-4 w-full sm:w-auto mb-8 sm:mb-10">
          <button
            onClick={onOpenBooking}
            className="w-full sm:w-auto px-7 py-3.5 min-h-[48px] text-xs sm:text-sm font-bold tracking-wider uppercase text-[#14120f] bg-[#d4af37] hover:bg-[#e6c65e] transition-all duration-200 rounded shadow-lg shadow-[#d4af37]/15 flex items-center justify-center gap-2 group active:scale-95"
          >
            <span>{t.bookBtn}</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </button>

          <a
            href={`https://wa.me/351920755945?text=${whatsAppMessage}`}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto px-7 py-3.5 min-h-[48px] text-xs sm:text-sm font-bold tracking-wider uppercase text-[#ede8df] border border-[#d4af37]/70 bg-[#181410]/85 hover:bg-[#252019] transition-all duration-200 rounded flex items-center justify-center gap-2 shadow-md active:scale-95"
          >
            <MessageSquare className="w-4 h-4 text-[#25D366]" />
            <span>{t.whatsAppBtn}</span>
          </a>
        </div>

        {/* Contact Information Bar */}
        <div className="w-full max-w-xl pt-5 sm:pt-6 border-t border-[#d4af37]/20 flex flex-col sm:flex-row items-center justify-around gap-3 sm:gap-4 text-xs sm:text-sm font-medium text-[#d9d1c3]">
          <a
            href="tel:920370153"
            className="flex items-center gap-2.5 hover:text-[#d4af37] transition-colors py-1.5 min-h-[44px] px-3 rounded hover:bg-[#181410] active:scale-95 group"
          >
            <div className="w-7 h-7 rounded-full bg-[#1e1a14] border border-[#d4af37]/40 flex items-center justify-center text-[#d4af37] group-hover:border-[#d4af37] shrink-0">
              <Phone className="w-3.5 h-3.5" />
            </div>
            <span>{t.telLabel} <strong className="text-white font-semibold">920 370 153</strong></span>
          </a>

          <div className="hidden sm:block text-[#d4af37]/40 select-none">|</div>

          <a
            href="https://wa.me/351920755945"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2.5 hover:text-[#d4af37] transition-colors py-1.5 min-h-[44px] px-3 rounded hover:bg-[#181410] active:scale-95 group"
          >
            <div className="w-7 h-7 rounded-full bg-[#1e1a14] border border-[#d4af37]/40 flex items-center justify-center text-[#25D366] group-hover:border-[#25D366] shrink-0">
              <MessageSquare className="w-3.5 h-3.5" />
            </div>
            <span>WhatsApp: <strong className="text-white font-semibold">920 755 945</strong></span>
          </a>
        </div>

        {/* Quiet Trust Bar */}
        <div className="mt-7 sm:mt-8 flex flex-wrap items-center justify-center gap-3 sm:gap-6 text-[11px] uppercase tracking-wider text-[#9f9687]">
          <span className="flex items-center gap-1.5">
            <ShieldCheck className="w-3.5 h-3.5 text-[#d4af37] shrink-0" />
            {t.confidentiality}
          </span>
          <span className="hidden sm:inline text-[#d4af37]/30">·</span>
          <span className="flex items-center gap-1.5">
            <Compass className="w-3.5 h-3.5 text-[#d4af37] shrink-0" />
            {t.remote}
          </span>
          <span className="hidden sm:inline text-[#d4af37]/30">·</span>
          <span className="flex items-center gap-1.5">
            <Sparkles className="w-3.5 h-3.5 text-[#d4af37] shrink-0" />
            {t.tradition}
          </span>
        </div>
      </div>
    </section>
  );
};
