import React, { useState, useEffect } from 'react';
import {
  SERVICES_CATALOGUE,
  BriefFormData,
  calculateEstimatedTimeline,
  generateDeliverablesList,
  generateBriefId,
  validateBriefForm
} from '../utils/briefCalculator.ts';

interface ConsultationModalProps {
  isOpen: boolean;
  onClose: () => void;
  preSelectedServiceId?: string;
  onInquirySubmitted: () => void;
}

export const ConsultationModal: React.FC<ConsultationModalProps> = ({
  isOpen,
  onClose,
  preSelectedServiceId,
  onInquirySubmitted
}) => {
  const [formData, setFormData] = useState<BriefFormData>({
    clientName: '',
    clientEmail: '',
    clientPhone: '',
    brandName: '',
    selectedServices: preSelectedServiceId ? [preSelectedServiceId] : ['desain-logo'],
    timelineUrgency: 'standard',
    projectBudgetEstimate: 'Sesuai Standar Studio',
    projectDescription: '',
    deliverableFormats: ['.AI', '.PDF High-Res', '.PNG']
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [submittedBrief, setSubmittedBrief] = useState<{
    id: string;
    createdAt: string;
    data: BriefFormData;
  } | null>(null);
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    if (preSelectedServiceId) {
      setFormData((prev) => ({
        ...prev,
        selectedServices: prev.selectedServices.includes(preSelectedServiceId)
          ? prev.selectedServices
          : [...prev.selectedServices, preSelectedServiceId]
      }));
    }
  }, [preSelectedServiceId]);

  if (!isOpen) return null;

  const toggleService = (id: string) => {
    setFormData((prev) => {
      const exists = prev.selectedServices.includes(id);
      let updated: string[];
      if (exists) {
        updated = prev.selectedServices.filter((s) => s !== id);
      } else {
        updated = [...prev.selectedServices, id];
      }
      return { ...prev, selectedServices: updated };
    });
  };

  const toggleFormat = (fmt: string) => {
    setFormData((prev) => {
      const exists = prev.deliverableFormats.includes(fmt);
      return {
        ...prev,
        deliverableFormats: exists
          ? prev.deliverableFormats.filter((f) => f !== fmt)
          : [...prev.deliverableFormats, fmt]
      };
    });
  };

  const timeline = calculateEstimatedTimeline(formData.selectedServices, formData.timelineUrgency);
  const deliverables = generateDeliverablesList(formData.selectedServices);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const validation = validateBriefForm(formData);
    if (!validation.isValid) {
      setErrors(validation.errors);
      return;
    }

    setErrors({});
    const briefId = generateBriefId();
    const newInquiry = {
      id: briefId,
      createdAt: new Date().toLocaleDateString('id-ID', {
        day: 'numeric',
        month: 'long',
        year: 'numeric',
        hour: '2-digit',
        minute: '2-digit'
      }),
      data: formData,
      status: 'Draf Diterima — Menunggu Review Studio'
    };

    // Save to localStorage
    try {
      const existing = JSON.parse(localStorage.getItem('tdc_inquiries') || '[]');
      existing.unshift(newInquiry);
      localStorage.setItem('tdc_inquiries', JSON.stringify(existing));
    } catch {
      // Local storage fallback
    }

    setSubmittedBrief(newInquiry);
    onInquirySubmitted();
  };

  const copyBriefText = () => {
    if (!submittedBrief) return;
    const srvNames = SERVICES_CATALOGUE.filter((s) =>
      submittedBrief.data.selectedServices.includes(s.id)
    )
      .map((s) => s.name)
      .join(', ');

    const text = `*KONSULTASI BRIEF DESAIN — TEDUH DALAM CERITA*\n` +
      `No. Ref: ${submittedBrief.id}\n` +
      `Tanggal: ${submittedBrief.createdAt}\n\n` +
      `• Klien: ${submittedBrief.data.clientName} (${submittedBrief.data.clientEmail})\n` +
      `• Brand: ${submittedBrief.data.brandName}\n` +
      `• Layanan: ${srvNames}\n` +
      `• Estimasi Waktu: ${timeline.formatted}\n` +
      `• Format Master: ${submittedBrief.data.deliverableFormats.join(', ')}\n\n` +
      `*Deskripsi Kebutuhan:*\n${submittedBrief.data.projectDescription}`;

    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="brief-modal-title"
      className="fixed inset-0 z-50 bg-[#000000]/60 flex items-center justify-center p-3 sm:p-6 overflow-y-auto"
    >
      <div className="bg-[#ffffff] w-full max-w-3xl my-auto border border-[#e6e6e6] shadow-2xl relative flex flex-col max-h-[92vh]">
        {/* Header */}
        <div className="p-5 sm:p-6 bg-[#ffffff] border-b border-[#e6e6e6] flex items-center justify-between shrink-0">
          <div>
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 bg-[#0051ae]" />
              <span className="text-[12px] font-bold text-[#585f68] tracking-widest uppercase">
                Formulir Kerangka Proyek
              </span>
            </div>
            <h3 id="brief-modal-title" className="text-[20px] font-bold text-[#1a1a1a] mt-1">
              {submittedBrief ? 'Ringkasan Draf Brief Proyek' : 'Konsultasi Kebutuhan Desain Grafis'}
            </h3>
          </div>
          <button
            onClick={onClose}
            className="w-9 h-9 border border-[#e6e6e6] hover:bg-[#f7f7f7] flex items-center justify-center text-[#1a1a1a]"
            aria-label="Tutup Formulir Konsultasi"
          >
            ✕
          </button>
        </div>

        {/* Content Body */}
        <div className="p-5 sm:p-8 overflow-y-auto flex-1">
          {submittedBrief ? (
            /* Success Receipt View */
            <div className="flex flex-col gap-6">
              <div className="bg-[#f7f7f7] p-5 border-l-4 border-[#0051ae]">
                <div className="flex items-center justify-between">
                  <span className="text-[12px] font-bold text-[#585f68] uppercase tracking-wider">
                    Nomor Referensi Draf
                  </span>
                  <span className="text-[11px] font-bold text-[#0051ae] bg-[#d8e2ff] px-2.5 py-0.5">
                    TERKIRIM KE ARSIP
                  </span>
                </div>
                <div className="text-[24px] font-bold text-[#1a1a1a] tracking-tight mt-1">
                  {submittedBrief.id}
                </div>
                <p className="text-[13px] text-[#585f68] font-light mt-1">
                  Didaftarkan pada {submittedBrief.createdAt}. Kerangka proyek Anda siap dibahas bersama desainer studio.
                </p>
              </div>

              <div className="bg-[#fafafa] p-5 border border-[#e6e6e6] flex flex-col gap-3">
                <span className="text-[12px] font-bold text-[#1a1a1a] uppercase tracking-wider">
                  Rincian Penugasan
                </span>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-[13px] border-t border-[#e6e6e6] pt-3">
                  <div>
                    <span className="text-[#585f68] block">Nama Klien &amp; Email:</span>
                    <span className="font-bold text-[#1a1a1a]">
                      {submittedBrief.data.clientName} ({submittedBrief.data.clientEmail})
                    </span>
                  </div>
                  <div>
                    <span className="text-[#585f68] block">Nama Brand / Proyek:</span>
                    <span className="font-bold text-[#1a1a1a]">{submittedBrief.data.brandName}</span>
                  </div>
                  <div>
                    <span className="text-[#585f68] block">Layanan Terpilih:</span>
                    <span className="font-bold text-[#1a1a1a]">
                      {SERVICES_CATALOGUE.filter((s) =>
                        submittedBrief.data.selectedServices.includes(s.id)
                      )
                        .map((s) => s.name)
                        .join(', ')}
                    </span>
                  </div>
                  <div>
                    <span className="text-[#585f68] block">Estimasi Jadwal Pengerjaan:</span>
                    <span className="font-bold text-[#0051ae]">{timeline.formatted}</span>
                  </div>
                </div>

                <div className="border-t border-[#e6e6e6] pt-3 text-[13px]">
                  <span className="text-[#585f68] block mb-1">Catatan Kebutuhan:</span>
                  <p className="text-[#3c3c3c] font-light bg-[#ffffff] p-3 border border-[#e6e6e6]">
                    {submittedBrief.data.projectDescription}
                  </p>
                </div>
              </div>

              <div className="flex flex-wrap items-center gap-3 pt-2">
                <button
                  type="button"
                  onClick={copyBriefText}
                  className="h-11 px-6 bg-[#0051ae] hover:bg-[#0653b6] text-[#ffffff] font-bold text-[13px] uppercase tracking-wider flex items-center gap-2"
                >
                  <span className="material-symbols-outlined text-[18px]">
                    {copied ? 'check' : 'content_copy'}
                  </span>
                  <span>{copied ? 'Tersalin ke Clipboard' : 'Salin Ringkasan Brief'}</span>
                </button>
                <button
                  type="button"
                  onClick={() => {
                    setSubmittedBrief(null);
                    onClose();
                  }}
                  className="h-11 px-6 bg-[#ffffff] hover:bg-[#f7f7f7] border border-[#cccccc] text-[#1a1a1a] font-bold text-[13px] uppercase tracking-wider"
                >
                  Selesai
                </button>
              </div>
            </div>
          ) : (
            /* Interactive Consultation Form */
            <form onSubmit={handleSubmit} className="flex flex-col gap-6">
              {/* Step 1: Select Services */}
              <div>
                <label className="text-[13px] font-bold text-[#1a1a1a] uppercase tracking-wider block mb-2">
                  1. Pilih Bidang Layanan Desain <span className="text-[#ad0200]">*</span>
                </label>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                  {SERVICES_CATALOGUE.map((service) => {
                    const isChecked = formData.selectedServices.includes(service.id);
                    return (
                      <button
                        type="button"
                        key={service.id}
                        onClick={() => toggleService(service.id)}
                        className={`p-3 text-left border flex items-center justify-between transition-colors ${
                          isChecked
                            ? 'border-[#0051ae] bg-[#d8e2ff]/30 text-[#1a1a1a] ring-1 ring-[#0051ae]'
                            : 'border-[#e6e6e6] bg-[#ffffff] hover:border-[#cccccc]'
                        }`}
                      >
                        <div className="flex items-center gap-2.5">
                          <span
                            className={`w-4 h-4 border flex items-center justify-center text-[10px] ${
                              isChecked
                                ? 'bg-[#0051ae] border-[#0051ae] text-[#ffffff]'
                                : 'border-[#cccccc] bg-[#ffffff]'
                            }`}
                          >
                            {isChecked && '✓'}
                          </span>
                          <span className="text-[13px] font-bold">{service.name}</span>
                        </div>
                        <span className="text-[11px] text-[#585f68] uppercase font-medium">
                          {service.number}
                        </span>
                      </button>
                    );
                  })}
                </div>
                {errors.selectedServices && (
                  <span className="text-[#dc2626] text-[12px] mt-1 block">
                    {errors.selectedServices}
                  </span>
                )}
              </div>

              {/* Step 2: Client & Brand Identity */}
              <div>
                <label className="text-[13px] font-bold text-[#1a1a1a] uppercase tracking-wider block mb-2">
                  2. Informasi Pemohon &amp; Entitas Brand
                </label>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="text-[12px] text-[#585f68] block mb-1">
                      Nama Lengkap Anda <span className="text-[#ad0200]">*</span>
                    </label>
                    <input
                      type="text"
                      value={formData.clientName}
                      onChange={(e) => setFormData({ ...formData, clientName: e.target.value })}
                      placeholder="e.g. Khrisna Kusuma"
                      className="w-full h-11 px-3 border border-[#e6e6e6] focus:border-[#1a1a1a] focus:outline-none text-[14px]"
                    />
                    {errors.clientName && (
                      <span className="text-[#dc2626] text-[11px] mt-0.5 block">
                        {errors.clientName}
                      </span>
                    )}
                  </div>

                  <div>
                    <label className="text-[12px] text-[#585f68] block mb-1">
                      Email Kontak Aktif <span className="text-[#ad0200]">*</span>
                    </label>
                    <input
                      type="email"
                      value={formData.clientEmail}
                      onChange={(e) => setFormData({ ...formData, clientEmail: e.target.value })}
                      placeholder="e.g. khrisna@domain.com"
                      className="w-full h-11 px-3 border border-[#e6e6e6] focus:border-[#1a1a1a] focus:outline-none text-[14px]"
                    />
                    {errors.clientEmail && (
                      <span className="text-[#dc2626] text-[11px] mt-0.5 block">
                        {errors.clientEmail}
                      </span>
                    )}
                  </div>

                  <div>
                    <label className="text-[12px] text-[#585f68] block mb-1">
                      Nomor WhatsApp / Telepon
                    </label>
                    <input
                      type="tel"
                      value={formData.clientPhone}
                      onChange={(e) => setFormData({ ...formData, clientPhone: e.target.value })}
                      placeholder="+62 812-xxxx-xxxx"
                      className="w-full h-11 px-3 border border-[#e6e6e6] focus:border-[#1a1a1a] focus:outline-none text-[14px]"
                    />
                  </div>

                  <div>
                    <label className="text-[12px] text-[#585f68] block mb-1">
                      Nama Brand / Usaha / Proyek <span className="text-[#ad0200]">*</span>
                    </label>
                    <input
                      type="text"
                      value={formData.brandName}
                      onChange={(e) => setFormData({ ...formData, brandName: e.target.value })}
                      placeholder="e.g. Kopi Teduh Nusantara"
                      className="w-full h-11 px-3 border border-[#e6e6e6] focus:border-[#1a1a1a] focus:outline-none text-[14px]"
                    />
                    {errors.brandName && (
                      <span className="text-[#dc2626] text-[11px] mt-0.5 block">
                        {errors.brandName}
                      </span>
                    )}
                  </div>
                </div>
              </div>

              {/* Step 3: Urgency & Deliverable Formats */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="text-[12px] font-bold text-[#1a1a1a] uppercase tracking-wider block mb-1.5">
                    Target Linimasa
                  </label>
                  <div className="flex flex-col gap-1.5">
                    {[
                      { id: 'standard', label: 'Standar Terjadwal (Rekomendasi)' },
                      { id: 'express', label: 'Prioritas Cepat (Ekspres)' },
                      { id: 'relaxed', label: 'Fleksibel / Jangka Panjang' }
                    ].map((item) => (
                      <label
                        key={item.id}
                        className="flex items-center gap-2 text-[13px] text-[#3c3c3c] cursor-pointer"
                      >
                        <input
                          type="radio"
                          name="urgency"
                          checked={formData.timelineUrgency === item.id}
                          onChange={() =>
                            setFormData({
                              ...formData,
                              timelineUrgency: item.id as 'standard' | 'express' | 'relaxed'
                            })
                          }
                          className="accent-[#0051ae]"
                        />
                        <span>{item.label}</span>
                      </label>
                    ))}
                  </div>
                </div>

                <div>
                  <label className="text-[12px] font-bold text-[#1a1a1a] uppercase tracking-wider block mb-1.5">
                    Kebutuhan Format Berkas
                  </label>
                  <div className="flex flex-wrap gap-2">
                    {['.AI', '.EPS', '.PDF High-Res', '.PNG', '.JPG', '.SVG'].map((fmt) => {
                      const active = formData.deliverableFormats.includes(fmt);
                      return (
                        <button
                          type="button"
                          key={fmt}
                          onClick={() => toggleFormat(fmt)}
                          className={`h-7 px-2.5 text-[11px] font-bold tracking-wider uppercase border transition-colors ${
                            active
                              ? 'bg-[#1a1a1a] text-[#ffffff] border-[#1a1a1a]'
                              : 'bg-[#ffffff] text-[#585f68] border-[#cccccc]'
                          }`}
                        >
                          {fmt}
                        </button>
                      );
                    })}
                  </div>
                </div>
              </div>

              {/* Step 4: Description */}
              <div>
                <label className="text-[13px] font-bold text-[#1a1a1a] uppercase tracking-wider block mb-1">
                  3. Ringkasan Kebutuhan &amp; Spesifikasi Khusus{' '}
                  <span className="text-[#ad0200]">*</span>
                </label>
                <textarea
                  rows={4}
                  value={formData.projectDescription}
                  onChange={(e) =>
                    setFormData({ ...formData, projectDescription: e.target.value })
                  }
                  placeholder="Deskripsikan latar belakang proyek, karakter brand yang diinginkan, media cetak/layar yang akan digunakan, atau referensi visual yang disukai..."
                  className="w-full p-3 border border-[#e6e6e6] focus:border-[#1a1a1a] focus:outline-none text-[14px]"
                />
                {errors.projectDescription && (
                  <span className="text-[#dc2626] text-[11px] mt-0.5 block">
                    {errors.projectDescription}
                  </span>
                )}
              </div>

              {/* Dynamic Live Parameter Calculation Box */}
              <div className="p-4 bg-[#f7f7f7] border border-[#e6e6e6] flex flex-col gap-2">
                <div className="flex items-center justify-between text-[13px]">
                  <span className="text-[#585f68]">Estimasi Durasi Studio:</span>
                  <span className="font-bold text-[#0051ae]">{timeline.formatted}</span>
                </div>
                <div className="flex items-center justify-between text-[13px]">
                  <span className="text-[#585f68]">Total Deliverables Inti:</span>
                  <span className="font-bold text-[#1a1a1a]">{deliverables.length} Berkas Aset</span>
                </div>
              </div>
            </form>
          )}
        </div>

        {/* Modal Sticky Footer for Unsubmitted Form */}
        {!submittedBrief && (
          <div className="p-4 sm:p-5 bg-[#fafafa] border-t border-[#e6e6e6] flex items-center justify-between shrink-0">
            <div className="hidden sm:block text-[12px] text-[#585f68]">
              Linimasa: <span className="font-bold text-[#0051ae]">{timeline.formatted}</span>
            </div>
            <div className="flex items-center gap-3 w-full sm:w-auto justify-end">
              <button
                type="button"
                onClick={onClose}
                className="h-11 px-5 bg-[#ffffff] hover:bg-[#f7f7f7] border border-[#cccccc] text-[#1a1a1a] font-bold text-[13px] uppercase tracking-wider"
              >
                Batal
              </button>
              <button
                type="button"
                onClick={handleSubmit}
                className="h-11 px-6 bg-[#1c69d4] hover:bg-[#0653b6] text-[#ffffff] font-bold text-[13px] tracking-wider uppercase transition-colors"
              >
                Kirimkan Kerangka Proyek
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
