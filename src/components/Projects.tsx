import Reveal from "./Reveal";
import ProjectCard from "./ProjectCard";

const projects = [
  {
    title: "Csender",
    description:
      "A basic file transfer system built with Flask for simple and reliable file uploads/downloads.",
    tech: ["Python", "Flask", "HTML", "CSS"],
    link: "https://github.com/worksoace/csender",
    liveLink: "",
    features: [
      "File Upload/Download",
      "Simple REST endpoints",
      "Lightweight Flask backend",
    ],
  },
  {
    title: "CBT",
    description:
      "A Computer-Based Testing system implemented in PHP for administering quizzes and tracking results.",
    tech: ["PHP", "MySQL", "HTML", "CSS", "JavaScript"],
    link: "https://github.com/worksoace/CBT",
    liveLink: "",
    features: [
      "Question Management",
      "User Progress Tracking",
      "Scoring & Results",
    ],
  },
  {
    title: "Mouse Trainer",
    description:
      "An interactive mouse training app to improve aim and speed through drills and performance tracking.",
    tech: ["JavaScript", "HTML", "CSS"],
    link: "https://github.com/worksoace/mouse-trainer",
    liveLink: "",
    features: ["Aim Drills", "Performance Tracking", "Responsive UI"],
  },
  {
    title: "Young and Salted",
    description:
      "Website for the NGO Young and Salted, focused on community projects and donations.",
    tech: ["HTML", "CSS", "JavaScript"],
    liveLink: "https://www.youngandsalted.org",
    features: ["NGO Website", "Donation Information", "Project Highlights"],
  },
];

export default function Projects() {
  return (
    <section
      id="projects"
      className="section-block bg-zinc-50 dark:bg-zinc-900/50"
    >
      <div className="mx-auto max-w-2xl">
        <div className="text-center mb-12">
          <Reveal animation="fade-up" distance={30}>
            <span className="text-brand font-mono text-xs tracking-[0.3em] uppercase mb-3 block">
              &gt; portfolio
            </span>
          </Reveal>
          <Reveal animation="fade-up" distance={30} delayMs={100}>
            <h2 className="text-4xl font-bold text-zinc-900 dark:text-white">
              Featured Projects
            </h2>
          </Reveal>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {projects.map((p, idx) => (
            <Reveal
              key={p.title}
              animation="fade-up"
              distance={30}
              delayMs={idx * 100}
            >
              <ProjectCard
                title={p.title}
                description={p.description}
                tech={p.tech}
                link={p.link}
                liveLink={p.liveLink}
                features={p.features}
              />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
