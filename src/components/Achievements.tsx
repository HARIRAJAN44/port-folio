import { Trophy, Code2, Star } from 'lucide-react';

export function Achievements() {
  return (
    <section id="achievements" className="bg-muted/10 border-y border-border py-16 md:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-12">Achievements</h2>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Competitions */}
          <div className="rounded-xl border border-border bg-card p-6">
            <div className="flex items-center gap-3 mb-6">
              <Trophy className="h-6 w-6 text-primary" />
              <h3 className="text-xl font-semibold">Coding & Debugging</h3>
            </div>
            <ul className="space-y-4">
              <li className="flex gap-3 text-muted-foreground">
                <span className="font-bold text-foreground">1st</span>
                <span>Code Debugging, NISCOM 2.0, Mailam Engineering College</span>
              </li>
              <li className="flex gap-3 text-muted-foreground">
                <span className="font-bold text-foreground">1st</span>
                <span>Pixel Doodle, Techidoodle 2K25, Sri Ramanujar Engineering College</span>
              </li>
              <li className="flex gap-3 text-muted-foreground">
                <span className="font-bold text-foreground">1st</span>
                <span>Code Relay & Battle of Brains, IFET College of Engineering</span>
              </li>
              <li className="flex gap-3 text-muted-foreground">
                <span className="font-bold text-foreground">2nd</span>
                <span>Code Debugging, Strobe 2K24, Annamalai University</span>
              </li>
            </ul>
          </div>

          {/* Hackathons */}
          <div className="rounded-xl border border-border bg-card p-6">
            <div className="flex items-center gap-3 mb-6">
              <Code2 className="h-6 w-6 text-primary" />
              <h3 className="text-xl font-semibold">Hackathons</h3>
            </div>
            <p className="text-sm text-muted-foreground mb-4">Participated in 24-hour hackathons including:</p>
            <ul className="space-y-4 text-muted-foreground">
              <li className="flex items-start gap-2">
                <div className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                <span>Hackoholics 5.0 — St. Joseph's Institute of Technology</span>
              </li>
              <li className="flex items-start gap-2">
                <div className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                <span>Hack-a-Tank 2.0 — SRM Valliammai Engineering College</span>
              </li>
            </ul>
          </div>

          {/* Other */}
          <div className="rounded-xl border border-border bg-card p-6">
            <div className="flex items-center gap-3 mb-6">
              <Star className="h-6 w-6 text-primary" />
              <h3 className="text-xl font-semibold">Other Achievements</h3>
            </div>
            <ul className="space-y-4 text-muted-foreground">
              <li className="flex items-start gap-2">
                <div className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                <span><strong className="text-foreground font-medium">Gold Star</strong> — Python Problem Solving, HackerRank</span>
              </li>
              <li className="flex items-start gap-2">
                <div className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                <span><strong className="text-foreground font-medium">100-Day Learning Streak</strong> — Duolingo Japanese Learning</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
