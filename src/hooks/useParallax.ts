import { useEffect, useRef } from "react";

export function useParallax(multiplier = 0.3) {
	const ref = useRef<HTMLDivElement | null>(null);

	useEffect(() => {
		const node = ref.current;
		if (!node) return;
		let raf = 0;
		const onScroll = () => {
			cancelAnimationFrame(raf);
			raf = requestAnimationFrame(() => {
				const y = window.scrollY * multiplier;
				node.style.transform = `translateY(${y}px)`;
			});
		};
		window.addEventListener('scroll', onScroll, { passive: true });
		return () => {
			cancelAnimationFrame(raf);
			window.removeEventListener('scroll', onScroll);
		};
	}, [multiplier]);

	return ref;
}


