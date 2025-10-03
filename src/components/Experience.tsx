import Reveal from "./Reveal";
import ScrollArrows from "./ScrollArrows";
import { FaReact, FaPaintBrush } from "react-icons/fa";

const experiences = [
  {
    company: "Company A",
    title: "Frontend Developer",
    period: "2022 - Present",
    icon: <FaReact className="text-blue-500" />,
    description:
      "Developed modern, responsive web apps with React, TypeScript, and Tailwind. Collaborated with designers and backend engineers to deliver seamless user experiences.",
  },
  {
    company: "Company B",
    title: "Graphic Designer",
    period: "2020 - 2022",
    icon: <FaPaintBrush className="text-pink-500" />,
    description:
      "Created brand identities, marketing materials, and engaging graphics for digital campaigns. Enhanced UI/UX with creative visuals and illustrations.",
  },
];

export default function Experience() {
  return (
    <section
      id="experience"
      className="fullscreen-section bg-gradient-to-b from-zinc-50/80 dark:from-zinc-900/80 to-transparent"
    >
      <div className="mx-auto max-w-6xl px-4 py-16">
        <Reveal>
          <h2 className="text-2xl font-semibold text-zinc-900 dark:text-white mb-8">
            Experience
          </h2>
        </Reveal>
        <div className="relative pl-6 before:absolute before:top-0 before:left-2 before:bottom-0 before:w-1 before:bg-gradient-to-b before:from-blue-400/60 before:to-pink-400/60">
          {experiences.map((exp, idx) => (
            <Reveal key={exp.company} delayMs={idx * 100}>
              <div className="relative mb-10 flex items-start gap-5 group">
                <div className="z-10 flex items-center justify-center w-10 h-10 rounded-full bg-white dark:bg-zinc-900 border-2 border-blue-400 dark:border-pink-400 shadow-lg group-hover:scale-110 transition-transform">
                  {exp.icon}
                </div>
                <div className="flex-1 bg-white/80 dark:bg-zinc-800/80 rounded-xl shadow p-5 border border-zinc-200 dark:border-zinc-700">
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
                    <div>
                      <h3 className="text-lg font-semibold text-zinc-900 dark:text-white">
                        {exp.title}
                      </h3>
                      <span className="text-sm text-zinc-500 dark:text-zinc-400">
                        {exp.company}
                      </span>
                    </div>
                    <span className="text-xs text-blue-500 dark:text-pink-400 font-medium mt-2 sm:mt-0">
                      {exp.period}
                    </span>
                  </div>
                  <p className="mt-2 text-zinc-700 dark:text-zinc-300 text-sm">
                    {exp.description}
                  </p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
      <ScrollArrows prevId="about" nextId="projects" />
    </section>
  );
}
