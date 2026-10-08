import React, { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { FiDownload, FiChevronDown } from 'react-icons/fi';
import { FaGithub, FaLinkedin, FaInstagram } from 'react-icons/fa';
import { FiMail } from 'react-icons/fi';
import { useLanguage } from '../context/LanguageContext';
import './Hero.css';

const Hero = () => {
  const [greeting, setGreeting] = useState('Halo');
  const { lang, t } = useLanguage();

  const [isCvDropdownOpen, setIsCvDropdownOpen] = useState(false);
  const cvDropdownRef = useRef(null);

  // Link CV: id sudah terisi, en menunggu link dari user
  const cvLinks = {
    id: "https://drive.google.com/file/d/1K7j0Fic4KfvVf_ixWRDtRVLCAthF8DaN/view?usp=sharing",
    en: "#"
  };

  useEffect(() => {
    const hour = new Date().getHours();
    if (hour < 12) setGreeting(lang === 'id' ? 'Selamat Pagi' : 'Good Morning');
    else if (hour < 17) setGreeting(lang === 'id' ? 'Selamat Siang' : 'Good Afternoon');
    else if (hour < 20) setGreeting(lang === 'id' ? 'Selamat Sore' : 'Good Evening');
    else setGreeting(lang === 'id' ? 'Selamat Malam' : 'Good Night');
  }, [lang]);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (cvDropdownRef.current && !cvDropdownRef.current.contains(event.target)) {
        setIsCvDropdownOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <section id="home" className="hero-section">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
      >
        <div className="section-header">
          <span className="section-label">{t('hero', 'profile')}</span>
          <h2 className="section-heading">{t('hero', 'heading')}</h2>
        </div>

        {/* Name & Role */}
        <div className="hero-intro">
          <h1 className="hero-name">Dhani Kartika Prihantyo</h1>


          <div className="hero-bio">
            <p>
              {greeting}. {t('hero', 'bio1')}
            </p>
            <p>
              {t('hero', 'bio2')}
            </p>
          </div>
        </div>

        {/* CTA Buttons */}
        <div className="hero-actions">
          <div className="cv-dropdown-wrapper" ref={cvDropdownRef}>
            <button 
              type="button"
              className="btn btn-primary cv-dropdown-toggle"
              onClick={() => setIsCvDropdownOpen(prev => !prev)}
              aria-haspopup="true"
              aria-expanded={isCvDropdownOpen}
            >
              <FiDownload size={14} /> 
              <span>{t('hero', 'downloadCv')}</span>
              <FiChevronDown size={14} className={`chevron-icon ${isCvDropdownOpen ? 'open' : ''}`} />
            </button>

            {isCvDropdownOpen && (
              <div className="cv-dropdown-menu">
                <a 
                  href={cvLinks.id} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="cv-dropdown-item"
                  onClick={() => setIsCvDropdownOpen(false)}
                >
                  <span className="cv-item-badge">ID</span>
                  <span className="cv-item-label">{t('hero', 'cvId')}</span>
                </a>
                <a 
                  href={cvLinks.en !== '#' ? cvLinks.en : undefined} 
                  target={cvLinks.en !== '#' ? "_blank" : undefined}
                  rel={cvLinks.en !== '#' ? "noopener noreferrer" : undefined}
                  className={`cv-dropdown-item ${cvLinks.en === '#' ? 'coming-soon' : ''}`}
                  onClick={(e) => {
                    if (cvLinks.en === '#') {
                      e.preventDefault();
                      alert(lang === 'id' ? 'Link CV Bahasa Inggris akan segera tersedia.' : 'English CV link will be available soon.');
                    }
                    setIsCvDropdownOpen(false);
                  }}
                >
                  <span className="cv-item-badge">EN</span>
                  <span className="cv-item-label">{t('hero', 'cvEn')}</span>
                  {cvLinks.en === '#' && <span className="cv-item-hint">Soon</span>}
                </a>
              </div>
            )}
          </div>

          <a href="#portfolio" className="btn btn-secondary">
            {t('hero', 'exploreWork')}
          </a>
        </div>

        {/* Social Links */}
        <div className="hero-connect">
          <span className="connect-label">{t('hero', 'connect')}</span>
          <div className="social-icons">
            <a href="https://github.com/Dhani2612" target="_blank" rel="noreferrer" className="social-link" aria-label="GitHub">
              <FaGithub />
            </a>
            <a href="https://www.linkedin.com/in/dhanikp/" target="_blank" rel="noreferrer" className="social-link" aria-label="LinkedIn">
              <FaLinkedin />
            </a>
            <a href="https://www.instagram.com/dhann.kp/" target="_blank" rel="noreferrer" className="social-link" aria-label="Instagram">
              <FaInstagram />
            </a>
            <a href="mailto:kartikadani0@gmail.com" className="social-link" aria-label="Email">
              <FiMail />
            </a>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;
