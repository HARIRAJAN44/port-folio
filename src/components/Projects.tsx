"use client";

import { motion, Variants } from 'motion/react';
import { ArrowUpRight, Cpu, Brain, Search, Code } from 'lucide-react';
import Link from 'next/link';

export function Projects() {
  const container: Variants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.15 },
    },
  };

  const item: Variants = {
    hidden: { opacity: 0, y: 30 },
    show: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 300, damping: 24 } },
  };

  const projects = [
    {
      title: "Automatic Rotating Display",
      category: "IoT / Embedded System",
      description: "An IoT-based smart advertising display that automatically rotates toward nearby users using motion detection sensors to improve advertisement visibility in retail environments.",
      tech: ["IoT", "Motion Sensors", "Embedded Systems"],
      status: "",
      color: "from-blue-500/20 to-cyan-500/5",
      icon: <Cpu className="h-12 w-12 text-blue-400 opacity-50" />
    },
    {
      title: "DeepFake Detection",
      category: "AI / Deep Learning",
      description: "An AI-powered deepfake detection system identifying manipulated facial content. Applies advanced deep learning techniques to ensure and improve digital media authenticity.",
      tech: ["Python", "Deep Learning", "Computer Vision"],
      status: "",
      color: "from-purple-500/20 to-fuchsia-500/5",
      icon: <Brain className="h-12 w-12 text-purple-400 opacity-50" />
    },
    {
      title: "Vision-Centered Semantic Comm",
      category: "AI Research",
      description: "Research exploring AI-driven semantic communication and intelligent object search and retrieval techniques, where meaningful visual information is identified and retrieved efficiently.",
      tech: ["AI Research", "Semantic Comm"],
      status: "Journal Paper Publication — Ongoing",
      color: "from-emerald-500/20 to-green-500/5",
      icon: <Search className="h-12 w-12 text-emerald-400 opacity-50" />
    }
  ];

  return (
    <section id="projects" className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-24 bg-background">
      <motion.div
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-100px" }}
        variants={container}
        className="space-y-12"
      >
        <motion.div variants={item}>
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl text-foreground">
            Featured Projects
          </h2>
          <div className="h-1 w-20 bg-primary mt-4 rounded-full" />
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8">
          {projects.map((project, idx) => (
            <motion.div 
              key={idx}
              variants={item}
              className={`group relative flex flex-col justify-between overflow-hidden rounded-3xl border border-white/5 bg-card transition-all hover:border-white/20 shadow-2xl shadow-black/40 ${idx === 2 ? 'lg:col-span-2 lg:flex-row' : ''}`}
            >
              {/* Abstract Visual Placeholder */}
              <div className={`relative flex items-center justify-center min-h-[240px] bg-gradient-to-br ${project.color} overflow-hidden ${idx === 2 ? 'lg:w-2/5 lg:min-h-full' : 'w-full'}`}>
                {/* Decorative Grid */}
                <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff0a_1px,transparent_1px),linear-gradient(to_bottom,#ffffff0a_1px,transparent_1px)] bg-[size:24px_24px]" />
                
                <motion.div 
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  transition={{ type: "spring", stiffness: 200, damping: 10 }}
                  className="relative z-10"
                >
                  {project.icon}
                </motion.div>
                
                {/* Glow Overlay */}
                <div className="absolute inset-0 bg-background/20 group-hover:bg-transparent transition-colors duration-500" />
              </div>

              {/* Content */}
              <div className={`flex flex-col flex-1 p-8 ${idx === 2 ? 'lg:w-3/5' : ''}`}>
                <div className="flex items-start justify-between gap-4 mb-4">
                  <div>
                    {project.status && (
                      <span className="inline-block px-3 py-1 mb-3 text-xs font-semibold text-primary bg-primary/10 rounded-full border border-primary/20">
                        {project.status}
                      </span>
                    )}
                    <h3 className="text-2xl font-bold text-foreground group-hover:text-primary transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-sm font-medium text-muted-foreground mt-1">
                      {project.category}
                    </p>
                  </div>
                  <Link href="https://github.com/harirajan44" target="_blank" className="p-2 rounded-full bg-white/5 text-muted-foreground hover:text-foreground hover:bg-white/10 transition-colors">
                    <Code className="h-5 w-5" />
                  </Link>
                </div>

                <p className="text-muted-foreground leading-relaxed mb-8 flex-1">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mt-auto">
                  {project.tech.map((t) => (
                    <span key={t} className="px-3 py-1 text-xs font-medium rounded-md bg-white/5 border border-white/5 text-muted-foreground">
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
