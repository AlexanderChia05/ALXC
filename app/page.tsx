'use client';
import { useEffect, useMemo, useRef, useState } from 'react';
import Main from '@/sections/Main';
import Showcase from '@/sections/Showcase';
import About from '@/sections/About';
import { useActiveSection } from '@/lib/useActiveSection';
import { Nav } from '@/components/Nav';
import { DotNav } from '@/components/DotNav';
import { motion } from 'framer-motion';

export default function Page() {
  const ids = useMemo(() => ['main', 'showcase', 'about'], []);
  const active = useActiveSection(ids);

  const [introDone, setIntroDone] = useState(false);
  const [snapOn, setSnapOn] = useState(false);
  const scrollerRef = useRef<HTMLDivElement | null>(null);

  // After intro, enable snap on first user scroll/touch
  useEffect(() => {
    if (!introDone || !scrollerRef.current) return;
    const el = scrollerRef.current;
    const enable = () => setSnapOn(true);
    el.addEventListener('wheel', enable, { once: true, passive: true });
    el.addEventListener('touchstart', enable, { once: true, passive: true });
    return () => {
      el.removeEventListener('wheel', enable);
      el.removeEventListener('touchstart', enable);
    };
  }, [introDone]);

  return (
    <div ref={scrollerRef} className={`scroller ${snapOn ? 'snap' : 'no-snap'}`}>
      {/* Nav ease-in after intro */}
      <motion.div
        initial={{ opacity: 0, y: -8 }}
        animate={{ opacity: introDone ? 1 : 0, y: introDone ? 0 : -8 }}
        transition={{ duration: 0.4, ease: 'easeIn' }}
      >
        <Nav active={active} />
      </motion.div>

      {/* Dot nav ease-in after intro */}
      <motion.div
        initial={{ opacity: 0, x: -8 }}
        animate={{ opacity: introDone ? 1 : 0, x: introDone ? 0 : -8 }}
        transition={{ duration: 0.4, ease: 'easeIn', delay: 0.05 }}
      >
        <DotNav active={active} />
      </motion.div>

      <Main onIntroDone={() => setIntroDone(true)} />
      <Showcase />
      <About />
    </div>
  );
}
