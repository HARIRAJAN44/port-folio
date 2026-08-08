import Link from 'next/link';

export function Navbar() {
  return (
    <nav className="sticky top-0 z-50 w-full border-b border-border bg-background/80 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <Link href="/" className="text-xl font-bold tracking-tight">
          Hari Rajan N
        </Link>
        <div className="hidden md:flex gap-6 text-sm font-medium text-muted-foreground">
          <Link href="#about" className="hover:text-foreground transition-colors">About</Link>
          <Link href="#skills" className="hover:text-foreground transition-colors">Skills</Link>
          <Link href="#projects" className="hover:text-foreground transition-colors">Projects</Link>
          <Link href="#achievements" className="hover:text-foreground transition-colors">Achievements</Link>
          <Link href="#contact" className="hover:text-foreground transition-colors">Contact</Link>
        </div>
      </div>
    </nav>
  );
}
