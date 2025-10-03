import { FiArrowDown, FiArrowUp } from "react-icons/fi";

type ScrollArrowsProps = {
  prevId?: string;
  nextId?: string;
};

export default function ScrollArrows({ prevId, nextId }: ScrollArrowsProps) {
  return (
    <div className="pointer-events-none absolute bottom-8 left-1/2 -translate-x-1/2 flex items-center gap-4">
      {prevId && (
        <a
          href={`#${prevId}`}
          className="group pointer-events-auto inline-flex h-12 w-12 items-center justify-center rounded-full border-2 border-brand/30 bg-white/80 dark:bg-zinc-900/80 backdrop-blur-sm hover:border-brand hover:bg-brand/10 hover:scale-110 transition-all duration-300 animate-bounceUp shadow-lg hover:shadow-brand/20"
          aria-label="Previous section"
        >
          <FiArrowUp className="text-brand group-hover:text-brand-dark transition-colors" />
        </a>
      )}
      {nextId && (
        <a
          href={`#${nextId}`}
          className="group pointer-events-auto inline-flex h-12 w-12 items-center justify-center rounded-full border-2 border-brand/30 bg-white/80 dark:bg-zinc-900/80 backdrop-blur-sm hover:border-brand hover:bg-brand/10 hover:scale-110 transition-all duration-300 animate-bounceDown shadow-lg hover:shadow-brand/20"
          aria-label="Next section"
        >
          <FiArrowDown className="text-brand group-hover:text-brand-dark transition-colors" />
        </a>
      )}
    </div>
  );
}
