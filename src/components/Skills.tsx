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
  SiDjango,
  SiCanva,
} from "react-icons/si";
import { HiCodeBracket, HiPaintBrush } from "react-icons/hi2";
import Reveal from "./Reveal";

const skillCategories = [
  {
    title: "Frontend",
    skills: [
      { label: "React", icon: <FaReact className="text-blue-400" /> },
      { label: "TypeScript", icon: <SiTypescript className="text-blue-500" /> },
      { label: "JavaScript", icon: <SiJavascript className="text-yellow-400" /> },
      { label: "HTML5", icon: <FaHtml5 className="text-orange-500" /> },
      { label: "CSS3", icon: <FaCss3Alt className="text-blue-400" /> },
      { label: "Tailwind", icon: <SiTailwindcss className="text-cyan-400" /> },
    ],
  },
  {
    title: "Backend",
    skills: [
      { label: "PHP", icon: <FaPhp className="text-purple-400" /> },
      { label: "Django", icon: <SiDjango className="text-green-500" /> },
      { label: "Git", icon: <FaGitAlt className="text-orange-500" /> },
    ],
  },
  {
    title: "Design Tools",
    skills: [
      { label: "Figma", icon: <FaFigma className="text-purple-500" /> },
      { label: "Photoshop", icon: <SiAdobephotoshop className="text-blue-500" /> },
      { label: "Canva", icon: <SiCanva className="text-blue-400" /> },
    ],
  },
  {
    title: "Design Skills",
    skills: [
      { label: "UI/UX Design", icon: <FaPaintBrush className="text-pink-400" /> },
      { label: "Graphic Design", icon: <HiPaintBrush className="text-green-400" /> },
      { label: "Web Design", icon: <HiCodeBracket className="text-brand" /> },
    ],
  },
];

export default function Skills() {
  return (
    <section id="skills" className="section-block bg-zinc-50 dark:bg-zinc-900/50">
      <div className="mx-auto max-w-2xl">
        <div className="text-center mb-12">
          <Reveal animation="fade-up" distance={30}>
            <span className="text-brand font-mono text-xs tracking-[0.3em] uppercase mb-3 block">
              &gt; skills
            </span>
          </Reveal>
          <Reveal animation="fade-up" distance={30} delayMs={100}>
            <h2 className="text-4xl font-bold text-zinc-900 dark:text-white">
              Technical Expertise
            </h2>
          </Reveal>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-10">
          {skillCategories.map((category, catIdx) => (
            <Reveal
              key={category.title}
              animation="fade-up"
              distance={30}
              delayMs={catIdx * 100}
            >
              <div>
                <h3 className="text-xs font-mono text-brand tracking-widest uppercase mb-4">
                  {category.title}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill) => (
                    <div
                      key={skill.label}
                      className="flex items-center gap-2 px-3 py-2 rounded-lg border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900 text-sm text-zinc-600 dark:text-zinc-300 hover:border-brand/50 hover:text-brand transition-colors"
                    >
                      <span className="text-base">{skill.icon}</span>
                      {skill.label}
                    </div>
                  ))}
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
