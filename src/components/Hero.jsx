import React, { useState, useEffect, useRef } from 'react';
import { Typewriter } from 'react-simple-typewriter';
import { motion, AnimatePresence } from 'framer-motion';
import { FiDownload } from 'react-icons/fi';
import { FaGithub, FaLinkedin, FaInstagram } from 'react-icons/fa';
import './Hero.css';

const Hero = ({ isTerminalOpen, setIsTerminalOpen }) => {
  const [greeting, setGreeting] = useState('Halo');
  const [history, setHistory] = useState([
    { text: "Interactive Command Palette\nType 'help' to see available commands.", isCommand: false }
  ]);
  const [input, setInput] = useState('');
  const [isMaximized, setIsMaximized] = useState(false);
  const terminalBodyRef = useRef(null);

  useEffect(() => {
    const hour = new Date().getHours();
    if (hour < 12) setGreeting('Selamat Pagi');
    else if (hour < 17) setGreeting('Selamat Siang');
    else if (hour < 20) setGreeting('Selamat Sore');
    else setGreeting('Selamat Malam');
  }, []);

  useEffect(() => {
    if (terminalBodyRef.current) {
      terminalBodyRef.current.scrollTo({
        top: terminalBodyRef.current.scrollHeight,
        behavior: 'smooth'
      });
    }
  }, [history]);

  const handleCommand = (e) => {
    if (e.key === 'Enter') {
      const cmd = input.trim().toLowerCase();
      let response = '';

      if (cmd === 'help') {
        response = (
          <div className="cli-response">
            <div className="cli-info" style={{marginBottom: '0.5rem'}}>Available commands:</div>
            <table className="cli-table">
              <tbody>
                <tr><td className="cli-cmd-name">whoami</td><td>Display professional profile</td></tr>
                <tr><td className="cli-cmd-name">skills</td><td>List technical skills and stack</td></tr>
                <tr><td className="cli-cmd-name">projects</td><td>Information about latest work</td></tr>
                <tr><td className="cli-cmd-name">contact</td><td>Show contact information</td></tr>
                <tr><td className="cli-cmd-name">clear</td><td>Clear the terminal screen</td></tr>
              </tbody>
            </table>
          </div>
        );
      } else if (cmd === 'whoami') {
        response = (
          <div className="cli-response">
            <span className="cli-highlight">Dhani Kartika Prihantyo</span><br/>
            Web Developer & Data Science Enthusiast.<br/>
            Currently open for new opportunities.
          </div>
        );
      } else if (cmd === 'skills') {
        response = (
          <div className="cli-response cli-skills-list">
            <span className="cli-skill">React</span>
            <span className="cli-skill">Next.js</span>
            <span className="cli-skill">Python</span>
            <span className="cli-skill">TailwindCSS</span>
            <span className="cli-skill">Machine Learning</span>
          </div>
        );
      } else if (cmd === 'projects') {
        response = (
          <div className="cli-response">
            <span className="cli-info">Action:</span> Scroll down to the <span className="cli-highlight">Portfolio</span> section to see my work!
          </div>
        );
      } else if (cmd === 'contact') {
        response = (
          <div className="cli-response">
            Email: <a href="mailto:kartikadani0@gmail.com" className="cli-link">kartikadani0@gmail.com</a><br/>
            LinkedIn: <a href="https://linkedin.com/in/dhanikp" target="_blank" rel="noreferrer" className="cli-link">linkedin.com/in/dhanikp</a><br/>
            Instagram: <a href="https://instagram.com/dhann.kp" target="_blank" rel="noreferrer" className="cli-link">@dhann.kp</a>
          </div>
        );
      } else if (cmd === 'clear') {
        setHistory([]);
        setInput('');
        return;
      } else if (cmd !== '') {
        response = <div className="cli-error">Command not found: '{cmd}'. Type 'help'.</div>;
      }

      if (cmd !== '') {
        setHistory(prev => [
          ...prev, 
          { text: `> ${input}`, isCommand: true },
          { text: response, isCommand: false }
        ]);
      }
      setInput('');
    }
  };

  return (
    <section id="home" className="hero">
      <div className="container hero-container">
        <motion.div 
          className="hero-content"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
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
            Mahasiswa Informatika yang berfokus pada Software Development dan Data Science. Memiliki ketertarikan besar dalam membangun solusi teknologi yang efisien untuk memecahkan masalah dunia nyata. Selalu antusias mempelajari hal baru, saya sangat terbuka untuk peluang magang dan kolaborasi profesional.
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
        </motion.div>

        <motion.div 
          className="hero-image"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
        >
          <AnimatePresence>
            {isTerminalOpen && (
              <motion.div 
                className={`hero-terminal shadow-brilliant ${isMaximized ? 'maximized' : ''}`}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8 }}
                transition={{ duration: 0.3 }}
              >

                <div className="terminal-cli-body" ref={terminalBodyRef} onClick={() => document.getElementById('terminal-input').focus()}>
                  {history.map((line, idx) => (
                    <div key={idx} className={`cli-line ${line.isCommand ? 'cli-command' : 'cli-output'}`}>
                      {line.text}
                    </div>
                  ))}
                  <div className="cli-line cli-input-line">
                    <span className="cli-prompt">&gt;</span>
                    <input 
                      id="terminal-input"
                      type="text" 
                      value={input}
                      onChange={(e) => setInput(e.target.value)}
                      onKeyDown={handleCommand}
                      className="cli-input"
                      autoComplete="off"
                      spellCheck="false"
                      autoFocus
                    />
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
