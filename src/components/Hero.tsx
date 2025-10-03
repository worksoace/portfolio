import Reveal from "./Reveal";
import { FiGithub, FiLinkedin, FiMail } from "react-icons/fi";
import profileUrl from "../assets/final.png";
import { useParallax } from "../hooks/useParallax";
import ScrollArrows from "./ScrollArrows";

export default function Hero() {
	const bgRef = useParallax(0.15);
	return (
		<section id="home" className="relative overflow-hidden fullscreen-section">
			<div className="absolute inset-0 -z-10 overflow-hidden">
				<div ref={bgRef} className="pointer-events-none absolute -inset-x-10 -top-24 h-80 rounded-full bg-brand/10 blur-3xl"></div>
			</div>
			<div className="mx-auto max-w-6xl px-4 py-16 sm:py-20">
				<div className="grid grid-cols-1 md:grid-cols-2 items-center gap-10">
					<div className="order-2 md:order-1">
						<Reveal>
							<p className="text-sm text-zinc-500 dark:text-zinc-400">Welcome</p>
						</Reveal>
						<Reveal delayMs={80}>
							<h1 className="mt-2 text-4xl sm:text-5xl font-bold tracking-tight text-zinc-900 dark:text-white">Hi, I'm Emmanuel Chijioke</h1>
						</Reveal>
						<Reveal delayMs={120}>
							<p className="mt-4 max-w-2xl text-zinc-600 dark:text-zinc-300">Frontend Developer — building accessible, performant React apps with TypeScript.</p>
						</Reveal>
						<Reveal delayMs={160}>
							<div className="mt-8 flex flex-wrap gap-3">
								<a href="#projects" className="btn-primary">View Projects</a>
								<a href="#contact" className="btn-outline">Contact Me</a>
							</div>
						</Reveal>
						<Reveal delayMs={200}>
							<div className="mt-6 flex items-center gap-4 text-zinc-600 dark:text-zinc-300">
								<a className="hover:text-brand" href="https://github.com/" target="_blank" rel="noreferrer" aria-label="GitHub"><FiGithub size={20}></FiGithub></a>
								<a className="hover:text-brand" href="https://linkedin.com/" target="_blank" rel="noreferrer" aria-label="LinkedIn"><FiLinkedin size={20}></FiLinkedin></a>
								<a className="hover:text-brand" href="mailto:chijiokeemma2003@gmail.com" aria-label="Email"><FiMail size={20}></FiMail></a>
							</div>
						</Reveal>
					</div>
					<div className="order-1 md:order-2 flex justify-center">
						<Reveal>
							<img src={profileUrl} alt="Profile" className="h-40 w-40 sm:h-48 sm:w-48 md:h-56 md:w-56 rounded-full object-cover border-4 border-zinc-200 dark:border-zinc-800 shadow-md" />
						</Reveal>
					</div>
				</div>
			</div>
			<ScrollArrows nextId="about"></ScrollArrows>
		</section>
	);
}


