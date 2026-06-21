import React, { useState, useEffect } from 'react';
import { Menu, X, Download } from 'lucide-react';
import { Button } from './Button';
import { Link } from 'react-router-dom';

export const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
      isScrolled ? 'bg-dark-bg/90 backdrop-blur-xl py-4 border-b border-gray-800/50' : 'bg-transparent py-6'
    }`}>
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-3 group">
          <div className="w-12 h-12 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
            <img src="/logo.png" alt="France Launcher Logo" className="w-full h-full object-contain" />
          </div>
          <div className="flex flex-col">
            <span className="text-xl font-black tracking-tighter leading-none">FRANCE</span>
            <span className="text-xs font-bold text-france-blue tracking-[0.2em] leading-none mt-1">LAUNCHER</span>
          </div>
        </Link>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-10">
          <Link to="/" className="text-sm font-bold uppercase tracking-widest text-gray-400 hover:text-white transition-colors">Accueil</Link>
          <a href="/#features" className="text-sm font-bold uppercase tracking-widest text-gray-400 hover:text-white transition-colors">Fonctionnalités</a>
          <a href="/#community" className="text-sm font-bold uppercase tracking-widest text-gray-400 hover:text-white transition-colors">Communauté</a>
          <Link to="/download">
            <Button variant="primary" className="px-6 py-3">
              <span className="flex items-center gap-2">
                <Download size={18} />
                JOUER
              </span>
            </Button>
          </Link>
        </div>

        {/* Mobile Toggle */}
        <button 
          className="md:hidden text-white p-2 hover:bg-white/10 rounded-lg transition-colors"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X size={32} /> : <Menu size={32} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-dark-card/95 backdrop-blur-2xl border-b border-gray-800 p-8 flex flex-col gap-8 animate-in fade-in slide-in-from-top-4 duration-300">
          <a href="#home" onClick={() => setIsMobileMenuOpen(false)} className="text-xl font-bold uppercase tracking-widest text-gray-400">Accueil</a>
          <a href="#features" onClick={() => setIsMobileMenuOpen(false)} className="text-xl font-bold uppercase tracking-widest text-gray-400">Fonctionnalités</a>
          <a href="#community" onClick={() => setIsMobileMenuOpen(false)} className="text-xl font-bold uppercase tracking-widest text-gray-400">Communauté</a>
          <a href="#home" onClick={() => setIsMobileMenuOpen(false)}>
            <Button variant="primary" className="w-full text-lg py-4">TÉLÉCHARGER</Button>
          </a>
        </div>
      )}
    </nav>
  );
};
