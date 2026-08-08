export function Experience() {
  return (
    <section id="experience" className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 md:py-24">
      <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-12">Professional Experience</h2>
      <div className="relative border-l border-border ml-3 pl-8 pb-8">
        <div className="absolute w-3 h-3 bg-primary rounded-full -left-[1.35rem] top-2 ring-4 ring-background" />
        <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-4 gap-2">
          <h3 className="text-xl font-semibold">Web Developer Intern</h3>
          <span className="text-sm font-medium px-3 py-1 rounded-full bg-muted text-muted-foreground w-fit">
            December 2024
          </span>
        </div>
        <div className="text-lg text-foreground mb-4 font-medium">AAHA Solutions, Pondicherry</div>
        <ul className="space-y-3 text-muted-foreground list-disc list-outside ml-4">
          <li>Built a responsive Contact and Credential Management System using HTML, CSS, PHP, and MySQL.</li>
          <li>Used Git for version control and collaborated on debugging and cross-browser testing.</li>
          <li>Maintained project documentation.</li>
          <li>Contributed to UI/UX improvements and responsive web development.</li>
        </ul>
      </div>
    </section>
  );
}
