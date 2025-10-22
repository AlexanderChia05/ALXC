'use client';
import { PROJECTS } from "@/lib/projects";
import { ProjectCard } from "@/components/ProjectCard";

export default function Showcase() {
  return (
    <section id="showcase" className="section">
      <div className="section-inner">
        <h2 className="section-title">Showcase</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {PROJECTS.map((p, i) => <ProjectCard key={p.title} p={p} index={i} />)}
        </div>
      </div>
    </section>
  );
}
