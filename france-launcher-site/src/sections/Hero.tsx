import React, { useEffect, useState } from 'react';
import { Button } from '../components/Button';

export const Hero: React.FC = () => {
  const [os, setOs] = useState<'Windows' | 'macOS' | 'Linux' | 'Indéterminé'>('Windows');
  const [downloadLink, setDownloadLink] = useState<string>('#');

  useEffect(() => {
    // Détection de la plateforme de l'utilisateur
    const platform = navigator.userAgent.toLowerCase();
    
    if (platform.includes('win')) {
      setOs('Windows');
      setDownloadLink('/downloads/FranceLauncher-Setup.exe'); // Mets ton lien ici
    } else if (platform.includes('mac')) {
      setOs('macOS');
      setDownloadLink('/downloads/FranceLauncher.dmg');
    } else if (platform.includes('linux')) {
      setOs('Linux');
      setDownloadLink('/downloads/FranceLauncher.AppImage');
    } else {
      setOs('Indéterminé');
      setDownloadLink('#download-options');
    }
  }, []);

  const triggerDownload = () => {
    if (downloadLink.startsWith('#')) {
      document.getElementById('features')?.scrollIntoView({ behavior: 'smooth' });
    } else {
      window.location.href = downloadLink;
    }
  };

  return (
    <section id="home" className="relative min-h-[calc(100vh-73px)] flex flex-col items-center justify-center text-center px-6 overflow-hidden">
      
      {/* Effet de lumière bleue en arrière-plan */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-france-blue/10 rounded-full blur-[120px] pointer-events-none" />

      {/* Contenu principal */}
      <div className="relative z-10 max-w-4xl mx-auto flex flex-col items-center">
        
        {/* Badge version */}
        <span className="px-4 py-1.5 rounded-full text-xs font-semibold bg-france-blue/10 border border-france-blue/30 text-france-blue mb-6 tracking-wide uppercase">
          Version Beta 1.0 disponible
        </span>

        {/* Titre */}
        <h1 className="text-4xl sm:text-6xl font-extrabold tracking-tight text-white mb-6 leading-tight">
          Le launcher Minecraft <br />
          <span className="bg-gradient-to-r from-france-blue via-white to-france-red bg-clip-text text-transparent">
            optimisé pour le PVP
          </span>
        </h1>

        {/* Description */}
        <p className="text-gray-400 text-lg sm:text-xl max-w-2xl mb-10 leading-relaxed">
          Propulse tes FPS au maximum, profite d'un anti-cheat de confiance et rejoins la plus grande communauté de joueurs français en un clic.
        </p>

        {/* Boutons dynamiques */}
        <div id="download" className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto">
          <Button variant="primary" onClick={triggerDownload}>
            {os !== 'Indéterminé' ? `Télécharger pour ${os}` : 'Télécharger le Launcher'}
          </Button>
          <a href="#features">
            <Button variant="secondary">
              Voir les nouveautés
            </Button>
          </a>
        </div>

        {/* Infos supplémentaires sous le bouton */}
        <p className="text-xs text-gray-500 mt-5 flex items-center gap-2">
          <span>Gratuit & sans crack</span> • <span>Java 17/21 pré-intégré</span>
        </p>
      </div>
    </section>
  );
};