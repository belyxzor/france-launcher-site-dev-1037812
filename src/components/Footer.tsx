import React from 'react';
import { Github, Twitter, Youtube } from 'lucide-react';
import { Link } from 'react-router-dom';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-dark-card border-t border-gray-800 py-12">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8">
          <div>
            <Link to="/" className="flex items-center gap-2 mb-4 group">
              <div className="w-8 h-8 flex items-center justify-center group-hover:scale-110 transition-transform">
                <img src="/logo.png" alt="Logo" className="w-full h-full object-contain" />
              </div>
              <span className="text-lg font-bold">France Launcher</span>
            </Link>
            <p className="text-gray-500 text-sm">
              © {new Date().getFullYear()} France Launcher. Tous droits réservés.<br />
              Propriété exclusive de belyxzor.
            </p>
          </div>

          <div className="flex items-center gap-6">
            <a href="#" className="text-gray-400 hover:text-white transition-colors">
              <Twitter size={20} />
            </a>
            <a href="#" className="text-gray-400 hover:text-white transition-colors">
              <Youtube size={20} />
            </a>
            <a href="#" className="text-gray-400 hover:text-white transition-colors">
              <Github size={20} />
            </a>
          </div>

          <div className="flex gap-8 text-sm text-gray-400">
            <Link to="/license" className="hover:text-white transition-colors">License</Link>
            <Link to="/cgu" className="hover:text-white transition-colors">CGU</Link>
            <Link to="/contact" className="hover:text-white transition-colors">Contact</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};
