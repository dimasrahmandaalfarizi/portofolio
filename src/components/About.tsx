'use client';

import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import SectionHeading from './SectionHeading';

export default function About() {
    const { elementRef, isVisible } = useScrollAnimation();

    return (
        <section id="about" className="section relative">
            <div className="container px-6">
                <SectionHeading
                    title="About"
                    accent="Me"
                    subtitle="A deeper look into who I am and what drives my passion for technology."
                />

                <div
                    ref={elementRef}
                    className={`grid md:grid-cols-2 gap-16 items-center ${isVisible ? 'fade-in' : 'opacity-0'}`}
                >
                    {/* Visual Element / Placeholder for Photo */}
                    <div className="relative group">
                        <div className="absolute -inset-4 bg-accent/20 rounded-[2rem] blur-2xl transition-all group-hover:bg-accent/30 pointer-events-none"></div>
                        <div className="aspect-[4/5] bg-slate-800 rounded-[2rem] border border-white/10 overflow-hidden relative glass">
                            <div className="absolute inset-0 flex flex-col items-center justify-center text-center p-8">
                                <div className="w-24 h-24 bg-accent/10 rounded-full flex items-center justify-center mb-6">
                                    <svg className="w-12 h-12 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                                    </svg>
                                </div>
                                <h3 className="text-xl font-bold mb-2">Dimas Rahmanda A.</h3>
                                <p className="text-sm text-slate-400">Web Developer & Student</p>
                            </div>
                        </div>
                    </div>

                    <div className="space-y-8">
                        <div className="space-y-4">
                            <h3 className="text-3xl font-bold tracking-tight">
                                Innovative Developer Based in <span className="text-accent">Surabaya</span>.
                            </h3>
                            <p className="text-lg text-slate-300">
                                Currently pursuing my degree in <strong className="text-white">Informatics at UPNVJATIM</strong>,
                                where I solve complex digital problems through elegant code and modern frameworks.
                            </p>
                        </div>

                        <div className="grid grid-cols-2 gap-6 pb-4">
                            <div className="p-6 glass-card rounded-2xl">
                                <h4 className="text-3xl font-black text-accent mb-1">2+</h4>
                                <p className="text-xs font-bold uppercase tracking-widest text-slate-400">Years Experience</p>
                            </div>
                            <div className="p-6 glass-card rounded-2xl">
                                <h4 className="text-3xl font-black text-accent mb-1">10+</h4>
                                <p className="text-xs font-bold uppercase tracking-widest text-slate-400">Projects Built</p>
                            </div>
                        </div>

                        <p className="text-slate-400 leading-loose">
                            My journey is fueled by a relentless curiosity for how things work. I believe that every digital product
                            should be an experience—intuitive, fast, and visually striking. I don't just write code; I build
                            solutions that bridge the gap between human needs and digital possibilities.
                        </p>

                        <a href="#contact" className="text-accent font-bold flex items-center gap-2 group hover:gap-4 transition-all">
                            Want to collaborate? Let's talk <span className="text-xl">→</span>
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
}
