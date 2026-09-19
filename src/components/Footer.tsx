import { FiArrowUp } from "react-icons/fi";

export default function Footer() {
  const year = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="w-full border-t border-zinc-200 bg-white py-10 px-6 lg:px-12">
      <div className="mx-auto max-w-6xl flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-zinc-500">
        <div className="flex items-center gap-2.5">
          <img
            src="/EC.png"
            alt="Emmanuel Chijioke Logo"
            className="w-6 h-6 rounded-full object-contain bg-white shadow-xs border border-zinc-200"
          />
          <span>© {year} Emmanuel Chijioke. All rights reserved.</span>
        </div>

        <div className="flex items-center gap-6">
          <span>Crafted with React, TypeScript &amp; Tailwind CSS</span>
          <button
            onClick={scrollToTop}
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg border border-zinc-200 hover:border-zinc-950 hover:text-zinc-950 transition-colors bg-zinc-50"
            aria-label="Back to top"
          >
            <span>Top</span>
            <FiArrowUp size={13} />
          </button>
        </div>
      </div>
    </footer>
  );
}
