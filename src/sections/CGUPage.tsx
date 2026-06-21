import React from 'react';
import { FileText, Shield, UserCheck, AlertTriangle } from 'lucide-react';

export const CGUPage: React.FC = () => {
  return (
    <div className="min-h-screen pt-20 px-6">
      <div className="max-w-4xl mx-auto py-20">
        <div className="bg-dark-card border border-gray-800 rounded-[2.5rem] p-8 md:p-16 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-france-blue/5 rounded-full blur-[100px] -mr-32 -mt-32" />
          
          <div className="relative z-10">
            <div className="flex items-center gap-4 mb-12 text-france-blue">
              <FileText size={40} />
              <h1 className="text-4xl md:text-5xl font-black uppercase tracking-tighter text-white">
                Conditions Générales <span className="text-france-blue">d'Utilisation</span>
              </h1>
            </div>

            <div className="space-y-12 text-gray-300 leading-relaxed">
              {/* Article 1 */}
              <section>
                <div className="flex items-center gap-3 mb-4 text-white">
                  <Shield size={24} className="text-france-blue" />
                  <h2 className="text-2xl font-bold uppercase tracking-tight">1. Acceptation des conditions</h2>
                </div>
                <p>
                  En accédant au site web de France Launcher ou en téléchargeant le logiciel, vous acceptez d'être lié par les présentes conditions générales d'utilisation, toutes les lois et réglementations applicables, et acceptez que vous êtes responsable du respect des lois locales applicables.
                </p>
              </section>

              {/* Article 2 */}
              <section>
                <div className="flex items-center gap-3 mb-4 text-white">
                  <UserCheck size={24} className="text-france-blue" />
                  <h2 className="text-2xl font-bold uppercase tracking-tight">2. Comportement de l'utilisateur</h2>
                </div>
                <p className="mb-4">
                  L'utilisation de France Launcher implique le respect des règles communautaires suivantes :
                </p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Interdiction formelle d'utiliser des logiciels de triche (cheats, hacks) sur les serveurs partenaires.</li>
                  <li>Respect de la propriété intellectuelle de belyxzor et des actifs de France Launcher.</li>
                  <li>Interdiction de harceler, d'abuser ou de nuire à d'autres membres de la communauté.</li>
                  <li>Interdiction d'exploiter des failles de sécurité du launcher ou du site.</li>
                </ul>
              </section>

              {/* Article 3 */}
              <section>
                <div className="flex items-center gap-3 mb-4 text-white">
                  <AlertTriangle size={24} className="text-france-blue" />
                  <h2 className="text-2xl font-bold uppercase tracking-tight">3. Limitation de responsabilité</h2>
                </div>
                <p>
                  France Launcher est fourni "en l'état". belyxzor ne donne aucune garantie, expresse ou implicite, et décline par la présente toute autre garantie, y compris, sans limitation, les garanties implicites ou conditions de qualité marchande, d'adéquation à un usage particulier ou de non-violation de la propriété intellectuelle.
                </p>
              </section>

              {/* Article 4 */}
              <section>
                <div className="flex items-center gap-3 mb-4 text-white">
                  <FileText size={24} className="text-france-blue" />
                  <h2 className="text-2xl font-bold uppercase tracking-tight">4. Modifications</h2>
                </div>
                <p>
                  belyxzor peut réviser ces conditions d'utilisation pour son site web et son logiciel à tout moment sans préavis. En utilisant ce site web ou ce logiciel, vous acceptez d'être lié par la version alors en vigueur de ces conditions générales d'utilisation.
                </p>
              </section>
            </div>

            <div className="mt-16 pt-8 border-t border-gray-800 text-center text-gray-500 text-sm italic">
              Dernière mise à jour : 21 Juin 2026
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
