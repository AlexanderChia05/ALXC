'use client';

import Link from 'next/link';
import { motion, useScroll, useTransform } from 'framer-motion';

const links = [
  { href: '#main', label: 'Main' },
  { href: '#showcase', label: 'Showcase' },
  { href: '#about', label: 'About' },
];

export default function Nav() {
  const { scrollYProgress } = useScroll();
  const bgOpacity = useTransform(scrollYProgress, [0, 0.15], [0.6, 0.9]);
  const height = useTransform(scrollYProgress, [0, 0.15], [56, 48]);

  return (
    <motion.header
      initial={{ opacity: 0, y: -6 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.45, ease: 'easeOut' }}
      className="fixed inset-x-0 top-0 z-50"
    >
      <motion.nav
        style={{ height }}
        className="
          mx-auto max-w-7xl px-4 sm:px-6 lg:px-8
          flex items-center justify-between
          backdrop-blur-xl border border-white/10 rounded-2xl
          mt-3 bg-white/0
        "
      >
        <motion.div
          style={{ opacity: bgOpacity }}
          className="pointer-events-none absolute inset-0 rounded-2xl"
        >
          <div
            className="absolute inset-0 rounded-2xl"
            style={{
              background:
                'linear-gradient(180deg, rgba(255,255,255,0.18) 0%, rgba(255,255,255,0.08) 40%, rgba(255,255,255,0.00) 100%)',
            }}
          />
        </motion.div>

        <div className="relative z-10 flex items-center gap-2">
          <Link href="/" className="text-white font-semibold tracking-wide text-[15px]">
            ALXC
          </Link>
        </div>

        <div className="relative z-10 hidden md:flex items-center gap-6">
          {links.map(l => (
            <NavLink key={l.href} href={l.href}>{l.label}</NavLink>
          ))}
        </div>

        <div className="relative z-10 w-10" />
      </motion.nav>
    </motion.header>
  );
}

function NavLink({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <Link
      href={href}
      className="
        group relative text-[13.5px] text-gray-200 hover:text-white transition
        focus:outline-none focus-visible:ring-2 focus-visible:ring-white/30 rounded
      "
    >
      {children}
      <span
        aria-hidden
        className="
          absolute -bottom-1 left-1/2 h-[2px] w-0 -translate-x-1/2
          bg-white/80 rounded-full transition-all duration-300 group-hover:w-6
        "
      />
    </Link>
  );
}
