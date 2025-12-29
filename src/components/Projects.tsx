import Reveal from "./Reveal";
import ProjectCard from "./ProjectCard";

// Simple placeholder thumbnails
const createThumbnail = (color: string, text: string) =>
  `data:image/svg+xml;base64,${btoa(`
    <svg width="400" height="300" xmlns="http://www.w3.org/2000/svg">
      <rect width="100%" height="100%" fill="${color}"/>
      <text x="50%" y="50%" font-family="Arial, sans-serif" font-size="24" font-weight="bold" 
            text-anchor="middle" dy=".3em" fill="white">${text}</text>
    </svg>
  `)}`;

const projects = [
  {
    title: "Csender",
    description:
      "A basic file transfer system built with Flask for simple and reliable file uploads/downloads.",
    image: createThumbnail("#2563EB", "Csender"),
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
      "A basic Computer-Based Testing (CBT) system implemented in PHP for administering quizzes and tracking results.",
    image: createThumbnail("#059669", "CBT"),
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
      "An interactive mouse training application to help improve aim and speed through drills and tracking.",
    image: createThumbnail("#F97316", "Mouse Trainer"),
    tech: ["JavaScript", "HTML", "CSS"],
    link: "https://github.com/worksoace/mouse-trainer",
    liveLink: "",
    features: ["Aim Drills", "Performance Tracking", "Responsive UI"],
  },
  {
    title: "Young and Salted",
    description:
      "Website for the NGO Young and Salted, focused on community projects and donations.",
    image: createThumbnail("#8B5CF6", "Young & Salted"),
    tech: ["HTML", "CSS", "JavaScript"],
    // link: "https://www.youngandsalted.org",
    liveLink: "https://www.youngandsalted.org",
    features: ["NGO Website", "Donation Information", "Project Highlights"],
  },
];

import ScrollArrows from "./ScrollArrows";

export default function Projects() {
  return (
    <section id="projects" className="fullscreen-section">
      <div className="mx-auto max-w-7xl px-4 py-16">
        <div className="text-center mb-16">
          <Reveal animation="fade-up" distance={30}>
            <span className="text-blue-600 text-2xl font-bold tracking-wider">
              PORTFOLIO
            </span>
          </Reveal>
          <Reveal animation="fade-up" distance={30} delayMs={100}>
            <h2 className="text-5xl font-bold text-zinc-900 dark:text-white mt-2 mb-6">
              Featured Projects
            </h2>
          </Reveal>
          <Reveal animation="fade-up" distance={30} delayMs={200}>
            <p className="text-lg text-zinc-600 dark:text-zinc-300 max-w-2xl mx-auto">
              A showcase of my recent work, featuring web applications, design
              projects, and innovative solutions.
            </p>
          </Reveal>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((p, idx) => (
            <Reveal
              key={p.title}
              animation={idx % 2 === 0 ? "fade-right" : "fade-left"}
              distance={40}
              delayMs={idx * 200}
            >
              <div className="h-full">
                <Reveal
                  animation="fade-up"
                  distance={20}
                  delayMs={idx * 200 + 100}
                >
                  <ProjectCard
                    title={p.title}
                    description={p.description}
                    image={p.image}
                    tech={p.tech}
                    link={p.link}
                    liveLink={p.liveLink}
                    features={p.features}
                  />
                </Reveal>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
      <ScrollArrows prevId="experience" nextId="skills"></ScrollArrows>
    </section>
  );
}
