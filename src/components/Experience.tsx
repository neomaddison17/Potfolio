import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, ChevronUp } from 'lucide-react';
import { portfolioData } from '../data';
export function Experience() {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(0);
  return (
    <section id="experience" className="py-24 relative z-10">
      <div className="max-w-5xl mx-auto px-6 md:px-12">
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
            EXPERIENCE
          </h2>
          <div className="h-1 w-20 bg-cyber-magenta rounded-full shadow-[0_0_10px_rgba(236,72,153,0.5)]"></div>
        </motion.div>

        <div className="relative border-l border-white/10 ml-4 md:ml-0">
          {portfolioData.experience.map((exp, index) => {
            const isExpanded = expandedIndex === index;
            const displayHighlights = isExpanded ?
            exp.highlights :
            exp.highlights.slice(0, 3);
            return (
              <motion.div
                key={`${exp.company}-${index}`}
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
                  duration: 0.5,
                  delay: index * 0.1
                }}
                className="mb-12 ml-8 relative">
                
                {/* Timeline Dot */}
                <div className="absolute -left-[41px] top-1.5 w-4 h-4 rounded-full bg-cyber-dark border-2 border-cyber-magenta shadow-[0_0_10px_rgba(236,72,153,0.8)] z-10"></div>

                <div className="glass-card rounded-2xl p-6 md:p-8 hover:border-cyber-magenta/30 transition-colors">
                  <div className="flex flex-col md:flex-row md:items-center justify-between mb-4">
                    <div>
                      <h3 className="text-xl md:text-2xl font-bold text-white mb-1">
                        {exp.title}
                      </h3>
                      <h4 className="text-cyber-cyan font-medium">
                        {exp.company}
                      </h4>
                    </div>
                    <div className="mt-2 md:mt-0 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-sm text-slate-300 w-fit">
                      {exp.period}
                    </div>
                  </div>

                  <ul className="space-y-3 mt-6">
                    <AnimatePresence initial={false}>
                      {displayHighlights.map((highlight, hIndex) =>
                      <motion.li
                        key={hIndex}
                        initial={{
                          opacity: 0,
                          height: 0
                        }}
                        animate={{
                          opacity: 1,
                          height: 'auto'
                        }}
                        exit={{
                          opacity: 0,
                          height: 0
                        }}
                        className="text-slate-400 text-sm md:text-base flex items-start">
                        
                          <span className="text-cyber-magenta mr-2 mt-1">
                            ▹
                          </span>
                          <span>{highlight}</span>
                        </motion.li>
                      )}
                    </AnimatePresence>
                  </ul>

                  {exp.highlights.length > 3 &&
                  <button
                    onClick={() =>
                    setExpandedIndex(isExpanded ? null : index)
                    }
                    className="mt-6 flex items-center text-sm text-cyber-purple hover:text-cyber-cyan transition-colors font-medium">
                    
                      {isExpanded ?
                    <>
                          Show Less <ChevronUp size={16} className="ml-1" />
                        </> :

                    <>
                          Show More ({exp.highlights.length - 3}){' '}
                          <ChevronDown size={16} className="ml-1" />
                        </>
                    }
                    </button>
                  }
                </div>
              </motion.div>);

          })}
        </div>
      </div>
    </section>);

}