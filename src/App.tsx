import { useEffect } from 'react';
import CustomCursor from './components/CustomCursor';
import Navbar from './components/Navbar';
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
        e.preventDefault();

        const targetId = anchor.getAttribute('href');

        if (targetId) {
          const targetElement = document.querySelector(targetId);

          if (targetElement) {
            targetElement.scrollIntoView({
              behavior: 'smooth',
            });
          }
        }
      });
    });
  }, []);


  return (
    <div className="min-h-screen bg-bg text-text font-sans selection:bg-accent selection:text-bg">
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[9999] focus:px-6 focus:py-3 focus:bg-accent focus:text-bg focus:font-semibold focus:rounded-full focus:shadow-2xl focus:outline-none focus:ring-2 focus:ring-accent"
      >
        Skip to main content
      </a>
      <div className="noise-bg" />
      <CustomCursor />
      <header className="relative z-[100]">
        <Navbar />
      </header>

      <main id="main" tabIndex={-1}>
        <Hero />
        <About />
        <Projects />
        <Experience />
        <Skills />
        <Services />
        <Education />

        <Contact />
      </main>

      <Footer />
    </div>
  );
}
