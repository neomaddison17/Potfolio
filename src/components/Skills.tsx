import React from 'react';
import { motion } from 'framer-motion';
import { portfolioData } from '../data';
export function Skills() {
  return (
    <section className="py-24 relative z-10">
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
          className="mb-12">
          
          <h2 className="font-display text-4xl md:text-5xl text-white mb-2">
            SKILLS & EXPERTISE
          </h2>
          <div className="h-1 w-20 bg-cyber-cyan rounded-full shadow-[0_0_10px_rgba(6,182,212,0.5)]"></div>
        </motion.div>

        <div className="flex flex-wrap gap-4">
          {portfolioData.skills.map((skill, index) =>
          <motion.div
            key={skill}
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
              duration: 0.4,
              delay: index * 0.05
            }}
            whileHover={{
              scale: 1.05
            }}
            className="glass-card glass-card-hover px-6 py-3 rounded-full text-sm md:text-base text-slate-200 cursor-default">
            
              {skill}
            </motion.div>
          )}
        </div>
      </div>
    </section>);

}