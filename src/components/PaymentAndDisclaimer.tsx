import React from "react";
import { CreditCard, AlertCircle, MessageSquare } from "lucide-react";
import { useLanguage } from "../context/LanguageContext";
import { TRANSLATIONS } from "../data/translations";

interface PaymentAndDisclaimerProps {
  onOpenBooking: () => void;
  onOpenLegalModal: (tab: "disclaimer" | "privacy") => void;
}

export const PaymentAndDisclaimer: React.FC<PaymentAndDisclaimerProps> = ({
  onOpenBooking,
  onOpenLegalModal
}) => {
  const { language } = useLanguage();
  const t = TRANSLATIONS[language].payment;

  const whatsAppInquireText = encodeURIComponent(
    language === "fr"
      ? "Bonjour Professeur Kobbyier, je souhaiterais des précisions concernant les modalités de consultation et de règlement."
      : "Hello Prof. Kobbyier, I would like to inquire about consultation terms and arrangements."
  );

  return (
    <section id="consultation" className="py-16 sm:py-20 bg-[#0e0d0b] relative w-full max-w-full">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10 sm:space-y-12">
        
        {/* Payment & Consultation Arrangements */}
        <div className="bg-[#15120e] border border-[#d4af37]/35 rounded p-5 sm:p-8 md:p-10 shadow-xl relative overflow-hidden">
          <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-[#d4af37] to-transparent" />
          
          <div className="max-w-3xl mx-auto text-center space-y-5 sm:space-y-6">
            <div className="inline-flex items-center justify-center w-12 h-12 rounded bg-[#201b15] border border-[#d4af37]/40 text-[#d4af37] mx-auto mb-1">
              <CreditCard className="w-6 h-6" />
            </div>

            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold font-display text-white tracking-tight">
              {t.title}
            </h2>

            {/* Supplied Business Wording */}
            <div className="p-4 sm:p-5 rounded bg-[#1b1712] border border-[#d4af37]/25 text-left sm:text-center">
              <p className="text-xs sm:text-sm md:text-base text-[#e5ddcf] leading-relaxed font-light">
                {t.suppliedText}
              </p>
            </div>

            <p className="text-xs sm:text-sm text-[#a89d8b] max-w-xl mx-auto font-light leading-relaxed">
              {t.clarifyText}
            </p>

            <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-3.5 sm:gap-4 w-full">
              <button
                onClick={onOpenBooking}
                className="w-full sm:w-auto px-8 py-3.5 min-h-[48px] text-xs sm:text-sm font-bold tracking-wider uppercase text-[#14120f] bg-[#d4af37] hover:bg-[#e6c65e] rounded transition-all active:scale-95 shadow-md shadow-[#d4af37]/15 flex items-center justify-center"
              >
                {t.contactBtn}
              </button>

              <a
                href={`https://wa.me/351920755945?text=${whatsAppInquireText}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto px-6 py-3.5 min-h-[48px] text-xs sm:text-sm font-bold tracking-wider uppercase text-white border border-[#d4af37]/60 hover:bg-[#201b15] rounded transition-all flex items-center justify-center gap-2 active:scale-95"
              >
                <MessageSquare className="w-4 h-4 text-[#25D366]" />
                <span>{t.inquireWhatsApp}</span>
              </a>
            </div>
          </div>
        </div>

        {/* Client Disclaimer Card */}
        <div className="bg-[#12100d] border border-[#d4af37]/20 rounded p-5 sm:p-8">
          <div className="flex items-start gap-3.5 sm:gap-4">
            <div className="p-2 rounded bg-[#201b15] text-[#d4af37] shrink-0 mt-0.5">
              <AlertCircle className="w-5 h-5" />
            </div>
            <div className="space-y-3">
              <h3 className="text-xs uppercase tracking-widest font-bold text-[#d4af37]">
                {t.disclaimerHeader}
              </h3>
              
              <blockquote className="text-xs sm:text-sm text-[#c8bfaf] leading-relaxed italic border-l-2 border-[#d4af37]/40 pl-3">
                {t.disclaimerQuote}
              </blockquote>

              <div className="pt-2 flex flex-wrap items-center gap-3 sm:gap-4 text-xs text-[#9f9482]">
                <button
                  onClick={() => onOpenLegalModal("disclaimer")}
                  className="hover:text-[#d4af37] underline transition-colors min-h-[44px] inline-flex items-center"
                >
                  {t.viewDisclaimer}
                </button>
                <span className="select-none">·</span>
                <button
                  onClick={() => onOpenLegalModal("privacy")}
                  className="hover:text-[#d4af37] underline transition-colors min-h-[44px] inline-flex items-center"
                >
                  {t.viewPrivacy}
                </button>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
