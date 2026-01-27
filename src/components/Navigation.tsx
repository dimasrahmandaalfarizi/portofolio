'use client';

import { useState, useEffect } from 'react';

const navItems = [
    { name: 'Home', href: '#' },
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Contact', href: '#contact' },
];

export default function Navigation() {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };

        window.addEventListener('scroll', handleScroll, { passive: true });
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <nav
            className={`fixed top-0 left-0 right-0 z-[100] transition-all duration-500 ${isScrolled
                    ? 'py-4 glass border-b border-white/5 shadow-2xl backdrop-blur-md'
                    : 'bg-transparent py-8'
                }`}
        >
            <div className="container mx-auto px-6">
                <div className="flex items-center justify-between">
                    {/* Logo */}
                    <a href="#" className="group flex items-center gap-2">
                        <div className="w-10 h-10 bg-accent rounded-xl flex items-center justify-center font-black text-xl text-slate-900 transition-transform group-hover:rotate-12">
                            D
                        </div>
                        <span className="text-2xl font-black tracking-tighter text-white uppercase">
                            Dimas<span className="text-accent">.</span>
                        </span>
                    </a>

                    {/* Desktop Navigation */}
                    <div className="hidden md:flex items-center gap-10">
                        {navItems.map((item) => (
                            <a
                                key={item.name}
                                href={item.href}
                                className="relative text-sm font-bold tracking-wide text-slate-300 hover:text-white uppercase transition-colors group"
                            >
                                {item.name}
                                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-accent transition-all duration-300 group-hover:w-full"></span>
                            </a>
                        ))}
                        <a href="#contact" className="ml-4 px-6 py-2.5 bg-accent/10 border border-accent/20 text-accent rounded-full text-xs font-black uppercase tracking-widest hover:bg-accent hover:text-slate-900 transition-all">
                            Hire Me
                        </a>
                    </div>

                    {/* Mobile Menu Button */}
                    <button
                        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                        className="md:hidden text-white w-10 h-10 flex items-center justify-center glass rounded-lg"
                        aria-label="Toggle menu"
                    >
                        <div className="w-6 h-5 relative flex flex-col justify-between items-center transition-all">
                            <span className={`w-full h-0.5 bg-white rounded-full transition-all ${isMobileMenuOpen ? 'rotate-45 translate-y-[9px]' : ''}`}></span>
                            <span className={`w-full h-0.5 bg-white rounded-full transition-all ${isMobileMenuOpen ? 'opacity-0' : ''}`}></span>
                            <span className={`w-full h-0.5 bg-white rounded-full transition-all ${isMobileMenuOpen ? '-rotate-45 -translate-y-[9px]' : ''}`}></span>
                        </div>
                    </button>
                </div>

                {/* Mobile Menu Overlay */}
                <div className={`fixed inset-0 top-[72px] bg-slate-950/95 backdrop-blur-xl z-[90] md:hidden transition-all duration-500 ease-in-out ${isMobileMenuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
                    }`}>
                    <div className="flex flex-col items-center justify-center h-full gap-8 px-6 pb-20">
                        {navItems.map((item, index) => (
                            <a
                                key={item.name}
                                href={item.href}
                                className={`text-4xl font-black text-white hover:text-accent transition-all duration-300 ${isMobileMenuOpen ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}
                                style={{ transitionDelay: `${index * 100}ms` }}
                                onClick={() => setIsMobileMenuOpen(false)}
                            >
                                {item.name}
                            </a>
                        ))}
                    </div>
                </div>
            </div>
        </nav>
    );
}
