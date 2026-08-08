"use client";

import { motion } from 'motion/react';
import Link from 'next/link';
import { Canvas } from '@react-three/fiber';
import { useRef } from 'react';
import { useFrame } from '@react-three/fiber';

// Lightweight 3D wireframe background component
function WireframeObject() {
  const meshRef = useRef<any>(null);
  
  useFrame((state, delta) => {
    if (meshRef.current) {
      meshRef.current.rotation.x += delta * 0.1;
      meshRef.current.rotation.y += delta * 0.15;
    }
  });

  return (
    <mesh ref={meshRef} position={[2, 0, -5]}>
      <icosahedronGeometry args={[4, 1]} />
      <meshBasicMaterial color="#333333" wireframe transparent opacity={0.15} />
    </mesh>
  );
}

export function Hero() {
  return (
    <section id="hero" className="relative min-h-screen w-full bg-background overflow-hidden flex items-center pt-24 pb-16">
      
      {/* 3D Background */}
      <div className="absolute inset-0 z-0 pointer-events-none opacity-50 md:opacity-100 hidden md:block">
        <Canvas camera={{ position: [0, 0, 10], fov: 50 }}>
          <WireframeObject />
        </Canvas>
      </div>

      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col-reverse md:flex-row items-center justify-between gap-12">
        
        {/* Typographic Content */}
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
          className="w-full md:w-3/5"
        >
          <div className="space-y-6">
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-black tracking-tighter text-foreground uppercase leading-[0.9]">
              Hari Rajan N
            </h1>
            
            <div className="h-px w-full bg-border my-8" />
            
            <div className="flex flex-col sm:flex-row gap-8 items-start sm:items-center">
              <h2 className="text-xl md:text-2xl font-light text-foreground uppercase tracking-widest leading-tight">
                Python Programmer <br/>& Backend Web Developer
              </h2>
              <p className="text-muted-foreground max-w-sm text-sm leading-relaxed border-l border-border pl-6">
                Building efficient, scalable backend solutions. Passionate Python Programmer with hands-on experience in FastAPI, PHP, and MySQL, focused on RESTful APIs and modern backend technologies.
              </p>
            </div>

            <div className="pt-8 flex flex-wrap gap-6 items-center uppercase tracking-widest text-xs font-bold">
              <Link 
                href="#projects" 
                className="pb-1 border-b border-primary text-primary hover:text-foreground hover:border-foreground transition-colors"
              >
                View Projects
              </Link>
              <a 
                href="/resume.pdf" 
                target="_blank"
                rel="noopener noreferrer"
                className="pb-1 border-b border-border text-muted-foreground hover:text-foreground hover:border-foreground transition-colors"
              >
                Download Resume
              </a>
              <div className="w-px h-4 bg-border hidden sm:block" />
              <a href="https://github.com/harirajan44" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-foreground transition-colors">GitHub</a>
              <a href="https://linkedin.com/in/harirajan44" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-foreground transition-colors">LinkedIn</a>
            </div>
          </div>
        </motion.div>

        {/* Photographic Identity */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
          className="w-full md:w-2/5 flex justify-center md:justify-end"
        >
          <div className="relative w-64 h-80 md:w-80 md:h-[28rem] group">
            {/* Image Container with Editorial Matte */}
            <div className="absolute inset-0 bg-secondary grayscale group-hover:grayscale-0 transition-all duration-700 ease-in-out z-10 overflow-hidden">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img 
                src="/profile.jpg" 
                alt="Hari Rajan N" 
                className="w-full h-full object-cover object-center mix-blend-luminosity group-hover:mix-blend-normal transition-all duration-700 opacity-90 group-hover:opacity-100 scale-105 group-hover:scale-100"
              />
            </div>
            
            {/* Offset Grid Accent */}
            <div className="absolute -bottom-6 -left-6 w-full h-full border border-border z-0 hidden md:block" />
            <div className="absolute -top-6 -right-6 w-32 h-32 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI4IiBoZWlnaHQ9IjgiPgo8cmVjdCB3aWR0aD0iOCIgaGVpZ2h0PSI4IiBmaWxsPSJ0cmFuc3BhcmVudCI+PC9yZWN0Pgo8Y2lyY2xlIGN4PSI0IiBjeT0iNCIgcj0iMSIgZmlsbD0icmdiYSgyNTUsIDI1NSwgMjU1LCAwLjE1KSI+PC9jaXJjbGU+Cjwvc3ZnPg==')] z-20 pointer-events-none" />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
