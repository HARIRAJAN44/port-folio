"use client";

import { motion } from 'motion/react';

export function Education() {
  return (
    <section id="education" className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-32 border-t border-border">
      <div className="grid md:grid-cols-12 gap-12 md:gap-8">
        
        <div className="md:col-span-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            <h2 className="text-sm font-bold tracking-widest uppercase text-muted-foreground mb-4">
              07 // Academic
            </h2>
            <h3 className="text-4xl md:text-5xl font-black text-foreground uppercase tracking-tighter leading-none">
              Education
            </h3>
          </motion.div>
        </div>

        <div className="md:col-span-8 flex flex-col gap-16">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.1, ease: "easeOut" }}
          >
            <div className="text-xs font-bold tracking-widest uppercase text-muted-foreground mb-4">
              2023 — 2027
            </div>
            <h4 className="text-2xl sm:text-3xl font-black uppercase tracking-tighter text-foreground mb-2">
              IFET College of Engineering
            </h4>
            <div className="text-lg text-muted-foreground mb-6">
              Bachelor of Engineering — Computer Science & Engineering
            </div>
            <div className="text-sm font-bold tracking-widest uppercase">
              CGPA <span className="text-primary ml-2">8.6</span>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
          >
            <div className="text-xs font-bold tracking-widest uppercase text-muted-foreground mb-4">
              2021 — 2023
            </div>
            <h4 className="text-2xl sm:text-3xl font-black uppercase tracking-tighter text-foreground mb-2">
              St. Joseph's Higher Secondary School
            </h4>
            <div className="text-lg text-muted-foreground mb-6">
              Higher Secondary Certificate (HSC)
            </div>
            <div className="text-sm font-bold tracking-widest uppercase">
              Percentage <span className="text-primary ml-2">83%</span>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
