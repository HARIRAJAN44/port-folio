"use client";

import { motion } from 'motion/react';
import { ArrowUpRight } from 'lucide-react';

export function Contact() {
  return (
    <section id="contact" className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-32 border-t border-border">
      <div className="grid md:grid-cols-12 gap-12 md:gap-8">
        
        <div className="md:col-span-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            <h2 className="text-sm font-bold tracking-widest uppercase text-muted-foreground mb-4">
              08 // End
            </h2>
          </motion.div>
        </div>

        <div className="md:col-span-8 flex flex-col items-start">
          <motion.h3
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.1, ease: "easeOut" }}
            className="text-5xl md:text-7xl lg:text-8xl font-black text-foreground uppercase tracking-tighter leading-[0.9] mb-12 max-w-2xl"
          >
            Let's build something <span className="text-primary">useful.</span>
          </motion.h3>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
            className="flex flex-col gap-6 w-full max-w-sm"
          >
            <a 
              href="mailto:harirajan.n2005@gmail.com"
              className="flex items-center justify-between pb-4 border-b border-border hover:border-primary group transition-colors"
            >
              <span className="text-xl font-bold uppercase tracking-widest text-foreground group-hover:text-primary transition-colors">
                Email
              </span>
              <ArrowUpRight className="w-6 h-6 text-muted-foreground group-hover:text-primary transition-colors" />
            </a>

            <a 
              href="https://linkedin.com/in/harirajan44"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-between pb-4 border-b border-border hover:border-primary group transition-colors"
            >
              <span className="text-xl font-bold uppercase tracking-widest text-foreground group-hover:text-primary transition-colors">
                LinkedIn
              </span>
              <ArrowUpRight className="w-6 h-6 text-muted-foreground group-hover:text-primary transition-colors" />
            </a>

            <a 
              href="https://github.com/harirajan44"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-between pb-4 border-b border-border hover:border-primary group transition-colors"
            >
              <span className="text-xl font-bold uppercase tracking-widest text-foreground group-hover:text-primary transition-colors">
                GitHub
              </span>
              <ArrowUpRight className="w-6 h-6 text-muted-foreground group-hover:text-primary transition-colors" />
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
