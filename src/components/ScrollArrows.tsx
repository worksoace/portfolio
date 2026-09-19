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
          className="group pointer-events-auto inline-flex h-12 w-12 items-center justify-center rounded-full border-2 border-zinc-200 bg-white/90 backdrop-blur-sm hover:border-zinc-950 hover:bg-zinc-100 hover:scale-110 transition-all duration-300 animate-bounceUp shadow-lg"
          aria-label="Previous section"
        >
          <FiArrowUp className="text-zinc-950 transition-colors" />
        </a>
      )}
      {nextId && (
        <a
          href={`#${nextId}`}
          className="group pointer-events-auto inline-flex h-12 w-12 items-center justify-center rounded-full border-2 border-zinc-200 bg-white/90 backdrop-blur-sm hover:border-zinc-950 hover:bg-zinc-100 hover:scale-110 transition-all duration-300 animate-bounceDown shadow-lg"
          aria-label="Next section"
        >
          <FiArrowDown className="text-zinc-950 transition-colors" />
        </a>
      )}
    </div>
  );
}
