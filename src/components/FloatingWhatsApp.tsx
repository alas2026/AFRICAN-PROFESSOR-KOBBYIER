import React, { useState } from "react";
import { MessageSquare, X } from "lucide-react";
import { useLanguage } from "../context/LanguageContext";

export const FloatingWhatsApp: React.FC = () => {
  const [showTooltip, setShowTooltip] = useState(false);
  const { language } = useLanguage();

  const whatsAppText = encodeURIComponent(
    language === "fr"
      ? "Bonjour Professeur Kobbyier, je vous contacte pour solliciter une consultation spirituelle."
      : "Hello Prof. Kobbyier, I would like to request a spiritual consultation."
  );

  return (
    <aside aria-label="WhatsApp quick contact" className="fixed bottom-4 right-4 sm:bottom-6 sm:right-6 z-40 flex items-center gap-3 pointer-events-auto">
      {/* Optional gentle callout on desktop */}
      {showTooltip && (
        <div className="hidden sm:flex items-center gap-2 px-3 py-2 rounded bg-[#171410] border border-[#d4af37]/40 shadow-xl text-xs text-[#ede8df] animate-fade-in">
          <span>
            {language === "fr"
              ? "Besoin d'un éclairage spirituel ? Écrivez directement sur WhatsApp"
              : "Need spiritual guidance? Chat directly on WhatsApp"}
          </span>
          <button
            onClick={() => setShowTooltip(false)}
            className="text-[#9e9381] hover:text-white p-1 min-w-[28px] min-h-[28px] flex items-center justify-center"
            aria-label="Dismiss message"
          >
            <X className="w-3.5 h-3.5" />
          </button>
        </div>
      )}

      {/* Floating Button with finger-friendly >=48px touch target */}
      <a
        href={`https://wa.me/351920755945?text=${whatsAppText}`}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={
          language === "fr"
            ? "Contacter directement le Professeur Kobbyier sur WhatsApp"
            : "Chat directly with African Professor Kobbyier on WhatsApp"
        }
        className="w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-[#25D366] hover:bg-[#20ba59] text-white flex items-center justify-center shadow-2xl shadow-black/70 transition-transform hover:scale-105 active:scale-95 group relative"
      >
        <MessageSquare className="w-6 h-6 sm:w-7 sm:h-7 fill-white/20" />
        
        {/* Subtle pulsating gold indicator */}
        <span className="absolute top-0 right-0 flex h-3.5 w-3.5">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#d4af37] opacity-75"></span>
          <span className="relative inline-flex rounded-full h-3.5 w-3.5 bg-[#d4af37]"></span>
        </span>
      </a>
    </aside>
  );
};
