import { ArrowRight, Code, Cpu, Brain, Search } from 'lucide-react';

export function Projects() {
  const projects = [
    {
      title: "Automatic Rotating Display for Smart Advertising",
      category: "IoT / Embedded System",
      description: "An IoT-based smart advertising display that automatically rotates toward nearby users using motion detection sensors to improve advertisement visibility in retail environments.",
      tech: ["IoT", "Motion Detection Sensors", "Embedded Systems"],
      icon: <Cpu className="h-6 w-6" />
    },
    {
      title: "DeepFake Detection — AI-Based",
      category: "Artificial Intelligence / Deep Learning",
      description: "An AI-powered deepfake detection system to identify manipulated facial content applying deep learning techniques to improve digital media authenticity.",
      tech: ["Python", "Deep Learning", "AI/ML", "Computer Vision"],
      icon: <Brain className="h-6 w-6" />
    },
    {
      title: "Vision-Centered Semantic Communication",
      category: "AI Research / Semantic Communication",
      description: "Research work focusing on AI-driven semantic communication and intelligent object search and retrieval techniques where meaningful visual information is identified and retrieved efficiently.",
      tech: ["AI Research", "Semantic Communication"],
      status: "Journal Paper Publication — Ongoing",
      icon: <Search className="h-6 w-6" />
    }
  ];

  return (
    <section id="projects" className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 md:py-24">
      <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-12">Projects</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project) => (
          <div key={project.title} className="flex flex-col rounded-xl border border-border bg-card overflow-hidden transition-all hover:shadow-md hover:border-primary/50">
            <div className="p-6 flex-1 flex flex-col">
              <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 text-primary">
                {project.icon}
              </div>
              {project.status && (
                <div className="mb-3 text-xs font-medium text-primary">
                  {project.status}
                </div>
              )}
              <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
              <p className="text-sm text-muted-foreground mb-4">{project.category}</p>
              <p className="text-muted-foreground text-sm flex-1 leading-relaxed mb-6">
                {project.description}
              </p>
              <div className="flex flex-wrap gap-2 mt-auto">
                {project.tech.map((tech) => (
                  <span key={tech} className="inline-flex items-center rounded-md border border-border px-2 py-1 text-xs font-medium text-muted-foreground">
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
