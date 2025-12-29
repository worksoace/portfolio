import { useEffect, useRef, useState } from "react";

export function useInView<T extends HTMLElement>(options?: IntersectionObserverInit) {
  const ref = useRef<T | null>(null);
  const [inView, setInView] = useState(false);
  const [hasAnimated, setHasAnimated] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting && !hasAnimated) {
          setInView(true);
          setHasAnimated(true);
          // Only unobserve if we don't want to animate again when scrolling back up
          // observer.unobserve(entry.target);
        } else if (!entry.isIntersecting && !hasAnimated) {
          setInView(false);
        }
      });
    }, {
      root: null,
      rootMargin: "0px 0px -10% 0px",
      threshold: 0.1,
      ...options
    });

    observer.observe(node);
    return () => observer.disconnect();
  }, [options?.root, options?.rootMargin, options?.threshold, hasAnimated]);

  return { ref, inView } as const;
}


