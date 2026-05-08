import Reveal from "./Reveal";
import profileBlue from "../assets/final-blue.png";
import profileWhite from "../assets/final-white.png";
import { useState, useEffect } from "react";

export default function Hero() {
  const [currentTitle, setCurrentTitle] = useState("DEVELOPER");

  useEffect(() => {
    const titles = ["DEVELOPER", "GRAPHICS DESIGNER"];
    let currentIndex = 0;
    const interval = setInterval(() => {
      currentIndex = (currentIndex + 1) % titles.length;
      setCurrentTitle(titles[currentIndex]);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Subtle background glow */}
      <div className="pointer-events-none absolute -top-32 left-1/2 -translate-x-1/2 w-[600px] h-[400px] rounded-full bg-brand/10 blur-3xl -z-10" />

      <div className="mx-auto max-w-2xl px-6 py-24 w-full flex flex-col items-center text-center">
        {/* Profile image */}
        <Reveal animation="fade-up" distance={30}>
          <div className="relative mb-8">
            <div className="absolute inset-0 rounded-full bg-brand/20 blur-2xl scale-110 -z-10" />
            <img
              src={profileWhite}
              alt="Emmanuel Chijioke"
              className="block dark:hidden w-[300px] h-[300px] object-contain rounded-full border border-zinc-200 shadow-xl"
              style={{ maxWidth: "300%", minHeight: "300px" }}
            />
            <img
              src={profileBlue}
              alt="Emmanuel Chijioke"
              className="hidden dark:block w-[300px] h-[300px] object-contain rounded-full border border-zinc-800 shadow-xl"
              style={{ maxWidth: "300%", minHeight: "300px" }}
            />
          </div>
        </Reveal>

        <Reveal animation="fade-up" distance={30} delayMs={100}>
          <span className="text-brand text-xs font-mono tracking-[0.3em] uppercase mb-4 block">
            &gt; hello world
          </span>
        </Reveal>

        <Reveal animation="fade-up" distance={30} delayMs={180}>
          <h1 className="text-5xl sm:text-6xl font-bold text-zinc-900 dark:text-white leading-tight mb-4">
            Emmanuel Chijioke
          </h1>
        </Reveal>

        <Reveal animation="fade-up" distance={30} delayMs={260}>
          <p className="text-brand font-mono text-lg mb-6 h-7 transition-all duration-700">
            {currentTitle}
          </p>
        </Reveal>

        <Reveal animation="fade-up" distance={30} delayMs={340}>
          <p className="text-zinc-500 dark:text-zinc-400 leading-relaxed max-w-md mb-10">
            Full-stack developer and UI/UX designer crafting clean, functional
            digital experiences. I turn complex ideas into interfaces that just
            work.
          </p>
        </Reveal>

        <Reveal animation="fade-up" distance={30} delayMs={420}>
          <div className="flex gap-4 justify-center">
            <a
              href="#projects"
              className="px-6 py-3 bg-brand text-zinc-900 font-semibold text-sm rounded-lg hover:bg-brand-dark transition-colors"
            >
              View Work
            </a>
            <a
              href="#contact"
              className="px-6 py-3 border border-zinc-300 dark:border-zinc-700 text-zinc-700 dark:text-zinc-300 font-semibold text-sm rounded-lg hover:border-brand hover:text-brand transition-colors"
            >
              Contact Me
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
