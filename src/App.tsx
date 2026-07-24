import { useEffect } from 'react';
import CustomCursor from './components/CustomCursor';
import Navbar from './components/Navbar';
import MobileDockNav from './components/MobileDockNav';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Experience from './components/Experience';
import Skills from './components/Skills';
import Education from './components/Education';
import Services from './components/Services';
import Contact from './components/Contact';
import Footer from './components/Footer';

export default function App() {
  useEffect(() => {
    const anchors = document.querySelectorAll<HTMLAnchorElement>('a[href^="#"]');

    anchors.forEach((anchor) => {
      anchor.addEventListener('click', (e) => {
        const targetId = anchor.getAttribute('href');

        if (targetId && targetId !== '#') {
          e.preventDefault();
          const targetElement = document.querySelector(targetId);

          if (targetElement) {
            const topPosition = targetElement.getBoundingClientRect().top + window.scrollY - 80;
            window.scrollTo({
              top: topPosition,
              behavior: 'smooth',
            });
          }
        }
      });
    });
  }, []);

  return (
    <div className="min-h-screen bg-[var(--bg-base)] text-[var(--text-primary)] font-sans selection:bg-[#F27D26] selection:text-[#050505] bg-grid-pattern relative">
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[9999] focus:px-6 focus:py-3 focus:bg-[#F27D26] focus:text-[#050505] focus:font-bold focus:rounded-full focus:shadow-2xl focus:outline-none focus:ring-2 focus:ring-[#FF9545]"
      >
        Skip to main content
      </a>

      {/* Global Noise Overlay & Custom Spotlight Cursor */}
      <div className="noise-bg" />
      <CustomCursor />

      {/* Navigation Headers (Desktop Header & Mobile Dock) */}
      <Navbar />
      <MobileDockNav />

      {/* Main Content Sections */}
      <main id="main" tabIndex={-1} className="relative z-10 focus:outline-none">
        <Hero />
        <About />
        <Projects />
        <Experience />
        <Skills />
        <Services />
        <Education />
        <Contact />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}
