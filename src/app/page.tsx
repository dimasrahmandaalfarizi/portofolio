import Navigation from '@/components/Navigation';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Skills from '@/components/Skills';
import Projects from '@/components/Projects';
import Contact from '@/components/Contact';

export default function Home() {
  return (
    <>
      <Navigation />
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Contact />
      </main>

      {/* Footer */}
      <footer className="bg-slate-900/50 border-t border-slate-800 py-8">
        <div className="container">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-slate-400 text-center md:text-left">
              © 2026 Dimas Rahmanda Alfarizi. Built with Next.js & Tailwind CSS
            </p>
            <div className="flex items-center gap-4">
              <a
                href="#"
                className="text-slate-400 hover:text-cyan-400 transition-colors"
              >
                Back to Top ↑
              </a>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
