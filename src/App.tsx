import { useEffect } from 'react';
import CustomCursor from './components/CustomCursor';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
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
      <div className="noise-bg" />
      <CustomCursor />
      
      <main>
        <Hero />
        <About />
        <Projects />
        <Skills />
        <Education />
        <Services />
        <Contact />
      </main>

      <Footer />
    </div>
  );
}
