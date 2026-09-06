import { Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import Home from './pages/Home';
import ProjectDetail from './pages/ProjectDetail';
import './index.css';
import { Analytics } from "@vercel/analytics/react";
import { LanguageProvider } from './context/LanguageContext';

function App() {
  const location = useLocation();

  return (
    <LanguageProvider>
      {/* Subtle grid background */}
      <div className="bg-grid" aria-hidden="true" />

      <AnimatePresence mode="wait">
        <Routes location={location} key={location.pathname}>
          <Route path="/" element={<Home />} />
          <Route path="/project/:id" element={<ProjectDetail />} />
        </Routes>
      </AnimatePresence>

      <Analytics />
    </LanguageProvider>
  );
}

export default App;
