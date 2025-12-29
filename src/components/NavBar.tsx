import { useMemo, useState } from "react";
import { useScrollSpy } from "../hooks/useScrollSpy";
import { HiBars3, HiXMark } from "react-icons/hi2";
import {
  HiHome,
  HiUser,
  HiBriefcase,
  HiSquares2X2,
  HiSparkles,
  HiEnvelope,
} from "react-icons/hi2";
import Reveal from "./Reveal";

function NavBar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const sections = useMemo(
    () => ["home", "about", "experience", "projects", "skills", "contact"],
    []
  );
  const activeId = useScrollSpy(sections);

  const linkClass = (id: string) =>
    `transition-all duration-300 flex items-center justify-center w-12 h-12 rounded-xl mb-2 text-2xl relative group ${
      activeId === id
        ? "bg-brand/90 text-white shadow-lg scale-110"
        : "text-zinc-400 hover:text-brand hover:bg-brand/10 hover:scale-105"
    } before:content-[''] before:absolute before:inset-0 before:rounded-xl before:bg-gradient-to-r before:from-brand/20 before:to-transparent before:opacity-0 group-hover:before:opacity-100 before:transition-opacity before:duration-300`;

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <>
      {/* Hamburger Menu Button - Only visible on mobile */}
      <button
        onClick={toggleMenu}
        className="fixed top-4 left-4 z-[110] p-2 rounded-lg bg-white/95 dark:bg-zinc-900/95 border border-zinc-200 dark:border-zinc-800 shadow-lg md:hidden hover:bg-zinc-100 dark:hover:bg-zinc-800 transition-colors focus:outline-none focus:ring-2 focus:ring-brand/50"
        aria-label={isMenuOpen ? "Close menu" : "Open menu"}
        aria-expanded={isMenuOpen}
      >
        {isMenuOpen ? <HiXMark size={24} /> : <HiBars3 size={24} />}
      </button>

      {/* Mobile Menu Overlay */}
      <div
        className={`fixed inset-0 bg-black/50 z-[105] transition-opacity duration-300 md:hidden ${
          isMenuOpen ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
        onClick={closeMenu}
      />

      {/* Navigation Sidebar */}
      <aside
        className={`fixed top-0 z-[106] h-full w-20 bg-white/95 dark:bg-zinc-900/95 border-r border-zinc-200 dark:border-zinc-800 flex flex-col items-center py-6 gap-4 shadow-xl transition-transform duration-300 md:translate-x-0 overflow-visible ${
          isMenuOpen ? "translate-x-0" : "-translate-x-full md:translate-x-0"
        }`}
        aria-hidden={!isMenuOpen}
        role="navigation"
        aria-label="Main navigation"
      >
        <div className="flex-1 flex flex-col items-center justify-center gap-2">
          <Reveal animation="fade-right" distance={20}>
            <div className="relative group">
              <a
                href="#home"
                className={linkClass("home")}
                aria-label="Home"
                onClick={closeMenu}
              >
                <HiHome />
              </a>
              <div className="absolute left-14 top-1/2 -translate-y-1/2 bg-zinc-900 dark:bg-zinc-800 text-white px-3 py-2 rounded-lg text-sm font-medium whitespace-nowrap shadow-xl opacity-0 group-hover:opacity-100 transition-all duration-300 translate-x-[-10px] group-hover:translate-x-0 pointer-events-none z-50">
                Home
              </div>
            </div>
          </Reveal>
          <Reveal animation="fade-right" distance={20} delayMs={100}>
            <div className="relative group">
              <a
                href="#about"
                className={linkClass("about")}
                aria-label="About"
                onClick={closeMenu}
              >
                <HiUser />
              </a>
              <div className="absolute left-14 top-1/2 -translate-y-1/2 bg-zinc-900 dark:bg-zinc-800 text-white px-3 py-2 rounded-lg text-sm font-medium whitespace-nowrap shadow-xl opacity-0 group-hover:opacity-100 transition-all duration-300 translate-x-[-10px] group-hover:translate-x-0 pointer-events-none z-50">
                About
              </div>
            </div>
          </Reveal>
          <Reveal animation="fade-right" distance={20} delayMs={200}>
            <div className="relative group">
              <a
                href="#experience"
                className={linkClass("experience")}
                aria-label="Experience"
                onClick={closeMenu}
              >
                <HiBriefcase />
              </a>
              <div className="absolute left-14 top-1/2 -translate-y-1/2 bg-zinc-900 dark:bg-zinc-800 text-white px-3 py-2 rounded-lg text-sm font-medium whitespace-nowrap shadow-xl opacity-0 group-hover:opacity-100 transition-all duration-300 translate-x-[-10px] group-hover:translate-x-0 pointer-events-none z-50">
                Experience
              </div>
            </div>
          </Reveal>
          <Reveal animation="fade-right" distance={20} delayMs={300}>
            <div className="relative group">
              <a
                href="#projects"
                className={linkClass("projects")}
                aria-label="Projects"
                onClick={closeMenu}
              >
                <HiSquares2X2 />
              </a>
              <div className="absolute left-14 top-1/2 -translate-y-1/2 bg-zinc-900 dark:bg-zinc-800 text-white px-3 py-2 rounded-lg text-sm font-medium whitespace-nowrap shadow-xl opacity-0 group-hover:opacity-100 transition-all duration-300 translate-x-[-10px] group-hover:translate-x-0 pointer-events-none z-50">
                Projects
              </div>
            </div>
          </Reveal>
          <Reveal animation="fade-right" distance={20} delayMs={400}>
            <div className="relative group">
              <a
                href="#skills"
                className={linkClass("skills")}
                aria-label="Skills"
                onClick={closeMenu}
              >
                <HiSparkles />
              </a>
              <div className="absolute left-14 top-1/2 -translate-y-1/2 bg-zinc-900 dark:bg-zinc-800 text-white px-3 py-2 rounded-lg text-sm font-medium whitespace-nowrap shadow-xl opacity-0 group-hover:opacity-100 transition-all duration-300 translate-x-[-10px] group-hover:translate-x-0 pointer-events-none z-50">
                Skills
              </div>
            </div>
          </Reveal>
          <Reveal animation="fade-right" distance={20} delayMs={500}>
            <div className="relative group">
              <a
                href="#contact"
                className={linkClass("contact")}
                aria-label="Contact"
                onClick={closeMenu}
              >
                <HiEnvelope />
              </a>
              <div className="absolute left-14 top-1/2 -translate-y-1/2 bg-zinc-900 dark:bg-zinc-800 text-white px-3 py-2 rounded-lg text-sm font-medium whitespace-nowrap shadow-xl opacity-0 group-hover:opacity-100 transition-all duration-300 translate-x-[-10px] group-hover:translate-x-0 pointer-events-none z-50">
                Contact
              </div>
            </div>
          </Reveal>
        </div>
      </aside>
    </>
  );
}

export default NavBar;
