import Reveal from "./Reveal";
import profileUrl from "../assets/final.png";
import { useParallax } from "../hooks/useParallax";
import ScrollArrows from "./ScrollArrows";
import { useState, useEffect } from "react";

export default function Hero() {
  const bgRef = useParallax(0.15);
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
    <section id="home" className="relative overflow-hidden fullscreen-section">
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div
          ref={bgRef}
          className="pointer-events-none absolute -inset-x-10 -top-24 h-80 rounded-full bg-brand/10 blur-3xl"
        ></div>
      </div>
      <div className="mx-auto max-w-7xl px-4 py-16 sm:py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Card - Profile */}
          <Reveal animation="fade-right" distance={50}>
            <div className="bg-white/80 dark:bg-zinc-800/80 rounded-3xl p-8 border border-zinc-200 dark:border-zinc-700 shadow-xl overflow-hidden">
              <div className="text-center">
                <div className="mb-6 relative">
                  <img
                    src={profileUrl}
                    alt="Emmanuel Chijioke"
                    className="w-64 h-64 object-contain rounded-2xl border-4 border-zinc-200 dark:border-zinc-700 shadow-lg mx-auto"
                  />
                </div>
                <h1 className="text-3xl font-bold text-zinc-900 dark:text-white mb-2">
                  Emmanuel Chijioke
                </h1>
                <p className="text-lg text-zinc-600 dark:text-zinc-400 mb-6 transition-all duration-700 ease-in-out">
                  {currentTitle}
                </p>
              </div>
            </div>
          </Reveal>

          {/* Right Card - Introduction */}
          <Reveal animation="fade-left" distance={50}>
            <div className="bg-white/80 dark:bg-zinc-800/80 rounded-3xl p-8 border border-zinc-200 dark:border-zinc-700 shadow-xl relative">
              <div className="absolute top-4 left-6">
                <span className="text-brand text-sm font-medium uppercase tracking-wider">
                  INTRO
                </span>
              </div>

              <div className="mt-8">
                <h2 className="text-5xl font-bold text-zinc-900 dark:text-white mb-6 leading-tight">
                  Hi, from <span className="text-brand">Emmanuel Chijioke</span>
                  , Developer and Designer
                </h2>

                <p className="text-lg text-zinc-600 dark:text-zinc-300 mb-8 leading-relaxed">
                  I'm a passionate full-stack developer with a mission to create
                  delightful and intuitive digital experiences. With a strong
                  foundation in modern web technologies and a keen eye for
                  detail, I specialize in translating complex ideas into
                  user-friendly interfaces that captivate and engage.
                </p>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
      <ScrollArrows nextId="about"></ScrollArrows>
    </section>
  );
}
