import React, { useState, useRef, useEffect, useCallback } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { FiExternalLink, FiAward, FiCode, FiLayers } from 'react-icons/fi';
import { FaPython, FaReact, FaNodeJs, FaDatabase, FaHtml5, FaCss3Alt, FaGitAlt } from 'react-icons/fa';
import { 
  SiJavascript, SiTypescript, SiReact, SiNextdotjs, SiTailwindcss, 
  SiFlutter, SiDart, SiVite, SiPython, SiFlask, 
  SiMysql, SiSqlite, SiSupabase, SiArduino, SiCplusplus 
} from 'react-icons/si';
import { client, urlFor } from '../sanity';
import './Portfolio.css';

// Komponen kartu proyek dengan auto-slideshow saat hover
const ProjectCard = ({ project }) => {
  const [imgIndex, setImgIndex] = useState(0);
  const intervalRef = useRef(null);
  
  // Format images using urlFor
  const images = [];
  if (project.collages && project.collages.length > 0) {
    project.collages.forEach(img => images.push(urlFor(img).url()));
  } else if (project.img) {
    images.push(urlFor(project.img).url());
  } else {
    // fallback image if neither collages nor main img exist
    images.push('https://via.placeholder.com/600x400?text=No+Image');
  }

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
    <motion.div
      className="project-card"
      onMouseEnter={startSlideshow}
      onMouseLeave={stopSlideshow}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5 }}
    >
      <div className="project-img-wrapper">
        <AnimatePresence mode="wait">
          <motion.img 
            key={imgIndex}
            src={images[imgIndex]} 
            alt={project.title} 
            className="project-img-cover" 
            initial={{ opacity: 0.8 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0.8 }}
            transition={{ duration: 0.3 }}
          />
        </AnimatePresence>
        <div className="project-overlay">
          <div className="project-overlay-content">
            <h3>{project.title}</h3>
            <p>{project.desc}</p>
            <div className="project-tags">
              {project.tags && project.tags.slice(0, 3).map(tag => (
                <span key={tag}>{tag}</span>
              ))}
              {project.tags && project.tags.length > 3 && <span>+{project.tags.length - 3}</span>}
            </div>
            <Link to={`/project/${project._id}`} className="btn btn-primary btn-sm project-link">
              <FiExternalLink /> Detail Proyek
            </Link>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

const Portfolio = () => {
  const [activeTab, setActiveTab] = useState('projects');
  const [projects, setProjects] = useState([]);
  const [certificates, setCertificates] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const [projectData, certData] = await Promise.all([
          client.fetch('*[_type == "project"] | order(_createdAt asc)'),
          client.fetch('*[_type == "certificate"] | order(order desc)')
        ]);
        setProjects(projectData);
        setCertificates(certData);
      } catch (error) {
        console.error("Error fetching data from Sanity:", error);
      } finally {
        setIsLoading(false);
      }
    };
    fetchData();
  }, []);

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
              {isLoading ? (
                <div style={{ textAlign: 'center', width: '100%', gridColumn: '1 / -1', padding: '3rem 0', color: 'var(--text-secondary)' }}>
                  Loading projects from Sanity...
                </div>
              ) : projects.length > 0 ? (
                projects.map(project => (
                  <ProjectCard key={project._id} project={project} />
                ))
              ) : (
                <div style={{ textAlign: 'center', width: '100%', gridColumn: '1 / -1', padding: '3rem 0', color: 'var(--text-secondary)' }}>
                  Tidak ada proyek ditemukan.
                </div>
              )}
            </div>
          )}

          {activeTab === 'certificates' && (
            <div className="certificates-grid fade-in">
              {isLoading ? (
                <div style={{ textAlign: 'center', width: '100%', gridColumn: '1 / -1', padding: '3rem 0', color: 'var(--text-secondary)' }}>
                  Loading certificates from Sanity...
                </div>
              ) : certificates.length > 0 ? (
                certificates.map(cert => (
                  <div className="cert-card" key={cert._id}>
                    {cert.img && <img src={urlFor(cert.img).url()} alt={cert.title} className="cert-img" />}
                    <div className="cert-overlay">
                      <h4>{cert.title}</h4>
                      <p>{cert.org}</p>
                      {cert.link && <a href={cert.link} target="_blank" rel="noreferrer" className="btn btn-primary btn-sm">Lihat Kredensial</a>}
                    </div>
                  </div>
                ))
              ) : (
                <div style={{ textAlign: 'center', width: '100%', gridColumn: '1 / -1', padding: '3rem 0', color: 'var(--text-secondary)' }}>
                  Tidak ada sertifikat ditemukan.
                </div>
              )}
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
