import React, { useState } from "react";
import { CONSULTATION_SERVICES, ConsultationService } from "../data/servicesData";
import { useLanguage } from "../context/LanguageContext";
import { TRANSLATIONS } from "../data/translations";
import { ArrowRight, Check, X, ShieldAlert, Sparkles, MessageSquare } from "lucide-react";

interface ServicesProps {
  onSelectServiceForBooking: (serviceTitle: string) => void;
}

export const Services: React.FC<ServicesProps> = ({ onSelectServiceForBooking }) => {
  const { language } = useLanguage();
  const t = TRANSLATIONS[language].services;

  const [selectedService, setSelectedService] = useState<ConsultationService | null>(null);
  const [activeFilter, setActiveFilter] = useState<string>("all");

  const categories = [
    { id: "all", label: t.filters.all },
    { id: "personal", label: t.filters.personal },
    { id: "vocation", label: t.filters.vocation },
    { id: "spiritual", label: t.filters.spiritual },
    { id: "protection", label: t.filters.protection }
  ];

  const filteredServices = CONSULTATION_SERVICES.filter((svc) => {
    if (activeFilter === "all") return true;
    if (activeFilter === "personal") {
      return svc.id === "love-relationships" || svc.id === "relationship-reconciliation" || svc.id === "personal-problems";
    }
    if (activeFilter === "vocation") {
      return svc.id === "business-career" || svc.id === "legal-judicial" || svc.id === "misfortune-difficulties";
    }
    if (activeFilter === "spiritual") {
      return svc.id === "astrology-destiny" || svc.id === "spiritual-guidance" || svc.id === "clairvoyance-future";
    }
    if (activeFilter === "protection") {
      return svc.id === "evil-eye-envy" || svc.id === "traditional-spiritual" || svc.id === "long-distance";
    }
    return true;
  });

  return (
    <section id="services" className="py-20 bg-[#0e0d0b] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.25em] text-[#d4af37] font-semibold mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            <span>{t.kicker}</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold font-display text-white tracking-tight mb-4">
            {t.title}
          </h2>
          <p className="text-[#c1b7a6] text-base font-light leading-relaxed">
            {t.intro}
          </p>

          {/* Ethical Notice on Health */}
          <div className="mt-4 p-3 rounded bg-[#181410] border border-[#d4af37]/20 inline-flex items-center gap-2 text-xs text-[#b0a592] text-left">
            <ShieldAlert className="w-4 h-4 text-[#d4af37] shrink-0" />
            <span>
              <strong className="text-white">{t.healthNoticeTitle}</strong> {t.healthNoticeText}
            </span>
          </div>
        </div>

        {/* Filter Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-10">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveFilter(cat.id)}
              className={`px-4 py-2 text-xs font-semibold tracking-wider uppercase rounded transition-all duration-200 ${
                activeFilter === cat.id
                  ? "bg-[#d4af37] text-[#12100d] shadow-md shadow-[#d4af37]/20"
                  : "bg-[#16130f] text-[#c1b7a6] hover:text-white border border-[#d4af37]/20 hover:border-[#d4af37]/40"
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Services Grid (12 Items) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredServices.map((service) => (
            <div
              key={service.id}
              className="group bg-[#15120e] hover:bg-[#1a1612] border border-[#d4af37]/20 hover:border-[#d4af37]/60 rounded p-6 flex flex-col justify-between transition-all duration-300 shadow-md hover:shadow-xl relative overflow-hidden"
            >
              {/* Subtle gold corner accent on hover */}
              <div className="absolute top-0 right-0 w-12 h-12 bg-gradient-to-bl from-[#d4af37]/15 to-transparent pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity" />

              <div>
                {/* Header Icon + Category */}
                <div className="flex items-center justify-between mb-4">
                  <span className="text-2xl p-2.5 rounded bg-[#201b15] border border-[#d4af37]/25 shadow-inner">
                    {service.icon}
                  </span>
                  <span className="text-[11px] font-medium tracking-wider uppercase text-[#d4af37]/80">
                    {service.category[language]}
                  </span>
                </div>

                {/* Service Title */}
                <h3 className="text-lg font-bold font-display text-white group-hover:text-[#fcedb6] transition-colors mb-2">
                  {service.title[language]}
                </h3>

                {/* Short Description */}
                <p className="text-xs sm:text-sm text-[#beb4a2] font-light leading-relaxed mb-4">
                  {service.shortDescription[language]}
                </p>
              </div>

              {/* Action Buttons */}
              <div className="pt-4 border-t border-[#d4af37]/15 flex items-center justify-between">
                <button
                  onClick={() => setSelectedService(service)}
                  className="text-xs font-semibold text-[#d4af37] hover:text-[#fcedb6] flex items-center gap-1 transition-colors"
                >
                  <span>{t.learnDetails}</span>
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
                </button>

                <button
                  onClick={() => onSelectServiceForBooking(service.title[language])}
                  className="px-3 py-1.5 text-[11px] font-bold uppercase tracking-wider text-[#14120f] bg-[#d4af37] hover:bg-[#e6c65e] rounded transition-all active:scale-95"
                >
                  {t.consultBtn}
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Global Bottom Banner for Direct Contact */}
        <div className="mt-12 text-center">
          <p className="text-xs text-[#a39987] mb-3">
            {t.specificConcern}
          </p>
          <a
            href="https://wa.me/351920755945?text=Hello%20Prof.%20Kobbyier%2C%20I%20have%20a%20private%20inquiry%20regarding%20consultations."
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#d4af37] hover:text-[#fcedb6] transition-colors"
          >
            <MessageSquare className="w-4 h-4 text-[#25D366]" />
            <span>{t.directInquiry}</span>
          </a>
        </div>

      </div>

      {/* Service Details Modal */}
      {selectedService && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-fade-in">
          <div className="relative w-full max-w-lg bg-[#14120e] border border-[#d4af37]/50 rounded p-6 sm:p-8 shadow-2xl overflow-hidden max-h-[90vh] overflow-y-auto">
            {/* Close Button */}
            <button
              onClick={() => setSelectedService(null)}
              className="absolute top-4 right-4 p-1.5 text-[#b0a592] hover:text-white rounded hover:bg-[#201b15] transition-colors"
              aria-label="Close details"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Modal Content */}
            <div className="flex items-center gap-3 mb-4">
              <span className="text-3xl p-2 rounded bg-[#201b15] border border-[#d4af37]/30">
                {selectedService.icon}
              </span>
              <div>
                <span className="text-[11px] font-semibold uppercase tracking-widest text-[#d4af37]">
                  {selectedService.category[language]}
                </span>
                <h3 className="text-xl sm:text-2xl font-bold font-display text-white">
                  {selectedService.title[language]}
                </h3>
              </div>
            </div>

            <p className="text-sm text-[#d6cdbd] leading-relaxed mb-6 font-light">
              {selectedService.detailedDescription[language]}
            </p>

            <div className="mb-6">
              <h4 className="text-xs uppercase tracking-wider font-semibold text-[#fcedb6] mb-3">
                {t.modalSituations}
              </h4>
              <ul className="space-y-2">
                {selectedService.clientConcerns[language].map((concern, idx) => (
                  <li key={idx} className="flex items-start gap-2 text-xs text-[#b8ad9b]">
                    <Check className="w-4 h-4 text-[#d4af37] shrink-0 mt-0.5" />
                    <span>{concern}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="pt-4 border-t border-[#d4af37]/20 flex flex-col sm:flex-row gap-3">
              <button
                onClick={() => {
                  const title = selectedService.title[language];
                  setSelectedService(null);
                  onSelectServiceForBooking(title);
                }}
                className="flex-1 py-3 text-xs font-bold uppercase tracking-wider text-[#14120f] bg-[#d4af37] hover:bg-[#e6c65e] rounded transition-all active:scale-95 text-center"
              >
                {t.modalBookArea}
              </button>

              <a
                href={`https://wa.me/351920755945?text=${encodeURIComponent(
                  language === "fr"
                    ? `Bonjour Professeur Kobbyier, je souhaite vous consulter au sujet de : ${selectedService.title.fr}.`
                    : `Hello Prof. Kobbyier, I would like to consult you regarding ${selectedService.title.en}.`
                )}`}
                target="_blank"
                rel="noopener noreferrer"
                className="py-3 px-4 text-xs font-bold uppercase tracking-wider text-white border border-[#d4af37]/60 hover:bg-[#201b15] rounded transition-all flex items-center justify-center gap-1.5"
              >
                <MessageSquare className="w-3.5 h-3.5 text-[#25D366]" />
                <span>{t.modalWhatsApp}</span>
              </a>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
