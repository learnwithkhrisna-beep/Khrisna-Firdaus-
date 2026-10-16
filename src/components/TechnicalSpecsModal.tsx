import React, { useState } from 'react';
import { calculatePrintSpecs } from '../utils/briefCalculator.ts';

interface TechnicalSpecsModalProps {
  isOpen: boolean;
  onClose: () => void;
  onOpenConsultation: () => void;
}

export const TechnicalSpecsModal: React.FC<TechnicalSpecsModalProps> = ({
  isOpen,
  onClose,
  onOpenConsultation
}) => {
  const [widthMm, setWidthMm] = useState<number>(210);
  const [heightMm, setHeightMm] = useState<number>(297);
  const [targetDpi, setTargetDpi] = useState<number>(300);
  const [bleedMm, setBleedMm] = useState<number>(3);

  if (!isOpen) return null;

  const specs = calculatePrintSpecs(widthMm, heightMm, targetDpi, bleedMm);

  const applyPreset = (w: number, h: number, dpi: number, b: number) => {
    setWidthMm(w);
    setHeightMm(h);
    setTargetDpi(dpi);
    setBleedMm(b);
  };

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="specs-modal-title"
      className="fixed inset-0 z-50 bg-[#000000]/60 flex items-center justify-center p-3 sm:p-6 overflow-y-auto"
    >
      <div className="bg-[#ffffff] w-full max-w-4xl my-auto border border-[#e6e6e6] shadow-2xl relative flex flex-col max-h-[92vh]">
        {/* Header */}
        <div className="p-5 sm:p-6 bg-[#ffffff] border-b border-[#e6e6e6] flex items-center justify-between shrink-0">
          <div>
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 bg-[#0051ae]" />
              <span className="text-[12px] font-bold text-[#585f68] tracking-widest uppercase">
                Standar Teknis Studio
              </span>
            </div>
            <h3 id="specs-modal-title" className="text-[20px] font-bold text-[#1a1a1a] mt-1">
              Spesifikasi Pengerjaan &amp; Pre-Press Studio
            </h3>
          </div>
          <button
            onClick={onClose}
            className="w-9 h-9 border border-[#e6e6e6] hover:bg-[#f7f7f7] flex items-center justify-center text-[#1a1a1a]"
            aria-label="Tutup Spesifikasi Pengerjaan"
          >
            ✕
          </button>
        </div>

        {/* Content */}
        <div className="p-5 sm:p-8 overflow-y-auto flex-1 flex flex-col gap-8">
          {/* Section 1: Interactive Dimension & Resolution Calculator */}
          <div className="bg-[#fafafa] p-6 border border-[#e6e6e6]">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 pb-4 border-b border-[#e6e6e6]">
              <div>
                <span className="text-[11px] font-bold text-[#0051ae] uppercase tracking-wider block">
                  Alat Bantu Interaktif
                </span>
                <h4 className="text-[16px] font-bold text-[#1a1a1a]">
                  Kalkulator Dimensi Cetak, Bleed &amp; Resolusi Pixel
                </h4>
              </div>

              {/* Preset buttons */}
              <div className="flex flex-wrap gap-1.5">
                <button
                  type="button"
                  onClick={() => applyPreset(210, 297, 300, 3)}
                  className="px-2.5 py-1 text-[11px] font-bold bg-[#ffffff] border border-[#cccccc] hover:bg-[#1a1a1a] hover:text-[#ffffff] transition-colors"
                >
                  A4 Press
                </button>
                <button
                  type="button"
                  onClick={() => applyPreset(90, 54, 300, 2)}
                  className="px-2.5 py-1 text-[11px] font-bold bg-[#ffffff] border border-[#cccccc] hover:bg-[#1a1a1a] hover:text-[#ffffff] transition-colors"
                >
                  Kartu Nama
                </button>
                <button
                  type="button"
                  onClick={() => applyPreset(160, 240, 300, 3)}
                  className="px-2.5 py-1 text-[11px] font-bold bg-[#ffffff] border border-[#cccccc] hover:bg-[#1a1a1a] hover:text-[#ffffff] transition-colors"
                >
                  Kotak Kemasan
                </button>
                <button
                  type="button"
                  onClick={() => applyPreset(2000, 1000, 150, 0)}
                  className="px-2.5 py-1 text-[11px] font-bold bg-[#ffffff] border border-[#cccccc] hover:bg-[#1a1a1a] hover:text-[#ffffff] transition-colors"
                >
                  Spanduk 2x1m
                </button>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-5">
              {/* Inputs */}
              <div className="flex flex-col gap-4">
                <div className="grid grid-cols-2 gap-3">
                  <div>
                    <label className="text-[12px] text-[#585f68] font-medium block mb-1">
                      Lebar Bersih (mm):
                    </label>
                    <input
                      type="number"
                      min={10}
                      max={10000}
                      value={widthMm}
                      onChange={(e) => setWidthMm(Number(e.target.value) || 0)}
                      className="w-full h-10 px-3 bg-[#ffffff] border border-[#e6e6e6] text-[14px] focus:outline-none focus:border-[#1a1a1a]"
                    />
                  </div>
                  <div>
                    <label className="text-[12px] text-[#585f68] font-medium block mb-1">
                      Tinggi Bersih (mm):
                    </label>
                    <input
                      type="number"
                      min={10}
                      max={10000}
                      value={heightMm}
                      onChange={(e) => setHeightMm(Number(e.target.value) || 0)}
                      className="w-full h-10 px-3 bg-[#ffffff] border border-[#e6e6e6] text-[14px] focus:outline-none focus:border-[#1a1a1a]"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-3">
                  <div>
                    <label className="text-[12px] text-[#585f68] font-medium block mb-1">
                      Target DPI:
                    </label>
                    <select
                      value={targetDpi}
                      onChange={(e) => setTargetDpi(Number(e.target.value))}
                      className="w-full h-10 px-2 bg-[#ffffff] border border-[#e6e6e6] text-[13px] focus:outline-none focus:border-[#1a1a1a]"
                    >
                      <option value={300}>300 DPI (Offset &amp; Digital Press)</option>
                      <option value={150}>150 DPI (Banner &amp; Outdoor)</option>
                      <option value={72}>72 DPI (Layar Digital &amp; Web)</option>
                    </select>
                  </div>
                  <div>
                    <label className="text-[12px] text-[#585f68] font-medium block mb-1">
                      Lebihan Bleed (mm):
                    </label>
                    <input
                      type="number"
                      min={0}
                      max={20}
                      value={bleedMm}
                      onChange={(e) => setBleedMm(Number(e.target.value) || 0)}
                      className="w-full h-10 px-3 bg-[#ffffff] border border-[#e6e6e6] text-[14px] focus:outline-none focus:border-[#1a1a1a]"
                    />
                  </div>
                </div>
              </div>

              {/* Output Results */}
              <div className="bg-[#ffffff] p-5 border border-[#e6e6e6] flex flex-col justify-between">
                <div className="flex flex-col gap-3">
                  <div>
                    <span className="text-[11px] text-[#585f68] uppercase font-bold tracking-wider block">
                      Dimensi File Bersih (Trim Size)
                    </span>
                    <span className="text-[20px] font-bold text-[#1a1a1a]">
                      {specs.pixelWidth} × {specs.pixelHeight} px
                    </span>
                    <span className="text-[12px] text-[#585f68] block">
                      ({widthMm} × {heightMm} mm @ {targetDpi} DPI)
                    </span>
                  </div>

                  <div className="pt-2 border-t border-[#f0eded]">
                    <span className="text-[11px] text-[#0051ae] uppercase font-bold tracking-wider block">
                      Total Dimensi dengan Bleed {bleedMm}mm (Canvas Size)
                    </span>
                    <span className="text-[18px] font-bold text-[#0051ae]">
                      {specs.pixelWidthWithBleed} × {specs.pixelHeightWithBleed} px
                    </span>
                  </div>

                  <div className="pt-2 border-t border-[#f0eded]">
                    <span className="text-[11px] text-[#585f68] uppercase font-bold tracking-wider block">
                      Rekomendasi Profil Warna
                    </span>
                    <span className="text-[13px] font-bold text-[#1a1a1a]">
                      {specs.colorProfile}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Section 2: Standard Format Matrix */}
          <div>
            <h4 className="text-[14px] font-bold text-[#1a1a1a] uppercase tracking-wider mb-4">
              Matriks Format Berkas Resmi Studio
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <div className="p-4 bg-[#ffffff] border border-[#e6e6e6]">
                <div className="font-mono font-bold text-[14px] text-[#0051ae] mb-1">.AI / .EPS</div>
                <div className="text-[12px] font-bold text-[#1a1a1a] mb-1">Vektor Master Scalable</div>
                <p className="text-[12px] text-[#585f68] font-light leading-relaxed">
                  Resolusi tak terbatas. Wajib untuk logo, icon, teks, dan die-line kemasan. Tidak pecah pada skala gedung.
                </p>
              </div>

              <div className="p-4 bg-[#ffffff] border border-[#e6e6e6]">
                <div className="font-mono font-bold text-[14px] text-[#0051ae] mb-1">.PDF / PDF/X-1a</div>
                <div className="text-[12px] font-bold text-[#1a1a1a] mb-1">Press-Ready Siap Cetak</div>
                <p className="text-[12px] text-[#585f68] font-light leading-relaxed">
                  Sudah tertanam font outline, margin bleed 3mm, crop marks, serta pemisahan pelat warna CMYK standard percetakan.
                </p>
              </div>

              <div className="p-4 bg-[#ffffff] border border-[#e6e6e6]">
                <div className="font-mono font-bold text-[14px] text-[#0051ae] mb-1">.PNG / .SVG / .JPG</div>
                <div className="text-[12px] font-bold text-[#1a1a1a] mb-1">Digital &amp; Layar Tajam</div>
                <p className="text-[12px] text-[#585f68] font-light leading-relaxed">
                  Ekspor transparansi lossless untuk media sosial, website responsif, dan slide presentasi korporat.
                </p>
              </div>
            </div>
          </div>

          {/* Section 3: 4 Disiplin Prepress */}
          <div className="bg-[#f7f7f7] p-5 border border-[#e6e6e6]">
            <h4 className="text-[13px] font-bold text-[#1a1a1a] uppercase tracking-wider mb-3">
              4 Langkah Pengawasan Mutu Pre-Press
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-[13px] text-[#3c3c3c]">
              <div className="flex items-start gap-2">
                <span className="text-[#0051ae] font-bold">01.</span>
                <span><strong>Font Outlining:</strong> Seluruh tipografi diubah menjadi vector outline untuk menghindari font missing di mesin cetak.</span>
              </div>
              <div className="flex items-start gap-2">
                <span className="text-[#0051ae] font-bold">02.</span>
                <span><strong>Color Space Separation:</strong> Warna dipastikan 100% CMYK tanpa sisa palet RGB tak terkalibrasi.</span>
              </div>
              <div className="flex items-start gap-2">
                <span className="text-[#0051ae] font-bold">03.</span>
                <span><strong>Safety Zone &amp; Bleed:</strong> Teks penting berada minimal 4mm di dalam garis potong pisau potong.</span>
              </div>
              <div className="flex items-start gap-2">
                <span className="text-[#0051ae] font-bold">04.</span>
                <span><strong>Overprint &amp; Black 100%:</strong> Teks kecil menggunakan Rich Black atau K:100% murni untuk ketajaman baca maksimal.</span>
              </div>
            </div>
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
              onOpenConsultation();
            }}
            className="h-11 px-6 bg-[#1c69d4] hover:bg-[#0653b6] text-[#ffffff] font-bold text-[13px] uppercase tracking-wider"
          >
            Konsultasikan Kebutuhan Cetak Anda ›
          </button>
        </div>
      </div>
    </div>
  );
};
