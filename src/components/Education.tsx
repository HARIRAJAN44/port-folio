export function Education() {
  return (
    <section id="education" className="bg-muted/10 border-y border-border py-16 md:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-12">Education</h2>
        
        <div className="space-y-12 max-w-4xl">
          <div className="relative border-l border-border ml-3 pl-8">
            <div className="absolute w-3 h-3 bg-primary rounded-full -left-[1.35rem] top-2 ring-4 ring-background" />
            <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-2 gap-2">
              <h3 className="text-xl font-semibold">IFET College of Engineering</h3>
              <span className="text-sm font-medium px-3 py-1 rounded-full bg-muted text-muted-foreground w-fit">
                2023–2027
              </span>
            </div>
            <div className="text-lg text-foreground mb-3">Bachelor of Engineering — Computer Science and Engineering</div>
            <div className="inline-flex items-center rounded-md border border-border bg-card px-3 py-1 text-sm font-medium">
              CGPA: <span className="ml-1 text-primary">8.6</span>
            </div>
          </div>

          <div className="relative border-l border-border ml-3 pl-8">
            <div className="absolute w-3 h-3 bg-muted-foreground rounded-full -left-[1.35rem] top-2 ring-4 ring-background" />
            <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-2 gap-2">
              <h3 className="text-xl font-semibold">St. Joseph's Higher Secondary School, Cuddalore</h3>
              <span className="text-sm font-medium px-3 py-1 rounded-full bg-muted text-muted-foreground w-fit">
                2021–2023
              </span>
            </div>
            <div className="text-lg text-foreground mb-3">Higher Secondary Certificate (HSC)</div>
            <div className="inline-flex items-center rounded-md border border-border bg-card px-3 py-1 text-sm font-medium">
              Percentage: <span className="ml-1 text-primary">83%</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
