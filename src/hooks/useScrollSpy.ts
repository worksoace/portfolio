import { useEffect, useState, useRef, useCallback } from "react";

export function useScrollSpy(
  sectionIds: string[],
  offset = 110
) {
  const [activeId, setActiveId] = useState<string>(sectionIds[0] ?? "");
  const isClickingRef = useRef(false);
  const clickTimeoutRef = useRef<number | null>(null);

  const handleManualSelect = useCallback((id: string) => {
    setActiveId(id);
    isClickingRef.current = true;
    if (clickTimeoutRef.current) {
      window.clearTimeout(clickTimeoutRef.current);
    }
    // Release scroll lock after smooth scroll animation completes (~650ms)
    clickTimeoutRef.current = window.setTimeout(() => {
      isClickingRef.current = false;
    }, 650);
  }, []);

  useEffect(() => {
    let ticking = false;

    const onScroll = () => {
      if (isClickingRef.current) return;
      if (!ticking) {
        window.requestAnimationFrame(() => {
          ticking = false;
          if (isClickingRef.current) return;

          const scrollY = window.scrollY;
          const windowHeight = window.innerHeight;
          const docHeight = document.documentElement.scrollHeight;

          // If near the top, activate the first section immediately
          if (scrollY < 100 && sectionIds.length > 0) {
            setActiveId(sectionIds[0]);
            return;
          }

          // If reached the bottom of the page, activate the last section
          if (scrollY + windowHeight >= docHeight - 50 && sectionIds.length > 0) {
            setActiveId(sectionIds[sectionIds.length - 1]);
            return;
          }

          // Find the active section based on scroll position + offset
          let current = sectionIds[0] ?? "";
          for (let i = 0; i < sectionIds.length; i++) {
            const id = sectionIds[i];
            const el = document.getElementById(id);
            if (el) {
              const top = el.offsetTop - offset;
              if (scrollY >= top) {
                current = id;
              }
            }
          }

          setActiveId(current);
        });
        ticking = true;
      }
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();

    return () => {
      window.removeEventListener("scroll", onScroll);
      if (clickTimeoutRef.current) {
        window.clearTimeout(clickTimeoutRef.current);
      }
    };
  }, [sectionIds, offset]);

  return { activeId, setActiveId: handleManualSelect };
}
