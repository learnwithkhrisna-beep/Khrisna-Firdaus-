import React from 'react';
import { StudioLogo } from './StudioLogo.tsx';

interface FooterProps {
  onOpenConsultation: () => void;
  onOpenSpecs: () => void;
  onOpenTerms: () => void;
  onOpenPrivacy: () => void;
}

export const Footer: React.FC<FooterProps> = ({
  onOpenConsultation,
  onOpenSpecs,
  onOpenTerms,
  onOpenPrivacy
}) => {
  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <footer className="w-full bg-[#f7f7f7] border-t border-[#e6e6e6] py-16 sm:py-20 text-[#3c3c3c]">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-8 flex flex-col gap-12">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 lg:gap-12">
          {/* Studio Brand Bio */}
          <div className="md:col-span-5 flex flex-col gap-4">
            <div className="flex items-center gap-3">
              <StudioLogo className="h-7 w-auto object-contain" />
              <span className="font-title-sm text-[16px] font-bold text-[#1a1a1a] uppercase">
                Teduh dalam cerita
              </span>
            </div>
            <p className="font-body-sm text-[14px] text-[#585f68] max-w-sm font-light leading-relaxed">
              Studio desain grafis berorientasi presisi visual, kedalaman narasi, dan tata letak disiplin untuk identitas brand dan publikasi terstruktur.
            </p>
          </div>

          {/* Navigasi Arsip */}
          <div className="md:col-span-3 flex flex-col gap-2">
            <span className="font-label-uppercase text-[12px] font-bold text-[#1a1a1a] uppercase tracking-[1.5px]">
              Navigasi Arsip
            </span>
            <div className="flex flex-col gap-2 pt-2">
              <button
                type="button"
                onClick={() => scrollTo('katalog-layanan')}
                className="text-left font-body-sm text-[14px] text-[#585f68] hover:text-[#1a1a1a] transition-colors"
              >
                Katalog Layanan
              </button>
              <button
                type="button"
                onClick={onOpenSpecs}
                className="text-left font-body-sm text-[14px] text-[#585f68] hover:text-[#1a1a1a] transition-colors"
              >
                Spesifikasi Pengerjaan
              </button>
              <button
                type="button"
                onClick={() => scrollTo('alur-kerja')}
                className="text-left font-body-sm text-[14px] text-[#585f68] hover:text-[#1a1a1a] transition-colors"
              >
                Alur Kerja Studio
              </button>
            </div>
          </div>

          {/* Hubungi Tim Desain */}
          <div className="md:col-span-4 flex flex-col gap-2">
            <span className="font-label-uppercase text-[12px] font-bold text-[#1a1a1a] uppercase tracking-[1.5px]">
              Hubungi Tim Desain
            </span>
            <div className="flex flex-col gap-2 pt-2">
              <button
                type="button"
                onClick={() => scrollTo('konsultasi')}
                className="text-left font-body-sm text-[14px] text-[#585f68] hover:text-[#1a1a1a] transition-colors"
              >
                Sesi Diskusi &amp; Portofolio
              </button>
              <button
                type="button"
                onClick={onOpenConsultation}
                className="text-left font-body-sm text-[14px] font-medium text-[#0051ae] hover:text-[#0653b6] transition-colors"
              >
                Kirimkan Kerangka Proyek ›
              </button>
            </div>
          </div>
        </div>

        {/* Legal & Copyright Bar */}
        <div className="border-t border-[#e6e6e6] pt-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <span className="font-caption text-[12px] text-[#6b6b6b]">
            © 2025 Teduh dalam cerita. Seluruh hak cipta dilindungi undang-undang.
          </span>
          <div className="flex items-center gap-6">
            <button
              type="button"
              onClick={onOpenTerms}
              className="font-caption text-[12px] text-[#6b6b6b] hover:text-[#1a1a1a] transition-colors underline-offset-2 hover:underline"
            >
              Ketentuan Pengerjaan
            </button>
            <button
              type="button"
              onClick={onOpenPrivacy}
              className="font-caption text-[12px] text-[#6b6b6b] hover:text-[#1a1a1a] transition-colors underline-offset-2 hover:underline"
            >
              Kebijakan Kerahasiaan Dokumen
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};
