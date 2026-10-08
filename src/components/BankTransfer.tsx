import React, { useState } from "react";
import { Building2, Copy, Check, ShieldAlert, MessageSquare, ArrowDown, User, CreditCard } from "lucide-react";
import { useLanguage } from "../context/LanguageContext";
import { TRANSLATIONS } from "../data/translations";

export const BankTransfer: React.FC = () => {
  const { language } = useLanguage();
  const t = TRANSLATIONS[language].payment.bankTransfer;

  const [copied, setCopied] = useState(false);

  const rawIBAN = "PT50001000005777255000115";
  // Visual grouping: PT50 0010 0000 5777 2550 0011 5
  const formattedIBAN = "PT50 0010 0000 5777 2550 0011 5";

  const handleCopyIBAN = async () => {
    try {
      if (navigator.clipboard && navigator.clipboard.writeText) {
        await navigator.clipboard.writeText(rawIBAN);
      } else {
        // Fallback for environments where clipboard API might be restricted
        const textArea = document.createElement("textarea");
        textArea.value = rawIBAN;
        textArea.style.position = "fixed";
        textArea.style.opacity = "0";
        document.body.appendChild(textArea);
        textArea.focus();
        textArea.select();
        document.execCommand("copy");
        document.body.removeChild(textArea);
      }
      setCopied(true);
      setTimeout(() => setCopied(false), 3000);
    } catch {
      // Fallback
      setCopied(true);
      setTimeout(() => setCopied(false), 3000);
    }
  };

  const confirmWhatsAppUrl = `https://wa.me/351920755945?text=${encodeURIComponent(
    t.confirmWhatsAppMessage
  )}`;

  const scrollToContact = (e: React.MouseEvent) => {
    e.preventDefault();
    const contactElem = document.getElementById("contact");
    if (contactElem) {
      contactElem.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div id="payment-methods" className="w-full">
      <div className="bg-[#15120e] border border-[#d4af37]/35 rounded p-5 sm:p-7 md:p-9 shadow-xl relative overflow-hidden">
        {/* Subtle decorative gold top bar */}
        <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-[#d4af37] to-transparent" />

        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-6 sm:mb-8 space-y-2.5">
          <div className="inline-flex items-center justify-center w-11 h-11 rounded bg-[#201b15] border border-[#d4af37]/40 text-[#d4af37] mx-auto mb-1">
            <Building2 className="w-5 h-5" />
          </div>

          <h3 className="text-xl sm:text-2xl md:text-3xl font-bold font-display text-white tracking-tight">
            {t.title}
          </h3>

          <p className="text-xs sm:text-sm text-[#cdc4b4] leading-relaxed font-light">
            {t.intro}
          </p>
        </div>

        {/* Banking Details Card */}
        <div className="max-w-2xl mx-auto bg-[#1b1712] border border-[#d4af37]/25 rounded p-4 sm:p-6 space-y-4 sm:space-y-5">
          
          {/* Account Holder Row */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1.5 sm:gap-4 pb-3.5 border-b border-[#d4af37]/15">
            <div className="flex items-center gap-2 text-[#a89d8b] text-xs uppercase tracking-wider font-medium">
              <User className="w-4 h-4 text-[#d4af37] shrink-0" />
              <span>{t.accountHolderLabel}</span>
            </div>
            <div className="text-sm sm:text-base md:text-lg font-bold text-white tracking-wide font-display">
              {t.accountHolderValue}
            </div>
          </div>

          {/* IBAN Row */}
          <div className="space-y-2">
            <div className="flex items-center justify-between gap-2">
              <div className="flex items-center gap-2 text-[#a89d8b] text-xs uppercase tracking-wider font-medium">
                <CreditCard className="w-4 h-4 text-[#d4af37] shrink-0" />
                <span>{t.ibanLabel}</span>
              </div>

              {/* Status pill on success */}
              {copied && (
                <span className="inline-flex items-center gap-1 text-[11px] font-semibold text-[#6ee7b7] bg-[#064e3b]/50 px-2 py-0.5 rounded border border-[#10b981]/40 animate-fade-in">
                  <Check className="w-3 h-3 text-[#10b981]" />
                  <span>{t.copiedSuccess}</span>
                </span>
              )}
            </div>

            {/* IBAN Display Box + Copy Button */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-2.5 p-3 rounded bg-[#12100d] border border-[#d4af37]/30">
              <div className="flex-1 min-w-0">
                <div
                  className="font-mono text-xs sm:text-sm md:text-base font-bold text-[#fcedb6] tracking-wider select-all break-all sm:break-normal py-1"
                  title="Official IBAN"
                >
                  <span className="hidden sm:inline">{formattedIBAN}</span>
                  <span className="inline sm:hidden">{rawIBAN}</span>
                </div>
              </div>

              <button
                type="button"
                onClick={handleCopyIBAN}
                className={`px-4 py-2.5 min-h-[42px] text-xs font-bold uppercase tracking-wider rounded transition-all flex items-center justify-center gap-2 shrink-0 active:scale-95 ${
                  copied
                    ? "bg-[#10b981] text-black shadow-md shadow-[#10b981]/30"
                    : "bg-[#d4af37] hover:bg-[#e6c65e] text-[#14120f] shadow-md shadow-[#d4af37]/20"
                }`}
                aria-label={t.copyBtn}
              >
                {copied ? (
                  <>
                    <Check className="w-4 h-4 text-black" />
                    <span>{language === "fr" ? "Copié !" : "Copied!"}</span>
                  </>
                ) : (
                  <>
                    <Copy className="w-4 h-4 text-[#14120f]" />
                    <span>{t.copyBtn}</span>
                  </>
                )}
              </button>
            </div>
          </div>

          {/* Verification Notice */}
          <div className="pt-2 flex items-start gap-2.5 text-xs text-[#b8ad9b] bg-[#14110d] p-3 rounded border border-[#d4af37]/15">
            <ShieldAlert className="w-4 h-4 text-[#d4af37] shrink-0 mt-0.5" />
            <p className="leading-relaxed font-light">
              {t.verifyNotice}
            </p>
          </div>
        </div>

        {/* Payment Confirmation & Contact Action */}
        <div className="mt-6 sm:mt-7 text-center max-w-xl mx-auto space-y-3">
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
            <a
              href={confirmWhatsAppUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto px-6 py-3 min-h-[44px] text-xs sm:text-sm font-bold tracking-wider uppercase text-[#14120f] bg-[#d4af37] hover:bg-[#e6c65e] rounded transition-all active:scale-95 shadow-md shadow-[#d4af37]/15 flex items-center justify-center gap-2"
            >
              <MessageSquare className="w-4 h-4 text-[#14120f] shrink-0" />
              <span>{t.confirmBtn}</span>
            </a>

            <a
              href="#contact"
              onClick={scrollToContact}
              className="w-full sm:w-auto px-5 py-3 min-h-[44px] text-xs font-semibold tracking-wider uppercase text-[#d8cfc0] hover:text-white border border-[#d4af37]/40 hover:border-[#d4af37] hover:bg-[#d4af37]/10 rounded transition-all flex items-center justify-center gap-2 active:scale-95"
            >
              <span>{language === "fr" ? "Formulaire de Contact" : "Contact Form"}</span>
              <ArrowDown className="w-3.5 h-3.5 text-[#d4af37]" />
            </a>
          </div>

          <p className="text-[11px] text-[#9c917f] font-light leading-relaxed">
            {language === "fr"
              ? "Après avoir effectué votre virement, vous pouvez transmettre votre preuve de virement au Professeur Kobbyier pour confirmation."
              : "After completing your transfer, you can send your confirmation details directly to Prof. Kobbyier."}
          </p>
        </div>

      </div>
    </div>
  );
};
