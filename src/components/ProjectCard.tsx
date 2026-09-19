import { FiGithub, FiExternalLink } from "react-icons/fi";

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
    <article className="group rounded-2xl border border-zinc-200 bg-white overflow-hidden shadow-xs hover:shadow-lg hover:border-zinc-950 transition-all duration-200 flex flex-col h-full">
      {/* Decorative Browser-like Header */}
      <div className="px-3.5 py-2 bg-zinc-50/90 border-b border-zinc-100 flex items-center justify-between">
        <div className="flex items-center gap-1.5">
          <span className="w-2 h-2 rounded-full bg-zinc-300 inline-block" />
          <span className="w-2 h-2 rounded-full bg-zinc-300 inline-block" />
          <span className="w-2 h-2 rounded-full bg-zinc-300 inline-block" />
        </div>
        <div className="flex items-center gap-1.5">
          {category && (
            <span className="text-[10px] font-mono text-zinc-400 uppercase tracking-wider">
              {category}
            </span>
          )}
          {featured && (
            <span className="px-2 py-0.5 rounded-full bg-zinc-100 border border-zinc-200 text-zinc-900 text-[10px] font-mono font-semibold uppercase">
              Featured
            </span>
          )}
        </div>
      </div>

      <div className="p-4 sm:p-5 flex-1 flex flex-col justify-between">
        <div>
          <div className="flex items-center justify-between gap-2 mb-1.5">
            <h3 className="text-sm sm:text-base font-bold text-zinc-950 group-hover:text-zinc-700 transition-colors">
              {title}
            </h3>
          </div>

          <p className="text-xs text-zinc-600 leading-relaxed mb-3 line-clamp-2">
            {description}
          </p>

          {features && features.length > 0 && (
            <div className="mb-3 space-y-1">
              {features.slice(0, 2).map((feature, idx) => (
                <div
                  key={idx}
                  className="text-xs text-zinc-600 flex items-start gap-1.5"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-zinc-950 flex-shrink-0 mt-1.5" />
                  <span className="leading-snug">{feature}</span>
                </div>
              ))}
            </div>
          )}
        </div>

        <div>
          {tech && tech.length > 0 && (
            <div className="flex flex-wrap gap-1 mb-3 pt-2.5 border-t border-zinc-100">
              {tech.map((t) => (
                <span
                  key={t}
                  className="rounded-md bg-zinc-100 px-2 py-0.5 text-[10px] sm:text-[11px] text-zinc-700 font-mono"
                >
                  {t}
                </span>
              ))}
            </div>
          )}

          {/* Action Links */}
          <div className="flex items-center gap-2 pt-1">
            {link && (
              <a
                className="group/btn inline-flex items-center gap-1.5 text-xs font-medium text-zinc-700 hover:text-zinc-950 bg-zinc-100 hover:bg-zinc-200 px-2.5 py-1.5 rounded-lg transition-all active:scale-95"
                href={link}
                target="_blank"
                rel="noreferrer"
              >
                <FiGithub size={13} className="group-hover/btn:rotate-12 transition-transform duration-200" />
                <span>Code</span>
              </a>
            )}
            {liveLink ? (
              <a
                className="group/btn inline-flex items-center gap-1.5 text-xs font-semibold bg-zinc-950 text-white hover:bg-black px-3 py-1.5 rounded-lg transition-all shadow-xs active:scale-95"
                href={liveLink}
                target="_blank"
                rel="noreferrer"
              >
                <FiExternalLink size={13} className="group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 transition-transform duration-200" />
                <span>Live Demo</span>
              </a>
            ) : (
              <span className="text-[10px] font-mono text-zinc-400 italic">
                Local / GitHub only
              </span>
            )}
          </div>
        </div>
      </div>
    </article>
  );
}
