import { useMemo, useState } from "react";
import { useScrollSpy } from "../hooks/useScrollSpy";
import { HiBars3, HiXMark } from "react-icons/hi2";

interface NavItem {
  id: string;
  label: string;
}

export default function NavBar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const sections = useMemo(
    () => ["home", "about", "experience", "projects", "skills", "contact"],
    []
  );
  const activeId = useScrollSpy(sections);

  const navItems: NavItem[] = [
    { id: "home", label: "Home" },
    { id: "about", label: "About" },
    { id: "experience", label: "Experience" },
    { id: "projects", label: "Projects" },
    { id: "skills", label: "Skills" },
    // { id: "contact", label: "Contact" },
  ];

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const closeMenu = () => setIsMenuOpen(false);

  return (
    <>
      <header className="fixed top-4 left-0 right-0 z-50 flex justify-center px-4 pointer-events-none">
        <nav
          className="pointer-events-auto w-full max-w-4xl flex items-center justify-between px-3 sm:px-5 py-2.5 rounded-full bg-white/90 backdrop-blur-md border border-zinc-200 shadow-lg shadow-zinc-900/5 transition-all duration-300"
          aria-label="Main Navigation"
        >
          {/* Brand Logo */}
          <a
            href="#home"
            className="flex items-center gap-2.5 px-1 py-1 rounded-full group transition-transform hover:scale-105"
            aria-label="Emmanuel Chijioke - Home"
          >
            <img
              src="/EC.png"
              alt="Emmanuel Chijioke Logo"
              className="w-8 h-8 rounded-full object-contain bg-white shadow-xs border border-zinc-200"
            />
            <span className="font-bold text-sm tracking-tight text-zinc-900 group-hover:text-zinc-600 transition-colors hidden sm:inline-block">
              Emmanuel C.
            </span>
          </a>

          {/* Desktop Nav Items */}
          <div className="hidden md:flex items-center gap-1">
            {navItems.map((item) => {
              const isActive = activeId === item.id;
              return (
                <a
                  key={item.id}
                  href={`#${item.id}`}
                  className={`nav-partial-underline relative px-3.5 py-1.5 text-xs lg:text-sm font-medium transition-colors duration-200 ${
                    isActive
                      ? "text-zinc-950 font-semibold active"
                      : "text-zinc-600 hover:text-zinc-950"
                  }`}
                >
                  {item.label}
                </a>
              );
            })}
          </div>

          {/* Right Action CTA & Mobile Toggle */}
          <div className="flex items-center gap-2">
            <a
              href="#contact"
              className="hidden sm:inline-flex items-center px-4 py-1.5 rounded-full bg-zinc-950 text-white font-medium text-xs hover:bg-black transition-colors shadow-xs"
            >
              Let's Talk
            </a>

            {/* Mobile Hamburger Toggle */}
            <button
              onClick={toggleMenu}
              className="md:hidden p-2 rounded-lg text-zinc-600 hover:text-zinc-950 hover:bg-zinc-100 transition-colors"
              aria-label={isMenuOpen ? "Close menu" : "Open menu"}
              aria-expanded={isMenuOpen}
            >
              {isMenuOpen ? <HiXMark size={20} /> : <HiBars3 size={20} />}
            </button>
          </div>
        </nav>
      </header>

      {/* Mobile Menu Backdrop */}
      <div
        className={`fixed inset-0 bg-black/40 backdrop-blur-sm z-40 transition-opacity duration-300 md:hidden ${
          isMenuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
        onClick={closeMenu}
      />

      {/* Mobile Drawer / Dropdown */}
      <div
        className={`fixed top-20 left-4 right-4 z-40 p-4 rounded-2xl bg-white/95 backdrop-blur-lg border border-zinc-200 shadow-2xl transition-all duration-300 md:hidden ${
          isMenuOpen
            ? "translate-y-0 opacity-100 pointer-events-auto"
            : "-translate-y-4 opacity-0 pointer-events-none"
        }`}
      >
        <div className="flex flex-col gap-1">
          {navItems.map((item) => {
            const isActive = activeId === item.id;
            return (
              <a
                key={item.id}
                href={`#${item.id}`}
                onClick={closeMenu}
                className={`px-4 py-2.5 rounded-xl text-sm font-medium transition-colors flex items-center justify-between ${
                  isActive
                    ? "bg-zinc-100 text-zinc-950 font-semibold"
                    : "text-zinc-700 hover:bg-zinc-100"
                }`}
              >
                <span>{item.label}</span>
                {isActive && <span className="w-1.5 h-1.5 rounded-full bg-zinc-950" />}
              </a>
            );
          })}
          <div className="pt-2 mt-2 border-t border-zinc-100">
            <a
              href="#contact"
              onClick={closeMenu}
              className="w-full flex items-center justify-center py-2.5 rounded-xl bg-zinc-950 text-white text-sm font-medium hover:bg-black transition-colors"
            >
              Let's Talk
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
