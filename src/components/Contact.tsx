import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, Linkedin } from 'lucide-react';
import { portfolioData } from '../data';
export function Contact() {
  return (
    <section id="contact" className="py-32 relative z-10 overflow-hidden">
      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-2xl h-[400px] bg-cyber-purple/20 blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-4xl mx-auto px-6 md:px-12 text-center relative z-10">
        <motion.div
          initial={{
            opacity: 0,
            scale: 0.9
          }}
          whileInView={{
            opacity: 1,
            scale: 1
          }}
          viewport={{
            once: true
          }}
          transition={{
            duration: 0.8
          }}>
          
          <h2 className="font-display text-6xl md:text-8xl text-white mb-6 tracking-wider text-glow-purple">
            LET'S WORK
            <br />
            TOGETHER
          </h2>

          <p className="text-slate-300 text-lg md:text-xl mb-12 max-w-2xl mx-auto">
            Currently seeking a challenging role to utilise my skills and drive
            business growth. My inbox is always open.
          </p>

          <a
            href={`mailto:${portfolioData.personal.email}`}
            className="inline-block px-10 py-4 rounded-full bg-white text-cyber-dark font-bold text-lg hover:scale-105 hover:shadow-[0_0_30px_rgba(255,255,255,0.3)] transition-all duration-300 mb-16">
            
            Send Me A Message
          </a>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-6 sm:gap-12 text-slate-400">
            <a
              href={`mailto:${portfolioData.personal.email}`}
              className="flex items-center hover:text-cyber-cyan transition-colors">
              
              <Mail size={20} className="mr-3" />
              {portfolioData.personal.email}
            </a>
            <a
              href={`tel:${portfolioData.personal.phone.replace(/\s/g, '')}`}
              className="flex items-center hover:text-cyber-magenta transition-colors">
              
              <Phone size={20} className="mr-3" />
              {portfolioData.personal.phone}
            </a>
            <a
              href={portfolioData?.personal?.linkedinUrl}
              className="flex items-center hover:text-cyber-purple transition-colors">
              
              <Linkedin size={20} className="mr-3" />
              {portfolioData.personal.linkedin}
            </a>
          </div>
        </motion.div>
      </div>
    </section>);

}