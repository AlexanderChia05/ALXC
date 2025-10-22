'use client';
import { motion, useReducedMotion } from "framer-motion";
import { ExternalLink, Github } from "lucide-react";
import type { Project } from "@/lib/projects";

export function ProjectCard({ p, index }: { p: Project; index: number }) {
  const prefersReduced = useReducedMotion();
  return (
    <motion.article
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.4 }}
      transition={{ duration: 0.45, delay: index * 0.06 }}
      className="rounded-2xl border border-edge/30 bg-black/30 p-5 backdrop-blur relative overflow-hidden group"
      style={{ transformStyle: "preserve-3d" }}
    >
      {!prefersReduced && (
        <div className="pointer-events-none absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity"
             style={{ background: "radial-gradient(600px circle at var(--mx,50%) var(--my,50%), rgba(255,255,255,0.08), transparent 40%)" }}/>
      )}
      <header className="mb-2">
        <h3 className="text-lg font-semibold">{p.title}</h3>
        <p className="text-sm text-muted">{p.description}</p>
      </header>
      <div className="flex flex-wrap gap-2 my-3">
        {p.tech.map((t) => (
          <span key={t} className="text-xs text-muted border border-edge/30 rounded px-2 py-0.5">{t}</span>
        ))}
      </div>
      <div className="mt-4 flex gap-3">
        <a className="inline-flex items-center gap-1 text-sm underline underline-offset-4 hover:no-underline"
           href={p.githubUrl} target="_blank" rel="noopener noreferrer" aria-label={`View ${p.title} on GitHub`}>
          <Github className="h-4 w-4" /> GitHub
        </a>
        {p.liveUrl && (
          <a className="inline-flex items-center gap-1 text-sm underline underline-offset-4 hover:no-underline"
             href={p.liveUrl} target="_blank" rel="noopener noreferrer">
            <ExternalLink className="h-4 w-4" /> Live Demo
          </a>
        )}
      </div>
      <script dangerouslySetInnerHTML={{__html:`
        (function(card){
          card.addEventListener('pointermove', e=>{
            card.style.setProperty('--mx', e.offsetX+'px');
            card.style.setProperty('--my', e.offsetY+'px');
          }, {passive:true});
        })(document.currentScript.parentElement);
      `}}/>
    </motion.article>
  );
}
