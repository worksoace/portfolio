import Reveal from "./Reveal";
import ProjectCard from "./ProjectCard";

import preview1 from "../assets/react.svg";
// Use Vite's public asset for the second preview
import preview2 from "/vite.svg";

const projects = [
	{
		title: "Portfolio Website",
		description: "Modern, responsive portfolio built with React, TypeScript, and Tailwind with dark mode and scroll animations.",
		image: preview1,
		tech: ["React", "TypeScript", "Tailwind"],
		link: "#",
	},
	{
		title: "E-commerce UI",
		description: "Product listings, filters, cart interactions, and checkout flow using clean component patterns.",
		image: preview2,
		tech: ["React", "Zustand", "Vite"],
		link: "#",
	},
];

import ScrollArrows from "./ScrollArrows";

export default function Projects() {
	return (
		<section id="projects" className="fullscreen-section">
			<div className="mx-auto max-w-6xl px-4 py-16">
				<Reveal>
					<h2 className="text-2xl font-semibold text-zinc-900 dark:text-white">Projects</h2>
				</Reveal>
				<div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-6">
					{projects.map((p, idx) => (
						<Reveal key={p.title} delayMs={idx * 80}>
						<ProjectCard title={p.title} description={p.description} image={(p as any).image} tech={p.tech} link={p.link}></ProjectCard>
						</Reveal>
					))}
				</div>
			</div>
			<ScrollArrows prevId="experience" nextId="skills"></ScrollArrows>
		</section>
	);
}


