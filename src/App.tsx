/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { Header } from './components/Header.tsx';
import { Hero } from './components/Hero.tsx';
import { PillarsSection } from './components/PillarsSection.tsx';
import { CatalogueSection } from './components/CatalogueSection.tsx';
import { ShowcaseSection } from './components/ShowcaseSection.tsx';
import { WorkflowSection } from './components/WorkflowSection.tsx';
import { PreFooterCta } from './components/PreFooterCta.tsx';
import { Footer } from './components/Footer.tsx';

import { ConsultationModal } from './components/ConsultationModal.tsx';
import { ServiceDetailModal } from './components/ServiceDetailModal.tsx';
import { TechnicalSpecsModal } from './components/TechnicalSpecsModal.tsx';
import { InquiriesTrackerModal } from './components/InquiriesTrackerModal.tsx';
import { LegalModal } from './components/LegalModal.tsx';
import { ServiceDetail } from './utils/briefCalculator.ts';

export default function App() {
  const [consultationOpen, setConsultationOpen] = useState(false);
  const [selectedConsultServiceId, setSelectedConsultServiceId] = useState<string | undefined>();
  const [selectedDetailService, setSelectedDetailService] = useState<ServiceDetail | null>(null);
  const [specsModalOpen, setSpecsModalOpen] = useState(false);
  const [inquiriesModalOpen, setInquiriesModalOpen] = useState(false);
  const [legalModalType, setLegalModalType] = useState<'terms' | 'privacy' | null>(null);
  const [activeSection, setActiveSection] = useState<string>('hero');

  // Handle active section on scroll
  useEffect(() => {
    const handleScroll = () => {
      const sections = ['hero', 'standar-pengerjaan', 'katalog-layanan', 'alur-kerja', 'konsultasi'];
      const scrollPosition = window.scrollY + 200;

      for (const sectionId of sections) {
        const element = document.getElementById(sectionId);
        if (element) {
          const top = element.offsetTop;
          const height = element.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const openConsultation = (serviceId?: string) => {
    setSelectedConsultServiceId(serviceId);
    setConsultationOpen(true);
  };

  const scrollToStandards = () => {
    const el = document.getElementById('standar-pengerjaan');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToCatalogue = () => {
    const el = document.getElementById('katalog-layanan');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="bg-[#fcf9f8] min-h-screen flex flex-col font-sans text-[#3c3c3c] antialiased selection:bg-[#d8e2ff] selection:text-[#001a41]">
      {/* Top Fixed Header */}
      <Header
        activeSection={activeSection}
        onOpenConsultation={() => openConsultation()}
        onOpenSpecs={() => setSpecsModalOpen(true)}
        onOpenWorkflow={() => {
          const el = document.getElementById('alur-kerja');
          if (el) el.scrollIntoView({ behavior: 'smooth' });
        }}
        onOpenInquiries={() => setInquiriesModalOpen(true)}
      />

      {/* Main Page Flow */}
      <main className="w-full pt-16 flex-1">
        <Hero
          onOpenConsultation={() => openConsultation()}
          onScrollToStandards={scrollToStandards}
        />

        <PillarsSection />

        <CatalogueSection
          onSelectService={(service) => setSelectedDetailService(service)}
          onConsultService={(serviceId) => openConsultation(serviceId)}
        />

        <ShowcaseSection onOpenSpecs={() => setSpecsModalOpen(true)} />

        <WorkflowSection onStartBrief={() => openConsultation()} />

        <PreFooterCta
          onOpenConsultation={() => openConsultation()}
          onScrollToCatalogue={scrollToCatalogue}
        />
      </main>

      {/* Footer */}
      <Footer
        onOpenConsultation={() => openConsultation()}
        onOpenSpecs={() => setSpecsModalOpen(true)}
        onOpenTerms={() => setLegalModalType('terms')}
        onOpenPrivacy={() => setLegalModalType('privacy')}
      />

      {/* Interactive Modals */}
      <ConsultationModal
        isOpen={consultationOpen}
        onClose={() => setConsultationOpen(false)}
        preSelectedServiceId={selectedConsultServiceId}
        onInquirySubmitted={() => {}}
      />

      <ServiceDetailModal
        service={selectedDetailService}
        onClose={() => setSelectedDetailService(null)}
        onConsult={(serviceId) => {
          openConsultation(serviceId);
        }}
      />

      <TechnicalSpecsModal
        isOpen={specsModalOpen}
        onClose={() => setSpecsModalOpen(false)}
        onOpenConsultation={() => openConsultation()}
      />

      <InquiriesTrackerModal
        isOpen={inquiriesModalOpen}
        onClose={() => setInquiriesModalOpen(false)}
        onNewBrief={() => openConsultation()}
      />

      <LegalModal
        type={legalModalType}
        onClose={() => setLegalModalType(null)}
      />
    </div>
  );
}
