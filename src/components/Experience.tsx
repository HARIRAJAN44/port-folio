"use client";

import { motion } from 'motion/react';

export function Experience() {
  return (
    <section id="experience" className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-32 border-t border-border">
      <div className="grid md:grid-cols-12 gap-12 md:gap-8">
        
        {/* Section Header */}
        <div className="md:col-span-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            <h2 className="text-sm font-bold tracking-widest uppercase text-muted-foreground mb-4">
              02 // History
            </h2>
            <h3 className="text-4xl md:text-5xl font-black text-foreground uppercase tracking-tighter leading-none">
              Experience
            </h3>
          </motion.div>
        </div>

        {/* Content */}
        <div className="md:col-span-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
          >
            <div className="group relative">
              <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-6">
                <div>
                  <h4 className="text-2xl font-bold text-foreground">Web Developer Intern</h4>
                  <div className="text-primary font-medium tracking-wide mt-1 uppercase text-sm">
                    AAHA Solutions <span className="text-muted-foreground ml-2">— Pondicherry</span>
                  </div>
                </div>
                <div className="text-muted-foreground font-mono text-sm">
                  Dec 2024
                </div>
              </div>
              
              <div className="text-lg text-muted-foreground leading-relaxed space-y-4">
                <p>
                  Built a responsive Contact and Credential Management System using HTML, CSS, PHP, and MySQL. Maintained comprehensive project documentation and collaborated on debugging and cross-browser testing using Git for version control.
                </p>
                <p>
                  Focused heavily on UI/UX improvements, ensuring the frontend connected seamlessly with the relational database infrastructure.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
