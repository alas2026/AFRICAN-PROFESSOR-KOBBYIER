import React, { useState, useEffect } from "react";
import { Phone, MessageSquare, Send, CheckCircle2, Shield, Clock } from "lucide-react";
import { CONSULTATION_SERVICES } from "../data/servicesData";
import { useLanguage } from "../context/LanguageContext";
import { TRANSLATIONS } from "../data/translations";

interface ContactSectionProps {
  preselectedService?: string;
  onClearPreselectedService?: () => void;
}

export const ContactSection: React.FC<ContactSectionProps> = ({
  preselectedService,
  onClearPreselectedService
}) => {
  const { language } = useLanguage();
  const t = TRANSLATIONS[language].contact;

  const [formData, setFormData] = useState({
    fullName: "",
    phoneNumber: "",
    country: "",
    contactMethod: "WhatsApp",
    serviceArea: preselectedService || (language === "fr" ? "Amour & Sentiments" : "Love & Relationships"),
    preferredTime: language === "fr" ? "Matin (09h00 - 12h00)" : "Morning (09:00 - 12:00)",
    concernDescription: ""
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});

  useEffect(() => {
    if (preselectedService) {
      setFormData((prev) => ({ ...prev, serviceArea: preselectedService }));
    }
  }, [preselectedService]);

  const validate = () => {
    const newErrors: Record<string, string> = {};
    if (!formData.fullName.trim()) {
      newErrors.fullName = t.validation.name;
    }
    if (!formData.phoneNumber.trim() || formData.phoneNumber.length < 6) {
      newErrors.phoneNumber = t.validation.phone;
    }
    if (!formData.country.trim()) {
      newErrors.country = t.validation.country;
    }
    if (!formData.concernDescription.trim() || formData.concernDescription.length < 10) {
      newErrors.concernDescription = t.validation.concern;
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
    }, 600);
  };

  const generateWhatsAppMessage = () => {
    const text = language === "fr"
      ? `Bonjour Professeur Kobbyier,
Je souhaite solliciter une consultation spirituelle :
- Nom : ${formData.fullName}
- Téléphone/WhatsApp : ${formData.phoneNumber}
- Pays/Ville : ${formData.country}
- Domaine : ${formData.serviceArea}
- Créneau souhaité : ${formData.preferredTime}
- Moyen de contact : ${formData.contactMethod}
- Exposé de ma situation : ${formData.concernDescription}`
      : `Hello Professor Kobbyier,
I would like to book a spiritual consultation:
- Name: ${formData.fullName}
- Phone/WhatsApp: ${formData.phoneNumber}
- Country: ${formData.country}
- Area: ${formData.serviceArea}
- Preferred Time: ${formData.preferredTime}
- Preferred Method: ${formData.contactMethod}
- Details: ${formData.concernDescription}`;
    return encodeURIComponent(text);
  };

  return (
    <section id="contact" className="py-20 bg-[#12100d] relative border-t border-[#d4af37]/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="text-xs uppercase tracking-[0.25em] text-[#d4af37] font-semibold mb-3">
            {t.kicker}
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold font-display text-white tracking-tight mb-4">
            {t.title}
          </h2>
          <p className="text-[#beb4a2] text-sm sm:text-base font-light leading-relaxed">
            {t.subtitle}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Column: Direct Phone & WhatsApp Access Cards */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Primary Action Buttons */}
            <div className="bg-[#171410] border border-[#d4af37]/30 rounded p-6 sm:p-8 space-y-6">
              <h3 className="text-base sm:text-lg font-bold font-display text-white border-b border-[#d4af37]/20 pb-3">
                {t.immediateTitle}
              </h3>

              {/* Telephone Card */}
              <div className="p-4 rounded bg-[#1f1a14] border border-[#d4af37]/20 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded bg-[#2a231b] border border-[#d4af37]/40 flex items-center justify-center text-[#d4af37] shrink-0">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-[11px] uppercase tracking-wider text-[#a89d8b]">{t.directTel}</span>
                    <div className="text-lg font-bold text-white font-mono tabular-nums">920 370 153</div>
                  </div>
                </div>

                <a
                  href="tel:920370153"
                  className="px-4 py-2 text-xs font-bold uppercase tracking-wider text-[#14120f] bg-[#d4af37] hover:bg-[#e6c65e] rounded transition-all active:scale-95 text-center whitespace-nowrap"
                >
                  {t.callNow}
                </a>
              </div>

              {/* WhatsApp Card */}
              <div className="p-4 rounded bg-[#1f1a14] border border-[#d4af37]/20 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded bg-[#182a1c] border border-[#25D366]/40 flex items-center justify-center text-[#25D366] shrink-0">
                    <MessageSquare className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-[11px] uppercase tracking-wider text-[#a89d8b]">{t.whatsAppLabel}</span>
                    <div className="text-lg font-bold text-white font-mono tabular-nums">920 755 945</div>
                  </div>
                </div>

                <a
                  href="https://wa.me/351920755945?text=Hello%20Prof.%20Kobbyier%2C%20I%20would%20like%20to%20request%20a%20spiritual%20consultation."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2 text-xs font-bold uppercase tracking-wider text-white bg-[#1f7a3f] hover:bg-[#25D366] rounded transition-all active:scale-95 text-center whitespace-nowrap"
                >
                  {t.chatWhatsApp}
                </a>
              </div>

              {/* Quick Jump to Booking Form */}
              <a
                href="#consultation-form"
                className="block text-center w-full py-3 text-xs font-bold uppercase tracking-wider text-[#fcedb6] border border-[#d4af37]/50 hover:bg-[#d4af37]/10 rounded transition-all"
              >
                {t.bookConsultation}
              </a>
            </div>

            {/* Privacy & Discretion Card */}
            <div className="p-5 rounded bg-[#16130f] border border-[#d4af37]/25 flex items-start gap-3">
              <Shield className="w-5 h-5 text-[#d4af37] shrink-0 mt-0.5" />
              <div className="space-y-1 text-xs text-[#b8ad9b] leading-relaxed">
                <strong className="text-white font-semibold">{t.privacyCardTitle}</strong>
                <p>{t.privacyCardDesc}</p>
              </div>
            </div>

            {/* Hours & International Clients */}
            <div className="p-5 rounded bg-[#16130f] border border-[#d4af37]/25 space-y-2 text-xs text-[#b8ad9b]">
              <div className="flex items-center gap-2 text-white font-semibold">
                <Clock className="w-4 h-4 text-[#d4af37]" />
                <span>{t.availabilityTitle}</span>
              </div>
              <p>{t.availabilityDesc}</p>
            </div>

          </div>

          {/* Right Column: Interactive Consultation Booking Form */}
          <div id="consultation-form" className="lg:col-span-7 bg-[#171410] border border-[#d4af37]/35 rounded p-6 sm:p-8 shadow-2xl relative">
            <h3 className="text-xl font-bold font-display text-white mb-2">
              {t.formTitle}
            </h3>
            <p className="text-xs text-[#a99e8c] mb-6">
              {t.formDesc}
            </p>

            {isSubmitted ? (
              <div className="py-8 text-center space-y-5 animate-fade-in">
                <div className="w-16 h-16 rounded-full bg-[#1b2b1d] border border-[#25D366] text-[#25D366] flex items-center justify-center mx-auto">
                  <CheckCircle2 className="w-8 h-8" />
                </div>
                <div className="space-y-2">
                  <h4 className="text-xl font-bold font-display text-white">
                    {t.successTitle}
                  </h4>
                  <p className="text-xs sm:text-sm text-[#cdc4b4] max-w-md mx-auto leading-relaxed">
                    {language === "fr" ? (
                      <>Merci, <strong className="text-white">{formData.fullName}</strong>. Votre demande pour <em>{formData.serviceArea}</em> a été enregistrée.</>
                    ) : (
                      <>Thank you, <strong className="text-white">{formData.fullName}</strong>. Your consultation request for <em>{formData.serviceArea}</em> has been registered.</>
                    )}
                  </p>
                </div>

                <div className="p-4 rounded bg-[#1f1a14] border border-[#d4af37]/30 text-xs text-[#b8ad9b] max-w-md mx-auto text-left space-y-1">
                  <div><strong>{t.methodLabel}:</strong> {formData.contactMethod} ({formData.phoneNumber})</div>
                  <div><strong>{t.timeLabel}:</strong> {formData.preferredTime}</div>
                  <div><strong>{t.countryLabel.replace(" *", "")}:</strong> {formData.country}</div>
                </div>

                <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-3">
                  <a
                    href={`https://wa.me/351920755945?text=${generateWhatsAppMessage()}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full sm:w-auto px-6 py-3 text-xs font-bold uppercase tracking-wider text-white bg-[#1f7a3f] hover:bg-[#25D366] rounded transition-all flex items-center justify-center gap-2"
                  >
                    <MessageSquare className="w-4 h-4" />
                    <span>{t.directWhatsAppBtn}</span>
                  </a>

                  <button
                    onClick={() => {
                      setIsSubmitted(false);
                      setFormData({
                        fullName: "",
                        phoneNumber: "",
                        country: "",
                        contactMethod: "WhatsApp",
                        serviceArea: language === "fr" ? "Amour & Sentiments" : "Love & Relationships",
                        preferredTime: language === "fr" ? "Matin (09h00 - 12h00)" : "Morning (09:00 - 12:00)",
                        concernDescription: ""
                      });
                      if (onClearPreselectedService) onClearPreselectedService();
                    }}
                    className="w-full sm:w-auto px-5 py-3 text-xs font-medium uppercase tracking-wider text-[#cdc4b4] border border-[#d4af37]/40 hover:bg-[#201b15] rounded transition-all"
                  >
                    {t.submitAnother}
                  </button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                
                {/* Full Name & Phone Number */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs uppercase tracking-wider font-semibold text-[#fcedb6] mb-1.5">
                      {t.nameLabel}
                    </label>
                    <input
                      type="text"
                      placeholder={t.namePlaceholder}
                      value={formData.fullName}
                      onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                      className="w-full px-3.5 py-2.5 text-sm bg-[#12100d] border border-[#d4af37]/30 focus:border-[#d4af37] focus:outline-none rounded text-white placeholder-[#686053]"
                    />
                    {errors.fullName && (
                      <p className="text-xs text-red-400 mt-1">{errors.fullName}</p>
                    )}
                  </div>

                  <div>
                    <label className="block text-xs uppercase tracking-wider font-semibold text-[#fcedb6] mb-1.5">
                      {t.phoneLabel}
                    </label>
                    <input
                      type="tel"
                      placeholder={t.phonePlaceholder}
                      value={formData.phoneNumber}
                      onChange={(e) => setFormData({ ...formData, phoneNumber: e.target.value })}
                      className="w-full px-3.5 py-2.5 text-sm bg-[#12100d] border border-[#d4af37]/30 focus:border-[#d4af37] focus:outline-none rounded text-white placeholder-[#686053]"
                    />
                    {errors.phoneNumber && (
                      <p className="text-xs text-red-400 mt-1">{errors.phoneNumber}</p>
                    )}
                  </div>
                </div>

                {/* Country & Preferred Contact Method */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs uppercase tracking-wider font-semibold text-[#fcedb6] mb-1.5">
                      {t.countryLabel}
                    </label>
                    <input
                      type="text"
                      placeholder={t.countryPlaceholder}
                      value={formData.country}
                      onChange={(e) => setFormData({ ...formData, country: e.target.value })}
                      className="w-full px-3.5 py-2.5 text-sm bg-[#12100d] border border-[#d4af37]/30 focus:border-[#d4af37] focus:outline-none rounded text-white placeholder-[#686053]"
                    />
                    {errors.country && (
                      <p className="text-xs text-red-400 mt-1">{errors.country}</p>
                    )}
                  </div>

                  <div>
                    <label className="block text-xs uppercase tracking-wider font-semibold text-[#fcedb6] mb-1.5">
                      {t.methodLabel}
                    </label>
                    <select
                      value={formData.contactMethod}
                      onChange={(e) => setFormData({ ...formData, contactMethod: e.target.value })}
                      className="w-full px-3.5 py-2.5 text-sm bg-[#12100d] border border-[#d4af37]/30 focus:border-[#d4af37] focus:outline-none rounded text-white"
                    >
                      <option value="WhatsApp">{t.methodWhatsApp}</option>
                      <option value="Direct Phone Call">{t.methodPhone}</option>
                    </select>
                  </div>
                </div>

                {/* Consultation Area & Preferred Time */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs uppercase tracking-wider font-semibold text-[#fcedb6] mb-1.5">
                      {t.areaLabel}
                    </label>
                    <select
                      value={formData.serviceArea}
                      onChange={(e) => setFormData({ ...formData, serviceArea: e.target.value })}
                      className="w-full px-3.5 py-2.5 text-sm bg-[#12100d] border border-[#d4af37]/30 focus:border-[#d4af37] focus:outline-none rounded text-white"
                    >
                      {CONSULTATION_SERVICES.map((s) => (
                        <option key={s.id} value={s.title[language]}>
                          {s.title[language]}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs uppercase tracking-wider font-semibold text-[#fcedb6] mb-1.5">
                      {t.timeLabel}
                    </label>
                    <select
                      value={formData.preferredTime}
                      onChange={(e) => setFormData({ ...formData, preferredTime: e.target.value })}
                      className="w-full px-3.5 py-2.5 text-sm bg-[#12100d] border border-[#d4af37]/30 focus:border-[#d4af37] focus:outline-none rounded text-white"
                    >
                      <option value={t.timeMorning}>{t.timeMorning}</option>
                      <option value={t.timeAfternoon}>{t.timeAfternoon}</option>
                      <option value={t.timeEvening}>{t.timeEvening}</option>
                      <option value={t.timeUrgent}>{t.timeUrgent}</option>
                    </select>
                  </div>
                </div>

                {/* Description of Concern */}
                <div>
                  <label className="block text-xs uppercase tracking-wider font-semibold text-[#fcedb6] mb-1.5">
                    {t.concernLabel}
                  </label>
                  <textarea
                    rows={4}
                    placeholder={t.concernPlaceholder}
                    value={formData.concernDescription}
                    onChange={(e) => setFormData({ ...formData, concernDescription: e.target.value })}
                    className="w-full px-3.5 py-2.5 text-sm bg-[#12100d] border border-[#d4af37]/30 focus:border-[#d4af37] focus:outline-none rounded text-white placeholder-[#686053]"
                  />
                  {errors.concernDescription && (
                    <p className="text-xs text-red-400 mt-1">{errors.concernDescription}</p>
                  )}
                </div>

                {/* Privacy check notice */}
                <div className="p-3 rounded bg-[#12100d] border border-[#d4af37]/20 flex items-start gap-2.5 text-xs text-[#a99e8c]">
                  <Shield className="w-4 h-4 text-[#d4af37] shrink-0 mt-0.5" />
                  <span>{t.notice}</span>
                </div>

                {/* Submit button */}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-3.5 text-xs sm:text-sm font-bold uppercase tracking-wider text-[#14120f] bg-[#d4af37] hover:bg-[#e6c65e] rounded transition-all duration-200 flex items-center justify-center gap-2 active:scale-95 disabled:opacity-50"
                >
                  {isSubmitting ? (
                    <span>{t.submittingBtn}</span>
                  ) : (
                    <>
                      <span>{t.submitBtn}</span>
                      <Send className="w-4 h-4" />
                    </>
                  )}
                </button>
              </form>
            )}

          </div>

        </div>

      </div>
    </section>
  );
};
