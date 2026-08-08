"use client";

import { motion, Variants } from 'motion/react';
import { Terminal, Lightbulb, Zap, Code2 } from 'lucide-react';

export function About() {
  const container: Variants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.1, delayChildren: 0.2 },
    },
  };

  const item: Variants = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 300, damping: 24 } },
  };

  const highlights = [
    {
      icon: <Terminal className="h-5 w-5 text-blue-400" />,
      title: "Backend Focus",
      desc: "Architecting scalable systems with Python, FastAPI, and PHP."
    },
    {
      icon: <Zap className="h-5 w-5 text-amber-400" />,
      title: "Problem Solving",
      desc: "Passionate about untangling complex logic and optimizing performance."
    },
    {
      icon: <Code2 className="h-5 w-5 text-emerald-400" />,
      title: "Clean Code",
      desc: "Writing maintainable, efficient, and well-documented software."
    },
    {
      icon: <Lightbulb className="h-5 w-5 text-purple-400" />,
      title: "AI/ML Interest",
      desc: "Exploring deep learning, computer vision, and semantic tech."
    }
  ];

  return (
    <section id="about" className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-24 overflow-hidden">
      <div className="absolute top-1/2 left-0 w-[600px] h-[600px] bg-primary/5 rounded-full blur-[100px] -z-10 -translate-y-1/2 -translate-x-1/2 pointer-events-none" />
      
      <motion.div 
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-100px" }}
        className="grid lg:grid-cols-2 gap-16 items-center"
      >
        <div className="space-y-8">
          <motion.div variants={item}>
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl text-foreground">
              About Me
            </h2>
            <div className="h-1 w-20 bg-primary mt-4 rounded-full" />
          </motion.div>
          
          <motion.div variants={item} className="space-y-4 text-muted-foreground leading-relaxed text-lg">
            <p>
              I am a passionate <strong className="text-foreground font-medium">Python Programmer and Backend Web Developer</strong> dedicated to building robust digital infrastructure.
            </p>
            <p>
              My expertise lies in designing and integrating RESTful APIs, relational database management, and implementing secure backend logic. Whether debugging complex legacy code or architecting new features from scratch, I bring a logical, analytical approach to every challenge.
            </p>
            <p>
              Beyond traditional web development, I am deeply fascinated by the intersection of artificial intelligence and backend systems, constantly seeking to integrate modern technologies like machine learning into functional products.
            </p>
          </motion.div>
        </div>

        <motion.div variants={item} className="grid sm:grid-cols-2 gap-4">
          {highlights.map((highlight, i) => (
            <motion.div 
              key={i}
              whileHover={{ y: -5, transition: { duration: 0.2 } }}
              className="flex flex-col gap-3 p-6 rounded-2xl bg-card border border-white/5 shadow-lg shadow-black/20 hover:border-primary/30 transition-colors group"
            >
              <div className="p-3 w-fit rounded-xl bg-white/5 border border-white/10 group-hover:bg-white/10 transition-colors">
                {highlight.icon}
              </div>
              <h3 className="font-semibold text-foreground text-lg">{highlight.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{highlight.desc}</p>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
}
