import React from 'react';
import { MessageSquare } from 'lucide-react';
import { Button } from '../components/Button';

export const Community: React.FC = () => {
  return (
    <section id="community" className="py-32 relative">
      <div className="max-w-6xl mx-auto px-6">
        <div className="bg-gradient-to-br from-france-blue/10 to-dark-card/30 border border-france-blue/20 rounded-[2.5rem] p-10 md:p-20 relative overflow-hidden group backdrop-blur-sm">
          {/* Décoration de fond */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-france-blue/10 rounded-full blur-[100px] -mr-48 -mt-48 group-hover:bg-france-blue/20 transition-colors duration-500" />
          
          <div className="relative z-10 flex flex-col lg:flex-row items-center justify-between gap-12">
            <div className="text-center lg:text-left">
              <h2 className="text-4xl sm:text-5xl font-black mb-8">
                REJOIGNEZ <br />
                L'ÉLITE DU PVP
              </h2>
              <p className="text-gray-300 text-xl max-w-lg mb-0 leading-relaxed">
                Plus de 10 000 joueurs passionnés vous attendent. Partagez vos exploits, trouvez des alliés et participez à nos événements exclusifs.
              </p>
            </div>
            
            <div className="flex flex-col items-center gap-6">
              <a href="https://discord.gg/france-launcher" target="_blank" rel="noopener noreferrer" className="w-full sm:w-auto">
                <Button className="w-full sm:w-auto bg-[#5865F2] hover:bg-[#4752C4] border-none shadow-[0_0_40px_rgba(88,101,242,0.3)] hover:shadow-[0_0_60px_rgba(88,101,242,0.5)] text-xl px-12 py-6">
                  <span className="flex items-center gap-3">
                    <MessageSquare size={28} />
                    REJOINDRE DISCORD
                  </span>
                </Button>
              </a>
              <p className="text-sm text-gray-400 font-medium">
                Support réactif • Communauté soudée • News en avant-première
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
