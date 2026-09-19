import React, { useState } from 'react';
import { BrandProvider } from './lib/brandContext';
import { SmoothScrollProvider } from './lib/smoothScroll';
import { StarFieldCanvas } from './components/global/StarFieldCanvas';
import { GridHairlines } from './components/global/GridHairlines';
import { StarCursor } from './components/global/StarCursor';
import { ScrollPathNav } from './components/global/ScrollPathNav';
import { Navbar } from './components/global/Navbar';
import { HeroSection } from './components/sections/HeroSection';
import { ManifestoSection } from './components/sections/ManifestoSection';
import { PointPathProgressSection } from './components/sections/PointPathProgressSection';
import { WhatWeBuildSection } from './components/sections/WhatWeBuildSection';
import { PrinciplesSection } from './components/sections/PrinciplesSection';
import { FindDirectionSection } from './components/sections/FindDirectionSection';
import { ClosingCtaSection } from './components/sections/ClosingCtaSection';
import { Footer } from './components/sections/Footer';
import { ContactModal } from './components/modals/ContactModal';
import { LeadCopilotModal } from './components/modals/LeadCopilotModal';

export default function App() {
  const [isContactOpen, setIsContactOpen] = useState(false);
  const [isLeadCopilotOpen, setIsLeadCopilotOpen] = useState(false);

  const handleExploreProducts = () => {
    const el = document.getElementById('products');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <BrandProvider>
      <SmoothScrollProvider>
        <div className="relative min-h-screen bg-[#070B14] text-[#F4F6F8] selection:bg-[#6EA8FF] selection:text-[#070B14] overflow-x-hidden">
          {/* Accessibility Skip Link */}
          <a
            href="#main-content"
            className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[9999] focus:px-6 focus:py-3 focus:bg-[#6EA8FF] focus:text-[#070B14] focus:font-bold focus:rounded-xl focus:outline-none focus:ring-2 focus:ring-[#8DEBFF]"
          >
            Skip to main content
          </a>

          {/* 1. Global Persistent Layers */}
          <StarFieldCanvas />
          <GridHairlines />
          <StarCursor />
          <ScrollPathNav />

          {/* 2. Top Navigation */}
          <Navbar onOpenContact={() => setIsContactOpen(true)} />

          {/* 3. Main Landmark & Flow Sections */}
          <main id="main-content" tabIndex={-1} className="relative z-10 focus:outline-none">
            <HeroSection
              onOpenContact={() => setIsContactOpen(true)}
              onExploreProducts={handleExploreProducts}
            />
            <ManifestoSection />
            <PointPathProgressSection />
            <WhatWeBuildSection onOpenLeadCopilot={() => setIsLeadCopilotOpen(true)} />
            <PrinciplesSection />
            <FindDirectionSection onOpenContact={() => setIsContactOpen(true)} />
            <ClosingCtaSection onOpenContact={() => setIsContactOpen(true)} />
          </main>

          {/* 4. Footer */}
          <Footer />

          {/* 5. Modals */}
          <ContactModal
            isOpen={isContactOpen}
            onClose={() => setIsContactOpen(false)}
          />
          <LeadCopilotModal
            isOpen={isLeadCopilotOpen}
            onClose={() => setIsLeadCopilotOpen(false)}
            onOpenContact={() => {
              setIsLeadCopilotOpen(false);
              setIsContactOpen(true);
            }}
          />
        </div>
      </SmoothScrollProvider>
    </BrandProvider>
  );
}

