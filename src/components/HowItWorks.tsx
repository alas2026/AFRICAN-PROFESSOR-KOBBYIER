import React from "react";
import { PhoneCall, ShieldCheck, Compass, MessageCircleHeart, Sparkles } from "lucide-react";
import { useLanguage } from "../context/LanguageContext";
import { TRANSLATIONS } from "../data/translations";

interface HowItWorksProps {
  onOpenBooking: () => void;
}

export const HowItWorks: React.FC<HowItWorksProps> = ({ onOpenBooking }) => {
  const { language } = useLanguage();
  const t = TRANSLATIONS[language].howItWorks;

  const stepIcons = [
    <PhoneCall key="1" className="w-5 h-5 text-[#d4af37]" />,
    <ShieldCheck key="2" className="w-5 h-5 text-[#d4af37]" />,
    <Compass key="3" className="w-5 h-5 text-[#d4af37]" />,
    <MessageCircleHeart key="4" className="w-5 h-5 text-[#d4af37]" />
  ];

  const whatsAppMsg = encodeURIComponent(
    language === "fr"
      ? "Bonjour Professeur Kobbyier, je souhaite entamer une démarche de consultation."
      : "Hello Prof. Kobbyier, I would like to begin a consultation."
  );

  return (
    <section id="how-it-works" className="py-16 sm:py-20 bg-[#12100d] relative border-t border-b border-[#d4af37]/20 w-full max-w-full">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.25em] text-[#d4af37] font-semibold mb-3">
            <Sparkles className="w-3.5 h-3.5 text-[#d4af37]" />
            <span>{t.kicker}</span>
          </div>
          <h2 className="text-2xl sm:text-4xl md:text-5xl font-bold font-display text-white tracking-tight mb-3 sm:mb-4">
            {t.title}
          </h2>
          <p className="text-[#beb4a2] text-xs sm:text-sm md:text-base font-light leading-relaxed">
            {t.desc}
          </p>
        </div>

        {/* 4 Steps Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 relative">
          {t.steps.map((item, idx) => (
            <div
              key={item.num}
              className="relative bg-[#171410] border border-[#d4af37]/25 rounded p-5 sm:p-6 flex flex-col justify-between hover:border-[#d4af37]/60 transition-all duration-300 group shadow-lg"
            >
              {/* Step indicator number */}
              <div className="flex items-center justify-between mb-4">
                <span className="text-2xl sm:text-3xl font-display font-bold text-[#d4af37]/40 group-hover:text-[#d4af37] transition-colors tabular-nums">
                  {item.num}
                </span>
                <div className="w-10 h-10 rounded bg-[#201b15] border border-[#d4af37]/30 flex items-center justify-center shrink-0">
                  {stepIcons[idx]}
                </div>
              </div>

              <div>
                <h3 className="text-base sm:text-lg font-bold font-display text-white group-hover:text-[#fcedb6] transition-colors mb-2">
                  {item.num}. {item.title}
                </h3>
                <p className="text-xs sm:text-sm text-[#b8ad9b] font-light leading-relaxed mb-5">
                  {item.desc}
                </p>
              </div>

              <div className="pt-3 border-t border-[#d4af37]/15">
                <span className="text-[11px] font-semibold uppercase tracking-wider text-[#d4af37]">
                  {item.action}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Trust Note & Direct Trigger */}
        <div className="mt-10 sm:mt-12 p-5 sm:p-6 rounded bg-[#16130f] border border-[#d4af37]/30 flex flex-col md:flex-row items-center justify-between gap-5 sm:gap-6">
          <div className="space-y-1 text-center md:text-left">
            <h4 className="text-sm sm:text-base font-semibold text-white">
              {t.trustQuestion}
            </h4>
            <p className="text-xs text-[#a99e8c] leading-relaxed">
              {t.trustSub}
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 shrink-0 w-full sm:w-auto">
            <button
              onClick={onOpenBooking}
              className="px-5 py-3 min-h-[48px] text-xs font-bold uppercase tracking-wider text-[#14120f] bg-[#d4af37] hover:bg-[#e6c65e] rounded transition-all active:scale-95 flex items-center justify-center text-center"
            >
              {t.bookBtn}
            </button>
            <a
              href={`https://wa.me/351920755945?text=${whatsAppMsg}`}
              target="_blank"
              rel="noopener noreferrer"
              className="px-5 py-3 min-h-[48px] text-xs font-bold uppercase tracking-wider text-[#ede8df] border border-[#d4af37]/60 hover:bg-[#201b15] rounded transition-all flex items-center justify-center text-center"
            >
              {t.whatsAppBtn}
            </a>
          </div>
        </div>

      </div>
    </section>
  );
};
