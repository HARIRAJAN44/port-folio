"use client";

import { motion, Variants } from 'motion/react';
import { Trophy, Code2, Star, Medal } from 'lucide-react';

export function Achievements() {
  const container: Variants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.1 },
    },
  };

  const item: Variants = {
    hidden: { opacity: 0, scale: 0.95 },
    show: { opacity: 1, scale: 1, transition: { type: "spring", stiffness: 300, damping: 24 } },
  };

  return (
    <section id="achievements" className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-24 bg-card/30 border-y border-white/5">
      <motion.div
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-100px" }}
        variants={container}
      >
        <motion.div variants={item} className="mb-16 text-center max-w-2xl mx-auto">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl text-foreground">
            Achievements & Awards
          </h2>
          <p className="mt-4 text-muted-foreground">Recognitions from coding competitions and hackathons.</p>
        </motion.div>

        <div className="grid lg:grid-cols-12 gap-8">
          {/* Main Competitions - Takes up more space */}
          <motion.div variants={item} className="lg:col-span-8 rounded-3xl bg-card border border-white/5 p-8 shadow-2xl relative overflow-hidden">
            <div className="absolute top-0 right-0 p-12 bg-primary/5 blur-[80px] rounded-full pointer-events-none" />
            
            <div className="flex items-center gap-4 mb-8">
              <div className="p-3 bg-amber-500/20 text-amber-500 rounded-xl">
                <Trophy className="h-6 w-6" />
              </div>
              <h3 className="text-2xl font-bold">Coding & Debugging</h3>
            </div>
            
            <div className="grid sm:grid-cols-2 gap-6">
              {[
                { place: "1st", event: "Code Debugging, NISCOM 2.0", loc: "Mailam Eng. College" },
                { place: "1st", event: "Pixel Doodle, Techidoodle 2K25", loc: "Sri Ramanujar Eng. College" },
                { place: "1st", event: "Code Relay & Battle of Brains", loc: "IFET College of Engineering" },
                { place: "2nd", event: "Code Debugging, Strobe 2K24", loc: "Annamalai University" }
              ].map((ach, i) => (
                <div key={i} className="flex gap-4 p-4 rounded-2xl bg-white/5 border border-white/5 hover:bg-white/10 transition-colors">
                  <div className={`text-xl font-black ${ach.place === '1st' ? 'text-amber-400' : 'text-slate-300'}`}>
                    {ach.place}
                  </div>
                  <div>
                    <div className="font-semibold text-foreground">{ach.event}</div>
                    <div className="text-sm text-muted-foreground">{ach.loc}</div>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Sidebar for Hackathons & Other */}
          <div className="lg:col-span-4 flex flex-col gap-8">
            <motion.div variants={item} className="flex-1 rounded-3xl bg-card border border-white/5 p-8 shadow-xl">
              <div className="flex items-center gap-3 mb-6">
                <Code2 className="h-5 w-5 text-blue-400" />
                <h3 className="text-lg font-bold">Hackathons (24h)</h3>
              </div>
              <ul className="space-y-4">
                <li className="flex gap-3 text-muted-foreground">
                  <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-blue-400" />
                  <span className="text-sm">Hackoholics 5.0<br/>St. Joseph's Institute of Tech</span>
                </li>
                <li className="flex gap-3 text-muted-foreground">
                  <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-blue-400" />
                  <span className="text-sm">Hack-a-Tank 2.0<br/>SRM Valliammai Eng. College</span>
                </li>
              </ul>
            </motion.div>

            <motion.div variants={item} className="flex-1 rounded-3xl bg-card border border-white/5 p-8 shadow-xl">
              <div className="flex items-center gap-3 mb-6">
                <Star className="h-5 w-5 text-primary" />
                <h3 className="text-lg font-bold">Milestones</h3>
              </div>
              <ul className="space-y-4">
                <li className="flex items-center gap-3 p-3 rounded-xl bg-white/5">
                  <Medal className="h-5 w-5 text-amber-400" />
                  <div>
                    <div className="font-medium text-sm text-foreground">HackerRank Gold Star</div>
                    <div className="text-xs text-muted-foreground">Python Problem Solving</div>
                  </div>
                </li>
                <li className="flex items-center gap-3 p-3 rounded-xl bg-white/5">
                  <div className="flex h-5 w-5 items-center justify-center font-bold text-green-400 text-xs bg-green-400/20 rounded-full">100</div>
                  <div>
                    <div className="font-medium text-sm text-foreground">Day Learning Streak</div>
                    <div className="text-xs text-muted-foreground">Duolingo Japanese</div>
                  </div>
                </li>
              </ul>
            </motion.div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
