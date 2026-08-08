"use client";

import { motion } from 'motion/react';

export function Certifications() {
  const certs = [
    { name: "Cisco Certified Network Associate (CCNA)", issuer: "Cisco Networking Academy", year: "2024" },
    { name: "Python Certification", issuer: "HackerRank", year: "Jan 2025" },
    { name: "Problem Solving Certification", issuer: "HackerRank", year: "Oct 2024" },
    { name: "Programming in Java", issuer: "NPTEL SWAYAM", year: "2025", highlight: "Elite" },
    { name: "Python for Data Science", issuer: "NPTEL SWAYAM", year: "2025", highlight: "Elite" },
    { name: "Cloud Computing", issuer: "NPTEL SWAYAM", year: "2025" }
  ];

  return (
    <section id="certifications" className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-32 border-t border-border">
      <div className="grid md:grid-cols-12 gap-12 md:gap-8">
        
        <div className="md:col-span-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            <h2 className="text-sm font-bold tracking-widest uppercase text-muted-foreground mb-4">
              06 // Credentials
            </h2>
            <h3 className="text-4xl md:text-5xl font-black text-foreground uppercase tracking-tighter leading-none">
              Certifications
            </h3>
          </motion.div>
        </div>

        <div className="md:col-span-8">
          <div className="grid sm:grid-cols-2 gap-x-12 gap-y-12">
            {certs.map((cert, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: idx * 0.1, ease: "easeOut" }}
                className="group relative"
              >
                <div className="text-xs font-bold tracking-widest uppercase text-muted-foreground mb-2 flex justify-between">
                  <span>{cert.issuer}</span>
                  <span>{cert.year}</span>
                </div>
                <h4 className="text-xl font-bold text-foreground leading-tight">
                  {cert.name}
                </h4>
                {cert.highlight && (
                  <span className="inline-block mt-3 text-xs font-bold uppercase tracking-widest text-primary">
                    [{cert.highlight} Achieved]
                  </span>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
