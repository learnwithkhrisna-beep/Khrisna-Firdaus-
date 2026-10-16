import React, { useState } from 'react';
import { SERVICES_CATALOGUE, ServiceDetail } from '../utils/briefCalculator.ts';

interface CatalogueSectionProps {
  onSelectService: (service: ServiceDetail) => void;
  onConsultService: (serviceId: string) => void;
}

export const CatalogueSection: React.FC<CatalogueSectionProps> = ({
  onSelectService,
  onConsultService
}) => {
  const [activeCategory, setActiveCategory] = useState<string>('all');

  const filteredServices = SERVICES_CATALOGUE.filter((service) => {
    if (activeCategory === 'all') return true;
    return service.category === activeCategory;
  });

  return (
    <section id="katalog-layanan" className="w-full bg-[#ffffff] border-b border-[#e6e6e6]">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-8 py-16 sm:py-20">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10">
          <div className="flex flex-col gap-2">
            <span className="font-label-uppercase text-[13px] font-bold text-[#0051ae] uppercase tracking-[1.5px]">
              Daftar Komprehensif
            </span>
            <h2 className="font-display-md text-2xl sm:text-4xl font-bold text-[#1a1a1a]">
              Katalog Layanan Desain
            </h2>
            <p className="font-body-md text-base text-[#585f68] max-w-xl font-light">
              Tersedia 7 bidang layanan desain grafis resmi dengan penyesuaian detail teknis sesuai rancangan brief Anda.
            </p>
          </div>

          <div className="bg-[#f7f7f7] p-4 text-left md:text-right border-l-2 md:border-l-0 md:border-r-2 border-[#0051ae]">
            <span className="font-caption text-[11px] text-[#585f68] block uppercase tracking-wider font-semibold">
              Status Penawaran
            </span>
            <span className="font-title-sm text-[16px] font-bold text-[#1a1a1a]">
              Konsultasi Terbuka
            </span>
          </div>
        </div>

        {/* Filter Category Chips */}
        <div className="flex flex-wrap items-center gap-2 mb-10 pb-4 border-b border-[#e6e6e6]">
          {[
            { id: 'all', label: 'Semua Layanan (7)' },
            { id: 'identitas', label: 'Identitas Visual (2)' },
            { id: 'publikasi', label: 'Publikasi & Menu (2)' },
            { id: 'kemasan', label: 'Kemasan & Die-Line (1)' },
            { id: 'promosi', label: 'Promosi & Banner (2)' }
          ].map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`h-9 px-4 text-[12px] font-bold tracking-wider uppercase transition-colors ${
                activeCategory === cat.id
                  ? 'bg-[#1a1a1a] text-[#ffffff] border border-[#1a1a1a]'
                  : 'bg-[#ffffff] text-[#585f68] border border-[#cccccc] hover:bg-[#f7f7f7] hover:text-[#1a1a1a]'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredServices.map((service) => (
            <div
              key={service.id}
              className={`bg-[#fafafa] p-6 sm:p-8 flex flex-col justify-between border border-[#e6e6e6] transition-all hover:border-[#1c69d4] hover:shadow-sm ${
                service.colSpan && activeCategory === 'all' ? 'md:col-span-2 lg:col-span-1' : ''
              }`}
            >
              <div className="flex flex-col gap-4">
                <div className="flex items-center justify-between">
                  <span className="font-label-uppercase text-[12px] font-bold text-[#585f68] tracking-[1.5px]">
                    {service.number}
                  </span>
                  <span className="material-symbols-outlined text-[#0051ae] text-[24px]">
                    {service.icon}
                  </span>
                </div>

                <div className="cursor-pointer" onClick={() => onSelectService(service)}>
                  <h3 className="font-title-lg text-[20px] font-bold text-[#1a1a1a] hover:text-[#0051ae] transition-colors">
                    {service.name}
                  </h3>
                  <p className="font-body-sm text-[14px] text-[#3c3c3c] font-light mt-2 line-clamp-3">
                    {service.description}
                  </p>
                </div>

                {/* Specs Box */}
                <div className="bg-[#ffffff] p-4 flex flex-col gap-2 mt-2 border border-[#e6e6e6]">
                  <div className="flex justify-between items-center text-sm">
                    <span className="text-[#585f68] font-light text-[13px]">Revisi:</span>
                    <span className="font-bold text-[#1a1a1a] text-[13px]">{service.revisi}</span>
                  </div>
                  <div className="flex justify-between items-center text-sm">
                    <span className="text-[#585f68] font-light text-[13px]">Durasi:</span>
                    <span className="font-bold text-[#1a1a1a] text-[13px]">{service.durasi}</span>
                  </div>
                  <div className="flex justify-between items-center text-sm">
                    <span className="text-[#585f68] font-light text-[13px]">File Akhir:</span>
                    <span className="font-bold text-[#1a1a1a] text-[13px] text-right truncate max-w-[160px]" title={service.fileAkhir}>
                      {service.fileAkhir}
                    </span>
                  </div>
                </div>

                <button
                  type="button"
                  onClick={() => onSelectService(service)}
                  className="text-left text-[12px] text-[#585f68] hover:text-[#0051ae] underline tracking-wide font-medium"
                >
                  Lihat lembar spesifikasi teknis lengkap
                </button>
              </div>

              {/* Bottom Actions */}
              <div className="pt-6 flex flex-col gap-3 border-t border-[#e6e6e6] mt-6">
                <div className="flex items-center justify-between">
                  <span className="font-caption text-[12px] text-[#585f68]">Estimasi Biaya</span>
                  <span className="font-title-sm text-[15px] font-bold text-[#0051ae]">
                    Hubungi untuk Penawaran
                  </span>
                </div>

                <button
                  type="button"
                  onClick={() => onConsultService(service.id)}
                  className="w-full inline-flex items-center justify-between font-label-uppercase text-[13px] font-bold text-[#0051ae] hover:text-[#0653b6] pt-1 transition-colors group cursor-pointer"
                >
                  <span className="group-hover:translate-x-0.5 transition-transform">
                    KONSULTASIKAN LAYANAN INI
                  </span>
                  <span className="text-xl group-hover:translate-x-1 transition-transform">›</span>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
