import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import './Contact.css';

const Contact = () => {
  const { t } = useLanguage();

  return (
    <footer id="contact" className="minimal-footer">
      <div className="footer-content">
        <span className="footer-tagline">{t('footer', 'tagline')}</span>
        <span className="footer-copyright">
          &copy; 2026 Dhani Kartika Prihantyo. {t('footer', 'copyright')}
        </span>
      </div>
    </footer>
  );
};

export default Contact;
