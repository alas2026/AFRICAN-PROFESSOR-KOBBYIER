import React from "react";
import { Shield, Sparkles, UserCheck, Globe, Award } from "lucide-react";
import { useLanguage } from "../context/LanguageContext";
import { TRANSLATIONS } from "../data/translations";
import portraitImg from "../assets/images/african.jpg";

interface AboutProps {
  onOpenBooking: () => void;
}

export const About: React.FC<AboutProps> = ({ onOpenBooking }) => {
  const { language } = useLanguage();
  const t = TRANSLATIONS[language].about;

  const whatsAppInquireText = encodeURIComponent(
    language === "fr"
      ? "Bonjour Professeur Kobbyier, je souhaiterais des informations sur vos consultations."
      : "Hello Prof. Kobbyier, I would like to learn more about your consultations."
  );

  return (
    <section id="about" className="py-16 sm:py-20 bg-[#12100d] relative overflow-hidden border-t border-b border-[#d4af37]/20 w-full max-w-full">
      {/* Background Subtle Accent */}
      <div className="absolute inset-0 bg-african-pattern opacity-40 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center">
          
          {/* Portrait Column with Label */}
          <div className="lg:col-span-5 flex flex-col items-center">
            <div className="relative w-full max-w-xs sm:max-w-sm px-2 sm:px-0">
              {/* Outer decorative gold frame - adjusted to avoid horizontal overflow on 320px screens */}
              <div className="absolute -inset-1 sm:-inset-2 rounded border border-[#d4af37]/40 pointer-events-none" />
              <div className="absolute -inset-2 sm:-inset-4 rounded border border-[#d4af37]/15 pointer-events-none" />
              
              <div className="relative rounded overflow-hidden shadow-2xl bg-[#1a1713] aspect-[3/4]">
                <img
                  src={portraitImg}
                  alt="Professor Kobbyier - African Astrologer, Seer, and Spiritual Scientist"
                  className="w-full h-full object-cover object-center"
                  referrerPolicy="no-referrer"
                />
                
                {/* Fallback scrim and label badge */}
                <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-[#0e0d0b] via-[#0e0d0b]/85 to-transparent p-4 sm:p-5 text-center">
                  <div className="text-[11px] sm:text-xs uppercase tracking-widest text-[#d4af37] font-semibold mb-1">
                    {language === "fr" ? "Praticien Spirituel & Astrologue" : "Spiritual Practitioner & Astrologer"}
                  </div>
                  <h3 className="text-lg sm:text-xl font-bold font-display text-white tracking-wide">
                    {t.portraitLabel}
                  </h3>
                  <p className="text-xs text-[#c8bfaf] mt-0.5 sm:mt-1 font-light">
                    {t.portraitSub}
                  </p>
                </div>
              </div>
            </div>

            {/* Sub-caption guarantee of discretion */}
            <div className="mt-5 sm:mt-6 flex items-center justify-center gap-2 text-xs text-[#b8ad9b] text-center px-2">
              <Shield className="w-4 h-4 text-[#d4af37] shrink-0" />
              <span>{t.portraitCaption}</span>
            </div>
          </div>

          {/* Bio & Philosophy Column */}
          <div className="lg:col-span-7 space-y-5 sm:space-y-6">
            <div className="space-y-2">
              <div className="text-xs uppercase tracking-[0.25em] text-[#d4af37] font-semibold flex items-center gap-2">
                <Sparkles className="w-3.5 h-3.5 text-[#d4af37]" />
                <span>{t.kicker}</span>
              </div>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold font-display text-white tracking-tight leading-tight">
                {t.title}
              </h2>
              <div className="h-0.5 w-16 bg-[#d4af37]" />
            </div>

            <p className="text-[#d8cfc0] text-sm sm:text-base lg:text-lg font-light leading-relaxed">
              {t.p1}
            </p>

            <p className="text-[#beb4a2] text-xs sm:text-sm lg:text-base leading-relaxed">
              {t.p2}
            </p>

            {/* Core Pillars / Emphases */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 pt-2">
              <div className="p-3.5 rounded bg-[#181410] border border-[#d4af37]/25 flex items-start gap-3">
                <div className="p-2 rounded bg-[#231d16] text-[#d4af37] shrink-0">
                  <Shield className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="text-sm font-semibold text-white">{t.pillars.confidentialityTitle}</h4>
                  <p className="text-xs text-[#a99e8c] mt-0.5 leading-relaxed">{t.pillars.confidentialityDesc}</p>
                </div>
              </div>

              <div className="p-3.5 rounded bg-[#181410] border border-[#d4af37]/25 flex items-start gap-3">
                <div className="p-2 rounded bg-[#231d16] text-[#d4af37] shrink-0">
                  <UserCheck className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="text-sm font-semibold text-white">{t.pillars.attentionTitle}</h4>
                  <p className="text-xs text-[#a99e8c] mt-0.5 leading-relaxed">{t.pillars.attentionDesc}</p>
                </div>
              </div>

              <div className="p-3.5 rounded bg-[#181410] border border-[#d4af37]/25 flex items-start gap-3">
                <div className="p-2 rounded bg-[#231d16] text-[#d4af37] shrink-0">
                  <Award className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="text-sm font-semibold text-white">{t.pillars.respectTitle}</h4>
                  <p className="text-xs text-[#a99e8c] mt-0.5 leading-relaxed">{t.pillars.respectDesc}</p>
                </div>
              </div>

              <div className="p-3.5 rounded bg-[#181410] border border-[#d4af37]/25 flex items-start gap-3">
                <div className="p-2 rounded bg-[#231d16] text-[#d4af37] shrink-0">
                  <Globe className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="text-sm font-semibold text-white">{t.pillars.remoteTitle}</h4>
                  <p className="text-xs text-[#a99e8c] mt-0.5 leading-relaxed">{t.pillars.remoteDesc}</p>
                </div>
              </div>
            </div>

            {/* Action Row with min 44px touch targets */}
            <div className="pt-3 sm:pt-4 flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5 sm:gap-4">
              <button
                onClick={onOpenBooking}
                className="px-6 py-3.5 min-h-[48px] text-xs sm:text-sm font-bold tracking-wider uppercase text-[#14120f] bg-[#d4af37] hover:bg-[#e6c65e] rounded transition-all duration-200 active:scale-95 flex items-center justify-center text-center"
              >
                {t.scheduleBtn}
              </button>

              <a
                href={`https://wa.me/351920755945?text=${whatsAppInquireText}`}
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs sm:text-sm font-medium text-[#d4af37] hover:text-[#fcedb6] underline underline-offset-4 transition-colors min-h-[44px] flex items-center justify-center sm:justify-start"
              >
                {t.whatsAppInquire}
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
