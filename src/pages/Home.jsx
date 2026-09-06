import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import Hero from '../components/Hero';
import EduAndAchieve from '../components/EduAndAchieve';
import TabbedContent from '../components/TabbedContent';
import Contact from '../components/Contact';
import LanguageSwitcher from '../components/LanguageSwitcher';

const Home = () => {
  const location = useLocation();

  useEffect(() => {
    // Handle scroll to hash when landing on Home
    if (location.hash) {
      const id = location.hash.replace('#', '');
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  }, [location]);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <LanguageSwitcher />
      <main className="page-container">
        <div className="top-layout">
          {/* Left Column: Hero/Profile */}
          <Hero />
          
          {/* Right Column: Education & Achievements */}
          <div className="right-content">
            <EduAndAchieve />
          </div>
        </div>

        {/* Bottom Section: Tabs for Professional, Organization, Projects, Certs */}
        <div className="bottom-layout" id="portfolio">
          <TabbedContent />
        </div>

        {/* Footer / Contact */}
        <Contact />
      </main>
    </motion.div>
  );
};

export default Home;
