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
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-sm animate-fade-in">
      <div className="relative w-full max-w-2xl bg-[#14120e] border border-[#d4af37]/40 rounded p-6 sm:p-8 shadow-2xl max-h-[85vh] overflow-y-auto">
        
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 text-[#9a8f7e] hover:text-white rounded hover:bg-[#201b15] transition-colors"
          aria-label={t.closeBtn}
        >
          <X className="w-5 h-5" />
        </button>

        {/* Tab Controls */}
        <div className="flex items-center gap-3 border-b border-[#d4af37]/20 pb-4 mb-6">
          <button
            onClick={() => setActiveTab("disclaimer")}
            className={`px-4 py-2 text-xs font-bold uppercase tracking-wider rounded transition-colors ${
              activeTab === "disclaimer"
                ? "bg-[#d4af37] text-[#12100d]"
                : "text-[#beb4a2] hover:text-white"
            }`}
          >
            {t.titleDisclaimer}
          </button>
          <button
            onClick={() => setActiveTab("privacy")}
            className={`px-4 py-2 text-xs font-bold uppercase tracking-wider rounded transition-colors ${
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
              <ShieldAlert className="w-5 h-5" />
              <span>{t.disclaimer.title}</span>
            </div>

            <p className="p-4 rounded bg-[#1b1712] border border-[#d4af37]/25 italic text-white">
              {t.disclaimer.quote}
            </p>

            <h4 className="text-white font-semibold pt-2">{t.disclaimer.scopeTitle}</h4>
            <p>{t.disclaimer.scopeDesc}</p>

            <h4 className="text-white font-semibold pt-2">{t.disclaimer.healthTitle}</h4>
            <p>{t.disclaimer.healthDesc}</p>

            <h4 className="text-white font-semibold pt-2">{t.disclaimer.legalTitle}</h4>
            <p>{t.disclaimer.legalDesc}</p>

            <h4 className="text-white font-semibold pt-2">{t.disclaimer.paymentTitle}</h4>
            <p>{t.disclaimer.paymentDesc}</p>
          </div>
        )}

        {/* Tab 2: Privacy */}
        {activeTab === "privacy" && (
          <div className="space-y-4 text-xs sm:text-sm text-[#cdc4b4] leading-relaxed font-light">
            <div className="flex items-center gap-2 text-[#d4af37] font-semibold text-sm">
              <Lock className="w-5 h-5" />
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

        <div className="mt-8 pt-4 border-t border-[#d4af37]/20 flex justify-end">
          <button
            onClick={onClose}
            className="px-6 py-2.5 text-xs font-bold uppercase tracking-wider text-[#12100d] bg-[#d4af37] hover:bg-[#e6c65e] rounded transition-all active:scale-95"
          >
            {t.understandBtn}
          </button>
        </div>

      </div>
    </div>
  );
};
