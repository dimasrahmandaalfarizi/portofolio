'use client';

import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import SectionHeading from './SectionHeading';

const skillCategories = [
    {
        title: 'Frontend Architecture',
        description: 'Specializing in reactive systems and aesthetic UI.',
        skills: ['React', 'Next.js', 'TypeScript', 'Tailwind CSS', 'Framer Motion'],
        icon: (
            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
        )
    },
    {
        title: 'Backend Systems',
        description: 'Robust server-side logic and database structures.',
        skills: ['Node.js', 'Express', 'MySQL', 'Prisma', 'REST APIs'],
        icon: (
            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2m-2-4h.01M17 16h.01" />
            </svg>
        )
    },
    {
        title: 'Engineering Tools',
        description: 'Optimizing workflow and ensuring code quality.',
        skills: ['Git', 'GitHub', 'VS Code', 'Docker', 'Postman'],
        icon: (
            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
            </svg>
        )
    }
];

export default function Skills() {
    const { elementRef, isVisible } = useScrollAnimation();

    return (
        <section id="skills" className="section relative overflow-hidden">
            {/* Background glow */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-cyan-900/10 rounded-full blur-[120px] pointer-events-none"></div>

            <div className="container px-6 relative z-10">
                <SectionHeading
                    title="Tech"
                    accent="Stack"
                    subtitle="My toolbox for building high-performance, professional digital products."
                />

                <div
                    ref={elementRef}
                    className={`grid lg:grid-cols-3 gap-8 ${isVisible ? 'fade-in' : 'opacity-0'}`}
                >
                    {skillCategories.map((cat, idx) => (
                        <div
                            key={cat.title}
                            className="glass-card p-10 rounded-[2rem] group"
                            style={{ transitionDelay: `${idx * 150}ms` }}
                        >
                            <div className="w-16 h-16 bg-accent/10 rounded-2xl flex items-center justify-center text-accent mb-8 group-hover:bg-accent group-hover:text-slate-900 transition-all duration-500">
                                {cat.icon}
                            </div>
                            <h3 className="text-2xl font-black mb-4 tracking-tight">{cat.title}</h3>
                            <p className="text-sm text-slate-400 mb-8 leading-relaxed font-medium">
                                {cat.description}
                            </p>

                            <div className="flex flex-wrap gap-3">
                                {cat.skills.map(skill => (
                                    <span
                                        key={skill}
                                        className="px-4 py-2 bg-white/5 border border-white/5 rounded-full text-xs font-bold text-slate-300 hover:border-accent/40 hover:text-accent transition-all cursor-default"
                                    >
                                        {skill}
                                    </span>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
