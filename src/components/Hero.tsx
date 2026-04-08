import React from 'react';
import { motion } from 'framer-motion';
import { portfolioData } from '../data';
export function Hero() {
  return (
    <section
      id="about"
      className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden">
      
      <div className="max-w-7xl mx-auto px-6 md:px-12 w-full grid lg:grid-cols-2 gap-12 items-center z-10">
        <motion.div
          initial={{
            opacity: 0,
            x: -50
          }}
          animate={{
            opacity: 1,
            x: 0
          }}
          transition={{
            duration: 0.8,
            ease: 'easeOut'
          }}
          className="flex flex-col items-start">
          
          <div className="inline-block px-4 py-1.5 rounded-full border border-cyber-cyan/30 bg-cyber-cyan/10 text-cyber-cyan text-sm font-medium mb-6 backdrop-blur-sm">
            {portfolioData.personal.location} • Product Manager
          </div>

          <h1 className="font-display text-7xl md:text-8xl lg:text-[10rem] leading-none text-white mb-2 tracking-wider text-glow-purple">
            NEERAJ
            <br />
            RAM
          </h1>

          <h2 className="text-xl md:text-2xl text-slate-300 font-light mb-6">
            Product Management & Strategy
          </h2>

          <p className="text-slate-400 max-w-lg mb-10 leading-relaxed">
            {portfolioData.personal.summary}
          </p>

          <div className="flex flex-wrap gap-4">
            <a
              href="#contact"
              className="px-8 py-3 rounded-full bg-cyber-purple text-white font-medium hover:bg-cyber-purple/90 hover:shadow-[0_0_20px_rgba(168,85,247,0.6)] transition-all duration-300">
              
              Get In Touch
            </a>
            <a
              href="#projects"
              className="px-8 py-3 rounded-full border border-white/20 text-white font-medium hover:bg-white/10 hover:border-white/50 transition-all duration-300">
              
              View Projects
            </a>
          </div>
        </motion.div>

        <motion.div
          initial={{
            opacity: 0,
            scale: 0.9
          }}
          animate={{
            opacity: 1,
            scale: 1
          }}
          transition={{
            duration: 1,
            delay: 0.2
          }}
          className="relative hidden lg:block">
          
          <div className="absolute inset-0 bg-gradient-to-tr from-cyber-purple/20 to-cyber-cyan/20 rounded-full blur-3xl mix-blend-screen" />
          <img
            src="/image.png"
            alt="Neeraj Ram"
            className="w-full h-auto max-w-lg mx-auto relative z-10 rounded-2xl border border-white/10 shadow-[0_0_50px_rgba(168,85,247,0.15)] object-cover"
            style={{
              maskImage:
              'linear-gradient(to bottom, black 80%, transparent 100%)',
              WebkitMaskImage:
              'linear-gradient(to bottom, black 80%, transparent 100%)'
            }} />
          

          {/* Decorative floating elements */}
          <motion.div
            animate={{
              y: [0, -20, 0]
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: 'easeInOut'
            }}
            style={{ zIndex: 50 }}
            className="absolute top-10 -left-10 glass-card px-4 py-2 rounded-lg text-xs font-mono text-cyber-cyan border-cyber-cyan/30">
            
            SYS.INIT()
          </motion.div>
          <motion.div
            animate={{
              y: [0, 20, 0]
            }}
            transition={{
              duration: 5,
              repeat: Infinity,
              ease: 'easeInOut',
              delay: 1
            }}
            style={{ zIndex: 50 }}
            className="absolute bottom-20 -right-5 glass-card px-4 py-2 rounded-lg text-xs font-mono text-cyber-purple border-cyber-purple/30">
            
            DATA_SYNC: 100%
          </motion.div>
        </motion.div>
      </div>
    </section>);

}