import React from "react";
import { Lock, HeartHandshake, BookOpenCheck, Eye, Globe2, Award, Sparkles } from "lucide-react";
import { useLanguage } from "../context/LanguageContext";
import { TRANSLATIONS } from "../data/translations";

export const WhyChoose: React.FC = () => {
  const { language } = useLanguage();
  const t = TRANSLATIONS[language].whyChoose;

  const icons = [
    <Lock key="lock" className="w-5 h-5 sm:w-6 sm:h-6 text-[#d4af37]" />,
    <HeartHandshake key="heart" className="w-5 h-5 sm:w-6 sm:h-6 text-[#d4af37]" />,
    <BookOpenCheck key="book" className="w-5 h-5 sm:w-6 sm:h-6 text-[#d4af37]" />,
    <Eye key="eye" className="w-5 h-5 sm:w-6 sm:h-6 text-[#d4af37]" />,
    <Globe2 key="globe" className="w-5 h-5 sm:w-6 sm:h-6 text-[#d4af37]" />,
    <Award key="award" className="w-5 h-5 sm:w-6 sm:h-6 text-[#d4af37]" />
  ];

  return (
    <section className="py-16 sm:py-20 bg-[#12100d] relative border-t border-b border-[#d4af37]/20 w-full max-w-full">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-10 sm:mb-16">
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

        {/* 6 Feature Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {t.items.map((item, idx) => (
            <div
              key={item.title}
              className="bg-[#171410] border border-[#d4af37]/25 rounded p-5 sm:p-7 hover:border-[#d4af37]/60 transition-all duration-300 group shadow-md hover:shadow-xl"
            >
              <div className="w-11 h-11 sm:w-12 sm:h-12 rounded bg-[#221c15] border border-[#d4af37]/35 flex items-center justify-center mb-4 sm:mb-5 group-hover:scale-110 transition-transform shrink-0">
                {icons[idx]}
              </div>

              <h3 className="text-base sm:text-lg font-bold font-display text-white group-hover:text-[#fcedb6] transition-colors mb-2">
                {item.title}
              </h3>

              <p className="text-xs sm:text-sm text-[#b8ad9b] font-light leading-relaxed">
                {item.desc}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
