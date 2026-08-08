"use client";

import Link from 'next/link';
import { ArrowRight, Download, Code, Briefcase } from 'lucide-react';
import { motion, Variants } from 'motion/react';

export function Hero() {
  const container: Variants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const item: Variants = {
    hidden: { opacity: 0, y: 20 },
    show: { 
      opacity: 1, 
      y: 0, 
      transition: { 
        type: "spring", 
        stiffness: 300, 
        damping: 24 
      } 
    },
  };

  return (
    <section id="hero" className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-24 md:py-32 lg:py-40 flex items-center min-h-[calc(100vh-4rem)]">
      <motion.div 
        variants={container}
        initial="hidden"
        animate="show"
        className="max-w-3xl space-y-8"
      >
        <motion.div variants={item}>
          <div className="inline-flex items-center rounded-full border border-border bg-muted/50 px-3 py-1 text-sm font-medium text-muted-foreground backdrop-blur-sm">
            Python Programmer & Backend Web Developer
          </div>
        </motion.div>
        
        <motion.h1 
          variants={item}
          className="text-4xl font-bold tracking-tight sm:text-6xl lg:text-7xl text-foreground"
        >
          Building efficient, scalable backend solutions.
        </motion.h1>
        
        <motion.p 
          variants={item}
          className="text-lg sm:text-xl text-muted-foreground max-w-2xl leading-relaxed"
        >
          Passionate Python Programmer with hands-on experience in FastAPI, PHP, and MySQL, focused on RESTful APIs and modern backend technologies.
        </motion.p>
        
        <motion.div 
          variants={item}
          className="flex flex-col sm:flex-row items-center gap-4 pt-4"
        >
          <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }} className="w-full sm:w-auto">
            <Link 
              href="#projects" 
              className="inline-flex h-12 w-full sm:w-auto items-center justify-center rounded-md bg-foreground px-8 text-sm font-medium text-background transition-colors hover:bg-foreground/90"
            >
              View My Projects
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </motion.div>
          <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }} className="w-full sm:w-auto">
            <a 
              href="/resume.pdf" 
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex h-12 w-full sm:w-auto items-center justify-center rounded-md border border-input bg-background px-8 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground"
            >
              Download Resume
              <Download className="ml-2 h-4 w-4" />
            </a>
          </motion.div>
        </motion.div>

        <motion.div 
          variants={item}
          className="flex items-center gap-6 pt-8 text-muted-foreground"
        >
          <a 
            href="https://github.com/harirajan44" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="transition-colors hover:text-foreground"
            aria-label="GitHub"
          >
            <Code className="h-6 w-6" />
          </a>
          <a 
            href="https://linkedin.com/in/harirajan44" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="transition-colors hover:text-foreground"
            aria-label="LinkedIn"
          >
            <Briefcase className="h-6 w-6" />
          </a>
        </motion.div>
      </motion.div>
    </section>
  );
}
