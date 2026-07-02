import type { ReactNode } from 'react';
import { CustomCursor } from './CustomCursor';

interface LayoutProps {
  children: ReactNode;
}

export const Layout = ({ children }: LayoutProps) => {
  return (
    <div className="relative min-h-screen text-foreground selection:bg-primary/30 selection:text-white">
      <CustomCursor />
      
      {/* Global Navigation could go here */}
      <header className="fixed top-0 left-0 right-0 z-50 p-6 flex justify-between items-center mix-blend-difference text-white">
        <div className="text-xl font-bold tracking-tighter">SK.</div>
        <nav className="hidden md:flex gap-8 text-sm font-medium">
          <a href="#about" className="hover:text-primary transition-colors">About</a>
          <a href="#projects" className="hover:text-primary transition-colors">Projects</a>
          <a href="#contact" className="hover:text-primary transition-colors">Contact</a>
        </nav>
      </header>

      <main>
        {children}
      </main>
    </div>
  );
};
