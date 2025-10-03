import { useEffect, useRef, useState } from "react";

export function useInView<T extends HTMLElement>(options?: IntersectionObserverInit) {
	const ref = useRef<T | null>(null);
	const [inView, setInView] = useState(false);

	useEffect(() => {
		const node = ref.current;
		if (!node) return;
		const observer = new IntersectionObserver((entries) => {
			entries.forEach((entry) => {
				if (entry.isIntersecting) {
					setInView(true);
					observer.unobserve(entry.target);
				}
			});
		}, options ?? { root: null, rootMargin: "0px 0px -10% 0px", threshold: 0.1 });
		observer.observe(node);
		return () => observer.disconnect();
	}, [options?.root, options?.rootMargin, options?.threshold]);

	return { ref, inView } as const;
}


