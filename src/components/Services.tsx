import React from 'react';
import { motion } from 'framer-motion';
import { portfolioData } from '../data';
export function Services() {
  return (
    <section id="services" className="py-24 relative z-10 bg-black/20">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <motion.div
          initial={{
            opacity: 0,
            y: 20
          }}
          whileInView={{
            opacity: 1,
            y: 0
          }}
          viewport={{
            once: true
          }}
          transition={{
            duration: 0.6
          }}
          className="mb-16 text-center">
          
          <h2 className="font-display text-4xl md:text-5xl text-white mb-2">
            SERVICES
          </h2>
          <div className="h-1 w-20 bg-cyber-purple rounded-full shadow-[0_0_10px_rgba(168,85,247,0.5)] mx-auto"></div>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
          {portfolioData.services.map((service, index) =>
          <motion.div
            key={service.title}
            initial={{
              opacity: 0,
              y: 30
            }}
            whileInView={{
              opacity: 1,
              y: 0
            }}
            viewport={{
              once: true
            }}
            transition={{
              duration: 0.5,
              delay: index * 0.1
            }}
            className="glass-card glass-card-hover rounded-2xl p-8 relative overflow-hidden group">
            
              <div className="absolute top-0 right-0 p-8 text-6xl font-display text-white/5 group-hover:text-cyber-purple/10 transition-colors duration-500 pointer-events-none">
                0{index + 1}
              </div>

              <h3 className="text-xl font-semibold text-white mb-4 relative z-10 group-hover:text-cyber-cyan transition-colors">
                {service.title}
              </h3>
              <p className="text-slate-400 leading-relaxed relative z-10">
                {service.description}
              </p>

              <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-cyber-purple to-cyber-cyan transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>
            </motion.div>
          )}
        </div>
      </div>
    </section>);

}