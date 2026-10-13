import React from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaInstagram } from 'react-icons/fa';
import { FiMail } from 'react-icons/fi';
import { useLanguage } from '../context/LanguageContext';
import './EduAndAchieve.css';

const EduAndAchieve = () => {
  const { t } = useLanguage();
  const fadeUp = {
    hidden: { opacity: 0, y: 15 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
  };

  return (
    <div className="edu-ach-section">
      <motion.div
        className="section-header"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeUp}
      >
        <h2 className="section-heading">{t('edu', 'heading')}</h2>
      </motion.div>

      <motion.div 
        className="education-card"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeUp}
      >
        <div className="education-info">
          <h3>Informatika</h3>
          <h4>UPN "Veteran" Yogyakarta</h4>
          <span className="period">2023 - {t('edu', 'now')}</span>
        </div>
      </motion.div>

      <motion.div 
        className="edu-connect-section"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeUp}
      >
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
      </motion.div>
    </div>
  );
};

export default EduAndAchieve;
