import React, { useEffect } from 'react';
import { HashRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import Solutions from './pages/Solutions';
import Technologies from './pages/Technologies';
import VSGSimulation from './pages/VSGSimulation';
import HydroTool from './pages/HydroTool';
import Contact from './pages/Contact';
import { LanguageProvider } from './contexts/LanguageContext';

const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
};

function App() {
  return (
    <LanguageProvider>
      <Router>
         <ScrollToTop />
        <div className="flex flex-col min-h-screen bg-white text-slate-900 font-sans">
          <Header />
          
          <main className="flex-grow">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/solutions" element={<Solutions />} />
              <Route path="/technologies" element={<Technologies />} />
              <Route path="/simulation" element={<VSGSimulation />} />
              <Route path="/hydro-tool" element={<HydroTool />} />
              <Route path="/contact" element={<Contact />} />
            </Routes>
          </main>

          <Footer />
        </div>
      </Router>
    </LanguageProvider>
  );
}

export default App;