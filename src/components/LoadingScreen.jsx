import React, { useEffect, useState } from 'react';
import { FiCode, FiDatabase, FiZap, FiGlobe } from 'react-icons/fi';
import './LoadingScreen.css';

const LoadingScreen = ({ isFadingOut, onFinish }) => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    // Total durasi screen = 2.5 detik untuk simulasi loading elegan
    const duration = 2500;
    const interval = 25; // per ms timing tick
    const step = 100 / (duration / interval);
    
    const timer = setInterval(() => {
      setProgress(prev => {
        if (prev >= 100) {
          clearInterval(timer);
          onFinish(); // Memberitahu App bahwa proses (load) telah 100%
          return 100;
        }
        return prev + step;
      });
    }, interval);

    return () => clearInterval(timer);
  }, [onFinish]);

  return (
    <div className={`loading-screen ${isFadingOut ? 'fade-out' : ''}`}>
      <div className="loading-content">
        
        {/* Tiga Icon Gelembung */}
        <div className="loading-icons">
          <div className="icon-box"><FiCode /></div>
          <div className="icon-box"><FiDatabase /></div>
          <div className="icon-box"><FiZap /></div>
        </div>

        {/* Teks Nyala */}
        <div className="loading-text">
          <h2 className="welcome-text">WELCOME TO MY</h2>
          <h1 className="glowing-text">PORTFOLIO WEBSITE</h1>
        </div>

        {/* Pill Badge devgr clone */}
        <div className="badge-wrapper">
          <div className="developer-badge">
            <FiGlobe /> dev dhani<span className="blink-cursor">|</span>
          </div>
        </div>

        {/* Batang Progres Biru */}
        <div className="progress-container">
          <div className="progress-bar" style={{ width: `${progress}%` }}></div>
        </div>
        
      </div>
    </div>
  );
};

export default LoadingScreen;
