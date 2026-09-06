import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import './LanguageSwitcher.css';

const LanguageSwitcher = () => {
  const { lang, toggleLanguage } = useLanguage();

  return (
    <div className="lang-switcher-container">
      <button onClick={toggleLanguage} className="lang-switcher" aria-label="Toggle Language">
        <span className={lang === 'id' ? 'active' : ''}>ID</span>
        <span className="divider">/</span>
        <span className={lang === 'en' ? 'active' : ''}>EN</span>
      </button>
    </div>
  );
};

export default LanguageSwitcher;
