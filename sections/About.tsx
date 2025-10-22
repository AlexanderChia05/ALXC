'use client';
import { PROFILE } from "@/lib/profile";
import { Mail, Github, Linkedin } from "lucide-react";

export default function About() {
  return (
    <section id="about" className="section">
      <div className="section-inner">
        <h2 className="section-title">About</h2>
        <p className="text-muted max-w-3xl">{PROFILE.bio}</p>

        <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <h3 className="font-semibold mb-2">Highlights</h3>
            <ul className="list-disc ml-5 text-sm text-muted space-y-1">
              {PROFILE.highlights.map((h) => <li key={h}>{h}</li>)}
            </ul>
          </div>
          <div>
            <h3 className="font-semibold mb-2">Certifications</h3>
            <ul className="list-disc ml-5 text-sm text-muted space-y-1">
              {PROFILE.certifications.map((c) => <li key={c}>{c}</li>)}
            </ul>
          </div>
          <div>
            <h3 className="font-semibold mb-2">Education</h3>
            <ul className="text-sm text-muted space-y-1">
              {PROFILE.education.map((e) => (
                <li key={e.title}><span className="text-fg">{e.title}</span> — {e.period} {e.detail && `• ${e.detail}`}</li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="font-semibold mb-2">Languages</h3>
            <p className="text-sm text-muted">{PROFILE.languages.join(" · ")}</p>
          </div>
        </div>

        <ul className="mt-6 flex flex-wrap items-center gap-4 text-sm">
          <li><a className="inline-flex items-center gap-2 underline underline-offset-4" href={`mailto:${PROFILE.email}`} aria-label="Email"><Mail className="h-4 w-4" /> {PROFILE.email}</a></li>
          <li><a className="inline-flex items-center gap-2 underline underline-offset-4" href={PROFILE.github} target="_blank" rel="noopener noreferrer" aria-label="GitHub"><Github className="h-4 w-4" /> GitHub</a></li>
          <li><a className="inline-flex items-center gap-2 underline underline-offset-4" href={PROFILE.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn"><Linkedin className="h-4 w-4" /> LinkedIn</a></li>
        </ul>

        <footer className="mt-10 text-xs text-muted">© {new Date().getFullYear()} ALXC. Built with Next.js, Tailwind and Framer Motion.</footer>
      </div>
    </section>
  );
}
