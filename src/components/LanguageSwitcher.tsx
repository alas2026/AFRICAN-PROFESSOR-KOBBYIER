import React from "react";
import { useLanguage } from "../context/LanguageContext";
import { Globe } from "lucide-react";

interface LanguageSwitcherProps {
  className?: string;
}

export const LanguageSwitcher: React.FC<LanguageSwitcherProps> = ({
  className = ""
}) => {
  const { language, setLanguage } = useLanguage();

  return (
    <div
      className={`inline-flex items-center gap-1 p-0.5 sm:p-1 rounded bg-[#171410] border border-[#d4af37]/35 text-xs ${className}`}
      role="group"
      aria-label="Language selection"
    >
      <Globe className="w-3.5 h-3.5 text-[#d4af37] shrink-0 ml-1 hidden xs:block" />
      <button
        type="button"
        onClick={() => setLanguage("en")}
        aria-pressed={language === "en"}
        className={`px-2 py-1 min-h-[36px] sm:min-h-[30px] font-bold uppercase tracking-wider rounded transition-all duration-150 flex items-center justify-center ${
          language === "en"
            ? "bg-[#d4af37] text-[#12100d] shadow-xs"
            : "text-[#b8ad9b] hover:text-white"
        }`}
      >
        EN
      </button>
      <span className="text-[#d4af37]/40 text-[10px] select-none">|</span>
      <button
        type="button"
        onClick={() => setLanguage("fr")}
        aria-pressed={language === "fr"}
        className={`px-2 py-1 min-h-[36px] sm:min-h-[30px] font-bold uppercase tracking-wider rounded transition-all duration-150 flex items-center justify-center ${
          language === "fr"
            ? "bg-[#d4af37] text-[#12100d] shadow-xs"
            : "text-[#b8ad9b] hover:text-white"
        }`}
      >
        FR
      </button>
    </div>
  );
};
