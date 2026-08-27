import React, { useEffect, useState, useRef } from 'react';
import { motion, useMotionValue, useSpring, useMotionTemplate } from 'framer-motion';
import './Background.css';

const Background = () => {
  const mouseX = useMotionValue(-1000);
  const mouseY = useMotionValue(-1000);
  
  const springX = useSpring(mouseX, { damping: 25, stiffness: 120 });
  const springY = useSpring(mouseY, { damping: 25, stiffness: 120 });

  const [stars, setStars] = useState([]);
  const bgRef = useRef(null);

  useEffect(() => {
    // Bangkitkan 70 bintang statis acak
    const generateStars = () => {
      const arr = [];
      for (let i = 0; i < 70; i++) {
        arr.push({
          id: i,
          x: Math.random() * 100,
          y: Math.random() * 100,
          size: Math.random() * 2.5 + 0.5, // 0.5px to 3px
          opacity: Math.random() * 0.7 + 0.3,
          delay: Math.random() * 5
        });
      }
      setStars(arr);
    };
    generateStars();

    const handleMouseMove = (e) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, [mouseX, mouseY]);

  return (
    <div className="interactive-bg-wrapper" ref={bgRef}>
      {/* Glow yang menempel pada mouse */}
      <motion.div 
        className="mouse-glow-orb"
        style={{
          '--mouse-x': useMotionTemplate`${springX}px`,
          '--mouse-y': useMotionTemplate`${springY}px`
        }}
      ></motion.div>

      {/* Pola Garis Grid Khas Developer */}
      <div className="bg-grid-overlay"></div>

      {/* Partikel Bintang Mengapung */}
      <div className="stars-container">
        {stars.map((star) => (
          <div
            key={star.id}
            className="star-node"
            style={{
              left: `${star.x}%`,
              top: `${star.y}%`,
              width: `${star.size}px`,
              height: `${star.size}px`,
              opacity: star.opacity,
              animationDelay: `${star.delay}s`
            }}
          ></div>
        ))}
      </div>
    </div>
  );
};

export default Background;
