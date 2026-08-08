"use client";

import { motion, Variants } from 'motion/react';
import { Terminal, Database, Globe, Network, Wrench } from 'lucide-react';

export function Skills() {
  const container: Variants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.1 },
    },
  };

  const item: Variants = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 300, damping: 24 } },
  };

  const categories = [
    {
      title: "Programming",
      icon: <Terminal className="h-6 w-6 text-blue-400" />,
      skills: ["Python", "JavaScript", "C"]
    },
    {
      title: "Backend & Database",
      icon: <Database className="h-6 w-6 text-indigo-400" />,
      skills: ["FastAPI", "PHP", "MySQL", "REST APIs"]
    },
    {
      title: "Web Development",
      icon: <Globe className="h-6 w-6 text-emerald-400" />,
      skills: ["HTML", "CSS", "React/Next.js"]
    },
    {
      title: "Networking",
      icon: <Network className="h-6 w-6 text-purple-400" />,
      skills: ["IPv4", "IPv6", "DNS", "DHCP"]
    },
    {
      title: "Tools & Version Control",
      icon: <Wrench className="h-6 w-6 text-amber-400" />,
      skills: ["Git", "GitHub", "VS Code", "XAMPP"]
    }
  ];

  return (
    <section id="skills" className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-24">
      <motion.div
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-100px" }}
        variants={container}
      >
        <motion.div variants={item} className="mb-12">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl text-foreground">
            Technical Arsenal
          </h2>
          <div className="h-1 w-20 bg-primary mt-4 rounded-full" />
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {categories.map((category, idx) => (
            <motion.div 
              key={category.title}
              variants={item}
              whileHover={{ y: -5 }}
              className="group relative overflow-hidden rounded-2xl border border-white/5 bg-card p-6 shadow-xl shadow-black/10 transition-colors hover:border-primary/30"
            >
              {/* Subtle radial glow on hover */}
              <div className="absolute -right-20 -top-20 h-40 w-40 rounded-full bg-primary/10 blur-[50px] opacity-0 transition-opacity group-hover:opacity-100 pointer-events-none" />
              
              <div className="flex items-center gap-4 mb-6">
                <div className="p-3 rounded-xl bg-white/5 border border-white/5 group-hover:scale-110 transition-transform duration-300">
                  {category.icon}
                </div>
                <h3 className="text-xl font-semibold text-foreground">{category.title}</h3>
              </div>
              
              <ul className="space-y-3">
                {category.skills.map((skill) => (
                  <li key={skill} className="flex items-center gap-3 text-muted-foreground">
                    <div className="h-[2px] w-3 bg-white/10 rounded-full group-hover:bg-primary/50 transition-colors" />
                    <span className="font-medium group-hover:text-foreground transition-colors">{skill}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
