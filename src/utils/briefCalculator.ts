/**
 * Core services data, technical parameters, and pure calculation logic for
 * Teduh dalam cerita studio brief management and technical specs.
 */

export interface ServiceDetail {
  id: string;
  number: string;
  name: string;
  category: 'identitas' | 'promosi' | 'kemasan' | 'publikasi';
  description: string;
  icon: string;
  revisi: string;
  durasi: string;
  fileAkhir: string;
  baseDays: number;
  colorProfiles: string[];
  recommendedDpi: number;
  standardFormats: string[];
  deliverables: string[];
  guidelines: string;
  colSpan?: boolean;
}

export const SERVICES_CATALOGUE: ServiceDetail[] = [
  {
    id: 'desain-logo',
    number: 'LAYANAN 01',
    name: 'Desain Logo',
    category: 'identitas',
    description: 'Identitas visual primer yang khas, fleksibel pada ragam media, dan berdaya ingat tinggi untuk menegaskan karakter entitas Anda.',
    icon: 'interests',
    revisi: 'Sesuai brief',
    durasi: 'Estimasi terukur',
    fileAkhir: 'AI, EPS, PDF, PNG, JPG',
    baseDays: 7,
    colorProfiles: ['CMYK FOGRA39', 'RGB sRGB IEC61966'],
    recommendedDpi: 300,
    standardFormats: ['.AI (Vector)', '.EPS', '.PDF Master', '.PNG Transparan', '.JPG High-Res'],
    deliverables: [
      'Master Vector Scalable (Adobe Illustrator & EPS)',
      'High-Resolution PDF (Press Ready)',
      'PNG Logo Transparent (Dark & Light Variations)',
      'Icon & Favicon Asset Kit',
      'Ringkasan Skema Warna & Safe Zone'
    ],
    guidelines: 'Setiap logo diuji pada rasio kontras 1:1, ukuran favicon 16px, hingga aplikasi baliho skala besar.'
  },
  {
    id: 'branding-kit',
    number: 'LAYANAN 02',
    name: 'Branding Kit',
    category: 'identitas',
    description: 'Sistem identitas visual menyeluruh mencakup aturan logo, palet warna primer/sekunder, tipografi terstruktur, dan panduan elemen grafis.',
    icon: 'palette',
    revisi: 'Sesuai brief',
    durasi: 'Estimasi terukur',
    fileAkhir: 'PDF Guide, Aset Vektor',
    baseDays: 14,
    colorProfiles: ['CMYK Pantone Matching', 'RGB Digital', 'HEX Color Codes'],
    recommendedDpi: 300,
    standardFormats: ['.PDF Brand Guidelines', '.AI Master Asset', '.SVG', '.OTF/TTF Typo Guide'],
    deliverables: [
      'Buku Panduan Brand (PDF Brand Guidelines 20+ Halaman)',
      'Aturan Penggunaan Logo & Larangan Modifikasi',
      'Hierarki Tipografi Primer & Sekunder',
      'Palet Warna Utama, Sekunder, dan Rasio Kontras Web',
      'Pustaka Pola & Elemen Grafis Vektor Pendukung'
    ],
    guidelines: 'Memastikan konsistensi komunikasi visual di seluruh titik temu brand (touchpoints).'
  },
  {
    id: 'desain-menu',
    number: 'LAYANAN 03',
    name: 'Desain Menu',
    category: 'publikasi',
    description: 'Tata letak menu komersial dan kuliner yang rapi, ergonomis bagi pembaca, meningkatkan daya tarik sajian, serta siap cetak.',
    icon: 'restaurant_menu',
    revisi: 'Sesuai brief',
    durasi: 'Estimasi terukur',
    fileAkhir: 'PDF High-Res, Vektor AI',
    baseDays: 5,
    colorProfiles: ['CMYK ISO Coated v2', 'RGB Digital Menu Tablet'],
    recommendedDpi: 300,
    standardFormats: ['.PDF Press Quality', '.AI Editable Text', '.JPG Display Digital'],
    deliverables: [
      'File Siap Cetak Resolusi 300 DPI dengan Bleed 3mm',
      'Master File Adobe Illustrator (Text Outlined & Live)',
      'PDF Interaktif / Versi Digital untuk Akses QR Code Menu',
      'Spesifikasi Gramatur Kertas & Rekomendasi Laminasi'
    ],
    guidelines: 'Memanfaatkan prinsip Golden Triangle eye-tracking agar item unggulan mendapat perhatian utama konsumen.'
  },
  {
    id: 'desain-kemasan',
    number: 'LAYANAN 04',
    name: 'Desain Kemasan',
    category: 'kemasan',
    description: 'Rancangan visual label, kotak, pouch, dan kemasan produk dengan die-line presisi serta kepatuhan pada spesifikasi teknis percetakan.',
    icon: 'deployed_code',
    revisi: 'Sesuai brief',
    durasi: 'Estimasi terukur',
    fileAkhir: 'Master Die-Line & PDF Cetak',
    baseDays: 10,
    colorProfiles: ['CMYK Offset Calibrated', 'Pantone Spot Colors (Bila Diperlukan)'],
    recommendedDpi: 300,
    standardFormats: ['.AI Die-Cut Guide', '.PDF Skala 1:1', '.3D Mockup Visual Render'],
    deliverables: [
      'Garis Potong & Lipat (Die-Line) Skala 1:1 Terpisah Layer',
      'Pemisahan Warna Cetak dan Area Spot UV / Foil',
      'Spesifikasi Informasi Barcode, Nutrisi & Legalitas',
      'Pratinjau Mockup 3D Fotorealistik untuk Verifikasi'
    ],
    guidelines: 'Perhitungan toleransi lipatan karton (creep allowance) dan margin aman perekat diuji sebelum penyerahan master.'
  },
  {
    id: 'feed-media-sosial',
    number: 'LAYANAN 05',
    name: 'Feed Media Sosial',
    category: 'promosi',
    description: 'Rangkaian template visual dan konten feed Instagram yang harmonis, konsisten, dan siap dipublikasikan untuk memperkuat komunikasi digital.',
    icon: 'grid_view',
    revisi: 'Sesuai brief',
    durasi: 'Estimasi terukur',
    fileAkhir: 'PNG, JPG, Source File',
    baseDays: 6,
    colorProfiles: ['RGB sRGB'],
    recommendedDpi: 72,
    standardFormats: ['.PNG Lossless (1080x1080 / 1080x1350)', '.AI / Figma Source', '.JPG Web Optimized'],
    deliverables: [
      'Set Template Postingan Feed (Carousel, Single Post, Quote)',
      'Template Instagram Story & Cover Highlight',
      'File Ekspor PNG Transparan & JPG Tajam Tanpa Artefak Kompresi',
      'Panduan Pengaturan Tata Letak Grid Feeds'
    ],
    guidelines: 'Dioptimalkan untuk rasio aspek 1:1 dan 4:5 dengan kepatuhan kontras layar OLED/LCD ponsel pintar.'
  },
  {
    id: 'desain-undangan',
    number: 'LAYANAN 06',
    name: 'Desain Undangan',
    category: 'publikasi',
    description: 'Undangan visual untuk momentum formal korporat maupun perayaan personal, dirancang dengan kehalusan tipografi dan format siap distribusikan.',
    icon: 'drafts',
    revisi: 'Sesuai brief',
    durasi: 'Estimasi terukur',
    fileAkhir: 'PDF High-Res, Vektor/JPG',
    baseDays: 5,
    colorProfiles: ['CMYK Khusus Kertas Tekstur', 'RGB Mobile Card'],
    recommendedDpi: 300,
    standardFormats: ['.PDF Cetak High-Res', '.AI / EPS Vektor', '.JPG / PNG Card'],
    deliverables: [
      'Berkas Siap Cetak Skala Presisi (Termasuk Bleed & Crop Marks)',
      'Versi Digital Vertikal Responsif untuk Kirim WhatsApp/Email',
      'Desain Amplop dan Segel Khusus (Wax Seal / Sticker)',
      'Rekomendasi Jenis Kertas Mewah (Concorde, Linen, Cotton Paper)'
    ],
    guidelines: 'Keseimbangan ruang negatif (white space) dan kedisiplinan hierarki tipografi formal.'
  },
  {
    id: 'spanduk-banner',
    number: 'LAYANAN 07',
    name: 'Spanduk & Banner',
    category: 'promosi',
    description: 'Media promosi luar ruang, backdrop acara, dan banner display format besar dengan resolusi terkalibrasi agar hasil cetak tajam tanpa pecah.',
    icon: 'ad_units',
    revisi: 'Sesuai brief',
    durasi: 'Estimasi terukur',
    fileAkhir: 'TIFF / PDF Skala Cetak, JPG',
    baseDays: 4,
    colorProfiles: ['CMYK Large Format Outdoor / Indoor'],
    recommendedDpi: 150,
    standardFormats: ['.TIFF LZW Compressed', '.PDF Skala 1:1 atau 1:10', '.JPG High-Res'],
    deliverables: [
      'Master Cetak Skala Nyata dengan Profil CMYK',
      'Garis Mata Ayam / Sisa Lipatan Tepi (Hemming)',
      'Versi Ringkas Pratinjau untuk Acc Tim Produksi',
      'Petunjuk Teknis Pemilihan Bahan (Flexi Korea / Jerman / Albatross)'
    ],
    guidelines: 'Kalibrasi resolusi DPI berdasarkan jarak pandang efektif (viewing distance) audiens.',
    colSpan: true
  }
];

export interface BriefFormData {
  clientName: string;
  clientEmail: string;
  clientPhone: string;
  brandName: string;
  selectedServices: string[];
  timelineUrgency: 'standard' | 'express' | 'relaxed';
  projectBudgetEstimate?: string;
  projectDescription: string;
  deliverableFormats: string[];
}

export function generateBriefId(): string {
  const timestamp = Date.now().toString(36).toUpperCase().slice(-4);
  const randomPart = Math.floor(1000 + Math.random() * 9000);
  return `TDC-${timestamp}-${randomPart}`;
}

export function calculateEstimatedTimeline(
  serviceIds: string[],
  urgency: 'standard' | 'express' | 'relaxed' = 'standard'
): { daysMin: number; daysMax: number; formatted: string } {
  if (!serviceIds || serviceIds.length === 0) {
    return { daysMin: 3, daysMax: 5, formatted: '3 – 5 Hari Kerja' };
  }

  // Find maximum base day among selected services, plus slight increment for multiple services
  const selectedServices = SERVICES_CATALOGUE.filter((s) => serviceIds.includes(s.id));
  const maxBase = Math.max(...selectedServices.map((s) => s.baseDays), 4);
  const multiServiceAddition = Math.min((selectedServices.length - 1) * 2, 6);

  let totalDays = maxBase + multiServiceAddition;

  if (urgency === 'express') {
    totalDays = Math.max(Math.round(totalDays * 0.6), 2);
  } else if (urgency === 'relaxed') {
    totalDays = Math.round(totalDays * 1.3);
  }

  const daysMin = Math.max(1, totalDays - 2);
  const daysMax = totalDays + 2;

  return {
    daysMin,
    daysMax,
    formatted: `${daysMin} – ${daysMax} Hari Kerja`
  };
}

export function generateDeliverablesList(serviceIds: string[]): string[] {
  const deliverablesSet = new Set<string>();

  SERVICES_CATALOGUE.forEach((service) => {
    if (serviceIds.includes(service.id)) {
      service.deliverables.forEach((item) => deliverablesSet.add(item));
    }
  });

  if (deliverablesSet.size === 0) {
    return [
      'Master Vector Scalable (AI/EPS)',
      'PDF High-Resolution Siap Cetak',
      'PNG Transparan & JPG Digital'
    ];
  }

  return Array.from(deliverablesSet);
}

export function calculatePrintSpecs(
  widthMm: number,
  heightMm: number,
  targetDpi: number = 300,
  bleedMm: number = 3
): {
  pixelWidth: number;
  pixelHeight: number;
  pixelWidthWithBleed: number;
  pixelHeightWithBleed: number;
  bleedMm: number;
  colorProfile: string;
  resolutionDpi: number;
} {
  const mmToInches = 1 / 25.4;
  
  const widthInches = widthMm * mmToInches;
  const heightInches = heightMm * mmToInches;

  const widthWithBleedInches = (widthMm + bleedMm * 2) * mmToInches;
  const heightWithBleedInches = (heightMm + bleedMm * 2) * mmToInches;

  const pixelWidth = Math.round(widthInches * targetDpi);
  const pixelHeight = Math.round(heightInches * targetDpi);
  const pixelWidthWithBleed = Math.round(widthWithBleedInches * targetDpi);
  const pixelHeightWithBleed = Math.round(heightWithBleedInches * targetDpi);

  const colorProfile = targetDpi >= 200 ? 'CMYK (ISO Coated v2 / FOGRA39)' : 'CMYK Large Scale Outdoor';

  return {
    pixelWidth,
    pixelHeight,
    pixelWidthWithBleed,
    pixelHeightWithBleed,
    bleedMm,
    colorProfile,
    resolutionDpi: targetDpi
  };
}

export function validateBriefForm(data: Partial<BriefFormData>): {
  isValid: boolean;
  errors: Record<string, string>;
} {
  const errors: Record<string, string> = {};

  if (!data.clientName || data.clientName.trim().length < 2) {
    errors.clientName = 'Nama pemohon wajib diisi minimal 2 karakter.';
  }

  if (!data.clientEmail || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.clientEmail)) {
    errors.clientEmail = 'Alamat email aktif diperlukan untuk korespondensi resmi.';
  }

  if (!data.brandName || data.brandName.trim().length < 2) {
    errors.brandName = 'Nama brand atau entitas proyek wajib diisi.';
  }

  if (!data.selectedServices || data.selectedServices.length === 0) {
    errors.selectedServices = 'Pilih minimal satu layanan desain dari katalog studio.';
  }

  if (!data.projectDescription || data.projectDescription.trim().length < 10) {
    errors.projectDescription = 'Berikan deskripsi singkat kebutuhan proyek (minimal 10 karakter).';
  }

  return {
    isValid: Object.keys(errors).length === 0,
    errors
  };
}
