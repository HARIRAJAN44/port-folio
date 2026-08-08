import { Mail, Phone, Briefcase, Code, Send } from 'lucide-react';

export function Contact() {
  return (
    <section id="contact" className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 md:py-24">
      <div className="max-w-3xl mx-auto text-center space-y-8">
        <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Have a project in mind?</h2>
        <p className="text-lg text-muted-foreground">
          I'm always open to discussing backend development, AI/ML projects, web technologies, and software engineering opportunities.
        </p>
        
        <div className="flex flex-col sm:flex-row justify-center gap-4 pt-4">
          <a 
            href="mailto:harirajan.n2005@gmail.com" 
            className="inline-flex h-12 items-center justify-center rounded-md bg-primary px-8 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
          >
            <Send className="mr-2 h-4 w-4" />
            Let's Connect
          </a>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 pt-12">
          <a href="mailto:harirajan.n2005@gmail.com" className="flex flex-col items-center gap-2 p-6 rounded-xl border border-border bg-card transition-colors hover:bg-muted/50">
            <Mail className="h-6 w-6 text-primary mb-2" />
            <span className="text-sm font-medium">Email</span>
            <span className="text-xs text-muted-foreground break-all">harirajan.n2005@gmail.com</span>
          </a>
          
          <div className="flex flex-col items-center gap-2 p-6 rounded-xl border border-border bg-card transition-colors hover:bg-muted/50">
            <Phone className="h-6 w-6 text-primary mb-2" />
            <span className="text-sm font-medium">Phone</span>
            <span className="text-xs text-muted-foreground">+91 9342868079</span>
          </div>

          <a href="https://linkedin.com/in/harirajan44" target="_blank" rel="noreferrer" className="flex flex-col items-center gap-2 p-6 rounded-xl border border-border bg-card transition-colors hover:bg-muted/50">
            <Briefcase className="h-6 w-6 text-primary mb-2" />
            <span className="text-sm font-medium">LinkedIn</span>
            <span className="text-xs text-muted-foreground">harirajan44</span>
          </a>

          <a href="https://github.com/harirajan44" target="_blank" rel="noreferrer" className="flex flex-col items-center gap-2 p-6 rounded-xl border border-border bg-card transition-colors hover:bg-muted/50">
            <Code className="h-6 w-6 text-primary mb-2" />
            <span className="text-sm font-medium">GitHub</span>
            <span className="text-xs text-muted-foreground">harirajan44</span>
          </a>
        </div>
      </div>
    </section>
  );
}
