'use client';

import { useScrollAnimation } from '@/hooks/useScrollAnimation';

export default function Hero() {
    const { elementRef, isVisible } = useScrollAnimation();

    return (
        <section
            ref={elementRef}
            className="min-h-screen flex items-center justify-center relative pt-20 overflow-hidden"
        >
            {/* Visual background elements */}
            <div className="absolute top-1/4 -left-20 w-[500px] h-[500px] bg-accent/20 rounded-full blur-[120px] pointer-events-none opacity-40"></div>
            <div className="absolute bottom-1/4 -right-20 w-[400px] h-[400px] bg-blue-600/10 rounded-full blur-[100px] pointer-events-none opacity-30"></div>

            {/* Decorative grid pattern */}
            <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 pointer-events-none mix-blend-overlay"></div>

            <div className="container relative z-10 px-6">
                <div className={`flex flex-col items-center text-center ${isVisible ? 'fade-in' : 'opacity-0'}`}>
                    {/* Badge */}
                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass border border-white/10 mb-8 animate-[glowPulse_4s_infinite]">
                        <span className="w-2 h-2 bg-accent rounded-full animate-pulse"></span>
                        <span className="text-xs font-black uppercase tracking-[0.2em] text-accent">Available for Projects</span>
                    </div>

                    {/* Greeting */}
                    <h2 className="text-xl md:text-2xl font-medium text-slate-400 mb-6 tracking-tight">
                        Hi! I am <span className="text-white font-bold">Dimas Rahmanda Alfarizi</span>
                    </h2>

                    {/* Main Title */}
                    <h1 className="leading-[1.1] mb-8 max-w-4xl mx-auto">
                        Crafting <span className="text-accent underline decoration-white/10 decoration-8 underline-offset-8">Digital</span> Excellence
                        through Code.
                    </h1>

                    {/* Subtitle */}
                    <p className="text-lg md:text-xl text-slate-400 max-w-2xl mx-auto mb-12 leading-relaxed font-medium">
                        Next-gen Web Developer & Informatics student at <span className="text-white font-semibold">UPNVJATIM</span>.
                        Blending aesthetic design with cutting-edge engineering.
                    </p>

                    {/* CTA Buttons */}
                    <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
                        <a href="#projects" className="btn btn-primary group">
                            <span>View Projects</span>
                            <svg className="w-5 h-5 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                            </svg>
                        </a>
                        <a href="#about" className="text-sm font-black uppercase tracking-widest text-slate-300 hover:text-white transition-all flex items-center gap-3 group">
                            <span className="w-10 h-0.5 bg-slate-700 transition-all group-hover:w-16 group-hover:bg-accent"></span>
                            Explore My Journey
                        </a>
                    </div>
                </div>
            </div>

            {/* Scroll indicator refined */}
            <div className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-4 opacity-40">
                <span className="text-[10px] font-black uppercase tracking-[0.3em] rotate-180 [writing-mode:vertical-lr]">Scroll</span>
                <div className="w-px h-12 bg-gradient-to-b from-accent to-transparent"></div>
            </div>
        </section>
    );
}
