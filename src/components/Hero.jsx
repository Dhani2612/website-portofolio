import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { FiDownload } from 'react-icons/fi';
import { FaGithub, FaLinkedin, FaInstagram } from 'react-icons/fa';
import { FiMail } from 'react-icons/fi';
import { useLanguage } from '../context/LanguageContext';
import './Hero.css';

const Hero = () => {
  const [greeting, setGreeting] = useState('Halo');
  const { lang, t } = useLanguage();

  useEffect(() => {
    const hour = new Date().getHours();
    if (hour < 12) setGreeting(lang === 'id' ? 'Selamat Pagi' : 'Good Morning');
    else if (hour < 17) setGreeting(lang === 'id' ? 'Selamat Siang' : 'Good Afternoon');
    else if (hour < 20) setGreeting(lang === 'id' ? 'Selamat Sore' : 'Good Evening');
    else setGreeting(lang === 'id' ? 'Selamat Malam' : 'Good Night');
  }, [lang]);

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
          <a 
            href="https://drive.google.com/file/d/1K7j0Fic4KfvVf_ixWRDtRVLCAthF8DaN/view?usp=sharing" 
            className="btn btn-primary"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FiDownload size={14} /> {t('hero', 'downloadCv')}
          </a>
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
