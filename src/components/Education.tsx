import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, Award } from 'lucide-react';
import { portfolioData } from '../data';
export function Education() {
  return (
    <section className="py-24 relative z-10 bg-black/20">
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
          className="mb-16">
          
          <h2 className="font-display text-4xl md:text-5xl text-white mb-2">
            EDUCATION & CERTIFICATIONS
          </h2>
          <div className="h-1 w-20 bg-cyber-magenta rounded-full shadow-[0_0_10px_rgba(236,72,153,0.5)]"></div>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Education */}
          <motion.div
            initial={{
              opacity: 0,
              x: -20
            }}
            whileInView={{
              opacity: 1,
              x: 0
            }}
            viewport={{
              once: true
            }}
            transition={{
              duration: 0.5
            }}
            className="lg:col-span-1">
            
            <div className="glass-card rounded-2xl p-8 h-full border-t-4 border-t-cyber-cyan">
              <div className="w-12 h-12 rounded-full bg-cyber-cyan/10 flex items-center justify-center text-cyber-cyan mb-6">
                <GraduationCap size={24} />
              </div>
              <h3 className="text-xl font-bold text-white mb-2">
                {portfolioData.education[0].degree}
              </h3>
              <p className="text-slate-400">
                {portfolioData.education[0].institution}
              </p>
            </div>
          </motion.div>

          {/* Certifications */}
          <div className="lg:col-span-2 grid sm:grid-cols-2 gap-4">
            {portfolioData.certifications.map((cert, index) =>
            <motion.div
              key={cert.title}
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
                duration: 0.5,
                delay: index * 0.1
              }}
              className="glass-card rounded-xl p-6 flex items-start space-x-4 hover:bg-white/5 transition-colors">
              
                <div className="mt-1 text-cyber-magenta">
                  <Award size={20} />
                </div>
                <div>
                  <h4 className="text-white font-medium mb-1 leading-tight">
                    {cert.title}
                  </h4>
                  <div className="flex items-center text-xs text-slate-400 space-x-2">
                    <span>{cert.issuer}</span>
                    <span>•</span>
                    <span>{cert.year}</span>
                  </div>
                </div>
              </motion.div>
            )}
          </div>
        </div>
      </div>
    </section>);

}