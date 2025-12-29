import { useEffect, useState } from "react";
import { FiMoon, FiSun } from "react-icons/fi";

function getInitialTheme(): "light" | "dark" {
  const stored = localStorage.getItem("theme");
  if (stored === "light" || stored === "dark") return stored;
  const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
  return prefersDark ? "dark" : "light";
}

export default function ThemeToggle() {
  const [theme, setTheme] = useState<"light" | "dark">(getInitialTheme);

  useEffect(() => {
    const root = document.documentElement;
    if (theme === "dark") {
      root.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      root.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [theme]);

  return (
    <button
      aria-label="Toggle dark mode"
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
      className="group relative inline-flex items-center gap-2 rounded-xl border border-zinc-300 dark:border-zinc-700 px-4 py-2 text-sm hover:bg-zinc-100 dark:hover:bg-zinc-800 transition-all duration-300 hover:scale-105 hover:shadow-lg hover:border-brand/50 before:content-[''] before:absolute before:inset-0 before:rounded-xl before:bg-gradient-to-r before:from-brand/10 before:to-transparent before:opacity-0 hover:before:opacity-100 before:transition-opacity before:duration-300"
    >
      <div className="relative z-10 transition-transform duration-300 group-hover:rotate-12">
        {theme === "dark" ? <FiSun></FiSun> : <FiMoon></FiMoon>}
      </div>
      <span className="hidden sm:inline relative z-10 font-medium">
        {theme === "dark" ? "Light" : "Dark"}
      </span>
    </button>
  );
}
