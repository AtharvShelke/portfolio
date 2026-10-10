import { useState } from 'react';
import CustomCursor from './components/CustomCursor';
import SmoothScroll from './components/SmoothScroll';
import ScrollProgress from './components/ScrollProgress';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import MetricsBar from './components/MetricsBar';
import Solutions from './components/Solutions';
import Projects from './components/Projects';
import Framework from './components/Framework';
import Experience from './components/Experience';
import ScopeEstimator from './components/ScopeEstimator';
import About from './components/About';
import Skills from './components/Skills';
import Contact from './components/Contact';
import Footer from './components/Footer';
import ResumeDrawer from './components/ResumeDrawer';

export default function App() {
  const [isResumeOpen, setIsResumeOpen] = useState(false);

  return (
    <div className="min-h-screen bg-bg text-text font-sans selection:bg-accent selection:text-bg relative">
      <SmoothScroll />
      <ScrollProgress />
      <div className="noise-bg" />
      <CustomCursor />
      <Navbar onOpenResume={() => setIsResumeOpen(true)} />

      <main>
        <Hero />
        <MetricsBar />
        <Solutions />
        <Projects />
        <Framework />
        <ScopeEstimator />
        <About onOpenResume={() => setIsResumeOpen(true)} />
        <Experience />
        <Skills />
        <Contact />
      </main>

      <Footer />

      {/* Curriculum Vitae Preview Drawer */}
      <ResumeDrawer
        isOpen={isResumeOpen}
        onClose={() => setIsResumeOpen(false)}
      />
    </div>
  );
}
