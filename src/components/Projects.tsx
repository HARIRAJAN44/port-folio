"use client";

import { motion } from 'motion/react';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

export function Projects() {
  const projects = [
    {
      title: "Automatic Rotating Display",
      category: "IoT / Embedded System",
      description: "An IoT-based smart advertising display that automatically rotates toward nearby users using motion detection sensors to improve advertisement visibility in retail environments.",
      tech: ["IoT", "Motion Sensors", "Embedded Systems"],
      status: "",
      accent: "text-amber-500",
      letter: "01"
    },
    {
      title: "DeepFake Detection",
      category: "AI / Deep Learning",
      description: "An AI-powered deepfake detection system identifying manipulated facial content. Applies advanced deep learning techniques to ensure and improve digital media authenticity.",
      tech: ["Python", "Deep Learning", "Computer Vision"],
      status: "",
      accent: "text-blue-500",
      letter: "02"
    },
    {
      title: "Vision-Centered Semantic Comm",
      category: "AI Research",
      description: "Research exploring AI-driven semantic communication and intelligent object search and retrieval techniques, where meaningful visual information is identified and retrieved efficiently.",
      tech: ["AI Research", "Semantic Comm"],
      status: "Journal Paper Publication — Ongoing",
      accent: "text-emerald-500",
      letter: "03"
    }
  ];

  return (
    <section id="projects" className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-32 border-t border-border">
      <div className="grid md:grid-cols-12 gap-12 md:gap-8 mb-24">
        <div className="md:col-span-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            <h2 className="text-sm font-bold tracking-widest uppercase text-muted-foreground mb-4">
              04 // Work
            </h2>
            <h3 className="text-4xl md:text-5xl font-black text-foreground uppercase tracking-tighter leading-none">
              Case Studies
            </h3>
          </motion.div>
        </div>
        <div className="md:col-span-8">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
            className="text-lg text-muted-foreground max-w-xl"
          >
            A selection of recent engineering and research projects, focusing on backend integration, artificial intelligence, and hardware interconnectivity.
          </motion.p>
        </div>
      </div>

      <div className="space-y-32">
        {projects.map((project, idx) => (
          <motion.div 
            key={idx}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-150px" }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="flex flex-col lg:flex-row items-stretch gap-12"
          >
            {/* Visual / Abstract Area */}
            <div className={`w-full lg:w-1/2 min-h-[300px] sm:min-h-[400px] bg-card border border-border flex flex-col justify-between p-8 relative overflow-hidden ${idx % 2 !== 0 ? 'lg:order-last' : ''}`}>
              <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:48px_48px] pointer-events-none" />
              
              <div className="relative z-10 flex justify-between items-start w-full">
                <span className="text-xs font-mono tracking-widest uppercase text-muted-foreground">FIG. {project.letter}</span>
                {project.status && (
                  <span className={`text-xs font-bold uppercase tracking-widest ${project.accent}`}>
                    [{project.status}]
                  </span>
                )}
              </div>
              
              <div className="relative z-10 text-[120px] sm:text-[180px] font-black tracking-tighter leading-none opacity-5 -ml-4 select-none">
                {project.letter}
              </div>
            </div>

            {/* Content Area */}
            <div className="w-full lg:w-1/2 flex flex-col justify-center py-4">
              <div className={`text-xs font-bold uppercase tracking-widest mb-4 ${project.accent}`}>
                {project.category}
              </div>
              
              <h4 className="text-3xl sm:text-4xl font-black uppercase tracking-tighter text-foreground mb-6">
                {project.title}
              </h4>
              
              <p className="text-lg text-muted-foreground leading-relaxed mb-8 max-w-lg">
                {project.description}
              </p>
              
              <div className="flex flex-wrap gap-x-6 gap-y-3 mb-10 text-xs font-bold tracking-widest uppercase text-foreground">
                {project.tech.map((t) => (
                  <span key={t} className="flex items-center before:content-['+'] before:text-muted-foreground before:mr-2">
                    {t}
                  </span>
                ))}
              </div>
              
              <div>
                <Link 
                  href="https://github.com/harirajan44" 
                  target="_blank"
                  className="inline-flex items-center gap-2 pb-1 border-b border-border text-xs font-bold tracking-widest uppercase hover:border-foreground hover:text-foreground transition-all group"
                >
                  View Repository
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
