import Reveal from "./Reveal";
import { FiCode, FiLayers, FiTerminal, FiCheckCircle } from "react-icons/fi";
import { useInView } from "../hooks/useInView";
import { useCounter } from "../hooks/useCounter";

function CleanStat({
  target,
  suffix,
  label,
  description,
  start,
}: {
  target: number;
  suffix: string;
  label: string;
  description: string;
  start: boolean;
}) {
  const count = useCounter(target, 1200, start);

  return (
    <div className="py-4 first:pt-0 last:pb-0 border-b last:border-b-0 border-zinc-200/80 group">
      <div className="flex items-baseline justify-between gap-3">
        <span className="text-3xl sm:text-4xl font-extrabold text-zinc-950 font-orbitron tracking-tight group-hover:translate-x-1 transition-transform">
          {count}
          <span className="text-zinc-500 font-normal">{suffix}</span>
        </span>
        <span className="text-xs sm:text-sm font-semibold text-zinc-900 text-right">
          {label}
        </span>
      </div>
      <p className="text-xs text-zinc-500 mt-1">
        {description}
      </p>
    </div>
  );
}

export default function About() {
  const { ref: statsRef, inView: statsInView } = useInView<HTMLDivElement>({ threshold: 0.2 });

  const statItems = [
    { target: 5, suffix: "+", label: "Years Experience", description: "Production full-stack & frontend engineering" },
    { target: 20, suffix: "+", label: "Projects Built", description: "Web platforms, developer tools & desktop software" },
    { target: 80, suffix: "%", label: "Client Satisfaction", description: "Consistent quality, clean code & on-time delivery" },
  ];

  const pillars = [
    {
      icon: <FiCode className="text-zinc-950 text-xl" />,
      title: "Frontend Engineering",
      description:
        "Building fast, accessible, responsive user interfaces with React, TypeScript, and modern CSS architecture.",
      tags: ["React", "TypeScript", "Tailwind CSS", "Vite"],
    },
    {
      icon: <FiLayers className="text-zinc-950 text-xl" />,
      title: "Full-Stack Architecture",
      description:
        "Developing dependable backends, clean REST APIs, database schemas, and scalable services with Python & Node.",
      tags: ["Python", "Flask", "REST APIs", "MySQL"],
    },
    {
      icon: <FiTerminal className="text-zinc-950 text-xl" />,
      title: "Desktop & Developer Tools",
      description:
        "Crafting cross-platform desktop applications and developer productivity extensions using Electron and VS Code APIs.",
      tags: ["Electron", "VS Code APIs", "Desktop Apps", "Git"],
    },
  ];

  return (
    <section id="about" className="section-block bg-zinc-50/60 border-y border-zinc-200">
      <div className="mx-auto max-w-6xl px-6 lg:px-12">
        {/* Section Header */}
        <div className="mb-12">
          <Reveal animation="fade-up" distance={20}>
            <span className="text-zinc-500 font-mono text-xs tracking-[0.25em] uppercase mb-2 block font-semibold">
              &gt; ABOUT ME
            </span>
          </Reveal>
          <Reveal animation="fade-up" distance={20} delayMs={80}>
            <h2 className="text-3xl sm:text-4xl font-bold text-zinc-950 tracking-tight">
              Full-Stack &amp; Frontend Engineer
            </h2>
          </Reveal>
        </div>

        {/* Side-by-Side Story & Metrics (Clean & Less Boxy) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start pb-12">
          {/* Left Column: Narrative (7 cols) */}
          <div className="lg:col-span-7 flex flex-col justify-between">
            <Reveal animation="fade-up" distance={20} delayMs={140}>
              <h3 className="text-xl sm:text-2xl font-bold text-zinc-950 leading-snug mb-5">
                Turning complex requirements into fast, reliable software.
              </h3>
              <p className="text-zinc-600 text-base sm:text-lg leading-relaxed mb-6">
                Full-stack engineer building fast, scalable web apps, desktop tools, and robust APIs with a focus on clean architecture and pixel-perfect design.
              </p>

              {/* Minimal inline value pillars with checkmarks */}
              <div className="flex flex-wrap items-center gap-x-6 gap-y-2 pt-6 mt-6 border-t border-zinc-200">
                <div className="flex items-center gap-2 text-xs font-semibold text-zinc-900">
                  <FiCheckCircle className="text-zinc-950 text-sm shrink-0" />
                  <span>Clean Architecture</span>
                </div>
                <div className="flex items-center gap-2 text-xs font-semibold text-zinc-900">
                  <FiCheckCircle className="text-zinc-950 text-sm shrink-0" />
                  <span>Responsive First</span>
                </div>
                <div className="flex items-center gap-2 text-xs font-semibold text-zinc-900">
                  <FiCheckCircle className="text-zinc-950 text-sm shrink-0" />
                  <span>High Performance</span>
                </div>
              </div>
            </Reveal>
          </div>

          {/* Right Column: Key Metrics (5 cols) */}
          <div className="lg:col-span-5">
            <Reveal animation="fade-up" distance={20} delayMs={200}>
              <div
                ref={statsRef}
                className="rounded-2xl border border-zinc-200/80 bg-white/90 backdrop-blur-xs p-6 sm:p-7 shadow-sm"
              >
                <div className="text-xs font-mono text-zinc-400 uppercase tracking-wider mb-4 pb-2 border-b border-zinc-100 font-semibold">
                  Highlights
                </div>
                <div>
                  {statItems.map((stat) => (
                    <CleanStat
                      key={stat.label}
                      target={stat.target}
                      suffix={stat.suffix}
                      label={stat.label}
                      description={stat.description}
                      start={statsInView}
                    />
                  ))}
                </div>
              </div>
            </Reveal>
          </div>
        </div>

        {/* Core Pillars: 3 Open Columns with hairline dividers (No enclosing boxes) */}
        <div className="pt-10 border-t border-zinc-200">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-10 md:divide-x md:divide-zinc-200">
            {pillars.map((pillar, idx) => (
              <Reveal
                key={pillar.title}
                animation="fade-up"
                distance={20}
                delayMs={240 + idx * 80}
              >
                <div className={`flex flex-col justify-between h-full ${idx !== 0 ? "md:pl-10" : ""}`}>
                  <div>
                    <div className="flex items-center gap-3 mb-3">
                      <div className="w-10 h-10 rounded-xl bg-white border border-zinc-200 flex items-center justify-center shadow-xs">
                        {pillar.icon}
                      </div>
                      <h4 className="text-base font-bold text-zinc-950">
                        {pillar.title}
                      </h4>
                    </div>
                    <p className="text-xs sm:text-sm text-zinc-600 leading-relaxed mb-4">
                      {pillar.description}
                    </p>
                  </div>

                  <div className="flex flex-wrap gap-1.5 pt-2">
                    {pillar.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-2.5 py-1 rounded-md bg-white border border-zinc-200 text-[11px] font-mono text-zinc-700 shadow-2xs"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
