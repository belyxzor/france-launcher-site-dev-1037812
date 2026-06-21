import React from 'react';
import { Zap, Shield, Globe, Target, Cpu, Users } from 'lucide-react';
import { FeatureCard } from '../components/FeatureCard';

export const Features: React.FC = () => {
  const features = [
    {
      title: "Optimisation FPS",
      description: "Gagne jusqu'à 60% de performances en plus grâce à nos patchs de rendu exclusifs et une gestion mémoire optimisée.",
      icon: Zap
    },
    {
      title: "Anti-Cheat Robuste",
      description: "Un système de protection transparent qui garantit l'équité sur tous vos serveurs PVP préférés.",
      icon: Shield
    },
    {
      title: "Multi-Versions",
      description: "Basculez entre les versions 1.8.9, 1.12.2, 1.16.5 et 1.21 instantanément avec vos paramètres sauvegardés.",
      icon: Globe
    },
    {
      title: "Mods PVP Intégrés",
      description: "Tous les outils indispensables : Keystrokes, CPS counter, Armor HUD, Toggle Sprint, et bien plus encore.",
      icon: Target
    },
    {
      title: "Latence Réduite",
      description: "Notre stack réseau propriétaire réduit le ping et optimise les paquets pour un avantage compétitif.",
      icon: Cpu
    },
    {
      title: "Social & Partage",
      description: "Rejoignez vos amis, partagez vos packs de textures et vos configurations de mods en un clic.",
      icon: Users
    }
  ];

  return (
    <section id="features" className="py-32 relative bg-[#0b0e14]/20">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-20">
          <h2 className="text-4xl sm:text-6xl font-black mb-6">
            L'AVANTAGE <span className="text-france-blue">FRANCE LAUNCHER</span>
          </h2>
          <p className="text-gray-400 text-xl max-w-3xl mx-auto">
            Plus qu'un simple lanceur, c'est un écosystème complet conçu pour sublimer votre expérience de jeu.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <FeatureCard 
              key={index}
              title={feature.title}
              description={feature.description}
              icon={feature.icon}
            />
          ))}
        </div>
      </div>
    </section>
  );
};
