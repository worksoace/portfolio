import { useEffect, useState } from "react";

export function useScrollSpy(
  sectionIds: string[],
  options?: { rootMargin?: string; threshold?: number }
) {
  const [activeId, setActiveId] = useState<string>(sectionIds[0] ?? "");
  const sectionIdsKey = sectionIds.join("|");
  const rootMargin = options?.rootMargin ?? "-56px 0px -60% 0px";
  const threshold = options?.threshold ?? 0.1;

  useEffect(() => {
    const ids = sectionIdsKey.split("|").filter(Boolean);
    const elements = ids
      .map((id) => document.getElementById(id))
      .filter((el): el is HTMLElement => Boolean(el));

    if (elements.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        // Find the entry closest to the top that is intersecting
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => (a.boundingClientRect.top > b.boundingClientRect.top ? 1 : -1));

        if (visible.length > 0) {
          const id = (visible[0].target as HTMLElement).id;
          setActiveId(id);
        }
      },
      {
        root: null,
        rootMargin,
        threshold,
      }
    );

    elements.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, [sectionIdsKey, rootMargin, threshold]);

  return activeId;
}



