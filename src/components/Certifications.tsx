import { Award } from 'lucide-react';

export function Certifications() {
  const certifications = [
    {
      name: "Cisco Certified Network Associate (CCNA)",
      issuer: "Cisco Networking Academy",
      year: "2024"
    },
    {
      name: "Python Certification",
      issuer: "HackerRank",
      year: "Jan 2025"
    },
    {
      name: "Problem Solving Certification",
      issuer: "HackerRank",
      year: "Oct 2024"
    },
    {
      name: "Programming in Java",
      issuer: "NPTEL SWAYAM",
      year: "2025",
      highlight: "Elite"
    },
    {
      name: "Python for Data Science",
      issuer: "NPTEL SWAYAM",
      year: "2025",
      highlight: "Elite"
    },
    {
      name: "Cloud Computing",
      issuer: "NPTEL SWAYAM",
      year: "2025"
    }
  ];

  return (
    <section id="certifications" className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 md:py-24">
      <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-12">Certifications</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {certifications.map((cert, index) => (
          <div key={index} className="flex gap-4 rounded-xl border border-border bg-card p-6">
            <div className="mt-1">
              <Award className="h-6 w-6 text-primary" />
            </div>
            <div>
              <h3 className="font-semibold leading-snug mb-1">{cert.name}</h3>
              <p className="text-sm text-muted-foreground">{cert.issuer}</p>
              <div className="flex items-center gap-3 mt-3 text-sm">
                <span className="text-muted-foreground">{cert.year}</span>
                {cert.highlight && (
                  <span className="inline-flex items-center rounded-full bg-primary/10 px-2 py-0.5 text-xs font-medium text-primary">
                    {cert.highlight}
                  </span>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
