"use client";

import { motion } from 'motion/react';
import { Mail, Briefcase, Code, ArrowUpRight } from 'lucide-react';

export function Contact() {
  return (
    <section id="contact" className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-32 mb-12">
      {/* Background elements */}
      <div className="absolute inset-0 bg-primary/5 rounded-[3rem] blur-xl -z-10" />
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff0a_1px,transparent_1px),linear-gradient(to_bottom,#ffffff0a_1px,transparent_1px)] bg-[size:32px_32px] rounded-[3rem] -z-10 opacity-30" />
      
      <motion.div 
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.7, ease: "easeOut" }}
        className="rounded-[3rem] bg-card/60 backdrop-blur-xl border border-white/10 p-12 md:p-24 text-center overflow-hidden relative"
      >
        {/* Glow */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-md h-40 bg-primary/20 blur-[100px] pointer-events-none" />

        <h2 className="text-4xl md:text-6xl font-extrabold tracking-tight text-foreground mb-6">
          Let's build something <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-blue-400">useful.</span>
        </h2>
        <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-12">
          I'm always open to discussing backend development, AI/ML projects, web technologies, and software engineering opportunities.
        </p>
        
        <div className="flex flex-col sm:flex-row justify-center items-center gap-4 mb-16">
          <motion.a 
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            href="mailto:harirajan.n2005@gmail.com" 
            className="inline-flex h-14 items-center justify-center rounded-xl bg-primary px-8 text-base font-bold text-primary-foreground transition-all hover:bg-primary/90 shadow-lg shadow-primary/20 w-full sm:w-auto"
          >
            <Mail className="mr-2 h-5 w-5" />
            harirajan.n2005@gmail.com
          </motion.a>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-xl mx-auto">
          <motion.a 
            whileHover={{ y: -4 }}
            href="https://linkedin.com/in/harirajan44" 
            target="_blank" 
            rel="noreferrer" 
            className="group flex items-center justify-between p-6 rounded-2xl border border-white/5 bg-white/5 transition-all hover:bg-white/10 hover:border-white/20"
          >
            <div className="flex items-center gap-4">
              <div className="p-3 bg-blue-500/10 text-blue-400 rounded-xl">
                <Briefcase className="h-6 w-6" />
              </div>
              <div className="text-left">
                <div className="font-semibold text-foreground">LinkedIn</div>
                <div className="text-sm text-muted-foreground">harirajan44</div>
              </div>
            </div>
            <ArrowUpRight className="h-5 w-5 text-muted-foreground opacity-0 group-hover:opacity-100 transition-opacity" />
          </motion.a>

          <motion.a 
            whileHover={{ y: -4 }}
            href="https://github.com/harirajan44" 
            target="_blank" 
            rel="noreferrer" 
            className="group flex items-center justify-between p-6 rounded-2xl border border-white/5 bg-white/5 transition-all hover:bg-white/10 hover:border-white/20"
          >
            <div className="flex items-center gap-4">
              <div className="p-3 bg-white/10 text-white rounded-xl">
                <Code className="h-6 w-6" />
              </div>
              <div className="text-left">
                <div className="font-semibold text-foreground">GitHub</div>
                <div className="text-sm text-muted-foreground">harirajan44</div>
              </div>
            </div>
            <ArrowUpRight className="h-5 w-5 text-muted-foreground opacity-0 group-hover:opacity-100 transition-opacity" />
          </motion.a>
        </div>
      </motion.div>
    </section>
  );
}
