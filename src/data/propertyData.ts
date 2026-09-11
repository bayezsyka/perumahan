export interface PropertyCluster {
  id: string;
  name: string;
  tagline: string;
  region: "Surabaya Barat" | "Surabaya Timur";
  location: string;
  priceStart: number; // in rupiah
  priceFormatted: string;
  installmentFormatted: string;
  landArea: number; // m2
  buildingArea: number; // m2
  bedrooms: number;
  bathrooms: number;
  carport: number;
  floors: number;
  status: "Tersedia" | "Sisa 3 Unit" | "Tahap 2 Launching";
  featuredImage: string;
  gallery: string[];
  description: string;
  features: string[];
  specs: {
    pondasi: string;
    struktur: string;
    dinding: string;
    lantai: string;
    atap: string;
    sanitasi: string;
    listrik: string;
    air: string;
  };
}

export const PROPERTY_CLUSTERS: PropertyCluster[] = [
  {
    id: "darmawangsa-heights",
    name: "Cluster Darmawangsa Heights",
    tagline: "Modern Scandinavian Luxury Living di Koridor Surabaya Barat",
    region: "Surabaya Barat",
    location: "Kawasan Babatan Pratama, Sambikerep, Surabaya Barat",
    priceStart: 1450000000,
    priceFormatted: "Rp 1,45 Miliar",
    installmentFormatted: "Mulai Rp 7,8 Jt/bln",
    landArea: 90,
    buildingArea: 110,
    bedrooms: 3,
    bathrooms: 2,
    carport: 2,
    floors: 2,
    status: "Tersedia",
    featuredImage:
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1616594039964-ae9021a400a0?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1600585154526-990dced4db0d?auto=format&fit=crop&w=1200&q=80",
    ],
    description:
      "Hunian dua lantai berarsitektur Scandinavian kontemporer dengan tata ruang open-space, pencahayaan alami optimal, dan sirkulasi udara silang. Berada di lingkungan asri Surabaya Barat dengan akses 7 menit ke Pakuwon Mall.",
    features: [
      "Smart Door Lock & CCTV Terintegrasi",
      "Row Jalan Utama 10 Meter",
      "Underground Cable Network",
      "Private Backyard Garden",
      "Sertifikat Hak Milik (SHM) Split",
    ],
    specs: {
      pondasi: "Tiang Pancang Mini Pile & Sloof Beton Bertulang",
      struktur: "Beton Bertulang Standar SNI",
      dinding: "Bata Ringan Plester Aci + Cat Weatherproof",
      lantai: "Homogeneous Tile 60x60 Monochromatic",
      atap: "Rangka Baja Ringan & Genteng Flat Beton",
      sanitasi: "Toto / American Standard Monoblock",
      listrik: "PLN 2200 VA Underground",
      air: "PDAM Surabaya + Tandon Tanam Stainless",
    },
  },
  {
    id: "royal-heritage-rungkut",
    name: "Cluster Royal Heritage Rungkut",
    tagline: "Tropical Urban Oasis dengan Akses Prima MERR & OERR",
    region: "Surabaya Timur",
    location: "Kawasan Pandugo - Rungkut Asri, Surabaya Timur",
    priceStart: 1850000000,
    priceFormatted: "Rp 1,85 Miliar",
    installmentFormatted: "Mulai Rp 9,9 Jt/bln",
    landArea: 120,
    buildingArea: 145,
    bedrooms: 4,
    bathrooms: 3,
    carport: 2,
    floors: 2,
    status: "Sisa 3 Unit",
    featuredImage:
      "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=1200&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1600565193348-f74bd3c7ccdf?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=1200&q=80",
    ],
    description:
      "Dirancang untuk keluarga dinamis yang mengutamakan kenyamanan dan konektivitas. Memadukan elemen kayu, batu alam, dan kaca lebar dengan inner courtyard yang menghadirkan ketenangan di tengah atmosfer Surabaya Timur.",
    features: [
      "Inner Courtyard & Rooftop Terrace",
      "5 Menit ke Gerbang Tol Tambak Sumur",
      "12 Menit ke Galaxy Mall & Kampus ITS/UNAIR",
      "Clubhouse & Infinite Swimming Pool",
      "Instalasi Solar Panel Ready",
    ],
    specs: {
      pondasi: "Strauss Pile & Poer Beton Bertulang",
      struktur: "Beton Bertulang K-250",
      dinding: "Bata Merah Press Diplester & Cat Premium",
      lantai: "Granite Tile 80x80 Glazed Polished",
      atap: "Baja Ringan Zincalume & Genteng Keramik Kanmuri",
      sanitasi: "Toto Eco-Washer & Rain Shower",
      listrik: "PLN 3500 VA Underground",
      air: "PDAM Surabaya + Water Filter System",
    },
  },
  {
    id: "citra-laguna-residence",
    name: "Cluster Citra Laguna Dian",
    tagline: "Resort-Style Living dengan Pemandangan Danau Alami",
    region: "Surabaya Barat",
    location: "Kawasan Dian Istana - Wiyung, Surabaya Barat",
    priceStart: 2750000000,
    priceFormatted: "Rp 2,75 Miliar",
    installmentFormatted: "Mulai Rp 14,8 Jt/bln",
    landArea: 160,
    buildingArea: 210,
    bedrooms: 4,
    bathrooms: 4,
    carport: 2,
    floors: 2,
    status: "Tahap 2 Launching",
    featuredImage:
      "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1200&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1576013551627-0cc20b96c2a7?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1616594039964-ae9021a400a0?auto=format&fit=crop&w=1200&q=80",
    ],
    description:
      "Masterpiece hunian premium dengan lanskap danau mandiri seluas 2 hektar. Setiap unit memiliki ceiling setinggi 4,2 meter, balkon kaca panoramic, dan opsi penambahan private plunge pool.",
    features: [
      "Private Lakeview Jogging Path",
      "Dedicated Club House & Tennis Court",
      "24/7 Patroli Keamanan & Automatic Boom Gate RFID",
      "High Ceiling 4.2 Meter",
      "Double Carport dengan EV Charger Ready",
    ],
    specs: {
      pondasi: "Bored Pile Kedalaman 14 Meter",
      struktur: "Beton Bertulang K-300 SNI",
      dinding: "Bata Ringan Double Wall Antar Unit",
      lantai: "Imported Marble Slab & Parquet SPC Bedroom",
      atap: "Rangka Baja Ringan & Genteng Aspal Tegola",
      sanitasi: "Kohler Full Set & Bathtub di Kamar Utama",
      listrik: "PLN 5500 VA Underground",
      air: "PDAM Surabaya + Dual Filter Booster Pump",
    },
  },
  {
    id: "graha-asri-medokan",
    name: "Cluster Graha Asri Semampir",
    tagline: "Compact Modern Minimalist untuk Milenial & Keluarga Muda",
    region: "Surabaya Timur",
    location: "Kawasan Medokan Ayu - Semampir, Surabaya Timur",
    priceStart: 985000000,
    priceFormatted: "Rp 985 Juta",
    installmentFormatted: "Mulai Rp 5,2 Jt/bln",
    landArea: 72,
    buildingArea: 80,
    bedrooms: 2,
    bathrooms: 2,
    carport: 1,
    floors: 2,
    status: "Tersedia",
    featuredImage:
      "https://images.unsplash.com/photo-1568605114967-8130f3a36994?auto=format&fit=crop&w=1200&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1568605114967-8130f3a36994?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1600565193348-f74bd3c7ccdf?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1600585154526-990dced4db0d?auto=format&fit=crop&w=1200&q=80",
    ],
    description:
      "Pilihan paling rasional bagi keluarga muda yang mendambakan rumah mandiri berdesain efisien tanpa mengorbankan estetika. Dekat dengan pusat perbelanjaan, sentra kuliner Merr, dan fasilitas pendidikan terkemuka.",
    features: [
      "Cicilan Terjangkau Bunga Khusus KPR",
      "Mezzanine Ready Design",
      "Bebas Biaya BPHTB, AJB, & Balik Nama",
      "Security One Gate System",
      "Taman Bermain Anak & Outdoor Gym",
    ],
    specs: {
      pondasi: "Batu Kali & Footplate Beton Bertulang",
      struktur: "Beton Bertulang Standar Nasional",
      dinding: "Bata Ringan Plester Aci Fin. Cat Dulux",
      lantai: "Granite Tile 60x60 Matt Surface",
      atap: "Baja Ringan & Genteng Metal Berpasir",
      sanitasi: "American Standard Flush Toilet",
      listrik: "PLN 1300 VA Underground",
      air: "PDAM Surabaya Mandiri",
    },
  },
];

export const COMPANY_PROFILE = {
  name: "PT Darmawangsa Graha Mandiri",
  brandName: "Darmawangsa Living Surabaya",
  tagline: "Membangun Hunian Nyaman dan Bernilai Investasi Tinggi Sejak 2009",
  address: "Graha Darmawangsa Lt. 3, Jl. Mayjen Sungkono No. 88, Dukuh Pakis, Surabaya, Jawa Timur 60225",
  phone: "+62 31 568 2299",
  whatsapp: "+62 812 3456 7890",
  whatsappText: "Halo Tim Darmawangsa Graha Mandiri, saya ingin berkonsultasi mengenai unit perumahan di Surabaya.",
  email: "marketing@darmawangsaliving.co.id",
  operationalHours: "Senin - Minggu: 08.30 - 17.30 WIB (Marketing Gallery & Show Unit Buka Setiap Hari)",
  stats: [
    { label: "Tahun Pengalaman", value: "15+" },
    { label: "Unit Rumah Terbangun", value: "1.450+" },
    { label: "Kawasan Cluster di Surabaya", value: "8 Kawasan" },
    { label: "Kepuasan Serah Terima", value: "99.2%" },
  ],
  advantages: [
    {
      title: "Legalitas Terjamin & Bersih",
      desc: "Sertifikat Hak Milik (SHM) sudah pecah per kavling dan Izin Bangunan Gedung (PBG) lengkap sebelum unit dipasarkan.",
    },
    {
      title: "Garansi Bangunan 12 Bulan",
      desc: "Jaminan pemeliharaan struktural dan finishing menyeluruh setelah serah terima kunci untuk kepuasan penghuni.",
    },
    {
      title: "Infrastruktur Bawah Tanah",
      desc: "Jaringan kabel listrik, serat optik internet, dan saluran pembuangan terpadu tertata rapi tanpa kabel udara.",
    },
    {
      title: "Aksesibilitas Emas Surabaya",
      desc: "Terhubung langsung dengan arteri utama HR Muhammad, MERR, OERR, serta pintu masuk jalan tol utama Surabaya.",
    },
  ],
  partnerBanks: [
    { name: "Bank Central Asia (BCA)", note: "KPR Bunga Spesial Fixed 3 Th" },
    { name: "Bank Mandiri", note: "Promo DP 0% & Free Provisi" },
    { name: "Bank BNI", note: "Griya Fleksibel & Instant Approval" },
    { name: "Bank BTN", note: "Suku Bunga KPR Khusus Developer Prioritas" },
    { name: "Bank Syariah Indonesia (BSI)", note: "Akad Syariah Bebas Riba & Cicilan Tetap" },
  ],
  testimonials: [
    {
      name: "Bambang Sudarsono, S.T.",
      role: "Praktisi Migas & Pemilik Unit Cluster Darmawangsa Heights",
      location: "Surabaya Barat",
      quote:
        "Kualitas konstruksi dan komitmen serah terima Darmawangsa sangat profesional. Sirkulasi udaranya sejuk walau di Surabaya, dan tata lingkungannya sangat aman untuk anak-anak.",
    },
    {
      name: "dr. Cynthia Larasati, Sp.A",
      role: "Dokter Spesialis & Pemilik Unit Cluster Royal Heritage",
      location: "Surabaya Timur",
      quote:
        "Lokasinya sangat strategis, hanya 10 menit ke rumah sakit dan kampus. Legalitas sertifikat langsung split atas nama sendiri tanpa proses berbelit.",
    },
    {
      name: "Hendro Wijaya",
      role: "Wirausahawan Kuliner Surabaya",
      location: "Surabaya Barat",
      quote:
        "Sebagai instrumen investasi, capital gain properti di kawasan ini naik signifikan sejak tahun pertama. Manajemen lingkungan dan sekuritinya sangat rapi.",
    },
  ],
  strategicLocations: [
    { name: "Pakuwon Mall & PTC", time: "7 Menit", category: "Pusat Perbelanjaan" },
    { name: "Gerbang Tol Gunungsari / Satelit", time: "5 Menit", category: "Akses Tol" },
    { name: "National Hospital & RS Mayapada", time: "8 Menit", category: "Kesehatan" },
    { name: "Galaxy Mall & East Coast Center", time: "10 Menit", category: "Pusat Perbelanjaan" },
    { name: "Institut Teknologi Sepuluh Nopember (ITS)", time: "12 Menit", category: "Pendidikan" },
    { name: "Bandara Internasional Juanda (T1 & T2)", time: "22 Menit", category: "Transportasi Udara" },
  ],
};
