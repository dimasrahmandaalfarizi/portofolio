'use client';

import { motion } from 'framer-motion';
import {
  HoverSlider,
  HoverSliderImage,
  HoverSliderImageWrap,
  TextStaggerHover,
} from '@/components/blocks/animated-slideshow';

/* ─── Skills data ────────────────────────────────────────────── */
const SKILLS = [
  {
    id: 'skill-1',
    title: 'Frontend Development',
    imageUrl:
      'https://images.unsplash.com/photo-1654618977232-a6c6dea9d1e8?q=80&w=2486&auto=format&fit=crop&ixlib=rb-4.1.0',
  },
  {
    id: 'skill-2',
    title: 'Backend Development',
    imageUrl:
      'https://images.unsplash.com/photo-1624996752380-8ec242e0f85d?q=80&w=2487&auto=format&fit=crop&ixlib=rb-4.1.0',
  },
  {
    id: 'skill-3',
    title: 'Mobile Development',
    imageUrl:
      'https://images.unsplash.com/photo-1551650975-87deedd944c3?q=80&w=2574&auto=format&fit=crop&ixlib=rb-4.1.0',
  },
  {
    id: 'skill-4',
    title: 'UI / UX Design',
    imageUrl:
      'https://images.unsplash.com/photo-1688733720228-4f7a18681c4f?q=80&w=2487&auto=format&fit=crop&ixlib=rb-4.1.0',
  },
  {
    id: 'skill-5',
    title: 'Cloud & DevOps',
    imageUrl:
      'https://images.unsplash.com/photo-1544197150-b99a580bb7a8?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.1.0',
  },
  {
    id: 'skill-6',
    title: 'Database Management',
    imageUrl:
      'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?q=80&w=2534&auto=format&fit=crop&ixlib=rb-4.1.0',
  },
];

/* ─── Animation helper ───────────────────────────────────────── */
const ease = [0.65, 0.05, 0, 1] as const;
const fu = (delay = 0) => ({
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.55, ease, delay },
});

/* ─── Component ──────────────────────────────────────────────── */
export default function SkillsSection() {
  return (
    <section className="bg-black text-white py-24 sm:py-32 px-6 sm:px-8" id="skills">
      <div className="max-w-screen-xl mx-auto">

        {/* Section label */}
        <motion.p
          {...fu(0)}
          className="text-xs font-medium tracking-[0.3em] uppercase text-white/30 mb-16"
        >
          Skills
        </motion.p>

        {/* Animated slideshow */}
        <HoverSlider className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-12 lg:gap-20">

          {/* Left: skill titles */}
          <div className="flex flex-col space-y-6 md:space-y-8 w-full lg:w-auto">
            {SKILLS.map((skill, index) => (
              <TextStaggerHover
                key={skill.id}
                index={index}
                className="cursor-pointer text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold uppercase tracking-tight text-white whitespace-nowrap"
                text={skill.title}
              />
            ))}
          </div>

          {/* Right: image reveal — taller portrait-ish */}
          <HoverSliderImageWrap className="w-full lg:w-[420px] aspect-[3/4] rounded-2xl overflow-hidden shrink-0">
            {SKILLS.map((skill, index) => (
              <div key={skill.id}>
                <HoverSliderImage
                  index={index}
                  imageUrl={skill.imageUrl}
                  src={skill.imageUrl}
                  alt={skill.title}
                  className="size-full object-cover"
                  loading="eager"
                  decoding="async"
                />
              </div>
            ))}
          </HoverSliderImageWrap>
        </HoverSlider>

      </div>
    </section>
  );
}
