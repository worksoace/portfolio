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
  tech,
  link,
  liveLink,
  features,
}: ProjectCardProps) {
  return (
    <article className="group rounded-xl border border-zinc-200 dark:border-zinc-800 p-6 bg-white dark:bg-zinc-900 hover:border-brand/40 transition-all duration-300 h-full flex flex-col">
      <h3 className="text-base font-semibold text-zinc-900 dark:text-white mb-2">
        {title}
      </h3>
      <p className="text-sm text-zinc-500 dark:text-zinc-400 leading-relaxed mb-4 flex-1">
        {description}
      </p>

      {features && features.length > 0 && (
        <ul className="space-y-1 mb-4">
          {features.map((feature, idx) => (
            <li
              key={idx}
              className="text-xs text-zinc-400 dark:text-zinc-500 flex items-center gap-2"
            >
              <span className="w-1 h-1 rounded-full bg-brand flex-shrink-0" />
              {feature}
            </li>
          ))}
        </ul>
      )}

      {tech && tech.length > 0 && (
        <div className="flex flex-wrap gap-1.5 mb-4">
          {tech.map((t) => (
            <span
              key={t}
              className="rounded-md bg-zinc-100 dark:bg-zinc-800 px-2 py-0.5 text-xs text-zinc-500 dark:text-zinc-400 font-mono"
            >
              {t}
            </span>
          ))}
        </div>
      )}

      <div className="flex gap-4 pt-2 border-t border-zinc-100 dark:border-zinc-800">
        {link && (
          <a
            className="flex items-center gap-1.5 text-xs text-zinc-400 hover:text-brand transition-colors"
            href={link}
            target="_blank"
            rel="noreferrer"
          >
            <FiGithub size={14} />
            Code
          </a>
        )}
        {liveLink && (
          <a
            className="flex items-center gap-1.5 text-xs text-brand hover:opacity-70 transition-opacity"
            href={liveLink}
            target="_blank"
            rel="noreferrer"
          >
            <FiExternalLink size={14} />
            Live Demo
          </a>
        )}
      </div>
    </article>
  );
}
