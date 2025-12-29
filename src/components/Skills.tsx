import {
  FaReact,
  FaHtml5,
  FaCss3Alt,
  FaGitAlt,
  FaFigma,
  FaPaintBrush,
  FaPhp,
} from "react-icons/fa";
import {
  SiTypescript,
  SiTailwindcss,
  SiJavascript,
  SiAdobephotoshop,
  // SiAdobephotoshop,
  SiDjango,
  SiCanva,
} from "react-icons/si";
import { HiCodeBracket, HiPaintBrush } from "react-icons/hi2";
import ScrollArrows from "./ScrollArrows";
import Reveal from "./Reveal";

const skillCategories = [
  {
    title: "Frontend Development",
    skills: [
      {
        label: "React",
        icon: <FaReact className="text-blue-500" />,
        level: "Intermediate",
      },
      {
        label: "TypeScript",
        icon: <SiTypescript className="text-blue-600" />,
        level: "Intermediate",
      },
      {
        label: "JavaScript",
        icon: <SiJavascript className="text-yellow-500" />,
        level: "Intermediate",
      },
      {
        label: "HTML5",
        icon: <FaHtml5 className="text-orange-500" />,
        level: "Expert",
      },
      {
        label: "CSS3",
        icon: <FaCss3Alt className="text-blue-400" />,
        level: "Expert",
      },
      {
        label: "Tailwind CSS",
        icon: <SiTailwindcss className="text-cyan-500" />,
        level: "Expert",
      },
    ],
  },
  {
    title: "Backend Development",
    skills: [
      {
        label: "PHP",
        icon: <FaPhp className="text-purple-500" />,
        level: "Intermediate",
      },
      {
        label: "Django",
        icon: <SiDjango className="text-green-600" />,
        level: "Intermediate",
      },
      {
        label: "Git",
        icon: <FaGitAlt className="text-orange-500" />,
        level: "Expert",
      },
    ],
  },
  {
    title: "Design Tools",
    skills: [
      {
        label: "Figma",
        icon: <FaFigma className="text-purple-600" />,
        level: "Expert",
      },
      {
        label: "Adobe Photoshop",
        icon: <SiAdobephotoshop className="text-blue-500" />,
        level: "Expert",
      },
      {
        label: "Canva",
        icon: <SiCanva className="text-blue-400" />,
        level: "Expert",
      },
    ],
  },
  {
    title: "Design Skills",
    skills: [
      {
        label: "UI/UX Design",
        icon: <FaPaintBrush className="text-pink-500" />,
        level: "Expert",
      },
      {
        label: "Graphic Design",
        icon: <HiPaintBrush className="text-green-500" />,
        level: "Expert",
      },
      {
        label: "Web Design",
        icon: <HiCodeBracket className="text-blue-500" />,
        level: "Expert",
      },
    ],
  },
];

export default function Skills() {
  return (
    <section id="skills" className="fullscreen-section">
      <div className="mx-auto max-w-7xl px-4 py-16">
        <div className="text-center mb-16">
          <Reveal animation="fade-up" distance={30}>
            <span className="text-blue-600 text-2xl font-bold tracking-wider">
              SKILLS
            </span>
          </Reveal>
          <Reveal animation="fade-up" distance={30} delayMs={100}>
            <h2 className="text-5xl font-bold text-zinc-900 dark:text-white mt-2 mb-6">
              Technical Expertise
            </h2>
          </Reveal>
          <Reveal animation="fade-up" distance={30} delayMs={200}>
            <p className="text-lg text-zinc-600 dark:text-zinc-300 max-w-2xl mx-auto">
              A comprehensive overview of my technical skills and expertise
              across frontend development, backend technologies, and design
              tools.
            </p>
          </Reveal>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {skillCategories.map((category, categoryIdx) => (
            <Reveal
              key={category.title}
              animation="fade-up"
              distance={30}
              delayMs={categoryIdx * 200}
            >
              <div className="bg-white/80 dark:bg-zinc-800/80 rounded-2xl p-8 border border-zinc-200 dark:border-zinc-700 shadow-xl">
                <h3 className="text-2xl font-bold text-zinc-900 dark:text-white mb-8 text-center">
                  {category.title}
                </h3>
                <div className="grid grid-cols-2 gap-4">
                  {category.skills.map((skill, skillIdx) => (
                    <Reveal
                      key={skill.label}
                      animation="zoom"
                      distance={20}
                      delayMs={categoryIdx * 200 + skillIdx * 100}
                    >
                      <div className="flex items-center gap-3 p-4 rounded-xl bg-zinc-50 dark:bg-zinc-900/50 hover:bg-zinc-100 dark:hover:bg-zinc-900 transition-colors border border-zinc-200 dark:border-zinc-700">
                        <span className="text-2xl">{skill.icon}</span>
                        <div className="flex-1">
                          <span className="text-sm font-semibold text-zinc-900 dark:text-white">
                            {skill.label}
                          </span>
                          <div className="text-xs text-zinc-500 dark:text-zinc-400">
                            {skill.level}
                          </div>
                        </div>
                      </div>
                    </Reveal>
                  ))}
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
      <ScrollArrows prevId="projects" nextId="contact" />
    </section>
  );
}
