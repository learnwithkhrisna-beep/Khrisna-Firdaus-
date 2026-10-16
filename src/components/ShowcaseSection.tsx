import React from 'react';

interface ShowcaseSectionProps {
  onOpenSpecs: () => void;
}

export const ShowcaseSection: React.FC<ShowcaseSectionProps> = ({ onOpenSpecs }) => {
  return (
    <section className="w-full bg-[#f7f7f7] border-b border-[#e6e6e6]">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-8 py-16 sm:py-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          {/* Left Column */}
          <div className="lg:col-span-5 flex flex-col gap-6">
            <span className="font-label-uppercase text-[13px] font-bold text-[#0051ae] uppercase tracking-[1.5px]">
              Presisi Format &amp; Eksekusi
            </span>
            <h2 className="font-display-md text-2xl sm:text-4xl font-bold text-[#1a1a1a]">
              Dari Format Vektor Hingga Hasil Fisik
            </h2>
            <p className="font-body-md text-base text-[#3c3c3c] font-light leading-relaxed">
              Kami memastikan rancangan visual Anda tidak sekadar tampak baik di layar presentasi, melainkan terstruktur rapi pada jalur cetak separasi warna, dimensi die-cut, maupun kompresi media digital.
            </p>

            <div className="flex flex-col gap-4 pt-2">
              <div className="p-4 sm:p-5 bg-[#ffffff] flex items-start gap-4 border border-[#e6e6e6]">
                <span className="material-symbols-outlined text-[#0051ae] text-[26px] shrink-0 mt-0.5">
                  architecture
                </span>
                <div>
                  <span className="font-title-sm text-[16px] font-bold text-[#1a1a1a] block">
                    Ketepatan Tipografi &amp; Grid
                  </span>
                  <span className="font-body-sm text-[14px] text-[#585f68] font-light leading-relaxed">
                    Penyusunan tata letak yang berpedoman pada keterbacaan proporsional dan hierarki data.
                  </span>
                </div>
              </div>

              <div className="p-4 sm:p-5 bg-[#ffffff] flex items-start gap-4 border border-[#e6e6e6]">
                <span className="material-symbols-outlined text-[#0051ae] text-[26px] shrink-0 mt-0.5">
                  tune
                </span>
                <div>
                  <span className="font-title-sm text-[16px] font-bold text-[#1a1a1a] block">
                    Kalibrasi Warna Cetak &amp; Layar
                  </span>
                  <span className="font-body-sm text-[14px] text-[#585f68] font-light leading-relaxed">
                    Pemisahan profil warna CMYK untuk cetak presisi dan RGB untuk kenyamanan layar perangkat.
                  </span>
                </div>
              </div>
            </div>

            <div className="pt-2">
              <button
                onClick={onOpenSpecs}
                className="inline-flex items-center gap-2 text-[14px] font-bold text-[#0051ae] hover:text-[#0653b6] uppercase tracking-[0.5px]"
              >
                <span>Pelajari Standar Pre-Press &amp; Resolusi</span>
                <span className="text-lg">›</span>
              </button>
            </div>
          </div>

          {/* Right Column: Editorial Showcase Matrix */}
          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-6 items-start">
            <div className="flex flex-col gap-4">
              <div className="bg-[#ffffff] p-4 border border-[#e6e6e6]">
                <div className="overflow-hidden bg-[#ebebeb]">
                  <img
                    className="w-full aspect-[4/5] object-cover transition-transform duration-500 hover:scale-[1.02]"
                    alt="Editorial overhead photograph of brand identity packaging box layout with clear measurement indicators, color swatches in blue and red tones, and craft design tools."
                    loading="lazy"
                    decoding="async"
                    referrerPolicy="no-referrer"
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuDpBO1KIeYi6zcJ7ZXy9-AYPqrtLWZLWLTf47iyH2fov1UcvndTZ8jj58VSIgEKCbQWT-dDVmPnPzIuBnUidGeVx48SuQ8sEJh0ZgZMb6GJLar9pNwexvEaC6kQcujn5zd0QPeBdHzpmm_mLBikl6d03U3O9t_eYn-kDryX9sdr3t0uGLbMRbQ2mKy9TKnjfoWbAOODa24hIFpvMz0sYWCSb4gOmOn96UVZHPfYP7gLKcavm5sJJQ"
                  />
                </div>
                <span className="font-caption text-[12px] text-[#585f68] block pt-3 font-medium">
                  Spesifikasi Kemasan &amp; Label
                </span>
              </div>
            </div>

            <div className="flex flex-col gap-4 sm:pt-12">
              <div className="bg-[#ffffff] p-4 border border-[#e6e6e6]">
                <div className="overflow-hidden bg-[#ebebeb]">
                  <img
                    className="w-full aspect-[4/5] object-cover transition-transform duration-500 hover:scale-[1.02]"
                    alt="Minimalist typography poster layout hung neatly on an exhibition concrete wall, displaying clean Swiss-style layout hierarchy with precise margins and editorial spacing."
                    loading="lazy"
                    decoding="async"
                    referrerPolicy="no-referrer"
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuBhY7N7COuVLEcpUSLakvsa7uHG7GA4dlrhM2dFCpWWUe5z9l1d_q2ZhQ6KYJZydKRrk404UWEp-76rfT0mZde6YWVqBI9ao_vSp1R1O0fB8mdxiCY0zzfbjey3YgQiBfsp5INRbplPTvIFaRALp2UHD098hwaG2vY9DYkse8YWqFDwOVrMBJz4G8g_yESGeU0333QGXwij6ADqYNBmyn5T4f1xXP9-l-oYgztq8ACpbi3cCGb3JA"
                  />
                </div>
                <span className="font-caption text-[12px] text-[#585f68] block pt-3 font-medium">
                  Tata Letak Publikasi &amp; Display
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
