import React, { useState, useEffect } from 'react';
import { Typewriter } from 'react-simple-typewriter';
import { FiDownload } from 'react-icons/fi';
import { FaGithub, FaLinkedin, FaInstagram } from 'react-icons/fa';
import './Hero.css';

const Hero = () => {
  const [greeting, setGreeting] = useState('Halo');

  useEffect(() => {
    const hour = new Date().getHours();
    if (hour < 12) setGreeting('Selamat Pagi');
    else if (hour < 17) setGreeting('Selamat Siang');
    else if (hour < 20) setGreeting('Selamat Sore');
    else setGreeting('Selamat Malam');
  }, []);

  return (
    <section id="home" className="hero">
      <div className="container hero-container">
        <div className="hero-content">
          <div className="status-badge fade-in">
            <span className="dot-pulse"></span>
            Available For New Opportunities
          </div>
          <p className="greeting">{greeting}, saya</p>
          <h1 className="name">Dhani Kartika Prihantyo</h1>
          <h2 className="role">
            Tertarik Dalam Bidang{' '}
            <span className="typewriter-text">
              <Typewriter
                words={['Machine Learning', 'Data Scientist', 'Programming', 'Web Developer']}
                loop={true}
                cursor
                cursorStyle="|"
                typeSpeed={80}
                deleteSpeed={50}
                delaySpeed={1500}
              />
            </span>
          </h2>
          <p className="description">
            Mahasiswa Informatika dengan dedikasi tinggi pada pengembangan solusi teknologi informasi. Memadukan fondasi akademik yang kuat dengan keahlian teknis yang adaptif serta kecakapan manajerial yang strategis. Termotivasi untuk terus mengeksplorasi inovasi terbaru, saya sangat terbuka terhadap peluang magang dan tantangan di ranah profesional guna memberikan dampak positif secara nyata.
          </p>
          <div className="hero-actions">
            <a href="https://drive.google.com/file/d/1K7j0Fic4KfvVf_ixWRDtRVLCAthF8DaN/view?usp=sharing" className="btn btn-primary" download>
              <FiDownload size={18} /> Unduh CV
            </a>
            <div className="hero-social">
              <a href="https://github.com/Dhani2612" target="_blank" rel="noreferrer" className="hero-social-link"><FaGithub /></a>
              <a href="https://www.linkedin.com/in/dhanikp/" target="_blank" rel="noreferrer" className="hero-social-link"><FaLinkedin /></a>
              <a href="https://www.instagram.com/dhann.kp/" target="_blank" rel="noreferrer" className="hero-social-link"><FaInstagram /></a>
            </div>
          </div>
        </div>

        <div className="hero-image">
          <div className="hero-terminal shadow-brilliant">
            <div className="terminal-header">
              <div className="terminal-dots">
                <span className="t-dot red"></span>
                <span className="t-dot yellow"></span>
                <span className="t-dot green"></span>
              </div>
              <span className="terminal-title">dhani_profil.jpg</span>
            </div>
            <div className="terminal-image-body">
              <img src="FotoProfil.png" alt="Profile" className="hero-img" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
