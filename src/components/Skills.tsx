import {
  FaReact,
  FaHtml5,
  FaCss3Alt,
  FaGitAlt,
  FaPython,
} from "react-icons/fa";
import {
  SiTypescript,
  SiTailwindcss,
  SiJavascript,
  SiFlask,
  SiMysql,
  SiElectron,
} from "react-icons/si";
import { HiCodeBracket, HiCommandLine } from "react-icons/hi2";
import Reveal from "./Reveal";
import { useColorMode } from "../context/ColorModeContext";

interface SkillItem {
  label: string;
  brandColor: string;
  icon: React.ComponentType<{ className?: string }>;
}

interface SkillCategory {
  title: string;
  subtitle: string;
  icon: React.ComponentType<{ className?: string }>;
  skills: SkillItem[];
}

const skillCategories: SkillCategory[] = [
  {
    title: "Frontend Engineering",
    subtitle: "Fast, accessible user interfaces & web apps",
    icon: HiCodeBracket,
    skills: [
      { label: "React", icon: FaReact, brandColor: "text-[#00d8ff]" },
      { label: "TypeScript", icon: SiTypescript, brandColor: "text-[#3178c6]" },
      { label: "JavaScript (ES6+)", icon: SiJavascript, brandColor: "text-[#eab308]" },
      { label: "Tailwind CSS", icon: SiTailwindcss, brandColor: "text-[#38bdf8]" },
      { label: "HTML5 Semantic", icon: FaHtml5, brandColor: "text-[#e34f26]" },
      { label: "CSS3 / Modern CSS", icon: FaCss3Alt, brandColor: "text-[#1572b6]" },
    ],
  },
  {
    title: "Full-Stack & Systems",
    subtitle: "APIs, server runtimes, and local data",
    icon: HiCommandLine,
    skills: [
      { label: "Python", icon: FaPython, brandColor: "text-[#3776ab]" },
      { label: "Flask", icon: SiFlask, brandColor: "text-emerald-600" },
      { label: "Electron", icon: SiElectron, brandColor: "text-[#47848f]" },
      { label: "MySQL", icon: SiMysql, brandColor: "text-[#4479a1]" },
      { label: "REST APIs", icon: HiCommandLine, brandColor: "text-indigo-600" },
      { label: "Git & GitHub", icon: FaGitAlt, brandColor: "text-[#f05032]" },
    ],
  },
];

export default function Skills() {
  const { isColorMode } = useColorMode();

  return (
    <section id="skills" className="section-block bg-white">
      <div className="mx-auto max-w-6xl px-6 lg:px-12">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <Reveal animation="fade-up" distance={20}>
            <span className="text-zinc-500 font-mono text-xs tracking-[0.25em] uppercase mb-3 block font-semibold">
              &gt; TOOLKIT &amp; SKILLS
            </span>
          </Reveal>
          <Reveal animation="fade-up" distance={20} delayMs={100}>
            <h2 className="text-3xl sm:text-4xl font-bold text-zinc-950 tracking-tight mb-3">
              Technical Toolkit
            </h2>
          </Reveal>
          <Reveal animation="fade-up" distance={20} delayMs={180}>
            <p className="text-zinc-600 text-base leading-relaxed">
              Core technologies and development tools I build with daily.
            </p>
          </Reveal>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {skillCategories.map((category, catIdx) => {
            const CategoryIcon = category.icon;
            return (
              <Reveal
                key={category.title}
                animation="fade-up"
                distance={20}
                delayMs={catIdx * 100}
                className="flex"
              >
                <div className="w-full rounded-2xl border border-zinc-200 bg-zinc-50/60 p-6 sm:p-8 flex flex-col justify-between hover:border-zinc-950 transition-all duration-300 shadow-xs">
                  <div>
                    <div className="flex items-center gap-3 mb-2">
                      <div className="w-10 h-10 rounded-xl bg-white border border-zinc-200 flex items-center justify-center text-zinc-950 shadow-xs">
                        <CategoryIcon className="text-xl" />
                      </div>
                      <div>
                        <h3 className="text-base sm:text-lg font-bold text-zinc-950">
                          {category.title}
                        </h3>
                        <p className="text-xs text-zinc-500">
                          {category.subtitle}
                        </p>
                      </div>
                    </div>

                    <div className="grid grid-cols-2 sm:grid-cols-3 gap-2.5 mt-6">
                      {category.skills.map((skill) => {
                        const SkillIcon = skill.icon;
                        return (
                          <div
                            key={skill.label}
                            className="flex items-center gap-2.5 px-3 py-2.5 rounded-xl border border-zinc-200 bg-white text-xs font-medium text-zinc-800 hover:border-zinc-950 hover:text-zinc-950 transition-all duration-200 shadow-xs group"
                          >
                            <span className={`text-base group-hover:scale-110 transition-transform duration-200 ${
                              isColorMode ? skill.brandColor : "text-zinc-950"
                            }`}>
                              <SkillIcon />
                            </span>
                            <span className="truncate">{skill.label}</span>
                          </div>
                        );
                      })}
                    </div>
                  </div>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
