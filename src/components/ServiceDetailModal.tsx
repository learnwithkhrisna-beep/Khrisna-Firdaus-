import React from 'react';
import { ServiceDetail } from '../utils/briefCalculator.ts';

interface ServiceDetailModalProps {
  service: ServiceDetail | null;
  onClose: () => void;
  onConsult: (serviceId: string) => void;
}

export const ServiceDetailModal: React.FC<ServiceDetailModalProps> = ({
  service,
  onClose,
  onConsult
}) => {
  if (!service) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="service-modal-title"
      className="fixed inset-0 z-50 bg-[#000000]/60 flex items-center justify-center p-3 sm:p-6 overflow-y-auto"
    >
      <div className="bg-[#ffffff] w-full max-w-2xl my-auto border border-[#e6e6e6] shadow-2xl relative flex flex-col max-h-[90vh]">
        {/* Header */}
        <div className="p-5 sm:p-6 bg-[#ffffff] border-b border-[#e6e6e6] flex items-center justify-between shrink-0">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-[#f7f7f7] border border-[#e6e6e6] flex items-center justify-center text-[#0051ae]">
              <span className="material-symbols-outlined text-[24px]">{service.icon}</span>
            </div>
            <div>
              <span className="text-[11px] font-bold text-[#585f68] tracking-widest uppercase">
                {service.number}
              </span>
              <h3 id="service-modal-title" className="text-[20px] font-bold text-[#1a1a1a]">
                {service.name}
              </h3>
            </div>
          </div>
          <button
            onClick={onClose}
            className="w-9 h-9 border border-[#e6e6e6] hover:bg-[#f7f7f7] flex items-center justify-center text-[#1a1a1a]"
            aria-label="Tutup Lembar Spesifikasi"
          >
            ✕
          </button>
        </div>

        {/* Content */}
        <div className="p-5 sm:p-8 overflow-y-auto flex-1 flex flex-col gap-6">
          <div>
            <h4 className="text-[13px] font-bold text-[#1a1a1a] uppercase tracking-wider mb-2">
              Deskripsi &amp; Orientasi Desain
            </h4>
            <p className="text-[14px] text-[#3c3c3c] font-light leading-relaxed">
              {service.description}
            </p>
          </div>

          {/* Technical Spec Matrix */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 bg-[#f7f7f7] p-4 border border-[#e6e6e6]">
            <div>
              <span className="text-[11px] font-bold text-[#585f68] uppercase tracking-wider block">
                Revisi
              </span>
              <span className="text-[14px] font-bold text-[#1a1a1a]">{service.revisi}</span>
            </div>
            <div>
              <span className="text-[11px] font-bold text-[#585f68] uppercase tracking-wider block">
                Estimasi Durasi
              </span>
              <span className="text-[14px] font-bold text-[#1a1a1a]">{service.baseDays} Hari Kerja</span>
            </div>
            <div>
              <span className="text-[11px] font-bold text-[#585f68] uppercase tracking-wider block">
                Standar DPI
              </span>
              <span className="text-[14px] font-bold text-[#0051ae]">{service.recommendedDpi} DPI</span>
            </div>
          </div>

          {/* Deliverables Checklist */}
          <div>
            <h4 className="text-[13px] font-bold text-[#1a1a1a] uppercase tracking-wider mb-3">
              Rincian Master Deliverables (File Akhir Siap Pakai)
            </h4>
            <div className="bg-[#fafafa] border border-[#e6e6e6] p-4 flex flex-col gap-2">
              {service.deliverables.map((item, idx) => (
                <div key={idx} className="flex items-start gap-2.5 text-[13px] text-[#3c3c3c]">
                  <span className="material-symbols-outlined text-[18px] text-[#0051ae] shrink-0 mt-0.5">
                    check_circle
                  </span>
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Formats & Color Profiles */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <h5 className="text-[12px] font-bold text-[#1a1a1a] uppercase tracking-wider mb-2">
                Format Berkas Standar:
              </h5>
              <div className="flex flex-wrap gap-1.5">
                {service.standardFormats.map((fmt, i) => (
                  <span
                    key={i}
                    className="text-[11px] bg-[#ffffff] border border-[#cccccc] px-2 py-1 font-mono text-[#3c3c3c]"
                  >
                    {fmt}
                  </span>
                ))}
              </div>
            </div>

            <div>
              <h5 className="text-[12px] font-bold text-[#1a1a1a] uppercase tracking-wider mb-2">
                Profil Warna &amp; Separasi:
              </h5>
              <ul className="text-[12px] text-[#585f68] space-y-1">
                {service.colorProfiles.map((cp, i) => (
                  <li key={i} className="flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 bg-[#0051ae]" />
                    <span>{cp}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Studio Guidelines note */}
          <div className="bg-[#ffffff] p-4 border-l-2 border-[#0051ae] border-y border-r border-[#e6e6e6]">
            <span className="text-[11px] font-bold text-[#0051ae] uppercase tracking-wider block">
              Standar Disiplin Teknis Studio:
            </span>
            <p className="text-[13px] text-[#585f68] font-light mt-1 leading-relaxed">
              {service.guidelines}
            </p>
          </div>
        </div>

        {/* Footer */}
        <div className="p-4 sm:p-6 bg-[#fafafa] border-t border-[#e6e6e6] flex items-center justify-between shrink-0">
          <button
            type="button"
            onClick={onClose}
            className="h-11 px-5 border border-[#cccccc] bg-[#ffffff] hover:bg-[#f7f7f7] text-[#1a1a1a] font-bold text-[13px] uppercase tracking-wider"
          >
            Tutup
          </button>
          <button
            type="button"
            onClick={() => {
              onClose();
              onConsult(service.id);
            }}
            className="h-11 px-6 bg-[#1c69d4] hover:bg-[#0653b6] text-[#ffffff] font-bold text-[13px] uppercase tracking-wider"
          >
            Konsultasikan Layanan Ini ›
          </button>
        </div>
      </div>
    </div>
  );
};
