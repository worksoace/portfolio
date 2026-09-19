import { useMemo, useCallback } from "react";
import { useScrollSpy } from "../hooks/useScrollSpy";
import {
  HiHome,
  HiUser,
  HiBriefcase,
  HiSquares2X2,
  HiCommandLine,
  HiEnvelope,
} from "react-icons/hi2";

interface NavItem {
  id: string;
  label: string;
  icon: React.ComponentType<{ size?: number; className?: string }>;
}

export default function NavBar() {
  const sections = useMemo(
    () => ["home", "about", "experience", "projects", "skills", "contact"],
    []
  );
  const { activeId, setActiveId } = useScrollSpy(sections);

  const navItems: NavItem[] = [
    { id: "home", label: "Home", icon: HiHome },
    { id: "about", label: "About", icon: HiUser },
    { id: "experience", label: "Experience", icon: HiBriefcase },
    { id: "projects", label: "Projects", icon: HiSquares2X2 },
    { id: "skills", label: "Skills", icon: HiCommandLine },
  ];

  const handleNavClick = useCallback(
    (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
      e.preventDefault();
      // Instantly highlight the target tab with zero latency
      setActiveId(id);

      const target = document.getElementById(id);
      if (target) {
        const navOffset = 70;
        const targetTop = target.getBoundingClientRect().top + window.scrollY - navOffset;
        window.scrollTo({
          top: targetTop,
          behavior: "smooth",
        });
      }
    },
    [setActiveId]
  );

  return (
    <header className="fixed top-3 sm:top-4 left-0 right-0 z-50 flex justify-center px-3 sm:px-4 pointer-events-none">
      <nav
        className="pointer-events-auto w-full max-w-4xl flex items-center justify-between px-2.5 sm:px-5 py-2 sm:py-2.5 rounded-full bg-white/95 backdrop-blur-md border border-zinc-200 shadow-md shadow-zinc-950/5"
        aria-label="Main Navigation"
      >
        {/* Brand Logo */}
        <a
          href="#home"
          onClick={(e) => handleNavClick(e, "home")}
          className="flex items-center gap-2 p-1 rounded-full group transition-transform active:scale-95 shrink-0"
          aria-label="Emmanuel Chijioke - Home"
        >
          <img
            src="/EC.webp"
            alt="Emmanuel Chijioke Logo"
            width={32}
            height={32}
            decoding="async"
            className="w-7 h-7 sm:w-8 sm:h-8 rounded-full object-contain bg-white shadow-xs border border-zinc-200"
          />
          <span className="font-bold text-sm tracking-tight text-zinc-900 group-hover:text-zinc-600 transition-colors hidden sm:inline-block">
            Emmanuel C.
          </span>
        </a>

        {/* Desktop Nav Items (Text with partial underline) */}
        <div className="hidden md:flex items-center gap-1">
          {navItems.map((item) => {
            const isActive = activeId === item.id;
            return (
              <a
                key={item.id}
                href={`#${item.id}`}
                onClick={(e) => handleNavClick(e, item.id)}
                className={`nav-partial-underline relative px-3.5 py-1.5 text-xs lg:text-sm font-medium transition-colors duration-150 active:scale-95 ${
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

        {/* Desktop Action CTA */}
        <div className="hidden md:flex items-center gap-2">
          <a
            href="#contact"
            onClick={(e) => handleNavClick(e, "contact")}
            className="inline-flex items-center px-4 py-1.5 rounded-full bg-zinc-950 text-white font-medium text-xs hover:bg-black transition-colors active:scale-95 shadow-xs"
          >
            Let's Talk
          </a>
        </div>

        {/* Mobile Icon-Only Nav Items directly on TopNav */}
        <div
          className="flex md:hidden items-center gap-1"
          role="menubar"
          aria-label="Mobile Navigation Bar"
        >
          {navItems.map((item) => {
            const isActive = activeId === item.id;
            const Icon = item.icon;
            return (
              <a
                key={item.id}
                href={`#${item.id}`}
                onClick={(e) => handleNavClick(e, item.id)}
                aria-label={item.label}
                title={item.label}
                className={`w-8 h-8 rounded-full flex items-center justify-center transition-colors duration-150 active:scale-90 ${
                  isActive
                    ? "bg-zinc-950 text-white shadow-xs font-bold"
                    : "text-zinc-600 hover:text-zinc-950 hover:bg-zinc-100"
                }`}
              >
                <Icon size={16} />
              </a>
            );
          })}

          {/* Mobile Contact Quick Icon */}
          <a
            href="#contact"
            onClick={(e) => handleNavClick(e, "contact")}
            aria-label="Contact"
            title="Contact"
            className={`w-8 h-8 rounded-full flex items-center justify-center transition-colors duration-150 active:scale-90 ${
              activeId === "contact"
                ? "bg-zinc-950 text-white shadow-xs"
                : "text-zinc-600 hover:text-zinc-950 hover:bg-zinc-100"
            }`}
          >
            <HiEnvelope size={16} />
          </a>
        </div>
      </nav>
    </header>
  );
}
