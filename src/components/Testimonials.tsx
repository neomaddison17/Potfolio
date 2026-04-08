import React from 'react';
import { motion } from 'framer-motion';
import { Quote } from 'lucide-react';
import { portfolioData } from '../data';
export function Testimonials() {
  return (
    <section className="py-24 relative z-10 overflow-hidden">
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
            WHAT PEOPLE SAY
          </h2>
          <div className="h-1 w-20 bg-cyber-purple rounded-full shadow-[0_0_10px_rgba(168,85,247,0.5)] mx-auto"></div>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {portfolioData.testimonials.map((testimonial, index) =>
          <motion.div
            key={testimonial.name}
            initial={{
              opacity: 0,
              scale: 0.95
            }}
            whileInView={{
              opacity: 1,
              scale: 1
            }}
            viewport={{
              once: true
            }}
            transition={{
              duration: 0.5,
              delay: index * 0.1
            }}
            className="glass-card rounded-2xl p-8 relative">
            
              <Quote className="absolute top-6 right-6 text-white/5 w-12 h-12" />

              <p className="text-slate-300 text-sm leading-relaxed mb-8 relative z-10 italic">
                "{testimonial.quote}"
              </p>

              <div className="mt-auto relative z-10">
                <h4 className="text-white font-semibold">{testimonial.name}</h4>
                <p className="text-cyber-purple text-xs mt-1">
                  {testimonial.role}
                </p>
              </div>
            </motion.div>
          )}
        </div>
      </div>
    </section>);

}