import React, { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { FiDownload, FiChevronDown } from 'react-icons/fi';
import { useLanguage } from '../context/LanguageContext';
import './Hero.css';

const Hero = () => {
  const [greeting, setGreeting] = useState('Halo');
  const { lang, t } = useLanguage();

  const [isCvDropdownOpen, setIsCvDropdownOpen] = useState(false);
  const cvDropdownRef = useRef(null);

  // Link CV: id sudah terisi, en menunggu link dari user
  const cvLinks = {
    id: "https://drive.google.com/file/d/1eYhrE_bVsMBHcl4F03hv6iraGJX-Ih-D/view?usp=sharing",
    en: "https://drive.google.com/file/d/1_9gUiiEqTC4WLRuqj6opslTPmUPkFbzz/view?usp=sharing"
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
                  href={cvLinks.en} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="cv-dropdown-item"
                  onClick={() => setIsCvDropdownOpen(false)}
                >
                  <span className="cv-item-badge">EN</span>
                  <span className="cv-item-label">{t('hero', 'cvEn')}</span>
                </a>
              </div>
            )}
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;
