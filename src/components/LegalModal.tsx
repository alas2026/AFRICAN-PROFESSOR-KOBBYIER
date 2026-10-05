import React, { useState } from "react";
import { X, ShieldAlert, Lock, Check } from "lucide-react";
import { useLanguage } from "../context/LanguageContext";
import { TRANSLATIONS } from "../data/translations";

interface LegalModalProps {
  isOpen: boolean;
  initialTab?: "disclaimer" | "privacy";
  onClose: () => void;
}

export const LegalModal: React.FC<LegalModalProps> = ({
  isOpen,
  initialTab = "disclaimer",
  onClose
}) => {
  const { language } = useLanguage();
  const t = TRANSLATIONS[language].legal;
  const [activeTab, setActiveTab] = useState<"disclaimer" | "privacy">(initialTab);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-black/85 backdrop-blur-sm animate-fade-in" role="dialog" aria-modal="true">
      <div className="relative w-full max-w-2xl bg-[#14120e] border border-[#d4af37]/40 rounded p-4 sm:p-6 md:p-8 shadow-2xl max-h-[88vh] overflow-y-auto">
        
        {/* Close Button with >=44px touch target */}
        <button
          onClick={onClose}
          className="absolute top-3 right-3 sm:top-4 sm:right-4 w-11 h-11 min-w-[44px] min-h-[44px] flex items-center justify-center text-[#9a8f7e] hover:text-white rounded bg-[#1a1713] border border-[#d4af37]/30 transition-colors"
          aria-label={t.closeBtn}
        >
          <X className="w-5 h-5 text-[#d4af37]" />
        </button>

        {/* Tab Controls with >=44px touch target */}
        <div className="flex items-center gap-2 sm:gap-3 border-b border-[#d4af37]/20 pb-3 sm:pb-4 mb-5 sm:mb-6 pr-12">
          <button
            onClick={() => setActiveTab("disclaimer")}
            className={`px-3 sm:px-4 py-2 min-h-[44px] text-xs font-bold uppercase tracking-wider rounded transition-colors flex items-center justify-center ${
              activeTab === "disclaimer"
                ? "bg-[#d4af37] text-[#12100d]"
                : "text-[#beb4a2] hover:text-white"
            }`}
          >
            {t.titleDisclaimer}
          </button>
          <button
            onClick={() => setActiveTab("privacy")}
            className={`px-3 sm:px-4 py-2 min-h-[44px] text-xs font-bold uppercase tracking-wider rounded transition-colors flex items-center justify-center ${
              activeTab === "privacy"
                ? "bg-[#d4af37] text-[#12100d]"
                : "text-[#beb4a2] hover:text-white"
            }`}
          >
            {t.titlePrivacy}
          </button>
        </div>

        {/* Tab 1: Disclaimer */}
        {activeTab === "disclaimer" && (
          <div className="space-y-4 text-xs sm:text-sm text-[#cdc4b4] leading-relaxed font-light">
            <div className="flex items-center gap-2 text-[#d4af37] font-semibold text-sm">
              <ShieldAlert className="w-5 h-5 shrink-0" />
              <span>{t.disclaimer.title}</span>
            </div>

            <p className="p-3.5 sm:p-4 rounded bg-[#1b1712] border border-[#d4af37]/25 italic text-white leading-relaxed">
              {t.disclaimer.quote}
            </p>

            <h4 className="text-white font-semibold pt-1">{t.disclaimer.scopeTitle}</h4>
            <p>{t.disclaimer.scopeDesc}</p>

            <h4 className="text-white font-semibold pt-1">{t.disclaimer.healthTitle}</h4>
            <p>{t.disclaimer.healthDesc}</p>

            <h4 className="text-white font-semibold pt-1">{t.disclaimer.legalTitle}</h4>
            <p>{t.disclaimer.legalDesc}</p>

            <h4 className="text-white font-semibold pt-1">{t.disclaimer.paymentTitle}</h4>
            <p>{t.disclaimer.paymentDesc}</p>
          </div>
        )}

        {/* Tab 2: Privacy */}
        {activeTab === "privacy" && (
          <div className="space-y-4 text-xs sm:text-sm text-[#cdc4b4] leading-relaxed font-light">
            <div className="flex items-center gap-2 text-[#d4af37] font-semibold text-sm">
              <Lock className="w-5 h-5 shrink-0" />
              <span>{t.privacy.title}</span>
            </div>

            <p>{t.privacy.intro}</p>

            <ul className="space-y-2.5">
              <li className="flex items-start gap-2">
                <Check className="w-4 h-4 text-[#d4af37] shrink-0 mt-0.5" />
                <span>
                  <strong>{t.privacy.p1Title} : </strong>{t.privacy.p1Desc}
                </span>
              </li>
              <li className="flex items-start gap-2">
                <Check className="w-4 h-4 text-[#d4af37] shrink-0 mt-0.5" />
                <span>
                  <strong>{t.privacy.p2Title} : </strong>{t.privacy.p2Desc}
                </span>
              </li>
              <li className="flex items-start gap-2">
                <Check className="w-4 h-4 text-[#d4af37] shrink-0 mt-0.5" />
                <span>
                  <strong>{t.privacy.p3Title} : </strong>{t.privacy.p3Desc}
                </span>
              </li>
              <li className="flex items-start gap-2">
                <Check className="w-4 h-4 text-[#d4af37] shrink-0 mt-0.5" />
                <span>
                  <strong>{t.privacy.p4Title} : </strong>{t.privacy.p4Desc}
                </span>
              </li>
            </ul>
          </div>
        )}

        <div className="mt-6 sm:mt-8 pt-4 border-t border-[#d4af37]/20 flex justify-end">
          <button
            onClick={onClose}
            className="w-full sm:w-auto px-6 py-2.5 min-h-[44px] text-xs font-bold uppercase tracking-wider text-[#12100d] bg-[#d4af37] hover:bg-[#e6c65e] rounded transition-all active:scale-95 flex items-center justify-center text-center"
          >
            {t.understandBtn}
          </button>
        </div>

      </div>
    </div>
  );
};
