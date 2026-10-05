import { useState } from "react";
import { LanguageProvider } from "./context/LanguageContext";
import { Navbar } from "./components/Navbar";
import { Hero } from "./components/Hero";
import { About } from "./components/About";
import { Services } from "./components/Services";
import { HowItWorks } from "./components/HowItWorks";
import { LongDistance } from "./components/LongDistance";
import { WhyChoose } from "./components/WhyChoose";
import { PaymentAndDisclaimer } from "./components/PaymentAndDisclaimer";
import { ContactSection } from "./components/ContactSection";
import { Footer } from "./components/Footer";
import { FloatingWhatsApp } from "./components/FloatingWhatsApp";
import { LegalModal } from "./components/LegalModal";

function AppContent() {
  const [preselectedService, setPreselectedService] = useState<string>("");
  const [legalModalState, setLegalModalState] = useState<{
    isOpen: boolean;
    tab: "disclaimer" | "privacy";
  }>({
    isOpen: false,
    tab: "disclaimer"
  });

  const handleOpenBooking = () => {
    const contactElem = document.getElementById("consultation-form") || document.getElementById("contact");
    if (contactElem) {
      contactElem.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleSelectServiceForBooking = (serviceTitle: string) => {
    setPreselectedService(serviceTitle);
    const formElem = document.getElementById("consultation-form") || document.getElementById("contact");
    if (formElem) {
      formElem.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleOpenLegalModal = (tab: "disclaimer" | "privacy") => {
    setLegalModalState({ isOpen: true, tab });
  };

  const handleCloseLegalModal = () => {
    setLegalModalState((prev) => ({ ...prev, isOpen: false }));
  };

  return (
    <div className="min-h-screen bg-[#0e0d0b] text-[#ede8df] flex flex-col font-sans selection:bg-[#d4af37] selection:text-black">
      {/* Sticky Navigation Bar */}
      <Navbar onOpenBooking={handleOpenBooking} />

      {/* Main Page Flow */}
      <main className="flex-grow">
        {/* 1. Hero Section */}
        <Hero onOpenBooking={handleOpenBooking} />

        {/* 2. About Professor Kobbyier */}
        <About onOpenBooking={handleOpenBooking} />

        {/* 3. Areas of Consultation (Services Grid) */}
        <Services onSelectServiceForBooking={handleSelectServiceForBooking} />

        {/* 4. How It Works (4-Step Process) */}
        <HowItWorks onOpenBooking={handleOpenBooking} />

        {/* 5. Consultations From Anywhere (Long-Distance Services) */}
        <LongDistance onOpenBooking={handleOpenBooking} />

        {/* 6. Why Choose Professor Kobbyier (6 Feature Cards) */}
        <WhyChoose />

        {/* 7. Consultation & Payment Arrangements & Client Disclaimer */}
        <PaymentAndDisclaimer
          onOpenBooking={handleOpenBooking}
          onOpenLegalModal={handleOpenLegalModal}
        />

        {/* 8. Contact Section & Interactive Request Form */}
        <ContactSection
          preselectedService={preselectedService}
          onClearPreselectedService={() => setPreselectedService("")}
        />
      </main>

      {/* Footer */}
      <Footer onOpenLegalModal={handleOpenLegalModal} />

      {/* Floating WhatsApp Button */}
      <FloatingWhatsApp />

      {/* Legal & Privacy Policy Modal */}
      <LegalModal
        isOpen={legalModalState.isOpen}
        initialTab={legalModalState.tab}
        onClose={handleCloseLegalModal}
      />
    </div>
  );
}

export default function App() {
  return (
    <LanguageProvider>
      <AppContent />
    </LanguageProvider>
  );
}
