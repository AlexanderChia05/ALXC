'use client';

import { useEffect, useMemo, useRef } from 'react';
import { useReducedMotion } from 'framer-motion';

type Props = {
  colors?: string[];
  intensity?: number; // 0..1
  className?: string;
};

type Blob = {
  radius: number;
  color: string;
  follow: number;   // 0..1
  idleAmp: number;  // px
  idleSpeed: number;// rad/s
  phase: number;
  x: number; y: number; vx: number; vy: number;
};

export default function LiquidEther({
  colors = ['#5227FF', '#FF9FFC', '#B19EEF'],
  intensity = 0.65,
  className = '',
}: Props) {
  const prefersReduced = useReducedMotion();

  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const timeRef   = useRef(0);
  const mouseRef  = useRef<{ x: number; y: number } | null>(null);
  const blobsRef  = useRef<Blob[]>([]);
  const rafRef    = useRef<number>(0);

  const palette = useMemo(() => colors.slice(0, 3), [colors]);

  useEffect(() => {
    const canvas = canvasRef.current!;
    const ctx = canvas.getContext('2d', { alpha: true })!;
    const dpr = Math.max(1, Math.min(2, window.devicePixelRatio || 1));

    const resize = () => {
      const w = window.innerWidth, h = window.innerHeight;
      canvas.width = Math.floor(w * dpr);
      canvas.height = Math.floor(h * dpr);
      canvas.style.width = `${w}px`;
      canvas.style.height = `${h}px`;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);

      // (Re)seed blobs to center when resizing
      const base = Math.max(460, Math.min(760, Math.floor(Math.min(w, h) * 0.58)));
      blobsRef.current = [
        makeBlob(palette[0]!, base * 0.85, 0.75, 22, 0.22, 0),
        makeBlob(palette[1]!, base * 0.65, 0.55, 28, 0.16, 1.1),
        makeBlob(palette[2]!, base * 0.95, 0.40, 34, 0.12, 2.1),
      ].map(b => ({ ...b, x: w * 0.5, y: h * 0.5 }));
    };

    resize();
    window.addEventListener('resize', resize);

    const onMove = (e: MouseEvent) => (mouseRef.current = { x: e.clientX, y: e.clientY });
    if (!prefersReduced) window.addEventListener('mousemove', onMove, { passive: true });

    let last = performance.now();
    const tick = (now: number) => {
      const dt = Math.min(0.033, (now - last) / 1000);
      last = now;
      timeRef.current = now / 1000;
      renderFrame(ctx, dt, prefersReduced ?? false, intensity, blobsRef, timeRef, mouseRef);
      rafRef.current = requestAnimationFrame(tick);
    };
    rafRef.current = requestAnimationFrame(tick);

    return () => {
      cancelAnimationFrame(rafRef.current);
      window.removeEventListener('resize', resize);
      window.removeEventListener('mousemove', onMove);
    };
  }, [palette, intensity, prefersReduced]);

  return (
    <div className={`pointer-events-none fixed inset-0 -z-10 ${className}`}>
      {/* Base you like */}
      <div className="absolute inset-0 bg-black" />
      <canvas ref={canvasRef} className="absolute inset-0" />
      {/* Subtle vignette */}
      <div
        className="absolute inset-0"
        style={{
          background:
            'radial-gradient(1200px 800px at 50% 50%, transparent 0%, transparent 45%, rgba(0,0,0,0.35) 80%)',
        }}
      />
    </div>
  );
}

function makeBlob(
  color: string, radius: number, follow: number, idleAmp: number, idleSpeed: number, phase: number
): Blob {
  return { color, radius, follow, idleAmp, idleSpeed, phase, x: 0, y: 0, vx: 0, vy: 0 };
}

function renderFrame(
  ctx: CanvasRenderingContext2D,
  dt: number,
  reduced: boolean,
  intensity: number,
  blobsRef: React.MutableRefObject<Blob[]>,
  timeRef: React.MutableRefObject<number>,
  mouseRef: React.MutableRefObject<{ x: number; y: number } | null>
) {
  const w = ctx.canvas.clientWidth;
  const h = ctx.canvas.clientHeight;
  const blobs = blobsRef.current;
  const t = timeRef.current;
  const cursor = mouseRef.current;

  ctx.clearRect(0, 0, w, h);
  ctx.globalCompositeOperation = 'lighter';

  for (const b of blobs) {
    const idleX = Math.sin((t + b.phase) * b.idleSpeed * 2 * Math.PI) * b.idleAmp;
    const idleY = Math.cos((t + b.phase * 1.2) * b.idleSpeed * 2 * Math.PI) * b.idleAmp;

    const tx = (!reduced && cursor) ? cursor.x : w * 0.5;
    const ty = (!reduced && cursor) ? cursor.y : h * 0.5;

    // spring
    const k = b.follow * intensity;
    const damping = 8;
    const ax = (tx + idleX - b.x) * k - b.vx * damping * dt;
    const ay = (ty + idleY - b.y) * k - b.vy * damping * dt;
    b.vx += ax * dt;
    b.vy += ay * dt;
    b.x += b.vx * dt * 60;
    b.y += b.vy * dt * 60;

    const grad = ctx.createRadialGradient(b.x, b.y, 0, b.x, b.y, b.radius);
    grad.addColorStop(0.0, rgba(b.color, 0.30)); // slightly stronger alpha
    grad.addColorStop(0.55, rgba(b.color, 0.16));
    grad.addColorStop(1.0, rgba(b.color, 0.00));

    ctx.fillStyle = grad;
    ctx.beginPath();
    ctx.arc(b.x, b.y, b.radius, 0, Math.PI * 2);
    ctx.fill();
  }

  ctx.globalCompositeOperation = 'source-over';
}

function rgba(hex: string, a: number) {
  const c = hex.replace('#', '');
  const n = c.length === 3 ? parseInt(c.split('').map(h => h + h).join(''), 16) : parseInt(c, 16);
  const r = (n >> 16) & 255, g = (n >> 8) & 255, b = n & 255;
  return `rgba(${r}, ${g}, ${b}, ${a})`;
}
