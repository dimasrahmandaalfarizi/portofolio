'use client';

import { useScrollAnimation } from '@/hooks/useScrollAnimation';

interface SectionHeadingProps {
    title: string;
    subtitle?: string;
    accent?: string;
    center?: boolean;
}

export default function SectionHeading({ title, subtitle, accent, center = true }: SectionHeadingProps) {
    const { elementRef, isVisible } = useScrollAnimation();

    return (
        <div
            ref={elementRef}
            className={`mb-16 ${center ? 'text-center' : 'text-left'} ${isVisible ? 'fade-in' : 'opacity-0'}`}
        >
            <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight mb-4">
                {title} <span className="text-accent">{accent}</span>
            </h2>
            <div className={`h-1.5 w-24 bg-accent rounded-full mb-6 ${center ? 'mx-auto' : ''}`}></div>
            {subtitle && (
                <p className="text-lg text-slate-400 max-w-2xl mx-auto leading-relaxed">
                    {subtitle}
                </p>
            )}
        </div>
    );
}
