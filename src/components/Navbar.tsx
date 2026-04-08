import React, { useEffect, useState } from 'react';
import { Menu, X } from 'lucide-react';
export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  const navLinks = [
  {
    name: 'About',
    href: '#about'
  },
  {
    name: 'Experience',
    href: '#experience'
  },
  {
    name: 'Projects',
    href: '#projects'
  },
  {
    name: 'Services',
    href: '#services'
  }];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'bg-cyber-dark/80 backdrop-blur-md border-b border-white/10 py-4' : 'bg-transparent py-6'}`}>
      
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between">
        <a
          href="#"
          className="font-display text-2xl tracking-widest text-white hover:text-glow-purple transition-all">
          
          NEERAJ RAM
        </a>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center space-x-8">
          {navLinks.map((link) =>
          <a
            key={link.name}
            href={link.href}
            className="text-sm text-slate-300 hover:text-white hover:text-glow-cyan transition-all">
            
              {link.name}
            </a>
          )}
          <a
            href="#contact"
            className="px-5 py-2 rounded-full border border-cyber-purple text-cyber-purple hover:bg-cyber-purple hover:text-white hover:shadow-[0_0_15px_rgba(168,85,247,0.5)] transition-all duration-300 text-sm font-medium">
            
            Contact
          </a>
        </div>

        {/* Mobile Menu Toggle */}
        <button
          className="md:hidden text-white"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
          
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Nav */}
      {mobileMenuOpen &&
      <div className="md:hidden absolute top-full left-0 right-0 bg-cyber-dark/95 backdrop-blur-xl border-b border-white/10 py-6 px-6 flex flex-col space-y-6">
          {navLinks.map((link) =>
        <a
          key={link.name}
          href={link.href}
          onClick={() => setMobileMenuOpen(false)}
          className="text-lg text-slate-300 hover:text-white">
          
              {link.name}
            </a>
        )}
          <a
          href="#contact"
          onClick={() => setMobileMenuOpen(false)}
          className="inline-block text-center px-5 py-3 rounded-full border border-cyber-purple text-cyber-purple hover:bg-cyber-purple hover:text-white transition-all">
          
            Contact
          </a>
        </div>
      }
    </nav>);

}