import {
  FaReact,
  FaPaintBrush,
  FaCss3Alt,
  FaBolt,
  FaPhotoVideo,
} from "react-icons/fa";
import ScrollArrows from "./ScrollArrows";

const skills = [
  { label: "React", icon: <FaReact className="text-blue-500" /> },
  { label: "TypeScript", icon: <FaBolt className="text-blue-700" /> },
  { label: "CSS", icon: <FaCss3Alt className="text-blue-400" /> },
  { label: "Vite", icon: <FaBolt className="text-yellow-500" /> },
  { label: "Photo Editing", icon: <FaPhotoVideo className="text-pink-500" /> },
  {
    label: "Graphic Design",
    icon: <FaPaintBrush className="text-green-500" />,
  },
];

export default function Skills() {
  return (
    <section id="skills" className="fullscreen-section">
      <div className="mx-auto max-w-6xl px-4 py-16">
        <h2 className="text-2xl font-semibold text-zinc-900 dark:text-white">
          Skills
        </h2>
        <ul className="mt-6 flex flex-wrap gap-4">
          {skills.map((skill) => (
            <li
              key={skill.label}
              className="bg-white dark:bg-zinc-800 shadow-md rounded-xl px-5 py-8 flex items-center gap-3 border border-zinc-200 dark:border-zinc-700 min-w-[150px] min-h-[90px]"
            >
              <span className="text-2xl">{skill.icon}</span>
              <span className="text-zinc-800 dark:text-zinc-100 font-medium">
                {skill.label}
              </span>
            </li>
          ))}
        </ul>
      </div>
      <ScrollArrows prevId="projects" nextId="contact" />
    </section>
  );
}
