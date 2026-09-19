import { useEffect, useState } from "react";
import "./App.css";
import { ColorModeProvider, useColorMode } from "./context/ColorModeContext";
import MoleculesBackground from "./components/MoleculesBackground";
import MouseTrail from "./components/MouseTrail";
import NavBar from "./components/NavBar";
import SocialSidebar from "./components/SocialSidebar";
import Hero from "./components/Hero";
import About from "./components/About";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function AppContent() {
  const [scrollProgress, setScrollProgress] = useState(0);
  const { isColorMode } = useColorMode();

  useEffect(() => {
    const handleScroll = () => {
      const totalScroll = document.documentElement.scrollHeight - window.innerHeight;
      if (totalScroll > 0) {
        const currentScroll = window.scrollY;
        setScrollProgress((currentScroll / totalScroll) * 100);
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className={`relative min-h-screen bg-white text-zinc-900 transition-colors duration-500 ${isColorMode ? "color-mode-active" : ""}`}>
      {/* Top Reading Progress Bar */}
      <div
        className={`top-reading-bar fixed top-0 left-0 h-[2.5px] z-50 transition-all duration-75 ${
          isColorMode ? "bg-white shadow-[0_0_8px_rgba(255,255,255,0.6)]" : "bg-zinc-950"
        }`}
        style={{ width: `${scrollProgress}%` }}
        aria-hidden="true"
      />

      <MoleculesBackground />
      <MouseTrail />
      <NavBar />
      <SocialSidebar />
      <main className="w-full overflow-hidden">
        <Hero />
        <About />
        <Experience />
        <Projects />
        <Skills />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default function App() {
  return (
    <ColorModeProvider>
      <AppContent />
    </ColorModeProvider>
  );
}
