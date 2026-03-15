import { useRef, useState } from 'react';
import { motion } from 'motion/react';
import { ArrowUpRight, Github, Linkedin, Twitter } from 'lucide-react';

const MagneticLink = ({ children, href }: { children: React.ReactNode, href: string }) => {
  const ref = useRef<HTMLAnchorElement>(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });

  const handleMouse = (e: React.MouseEvent<HTMLAnchorElement>) => {
    if (!ref.current) return;
    const { clientX, clientY } = e;
    const { height, width, left, top } = ref.current.getBoundingClientRect();
    const middleX = clientX - (left + width / 2);
    const middleY = clientY - (top + height / 2);
    setPosition({ x: middleX * 0.3, y: middleY * 0.3 });
  };

  const reset = () => {
    setPosition({ x: 0, y: 0 });
  };

  return (
    <motion.a
      ref={ref}
      href={href}
      onMouseMove={handleMouse}
      onMouseLeave={reset}
      animate={{ x: position.x, y: position.y }}
      transition={{ type: "spring", stiffness: 150, damping: 15, mass: 0.1 }}
      className="w-12 h-12 rounded-full border border-border flex items-center justify-center hover:bg-accent hover:border-accent hover:text-bg transition-colors duration-300 relative z-10"
    >
      {children}
    </motion.a>
  );
};

export default function Footer() {
  return (
    <footer className="bg-surface py-24 relative overflow-hidden">
      <div className="container mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16 mb-24">
          {/* Brand */}
          <div className="lg:col-span-2 space-y-8">
            <h2 className="text-4xl font-display font-bold tracking-tighter">
              Premium <span className="text-accent">Portfolio</span>
            </h2>
            <p className="text-text-muted max-w-sm text-lg font-light leading-relaxed">
              Crafting digital experiences that blend design and engineering for
              forward-thinking brands.
            </p>
            <div className="flex items-center gap-6">
              <MagneticLink href="#">
                <Twitter className="w-5 h-5" />
              </MagneticLink>
              <MagneticLink href="https://www.linkedin.com/in/atharv-shelke">
                <Linkedin className="w-5 h-5" />
              </MagneticLink>
              <MagneticLink href="https://github.com/AtharvShelke">
                <Github className="w-5 h-5" />
              </MagneticLink>
            </div>
          </div>

          {/* Links */}
          <div className="space-y-8">
            <h3 className="text-sm uppercase tracking-widest text-text-muted font-bold">
              Navigation
            </h3>
            <ul className="space-y-4">
              <li>
                <a
                  href="#about"
                  className="text-lg font-medium hover:text-accent transition-colors flex items-center gap-2 group w-fit"
                >
                  About <ArrowUpRight className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity" />
                </a>
              </li>
              <li>
                <a
                  href="#work"
                  className="text-lg font-medium hover:text-accent transition-colors flex items-center gap-2 group w-fit"
                >
                  Work <ArrowUpRight className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity" />
                </a>
              </li>
              <li>
                <a
                  href="#services"
                  className="text-lg font-medium hover:text-accent transition-colors flex items-center gap-2 group w-fit"
                >
                  Services <ArrowUpRight className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity" />
                </a>
              </li>
              <li>
                <a
                  href="#contact"
                  className="text-lg font-medium hover:text-accent transition-colors flex items-center gap-2 group w-fit"
                >
                  Contact <ArrowUpRight className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity" />
                </a>
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div className="space-y-8">
            <h3 className="text-sm uppercase tracking-widest text-text-muted font-bold">
              Legal
            </h3>
            <ul className="space-y-4">
              <li>
                <a
                  href="#"
                  className="text-lg font-medium hover:text-accent transition-colors w-fit block"
                >
                  Privacy Policy
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-lg font-medium hover:text-accent transition-colors w-fit block"
                >
                  Terms of Service
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-12 border-t border-border flex flex-col md:flex-row items-center justify-between gap-6">
          <p className="text-text-muted text-sm font-light">
            &copy; {new Date().getFullYear()} Premium Portfolio. All rights
            reserved.
          </p>
          <motion.p 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-text-muted text-sm font-light flex items-center gap-2"
          >
            Designed & Built with 
            <motion.span 
              whileInView={{ scale: [1, 1.3, 1] }} 
              transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }} 
              className="text-accent inline-block"
            >
              ♥
            </motion.span>
          </motion.p>
        </div>
      </div>
    </footer>
  );
}
