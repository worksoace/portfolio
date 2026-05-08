import Reveal from "./Reveal";
import { FaReact, FaPaintBrush, FaCode } from "react-icons/fa";

const experiences = [
  {
    company: "Freelance Developer",
    title: "Full-Stack Developer & Graphics Designer",
    period: "2021 – Present",
    icon: <FaCode />,
    description:
      "Developed modern web applications using React, TypeScript, HTML, CSS, and Python. Created compelling graphic designs using Adobe Creative Suite and Figma.",
    achievements: [
      "Built 15+ responsive web applications",
      "Created 50+ graphic design projects",
    ],
  },
  {
    company: "Web Development Agency",
    title: "Frontend Developer & UI/UX Designer",
    period: "2020 – 2021",
    icon: <FaReact />,
    description:
      "Led frontend development for client projects using React, TypeScript, and Tailwind CSS. Designed user interfaces and implemented responsive, performant layouts.",
    achievements: [
      "Developed 20+ websites",
      "Created comprehensive design systems",
    ],
  },
  {
    company: "Digital Design Studio",
    title: "Graphics Designer & Web Developer",
    period: "2019 – 2020",
    icon: <FaPaintBrush />,
    description:
      "Created brand identities and user interfaces for various clients. Developed responsive websites and designed marketing materials using Adobe tools and Canva.",
    achievements: [
      "Designed 10+ brand identities",
      "Created mobile-first responsive designs",
    ],
  },
];

export default function Experience() {
  return (
    <section id="experience" className="section-block">
      <div className="mx-auto max-w-2xl">
        <div className="text-center mb-12">
          <Reveal animation="fade-up" distance={30}>
            <span className="text-brand font-mono text-xs tracking-[0.3em] uppercase mb-3 block">
              &gt; experience
            </span>
          </Reveal>
          <Reveal animation="fade-up" distance={30} delayMs={100}>
            <h2 className="text-4xl font-bold text-zinc-900 dark:text-white">
              Professional Journey
            </h2>
          </Reveal>
        </div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-5 top-0 bottom-0 w-px bg-zinc-200 dark:bg-zinc-800" />

          <div className="space-y-10">
            {experiences.map((exp, idx) => (
              <Reveal
                key={exp.company}
                animation="fade-up"
                distance={30}
                delayMs={idx * 150}
              >
                <div className="relative flex gap-8 pl-16">
                  {/* Icon dot */}
                  <div className="absolute left-0 top-1 w-10 h-10 rounded-full bg-white dark:bg-zinc-950 border border-zinc-200 dark:border-zinc-800 flex items-center justify-center text-brand text-sm">
                    {exp.icon}
                  </div>

                  <div className="flex-1">
                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-2 gap-1">
                      <div>
                        <h3 className="text-base font-semibold text-zinc-900 dark:text-white">
                          {exp.title}
                        </h3>
                        <span className="text-sm text-zinc-500 dark:text-zinc-400">
                          {exp.company}
                        </span>
                      </div>
                      <span className="text-xs font-mono text-brand bg-brand/10 px-3 py-1 rounded-full self-start sm:self-auto whitespace-nowrap">
                        {exp.period}
                      </span>
                    </div>
                    <p className="text-sm text-zinc-500 dark:text-zinc-400 leading-relaxed mb-3">
                      {exp.description}
                    </p>
                    <ul className="space-y-1">
                      {exp.achievements.map((a, i) => (
                        <li
                          key={i}
                          className="text-xs text-zinc-400 dark:text-zinc-500 flex items-center gap-2"
                        >
                          <span className="w-1.5 h-1.5 rounded-full bg-brand flex-shrink-0" />
                          {a}
                        </li>
                      ))}
                    </ul>
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
