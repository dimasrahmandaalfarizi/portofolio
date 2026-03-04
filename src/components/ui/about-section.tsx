'use client';

import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { TextDisperse } from '@/components/ui/text-disperse';

export function AboutSection() {
  // Tall wrapper gives us scroll "room" while content stays sticky
  const wrapperRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: wrapperRef,
    offset: ['start start', 'end end'],
  });

  // Name: fully visible at entry → fades out by midpoint
  const nameOpacity = useTransform(scrollYProgress, [0, 0.1, 0.45], [0, 1, 0]);
  const nameScale  = useTransform(scrollYProgress, [0, 0.1, 0.45], [0.92, 1, 0.9]);
  const nameY      = useTransform(scrollYProgress, [0.1, 0.45], ['0%', '-8%']);

  // About content: fades in just after name starts leaving
  const contentOpacity = useTransform(scrollYProgress, [0.4, 0.65], [0, 1]);
  const contentY       = useTransform(scrollYProgress, [0.4, 0.65], ['40px', '0px']);

  return (
    // Wrapper: 280vh gives plenty of scroll room
    <div ref={wrapperRef} id="about" className="relative" style={{ height: '280vh' }}>

      {/* ── Sticky viewport container ── */}
      <div className="sticky top-0 h-screen overflow-hidden bg-black flex items-center">

        {/* Ambient glow */}
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0"
        >
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[90vw] h-[90vw] rounded-full bg-[radial-gradient(ellipse_at_center,rgba(139,92,246,0.1),transparent_60%)]" />
          <div className="absolute bottom-0 right-0 w-[50vw] h-[50vw] rounded-full bg-[radial-gradient(ellipse_at_center,rgba(59,130,246,0.07),transparent_65%)]" />
        </div>

        {/* Subtle grid */}
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 opacity-[0.025]"
          style={{
            backgroundImage: `
              linear-gradient(rgba(255,255,255,0.6) 1px, transparent 1px),
              linear-gradient(90deg, rgba(255,255,255,0.6) 1px, transparent 1px)
            `,
            backgroundSize: '80px 80px',
          }}
        />

        {/* ── LAYER 1: Name (fades out) ── */}
        <motion.div
          style={{ opacity: nameOpacity, scale: nameScale, y: nameY }}
          className="absolute inset-0 flex flex-col justify-center px-6 md:px-12 pointer-events-none"
        >
          <p className="text-xs uppercase tracking-[0.35em] text-violet-400 font-medium mb-6">
            About Me
          </p>
          {['DIMAS', 'RAHMANDA', 'ALFARIZI'].map((word) => (
            <TextDisperse
              key={word}
              className="text-[13vw] font-bold leading-none tracking-tight text-white pointer-events-auto"
            >
              {word}
            </TextDisperse>
          ))}
        </motion.div>

        {/* ── LAYER 2: About content (fades in) ── */}
        <motion.div
          style={{ opacity: contentOpacity, y: contentY }}
          className="absolute inset-0 flex items-center px-6 md:px-12"
        >
          <div className="w-full max-w-screen-xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

            {/* Left – title hint */}
            <div>
              <p className="text-xs uppercase tracking-[0.35em] text-violet-400 font-medium mb-4">
                About Me
              </p>
              <h2 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight text-white mb-6">
                Dimas<br />Rahmanda<br />Alfarizi
              </h2>
              <div className="inline-flex items-center gap-3 px-5 py-2 rounded-full border border-white/10 bg-white/5 backdrop-blur-sm">
                <span className="w-2 h-2 rounded-full bg-violet-400 shadow-[0_0_8px_#a78bfa]" />
                <span className="text-sm text-white/70 tracking-widest uppercase">
                  Full-Stack Developer
                </span>
              </div>
            </div>

            {/* Right – bio + stack + stats */}
            <div className="flex flex-col gap-8">
              <p className="text-lg text-white/60 leading-relaxed">
                I'm a passionate developer who loves crafting pixel-perfect,
                high-performance digital experiences. My focus is on creating
                modern web applications with clean code, stunning UI, and
                seamless user interactions.
              </p>

              {/* Tech chips */}
              <div className="flex flex-wrap gap-2">
                {['React', 'Next.js', 'TypeScript', 'Tailwind', 'Framer Motion', 'Node.js'].map(
                  (tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1.5 text-sm rounded-lg border border-white/10 bg-white/5 text-white/70 hover:border-violet-400/40 hover:text-white hover:bg-violet-400/10 transition-all duration-300 cursor-default"
                    >
                      {tech}
                    </span>
                  ),
                )}
              </div>

              {/* Stats */}
              <div className="grid grid-cols-3 gap-4">
                {[
                  { value: '2+',  label: 'Years Experience' },
                  { value: '10+', label: 'Projects Built' },
                  { value: '∞',   label: 'Passion for Code' },
                ].map(({ value, label }) => (
                  <div
                    key={label}
                    className="p-4 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-sm text-center hover:border-violet-400/30 transition-all duration-300 group"
                  >
                    <p className="text-3xl font-bold text-white group-hover:text-violet-300 transition-colors duration-300">
                      {value}
                    </p>
                    <p className="text-xs text-white/40 mt-1 leading-snug">{label}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>

      </div>
    </div>
  );
}
