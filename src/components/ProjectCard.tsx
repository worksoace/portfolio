type ProjectCardProps = {
	title: string;
	description: string;
	image?: string;
	tech?: string[];
	link?: string;
};

export default function ProjectCard({ title, description, image, tech, link }: ProjectCardProps) {
	return (
		<article className="rounded-lg border border-zinc-200 dark:border-zinc-800 p-5 bg-white dark:bg-zinc-900 hover:shadow-md transition-shadow">
			{image && (
				<div className="mb-3 overflow-hidden rounded-md border border-zinc-200 dark:border-zinc-800">
					<img src={image} alt="Project preview" className="w-full h-40 object-cover" />
				</div>
			)}
			<h3 className="text-lg font-semibold text-zinc-900 dark:text-white">{title}</h3>
			<p className="mt-2 text-sm text-zinc-700 dark:text-zinc-300">{description}</p>
			{tech && tech.length > 0 && (
				<ul className="mt-3 flex flex-wrap gap-2">
					{tech.map((t) => (
						<li key={t} className="rounded-full border border-zinc-300 dark:border-zinc-700 px-2.5 py-0.5 text-xs text-zinc-700 dark:text-zinc-200">{t}</li>
					))}
				</ul>
			)}
			{link && (
				<a className="mt-4 inline-flex text-sm text-brand hover:opacity-90" href={link} target="_blank" rel="noreferrer">
					View Project
				</a>
			)}
		</article>
	);
}


