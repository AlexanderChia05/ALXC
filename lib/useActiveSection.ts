import { useEffect, useState } from "react";

export function useActiveSection(ids: string[]) {
  const [active, setActive] = useState(ids[0] || "");

  useEffect(() => {
    const elements = ids
      .map((id) => typeof document !== "undefined" ? document.getElementById(id) : null)
      .filter(Boolean) as HTMLElement[];

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
        if (visible) setActive((visible.target as HTMLElement).id);
      },
      { root: null, threshold: [0.55] }
    );

    elements.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, [ids.join("|")]);

    return active;
}
