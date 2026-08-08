export function About() {
  return (
    <section id="about" className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 md:py-24">
      <div className="grid gap-12 lg:grid-cols-2 lg:gap-8 items-start">
        <div>
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-6">About Me</h2>
          <div className="space-y-4 text-muted-foreground leading-relaxed">
            <p>
              I am a passionate Python Programmer and Backend Web Developer with hands-on experience developing web applications using Python, FastAPI, PHP, and MySQL.
            </p>
            <p>
              My expertise lies in designing and integrating RESTful APIs, database management, responsive web development, and debugging. I also have practical experience using Git and GitHub for version control.
            </p>
            <p>
              With strong problem-solving, logical reasoning, and debugging abilities, I focus on writing clean, maintainable, and efficient code. I am interested in building innovative software solutions while continuously learning modern backend technologies.
            </p>
          </div>
        </div>
        <div className="rounded-2xl bg-muted/30 border border-border p-8">
          <h3 className="text-xl font-semibold mb-4">Core Competencies</h3>
          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {[
              "Problem Solving",
              "Logical Reasoning",
              "Decision Making",
              "Debugging",
              "Analytical Thinking",
              "Clean Code Practices"
            ].map((skill) => (
              <li key={skill} className="flex items-center gap-2 text-muted-foreground">
                <div className="h-1.5 w-1.5 rounded-full bg-primary" />
                <span>{skill}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
