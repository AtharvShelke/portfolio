import CustomCursor from './components/CustomCursor';
import SmoothScroll from './components/SmoothScroll';
import ScrollProgress from './components/ScrollProgress';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import MetricsBar from './components/MetricsBar';
import Solutions from './components/Solutions';
import Projects from './components/Projects';
import Framework from './components/Framework';
import ScopeEstimator from './components/ScopeEstimator';
import About from './components/About';
import Skills from './components/Skills';
import Contact from './components/Contact';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen bg-bg text-text font-sans selection:bg-accent selection:text-bg relative">
      <SmoothScroll />
      <ScrollProgress />
      <div className="noise-bg" />
      <CustomCursor />
      <Navbar />

      <main>
        <Hero />
        <MetricsBar />
        <Solutions />
        <Projects />
        <Framework />
        <ScopeEstimator />
        <About />
        <Skills />
        <Contact />
      </main>

      <Footer />
    </div>
  );
}
