import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import Hero from '../components/Hero';
import Experience from '../components/Experience';
import Portfolio from '../components/Portfolio';
import Contact from '../components/Contact';

const Home = () => {
  const location = useLocation();

  useEffect(() => {
    // Jika datang dari halaman lain dengan perintah scroll ke seksi tertentu
    if (location.state?.scrollTo) {
      setTimeout(() => {
        const el = document.getElementById(location.state.scrollTo);
        if (el) el.scrollIntoView({ behavior: 'smooth' });
      }, 100); // Jeda kecil agar DOM sempat termuat
    }
  }, [location.state]);

  return (
    <main>
      <Hero />
      <Experience />
      <Portfolio />
      <Contact />
    </main>
  );
};

export default Home;
