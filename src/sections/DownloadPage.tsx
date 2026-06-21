import React, { useState } from 'react';
import { Download, Monitor, ShieldCheck, X } from 'lucide-react';
import { Button } from '../components/Button';

export const DownloadPage: React.FC = () => {
  const [showModal, setShowModal] = useState(false);
  const [selectedOS, setSelectedOS] = useState<'Windows' | 'Linux' | null>(null);

  const handleDownloadClick = (os: 'Windows' | 'Linux') => {
    setSelectedOS(os);
    setShowModal(true);
  };

  const confirmDownload = () => {
    alert(`Téléchargement lancé pour ${selectedOS} ! (Ceci est une démo)`);
    setShowModal(false);
  };

  return (
    <div className="min-h-screen pt-20 px-6">
      <div className="max-w-6xl mx-auto py-20 text-center">
        <h1 className="text-5xl sm:text-7xl font-black mb-8 uppercase tracking-tighter">
          PRÊT POUR <span className="text-france-blue">L'AVENTURE ?</span>
        </h1>
        <p className="text-gray-400 text-xl max-w-2xl mx-auto mb-16 leading-relaxed">
          Choisis ta plateforme et rejoins des milliers de joueurs sur France Launcher.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-4xl mx-auto">
          {/* Windows Option */}
          <div className="bg-dark-card border border-gray-800 p-10 rounded-[2rem] hover:border-france-blue/50 transition-all duration-300 group relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-france-blue/5 rounded-full blur-3xl -mr-16 -mt-16" />
            <Monitor size={64} className="text-france-blue mx-auto mb-8 group-hover:scale-110 transition-transform duration-500" />
            <h2 className="text-3xl font-black mb-4">WINDOWS</h2>
            <p className="text-gray-500 mb-8">Recommandé pour la meilleure expérience PVP.</p>
            <Button 
              variant="primary" 
              className="w-full py-5 text-lg"
              onClick={() => handleDownloadClick('Windows')}
            >
              TÉLÉCHARGER (.EXE)
            </Button>
            <p className="mt-4 text-xs text-gray-600 font-bold uppercase tracking-widest">Version Beta 1.0</p>
          </div>

          {/* Linux Option */}
          <div className="bg-dark-card border border-gray-800 p-10 rounded-[2rem] hover:border-france-red/50 transition-all duration-300 group relative overflow-hidden opacity-75 grayscale hover:grayscale-0 hover:opacity-100">
            <div className="absolute top-0 right-0 w-32 h-32 bg-france-red/5 rounded-full blur-3xl -mr-16 -mt-16" />
            <div className="absolute inset-0 bg-black/40 backdrop-blur-[1px] flex items-center justify-center z-10 pointer-events-none">
                <span className="bg-france-red text-white px-4 py-2 rounded-lg font-black rotate-12 text-xl shadow-xl">COMING SOON</span>
            </div>
            <Monitor size={64} className="text-france-red mx-auto mb-8 group-hover:scale-110 transition-transform duration-500" />
            <h2 className="text-3xl font-black mb-4">LINUX</h2>
            <p className="text-gray-500 mb-8">Optimisé pour les distributions Debian/Ubuntu.</p>
            <Button 
              variant="secondary" 
              className="w-full py-5 text-lg cursor-not-allowed"
              onClick={() => {}}
            >
              TÉLÉCHARGER (.APPIMAGE)
            </Button>
            <p className="mt-4 text-xs text-gray-600 font-bold uppercase tracking-widest">En développement</p>
          </div>
        </div>

        <div className="mt-20 p-8 border border-gray-800 rounded-2xl max-w-2xl mx-auto bg-dark-card/30 backdrop-blur-sm">
            <div className="flex items-center gap-4 text-left">
                <div className="w-12 h-12 bg-green-500/10 rounded-full flex items-center justify-center text-green-500 shrink-0">
                    <ShieldCheck size={28} />
                </div>
                <div>
                    <h3 className="font-bold text-white">Sécurité Garantie</h3>
                    <p className="text-sm text-gray-500">Tous nos fichiers sont scannés et certifiés sans virus. L'anti-cheat est intégré directement dans le launcher.</p>
                </div>
            </div>
        </div>
      </div>

      {/* TOS Modal */}
      {showModal && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-6">
          <div className="absolute inset-0 bg-black/80 backdrop-blur-md" onClick={() => setShowModal(false)} />
          <div className="relative bg-dark-card border border-gray-800 w-full max-w-lg rounded-[2rem] p-8 shadow-2xl animate-in zoom-in duration-300">
            <button 
              className="absolute top-6 right-6 text-gray-500 hover:text-white transition-colors"
              onClick={() => setShowModal(false)}
            >
              <X size={24} />
            </button>
            
            <h2 className="text-2xl font-black mb-6 uppercase tracking-tight">Conditions d'utilisation</h2>
            
            <div className="bg-dark-bg/50 rounded-xl p-6 h-64 overflow-y-auto mb-8 text-gray-400 text-sm leading-relaxed scrollbar-thin scrollbar-thumb-gray-800">
              <p className="mb-4 font-bold text-white">En téléchargeant France Launcher, vous acceptez les points suivants :</p>
              <ul className="list-disc pl-4 space-y-3">
                <li>Vous n'utiliserez pas de logiciels tiers de triche non autorisés.</li>
                <li>Le launcher collecte des données anonymes de performance pour améliorer l'expérience.</li>
                <li>L'anti-cheat s'exécutera en arrière-plan pendant vos sessions de jeu.</li>
                <li>Vous respecterez les autres joueurs sur nos serveurs partenaires.</li>
                <li>Toute tentative de reverse-engineering du launcher est interdite.</li>
                <li>France Launcher n'est pas affilié à Mojang ou Microsoft.</li>
              </ul>
            </div>

            <div className="flex flex-col gap-4">
              <Button variant="primary" className="w-full py-4" onClick={confirmDownload}>
                J'ACCEPTE ET JE TÉLÉCHARGE
              </Button>
              <Button variant="secondary" className="w-full py-4" onClick={() => setShowModal(false)}>
                ANNULER
              </Button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
