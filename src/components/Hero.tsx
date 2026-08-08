"use client";

import Link from 'next/link';
import { ArrowRight, Download, Code, Briefcase, Database, Server, Cpu } from 'lucide-react';
import { motion, useScroll, useTransform, Variants } from 'motion/react';
import { useRef } from 'react';

export function Hero() {
  const containerRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], [0, 150]);
  const opacity = useTransform(scrollYProgress, [0, 1], [1, 0]);

  const container: Variants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.15 },
    },
  };

  const item: Variants = {
    hidden: { opacity: 0, y: 20 },
    show: { 
      opacity: 1, 
      y: 0, 
      transition: { type: "spring", stiffness: 300, damping: 24 } 
    },
  };

  return (
    <section 
      id="hero" 
      ref={containerRef}
      className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-32 pb-24 md:pt-40 md:pb-32 min-h-[100vh] flex items-center overflow-hidden"
    >
      {/* Background Ambient Glow */}
      <div className="absolute top-1/4 right-0 w-[500px] h-[500px] bg-primary/20 rounded-full blur-[120px] -z-10 pointer-events-none" />
      <div className="absolute bottom-0 left-1/4 w-[400px] h-[400px] bg-blue-500/10 rounded-full blur-[100px] -z-10 pointer-events-none" />

      <div className="grid lg:grid-cols-2 gap-12 items-center w-full">
        {/* Left Content */}
        <motion.div 
          variants={container}
          initial="hidden"
          animate="show"
          style={{ y, opacity }}
          className="space-y-8 z-10"
        >
          <motion.div variants={item}>
            <div className="inline-flex items-center rounded-full border border-white/10 bg-white/5 px-4 py-1.5 text-sm font-medium text-foreground backdrop-blur-md shadow-sm">
              <span className="flex h-2 w-2 rounded-full bg-primary mr-2 animate-pulse"></span>
              Python Programmer & Backend Web Developer
            </div>
          </motion.div>
          
          <motion.h1 
            variants={item}
            className="text-4xl font-extrabold tracking-tight sm:text-6xl lg:text-6xl text-foreground leading-[1.1]"
          >
            Building efficient, <br className="hidden sm:block" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-blue-400">
              scalable backend solutions.
            </span>
          </motion.h1>
          
          <motion.p 
            variants={item}
            className="text-lg sm:text-xl text-muted-foreground max-w-xl leading-relaxed"
          >
            Passionate Python Programmer with hands-on experience in FastAPI, PHP, and MySQL, focused on RESTful APIs and modern backend technologies.
          </motion.p>
          
          <motion.div 
            variants={item}
            className="flex flex-col sm:flex-row items-center gap-4 pt-2"
          >
            <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }} className="w-full sm:w-auto">
              <Link 
                href="#projects" 
                className="inline-flex h-12 w-full sm:w-auto items-center justify-center rounded-lg bg-foreground px-8 text-sm font-semibold text-background transition-colors hover:bg-foreground/90 shadow-lg shadow-black/20"
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
                className="inline-flex h-12 w-full sm:w-auto items-center justify-center rounded-lg border border-white/10 bg-white/5 backdrop-blur-sm px-8 text-sm font-medium transition-colors hover:bg-white/10 text-foreground"
              >
                Download Resume
                <Download className="ml-2 h-4 w-4" />
              </a>
            </motion.div>
          </motion.div>

          <motion.div 
            variants={item}
            className="flex items-center gap-6 pt-6 text-muted-foreground"
          >
            <a 
              href="https://github.com/harirajan44" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="p-2 rounded-full border border-white/5 bg-white/5 transition-all hover:bg-primary hover:text-primary-foreground hover:border-primary hover:-translate-y-1"
              aria-label="GitHub"
            >
              <Code className="h-5 w-5" />
            </a>
            <a 
              href="https://linkedin.com/in/harirajan44" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="p-2 rounded-full border border-white/5 bg-white/5 transition-all hover:bg-primary hover:text-primary-foreground hover:border-primary hover:-translate-y-1"
              aria-label="LinkedIn"
            >
              <Briefcase className="h-5 w-5" />
            </a>
          </motion.div>
        </motion.div>

        {/* Right Visual Composition */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.3 }}
          className="hidden lg:flex relative w-full h-full min-h-[400px] items-center justify-center"
        >
          {/* Central Core */}
          <div className="absolute inset-0 bg-gradient-radial from-primary/10 to-transparent z-0" />
          
          <div className="relative z-10 grid grid-cols-2 gap-4 w-full max-w-sm">
            {/* Card 1 */}
            <motion.div 
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
              className="flex flex-col gap-3 p-5 rounded-2xl border border-white/10 bg-black/40 backdrop-blur-md shadow-2xl col-span-2 transform -translate-x-8"
            >
              <div className="flex items-center gap-3 mb-2">
                <div className="p-2 rounded-lg bg-blue-500/20 text-blue-400">
                  <Database className="h-5 w-5" />
                </div>
                <div className="text-sm font-semibold">MySQL Database</div>
              </div>
              <div className="h-2 w-full bg-white/5 rounded-full overflow-hidden">
                <motion.div 
                  initial={{ width: "0%" }} 
                  animate={{ width: "100%" }} 
                  transition={{ duration: 2, repeat: Infinity }}
                  className="h-full bg-blue-500/50"
                />
              </div>
            </motion.div>

            {/* Card 2 */}
            <motion.div 
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 1 }}
              className="flex flex-col gap-3 p-5 rounded-2xl border border-white/10 bg-black/40 backdrop-blur-md shadow-2xl transform translate-x-4 translate-y-4"
            >
              <div className="p-2 w-fit rounded-lg bg-green-500/20 text-green-400 mb-1">
                <Server className="h-5 w-5" />
              </div>
              <div className="text-sm font-semibold">FastAPI</div>
              <div className="text-xs text-muted-foreground">RESTful Architecture</div>
            </motion.div>

            {/* Card 3 */}
            <motion.div 
              animate={{ y: [0, -8, 0] }}
              transition={{ duration: 5.5, repeat: Infinity, ease: "easeInOut", delay: 2 }}
              className="flex flex-col gap-3 p-5 rounded-2xl border border-white/10 bg-black/40 backdrop-blur-md shadow-2xl transform translate-y-12"
            >
              <div className="p-2 w-fit rounded-lg bg-purple-500/20 text-purple-400 mb-1">
                <Cpu className="h-5 w-5" />
              </div>
              <div className="text-sm font-semibold">Python</div>
              <div className="text-xs text-muted-foreground">Core Logic & AI</div>
            </motion.div>
          </div>
          
          {/* Decorative lines connecting them theoretically */}
          <svg className="absolute inset-0 w-full h-full z-0 opacity-20 pointer-events-none" viewBox="0 0 100 100" preserveAspectRatio="none">
            <motion.path 
              d="M30 30 C 50 30, 50 70, 70 70" 
              stroke="url(#grad1)" 
              strokeWidth="0.5" 
              fill="transparent" 
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
            />
            <defs>
              <linearGradient id="grad1" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="var(--color-primary)" />
                <stop offset="100%" stopColor="transparent" />
              </linearGradient>
            </defs>
          </svg>

        </motion.div>
      </div>
    </section>
  );
}
