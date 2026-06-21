import React from 'react';
import { ShieldAlert, CheckCircle2, XCircle, Copyright, MessageSquare } from 'lucide-react';

export const LicensePage: React.FC = () => {
  return (
    <div className="min-h-screen pt-20 px-6">
      <div className="max-w-4xl mx-auto py-20">
        <div className="bg-dark-card border border-gray-800 rounded-[2.5rem] p-8 md:p-16 relative overflow-hidden">
          {/* Background decoration */}
          <div className="absolute top-0 left-0 w-64 h-64 bg-france-blue/5 rounded-full blur-[100px] -ml-32 -mt-32" />
          
          <div className="relative z-10">
            <div className="flex items-center gap-4 mb-8 text-france-blue">
              <Copyright size={40} />
              <h1 className="text-4xl md:text-5xl font-black uppercase tracking-tighter">
                France Launcher — <span className="text-white">License</span>
              </h1>
            </div>

            <div className="space-y-8 text-gray-300 leading-relaxed">
              <div className="bg-dark-bg/50 rounded-2xl p-6 border border-gray-800">
                <p className="text-xl font-bold text-white mb-2">Copyright © 2026 belyxzor — All Rights Reserved</p>
                <p>
                  All Rights Reserved. This website, launcher, and all associated source code 
                  are the exclusive intellectual property of <span className="text-white font-bold">belyxzor</span>. 
                  No usage, reproduction, or distribution is permitted without explicit written 
                  consent from the author.
                </p>
              </div>

              {/* Forbidden Section */}
              <div className="space-y-6">
                <div className="flex items-center gap-3 text-france-red">
                  <ShieldAlert size={24} />
                  <h2 className="text-2xl font-black uppercase">❌ You may NOT:</h2>
                </div>
                <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {[
                    "Copy or reproduce the source code, layout, or visual design.",
                    "Modify or create derivative works from any part of the project.",
                    "Redistribute or re-upload the launcher or website files.",
                    "Sell or monetize this project, its code, or its assets.",
                    "Claim ownership or authorship of France Launcher."
                  ].map((item, index) => (
                    <li key={index} className="flex items-start gap-3 bg-france-red/5 border border-france-red/10 p-4 rounded-xl">
                      <XCircle size={20} className="text-france-red shrink-0 mt-0.5" />
                      <span className="text-sm font-medium">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Allowed Section */}
              <div className="space-y-6">
                <div className="flex items-center gap-3 text-green-500">
                  <CheckCircle2 size={24} />
                  <h2 className="text-2xl font-black uppercase">✅ You may:</h2>
                </div>
                <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {[
                    "Use the launcher to play and access authorized servers.",
                    "Share the official link of this website with your community."
                  ].map((item, index) => (
                    <li key={index} className="flex items-start gap-3 bg-green-500/5 border border-green-500/10 p-4 rounded-xl">
                      <CheckCircle2 size={20} className="text-green-500 shrink-0 mt-0.5" />
                      <span className="text-sm font-medium">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Contact / Discord Section */}
            <div className="mt-16 pt-8 border-t border-gray-800 flex flex-col items-center gap-4 text-center">
              <p className="text-gray-400 text-sm">
                For permissions, inquiries, or to contact the staff, join our official Discord server:
              </p>
              <a 
                href="https://discord.gg/wtf3HRFk3X" 
                target="_blank" 
                rel="noreferrer"
                className="flex items-center gap-2 px-6 py-3 rounded-xl font-bold bg-[#5865F2] hover:bg-[#4752C4] text-white shadow-[0_0_20px_rgba(88,101,242,0.2)] hover:shadow-[0_0_30px_rgba(88,101,242,0.4)] transition-all duration-300 transform hover:-translate-y-0.5"
              >
                <MessageSquare size={20} />
                Contact Staff on Discord
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};