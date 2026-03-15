import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'motion/react';

export default function About() {
  const containerRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start end', 'end start'],
  });

  const y1 = useTransform(scrollYProgress, [0, 1], [100, -100]);
  const y2 = useTransform(scrollYProgress, [0, 1], [-50, 50]);

  return (
    <section
      id="about"
      ref={containerRef}
      className="py-32 relative overflow-hidden bg-surface"
    >
      <div className="container mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
          {/* Left Side: Large Text */}
          <motion.div
            className="lg:col-span-7"
            style={{ y: y1 }}
          >
            <h2 className="text-4xl md:text-6xl lg:text-7xl font-display font-bold leading-tight mb-8">
              I blend <span className="text-accent italic">design</span> and{' '}
              <span className="text-stroke">engineering</span> to create
              unforgettable digital experiences.
            </h2>
            <div className="w-24 h-1 bg-accent mb-8" />
          </motion.div>

          {/* Right Side: Details */}
          <motion.div
            className="lg:col-span-5 space-y-8 text-text-muted text-lg font-light leading-relaxed"
            style={{ y: y2 }}
          >
            <p>
              With 2 years of experience in the digital landscape, I
              specialize in building high-end, interactive web applications that
              not only look stunning but perform flawlessly.
            </p>
            <p>
              My approach is rooted in a deep understanding of both aesthetics
              and architecture. I don't just write code; I craft digital
              environments that engage users and drive results.
            </p>
            <p>
              Whether it's a complex SaaS platform, a creative agency portfolio,
              or an immersive e-commerce experience, I bring a meticulous eye
              for detail and a passion for pushing the boundaries of what's
              possible on the web.
            </p>

            <div className="pt-8 border-t border-border grid grid-cols-2 gap-8">
              <div>
                <h3 className="text-4xl font-display font-bold text-text mb-2">
                  2+
                </h3>
                <p className="text-sm uppercase tracking-widest">
                  Years Experience
                </p>
              </div>
              <div>
                <h3 className="text-4xl font-display font-bold text-text mb-2">
                  4+
                </h3>
                <p className="text-sm uppercase tracking-widest">
                  Projects Delivered
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
