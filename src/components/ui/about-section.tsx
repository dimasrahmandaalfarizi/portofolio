'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';

/* ─── Bio ────────────────────────────────────────────────────── */
const IDENTITY = [
  { label: 'Location', value: 'Surabaya, Indonesia' },
  { label: 'Education', value: 'Informatics Engineering — UPNVJATIM' },
  { label: 'Role', value: 'Web Developer & Informatics Student' },
  { label: 'Status', value: 'Backburner' },
];

const FUN_FACTS = [
  { title: 'Coffee-powered', desc: 'Best code is written with a cup of coffee in hand' },
  { title: 'Strategy enthusiast', desc: 'Chess, tactics, and long-term thinking carry over to code' },
  { title: 'Melancholic playlists', desc: 'Sad music, great focus — the ideal coding environment' },
  { title: 'Indonesia tech advocate', desc: 'Rooting for the local dev ecosystem to grow and thrive' },
];

/* ─── Tech Stack ─────────────────────────────────────────────── */
type Tech = { name: string; slug: string; color: string; src?: string; abbr?: string };

const STACK: { category: string; items: Tech[] }[] = [
  {
    category: 'Frontend',
    items: [
      { name: 'HTML5',       slug: 'html5',           color: '#E34F26' },
      { name: 'CSS3',        slug: 'css',             color: '#1572B6' },
      { name: 'JavaScript',  slug: 'javascript',      color: '#F7DF1E' },
      { name: 'TypeScript',  slug: 'typescript',      color: '#3178C6' },
      { name: 'React',       slug: 'react',           color: '#61DAFB' },
      { name: 'Vue',         slug: 'vuedotjs',        color: '#4FC08D' },
      { name: 'Next.js',     slug: 'nextdotjs',       color: '#ffffff' },
      { name: 'Nuxt',        slug: 'nuxt',            color: '#00DC82' },
      { name: 'Svelte',      slug: 'svelte',          color: '#FF3E00' },
      { name: 'Tailwind',    slug: 'tailwindcss',     color: '#06B6D4' },
      { name: 'Bootstrap',   slug: 'bootstrap',       color: '#7952B3' },
    ],
  },
  {
    category: 'Backend',
    items: [
      { name: 'Laravel',  slug: 'laravel',   color: '#FF2D20' },
      { name: 'PHP',      slug: 'php',       color: '#777BB4' },
      { name: 'Node.js',  slug: 'nodedotjs', color: '#5FA04E' },
      { name: 'Express',  slug: 'express',   color: '#ffffff' },
      { name: 'FastAPI',  slug: 'fastapi',   color: '#009688' },
      { name: 'GraphQL',  slug: 'graphql',   color: '#E10098' },
    ],
  },
  {
    category: 'Database',
    items: [
      { name: 'MySQL',      slug: 'mysql',      color: '#4479A1' },
      { name: 'PostgreSQL', slug: 'postgresql', color: '#4169E1' },
      { name: 'MongoDB',    slug: 'mongodb',    color: '#47A248' },
    ],
  },
  {
    category: 'Mobile',
    items: [
      { name: 'React Native',    slug: 'react',          color: '#61DAFB' },
      { name: 'Android Studio',  slug: 'androidstudio',  color: '#3DDC84' },
      { name: 'Expo',            slug: 'expo',           color: '#ffffff' },
    ],
  },
  {
    category: 'DevOps & Cloud',
    items: [
      { name: 'Docker',          slug: 'docker',         color: '#2496ED' },
      { name: 'AWS',             slug: 'amazonwebservices', color: '#232F3E' },
      { name: 'Google Cloud',    slug: 'googlecloud',    color: '#4285F4' },
      { name: 'GitHub Actions',  slug: 'githubactions',  color: '#2088FF' },
      { name: 'Linux',           slug: 'linux',          color: '#FCC624' },
    ],
  },
  {
    category: 'Tools',
    items: [
      { name: 'Git',      slug: 'git',               color: '#F05032' },
      { name: 'GitHub',   slug: 'github',            color: '#ffffff' },
      { name: 'Figma',    slug: 'figma',             color: '#F24E1E' },
      { name: 'Postman',  slug: 'postman',           color: '#FF6C37' },
      { name: 'VS Code',  slug: 'visualstudiocode',  color: '#007ACC' },
    ],
  },
];

/* ─── Animation helpers ─────────────────────────────────────── */
const ease = [0.65, 0.05, 0, 1] as const;

const fu = (delay = 0) => ({
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.55, ease, delay },
});

/* stagger container for tech badges */
const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.045, delayChildren: 0.1 } },
};

const badgeItem = {
  hidden: { opacity: 0, scale: 0.8, y: 8 },
  show: {
    opacity: 1, scale: 1, y: 0,
    transition: { duration: 0.4, ease: [0.34, 1.56, 0.64, 1] as const },
  },
};

/* ─── TechBadge — square icon tile ─────────────────────────── */
function TechBadge({ tech }: { tech: Tech }) {
  const [imgOk, setImgOk] = useState(true);
  const iconSrc = tech.src ?? `https://cdn.simpleicons.org/${tech.slug}/${tech.color.replace('#', '')}`;

  return (
    <motion.div
      variants={badgeItem}
      whileHover={{ scale: 1.12, y: -3 }}
      transition={{ type: 'spring', stiffness: 380, damping: 18 }}
      title={tech.name}
      className="group relative w-11 h-11 flex items-center justify-center rounded-xl border border-white/8 bg-white/[0.04] cursor-default"
    >
      {/* Brand color glow on hover */}
      <span
        className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
        style={{ boxShadow: `0 0 20px 0 ${tech.color}35, inset 0 0 0 1px ${tech.color}40` }}
      />

      {imgOk ? (
        <img
          src={iconSrc}
          alt={tech.name}
          className="w-5 h-5 object-contain relative z-10"
          loading="lazy"
          onError={() => setImgOk(false)}
        />
      ) : (
        /* Fallback: initials with brand color */
        <span
          className="text-[10px] font-bold leading-none z-10 select-none"
          style={{ color: tech.color }}
        >
          {tech.abbr ?? tech.name.slice(0, 3).toUpperCase()}
        </span>
      )}
    </motion.div>
  );
}

/* ─── Component ─────────────────────────────────────────────── */
export default function AboutSection() {
  return (
    <section className="bg-black text-white pt-32 sm:pt-48 pb-[150px] sm:pb-[250px] px-6 sm:px-8 mt-[150px] sm:mt-[250px]" id="about">
      <div className="max-w-screen-xl mx-auto">

        {/* Section label */}
        <motion.p
          {...fu(0)}
          className="text-xs font-medium tracking-[0.3em] uppercase text-white/30 mb-16"
        >
          About
        </motion.p>

        {/* ── Two-column layout ──────────────────────────────── */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-28 mb-24">

          {/* Left — Bio ────────────────────────────────────── */}
          <div className="flex flex-col gap-10">

            <motion.h2
              {...fu(0.05)}
              className="text-4xl sm:text-5xl font-bold leading-[1.06] tracking-tight"
            >
              Developer.<br />Builder.<br />Learner.
            </motion.h2>

            <motion.p {...fu(0.1)} className="text-base text-white/55 leading-[1.9]">
              I build modern, performant, and beautiful web experiences. I care
              deeply about clean code, thoughtful interfaces, and shipping
              things that actually matter.
            </motion.p>

            {/* Identity */}
            <motion.div {...fu(0.15)} className="flex flex-col gap-4">
              {IDENTITY.map((item) => (
                <div key={item.label} className="flex items-start gap-4">
                  <span className="text-xs font-medium tracking-widest uppercase text-white/25 w-24 shrink-0 pt-0.5">
                    {item.label}
                  </span>
                  <span className="text-sm text-white/70 leading-snug">{item.value}</span>
                </div>
              ))}
            </motion.div>

            {/* Fun facts */}
            <motion.div {...fu(0.2)}>
              <p className="text-xs font-medium tracking-[0.2em] uppercase text-white/25 mb-4">
                Fun Facts
              </p>
              <div className="flex flex-col gap-2">
                {FUN_FACTS.map((fact, i) => (
                  <motion.div key={fact.title} {...fu(0.22 + i * 0.07)} className="flex items-start gap-4">
                    <span className="text-xs font-mono text-white/20 pt-0.5 w-5 shrink-0 select-none">
                      {String(i + 1).padStart(2, '0')}
                    </span>
                    <div className="flex flex-col gap-0.5">
                      <span className="text-sm font-semibold text-white/70">{fact.title}</span>
                      <span className="text-xs text-white/35 leading-relaxed">{fact.desc}</span>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* GitHub link */}
            <motion.a
              {...fu(0.35)}
              href="https://github.com/dimasrahmandaalfarizi"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2.5 self-start text-sm text-white/35 hover:text-white transition-colors duration-200 group"
            >
              <svg className="w-4 h-4 shrink-0" fill="currentColor" viewBox="0 0 24 24">
                <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
              </svg>
              <span className="font-medium">@dimasrahmandaalfarizi</span>
              <svg className="w-3 h-3 opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-200" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </motion.a>
          </div>

          {/* Right — Tech Stack ─────────────────────────────── */}
          <div className="flex flex-col gap-9">
            <motion.p
              {...fu(0.05)}
              className="text-xs font-medium tracking-[0.3em] uppercase text-white/30"
            >
              Tech Stack & Tools
            </motion.p>

            {STACK.map((group, gi) => (
              <motion.div key={group.category} {...fu(0.1 + gi * 0.07)}>
                <p className="text-xs font-medium tracking-[0.15em] uppercase text-white/25 mb-3">
                  {group.category}
                </p>

                {/* Stagger badge grid */}
                <motion.div
                  variants={container}
                  initial="hidden"
                  whileInView="show"
                  viewport={{ once: true }}
                  className="flex flex-wrap gap-2"
                >
                  {group.items.map((tech) => (
                    <TechBadge key={tech.name} tech={tech} />
                  ))}
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
