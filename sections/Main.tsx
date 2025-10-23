'use client';
import { useEffect } from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import TextPressure from '@/components/TextPressure';

export default function Main({ onIntroDone }: { onIntroDone?: () => void }) {
  const prefersReduced = useReducedMotion();

  useEffect(() => {
    if (prefersReduced && onIntroDone) onIntroDone();
  }, [prefersReduced, onIntroDone]);

  return (
    <section
      id="main"
      className="relative flex items-center justify-center min-h-screen overflow-hidden bg-black text-white"
      style={{ padding: 0 }}
    >
      {/* Animated background (Liquid Ether) sits behind */}
      {/* <LiquidEther /> if you already imported it in layout */}

      {/* ALXC TextPressure title */}
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{
          delay: prefersReduced ? 0 : 0.4,
          duration: 1,
          ease: [0.25, 0.1, 0.25, 1],
        }}
        className="relative z-10 w-full max-w-5xl"
      >
        <TextPressure
          text="ALXC"
          fontFamily="Compressa VF"
          textColor="#FFFFFF"
          strokeColor="#5227FF"
          strokeWidth={1.5}
          width={true}
          weight={true}
          italic={true}
          alpha={false}
          flex={true}
          stroke={false}       // set true if you want colored stroke outlines
          scale={true}
          className="justify-center"
          minFontSize={64}
        />
      </motion.div>

      {/* Fade overlay (intro transition) */}
      {!prefersReduced && (
        <motion.div
          role="dialog"
          aria-label="Intro"
          initial={{ opacity: 1 }}
          animate={{ opacity: 0 }}
          transition={{ delay: 1.6, duration: 0.6, ease: 'easeInOut' }}
          onAnimationComplete={() => onIntroDone?.()}
          className="pointer-events-none fixed inset-0 z-[60] flex items-center justify-center bg-gradient-to-b from-black/60 to-transparent"
        />
      )}
    </section>
  );
}
