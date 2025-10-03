import "./App.css";
import MouseTrail from "./components/MouseTrail";
import NavBar from "./components/NavBar";
import ThemeToggle from "./components/ThemeToggle";
import Hero from "./components/Hero";
import About from "./components/About";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

import { useEffect, useState } from "react";

const sections = [
  { id: "home", component: <Hero /> },
  { id: "about", component: <About /> },
  { id: "experience", component: <Experience /> },
  { id: "projects", component: <Projects /> },
  { id: "skills", component: <Skills /> },
  { id: "contact", component: <Contact /> },
];

function App() {
  const [activeSection, setActiveSection] = useState("home");

  // Listen for hash changes (sidebar click)
  useEffect(() => {
    const onHashChange = () => {
      const hash = window.location.hash.replace("#", "");
      if (sections.some((s) => s.id === hash)) {
        setActiveSection(hash);
      }
    };
    window.addEventListener("hashchange", onHashChange);
    return () => window.removeEventListener("hashchange", onHashChange);
  }, []);

  // Listen for scroll (wheel/touch) to change section
  useEffect(() => {
    const onWheel = (e: WheelEvent) => {
      if (Math.abs(e.deltaY) < 30) return;
      const idx = sections.findIndex((s) => s.id === activeSection);
      if (e.deltaY > 0 && idx < sections.length - 1) {
        setActiveSection(sections[idx + 1].id);
        window.location.hash = `#${sections[idx + 1].id}`;
      } else if (e.deltaY < 0 && idx > 0) {
        setActiveSection(sections[idx - 1].id);
        window.location.hash = `#${sections[idx - 1].id}`;
      }
    };
    window.addEventListener("wheel", onWheel, { passive: false });
    return () => window.removeEventListener("wheel", onWheel);
  }, [activeSection]);

  return (
    <>
      <MouseTrail />
      <div className="fixed top-6 right-8 z-50">
        <ThemeToggle />
      </div>
      <div className="flex">
        <NavBar />
        <div className="flex-1 ml-20 flex flex-col min-h-screen">
          <main className="flex-1 flex items-center justify-center transition-all duration-500 overflow-hidden">
            {sections.map((s) => (
              <div
                key={s.id}
                style={{
                  display: s.id === activeSection ? "block" : "none",
                  width: "100%",
                  height: "100%",
                  transition: "opacity 0.5s",
                }}
              >
                {s.component}
              </div>
            ))}
          </main>
          <Footer />
        </div>
      </div>
    </>
  );
}

export default App;
