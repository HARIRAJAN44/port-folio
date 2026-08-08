"use client";

import { motion } from 'motion/react';

export function Achievements() {
  const achievements = [
    { place: "1st Place", event: "Code Debugging, NISCOM 2.0", loc: "Mailam Eng. College" },
    { place: "1st Place", event: "Pixel Doodle, Techidoodle 2K25", loc: "Sri Ramanujar Eng. College" },
    { place: "1st Place", event: "Code Relay & Battle of Brains", loc: "IFET College of Engineering" },
    { place: "2nd Place", event: "Code Debugging, Strobe 2K24", loc: "Annamalai University" }
  ];

  return (
    <section id="achievements" className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-32 border-t border-border">
      <div className="grid md:grid-cols-12 gap-12 md:gap-8">
        
        <div className="md:col-span-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            <h2 className="text-sm font-bold tracking-widest uppercase text-muted-foreground mb-4">
              05 // Accolades
            </h2>
            <h3 className="text-4xl md:text-5xl font-black text-foreground uppercase tracking-tighter leading-none">
              Achievements
            </h3>
          </motion.div>
        </div>

        <div className="md:col-span-8">
          <div className="flex flex-col border-t border-border">
            {achievements.map((ach, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: index * 0.1, ease: "easeOut" }}
                className="group flex flex-col sm:flex-row sm:items-center justify-between py-8 border-b border-border hover:bg-white/[0.02] transition-colors"
              >
                <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-8 mb-2 sm:mb-0">
                  <div className={`text-xl font-black uppercase tracking-tighter w-24 ${ach.place === '1st Place' ? 'text-primary' : 'text-foreground'}`}>
                    {ach.place}
                  </div>
                  <div className="text-lg font-bold text-foreground">
                    {ach.event}
                  </div>
                </div>
                <div className="text-sm text-muted-foreground uppercase tracking-widest font-bold">
                  {ach.loc}
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mt-16 grid sm:grid-cols-2 gap-8"
          >
            <div>
              <h4 className="text-xs font-bold tracking-widest uppercase text-muted-foreground mb-4">Hackathons</h4>
              <ul className="space-y-4">
                <li className="text-sm">
                  <span className="font-bold text-foreground block">Hackoholics 5.0 (24h)</span>
                  <span className="text-muted-foreground">St. Joseph's Institute of Tech</span>
                </li>
                <li className="text-sm">
                  <span className="font-bold text-foreground block">Hack-a-Tank 2.0 (24h)</span>
                  <span className="text-muted-foreground">SRM Valliammai Eng. College</span>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="text-xs font-bold tracking-widest uppercase text-muted-foreground mb-4">Milestones</h4>
              <ul className="space-y-4">
                <li className="text-sm">
                  <span className="font-bold text-primary block">HackerRank Gold Star</span>
                  <span className="text-muted-foreground">Python Problem Solving</span>
                </li>
                <li className="text-sm">
                  <span className="font-bold text-primary block">100-Day Streak</span>
                  <span className="text-muted-foreground">Duolingo Learning</span>
                </li>
              </ul>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
