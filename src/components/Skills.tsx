export function Skills() {
  const categories = [
    {
      title: "Programming Languages",
      skills: ["Python", "JavaScript", "C"]
    },
    {
      title: "Backend & Database",
      skills: ["Python", "FastAPI", "PHP", "MySQL", "REST APIs"]
    },
    {
      title: "Web Development",
      skills: ["HTML", "CSS", "JavaScript"]
    },
    {
      title: "Networking",
      skills: ["IPv4", "IPv6", "DNS", "DHCP"]
    },
    {
      title: "Tools & Version Control",
      skills: ["Git", "GitHub", "VS Code", "XAMPP", "PyCharm"]
    }
  ];

  return (
    <section id="skills" className="bg-muted/10 border-y border-border py-16 md:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-12">Technical Skills</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {categories.map((category) => (
            <div key={category.title} className="rounded-xl border border-border bg-card p-6 shadow-sm transition-all hover:border-primary/50">
              <h3 className="text-lg font-semibold mb-4">{category.title}</h3>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill) => (
                  <span 
                    key={skill} 
                    className="inline-flex items-center rounded-md bg-muted px-2.5 py-1 text-sm font-medium text-foreground"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
