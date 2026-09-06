import React, { createContext, useState, useContext, useEffect } from 'react';

const LanguageContext = createContext();

const translations = {
  id: {
    hero: {
      profile: "PROFIL",
      heading: "Pengenalan Singkat",
      bio1: "Saya seorang mahasiswa Informatika yang memiliki ketertarikan mendalam pada rekayasa perangkat lunak lintas platform dan sistem tertanam (embedded systems).",
      bio2: "Selama perjalanan akademis dan profesional, saya telah merancang berbagai arsitektur sistem—mulai dari otomasi IoT berbasis Arduino (C++), pengembangan backend serverless menggunakan Google Apps Script dan Python (Flask), hingga memformulasikan antarmuka mobile yang kompleks dengan Flutter dan ekosistem React. Saya berfokus pada penyelesaian masalah nyata melalui kode yang modular dan performan.",
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
      bio1: "I am an Informatics student with a deep interest in cross-platform software engineering and embedded systems.",
      bio2: "Throughout my academic and professional journey, I have designed various system architectures—ranging from Arduino-based IoT automation (C++) and serverless backend development using Google Apps Script and Python (Flask), to formulating complex mobile interfaces with Flutter and the React ecosystem. I focus on solving real-world problems through modular and performant code.",
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
