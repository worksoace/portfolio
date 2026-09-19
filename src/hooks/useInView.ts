import { useEffect, useRef, useState } from "react";

export function useInView<T extends HTMLElement>(options?: IntersectionObserverInit) {
  const ref = useRef<T | null>(null);
  const [inView, setInView] = useState(false);
  const [hasAnimated, setHasAnimated] = useState(false);

  const root = options?.root ?? null;
  const rootMargin = options?.rootMargin ?? "0px 0px -10% 0px";
  const threshold = options?.threshold ?? 0.1;

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting && !hasAnimated) {
          setInView(true);
          setHasAnimated(true);
        } else if (!entry.isIntersecting && !hasAnimated) {
          setInView(false);
        }
      });
    }, {
      root,
      rootMargin,
      threshold,
    });

    observer.observe(node);
    return () => observer.disconnect();
  }, [root, rootMargin, threshold, hasAnimated]);

  return { ref, inView } as const;
}



