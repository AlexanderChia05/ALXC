'use client';
import { clsx } from "clsx";

const NAV = [
  { id: "main", label: "Main" },
  { id: "showcase", label: "Showcase" },
  { id: "about", label: "About" },
];

export function Nav({ active }: { active: string }) {
  return (
    <nav aria-label="Primary" className="fixed top-10 right-12 z-50">
      <ul className="flex gap-4 rounded-2xl bg-black/30 backdrop-blur px-4 py-2 text-sm shadow-glow">
        {NAV.map((n) => (
          <li key={n.id}>
            <a
              href={`#${n.id}`}
              className={clsx(
                "px-2 py-1 rounded focus-visible:outline-none transition-opacity",
                active === n.id ? "text-fg opacity-100" : "text-muted opacity-80 hover:opacity-100"
              )}
            >
              {n.label}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}
