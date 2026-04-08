import React from 'react';
import { motion } from 'framer-motion';
import { FolderGit2 } from 'lucide-react';
import { portfolioData } from '../data';
export function Projects() {
  return (
    <section id="projects" className="py-24 relative z-10 bg-black/20">
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
            PROJECTS
          </h2>
          <div className="h-1 w-20 bg-cyber-cyan rounded-full shadow-[0_0_10px_rgba(6,182,212,0.5)]"></div>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {portfolioData.projects.map((project, index) =>
          <motion.div
            key={project.title}
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
            className="glass-card glass-card-hover rounded-2xl p-6 flex flex-col h-full group">
            
              <div className="flex justify-between items-start mb-6">
                <div className="p-3 rounded-xl bg-cyber-cyan/10 text-cyber-cyan group-hover:bg-cyber-cyan group-hover:text-cyber-dark transition-colors duration-300">
                  <FolderGit2 size={24} />
                </div>
                <span className="text-xs font-mono text-slate-500 bg-white/5 px-2 py-1 rounded">
                  {project.period}
                </span>
              </div>

              <h3 className="text-lg font-bold text-white mb-3 group-hover:text-cyber-cyan transition-colors">
                {project.title}
              </h3>

              <p className="text-sm text-slate-400 leading-relaxed flex-grow">
                {project.description}
              </p>
            </motion.div>
          )}
        </div>
      </div>
    </section>);

}