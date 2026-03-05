"use client";

import React, { useEffect, useRef } from "react";
import dynamic from "next/dynamic";
import { motion } from "framer-motion";

const Spline = dynamic(() => import("@splinetool/react-spline"), {
  ssr: false,
  loading: () => (
    <div style={{ width: "100%", height: "100vh", background: "linear-gradient(135deg, #0a0a0f 0%, #0f0c29 30%, #1a0a2e 100%)" }} />
  ),
});

function HeroSplineBackground() {
  return (
    <div style={{
      position: "relative",
      width: "100%",
      height: "100vh",
      pointerEvents: "auto",
      overflow: "hidden",
    }}>
      <Spline
        style={{ width: "100%", height: "100vh", pointerEvents: "auto" }}
        scene="https://prod.spline.design/dJqTIQ-tE3ULUPMi/scene.splinecode"
      />
      <div style={{
        position: "absolute", top: 0, left: 0, width: "100%", height: "100vh",
        background: `
          linear-gradient(to right, rgba(0,0,0,0.8), transparent 30%, transparent 70%, rgba(0,0,0,0.8)),
          linear-gradient(to bottom, transparent 50%, rgba(0,0,0,0.9))
        `,
        pointerEvents: "none",
      }} />
    </div>
  );
}


import { TechStack3D } from "@/components/ui/tech-stack-3d";

function HeroContent() {
  const base = { initial: { opacity: 0, y: 32 }, animate: { opacity: 1, y: 0 } };
  const ease = "easeOut";

  return (
    <div className="text-white px-6 sm:px-8 max-w-screen-xl mx-auto w-full flex flex-col gap-10 lg:flex-row lg:justify-between lg:items-center py-20 sm:py-24">

      {/* ── Left column ── */}
      <div className="flex flex-col gap-6 w-full lg:w-1/2">

        {/* Badge */}
        <motion.div
          {...base}
          transition={{ duration: 0.6, ease, delay: 0 }}
          className="inline-flex items-center gap-2.5 self-start px-4 py-2 rounded-full border border-white/20 bg-white/5 backdrop-blur-sm"
          style={{ pointerEvents: "auto" }}
        >
          <span style={{ width: 8, height: 8, borderRadius: "50%", background: "#4ade80", display: "inline-block", boxShadow: "0 0 10px #4ade80" }} />
          <span className="text-xs font-medium text-white/80 tracking-widest uppercase">Available for Work</span>
        </motion.div>

        {/* Heading */}
        <motion.h1
          {...base}
          transition={{ duration: 0.7, ease, delay: 0.15 }}
          className="text-5xl sm:text-6xl md:text-7xl lg:text-7xl xl:text-8xl font-bold leading-[1.05] tracking-tight"
        >
          Crafting<br />Digital<br />Experiences
        </motion.h1>

        {/* Tech stack line */}
        <motion.div
          {...base}
          transition={{ duration: 0.6, ease, delay: 0.3 }}
          className="text-xs sm:text-sm text-gray-400 tracking-[0.2em] uppercase"
        >
          React · Next.js · TypeScript · UI · 3D
        </motion.div>
      </div>

      {/* ── Right column ── */}
      <div className="flex flex-col gap-8 w-full lg:w-5/12">

        {/* Description */}
        <motion.p
          {...base}
          transition={{ duration: 0.6, ease, delay: 0.4 }}
          className="text-base sm:text-lg text-white/65 leading-[1.8] max-w-md"
        >
          Building modern, fast, and beautiful web experiences.
          Passionate about clean code and stunning UI that leaves an impression.
        </motion.p>

      </div>
    </div>
  );
}

const HeroSection = () => {
  const heroContentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      requestAnimationFrame(() => {
        const scrollPosition = window.pageYOffset;
        if (heroContentRef.current) {
          const opacity = 1 - Math.min(scrollPosition / 400, 1);
          heroContentRef.current.style.opacity = opacity.toString();
        }
      });
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="relative">
      <div className="relative min-h-screen">
        <div className="absolute inset-0 z-0 pointer-events-auto">
          <HeroSplineBackground />
        </div>

        {/* Hero content (fade on scroll) */}
        <div
          ref={heroContentRef}
          style={{
            position: "absolute", top: 0, left: 0, width: "100%", height: "100vh",
            display: "flex", justifyContent: "center", alignItems: "center",
            zIndex: 10, pointerEvents: "none",
          }}
        >
          <HeroContent />
        </div>
      </div>
      
      {/* Content below hero: Interactive 3D Tech Stack */}
      <TechStack3D />
    </div>
  );
};

export { HeroSection };
