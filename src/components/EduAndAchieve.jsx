import React from 'react';
import { motion } from 'framer-motion';
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
        <span className="section-label">{t('edu', 'title')}</span>
        <h2 className="section-heading">{t('edu', 'heading')}</h2>
      </motion.div>

      <motion.div 
        className="education-card"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeUp}
      >
        <div className="education-header">
          <span className="status-badge">{t('edu', 'statusBadge')}</span>
        </div>
        <div className="education-info">
          <h3>Informatika</h3>
          <h4>UPN "Veteran" Yogyakarta</h4>
          <span className="period">2023 - {t('edu', 'now')}</span>
        </div>
      </motion.div>

      <motion.div 
        className="quick-info-section"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeUp}
      >
        <div className="info-list">
          <div className="info-item">
            <span className="info-label">{t('edu', 'locationLabel')}</span>
            <span className="info-value">Sleman, DI Yogyakarta</span>
          </div>
          <div className="info-item">
            <span className="info-label">{t('edu', 'focusLabel')}</span>
            <span className="info-value">Software Dev, Data Science</span>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default EduAndAchieve;
