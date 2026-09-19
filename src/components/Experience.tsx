import { useState, useRef, useEffect } from "react";
import Reveal from "./Reveal";
import { FaReact, FaCode } from "react-icons/fa";
import { FiBriefcase, FiCalendar, FiChevronLeft, FiChevronRight } from "react-icons/fi";

const experiences = [
  {
    company: "Freelance Practice",
    title: "Full-Stack Developer",
    period: "2021 – Present",
    roleType: "Lead Engineer",
    icon: <FaCode />,
    description:
      "Architecting full-stack web applications, desktop utilities, and custom UI systems for clients.",
    achievements: [
      "Delivered 10+ responsive web platforms, APIs, and developer tools",
      "Achieved a consistent 80% on-time delivery and client satisfaction record",
      "Managed client project lifecycles from architecture to deployment",
    ],
    tech: ["React", "TypeScript", "Python", "Electron", "Tailwind CSS"],
  },
  {
    company: "Web Development Agency",
    title: "Frontend Developer",
    period: "2020 – 2021",
    roleType: "Frontend Core",
    icon: <FaReact />,
    description:
      "Built accessible frontend interfaces, component libraries, and optimized Core Web Vitals.",
    achievements: [
      "Engineered 10+ responsive web applications and dashboards",
      "Architected reusable frontend component libraries across React applications",
      "Improved performance benchmarks across high-traffic landing pages",
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
      "Developed responsive client websites, interactive web pages, and cross-browser layouts.",
    achievements: [
      "Converted specifications and wireframes into clean, semantic HTML/CSS and JavaScript",
      "Maintained and optimized client web pages for fast loading and mobile responsiveness",
      "Collaborated on backend database integration with PHP & MySQL",
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

      // Estimate active card based on scroll position
      const cardWidth = 380;
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
      const scrollAmount = 400;
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
    <section id="experience" className="section-block bg-white overflow-hidden">
      <div className="mx-auto max-w-6xl px-6 lg:px-12">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-10">
          <Reveal animation="fade-up" distance={20}>
            <span className="text-zinc-500 font-mono text-xs tracking-[0.25em] uppercase mb-3 block font-semibold">
              &gt; CAREER PATH
            </span>
          </Reveal>
          <Reveal animation="fade-up" distance={20} delayMs={80}>
            <h2 className="text-3xl sm:text-4xl font-bold text-zinc-950 tracking-tight mb-3">
              Professional Journey
            </h2>
          </Reveal>
          <Reveal animation="fade-up" distance={20} delayMs={140}>
            <p className="text-zinc-600 text-base leading-relaxed">
              Roles, client work, and engineering milestones.
            </p>
          </Reveal>
        </div>

        {/* Carousel Toolbar: Period Jump Tabs & Chevron Navigation */}
        <Reveal animation="fade-up" distance={20} delayMs={200}>
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 mb-6 pb-4 border-b border-zinc-200">
            {/* Year / Period Tabs */}
            <div className="flex flex-wrap items-center gap-2">
              {experiences.map((exp, idx) => (
                <button
                  key={exp.company}
                  onClick={() => scrollToCard(idx)}
                  className={`px-3.5 py-1.5 rounded-full text-xs font-mono transition-all duration-200 flex items-center gap-1.5 ${
                    activeIndex === idx
                      ? "bg-zinc-950 text-white font-bold shadow-xs"
                      : "bg-zinc-100 text-zinc-600 hover:text-zinc-950 hover:bg-zinc-200"
                  }`}
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-current" />
                  <span>{exp.period}</span>
                </button>
              ))}
            </div>

            {/* Navigation Arrows */}
            <div className="flex items-center gap-2">
              <span className="text-xs font-mono text-zinc-400 mr-2 hidden sm:inline-block">
                {activeIndex + 1} of {experiences.length}
              </span>
              <button
                onClick={() => handleScroll("left")}
                disabled={!canScrollLeft}
                aria-label="Previous experience"
                className="w-9 h-9 rounded-full border border-zinc-200 bg-white flex items-center justify-center text-zinc-700 hover:text-zinc-950 hover:border-zinc-950 disabled:opacity-30 disabled:pointer-events-none transition-all shadow-xs"
              >
                <FiChevronLeft size={18} />
              </button>
              <button
                onClick={() => handleScroll("right")}
                disabled={!canScrollRight}
                aria-label="Next experience"
                className="w-9 h-9 rounded-full border border-zinc-200 bg-white flex items-center justify-center text-zinc-700 hover:text-zinc-950 hover:border-zinc-950 disabled:opacity-30 disabled:pointer-events-none transition-all shadow-xs"
              >
                <FiChevronRight size={18} />
              </button>
            </div>
          </div>
        </Reveal>

        {/* Side-by-Side Horizontal Carousel Track */}
        <div
          ref={scrollRef}
          onScroll={checkScroll}
          className="flex gap-6 overflow-x-auto snap-x snap-mandatory scroll-smooth pb-6 pt-2 no-scrollbar"
        >
          {experiences.map((exp, idx) => (
            <div
              key={exp.company}
              className="w-[310px] sm:w-[370px] md:w-[410px] flex-shrink-0 snap-start flex flex-col"
            >
              <div className="h-full rounded-2xl border border-zinc-200 bg-zinc-50/70 p-6 sm:p-7 flex flex-col justify-between hover:border-zinc-950 transition-all duration-300 shadow-xs group">
                <div>
                  {/* Top Bar: Icon + Period Badge */}
                  <div className="flex items-center justify-between gap-2 mb-4">
                    <div className="w-10 h-10 rounded-xl bg-white border border-zinc-200 flex items-center justify-center text-zinc-950 shadow-xs group-hover:scale-105 transition-transform">
                      {exp.icon}
                    </div>
                    <div className="inline-flex items-center gap-1.5 text-xs font-mono font-medium text-zinc-700 bg-white px-3 py-1 rounded-full border border-zinc-200 shadow-2xs">
                      <FiCalendar size={12} className="text-zinc-950" />
                      <span>{exp.period}</span>
                    </div>
                  </div>

                  {/* Title & Company */}
                  <div className="mb-3">
                    <span className="text-[11px] font-mono text-zinc-400 uppercase tracking-wider block mb-1">
                      0{idx + 1} · {exp.roleType}
                    </span>
                    <h3 className="text-lg sm:text-xl font-bold text-zinc-950 group-hover:text-zinc-700 transition-colors">
                      {exp.title}
                    </h3>
                    <div className="flex items-center gap-1.5 text-xs font-medium text-zinc-600 mt-1">
                      <FiBriefcase size={13} className="text-zinc-950" />
                      <span>{exp.company}</span>
                    </div>
                  </div>

                  {/* Description */}
                  <p className="text-xs sm:text-sm text-zinc-600 leading-relaxed mb-4">
                    {exp.description}
                  </p>

                  {/* Achievements */}
                  <div className="mb-5 space-y-1.5">
                    <span className="text-[11px] font-mono text-zinc-400 uppercase tracking-wider block mb-1">
                      Key Impact:
                    </span>
                    {exp.achievements.map((a, i) => (
                      <div
                        key={i}
                        className="text-xs text-zinc-600 flex items-start gap-2"
                      >
                        <span className="w-1.5 h-1.5 rounded-full bg-zinc-950 flex-shrink-0 mt-1.5" />
                        <span>{a}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Tech Tags */}
                <div className="flex flex-wrap gap-1.5 pt-4 border-t border-zinc-200">
                  {exp.tech.map((t) => (
                    <span
                      key={t}
                      className="text-[11px] font-mono px-2.5 py-0.5 rounded-md bg-white border border-zinc-200 text-zinc-700 shadow-2xs"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Swipe / Scroll Hint */}
        <div className="flex items-center justify-between text-xs font-mono text-zinc-400 pt-3 border-t border-zinc-200/60 mt-2">
          <span>← Drag or click tabs to navigate →</span>
          <span>{experiences.length} career milestones</span>
        </div>
      </div>
    </section>
  );
}
