export function Footer() {
  return (
    <footer className="border-t border-border bg-background py-8">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="text-sm text-muted-foreground">
          © {new Date().getFullYear()} Hari Rajan N. All rights reserved.
        </div>
        <div className="text-sm text-muted-foreground">
          Python Programmer & Backend Web Developer
        </div>
      </div>
    </footer>
  );
}
