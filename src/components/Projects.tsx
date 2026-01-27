'use client';

import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import SectionHeading from './SectionHeading';

const projects = [
    {
        title: 'Modern Portfolio V2',
        category: 'Full-Stack Development',
        description: 'An elite, high-performance portfolio featuring Next.js, Framer Motion, and Tailwind CSS. Focused on visual depth and professional refinement.',
        link: '#',
        tags: ['React', 'Next.js', 'Tailwind'],
        image: 'bg-gradient-to-br from-slate-700 to-slate-900'
    },
    {
        title: 'E-Learning Platform',
        category: 'Architecture & Design',
        description: 'A conceptual learning management system with a focus on intuitive UX and high-density information management.',
        link: '#',
        tags: ['Next.js', 'MySQL', 'Prisma'],
        image: 'bg-gradient-to-br from-cyan-900 to-slate-900'
    }
];

export default function Projects() {
    const { elementRef, isVisible } = useScrollAnimation();

    return (
        <section id="projects" className="section bg-slate-950/20">
            <div className="container px-6">
                <SectionHeading
                    title="Featured"
                    accent="Projects"
                    subtitle="A selection of my most impactful work, blending technical complexity with aesthetic precision."
                />

                <div
                    ref={elementRef}
                    className={`grid xl:grid-cols-2 gap-12 ${isVisible ? 'fade-in' : 'opacity-0'}`}
                >
                    {projects.map((project, idx) => (
                        <div
                            key={project.title}
                            className="glass-card group rounded-[2.5rem] overflow-hidden flex flex-col md:flex-row"
                        >
                            <div className={`w-full md:w-2/5 aspect-video md:aspect-auto ${project.image} relative overflow-hidden`}>
                                <div className="absolute inset-0 bg-accent/20 opacity-0 group-hover:opacity-100 transition-all duration-700 flex items-center justify-center">
                                    <span className="px-6 py-2 bg-white text-slate-900 font-black uppercase tracking-tighter rounded-full text-xs">Preview</span>
                                </div>
                            </div>

                            <div className="w-full md:w-3/5 p-10 flex flex-col justify-center">
                                <span className="text-[10px] font-black uppercase tracking-[0.2em] text-accent mb-3">{project.category}</span>
                                <h3 className="text-3xl font-black mb-4 tracking-tighter group-hover:text-accent transition-colors">{project.title}</h3>
                                <p className="text-sm text-slate-400 mb-8 font-medium leading-relaxed">
                                    {project.description}
                                </p>

                                <div className="flex flex-wrap gap-2 mb-8">
                                    {project.tags.map(tag => (
                                        <span key={tag} className="text-[10px] font-bold text-slate-500 uppercase tracking-widest">{tag}</span>
                                    ))}
                                </div>

                                <a href={project.link} className="inline-flex items-center gap-2 text-xs font-black uppercase tracking-widest group/link">
                                    Detailed Case Study
                                    <span className="transition-transform group-hover/link:translate-x-2">→</span>
                                </a>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="mt-20 text-center">
                    <p className="text-slate-500 font-bold mb-8 uppercase tracking-[0.2em] text-xs">More projects arriving soon</p>
                    <a href="https://github.com" className="btn btn-outline">
                        Browse GitHub Archive
                    </a>
                </div>
            </div>
        </section>
    );
}
