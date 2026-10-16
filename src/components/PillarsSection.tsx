import React from 'react';

export const PillarsSection: React.FC = () => {
  return (
    <section id="standar-pengerjaan" className="w-full bg-[#f7f7f7] border-b border-[#e6e6e6]">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-8 py-16 sm:py-20">
        <div className="flex flex-col gap-2 mb-12">
          <span className="font-label-uppercase text-[13px] font-bold text-[#0051ae] uppercase tracking-[1.5px]">
            Atribut Kerja Studio
          </span>
          <h2 className="font-display-md text-2xl sm:text-4xl font-bold text-[#1a1a1a]">
            Tiga Pilar Standar Pengerjaan
          </h2>
          <p className="font-body-md text-base text-[#585f68] max-w-2xl font-light">
            Setiap layanan desain dikelola berdasarkan kesepakatan parameter kerja yang transparan dan dapat dipertanggungjawabkan teknisnya.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Pilar 1 */}
          <div className="bg-[#ffffff] p-6 sm:p-8 flex flex-col justify-between border border-[#e6e6e6] transition-all hover:border-[#1c69d4]">
            <div className="flex flex-col gap-4">
              <div className="w-12 h-12 bg-[#f7f7f7] flex items-center justify-center">
                <span className="material-symbols-outlined text-[#0051ae] text-[28px]">sync_alt</span>
              </div>
              <span className="font-label-uppercase text-[12px] font-bold text-[#585f68] tracking-[1.5px]">
                01 / ITERASI
              </span>
              <h3 className="font-title-lg text-[20px] font-bold text-[#1a1a1a]">
                Jumlah Revisi Terarah
              </h3>
              <p className="font-body-sm text-[14px] text-[#3c3c3c] font-light leading-relaxed">
                Iterasi revisi ditentukan secara jelas pada awal kesepakatan brief proyek. Proses terfokus pada ketepatan fungsi, hierarki keterbacaan, dan konsistensi pesan.
              </p>
            </div>
            <div className="mt-6 pt-3 bg-[#f7f7f7] px-4 py-2 border-l-2 border-[#0051ae]">
              <span className="font-caption text-[12px] text-[#585f68] font-medium">
                Parameter: Kesepakatan Awal Brief
              </span>
            </div>
          </div>

          {/* Pilar 2 */}
          <div className="bg-[#ffffff] p-6 sm:p-8 flex flex-col justify-between border border-[#e6e6e6] transition-all hover:border-[#1c69d4]">
            <div className="flex flex-col gap-4">
              <div className="w-12 h-12 bg-[#f7f7f7] flex items-center justify-center">
                <span className="material-symbols-outlined text-[#0051ae] text-[28px]">folder_zip</span>
              </div>
              <span className="font-label-uppercase text-[12px] font-bold text-[#585f68] tracking-[1.5px]">
                02 / KELENGKAPAN
              </span>
              <h3 className="font-title-lg text-[20px] font-bold text-[#1a1a1a]">
                File Akhir Siap Pakai
              </h3>
              <p className="font-body-sm text-[14px] text-[#3c3c3c] font-light leading-relaxed">
                Penyerahan berkas master lengkap: format vektor (AI/EPS) untuk skala cetak tak terbatas, PDF High-Resolution berstandar percetakan, serta PNG transparan dan JPG untuk kebutuhan digital.
              </p>
            </div>
            <div className="mt-6 pt-3 bg-[#f7f7f7] px-4 py-2 border-l-2 border-[#0051ae]">
              <span className="font-caption text-[12px] text-[#585f68] font-medium">
                Parameter: Vektor Master, PDF, PNG, JPG
              </span>
            </div>
          </div>

          {/* Pilar 3 */}
          <div className="bg-[#ffffff] p-6 sm:p-8 flex flex-col justify-between border border-[#e6e6e6] transition-all hover:border-[#1c69d4]">
            <div className="flex flex-col gap-4">
              <div className="w-12 h-12 bg-[#f7f7f7] flex items-center justify-center">
                <span className="material-symbols-outlined text-[#0051ae] text-[28px]">schedule</span>
              </div>
              <span className="font-label-uppercase text-[12px] font-bold text-[#585f68] tracking-[1.5px]">
                03 / JADWAL
              </span>
              <h3 className="font-title-lg text-[20px] font-bold text-[#1a1a1a]">
                Durasi Terjadwal
              </h3>
              <p className="font-body-sm text-[14px] text-[#3c3c3c] font-light leading-relaxed">
                Estimasi waktu pengerjaan dihitung cermat berdasarkan kompleksitas konsep dan muatan materi, memastikan setiap tahap eksekusi memiliki alokasi waktu yang matang.
              </p>
            </div>
            <div className="mt-6 pt-3 bg-[#f7f7f7] px-4 py-2 border-l-2 border-[#0051ae]">
              <span className="font-caption text-[12px] text-[#585f68] font-medium">
                Parameter: Terukur Sesuai Cakupan Proyek
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
