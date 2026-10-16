import React from 'react';

interface PreFooterCtaProps {
  onOpenConsultation: () => void;
  onScrollToCatalogue: () => void;
}

export const PreFooterCta: React.FC<PreFooterCtaProps> = ({
  onOpenConsultation,
  onScrollToCatalogue
}) => {
  return (
    <section id="konsultasi" className="w-full bg-[#1a2129] text-[#ffffff]">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-8 py-16 sm:py-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          {/* Left Column: Heading and CTAs */}
          <div className="lg:col-span-8 flex flex-col gap-6">
            <div className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 bg-[#ffffff]" aria-hidden="true" />
              <span className="font-label-uppercase text-[13px] font-bold text-[#bbbbbb] tracking-[1.5px] uppercase">
                Mulai Sesi Desain
              </span>
            </div>

            <h2 className="font-display-lg text-3xl sm:text-5xl font-bold text-[#ffffff] tracking-tight leading-[1.1]">
              Siap Membangun Visual yang Rapi &amp; Terarah?
            </h2>

            <p className="font-body-md text-base sm:text-[17px] font-light text-[#bbbbbb] max-w-2xl leading-relaxed">
              Sampaikan kebutuhan proyek Anda—mulai dari pembuatan logo baru, penyusunan branding kit, tata letak menu kuliner, hingga kemasan produk komersial. Kami bantu merumuskan solusi desain yang tepat sasaran.
            </p>

            <div className="pt-3 flex flex-wrap items-center gap-4">
              <button
                type="button"
                onClick={onOpenConsultation}
                className="inline-flex items-center justify-center h-12 px-8 bg-[#1c69d4] hover:bg-[#0653b6] text-[#ffffff] font-bold text-[14px] tracking-[0.5px] uppercase transition-colors"
              >
                Konsultasikan Layanan
              </button>
              <button
                type="button"
                onClick={onScrollToCatalogue}
                className="inline-flex items-center justify-center h-12 px-8 bg-transparent hover:bg-[#262e38] text-[#ffffff] border border-[#ffffff] font-bold text-[14px] tracking-[0.5px] uppercase transition-colors"
              >
                Telusuri Arsip Layanan
              </button>
            </div>
          </div>

          {/* Right Column: Slate Elevated Container */}
          <div className="lg:col-span-4 bg-[#262e38] p-6 sm:p-8 flex flex-col gap-5 border border-[#404750]">
            <span className="font-label-uppercase text-[12px] font-bold text-[#bbbbbb] uppercase tracking-[1.5px]">
              Informasi Konsultasi
            </span>

            <div className="flex flex-col gap-4 text-[#ffffff]">
              <div className="border-b border-[#3c444f] pb-3">
                <span className="font-caption text-[11px] text-[#bbbbbb] block uppercase tracking-wider">
                  Skema Penawaran
                </span>
                <span className="font-title-sm text-[15px] font-bold mt-0.5 block">
                  Kustomisasi Berdasarkan Brief
                </span>
              </div>

              <div className="border-b border-[#3c444f] pb-3">
                <span className="font-caption text-[11px] text-[#bbbbbb] block uppercase tracking-wider">
                  Jangkauan Pekerjaan
                </span>
                <span className="font-title-sm text-[15px] font-bold mt-0.5 block">
                  Cetak Offset, Sablon, &amp; Layar Digital
                </span>
              </div>

              <div>
                <span className="font-caption text-[11px] text-[#bbbbbb] block uppercase tracking-wider">
                  Format Berkas
                </span>
                <span className="font-title-sm text-[15px] font-bold mt-0.5 block">
                  Vector AI/EPS, PDF High-Res, PNG, JPG
                </span>
              </div>
            </div>

            <div className="pt-2">
              <span className="font-caption text-[12px] text-[#bbbbbb] italic leading-relaxed block">
                *Detail biaya dan linimasa ditentukan setelah rancangan brief disepakati bersama.
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
