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
    <section className="bg-black text-white pt-32 sm:pt-48 pb-24 sm:pb-32 px-6 sm:px-8" id="skills">
      <div className="max-w-screen-xl mx-auto">

        {/* Section label */}
        <motion.p
          {...fu(0)}
          className="text-xs font-medium tracking-[0.3em] uppercase text-white/30 mb-16"
        >
          Skills
        </motion.p>

        {/* Skills list — text only */}
        <div className="flex flex-col space-y-6 md:space-y-8 mt-10 w-full overflow-hidden">
          {SKILLS.map((skill, index) => (
            <motion.div key={skill.id} {...fu(0.1 + index * 0.05)} className="w-full">
              <TextStaggerHover
                index={index}
                className="cursor-default font-black uppercase tracking-tighter text-white whitespace-nowrap text-[8.5vw] md:text-[8vw] lg:text-[7.5vw] leading-[0.85]"
                text={skill.title}
              />
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
