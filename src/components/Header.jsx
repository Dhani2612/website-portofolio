import React, { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { FiSun, FiMoon, FiMenu, FiX } from 'react-icons/fi';
import './Header.css';

const Header = ({ theme, toggleTheme }) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (e, sectionId) => {
    e.preventDefault();
    setMobileMenuOpen(false);

    if (location.pathname !== '/') {
      // Navigasi ke beranda dulu, lalu scroll ke seksi yang dituju
      navigate('/', { state: { scrollTo: sectionId } });
    } else {
      // Sudah di beranda, langsung scroll
      const el = document.getElementById(sectionId);
      if (el) el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className={`header ${scrolled ? 'scrolled' : ''}`}>
      <div className="container header-container">
        <div className="logo">
          <a href="#home" onClick={(e) => handleNavClick(e, 'home')} className="nav-signature">Dhani.kp</a>
        </div>

        <nav className={`nav-links ${mobileMenuOpen ? 'open' : ''}`}>
          <a href="#home" onClick={(e) => handleNavClick(e, 'home')}>Beranda</a>
          <a href="#experience" onClick={(e) => handleNavClick(e, 'experience')}>Pengalaman & Pendidikan</a>
          <a href="#portfolio" onClick={(e) => handleNavClick(e, 'portfolio')}>Portfolio</a>
          <a href="#contact" onClick={(e) => handleNavClick(e, 'contact')}>Kontak</a>
        </nav>

        <div className="header-actions">
          <button className="theme-toggle" onClick={toggleTheme} aria-label="Toggle Theme">
            {theme === 'light' ? <FiMoon size={20} /> : <FiSun size={20} />}
          </button>

          <button className="mobile-toggle" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
            {mobileMenuOpen ? <FiX size={24} /> : <FiMenu size={24} />}
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
