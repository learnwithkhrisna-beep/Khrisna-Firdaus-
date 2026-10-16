import React, { useState } from 'react';

interface WorkflowSectionProps {
  onStartBrief: () => void;
}

export const WorkflowSection: React.FC<WorkflowSectionProps> = ({ onStartBrief }) => {
  const [selectedPhase, setSelectedPhase] = useState<number>(0);

  const phases = [
    {
      step: '01',
      title: 'Diskusi & Brief',
      phase: 'Fase Pengumpulan',
      summary: 'Pengumpulan data, identifikasi kebutuhan desain, referensi visual, serta penentuan cakupan teknis yang diinginkan.',
      details: [
        'Wawancara orientasi tujuan bisnis dan target audiens',
        'Penyusunan Creative Brief & penentuan key deliverables',
        'Penetapan batasan teknis (dimensi cetak, profil warna, resolusi)',
        'Kesepakatan jadwal kerja dan batas termin revisi'
      ],
      clientAction: 'Mengisi form brief dan menyertakan materi aset (teks/foto produk).'
    },
    {
      step: '02',
      title: 'Eksplorasi Konsep',
      phase: 'Fase Pengembangan',
      summary: 'Perancangan draf konsep desain dan tata letak berdasarkan panduan brief yang telah disepakati bersama.',
      details: [
        'Riset visual, moodboard, dan eksplorasi tipografi',
        'Pembuatan 2–3 alternatif arah konsep visual utama',
        'Penyusunan komposisi grid dan hierarki informasi',
        'Presentasi komprehensif via lembar draf digital'
      ],
      clientAction: 'Meninjau alternatif konsep dan menentukan arah visual terpilih.'
    },
    {
      step: '03',
      title: 'Review & Revisi',
      phase: 'Fase Penyempurnaan',
      summary: 'Sesi peninjauan draf bersama klien, disusul penyempurnaan detail elemen sesuai jatah revisi yang disepakati.',
      details: [
        'Konsolidasi catatan koreksi agar terarah dan efisien',
        'Penyelarasan palet warna, kerning teks, dan kontras',
        'Verifikasi batas bleed, margin potong, dan barcode',
        'Validasi kecocokan tampilan digital dan simulasi cetak'
      ],
      clientAction: 'Memberikan feedback terpusat sesuai kuota revisi.'
    },
    {
      step: '04',
      title: 'Penyerahan Master',
      phase: 'Fase Finalisasi',
      summary: 'Pengemasan berkas akhir menyeluruh (vektor asli, format siap cetak, dan digital) siap digunakan secara mandiri.',
      details: [
        'Export berkas vektor scalable (.AI, .EPS, .SVG)',
        'Penyusunan berkas PDF Press-Ready dengan bleed 3mm',
        'Penyiapan paket aset digital (.PNG transparan & .JPG web)',
        'Pemberian arsip cloud drive yang tertata rapi'
      ],
      clientAction: 'Pemeriksaan kelengkapan berkas master dan pengarsipan internal.'
    }
  ];

  return (
    <section id="alur-kerja" className="w-full bg-[#ffffff] border-b border-[#e6e6e6]">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-8 py-16 sm:py-20">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div className="flex flex-col gap-2">
            <span className="font-label-uppercase text-[13px] font-bold text-[#0051ae] uppercase tracking-[1.5px]">
              Metode Kolaborasi
            </span>
            <h2 className="font-display-md text-2xl sm:text-4xl font-bold text-[#1a1a1a]">
              Tahapan Pengerjaan Proyek
            </h2>
            <p className="font-body-md text-base text-[#585f68] max-w-xl font-light">
              Alur kerja yang dirancang untuk menjaga kejelasan komunikasi dan keterukuran hasil di setiap fase pembuatan desain.
            </p>
          </div>

          <button
            onClick={onStartBrief}
            className="inline-flex items-center justify-center h-11 px-6 bg-[#1a1a1a] hover:bg-[#303030] text-[#ffffff] font-bold text-[13px] tracking-wider uppercase transition-colors self-start md:self-auto"
          >
            Mulai Dari Fase 01
          </button>
        </div>

        {/* 4 Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {phases.map((item, index) => {
            const isSelected = selectedPhase === index;
            return (
              <div
                key={item.step}
                onClick={() => setSelectedPhase(index)}
                className={`bg-[#f7f7f7] p-6 flex flex-col justify-between border cursor-pointer transition-all ${
                  isSelected
                    ? 'border-[#0051ae] bg-[#ffffff] shadow-sm ring-1 ring-[#0051ae]'
                    : 'border-[#e6e6e6] hover:border-[#cccccc]'
                }`}
              >
                <div className="flex flex-col gap-3">
                  <div className="flex items-center justify-between">
                    <div className="w-10 h-10 bg-[#ffffff] border border-[#e6e6e6] text-[#1a1a1a] font-bold text-[16px] flex items-center justify-center">
                      {item.step}
                    </div>
                    {isSelected && (
                      <span className="text-[11px] font-bold text-[#0051ae] uppercase tracking-wider bg-[#d8e2ff] px-2 py-0.5">
                        Aktif
                      </span>
                    )}
                  </div>

                  <h3 className="font-title-md text-[18px] font-bold text-[#1a1a1a] mt-2">
                    {item.title}
                  </h3>
                  <p className="font-body-sm text-[14px] text-[#585f68] font-light leading-relaxed">
                    {item.summary}
                  </p>
                </div>

                <div className="pt-6 border-t border-[#e6e6e6] mt-4 flex items-center justify-between">
                  <span className="font-caption text-[12px] text-[#0051ae] uppercase font-bold tracking-wider">
                    {item.phase}
                  </span>
                  <span className="text-[13px] text-[#585f68]">
                    {isSelected ? '▼' : '›'}
                  </span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Expanded Deep-Dive for the Selected Phase */}
        <div className="mt-8 bg-[#fafafa] border border-[#e6e6e6] p-6 sm:p-8">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-4 border-b border-[#e6e6e6]">
            <div>
              <span className="text-[12px] font-bold text-[#0051ae] uppercase tracking-widest block">
                Penjelasan Mendalam — {phases[selectedPhase].phase}
              </span>
              <h4 className="text-[20px] font-bold text-[#1a1a1a] mt-1">
                Langkah {phases[selectedPhase].step}: {phases[selectedPhase].title}
              </h4>
            </div>
            <div className="bg-[#ffffff] px-4 py-2 border border-[#e6e6e6] text-[13px] text-[#585f68]">
              Peran Klien:{' '}
              <span className="font-bold text-[#1a1a1a]">
                {phases[selectedPhase].clientAction}
              </span>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-6">
            <div>
              <h5 className="text-[14px] font-bold uppercase tracking-wider text-[#1a1a1a] mb-3">
                Aktivitas &amp; Eksekusi Teknis Studio:
              </h5>
              <ul className="space-y-2">
                {phases[selectedPhase].details.map((detail, idx) => (
                  <li key={idx} className="flex items-start gap-2.5 text-[14px] text-[#3c3c3c] font-light">
                    <span className="text-[#0051ae] font-bold mt-0.5">•</span>
                    <span>{detail}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-[#ffffff] p-5 border border-[#e6e6e6] flex flex-col justify-between">
              <div>
                <span className="text-[12px] font-bold uppercase tracking-wider text-[#585f68] block">
                  Standar Mutu Teduh dalam cerita
                </span>
                <p className="text-[13px] text-[#3c3c3c] font-light mt-2 leading-relaxed">
                  Kami tidak melanjutkan ke tahap berikutnya sebelum parameter kunci pada fase ini diverifikasi secara tertulis dan disetujui kedua belah pihak.
                </p>
              </div>
              <div className="pt-4 flex items-center justify-between border-t border-[#e6e6e6] mt-4">
                <span className="text-[12px] text-[#585f68]">
                  Transparansi 100% tanpa biaya tersembunyi
                </span>
                <button
                  onClick={onStartBrief}
                  className="text-[12px] font-bold text-[#0051ae] hover:underline uppercase tracking-wider"
                >
                  Konsultasikan Brief Sekarang ›
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
