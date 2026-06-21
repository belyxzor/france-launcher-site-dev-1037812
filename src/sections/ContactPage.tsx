import React from 'react';
import { Mail, MessageSquare, Send, Globe, MapPin } from 'lucide-react';
import { Button } from '../components/Button';

export const ContactPage: React.FC = () => {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert("Message envoyé ! (Ceci est une démonstration)");
  };

  return (
    <div className="min-h-screen pt-20 px-6">
      <div className="max-w-6xl mx-auto py-20">
        <div className="text-center mb-16">
          <h1 className="text-5xl sm:text-7xl font-black mb-6 uppercase tracking-tighter">
            CONTACTEZ-<span className="text-france-blue">NOUS</span>
          </h1>
          <p className="text-gray-400 text-xl max-w-2xl mx-auto">
            Une question ? Un bug à signaler ? Notre équipe est là pour vous aider.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Info */}
          <div className="space-y-8">
            <div className="bg-dark-card border border-gray-800 p-8 rounded-3xl relative overflow-hidden group">
              <div className="absolute top-0 right-0 w-32 h-32 bg-france-blue/5 rounded-full blur-3xl -mr-16 -mt-16" />
              <div className="relative z-10 flex items-start gap-6">
                <div className="w-14 h-14 bg-france-blue/10 rounded-2xl flex items-center justify-center text-france-blue shrink-0 group-hover:scale-110 transition-transform">
                  <MessageSquare size={28} />
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">Support Discord</h3>
                  <p className="text-gray-400 mb-4">Rejoignez notre serveur pour une aide instantanée de la part de notre équipe de modération.</p>
                  <a href="https://discord.gg/france-launcher" target="_blank" rel="noopener noreferrer" className="text-france-blue font-bold hover:underline">
                    Rejoindre le Discord →
                  </a>
                </div>
              </div>
            </div>

            <div className="bg-dark-card border border-gray-800 p-8 rounded-3xl relative overflow-hidden group">
              <div className="absolute top-0 right-0 w-32 h-32 bg-france-red/5 rounded-full blur-3xl -mr-16 -mt-16" />
              <div className="relative z-10 flex items-start gap-6">
                <div className="w-14 h-14 bg-france-red/10 rounded-2xl flex items-center justify-center text-france-red shrink-0 group-hover:scale-110 transition-transform">
                  <Mail size={28} />
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">Email Business</h3>
                  <p className="text-gray-400 mb-4">Pour les partenariats ou les demandes administratives uniquement.</p>
                  <a href="mailto:contact@france-launcher.fr" className="text-france-red font-bold hover:underline">
                    contact@france-launcher.fr
                  </a>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-6">
                <div className="bg-dark-card border border-gray-800 p-6 rounded-2xl text-center">
                    <Globe size={24} className="mx-auto mb-3 text-gray-500" />
                    <p className="text-sm font-bold">100% Français</p>
                </div>
                <div className="bg-dark-card border border-gray-800 p-6 rounded-2xl text-center">
                    <MapPin size={24} className="mx-auto mb-3 text-gray-500" />
                    <p className="text-sm font-bold">Hébergé en France</p>
                </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-dark-card border border-gray-800 p-10 rounded-[2.5rem] shadow-2xl">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-sm font-bold uppercase tracking-widest text-gray-500">Nom / Pseudo</label>
                  <input 
                    type="text" 
                    required
                    className="w-full bg-dark-bg border border-gray-800 rounded-xl px-4 py-3 focus:border-france-blue outline-none transition-colors"
                    placeholder="Votre nom"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-bold uppercase tracking-widest text-gray-500">Email</label>
                  <input 
                    type="email" 
                    required
                    className="w-full bg-dark-bg border border-gray-800 rounded-xl px-4 py-3 focus:border-france-blue outline-none transition-colors"
                    placeholder="votre@email.com"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-sm font-bold uppercase tracking-widest text-gray-500">Sujet</label>
                <select className="w-full bg-dark-bg border border-gray-800 rounded-xl px-4 py-3 focus:border-france-blue outline-none transition-colors appearance-none">
                  <option>Support Technique</option>
                  <option>Signalement de Bug</option>
                  <option>Demande de Partenariat</option>
                  <option>Autre</option>
                </select>
              </div>

              <div className="space-y-2">
                <label className="text-sm font-bold uppercase tracking-widest text-gray-500">Message</label>
                <textarea 
                  required
                  rows={5}
                  className="w-full bg-dark-bg border border-gray-800 rounded-xl px-4 py-3 focus:border-france-blue outline-none transition-colors resize-none"
                  placeholder="Comment pouvons-nous vous aider ?"
                ></textarea>
              </div>

              <Button variant="primary" className="w-full py-4 text-lg">
                <span className="flex items-center justify-center gap-3">
                  <Send size={20} />
                  ENVOYER LE MESSAGE
                </span>
              </Button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};
