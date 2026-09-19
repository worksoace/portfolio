import { useState, useRef, useEffect } from "react";
import Reveal from "./Reveal";
import ProjectCard, { type ProjectCardProps } from "./ProjectCard";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";

const projects: ProjectCardProps[] = [
  {
    title: "The Upskill Space",
    category: "Web Platform",
    featured: true,
    description:
      "Official platform for The Upskill Space — an innovation tech hub and software engineering agency featuring workspace desk booking, digital agency services, and deep-focus coworking infrastructure.",
    tech: ["JavaScript", "Tailwind CSS", "HTML5", "Responsive UI"],
    link: "https://tus-e.com/",
    liveLink: "https://tus-e.com/",
    features: [
      "Workspace Desk Reservation System",
      "Software Agency Services & Capabilities",
      "Coworking Tech Hub & Deep Flow Showcase",
    ],
  },
  {
    title: "Anazo Moments",
    category: "Web Platform",
    featured: true,
    description:
      "A wedding planning platform connecting vendors with couples for seamless event planning, schedules, and vendor booking.",
    tech: ["React", "TypeScript", "Tailwind CSS", "Vercel"],
    link: "https://enazo.vercel.app/",
    liveLink: "https://enazo.vercel.app/",
    features: [
      "Vendor Marketplace & Discovery",
      "Client-Vendor Booking System",
      "Wedding Planning Dashboard",
    ],
  },
  {
    title: "Easy Search",
    category: "Systems & Tools",
    featured: true,
    description:
      "An offline Bible study and reference desktop app built with Electron, featuring multi-translation search, Strong's concordance, and commentary panels.",
    tech: ["Electron", "JavaScript", "HTML5", "CSS3"],
    link: "https://github.com/worksoace/Easy-Search",
    liveLink: "",
    features: [
      "Full Offline Search & Translation Engine",
      "Embedded Strong's Concordance & Dictionaries",
      "Multi-panel Split-view Study Workspace",
    ],
  },
  {
    title: "Electron Live Server",
    category: "Systems & Tools",
    featured: true,
    description:
      "A VS Code extension for running Electron applications with live reload, file watching, and process management during development.",
    tech: ["TypeScript", "VS Code API", "Electron", "Node.js"],
    link: "https://github.com/worksoace/Electron-Liveserver",
    liveLink: "",
    features: [
      "File Watcher with Hot Reload",
      "Process & Output Channel Logging",
      "Command Palette & Status Bar Actions",
    ],
  },
  {
    title: "My Rabbai",
    category: "Web Platform",
    featured: true,
    description:
      "An educational platform built to help students prepare for SSCE and UTME examinations through practice tests and resources.",
    tech: ["React", "TypeScript", "Tailwind CSS", "REST API"],
    link: "https://myrabbai.com.ng",
    liveLink: "https://myrabbai.com.ng",
    features: [
      "SSCE & UTME Exam Simulation",
      "Interactive Mock Tests",
      "Real-time Student Performance Tracking",
    ],
  },
  {
    title: "Word2PDF",
    category: "Systems & Tools",
    featured: false,
    description:
      "A Python Flask utility for single and batch converting Word documents (.docx) to PDFs with custom destination folder routing.",
    tech: ["Python", "Flask", "docx2pdf", "LibreOffice"],
    link: "https://github.com/worksoace/Word2PDF",
    liveLink: "",
    features: [
      "Single & Batch DOCX to PDF Conversion",
      "Custom Destination Directory Routing",
      "Cross-platform Conversion Engine",
    ],
  },
  {
    title: "Tasker",
    category: "Web Platform",
    featured: false,
    description:
      "A focused task and project management application designed for organizing workflows, daily planning, and productivity tracking.",
    tech: ["JavaScript", "TypeScript", "React", "Tailwind CSS"],
    link: "https://github.com/worksoace/tasker",
    liveLink: "",
    features: [
      "Task & Workflow Organization",
      "Daily Productivity & Goal Tracking",
      "Clean, Minimalist Architecture",
    ],
  },
  {
    title: "Young and Salted",
    category: "Web Platform",
    featured: false,
    description:
      "Official website for the NGO Young and Salted, dedicated to youth empowerment, community outreach, and donation management.",
    tech: ["React", "TypeScript", "Tailwind CSS"],
    link: "https://www.youngandsalted.org",
    liveLink: "https://www.youngandsalted.org",
    features: [
      "Community Initiative Showcase",
      "Donation & Sponsorship Channels",
      "Mobile-optimized Experience",
    ],
  },
  {
    title: "Csender",
    category: "Systems & Tools",
    featured: false,
    description:
      "A lightweight, secure file transfer service built with Python Flask for fast and reliable file uploads, downloads, and sharing.",
    tech: ["Python", "Flask", "HTML5", "CSS3"],
    link: "https://github.com/worksoace/csender",
    liveLink: "",
    features: [
      "High-speed File Upload/Download",
      "Lightweight Flask Architecture",
      "RESTful API Endpoints",
    ],
  },
  {
    title: "CBT Examination System",
    category: "Systems & Tools",
    featured: false,
    description:
      "A comprehensive Computer-Based Testing system implemented in PHP & MySQL for administering timed quizzes and instant grading.",
    tech: ["PHP", "MySQL", "JavaScript", "HTML/CSS"],
    link: "https://github.com/worksoace/CBT",
    liveLink: "",
    features: [
      "Automated Timed Exam Sessions",
      "Question Bank & Category Management",
      "Instant Score Calculation & Analytics",
    ],
  },
  {
    title: "Mouse Trainer",
    category: "Systems & Tools",
    featured: false,
    description:
      "An interactive web application designed to help gamers and users improve aim, click precision, and cursor reaction speeds.",
    tech: ["JavaScript", "HTML5 Canvas", "CSS3"],
    link: "https://github.com/worksoace/mouse-trainer",
    liveLink: "",
    features: [
      "Target Accuracy & Speed Drills",
      "Real-time Hit/Miss Statistics",
      "Lightweight Vanilla JS Engine",
    ],
  },
];

const categories = ["All", "Web Platform", "Systems & Tools"];

export default function Projects() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const scrollRef = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);
  const [carouselProgress, setCarouselProgress] = useState(0);

  const filteredProjects =
    selectedCategory === "All"
      ? projects
      : projects.filter((p) => p.category === selectedCategory);

  const checkScroll = () => {
    if (scrollRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current;
      const maxScroll = scrollWidth - clientWidth;
      setCanScrollLeft(scrollLeft > 10);
      setCanScrollRight(scrollLeft < maxScroll - 10);
      if (maxScroll > 0) {
        setCarouselProgress(Math.min(100, Math.max(0, (scrollLeft / maxScroll) * 100)));
      } else {
        setCarouselProgress(100);
      }
    }
  };

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTo({ left: 0, behavior: "smooth" });
      checkScroll();
    }
  }, [selectedCategory]);

  useEffect(() => {
    checkScroll();
    window.addEventListener("resize", checkScroll);
    return () => window.removeEventListener("resize", checkScroll);
  }, [filteredProjects]);

  const handleScroll = (direction: "left" | "right") => {
    if (scrollRef.current) {
      const scrollAmount = 390;
      scrollRef.current.scrollBy({
        left: direction === "left" ? -scrollAmount : scrollAmount,
        behavior: "smooth",
      });
    }
  };

  return (
    <section
      id="projects"
      className="section-block bg-zinc-50/70 border-t border-zinc-200 overflow-hidden"
    >
      <div className="mx-auto max-w-6xl px-6 lg:px-12">
        <div className="text-center max-w-2xl mx-auto mb-10">
          <Reveal animation="fade-up" distance={20}>
            <span className="text-zinc-500 font-mono text-xs tracking-[0.25em] uppercase block mb-3 font-semibold">
              &gt; PORTFOLIO &amp; WORK
            </span>
          </Reveal>

          <Reveal animation="fade-up" distance={20} delayMs={100}>
            <h2 className="text-3xl sm:text-4xl font-bold text-zinc-950 tracking-tight mb-3">
              Featured Projects
            </h2>
          </Reveal>

          <Reveal animation="fade-up" distance={20} delayMs={180}>
            <p className="text-zinc-600 text-base leading-relaxed">
              Selected web applications, desktop software, and developer tools.
            </p>
          </Reveal>
        </div>

        {/* Toolbar: Filter Tabs + Carousel Arrow Buttons */}
        <Reveal animation="fade-up" distance={20} delayMs={220}>
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 mb-8">
            {/* Filter Tabs */}
            <div className="flex flex-wrap items-center justify-center sm:justify-start gap-2">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  className={`px-4 py-1.5 rounded-full text-xs font-medium transition-all duration-200 ${
                    selectedCategory === cat
                      ? "bg-zinc-950 text-white shadow-sm"
                      : "bg-white text-zinc-600 border border-zinc-200 hover:text-zinc-950 hover:border-zinc-300"
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>

            {/* Slider Navigation Arrows & Count */}
            <div className="flex items-center gap-3">
              <span className="text-xs font-mono text-zinc-400 hidden sm:inline-block">
                {filteredProjects.length} {filteredProjects.length === 1 ? "project" : "projects"}
              </span>

              <div className="flex items-center gap-2">
                <button
                  onClick={() => handleScroll("left")}
                  disabled={!canScrollLeft}
                  aria-label="Previous project"
                  className="w-9 h-9 rounded-full border border-zinc-200 bg-white flex items-center justify-center text-zinc-700 hover:text-zinc-950 hover:border-zinc-950 disabled:opacity-30 disabled:pointer-events-none transition-all shadow-xs"
                >
                  <FiChevronLeft size={18} />
                </button>
                <button
                  onClick={() => handleScroll("right")}
                  disabled={!canScrollRight}
                  aria-label="Next project"
                  className="w-9 h-9 rounded-full border border-zinc-200 bg-white flex items-center justify-center text-zinc-700 hover:text-zinc-950 hover:border-zinc-950 disabled:opacity-30 disabled:pointer-events-none transition-all shadow-xs"
                >
                  <FiChevronRight size={18} />
                </button>
              </div>
            </div>
          </div>
        </Reveal>

        {/* Single-Line Horizontal Carousel Track */}
        <div
          ref={scrollRef}
          onScroll={checkScroll}
          className="flex gap-6 overflow-x-auto snap-x snap-mandatory scroll-smooth pb-6 pt-2 no-scrollbar"
        >
          {filteredProjects.map((project) => (
            <div
              key={project.title}
              className="w-[310px] sm:w-[360px] md:w-[380px] flex-shrink-0 snap-start flex flex-col"
            >
              <ProjectCard {...project} />
            </div>
          ))}
        </div>

        {/* Carousel Scroll Progress Bar */}
        <div className="w-full bg-zinc-200/80 h-1 rounded-full overflow-hidden my-2">
          <div
            className="bg-zinc-950 h-full rounded-full transition-all duration-150"
            style={{ width: `${carouselProgress}%` }}
          />
        </div>

        {/* Swipe / Scroll Hint */}
        <div className="flex items-center justify-between text-xs font-mono text-zinc-400 pt-3 border-t border-zinc-200/60 mt-2">
          <span>← Drag or scroll to explore →</span>
          <span className="sm:hidden">{filteredProjects.length} projects</span>
        </div>
      </div>
    </section>
  );
}

