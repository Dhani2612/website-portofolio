import React, { useState, useRef, useEffect, useCallback } from 'react';
import { Link } from 'react-router-dom';
import { FiExternalLink, FiAward, FiCode, FiLayers } from 'react-icons/fi';
import { FaPython, FaReact, FaNodeJs, FaDatabase, FaHtml5, FaCss3Alt, FaGitAlt } from 'react-icons/fa';
import { 
  SiJavascript, SiTypescript, SiReact, SiNextdotjs, SiTailwindcss, 
  SiFlutter, SiDart, SiVite, SiPython, SiFlask, 
  SiMysql, SiSqlite, SiSupabase, SiArduino, SiCplusplus 
} from 'react-icons/si';
import { projects } from '../data/projectsData';
import './Portfolio.css';

// Komponen kartu proyek dengan auto-slideshow saat hover
const ProjectCard = ({ project }) => {
  const [imgIndex, setImgIndex] = useState(0);
  const intervalRef = useRef(null);
  const images = project.collages && project.collages.length > 0 ? project.collages : [project.img];

  const startSlideshow = useCallback(() => {
    if (images.length <= 1) return;
    intervalRef.current = setInterval(() => {
      setImgIndex(prev => (prev + 1) % images.length);
    }, 1500);
  }, [images.length]);

  const stopSlideshow = useCallback(() => {
    clearInterval(intervalRef.current);
    setImgIndex(0);
  }, []);

  useEffect(() => {
    return () => clearInterval(intervalRef.current);
  }, []);

  return (
    <div
      className="project-card"
      onMouseEnter={startSlideshow}
      onMouseLeave={stopSlideshow}
    >
      <div className="project-img">
        <img src={images[imgIndex]} alt={project.title} />
      </div>
      <div className="project-info">
        <h3>{project.title}</h3>
        <p>{project.desc}</p>
        <div className="project-tags">
          {project.tags.map(tag => (
            <span key={tag}>{tag}</span>
          ))}
        </div>
        <div className="project-links">
          <Link to={`/project/${project.id}`} className="btn btn-primary btn-sm" style={{ width: '100%', textAlign: 'center', justifyContent: 'center' }}>
            <FiExternalLink style={{ marginRight: '8px' }} /> Lihat Selengkapnya
          </Link>
        </div>
      </div>
    </div>
  );
};

const Portfolio = () => {
  const [activeTab, setActiveTab] = useState('projects');

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

  return (
    <section id="portfolio" className="portfolio-section">
      <div className="container">
        <h2 className="section-title">Karya & <span>Portofolio</span></h2>

        <div className="portfolio-tabs">
          <button
            className={`tab-btn ${activeTab === 'projects' ? 'active' : ''}`}
            onClick={() => setActiveTab('projects')}
          >
            <FiCode /> Projects
          </button>
          <button
            className={`tab-btn ${activeTab === 'certificates' ? 'active' : ''}`}
            onClick={() => setActiveTab('certificates')}
          >
            <FiAward /> Certificates
          </button>
          <button
            className={`tab-btn ${activeTab === 'techstack' ? 'active' : ''}`}
            onClick={() => setActiveTab('techstack')}
          >
            <FiLayers /> Tech Stack
          </button>
        </div>

        <div className="tab-content">
          {activeTab === 'projects' && (
            <div className="projects-grid fade-in">
              {projects.map(project => (
                <ProjectCard key={project.id} project={project} />
              ))}
            </div>
          )}

          {activeTab === 'certificates' && (
            <div className="certificates-grid fade-in">
              {certificates.map(cert => (
                <div className="cert-card" key={cert.id}>
                  <img src={cert.img} alt={cert.title} className="cert-img" />
                  <div className="cert-overlay">
                    <h4>{cert.title}</h4>
                    <p>{cert.org}</p>
                    <a href={cert.link} target="_blank" rel="noreferrer" className="btn btn-primary btn-sm">Lihat Kredensial</a>
                  </div>
                </div>
              ))}
            </div>
          )}

          {activeTab === 'techstack' && (
            <div className="tech-stack-grid fade-in">
              <div className="tech-item"><SiPython className="tech-icon" style={{color: '#3776ab'}} /> <span>Python</span></div>
              <div className="tech-item"><SiFlask className="tech-icon" /> <span>Flask</span></div>
              <div className="tech-item"><SiReact className="tech-icon" style={{color: '#61dafb'}} /> <span>React</span></div>
              <div className="tech-item"><SiNextdotjs className="tech-icon" /> <span>Next.js</span></div>
              <div className="tech-item"><SiTailwindcss className="tech-icon" style={{color: '#06b6d4'}} /> <span>Tailwind CSS</span></div>
              <div className="tech-item"><SiVite className="tech-icon" style={{color: '#646cff'}} /> <span>Vite</span></div>
              <div className="tech-item"><SiFlutter className="tech-icon" style={{color: '#42d392'}} /> <span>Flutter</span></div>
              <div className="tech-item"><SiDart className="tech-icon" style={{color: '#0175c2'}} /> <span>Dart</span></div>
              <div className="tech-item"><SiMysql className="tech-icon" style={{color: '#4479a1'}} /> <span>MySQL</span></div>
              <div className="tech-item"><SiSqlite className="tech-icon" style={{color: '#003b57'}} /> <span>SQLite</span></div>
              <div className="tech-item"><SiSupabase className="tech-icon" style={{color: '#3ecf8e'}} /> <span>Supabase</span></div>
              <div className="tech-item"><SiArduino className="tech-icon" style={{color: '#00979d'}} /> <span>Arduino</span></div>
              <div className="tech-item"><SiCplusplus className="tech-icon" style={{color: '#00599c'}} /> <span>C++</span></div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
