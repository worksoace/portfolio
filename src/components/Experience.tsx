import { useState, useRef, useEffect } from "react";
import Reveal from "./Reveal";
import { FaReact, FaCode } from "react-icons/fa";
import { FiBriefcase, FiChevronLeft, FiChevronRight } from "react-icons/fi";

const experiences = [
  {
    company: "Freelance Practice",
    title: "Full-Stack Developer",
    period: "2021 – Present",
    roleType: "Lead Engineer",
    icon: <FaCode />,
    description:
      "Architecting web applications, desktop tools, and custom UI systems for clients.",
    highlights: [
      "Shipped 10+ web platforms, APIs, and cross-platform desktop tools",
      "Managed full project lifecycles from architecture to deployment",
    ],
    tech: ["React", "TypeScript", "Python", "Electron", "Tailwind"],
  },
  {
    company: "Web Development Agency",
    title: "Frontend Developer",
    period: "2020 – 2021",
    roleType: "Frontend Core",
    icon: <FaReact />,
    description:
      "Built accessible frontend interfaces, component systems, and high-speed web apps.",
    highlights: [
      "Engineered responsive applications and shared component libraries",
      "Optimized performance and Core Web Vitals across client sites",
    ],
    tech: ["React", "JavaScript", "Tailwind CSS", "REST APIs", "Git"],
  },
  {
    company: "Web Studio",
    title: "Junior Frontend Developer",
    period: "2019 – 2020",
    roleType: "Web Developer",
    icon: <FaCode />,
    description:
      "Developed responsive client websites, interactive landing pages, and layouts.",
    highlights: [
      "Converted wireframes into clean, semantic HTML/CSS and JavaScript",
      "Built mobile-first layouts with backend PHP & MySQL integration",
    ],
    tech: ["JavaScript", "HTML5", "CSS3", "PHP", "Git"],
  },
];

export default function Experience() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);
  const [activeIndex, setActiveIndex] = useState(0);

  const checkScroll = () => {
    if (scrollRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current;
      setCanScrollLeft(scrollLeft > 10);
      setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 10);

      const cardWidth = 340;
      const index = Math.round(scrollLeft / cardWidth);
      setActiveIndex(Math.min(experiences.length - 1, Math.max(0, index)));
    }
  };

  useEffect(() => {
    checkScroll();
    window.addEventListener("resize", checkScroll);
    return () => window.removeEventListener("resize", checkScroll);
  }, []);

  const handleScroll = (direction: "left" | "right") => {
    if (scrollRef.current) {
      const scrollAmount = 350;
      scrollRef.current.scrollBy({
        left: direction === "left" ? -scrollAmount : scrollAmount,
        behavior: "smooth",
      });
    }
  };

  const scrollToCard = (index: number) => {
    if (scrollRef.current) {
      const children = scrollRef.current.children;
      if (children[index]) {
        children[index].scrollIntoView({
          behavior: "smooth",
          inline: "start",
          block: "nearest",
        });
      }
    }
  };

  return (
    <section id="experience" className="section-block bg-white overflow-hidden scroll-mt-20 pt-16 sm:pt-20 lg:pt-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-12">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-6 sm:mb-8">
          <Reveal animation="fade-up" distance={20}>
            <span className="text-zinc-500 font-mono text-xs tracking-[0.25em] uppercase mb-1.5 sm:mb-2 block font-semibold">
              &gt; CAREER PATH
            </span>
          </Reveal>
          <Reveal animation="fade-up" distance={20} delayMs={80}>
            <h2 className="text-2xl sm:text-4xl font-bold text-zinc-950 tracking-tight mb-2">
              Professional Journey
            </h2>
          </Reveal>
          <Reveal animation="fade-up" distance={20} delayMs={140}>
            <p className="text-zinc-600 text-xs sm:text-sm leading-relaxed">
              Roles, client work, and engineering milestones.
            </p>
          </Reveal>
        </div>

        {/* Carousel Toolbar: Period Jump Tabs & Chevron Navigation on a Single Row */}
        <Reveal animation="fade-up" distance={20} delayMs={180}>
          <div className="flex items-center justify-between gap-2 mb-4 sm:mb-6 pb-3 border-b border-zinc-200">
            {/* Year / Period Tabs */}
            <div className="flex items-center gap-1.5 overflow-x-auto no-scrollbar py-0.5">
              {experiences.map((exp, idx) => (
                <button
                  key={exp.company}
                  onClick={() => scrollToCard(idx)}
                  className={`px-2.5 sm:px-3.5 py-1 sm:py-1.5 rounded-full text-[11px] sm:text-xs font-mono transition-all duration-150 flex items-center gap-1 shrink-0 ${
                    activeIndex === idx
                      ? "bg-zinc-950 text-white font-bold shadow-xs scale-105"
                      : "bg-zinc-100 text-zinc-600 hover:text-zinc-950 hover:bg-zinc-200"
                  }`}
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-current" />
                  <span>{exp.period}</span>
                </button>
              ))}
            </div>

            {/* Navigation Arrows */}
            <div className="flex items-center gap-1 shrink-0 ml-2">
              <span className="text-[11px] font-mono text-zinc-400 mr-1 hidden sm:inline-block">
                {activeIndex + 1} of {experiences.length}
              </span>
              <button
                onClick={() => handleScroll("left")}
                disabled={!canScrollLeft}
                aria-label="Previous experience"
                className="w-7 h-7 sm:w-8 sm:h-8 rounded-full border border-zinc-200 bg-white flex items-center justify-center text-zinc-700 hover:text-zinc-950 hover:border-zinc-950 disabled:opacity-30 disabled:pointer-events-none transition-all shadow-xs active:scale-95"
              >
                <FiChevronLeft size={16} />
              </button>
              <button
                onClick={() => handleScroll("right")}
                disabled={!canScrollRight}
                aria-label="Next experience"
                className="w-7 h-7 sm:w-8 sm:h-8 rounded-full border border-zinc-200 bg-white flex items-center justify-center text-zinc-700 hover:text-zinc-950 hover:border-zinc-950 disabled:opacity-30 disabled:pointer-events-none transition-all shadow-xs active:scale-95"
              >
                <FiChevronRight size={16} />
              </button>
            </div>
          </div>
        </Reveal>

        {/* Side-by-Side Horizontal Carousel Track with Compact Cards */}
        <div
          ref={scrollRef}
          onScroll={checkScroll}
          className="flex gap-3 sm:gap-5 overflow-x-auto snap-x snap-mandatory scroll-smooth pb-4 pt-1 no-scrollbar"
        >
          {experiences.map((exp) => (
            <div
              key={exp.company}
              className="w-[82vw] sm:w-[340px] md:w-[360px] max-w-[360px] flex-shrink-0 snap-start flex flex-col"
            >
              <div className="h-full rounded-2xl border border-zinc-200 bg-zinc-50/70 p-4 sm:p-5 flex flex-col justify-between hover:border-zinc-950 transition-all duration-200 shadow-xs group">
                <div>
                  {/* Top Header: Icon + Role Type */}
                  <div className="flex items-center justify-between gap-2 mb-3">
                    <div className="w-8 h-8 sm:w-9 sm:h-9 rounded-lg bg-white border border-zinc-200 flex items-center justify-center text-zinc-950 shadow-xs text-sm">
                      {exp.icon}
                    </div>
                    <span className="text-[11px] font-mono text-zinc-600 bg-white px-2.5 py-0.5 rounded-full border border-zinc-200 shadow-2xs">
                      {exp.roleType}
                    </span>
                  </div>

                  {/* Title & Company */}
                  <div className="mb-2.5">
                    <h3 className="text-sm sm:text-base font-bold text-zinc-950 group-hover:text-zinc-700 transition-colors">
                      {exp.title}
                    </h3>
                    <div className="flex items-center gap-1.5 text-xs font-medium text-zinc-500 mt-0.5">
                      <FiBriefcase size={12} className="text-zinc-900" />
                      <span>{exp.company}</span>
                    </div>
                  </div>

                  {/* Concise Description */}
                  <p className="text-xs text-zinc-600 leading-relaxed mb-3">
                    {exp.description}
                  </p>

                  {/* Highlights (2 punchy bullets) */}
                  <div className="mb-3 space-y-1.5">
                    {exp.highlights.map((h, i) => (
                      <div
                        key={i}
                        className="text-xs text-zinc-600 flex items-start gap-2"
                      >
                        <span className="w-1.5 h-1.5 rounded-full bg-zinc-950 flex-shrink-0 mt-1.5" />
                        <span className="leading-snug">{h}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Tech Tags */}
                <div className="flex flex-wrap gap-1 pt-3 border-t border-zinc-200/80">
                  {exp.tech.map((t) => (
                    <span
                      key={t}
                      className="text-[10px] sm:text-[11px] font-mono px-2 py-0.5 rounded-md bg-white border border-zinc-200 text-zinc-700 shadow-2xs"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Clean Swipe / Progress Indicator */}
        <div className="flex items-center justify-between text-[11px] font-mono text-zinc-400 pt-2.5 border-t border-zinc-200/60 mt-1">
          <span>← Swipe to explore →</span>
          <span>{activeIndex + 1} of {experiences.length}</span>
        </div>
      </div>
    </section>
  );
}
