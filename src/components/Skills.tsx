"use client";

import { motion } from 'motion/react';

export function Skills() {
  const skills = [
    { name: "PYTHON", desc: "Backend Logic, APIs & AI Integration" },
    { name: "FASTAPI", desc: "High-Performance RESTful Architecture" },
    { name: "JAVASCRIPT", desc: "Interactive Frontend Development" },
    { name: "PHP", desc: "Server-side Scripting & Web Solutions" },
    { name: "MYSQL", desc: "Relational Database Management" },
    { name: "NETWORKING", desc: "IPv4, IPv6, DNS, DHCP Infrastructure" }
  ];

  return (
    <section id="skills" className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-32 border-t border-border">
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
              03 // Arsenal
            </h2>
            <h3 className="text-4xl md:text-5xl font-black text-foreground uppercase tracking-tighter leading-none">
              Capabilities
            </h3>
          </motion.div>
        </div>

        {/* Content */}
        <div className="md:col-span-8">
          <div className="flex flex-col gap-8">
            {skills.map((skill, index) => (
              <motion.div
                key={skill.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: index * 0.1, ease: "easeOut" }}
                className="group cursor-default"
              >
                <div className="text-2xl md:text-4xl font-black tracking-tighter text-foreground group-hover:text-primary transition-colors duration-300">
                  {skill.name}
                </div>
                <div className="h-px w-full bg-border my-3 transition-colors duration-300 group-hover:bg-primary/50" />
                <div className="text-muted-foreground uppercase tracking-widest text-xs md:text-sm font-bold">
                  {skill.desc}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
