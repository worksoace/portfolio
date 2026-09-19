import { FiGithub, FiExternalLink, FiCheck } from "react-icons/fi";

export type ProjectCardProps = {
  title: string;
  description: string;
  category?: string;
  tech?: string[];
  link?: string;
  liveLink?: string;
  features?: string[];
  featured?: boolean;
};

export default function ProjectCard({
  title,
  description,
  category,
  tech,
  link,
  liveLink,
  features,
  featured,
}: ProjectCardProps) {
  return (
    <article className="group rounded-2xl border border-zinc-200 bg-white overflow-hidden shadow-sm hover:shadow-xl hover:border-zinc-950 transition-all duration-300 flex flex-col h-full">
      {/* Decorative Browser-like Header */}
      <div className="px-4 py-3 bg-zinc-50 border-b border-zinc-100 flex items-center justify-between">
        <div className="flex items-center gap-1.5">
          <span className="w-2.5 h-2.5 rounded-full bg-zinc-300 inline-block" />
          <span className="w-2.5 h-2.5 rounded-full bg-zinc-300 inline-block" />
          <span className="w-2.5 h-2.5 rounded-full bg-zinc-300 inline-block" />
        </div>
        {category && (
          <span className="text-[11px] font-mono text-zinc-400 uppercase tracking-wider">
            {category}
          </span>
        )}
        {featured && (
          <span className="px-2 py-0.5 rounded-full bg-zinc-100 border border-zinc-200 text-zinc-900 text-[10px] font-mono font-semibold uppercase">
            Featured
          </span>
        )}
      </div>

      <div className="p-6 flex-1 flex flex-col justify-between">
        <div>
          <div className="flex items-center justify-between gap-2 mb-2">
            <h3 className="text-lg font-bold text-zinc-950 group-hover:text-zinc-600 transition-colors">
              {title}
            </h3>
          </div>

          <p className="text-sm text-zinc-600 leading-relaxed mb-5">
            {description}
          </p>

          {features && features.length > 0 && (
            <div className="mb-5 space-y-1.5">
              <span className="text-[11px] font-mono text-zinc-400 uppercase tracking-wider block mb-1">
                Highlights:
              </span>
              <ul className="space-y-1">
                {features.map((feature, idx) => (
                  <li
                    key={idx}
                    className="text-xs text-zinc-600 flex items-center gap-2"
                  >
                    <FiCheck size={12} className="text-zinc-950 shrink-0" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>

        <div>
          {tech && tech.length > 0 && (
            <div className="flex flex-wrap gap-1.5 mb-5 pt-4 border-t border-zinc-100">
              {tech.map((t) => (
                <span
                  key={t}
                  className="rounded-md bg-zinc-100 px-2.5 py-1 text-[11px] text-zinc-700 font-mono"
                >
                  {t}
                </span>
              ))}
            </div>
          )}

          {/* Action Links */}
          <div className="flex items-center gap-3 pt-2">
            {link && (
              <a
                className="group/btn flex items-center gap-1.5 text-xs font-medium text-zinc-700 hover:text-zinc-950 bg-zinc-100 hover:bg-zinc-200 px-3 py-1.5 rounded-lg transition-all"
                href={link}
                target="_blank"
                rel="noreferrer"
              >
                <FiGithub size={14} className="group-hover/btn:rotate-12 transition-transform duration-200" />
                <span>Source Code</span>
              </a>
            )}
            {liveLink ? (
              <a
                className="group/btn flex items-center gap-1.5 text-xs font-semibold bg-zinc-950 text-white hover:bg-black px-3.5 py-1.5 rounded-lg transition-all shadow-xs"
                href={liveLink}
                target="_blank"
                rel="noreferrer"
              >
                <FiExternalLink size={14} className="group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 transition-transform duration-200" />
                <span>Live Demo</span>
              </a>
            ) : (
              <span className="text-[11px] font-mono text-zinc-400 italic">
                Local / GitHub only
              </span>
            )}
          </div>
        </div>
      </div>
    </article>
  );
}
