import Reveal from "./Reveal";
import ScrollArrows from "./ScrollArrows";
import { FaReact, FaPaintBrush, FaCode } from "react-icons/fa";

const experiences = [
  {
    company: "Freelance Developer",
    title: "Full-Stack Developer & Graphics Designer",
    period: "2021 - Present",
    icon: <FaCode className="text-blue-500" />,
    description:
      "Developed modern web applications using React, TypeScript, HTML, CSS, and Python. Created compelling graphics designs using Adobe Creative Suite and Figma. Collaborated with clients to deliver custom solutions and brand identities.",
    achievements: [
      "Built 15+ responsive web applications",
      "Created 50+ graphic design projects",
      // "Improved client conversion rates by 25%",
    ],
  },
  {
    company: "Web Development Agency",
    title: "Frontend Developer & UI/UX Designer",
    period: "2020 - 2021",
    icon: <FaReact className="text-blue-400" />,
    description:
      "Led frontend development for various client projects using React, TypeScript, and Tailwind CSS. Designed user interfaces and created brand identities. Implemented responsive designs and optimized performance.",
    achievements: [
      "Developed 20+ websites",
      "Created comprehensive design systems",
      // "Improved user engagement by 35%",
    ],
  },
  {
    company: "Digital Design Studio",
    title: "Graphics Designer & Web Developer",
    period: "2019 - 2020",
    icon: <FaPaintBrush className="text-pink-500" />,
    description:
      "Created compelling brand identities and user interfaces for various clients. Developed responsive websites using HTML, CSS, and JavaScript. Designed marketing materials and social media graphics using Adobe tools and Canva.",
    achievements: [
      "Designed 10+ brand identities",
      "Created mobile-first responsive designs",
      // "Produced 100+ marketing materials",
    ],
  },
];

export default function Experience() {
  return (
    <section
      id="experience"
      className="fullscreen-section bg-gradient-to-b from-zinc-50/80 dark:from-zinc-900/80 to-transparent"
    >
      <div className="mx-auto max-w-7xl px-4 py-16">
        <div className="text-center mb-16">
          <Reveal animation="fade-up" distance={30}>
            <span className="text-blue-600 text-2xl font-bold tracking-wider">
              EXPERIENCE
            </span>
          </Reveal>
          <Reveal animation="fade-up" distance={30} delayMs={100}>
            <h2 className="text-5xl font-bold text-zinc-900 dark:text-white mt-2 mb-6">
              Professional Journey
            </h2>
          </Reveal>
          <Reveal animation="fade-up" distance={30} delayMs={200}>
            <p className="text-lg text-zinc-600 dark:text-zinc-300 max-w-2xl mx-auto">
              My career path showcasing growth, achievements, and the evolution
              of my skills in web development and graphic design.
            </p>
          </Reveal>
        </div>

        <div className="relative">
          <div className="absolute left-8 top-0 bottom-0 w-1 bg-gradient-to-b from-brand/60 to-brand/20 rounded-full"></div>

          <div className="space-y-12">
            {experiences.map((exp, idx) => (
              <Reveal
                key={exp.company}
                animation="fade-left"
                distance={40}
                delayMs={idx * 200}
              >
                <div className="relative flex items-start gap-8 group">
                  <div className="relative z-10 flex items-center justify-center w-16 h-16 rounded-2xl bg-white dark:bg-zinc-800 border-4 border-brand shadow-lg group-hover:scale-110 transition-transform">
                    {exp.icon}
                  </div>

                  <div className="flex-1 bg-white/80 dark:bg-zinc-800/80 rounded-2xl shadow-xl p-8 border border-zinc-200 dark:border-zinc-700">
                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-4">
                      <div>
                        <h3 className="text-2xl font-bold text-zinc-900 dark:text-white mb-2">
                          {exp.title}
                        </h3>
                        <span className="text-lg text-zinc-600 dark:text-zinc-400 font-medium">
                          {exp.company}
                        </span>
                      </div>
                      <span className="text-sm text-brand font-semibold mt-2 sm:mt-0 bg-brand/10 px-3 py-1 rounded-full">
                        {exp.period}
                      </span>
                    </div>

                    <p className="text-zinc-700 dark:text-zinc-300 mb-6 leading-relaxed">
                      {exp.description}
                    </p>

                    {exp.achievements && (
                      <div>
                        <h4 className="text-sm font-semibold text-zinc-900 dark:text-white mb-3">
                          Key Achievements:
                        </h4>
                        <ul className="space-y-2">
                          {exp.achievements.map(
                            (achievement, achievementIdx) => (
                              <li
                                key={achievementIdx}
                                className="text-sm text-zinc-600 dark:text-zinc-400 flex items-center"
                              >
                                <span className="w-2 h-2 bg-brand rounded-full mr-3"></span>
                                {achievement}
                              </li>
                            )
                          )}
                        </ul>
                      </div>
                    )}
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
      <ScrollArrows prevId="about" nextId="projects" />
    </section>
  );
}
