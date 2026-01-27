'use client';

import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import SectionHeading from './SectionHeading';

const contacts = [
    { name: 'Email', value: 'dimas@example.com', link: 'mailto:dimas@example.com' },
    { name: 'LinkedIn', value: 'Dimas Rahmanda', link: '#' },
    { name: 'Github', value: '@dimas-r', link: '#' }
];

export default function Contact() {
    const { elementRef, isVisible } = useScrollAnimation();

    return (
        <section id="contact" className="section bg-slate-900">
            <div className="container px-6">
                <SectionHeading
                    title="Start a"
                    accent="Conversation"
                    subtitle="Available for collaborations, technical consultations, or just a coffee chat."
                />

                <div
                    ref={elementRef}
                    className={`max-w-5xl mx-auto glass-card rounded-[3rem] p-12 md:p-20 relative overflow-hidden ${isVisible ? 'fade-in' : 'opacity-0'}`}
                >
                    {/* Accent decoration */}
                    <div className="absolute -top-10 -right-10 w-40 h-40 bg-accent/10 rounded-full blur-3xl"></div>

                    <div className="grid md:grid-cols-2 gap-16 relative z-10">
                        <div>
                            <h3 className="text-4xl font-black mb-6 tracking-tighter">Let's build <br /> something <span className="text-accent underline decoration-white/10">legendary</span>.</h3>
                            <p className="text-slate-400 font-medium mb-12">
                                I am currently looking for new opportunities to leverage my skills in a professional environment.
                                Whether you have a specific project in mind or just want to connect, I'd love to hear from you.
                            </p>

                            <div className="space-y-6">
                                {contacts.map(c => (
                                    <div key={c.name} className="flex flex-col">
                                        <span className="text-[10px] font-black uppercase tracking-widest text-slate-500 mb-1">{c.name}</span>
                                        <a href={c.link} className="text-xl font-bold hover:text-accent transition-colors tracking-tight">{c.value}</a>
                                    </div>
                                ))}
                            </div>
                        </div>

                        <div className="flex flex-col justify-center gap-8">
                            <div className="space-y-4">
                                <label className="text-xs font-black uppercase tracking-widest text-slate-500">Fast Connect</label>
                                <div className="flex gap-4">
                                    <a href="#" className="w-14 h-14 glass rounded-2xl flex items-center justify-center hover:bg-accent hover:text-slate-900 transition-all text-accent border border-accent/20">
                                        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" /></svg>
                                    </a>
                                    <a href="#" className="w-14 h-14 glass rounded-2xl flex items-center justify-center hover:bg-accent hover:text-slate-900 transition-all text-accent border border-accent/20">
                                        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452z" /></svg>
                                    </a>
                                </div>
                            </div>
                            <div className="p-8 border-2 border-dashed border-white/5 rounded-[2rem]">
                                <p className="text-xs font-bold text-slate-500 leading-relaxed">
                                    Based in <span className="text-slate-300">Surabaya, ID</span>. Currently pursuing a degree in
                                    Informatics. Ready to work globally.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
