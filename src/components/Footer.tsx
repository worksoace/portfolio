import { FiArrowUp } from "react-icons/fi";

export default function Footer() {
  const year = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="w-full border-t border-zinc-200 bg-white py-6 sm:py-8 px-4 sm:px-6 lg:px-12">
      <div className="mx-auto max-w-6xl flex flex-col sm:flex-row items-center justify-between gap-3 text-xs font-mono text-zinc-500">
        {/* Brand & Copyright */}
        <div className="flex items-center gap-2">
          <img
            src="/EC.webp"
            alt="Emmanuel Chijioke"
            width={20}
            height={20}
            decoding="async"
            className="w-5 h-5 rounded-full object-contain bg-white shadow-2xs border border-zinc-200"
          />
          <span className="text-zinc-600">
            © {year} Emmanuel Chijioke. All rights reserved.
          </span>
        </div>

        {/* Tech & Back to Top */}
        <div className="flex items-center gap-4">
          <span className="hidden md:inline-block text-zinc-400">
            Built with React &amp; Tailwind
          </span>
          <button
            onClick={scrollToTop}
            className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg border border-zinc-200 hover:border-zinc-950 hover:text-zinc-950 transition-all bg-zinc-50 text-[11px] font-mono shadow-2xs active:scale-95"
            aria-label="Back to top"
          >
            <span>Top</span>
            <FiArrowUp size={12} />
          </button>
        </div>
      </div>
    </footer>
  );
}
