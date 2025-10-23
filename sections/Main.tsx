'use client';
import { useEffect } from 'react';
import { motion, useReducedMotion } from 'framer-motion';

export default function Main({ onIntroDone }: { onIntroDone?: () => void }) {
  const prefersReduced = useReducedMotion();

  useEffect(() => {
    if (prefersReduced && onIntroDone) onIntroDone();
  }, [prefersReduced, onIntroDone]);

  return (
    <section id="main" className="relative flex items-center justify-center min-h-screen overflow-hidden" style={{ padding: 0 }}>
      {/* Hero title (reveals after overlay) */}
      <motion.h1
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: prefersReduced ? 0 : 2.1, duration: 1.2, ease: [0.25, 0.1, 0.25, 1] }}
        className="text-6xl md:text-8xl font-semibold tracking-tight text-center"
      >
        ALXC
      </motion.h1>

      {/* Cinematic overlay merged into Main */}
      {!prefersReduced && (
        <motion.div
          role="dialog"
          aria-label="Intro"
          initial={{ opacity: 1 }}
          animate={{ opacity: 0 }}
          transition={{ delay: 2.1, duration: 0.6, ease: 'easeInOut' }}
          onAnimationComplete={() => onIntroDone?.()}
          className="pointer-events-none fixed inset-0 z-[60] flex items-center justify-center"
        >
          <motion.h1
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.4, ease: [0.25, 0.1, 0.25, 1] }}
            className="text-6xl md:text-8xl font-semibold tracking-tight text-center"
          >
            
          </motion.h1>
        </motion.div>
      )}
    </section>
  );
}
