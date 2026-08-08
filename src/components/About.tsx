"use client";

import { motion } from 'motion/react';

export function About() {
  return (
    <section id="about" className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-32 border-t border-border">
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
              01 // Profile
            </h2>
            <h3 className="text-4xl md:text-5xl font-black text-foreground uppercase tracking-tighter leading-none">
              About Me
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
            className="text-lg md:text-2xl font-light text-foreground leading-relaxed space-y-8"
          >
            <p>
              I am a passionate <span className="font-bold text-primary">Python Programmer</span> and <span className="font-bold text-primary">Backend Web Developer</span> dedicated to building robust digital infrastructure.
            </p>
            <p className="text-muted-foreground">
              My expertise lies in designing and integrating RESTful APIs, relational database management, and implementing secure backend logic. Whether debugging complex legacy code or architecting new features from scratch, I bring a logical, analytical approach to every challenge.
            </p>
            <p className="text-muted-foreground">
              Beyond traditional web development, I am deeply fascinated by the intersection of artificial intelligence and backend systems, constantly seeking to integrate modern technologies like machine learning into functional products.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
