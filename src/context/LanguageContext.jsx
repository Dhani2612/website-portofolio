import React, { createContext, useState, useContext, useEffect } from 'react';

const LanguageContext = createContext();

const translations = {
  id: {
    hero: {
      profile: "PROFIL",
      heading: "Pengenalan Singkat",
      bio1: "Saya mahasiswa Informatika di UPN \"Veteran\" Yogyakarta yang berfokus pada pengembangan perangkat lunak, sistem web, dan teknologi IoT.",
      bio2: "Saya terbiasa membangun aplikasi dari tahap perancangan sampai implementasi, baik untuk web, mobile, maupun pengolahan data. Sebagian besar proyek saya berangkat dari kebutuhan praktis selama perkuliahan, kegiatan organisasi, dan pengalaman magang.",
      downloadCv: "Unduh CV",
      exploreWork: "Lihat Karya",
      connect: "HUBUNGI SAYA"
    },
    edu: {
      title: "PENDIDIKAN",
      heading: "Pendidikan",
      statusBadge: "Status: Mahasiswa Aktif",
      now: "Sekarang",
      locationLabel: "Lokasi Saat Ini",
      focusLabel: "Fokus & Minat"
    },
    tabs: {
      prof: "Profesional",
      org: "Organisasi",
      proj: "Projek",
      ach: "Pencapaian",
      cert: "Sertifikat",
      loading: "Memuat data...",
      empty: "Belum ada data.",
      viewCredential: "Lihat Kredensial"
    },
    footer: {
      tagline: "Membangun Solusi yang Berdampak",
      copyright: "Hak Cipta Dilindungi."
    },
    projectDetail: {
      loading: "Memuat proyek...",
      notFound: "Mohon maaf, Proyek ini tidak ditemukan!",
      backHome: "Kembali ke Beranda",
      aboutProject: "Tentang Proyek",
      features: "Fitur / Peran Khusus",
      repo: "Repositori Kode",
      demo: "Coba Aplikasi"
    }
  },
  en: {
    hero: {
      profile: "PROFILE",
      heading: "Short Introduction",
      bio1: "I am an Informatics student at UPN \"Veteran\" Yogyakarta focusing on software development, web systems, and IoT.",
      bio2: "I build applications from design to implementation across web, mobile, and data-driven projects. Most of my work stems from practical needs in coursework, student organizations, and internships.",
      downloadCv: "Download CV",
      exploreWork: "Explore Work",
      connect: "CONNECT"
    },
    edu: {
      title: "EDUCATION",
      heading: "Education",
      statusBadge: "Status: Active Student",
      now: "Present",
      locationLabel: "Current Location",
      focusLabel: "Focus & Interest"
    },
    tabs: {
      prof: "Professional",
      org: "Organization",
      proj: "Projects",
      ach: "Achievements",
      cert: "Certificates",
      loading: "Loading data...",
      empty: "No data available.",
      viewCredential: "View Credential"
    },
    footer: {
      tagline: "Building Solutions That Matter",
      copyright: "All rights reserved."
    },
    projectDetail: {
      loading: "Loading project...",
      notFound: "Sorry, this project was not found!",
      backHome: "Back to Home",
      aboutProject: "About the Project",
      features: "Features / Key Roles",
      repo: "Source Code",
      demo: "Live Demo"
    }
  }
};

export const LanguageProvider = ({ children }) => {
  const [lang, setLang] = useState('id');

  useEffect(() => {
    const saved = localStorage.getItem('language');
    if (saved && (saved === 'id' || saved === 'en')) {
      setLang(saved);
    }
  }, []);

  const toggleLanguage = () => {
    const newLang = lang === 'id' ? 'en' : 'id';
    setLang(newLang);
    localStorage.setItem('language', newLang);
  };

  const t = (section, key) => {
    if (translations[lang] && translations[lang][section] && translations[lang][section][key]) {
      return translations[lang][section][key];
    }
    return key;
  };

  return (
    <LanguageContext.Provider value={{ lang, toggleLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => useContext(LanguageContext);
