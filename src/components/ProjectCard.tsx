import { FiGithub, FiExternalLink } from "react-icons/fi";

type ProjectCardProps = {
  title: string;
  description: string;
  image?: string;
  tech?: string[];
  link?: string;
  liveLink?: string;
  features?: string[];
};

export default function ProjectCard({
  title,
  description,
  image,
  tech,
  link,
  liveLink,
  features,
}: ProjectCardProps) {
  return (
    <article className="rounded-xl border border-zinc-200 dark:border-zinc-800 p-6 bg-white/80 dark:bg-zinc-900/80 hover:shadow-lg transition-all duration-300 hover:scale-[1.02]">
      {image && (
        <div className="mb-4 overflow-hidden rounded-lg border border-zinc-200 dark:border-zinc-800">
          <img
            src={image}
            alt="Project preview"
            className="w-full h-48 object-cover hover:scale-105 transition-transform duration-300"
          />
        </div>
      )}
      <h3 className="text-xl font-semibold text-zinc-900 dark:text-white mb-3">
        {title}
      </h3>
      <p className="text-sm text-zinc-700 dark:text-zinc-300 leading-relaxed mb-4">
        {description}
      </p>

      {features && features.length > 0 && (
        <div className="mb-4">
          <h4 className="text-sm font-medium text-zinc-900 dark:text-white mb-2">
            Key Features:
          </h4>
          <ul className="space-y-1">
            {features.map((feature, idx) => (
              <li
                key={idx}
                className="text-xs text-zinc-600 dark:text-zinc-400 flex items-center"
              >
                <span className="w-1 h-1 bg-brand rounded-full mr-2"></span>
                {feature}
              </li>
            ))}
          </ul>
        </div>
      )}

      {tech && tech.length > 0 && (
        <div className="mb-4">
          <ul className="flex flex-wrap gap-2">
            {tech.map((t) => (
              <li
                key={t}
                className="rounded-full bg-zinc-100 dark:bg-zinc-800 px-3 py-1 text-xs text-zinc-700 dark:text-zinc-300 font-medium"
              >
                {t}
              </li>
            ))}
          </ul>
        </div>
      )}

      <div className="flex gap-3">
        {link && (
          <a
            className="flex items-center gap-2 text-sm text-zinc-600 dark:text-zinc-400 hover:text-brand transition-colors"
            href={link}
            target="_blank"
            rel="noreferrer"
          >
            <FiGithub size={16} />
            Code
          </a>
        )}
        {liveLink && (
          <a
            className="flex items-center gap-2 text-sm text-brand hover:opacity-80 transition-opacity"
            href={liveLink}
            target="_blank"
            rel="noreferrer"
          >
            <FiExternalLink size={16} />
            Live Demo
          </a>
        )}
      </div>
    </article>
  );
}
