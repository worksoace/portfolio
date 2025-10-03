import { ReactNode } from "react";
import { useInView } from "../hooks/useInView";

type RevealProps = {
	children: ReactNode;
	delayMs?: number;
};

export default function Reveal({ children, delayMs = 0 }: RevealProps) {
	const { ref, inView } = useInView<HTMLDivElement>();
	return (
		<div
			ref={ref}
			style={{ transitionDelay: `${delayMs}ms` }}
			className={`transform transition duration-700 ease-out will-change-auto ${
				inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-3'
			}`}
		>
			{children}
		</div>
	);
}


