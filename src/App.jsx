import { useState, useEffect } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import Header from './components/Header';

import Background from './components/Background';
import Home from './pages/Home';
import ProjectDetail from './pages/ProjectDetail';
import './index.css';
import { Analytics } from "@vercel/analytics/react";

function App() {
  const location = useLocation();
  const [isTerminalOpen, setIsTerminalOpen] = useState(true);

  return (
    <>
      <div className="app-container">

        <Background />
        
        <Header isTerminalOpen={isTerminalOpen} setIsTerminalOpen={setIsTerminalOpen} />
        
        <AnimatePresence mode="wait">
          <Routes location={location} key={location.pathname}>
            <Route path="/" element={<Home isTerminalOpen={isTerminalOpen} setIsTerminalOpen={setIsTerminalOpen} />} />
            <Route path="/project/:id" element={<ProjectDetail />} />
          </Routes>
        </AnimatePresence>
      </div>
      <Analytics />
    </>
  );
}

export default App;
