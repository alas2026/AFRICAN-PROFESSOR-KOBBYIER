import React from "react";
import { Globe2, MessageSquare, PhoneCall, ShieldCheck, ArrowRight } from "lucide-react";
import { useLanguage } from "../context/LanguageContext";
import { TRANSLATIONS } from "../data/translations";
import globalImg from "../assets/images/global_consultation_network_1791044210814.jpg";

interface LongDistanceProps {
  onOpenBooking: () => void;
}

export const LongDistance: React.FC<LongDistanceProps> = ({ onOpenBooking }) => {
  const { language } = useLanguage();
  const t = TRANSLATIONS[language].longDistance;

  const whatsAppMsg = encodeURIComponent(
    language === "fr"
      ? "Bonjour Professeur Kobbyier, je vous contacte pour une consultation spirituelle à distance."
      : "Hello Prof. Kobbyier, I am contacting you for a remote spiritual consultation."
  );

  return (
    <section className="py-16 sm:py-20 bg-[#0e0d0b] relative overflow-hidden w-full max-w-full">
      {/* Background World Graphic */}
      <div className="absolute inset-0 z-0 opacity-25">
        <img
          src={globalImg}
          alt="Global long-distance consultation network with celestial gold lines"
          className="w-full h-full object-cover object-center filter brightness-90"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0e0d0b] via-[#0e0d0b]/80 to-[#0e0d0b]" />
      </div>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        {/* Kicker */}
        <div className="inline-flex items-center gap-2 px-3 py-1 mb-4 rounded-full bg-[#181410] border border-[#d4af37]/30 text-xs font-semibold uppercase tracking-widest text-[#fcedb6]">
          <Globe2 className="w-3.5 h-3.5 text-[#d4af37] shrink-0" />
          <span>{t.kicker}</span>
        </div>

        {/* Title with responsive scaling */}
        <h2 className="text-2xl sm:text-4xl md:text-5xl font-bold font-display text-white tracking-tight mb-4 sm:mb-6">
          {t.title}
        </h2>

        {/* Narrative */}
        <p className="text-[#cdc4b4] text-sm sm:text-base md:text-lg max-w-2xl mx-auto mb-8 sm:mb-10 font-light leading-relaxed">
          {t.desc}
        </p>

        {/* Remote Feature Badges */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6 mb-10 sm:mb-12 text-left">
          <div className="p-4 sm:p-5 rounded bg-[#14120e]/90 border border-[#d4af37]/25 backdrop-blur-sm">
            <div className="flex items-center gap-3 mb-2 text-[#d4af37]">
              <PhoneCall className="w-5 h-5 shrink-0" />
              <h3 className="text-sm font-semibold text-white">{t.card1Title}</h3>
            </div>
            <p className="text-xs text-[#a99e8c] font-light leading-relaxed">
              {t.card1Desc}
            </p>
          </div>

          <div className="p-4 sm:p-5 rounded bg-[#14120e]/90 border border-[#d4af37]/25 backdrop-blur-sm">
            <div className="flex items-center gap-3 mb-2 text-[#25D366]">
              <MessageSquare className="w-5 h-5 shrink-0" />
              <h3 className="text-sm font-semibold text-white">{t.card2Title}</h3>
            </div>
            <p className="text-xs text-[#a99e8c] font-light leading-relaxed">
              {t.card2Desc}
            </p>
          </div>

          <div className="p-4 sm:p-5 rounded bg-[#14120e]/90 border border-[#d4af37]/25 backdrop-blur-sm">
            <div className="flex items-center gap-3 mb-2 text-[#d4af37]">
              <ShieldCheck className="w-5 h-5 shrink-0" />
              <h3 className="text-sm font-semibold text-white">{t.card3Title}</h3>
            </div>
            <p className="text-xs text-[#a99e8c] font-light leading-relaxed">
              {t.card3Desc}
            </p>
          </div>
        </div>

        {/* Large Prominent Action Buttons with >=48px touch targets */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-3.5 sm:gap-4 w-full">
          <button
            onClick={onOpenBooking}
            className="w-full sm:w-auto px-8 sm:px-10 py-3.5 sm:py-4 min-h-[48px] text-xs sm:text-sm font-bold tracking-widest uppercase text-[#14120f] bg-[#d4af37] hover:bg-[#e6c65e] rounded shadow-xl shadow-[#d4af37]/20 flex items-center justify-center gap-2.5 transition-all duration-200 active:scale-95"
          >
            <span>{t.startBtn}</span>
            <ArrowRight className="w-4 h-4" />
          </button>

          <a
            href={`https://wa.me/351920755945?text=${whatsAppMsg}`}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto px-7 py-3.5 sm:py-4 min-h-[48px] text-xs sm:text-sm font-bold tracking-wider uppercase text-white border border-[#d4af37]/60 hover:bg-[#1a1713] rounded flex items-center justify-center gap-2 transition-all active:scale-95"
          >
            <MessageSquare className="w-4 h-4 text-[#25D366]" />
            <span>{t.connectWhatsApp}</span>
          </a>
        </div>

      </div>
    </section>
  );
};
