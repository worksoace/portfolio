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
			className="inline-flex items-center gap-2 rounded-md border border-zinc-300 dark:border-zinc-700 px-3 py-1.5 text-sm hover:bg-zinc-100 dark:hover:bg-zinc-800 transition"
		>
			{theme === "dark" ? <FiSun></FiSun> : <FiMoon></FiMoon>}
			<span className="hidden sm:inline">{theme === "dark" ? "Light" : "Dark"}</span>
		</button>
	);
}


