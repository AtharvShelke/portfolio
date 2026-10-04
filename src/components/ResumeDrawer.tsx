import { useEffect, useRef } from 'react';
import { createPortal } from 'react-dom';
import { motion, AnimatePresence } from 'motion/react';
import { Download, X, FileText, ExternalLink } from 'lucide-react';

interface ResumeDrawerProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function ResumeDrawer({ isOpen, onClose }: ResumeDrawerProps) {
  const drawerRef = useRef<HTMLDivElement>(null);
  const lastActiveElementRef = useRef<HTMLElement | null>(null);

  // Body Scroll Lock & Scrollbar Width Compensation
  useEffect(() => {
    if (isOpen) {
      lastActiveElementRef.current = document.activeElement as HTMLElement;
      const scrollbarWidth = window.innerWidth - document.documentElement.clientWidth;
      document.body.style.overflow = 'hidden';
      if (scrollbarWidth > 0) {
        document.body.style.paddingRight = `${scrollbarWidth}px`;
      }
    } else {
      document.body.style.overflow = '';
      document.body.style.paddingRight = '';
    }

    return () => {
      document.body.style.overflow = '';
      document.body.style.paddingRight = '';
    };
  }, [isOpen]);

  // Focus Trap & Escape Dismissal
  useEffect(() => {
    if (isOpen) {
      setTimeout(() => {
        const firstFocusable = drawerRef.current?.querySelector<HTMLElement>(
          'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
        );
        firstFocusable?.focus();
      }, 50);

      const handleKeyDown = (e: KeyboardEvent) => {
        if (e.key === 'Escape') {
          onClose();
          return;
        }

        if (e.key === 'Tab' && drawerRef.current) {
          const focusables = drawerRef.current.querySelectorAll<HTMLElement>(
            'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
          );
          if (focusables.length === 0) return;

          const first = focusables[0];
          const last = focusables[focusables.length - 1];

          if (e.shiftKey) {
            if (document.activeElement === first) {
              e.preventDefault();
              last.focus();
            }
          } else {
            if (document.activeElement === last) {
              e.preventDefault();
              first.focus();
            }
          }
        }
      };

      window.addEventListener('keydown', handleKeyDown);
      return () => {
        window.removeEventListener('keydown', handleKeyDown);
        lastActiveElementRef.current?.focus();
      };
    }
  }, [isOpen, onClose]);

  return createPortal(
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            key="drawer-backdrop"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-[120] bg-bg/80 backdrop-blur-md"
            onClick={onClose}
          />

          {/* Slide-In Drawer Panel */}
          <motion.div
            key="drawer-panel"
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            transition={{ type: 'spring', damping: 25, stiffness: 220 }}
            className="fixed top-0 right-0 bottom-0 z-[130] w-full max-w-3xl bg-surface border-l border-border shadow-2xl flex flex-col pointer-events-auto"
          >
            {/* Header */}
            <div className="p-4 sm:p-6 border-b border-border flex items-center justify-between gap-4 bg-surface/90 backdrop-blur-md">
              <div className="flex items-center gap-3">
                <div className="p-2 rounded-xl bg-accent/10 border border-accent/30 text-accent">
                  <FileText className="w-5 h-5" />
                </div>
                <div>
                  <h3 id="resume-drawer-title" className="text-lg sm:text-xl font-display font-bold text-text">
                    Curriculum Vitae Preview
                  </h3>
                  <p className="text-xs text-text-muted font-mono">Atharv_Shelke_CV.pdf</p>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <a
                  href="/Atharv_Shelke_CV.pdf"
                  download="Atharv_Shelke_CV.pdf"
                  className="px-4 py-2 text-xs font-medium rounded-full bg-accent text-bg hover:bg-accent-hover transition-colors flex items-center gap-2 shadow-md shadow-accent/20"
                >
                  <Download className="w-3.5 h-3.5" />
                  <span className="hidden sm:inline">Download PDF</span>
                </a>

                <button
                  onClick={onClose}
                  aria-label="Close resume preview"
                  className="p-2 rounded-full border border-border text-text-muted hover:text-text hover:border-accent transition-colors"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>
            </div>

            {/* Body PDF Viewer */}
            <div
              ref={drawerRef}
              role="dialog"
              aria-modal="true"
              aria-labelledby="resume-drawer-title"
              className="flex-1 p-4 sm:p-6 bg-bg flex flex-col focus:outline-none"
            >
              <div className="w-full h-full rounded-2xl border border-border/60 overflow-hidden bg-[#121215] relative flex flex-col">
                <iframe
                  src="/Atharv_Shelke_CV.pdf#toolbar=0"
                  title="Atharv Shelke Curriculum Vitae"
                  className="w-full h-full border-0"
                />

                {/* Fallback for browsers with restricted iframe PDF rendering */}
                <div className="p-4 bg-surface/80 border-t border-border/40 text-center text-xs text-text-muted flex items-center justify-between gap-4">
                  <span>Having trouble viewing the PDF in browser?</span>
                  <a
                    href="/Atharv_Shelke_CV.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-accent hover:underline flex items-center gap-1 font-mono"
                  >
                    Open direct PDF ↗
                  </a>
                </div>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>,
    document.body
  );
}
