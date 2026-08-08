"use client";

import { motion } from 'motion/react';
import { Briefcase, MapPin, Calendar } from 'lucide-react';

export function Experience() {
  return (
    <section id="experience" className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-24 bg-card/30 border-y border-white/5">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.5 }}
        className="max-w-3xl"
      >
        <h2 className="text-3xl font-bold tracking-tight sm:text-4xl text-foreground mb-12">
          Professional Experience
        </h2>
        
        <div className="relative">
          {/* Vertical Timeline Line */}
          <div className="absolute left-8 top-8 bottom-0 w-px bg-gradient-to-b from-primary/50 to-transparent" />
          
          {/* Experience Item */}
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="relative flex gap-6"
          >
            {/* Timeline Icon */}
            <div className="relative z-10 flex h-16 w-16 shrink-0 items-center justify-center rounded-full border border-white/10 bg-card shadow-xl shadow-black/20">
              <Briefcase className="h-6 w-6 text-primary" />
            </div>
            
            {/* Content Card */}
            <div className="flex-1 pb-12 pt-2">
              <div className="rounded-2xl border border-white/5 bg-card p-6 md:p-8 shadow-lg shadow-black/10 hover:border-primary/20 transition-colors">
                <div className="flex flex-col md:flex-row md:items-start justify-between gap-4 mb-6">
                  <div>
                    <h3 className="text-xl font-bold text-foreground">Web Developer Intern</h3>
                    <div className="flex items-center gap-2 mt-2 text-muted-foreground">
                      <span className="font-medium text-primary">AAHA Solutions</span>
                      <span>•</span>
                      <span className="inline-flex items-center gap-1 text-sm">
                        <MapPin className="h-3 w-3" />
                        Pondicherry
                      </span>
                    </div>
                  </div>
                  <div className="inline-flex items-center gap-1.5 rounded-full bg-white/5 px-3 py-1 text-sm font-medium text-muted-foreground border border-white/5">
                    <Calendar className="h-3.5 w-3.5" />
                    December 2024
                  </div>
                </div>
                
                <ul className="space-y-3 text-muted-foreground">
                  {[
                    "Built a responsive Contact and Credential Management System using HTML, CSS, PHP, and MySQL.",
                    "Used Git for version control and collaborated on debugging and cross-browser testing.",
                    "Maintained comprehensive project documentation.",
                    "Contributed to UI/UX improvements and responsive web development."
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-primary/60" />
                      <span className="leading-relaxed">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}
