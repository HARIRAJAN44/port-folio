"use client";

import { motion } from 'motion/react';
import { GraduationCap } from 'lucide-react';

export function Education() {
  return (
    <section id="education" className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 py-24">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        className="text-center mb-16"
      >
        <h2 className="text-3xl font-bold tracking-tight sm:text-4xl text-foreground">Education</h2>
      </motion.div>
      
      <div className="space-y-8">
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="relative pl-8 md:pl-0"
        >
          <div className="md:grid md:grid-cols-5 md:gap-8 items-center bg-card border border-white/5 rounded-3xl p-6 md:p-8 hover:border-primary/30 transition-colors shadow-xl">
            <div className="hidden md:block col-span-1 text-center">
              <div className="inline-flex items-center justify-center h-16 w-16 rounded-full bg-primary/10 text-primary mb-2">
                <GraduationCap className="h-8 w-8" />
              </div>
              <div className="text-sm font-bold text-muted-foreground">2023–2027</div>
            </div>
            
            <div className="md:col-span-4 relative">
              <div className="md:hidden absolute -left-12 top-1 bottom-0 w-px bg-white/10" />
              <div className="md:hidden absolute -left-[51px] top-2 h-3 w-3 rounded-full bg-primary ring-4 ring-background" />
              
              <div className="md:hidden text-sm font-bold text-primary mb-2">2023–2027</div>
              <h3 className="text-xl md:text-2xl font-bold text-foreground mb-1">IFET College of Engineering</h3>
              <p className="text-lg text-muted-foreground mb-4">Bachelor of Engineering — Computer Science & Engineering</p>
              <div className="inline-block px-4 py-1.5 rounded-lg bg-white/5 border border-white/10 text-sm font-medium">
                CGPA: <span className="text-primary font-bold ml-1">8.6</span>
              </div>
            </div>
          </div>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="relative pl-8 md:pl-0"
        >
          <div className="md:grid md:grid-cols-5 md:gap-8 items-center bg-card border border-white/5 rounded-3xl p-6 md:p-8 hover:border-primary/30 transition-colors shadow-xl opacity-80">
            <div className="hidden md:block col-span-1 text-center">
              <div className="text-sm font-bold text-muted-foreground">2021–2023</div>
            </div>
            
            <div className="md:col-span-4 relative">
              <div className="md:hidden absolute -left-12 top-1 bottom-0 w-px bg-white/10" />
              <div className="md:hidden absolute -left-[51px] top-2 h-3 w-3 rounded-full bg-white/20 ring-4 ring-background" />
              
              <div className="md:hidden text-sm font-bold text-muted-foreground mb-2">2021–2023</div>
              <h3 className="text-lg md:text-xl font-bold text-foreground mb-1">St. Joseph's Higher Secondary School</h3>
              <p className="text-base text-muted-foreground mb-4">Higher Secondary Certificate (HSC)</p>
              <div className="inline-block px-4 py-1.5 rounded-lg bg-white/5 border border-white/10 text-sm font-medium">
                Percentage: <span className="text-foreground font-bold ml-1">83%</span>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
