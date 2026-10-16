import React from 'react';
import { StudioLogo } from './StudioLogo.tsx';

interface HeaderProps {
  onOpenConsultation: (serviceId?: string) => void;
  onOpenSpecs: () => void;
  onOpenWorkflow: () => void;
  onOpenInquiries: () => void;
  activeSection: string;
}

export const Header: React.FC<HeaderProps> = ({
  onOpenConsultation,
  onOpenSpecs,
  onOpenWorkflow,
  onOpenInquiries,
  activeSection
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = React.useState(false);

  const scrollTo = (id: string) => {
    setMobileMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-[#ffffff] shadow-[0_1px_8px_rgba(0,0,0,0.04)] border-b border-[#e6e6e6]">
      <div className="h-16 max-w-[1440px] mx-auto px-4 sm:px-8 flex items-center justify-between gap-4">
        {/* Brand / Logo */}
        <button
          onClick={() => scrollTo('hero')}
          className="flex items-center gap-2.5 sm:gap-3 text-left focus:outline-none shrink-0"
          aria-label="Kembali ke Beranda Teduh dalam cerita"
        >
          <StudioLogo className="h-7 sm:h-8 w-auto object-contain" />
          <span className="font-title-sm text-[14px] sm:text-[16px] font-bold text-[#1a1a1a] tracking-tight uppercase whitespace-nowrap">
            Teduh dalam cerita
          </span>
        </button>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-6" aria-label="Navigasi Utama">
          <button
            onClick={() => scrollTo('katalog-layanan')}
            className={`transition-colors py-2 text-[14px] font-bold border-b-2 ${
              activeSection === 'katalog-layanan'
                ? 'text-[#1a1a1a] border-[#1a1a1a]'
                : 'text-[#424753] border-transparent hover:text-[#1a1a1a]'
            }`}
          >
            Katalog Layanan
          </button>
          <button
            onClick={onOpenSpecs}
            className={`transition-colors py-2 text-[14px] font-bold border-b-2 ${
              activeSection === 'spesifikasi-pengerjaan'
                ? 'text-[#1a1a1a] border-[#1a1a1a]'
                : 'text-[#424753] border-transparent hover:text-[#1a1a1a]'
            }`}
          >
            Spesifikasi Pengerjaan
          </button>
          <button
            onClick={() => scrollTo('alur-kerja')}
            className={`transition-colors py-2 text-[14px] font-bold border-b-2 ${
              activeSection === 'alur-kerja'
                ? 'text-[#1a1a1a] border-[#1a1a1a]'
                : 'text-[#424753] border-transparent hover:text-[#1a1a1a]'
            }`}
          >
            Alur Kerja
          </button>
          <button
            onClick={() => scrollTo('konsultasi')}
            className={`transition-colors py-2 text-[14px] font-bold border-b-2 ${
              activeSection === 'konsultasi'
                ? 'text-[#1a1a1a] border-[#1a1a1a]'
                : 'text-[#424753] border-transparent hover:text-[#1a1a1a]'
            }`}
          >
            Konsultasi
          </button>
        </nav>

        {/* Actions */}
        <div className="flex items-center gap-2 sm:gap-4 shrink-0">
          <button
            onClick={() => onOpenConsultation()}
            className="hidden sm:inline-flex items-center justify-center h-12 px-6 bg-[#1c69d4] hover:bg-[#0653b6] text-[#ffffff] font-bold text-[14px] tracking-[0.5px] uppercase transition-colors"
          >
            Konsultasi Layanan
          </button>
          
          <button
            onClick={onOpenInquiries}
            aria-label="Lihat Draf & Permohonan Proyek"
            title="Draf & Permohonan Proyek"
            className="w-8 h-8 rounded-full bg-[#0051ae] hover:bg-[#0653b6] text-[#ffffff] flex items-center justify-center shrink-0 transition-colors"
          >
            <span className="material-symbols-outlined text-[18px]">person</span>
          </button>

          {/* Mobile hamburger button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden w-8 h-8 border border-[#e6e6e6] flex items-center justify-center text-[#1a1a1a]"
            aria-label="Buka Menu Navigasi"
          >
            <span className="material-symbols-outlined text-[20px]">
              {mobileMenuOpen ? 'close' : 'menu'}
            </span>
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden border-t border-[#e6e6e6] bg-[#ffffff] px-4 py-4 flex flex-col gap-3 shadow-lg">
          <button
            onClick={() => scrollTo('katalog-layanan')}
            className="text-left py-2 font-bold text-[#1a1a1a] border-b border-[#f0eded]"
          >
            Katalog Layanan
          </button>
          <button
            onClick={() => {
              setMobileMenuOpen(false);
              onOpenSpecs();
            }}
            className="text-left py-2 font-bold text-[#1a1a1a] border-b border-[#f0eded]"
          >
            Spesifikasi Pengerjaan
          </button>
          <button
            onClick={() => scrollTo('alur-kerja')}
            className="text-left py-2 font-bold text-[#1a1a1a] border-b border-[#f0eded]"
          >
            Alur Kerja
          </button>
          <button
            onClick={() => scrollTo('konsultasi')}
            className="text-left py-2 font-bold text-[#1a1a1a] border-b border-[#f0eded]"
          >
            Konsultasi
          </button>
          <button
            onClick={() => {
              setMobileMenuOpen(false);
              onOpenConsultation();
            }}
            className="w-full h-12 bg-[#1c69d4] hover:bg-[#0653b6] text-[#ffffff] font-bold text-[14px] uppercase tracking-wider flex items-center justify-center mt-2"
          >
            Konsultasi Layanan
          </button>
        </div>
      )}
    </header>
  );
};
