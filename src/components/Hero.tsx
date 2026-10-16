import React from 'react';

interface HeroProps {
  onOpenConsultation: () => void;
  onScrollToStandards: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenConsultation, onScrollToStandards }) => {
  return (
    <div id="hero" className="w-full flex flex-col">
      {/* Accent Strip Identifier */}
      <div className="w-full flex h-1" aria-hidden="true">
        <div className="w-1/3 bg-[#0066b1]" />
        <div className="w-1/3 bg-[#1c69d4]" />
        <div className="w-1/3 bg-[#d61c10]" />
      </div>

      {/* Hero Content Section */}
      <section className="w-full bg-[#ffffff] border-b border-[#e6e6e6]">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-8 py-16 sm:py-20">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            {/* Left Column: Headlines & Call to Actions */}
            <div className="lg:col-span-7 flex flex-col gap-6">
              <div className="flex items-center gap-2">
                <span className="w-2.5 h-2.5 bg-[#0051ae]" aria-hidden="true" />
                <span className="font-label-uppercase text-[13px] font-bold text-[#585f68] tracking-[1.5px] uppercase">
                  Studio Desain Grafis
                </span>
              </div>

              <h1 className="font-display-xl text-3xl sm:text-5xl lg:text-[60px] font-bold text-[#1a1a1a] tracking-tight leading-[1.08]">
                Jasa Desain Grafis Profesional &amp; Terarah
              </h1>

              <p className="font-body-md text-base sm:text-[17px] font-light text-[#3c3c3c] leading-[1.6] max-w-xl">
                Komitmen pengerjaan desain grafis yang rapi, teliti, dan terstruktur sesuai kebutuhan brand dan bisnis Anda. Setiap rancangan ditinjau secara disiplin dari konsep hingga kesiapan teknis file master.
              </p>

              <div className="flex flex-wrap items-center gap-4 pt-2">
                <button
                  onClick={onOpenConsultation}
                  className="inline-flex items-center justify-center h-12 px-8 bg-[#1c69d4] hover:bg-[#0653b6] text-[#ffffff] font-bold text-[14px] tracking-[0.5px] uppercase transition-colors"
                >
                  Konsultasikan Kebutuhan Desain
                </button>
                <button
                  onClick={onScrollToStandards}
                  className="inline-flex items-center justify-center h-12 px-8 bg-[#ffffff] hover:bg-[#f7f7f7] text-[#1a1a1a] border border-[#cccccc] font-bold text-[14px] tracking-[0.5px] uppercase transition-colors"
                >
                  Standar Studio
                </button>
              </div>

              <div className="pt-4 flex flex-wrap items-center gap-6 sm:gap-8 text-[#585f68]">
                <div className="flex items-center gap-2">
                  <span className="material-symbols-outlined text-[20px] text-[#0051ae]">check_box</span>
                  <span className="font-caption text-[13px] text-[#3c3c3c]">Format Siap Pakai &amp; Cetak</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="material-symbols-outlined text-[20px] text-[#0051ae]">check_box</span>
                  <span className="font-caption text-[13px] text-[#3c3c3c]">Spesifikasi Vektor Standar</span>
                </div>
              </div>
            </div>

            {/* Right Column: Hero Mockup Exhibition */}
            <div className="lg:col-span-5 relative">
              <div className="bg-[#f7f7f7] p-4 sm:p-5 border border-[#e6e6e6]">
                <div className="overflow-hidden bg-[#ebebeb]">
                  <img
                    className="w-full aspect-[4/3] object-cover transition-transform duration-500 hover:scale-[1.02]"
                    alt="Editorial graphic design showcase mockup displaying neat print stationery, minimalist corporate identity guide, and typography layout sheets on an architect studio desk in daylight with blue and deep slate neutral elements."
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuBB2qRuSa3matipynm8V8RgAOWaRpQ--GC4Ljl68gm5RjCmNGB74r3IkwAoAfrpkYvmjZa2aiaC9-tg1qB-MuZW4OJg-ynT4iQF8PBDGWQE0fEUH1dX64oAJLve4iIraH1hcFzF3R_Kniw_5DpYVKEm0iUh_X1lJYkKlob-GPzWhKs-SnUR87ADWXqSH4ztYcONPJc7XxzQ-PRsUVZApgc65iQ63E-WOVtBXf690ZvMohDgf_9U4w"
                  />
                </div>
                <div className="pt-4 flex items-center justify-between border-t border-[#e6e6e6] mt-4">
                  <span className="font-caption text-[12px] text-[#585f68] uppercase tracking-wider font-medium">
                    Arsip Rancangan &amp; Cetak
                  </span>
                  <span className="font-caption text-[12px] text-[#0051ae] font-bold tracking-wider">
                    PRESISI TINGGI
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
