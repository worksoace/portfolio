import Reveal from "./Reveal";
import HeroAvatar from "./HeroAvatar";
import { useState, useEffect } from "react";
import { FiArrowDown, FiArrowRight, FiMail, FiCopy, FiCheck } from "react-icons/fi";

const titles = [
  "...FULL-STACK DEVELOPER... ",
  "...FRONTEND ENGINEER...",
  "...SOFTWARE DEVELOPER..."
];

function useTypewriter(words: string[], typingSpeed = 75, deletingSpeed = 40, pauseTime = 1800) {
  const [wordIndex, setWordIndex] = useState(0);
  const [text, setText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentWord = words[wordIndex % words.length];

    if (!isDeleting && text === currentWord) {
      const timeout = setTimeout(() => setIsDeleting(true), pauseTime);
      return () => clearTimeout(timeout);
    }

    if (isDeleting && text === "") {
      setIsDeleting(false);
      setWordIndex((prev) => (prev + 1) % words.length);
      return;
    }

    const nextText = isDeleting
      ? currentWord.substring(0, text.length - 1)
      : currentWord.substring(0, text.length + 1);

    const timer = setTimeout(() => {
      setText(nextText);
    }, isDeleting ? deletingSpeed : typingSpeed);

    return () => clearTimeout(timer);
  }, [text, isDeleting, wordIndex, words, typingSpeed, deletingSpeed, pauseTime]);

  return text;
}

export default function Hero() {
  const typedRole = useTypewriter(titles, 75, 40, 1800);
  const [copied, setCopied] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText("chijiokeemma2003@gmail.com");
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section
      id="home"
      className="relative min-h-screen lg:min-h-[92vh] flex flex-col justify-start lg:justify-center pt-16 sm:pt-20 lg:pt-28 pb-10 sm:pb-16 px-4 sm:px-6 lg:px-12 overflow-hidden bg-white"
    >
      {/* Atmospheric subtle ambient glow */}
      <div className="pointer-events-none absolute top-10 left-1/2 -translate-x-1/2 w-[800px] h-[500px] rounded-full bg-gradient-to-b from-zinc-200/40 via-zinc-100/20 to-transparent blur-3xl -z-10" />

      <div className="mx-auto max-w-6xl w-full grid grid-cols-1 lg:grid-cols-12 gap-5 sm:gap-8 lg:gap-10 items-center my-0 lg:my-auto">
        {/* Avatar Column: 3D Pop-Out Avatar (On top on mobile, right on desktop) */}
        <div className="lg:col-span-6 flex justify-center items-center order-1 lg:order-2">
          <Reveal animation="fade-up" distance={30} delayMs={100}>
            <HeroAvatar />
          </Reveal>
        </div>

        {/* Text Column: Intro & Call To Action (Below avatar on mobile, left on desktop) */}
        <div className="lg:col-span-6 flex flex-col items-center lg:items-start text-center lg:text-left order-2 lg:order-1">
          {/* Status Badge - B/W with local timezone */}
          <Reveal animation="fade-up" distance={20}>
            <div className="inline-flex items-center gap-2 px-3 py-1 sm:px-3.5 sm:py-1.5 rounded-full border border-zinc-300 bg-zinc-100/80 text-zinc-900 text-[11px] sm:text-xs font-mono font-medium mb-3 sm:mb-5 shadow-xs max-w-full truncate">
              <span className="relative flex h-2 w-2 shrink-0">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-zinc-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-zinc-950" />
              </span>
              <span className="truncate">Available for roles · Nsukka (UTC+1)</span>
            </div>
          </Reveal>

          {/* Main Title with Orbitron Font */}
          <Reveal animation="fade-up" distance={20} delayMs={80}>
            <h1 className="font-orbitron text-2xl sm:text-3xl lg:text-4xl font-extrabold text-zinc-950 tracking-tight leading-snug mb-2 sm:mb-3">
              I'm{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-zinc-950 via-zinc-800 to-zinc-600">
                Emmanuel Chijioke
              </span>
            </h1>
          </Reveal>

          {/* Dynamic Changing Role with Typewriter Effect & Orbitron Font */}
          <Reveal animation="fade-up" distance={20} delayMs={140}>
            <div className="h-7 sm:h-9 mb-3 sm:mb-5 flex items-center justify-center lg:justify-start">
              <span className="font-orbitron text-xs sm:text-base md:text-lg font-bold text-zinc-950 tracking-wider border-b-2 border-zinc-950 pb-0.5 sm:pb-1 inline-flex items-center">
                <span>{typedRole}</span>
                <span className="w-1.5 h-3.5 sm:h-5 bg-zinc-950 inline-block animate-pulse ml-1" />
              </span>
            </div>
          </Reveal>

          {/* Punchy Bio */}
          <Reveal animation="fade-up" distance={20} delayMs={200}>
            <p className="text-zinc-600 text-sm sm:text-base lg:text-lg leading-relaxed max-w-lg mb-5 sm:mb-7">
              Crafting high-performance web applications, desktop tools, and resilient software.
            </p>
          </Reveal>

          {/* CTA Buttons - 2-up on mobile, 3-up on tablet/desktop */}
          <Reveal animation="fade-up" distance={20} delayMs={260}>
            <div className="flex flex-wrap gap-2.5 sm:gap-3 justify-center lg:justify-start items-center mb-5 sm:mb-7 w-full">
              <a
                href="#projects"
                className="inline-flex items-center justify-center gap-2 px-5 py-2.5 sm:px-6 sm:py-3 bg-zinc-950 text-white font-semibold text-xs sm:text-sm rounded-xl hover:bg-black shadow-md shadow-zinc-950/15 hover:shadow-lg transition-all transform hover:-translate-y-0.5 active:scale-95"
              >
                <span>View My Work</span>
                <FiArrowRight size={14} />
              </a>
              <a
                href="#contact"
                className="inline-flex items-center justify-center gap-2 px-5 py-2.5 sm:px-6 sm:py-3 border border-zinc-300 bg-white text-zinc-900 font-medium text-xs sm:text-sm rounded-xl hover:border-zinc-950 transition-all shadow-xs hover:shadow active:scale-95"
              >
                <FiMail size={14} />
                <span>Contact Me</span>
              </a>
              <button
                onClick={handleCopyEmail}
                className="hidden sm:inline-flex items-center justify-center gap-1.5 px-3.5 py-2.5 sm:px-4 sm:py-3 border border-zinc-200 bg-zinc-50 text-zinc-700 hover:text-zinc-950 hover:bg-zinc-100 rounded-xl text-xs font-mono font-medium transition-all shadow-xs active:scale-95"
                aria-label="Copy email address"
              >
                {copied ? <FiCheck size={13} className="text-zinc-950" /> : <FiCopy size={13} />}
                <span>{copied ? "Copied!" : "Copy Email"}</span>
              </button>
            </div>
          </Reveal>

          {/* Quick Core Tech Tags */}
          <Reveal animation="fade-up" distance={20} delayMs={320}>
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-1.5 text-xs text-zinc-500 font-mono w-full">
              <span className="text-zinc-400 text-[11px] sm:text-xs mr-1 hidden xs:inline">Core:</span>
              {["React", "TypeScript", "Tailwind", "Python", "Electron"].map((t) => (
                <span
                  key={t}
                  className="px-2.5 py-1 text-[11px] sm:text-xs rounded-md bg-zinc-100/90 border border-zinc-200 text-zinc-800 font-medium shadow-2xs"
                >
                  {t}
                </span>
              ))}
            </div>
          </Reveal>
        </div>
      </div>

      {/* Subtle Scroll Down Prompt */}
      <div className="hidden sm:flex justify-center mt-6">
        <a
          href="#about"
          className="flex flex-col items-center gap-1.5 text-zinc-400 hover:text-zinc-950 transition-colors text-xs font-mono"
          aria-label="Scroll to About"
        >
          <span>scroll</span>
          <FiArrowDown className="animate-bounce" size={14} />
        </a>
      </div>
    </section>
  );
}
