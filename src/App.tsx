import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Navbar } from './components/Navbar';
import { Hero } from './sections/Hero';
import { Features } from './sections/Features';
import { Community } from './sections/Community';
import { Footer } from './components/Footer';
import { DownloadPage } from './sections/DownloadPage';
import { LicensePage } from './sections/LicensePage';
import { CGUPage } from './sections/CGUPage';
import { ContactPage } from './sections/ContactPage';

const HomePage = () => (
  <>
    <Hero />
    <Features />
    <Community />
  </>
);

function App() {
  return (
    <Router>
      <div className="min-h-screen flex flex-col bg-[#0b0e14] text-white relative overflow-hidden">
        {/* Arrière-plan Drapeau Français (Bleu, Blanc, Rouge) très visuel */}
        <div className="fixed inset-0 z-0 pointer-events-none">
          {/* Bande Bleue (Gauche) */}
          <div className="absolute top-0 left-[-10%] w-[40%] h-full bg-france-blue/20 rounded-full blur-[120px] animate-pulse-slow" />
          
          {/* Bande Blanche (Centre) */}
          <div className="absolute top-0 left-[30%] w-[40%] h-full bg-white/5 rounded-full blur-[100px] animate-float" />
          
          {/* Bande Rouge (Droite) */}
          <div className="absolute top-0 right-[-10%] w-[40%] h-full bg-france-red/20 rounded-full blur-[120px] animate-pulse-slow" />
          
          {/* Superposition pour lisser le tout */}
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#0b0e14]/20 to-[#0b0e14]/60" />
        </div>
        <div className="relative z-10 flex flex-col min-h-screen">
          <Navbar />
          <main className="flex-grow pt-[73px]">
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/download" element={<DownloadPage />} />
              <Route path="/license" element={<LicensePage />} />
              <Route path="/cgu" element={<CGUPage />} />
              <Route path="/contact" element={<ContactPage />} />
            </Routes>
          </main>
          <Footer />
        </div>
      </div>
    </Router>
  );
}

export default App;
