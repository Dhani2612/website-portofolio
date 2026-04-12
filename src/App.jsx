import { useState, useEffect } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import Header from './components/Header';
import LoadingScreen from './components/LoadingScreen';
import Background from './components/Background';
import Home from './pages/Home';
import ProjectDetail from './pages/ProjectDetail';
import './index.css';
import { Analytics } from "@vercel/analytics/react";

function App() {
  const location = useLocation();
  const [theme, setTheme] = useState('dark');
  const [isLoading, setIsLoading] = useState(true);
  const [showLoadingScreen, setShowLoadingScreen] = useState(true);

  useEffect(() => {
    // Inject theme to root html element
    document.documentElement.setAttribute('data-theme', theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prev) => (prev === 'light' ? 'dark' : 'light'));
  };

  const handleFinishLoading = () => {
    setIsLoading(false);
    setTimeout(() => {
      setShowLoadingScreen(false);
    }, 700);
  };

  return (
    <>
      <div className="app-container">
        {showLoadingScreen && (
          <LoadingScreen 
            isFadingOut={!isLoading} 
            onFinish={handleFinishLoading} 
          />
        )}

        <Background />
        
        <Header theme={theme} toggleTheme={toggleTheme} />
        
        <AnimatePresence mode="wait">
          <Routes location={location} key={location.pathname}>
            <Route path="/" element={<Home />} />
            <Route path="/project/:id" element={<ProjectDetail />} />
          </Routes>
        </AnimatePresence>
      </div>
      <Analytics />
    </>
  );
}

export default App;
