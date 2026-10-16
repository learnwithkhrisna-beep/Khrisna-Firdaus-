import React, { useState, useEffect } from 'react';
import { SERVICES_CATALOGUE } from '../utils/briefCalculator.ts';

interface InquiriesTrackerModalProps {
  isOpen: boolean;
  onClose: () => void;
  onNewBrief: () => void;
}

export const InquiriesTrackerModal: React.FC<InquiriesTrackerModalProps> = ({
  isOpen,
  onClose,
  onNewBrief
}) => {
  const [inquiries, setInquiries] = useState<any[]>([]);

  useEffect(() => {
    if (isOpen) {
      try {
        const stored = JSON.parse(localStorage.getItem('tdc_inquiries') || '[]');
        setInquiries(stored);
      } catch {
        setInquiries([]);
      }
    }
  }, [isOpen]);

  if (!isOpen) return null;

  const clearAll = () => {
    if (window.confirm('Hapus seluruh riwayat draf kerangka proyek lokal?')) {
      localStorage.removeItem('tdc_inquiries');
      setInquiries([]);
    }
  };

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="tracker-modal-title"
      className="fixed inset-0 z-50 bg-[#000000]/60 flex items-center justify-center p-3 sm:p-6 overflow-y-auto"
    >
      <div className="bg-[#ffffff] w-full max-w-3xl my-auto border border-[#e6e6e6] shadow-2xl relative flex flex-col max-h-[90vh]">
        {/* Header */}
        <div className="p-5 sm:p-6 bg-[#ffffff] border-b border-[#e6e6e6] flex items-center justify-between shrink-0">
          <div>
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 bg-[#0051ae]" />
              <span className="text-[12px] font-bold text-[#585f68] tracking-widest uppercase">
                Portal Klien Studio
              </span>
            </div>
            <h3 id="tracker-modal-title" className="text-[20px] font-bold text-[#1a1a1a] mt-1">
              Draf &amp; Permohonan Proyek Aktif
            </h3>
          </div>
          <button
            onClick={onClose}
            className="w-9 h-9 border border-[#e6e6e6] hover:bg-[#f7f7f7] flex items-center justify-center text-[#1a1a1a]"
            aria-label="Tutup Portal Klien"
          >
            ✕
          </button>
        </div>

        {/* Content */}
        <div className="p-5 sm:p-8 overflow-y-auto flex-1">
          {inquiries.length === 0 ? (
            <div className="text-center py-12 flex flex-col items-center gap-4">
              <div className="w-16 h-16 bg-[#f7f7f7] border border-[#e6e6e6] flex items-center justify-center text-[#585f68]">
                <span className="material-symbols-outlined text-[32px]">folder_open</span>
              </div>
              <div>
                <h4 className="text-[16px] font-bold text-[#1a1a1a]">
                  Belum Ada Draf Brief Proyek
                </h4>
                <p className="text-[13px] text-[#585f68] font-light mt-1 max-w-sm">
                  Gunakan tombol &quot;Konsultasi Layanan&quot; untuk menyusun kerangka brief desain grafis pertama Anda.
                </p>
              </div>
              <button
                type="button"
                onClick={() => {
                  onClose();
                  onNewBrief();
                }}
                className="mt-2 h-11 px-6 bg-[#1c69d4] hover:bg-[#0653b6] text-[#ffffff] font-bold text-[13px] uppercase tracking-wider"
              >
                Buat Draf Brief Baru
              </button>
            </div>
          ) : (
            <div className="flex flex-col gap-4">
              <div className="flex items-center justify-between pb-2 border-b border-[#e6e6e6]">
                <span className="text-[12px] text-[#585f68]">
                  Total {inquiries.length} permohonan brief tersimpan di perangkat ini
                </span>
                <button
                  type="button"
                  onClick={clearAll}
                  className="text-[12px] text-[#dc2626] hover:underline"
                >
                  Bersihkan Riwayat
                </button>
              </div>

              {inquiries.map((inq) => {
                const srvNames = SERVICES_CATALOGUE.filter((s) =>
                  inq.data?.selectedServices?.includes(s.id)
                )
                  .map((s) => s.name)
                  .join(', ');

                return (
                  <div
                    key={inq.id}
                    className="bg-[#fafafa] p-5 border border-[#e6e6e6] flex flex-col gap-3"
                  >
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                      <div>
                        <span className="font-mono text-[14px] font-bold text-[#0051ae]">
                          {inq.id}
                        </span>
                        <span className="text-[12px] text-[#585f68] ml-2">({inq.createdAt})</span>
                      </div>
                      <span className="inline-block text-[11px] font-bold text-[#0051ae] bg-[#d8e2ff] px-2.5 py-0.5 self-start sm:self-auto">
                        {inq.status || 'Draf Diterima'}
                      </span>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-[13px] border-t border-[#e6e6e6] pt-3">
                      <div>
                        <span className="text-[#585f68]">Brand / Proyek:</span>{' '}
                        <strong className="text-[#1a1a1a]">{inq.data?.brandName}</strong>
                      </div>
                      <div>
                        <span className="text-[#585f68]">Pemohon:</span>{' '}
                        <span className="text-[#1a1a1a]">
                          {inq.data?.clientName} ({inq.data?.clientEmail})
                        </span>
                      </div>
                      <div className="sm:col-span-2">
                        <span className="text-[#585f68]">Layanan:</span>{' '}
                        <span className="text-[#1a1a1a] font-medium">{srvNames}</span>
                      </div>
                      <div className="sm:col-span-2 bg-[#ffffff] p-2.5 border border-[#e6e6e6] text-[12px] text-[#3c3c3c] font-light">
                        {inq.data?.projectDescription}
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          )}
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
              onNewBrief();
            }}
            className="h-11 px-6 bg-[#1c69d4] hover:bg-[#0653b6] text-[#ffffff] font-bold text-[13px] uppercase tracking-wider"
          >
            + Konsultasi Proyek Baru
          </button>
        </div>
      </div>
    </div>
  );
};
