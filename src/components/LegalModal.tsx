import React from 'react';

interface LegalModalProps {
  type: 'terms' | 'privacy' | null;
  onClose: () => void;
}

export const LegalModal: React.FC<LegalModalProps> = ({ type, onClose }) => {
  if (!type) return null;

  const isTerms = type === 'terms';

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="legal-modal-title"
      className="fixed inset-0 z-50 bg-[#000000]/60 flex items-center justify-center p-3 sm:p-6 overflow-y-auto"
    >
      <div className="bg-[#ffffff] w-full max-w-2xl my-auto border border-[#e6e6e6] shadow-2xl relative flex flex-col max-h-[85vh]">
        <div className="p-5 sm:p-6 bg-[#ffffff] border-b border-[#e6e6e6] flex items-center justify-between shrink-0">
          <div>
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 bg-[#0051ae]" />
              <span className="text-[12px] font-bold text-[#585f68] tracking-widest uppercase">
                Informasi Hukum &amp; Prosedural
              </span>
            </div>
            <h3 id="legal-modal-title" className="text-[20px] font-bold text-[#1a1a1a] mt-1">
              {isTerms ? 'Ketentuan Pengerjaan Studio' : 'Kebijakan Kerahasiaan Dokumen (NDA)'}
            </h3>
          </div>
          <button
            onClick={onClose}
            className="w-9 h-9 border border-[#e6e6e6] hover:bg-[#f7f7f7] flex items-center justify-center text-[#1a1a1a]"
            aria-label="Tutup Informasi Hukum"
          >
            ✕
          </button>
        </div>

        <div className="p-6 sm:p-8 overflow-y-auto flex-1 text-[14px] text-[#3c3c3c] font-light leading-relaxed space-y-4">
          {isTerms ? (
            <>
              <p>
                <strong>1. Ruang Lingkup Pengerjaan:</strong> Setiap karya desain dikembangkan sesuai dengan kerangka brief yang telah diverifikasi pada tahap Diskusi &amp; Brief.
              </p>
              <p>
                <strong>2. Hak Kekayaan Intelektual (HAKI):</strong> Setelah pelunasan termin pengerjaan diselesaikan, hak cipta komersial atas desain final menjadi milik klien sepenuhnya, sementara studio berhak menyertakan karya dalam arsip portofolio editorial studio.
              </p>
              <p>
                <strong>3. Termin Revisi:</strong> Kuota revisi yang disepakati mencakup penyesuaian detail elemen, tipografi, dan warna. Perubahan konsep total yang berlawanan dengan brief awal akan dihitung sebagai addendum proyek baru.
              </p>
              <p>
                <strong>4. File Master:</strong> Penyerahan master berkas meliputi format vektor (AI/EPS) dan format siap cetak (PDF Press-Quality 300 DPI) tanpa dependensi font (outlined text).
              </p>
            </>
          ) : (
            <>
              <p>
                <strong>1. Perlindungan Kerahasiaan Brief:</strong> Seluruh informasi bisnis, materi produk, rancangan formula, dan strategi pemasaran yang diserahkan oleh klien dilindungi dengan klausul kerahasiaan ketat.
              </p>
              <p>
                <strong>2. Penanganan Aset Digital:</strong> Berkas mentah, foto produk, dan identitas perusahaan hanya disimpan pada peladen aman internal studio selama proses pengerjaan berlangsung.
              </p>
              <p>
                <strong>3. Non-Disclosure Agreement (NDA):</strong> Studio bersedia menandatangani formulir NDA bilateral untuk proyek komersial skala korporat sebelum tahap diskusi teknis dimulai.
              </p>
            </>
          )}
        </div>

        <div className="p-4 sm:p-6 bg-[#fafafa] border-t border-[#e6e6e6] flex items-center justify-end shrink-0">
          <button
            type="button"
            onClick={onClose}
            className="h-11 px-6 bg-[#1a1a1a] hover:bg-[#303030] text-[#ffffff] font-bold text-[13px] uppercase tracking-wider"
          >
            Tutup
          </button>
        </div>
      </div>
    </div>
  );
};
