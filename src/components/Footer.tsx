import React from 'react';
import { portfolioData } from '../data';
export function Footer() {
  return (
    <footer className="py-8 border-t border-white/10 relative z-10 bg-cyber-dark">
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex flex-col md:flex-row items-center justify-between">
        <p className="text-slate-500 text-sm mb-4 md:mb-0">
          © {new Date().getFullYear()} {portfolioData.personal.name}. All
          rights reserved.
        </p>
        <div className="flex space-x-6 text-sm text-slate-500">
          <span className="hover:text-white transition-colors cursor-pointer">
            Built with React & Tailwind
          </span>
          <span className="hover:text-white transition-colors cursor-pointer">
            Cyberpunk Theme
          </span>
        </div>
      </div>
    </footer>);

}