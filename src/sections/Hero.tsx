import React from 'react';
import { Button } from '../components/Button';
import { Download } from 'lucide-react';
import { Link } from 'react-router-dom';

export const Hero: React.FC = () => {
  return (
    <section id="home" className="relative min-h-[calc(100vh-73px)] flex flex-col items-center justify-center text-center px-6 overflow-hidden">
      {/* Background decoration - Dégradé subtil sans image */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-b from-[#0b0e14]/0 via-[#0b0e14]/50 to-[#0b0e14]" />
      </div>

      <div className="relative z-10 max-w-4xl mx-auto">
        <span className="px-4 py-1.5 rounded-full text-xs font-semibold bg-france-blue/20 border border-france-blue/50 text-france-blue mb-8 inline-block backdrop-blur-md">
          PROJET 100% FRANÇAIS • VERSION BETA 1.0
        </span>

        <h1 className="text-5xl sm:text-8xl font-black tracking-tighter text-white mb-8 leading-none uppercase">
          France <br />
          <span className="bg-gradient-to-r from-france-blue via-white to-france-red bg-clip-text text-transparent">
            Launcher
          </span>
        </h1>

        <p className="text-gray-300 text-lg sm:text-2xl max-w-2xl mx-auto mb-12 leading-relaxed">
          Optimisations extrêmes, anti-cheat infaillible et une interface pensée pour la performance. Le launcher ultime pour les joueurs exigeants.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
          <Link to="/download">
            <Button variant="primary" className="text-lg px-10 py-5">
              <span className="flex items-center gap-3">
                <Download size={24} />
                TÉLÉCHARGER
              </span>
            </Button>
          </Link>
          <a href="#features">
            <Button variant="secondary" className="text-lg px-10 py-5">
              DÉCOUVRIR
            </Button>
          </a>
        </div>

        <div className="mt-12 flex items-center justify-center gap-8 text-gray-400 text-sm">
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
            <span>12,450 Joueurs actifs</span>
          </div>
          <div className="hidden sm:block">|</div>
          <span>Compatible 1.8.9 - 1.21</span>
        </div>
      </div>
    </section>
  );
};
