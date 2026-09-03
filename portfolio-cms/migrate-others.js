import fs from 'fs'
import path from 'path'
import { getCliClient } from 'sanity/cli'
const cliClient = getCliClient()

const certificates = [
    { id: 1, title: "Dasar Pemrograman Web", org: "Dicoding", img: "/Sertif-Course-DasarPemrograman.png", link: "https://www.dicoding.com/certificates/RVZKWYMYOZD5" },
    { id: 2, title: "Dasar Pemrograman JavaScript", org: "Dicoding", img: "/Sertif-Course-Java.png", link: "https://www.dicoding.com/certificates/0LZ06E2RRZ65" },
    { id: 3, title: "Virtual Internship: Data Scientist", org: "Rakamin x ID/X Partners", img: "/Sertif-VirtualInternship-IDXPartners.png", link: "https://drive.google.com/file/d/1AWT95tO7BDkkWdliDRkO8hkAKpZUPuFR/view?usp=sharing" },
    { id: 4, title: "Content Creator Course", org: "Eduparx", img: "/Sertif-ContentCreator.jpg", link: "https://inix-eduparx.s3.ap-southeast-1.amazonaws.com/oti/certificates/memoti/38601/CERT_2f0a74c1-f26c-4f69-96e6-c94339215c76.jpg" },
    { id: 5, title: "Staff Kementerian", org: "BEM KM UPN Veteran Yogyakarta", img: "/Sertif-Staff-BEMKM.jpg", link: "https://drive.google.com/file/d/1FeEZ8t5aT2Bb-4nervrxrpRZjilNrf5l/view?usp=sharing" },
    { id: 6, title: "PLT Kementerian", org: "BEM KM UPN Veteran Yogyakarta", img: "/Sertif-PLT-BEMKM.jpg", link: "https://drive.google.com/file/d/1WgVkVmvZU_ixi51arrsijKqN3Z6CyIHi/view?usp=sharing" },
    { id: 7, title: "Staff of The Month", org: "BEM KM UPN Veteran Yogyakarta", img: "/Sertif-SOTM-BEMKM.jpg", link: "https://drive.google.com/file/d/1e30vL9dtG8wnhd8sZHtQovWP-UyYe8RT/view?usp=sharing" },
    { id: 8, title: "Wakil Kepala Divisi Advokasi", org: "BEM FTI UPN Veteran Yogyakarta", img: "/Sertif-Wakadiv-BEMFTI.png", link: "https://drive.google.com/file/d/1wRSdM5IuY_t4HQt4ltcPC8ea0b9Fke9T/view?usp=sharing" },
    { id: 9, title: "Koordinator Umum", org: "PKKBN IF UPN Veteran Yogyakarta", img: "/Sertif-KoordinatorUmum-PKKBNIF.png", link: "https://drive.google.com/file/d/15YGOHTVOpF_fgp96uqUhCpm-p0fOTJHI/view?usp=sharing" },
    { id: 10, title: "Komandan Lapangan Penyokong", org: "PKKBN IF UPN Veteran Yogyakarta", img: "/Sertif-KomlapPenyokong-PKKBNIF.png", link: "https://drive.google.com/file/d/15dc_bxP4i09PQ6t303xt3vGpd7QLU7eK/view?usp=sharing" },
    { id: 11, title: "Peserta Konferensi Internasional", org: "Konferensi Internasional", img: "/Sertif-Peserta-KonferensiInternasional.png", link: "https://drive.google.com/file/d/1dxnu_HBtIPmE-6ceEiyYsAnRPqvM8UAK/view?usp=sharing" },
    { id: 12, title: "Speaker Kegiatan Mahasiswa", org: "HMTM UPN Veteran Yogyakarta", img: "/Sertif-Speaker-SekolahKastrat.jpg", link: "https://drive.google.com/file/d/1uu1Q_BkjaxEWVwLSnF_2XEqfZtMkowdo/view?usp=sharing" }
];

const experiences = [
  {
    role: 'Web & CMS Administrator',
    company: 'Divisi Humas UPN "Veteran" Yogyakarta',
    period: 'Agustus 2026 - November 2026',
    desc: [
      'Mengelola dan memelihara sistem web Hubungan Masyarakat (Humas) UPN "Veteran" Yogyakarta.',
      'Bertanggung jawab atas Content Management System (CMS) untuk publikasi berita resmi kampus.',
      'Mengoptimalkan UI/UX situs web secara berkala agar lebih responsif dan mudah diakses oleh sivitas akademika.'
    ],
    logo: '/logo/LogoUPN.png',
    type: 'professional'
  },
  {
    role: 'TOP 800 Proposalist, Ketua Tim',
    company: 'PIDI - DIGDAYA X Hackathon 2026 by Bank Indonesia',
    period: 'April 2026',
    desc: [
      'Memimpin tim merancang prototipe "NusaLink AI", platform remote-work bagi talenta IT lokal.',
      'Mengonsep arsitektur yang memanfaatkan Local Language Model (LLM) untuk penerjemahan real-time.',
      'Mengintegrasikan konsep Smart Contract untuk mengefisiensikan biaya transaksi lintas negara.'
    ],
    logo: '/logo/LogoBI.png',
    type: 'professional'
  },
  {
    role: 'Software Development Intern',
    company: 'PT. Kereta Api Indonesia (KAI) Daop 6 Yogyakarta',
    period: 'Januari 2026 – Februari 2026',
    desc: [
      'Berkolaborasi dengan tim IT mengembangkan website manajemen arsip digital untuk Unit SDM.',
      'Mendigitalisasi dan memvalidasi 5.000+ dokumen kontrak pegawai ke dalam sistem terpusat.',
      'Mempercepat proses pencarian dan akses data pegawai secara signifikan.'
    ],
    logo: '/logo/LogoKAI.png',
    type: 'professional'
  },
  {
    role: 'Magang Berbasis Projek : Data Scientist',
    company: 'Rakamin Academy X ID/X Partners',
    period: 'Januari 2025',
    desc: [
      'Menggunakan Python dan SQL untuk memproses data dan mengembangkan model prediktif.',
      'Melakukan Exploratory Data Analysis (EDA) dari studi kasus industri untuk menghasilkan actionable insights.',
      'Merangkum hasil analisis ke dalam visualisasi data interaktif.'
    ],
    logo: null,
    type: 'professional'
  },
  // Organizations
  {
    role: 'Koordinator Mahasiswa Kelompok KKN UPNYK 84.065',
    company: 'LPPM UPN "Veteran" Yogyakarta',
    period: 'Juli 2026',
    desc: [
      'Memimpin tim mahasiswa dari berbagai program studi dalam pelaksanaan Kuliah Kerja Nyata (KKN).',
      'Bertindak sebagai penghubung antara pihak desa, dosen pembimbing, dan anggota tim.',
      'Mengawasi jalannya 3 program kerja utama pemberdayaan masyarakat agar selesai sesuai target operasional lapangan.'
    ],
    logo: '/logo/LogoUPN.png',
    type: 'organization'
  },
  {
    role: 'Koordinator Umum',
    company: 'PKKBN IF UPN "Veteran" Yogyakarta',
    period: 'Apr 2025 - Agt 2025',
    desc: [
      'Mengoordinasikan lebih dari 100 panitia dari berbagai divisi.',
      'Memimpin tahapan perencanaan hingga pelaksanaan acara PKKBN Informatika 2025.'
    ],
    logo: '/logo/logoJIF.png',
    type: 'organization'
  },
  {
    role: 'Wakil Kepala Divisi Advokasi & Kesejahteraan Mahasiswa',
    company: 'BEM FTI UPN "Veteran" Yogyakarta',
    period: 'Feb 2025 - Des 2025',
    desc: [
      'Menjembatani aspirasi mahasiswa dengan pihak fakultas melalui program advokasi.',
      'Aktif menangani dan mencari solusi untuk berbagai keluhan mahasiswa terkait kendala akademik maupun non-akademik.'
    ],
    logo: '/logo/LogoBEMFTI.png',
    type: 'organization'
  },
  {
    role: 'PLT Kementerian Analisis Isu Kampus',
    company: 'BEM KM UPN "Veteran" Yogyakarta',
    period: 'Okt 2024 - Des 2024',
    desc: [
      'Dipercaya mengambil alih kepemimpinan kementerian sementara secara penuh.',
      'Memimpin langsung tim dalam menganalisis isu-isu kampus yang krusial dan menyusun langkah advokasi relevan.'
    ],
    logo: '/logo/LogoBEMKM.png',
    type: 'organization'
  },
  {
    role: 'Koordinator Lapangan Penyokong',
    company: 'PKKBN IF UPN "Veteran" Yogyakarta',
    period: 'Mei 2024 - Agt 2024',
    desc: [
      'Bertanggung jawab atas manajemen lapangan dan logistik pada acara PKKBN.',
      'Mengoordinasikan 100+ panitia saat hari H dan sekaligus bertugas sebagai MC utama acara.'
    ],
    logo: '/logo/logoJIF.png',
    type: 'organization'
  },
  {
    role: 'Staff Kementerian Analisis Isu Kampus',
    company: 'BEM KM UPN "Veteran" Yogyakarta',
    period: 'Feb 2024 - Okt 2024',
    desc: [
      'Terlibat langsung dalam pengumpulan data kajian dari 1.000+ mahasiswa.',
      'Berkontribusi dalam penyusunan 8+ laporan analisis yang digunakan sebagai landasan perbaikan fasilitas kampus.'
    ],
    logo: '/logo/LogoBEMKM.png',
    type: 'organization'
  }
];

const achievements = [
  {
    title: 'Awardee Beasiswa Bank Indonesia',
    org: 'Bank Indonesia',
    period: '2025',
    desc: 'Terpilih sebagai penerima beasiswa Bank Indonesia melalui tahapan seleksi ketat berdasarkan rekam jejak akademis, keaktifan organisasi, serta potensi kepemimpinan.'
  },
  {
    title: 'Staff Of The Month',
    org: 'BEM KM UPN "Veteran" Yogyakarta',
    period: 'Maret - Mei 2024',
    desc: 'Mendapatkan penghargaan atas kinerja yang konsisten dan tanggung jawab penuh dalam menyelesaikan setiap target program kerja kementerian, serta mampu menjalin kolaborasi tim yang baik.'
  }
];

async function uploadImage(imagePath) {
  if (!imagePath || imagePath === '#') return undefined;
  
  const fullPath = path.join(process.cwd(), '../public', imagePath)
  if (!fs.existsSync(fullPath)) {
    console.warn(`Warning: Image not found at ${fullPath}`)
    return undefined
  }

  console.log(`Uploading ${imagePath}...`)
  const asset = await cliClient.assets.upload('image', fs.createReadStream(fullPath), {
    filename: path.basename(fullPath)
  })
  return {
    _type: 'image',
    asset: {
      _type: 'reference',
      _ref: asset._id
    }
  }
}

async function migrate() {
  console.log('Starting migration for certificates...')
  
  let orderCert = 100
  for (const cert of certificates) {
    console.log(`Migrating certificate: ${cert.title}`)
    const img = await uploadImage(cert.img)
    const doc = {
      _type: 'certificate',
      title: cert.title,
      org: cert.org,
      img: img,
      link: cert.link,
      order: orderCert--
    }
    await cliClient.create(doc)
  }
  
  console.log('Starting migration for experiences...')
  let orderExp = 100
  for (const exp of experiences) {
    console.log(`Migrating experience: ${exp.role}`)
    const logo = await uploadImage(exp.logo)
    const doc = {
      _type: 'experience',
      role: exp.role,
      company: exp.company,
      period: exp.period,
      desc: exp.desc,
      logo: logo,
      type: exp.type,
      order: orderExp--
    }
    await cliClient.create(doc)
  }

  console.log('Starting migration for achievements...')
  let orderAch = 100
  for (const ach of achievements) {
    console.log(`Migrating achievement: ${ach.title}`)
    const doc = {
      _type: 'achievement',
      title: ach.title,
      org: ach.org,
      period: ach.period,
      desc: ach.desc,
      order: orderAch--
    }
    await cliClient.create(doc)
  }

  console.log('Migration complete!')
}

migrate().catch(err => {
  console.error('Migration failed:', err)
  process.exit(1)
})
