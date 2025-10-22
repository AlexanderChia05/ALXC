'use client';
import { clsx } from "clsx";

const IDS = ["main","showcase","about"];

export function DotNav({ active }: { active: string }) {
  return (
    <div aria-hidden className="fixed left-6 top-1/2 -translate-y-1/2 z-40 hidden md:flex flex-col gap-3">
      {IDS.map((id) => (
        <a key={id} href={`#${id}`} className="group">
          <span
            className={clsx(
              "block h-2.5 w-2.5 rounded-full transition transform",
              active === id ? "bg-fg scale-110" : "bg-edge/60 group-hover:bg-edge"
            )}
          />
        </a>
      ))}
    </div>
  );
}
