import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import ProjectDetails from './pages/ProjectDetails';

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

function App() {
  const [loading, setLoading] = useState(true);
  const [fadeOut, setFadeOut] = useState(false);

  useEffect(() => {
    // Start fading out the loader overlay after 2.2 seconds
    const fadeTimer = setTimeout(() => {
      setFadeOut(true);
    }, 2200);

    // Completely remove the loader from DOM after 3.2 seconds
    const completeTimer = setTimeout(() => {
      setLoading(false);
    }, 3200);

    return () => {
      clearTimeout(fadeTimer);
      clearTimeout(completeTimer);
    };
  }, []);

  return (
    <>
      {loading && (
        <div
          className={`fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-[#0e0216] transition-opacity duration-1000 ease-in-out ${
            fadeOut ? 'opacity-0 pointer-events-none' : 'opacity-100'
          }`}
        >
          {/* Dynamic background ambient lighting */}
          <div className="absolute top-1/4 left-1/4 w-80 h-80 bg-[#4e0078]/15 rounded-full blur-[120px] pointer-events-none"></div>
          <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-[#6a1b9a]/10 rounded-full blur-[120px] pointer-events-none"></div>

          <div className="relative flex flex-col items-center z-10 space-y-6">
            {/* Logo Wrapper */}
            <div className="relative">
              {/* Pulsing halo background shadow */}
              <div className="absolute inset-0 bg-white/5 rounded-full blur-xl scale-125 animate-pulse"></div>
              <img
                src="/logo.png"
                alt="Orchid Properties Logo"
                className="relative h-20 w-auto object-contain brightness-0 invert filter drop-shadow-[0_0_15px_rgba(255,255,255,0.35)]"
                style={{ animation: 'float 4s infinite ease-in-out' }}
              />
            </div>

            {/* Typography */}
            <div className="text-center space-y-2">
              <h1
                className="text-white font-headline-md font-bold uppercase text-xl md:text-2xl"
                style={{
                  animation: 'fadeInLetters 1.8s ease-out forwards',
                  letterSpacing: '0.3em'
                }}
              >
                Orchid Properties
              </h1>
              <p className="text-white/40 text-[10px] tracking-[0.4em] uppercase font-semibold">
                Own Your Story
              </p>
            </div>

            {/* Fine line loading bar */}
            <div className="w-36 h-[2px] bg-white/10 rounded-full overflow-hidden relative">
              <div
                className="absolute left-0 top-0 h-full bg-gradient-to-r from-[#4e0078] via-[#e4b5ff] to-[#4e0078]"
                style={{
                  width: '100%',
                  animation: 'loadLine 2s ease-in-out infinite'
                }}
              ></div>
            </div>
          </div>
        </div>
      )}

      <Router>
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/projects" element={<ProjectDetails />} />
          <Route path="/projects/:projectId" element={<ProjectDetails />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
