"use client";

import { motion, Variants } from 'motion/react';
import { Award, GraduationCap, Calendar } from 'lucide-react';

export function Certifications() {
  const container: Variants = {
    hidden: { opacity: 0 },
    show: { opacity: 1, transition: { staggerChildren: 0.1 } },
  };

  const item: Variants = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { type: "spring" } },
  };

  const certs = [
    { name: "Cisco Certified Network Associate (CCNA)", issuer: "Cisco Networking Academy", year: "2024" },
    { name: "Python Certification", issuer: "HackerRank", year: "Jan 2025" },
    { name: "Problem Solving Certification", issuer: "HackerRank", year: "Oct 2024" },
    { name: "Programming in Java", issuer: "NPTEL SWAYAM", year: "2025", highlight: "Elite" },
    { name: "Python for Data Science", issuer: "NPTEL SWAYAM", year: "2025", highlight: "Elite" },
    { name: "Cloud Computing", issuer: "NPTEL SWAYAM", year: "2025" }
  ];

  return (
    <section id="certifications" className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-24">
      <motion.div initial="hidden" whileInView="show" viewport={{ once: true, margin: "-100px" }} variants={container}>
        <motion.div variants={item} className="mb-12 flex items-center gap-4">
          <div className="p-3 bg-primary/20 text-primary rounded-xl">
            <Award className="h-6 w-6" />
          </div>
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl text-foreground">Certifications</h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {certs.map((cert, idx) => (
            <motion.div key={idx} variants={item} className="relative p-6 rounded-2xl bg-card border border-white/5 hover:border-primary/30 transition-colors shadow-lg">
              {cert.highlight && (
                <div className="absolute top-0 right-6 -translate-y-1/2 px-3 py-1 bg-primary text-primary-foreground text-xs font-bold rounded-full shadow-lg">
                  {cert.highlight}
                </div>
              )}
              <h3 className="font-semibold text-lg text-foreground mb-2 leading-tight pr-4">{cert.name}</h3>
              <div className="flex items-center justify-between mt-4">
                <span className="text-sm font-medium text-muted-foreground">{cert.issuer}</span>
                <span className="text-xs text-muted-foreground px-2 py-1 rounded-md bg-white/5 border border-white/5 flex items-center gap-1">
                  <Calendar className="h-3 w-3" />
                  {cert.year}
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
