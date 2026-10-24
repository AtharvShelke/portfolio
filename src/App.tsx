import { useState } from 'react';
import CustomCursor from './components/CustomCursor';
import SmoothScroll from './components/SmoothScroll';
import ScrollProgress from './components/ScrollProgress';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import ExecutiveClarityBrief from './components/ExecutiveClarityBrief';
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
import BrochureDrawer from './components/BrochureDrawer';

export default function App() {
  const [isResumeOpen, setIsResumeOpen] = useState(false);
  const [isBrochureOpen, setIsBrochureOpen] = useState(false);

  return (
    <div className="min-h-screen bg-bg text-text font-sans selection:bg-accent selection:text-bg relative">
      <SmoothScroll />
      <ScrollProgress />
      <div className="noise-bg" />
      <CustomCursor />
      <Navbar
        onOpenResume={() => setIsResumeOpen(true)}
        onOpenBrochure={() => setIsBrochureOpen(true)}
      />

      <main>
        <Hero onOpenBrochure={() => setIsBrochureOpen(true)} />
        <ExecutiveClarityBrief onOpenBrochure={() => setIsBrochureOpen(true)} />
        <MetricsBar />
        <Solutions onOpenBrochure={() => setIsBrochureOpen(true)} />
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

      {/* Official AI Solutions Executive Brochure & Capabilities Deck */}
      <BrochureDrawer
        isOpen={isBrochureOpen}
        onClose={() => setIsBrochureOpen(false)}
      />
    </div>
  );
}
