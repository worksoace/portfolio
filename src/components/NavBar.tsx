import ThemeToggle from "./ThemeToggle";
import { useMemo } from "react";
import { useScrollSpy } from "../hooks/useScrollSpy";
import {
  FiHome,
  FiUser,
  FiBriefcase,
  FiGrid,
  FiStar,
  FiMail,
} from "react-icons/fi";

function NavBar() {
  const sections = useMemo(
    () => ["home", "about", "experience", "projects", "skills", "contact"],
    []
  );
  const activeId = useScrollSpy(sections);

  const linkClass = (id: string, label: string) =>
    `transition flex items-center justify-center w-12 h-12 rounded-xl mb-2 text-2xl relative group ${
      activeId === id
        ? "bg-brand/90 text-white shadow-lg"
        : "text-zinc-400 hover:text-brand hover:bg-brand/10"
    } after:content-[''] after:absolute after:left-14 after:top-1/2 after:-translate-y-1/2 after:opacity-0 group-hover:after:opacity-100 group-hover:after:content-[attr(data-label)] after:bg-zinc-900 after:text-white after:px-3 after:py-1 after:rounded-md after:whitespace-nowrap after:shadow-lg after:transition-opacity after:duration-200`;

  return (
    <aside className="fixed top-0 left-0 z-[100] h-full w-20 bg-white/95 dark:bg-zinc-900/95 border-r border-zinc-200 dark:border-zinc-800 flex flex-col items-center py-6 gap-4 shadow-xl">
      <div className="flex-1 flex flex-col items-center justify-center gap-2">
        <a
          href="#home"
          className={linkClass("home", "Home")}
          aria-label="Home"
          data-label="Home"
        >
          <FiHome />
        </a>
        <a
          href="#about"
          className={linkClass("about", "About")}
          aria-label="About"
          data-label="About"
        >
          <FiUser />
        </a>
        <a
          href="#experience"
          className={linkClass("experience", "Experience")}
          aria-label="Experience"
          data-label="Experience"
        >
          <FiBriefcase />
        </a>
        <a
          href="#projects"
          className={linkClass("projects", "Projects")}
          aria-label="Projects"
          data-label="Projects"
        >
          <FiGrid />
        </a>
        <a
          href="#skills"
          className={linkClass("skills", "Skills")}
          aria-label="Skills"
          data-label="Skills"
        >
          <FiStar />
        </a>
        <a
          href="#contact"
          className={linkClass("contact", "Contact")}
          aria-label="Contact"
          data-label="Contact"
        >
          <FiMail />
        </a>
      </div>
      {/* ThemeToggle moved to top right in App.tsx */}
    </aside>
  );
}

export default NavBar;
