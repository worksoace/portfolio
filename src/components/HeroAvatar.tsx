import { useState, useRef, useCallback } from "react";
import asksWebp from "../assets/asks.webp";
import { FaReact, FaPython } from "react-icons/fa";
import { SiTypescript, SiElectron } from "react-icons/si";
import { useColorMode } from "../context/ColorModeContext";

export default function HeroAvatar() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { isColorMode, toggleColorMode } = useColorMode();
  const [coords, setCoords] = useState({ x: 0, y: 0 });
  const [mousePos, setMousePos] = useState({ x: 50, y: 50 });
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseMove = useCallback((e: React.MouseEvent<HTMLDivElement>) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5; // range: -0.5 to 0.5
    const y = (e.clientY - rect.top) / rect.height - 0.5; // range: -0.5 to 0.5
    setCoords({ x, y });
    setMousePos({
      x: ((e.clientX - rect.left) / rect.width) * 100,
      y: ((e.clientY - rect.top) / rect.height) * 100,
    });
  }, []);

  const handleMouseEnter = useCallback(() => {
    setIsHovered(true);
  }, []);

  const handleMouseLeave = useCallback(() => {
    setCoords({ x: 0, y: 0 });
    setIsHovered(false);
  }, []);

  // Parallax calculations
  const rotX = -coords.y * 12; // tilt up/down
  const rotY = coords.x * 14;  // tilt left/right
  const personTranslateX = coords.x * 18;
  const personTranslateY = coords.y * 14 - (isHovered ? 8 : 0);
  const badgeTranslateX = coords.x * 24;
  const badgeTranslateY = coords.y * 20;

  // Fluid response while hovering, cushioned return when mouse leaves
  const smoothTransition = isHovered
    ? "transform 0.12s cubic-bezier(0.2, 0, 0, 1)"
    : "transform 0.65s cubic-bezier(0.16, 1, 0.3, 1)";

  return (
    <div
      ref={containerRef}
      onClick={toggleColorMode}
      onKeyDown={(e) => {
        if (e.key === "Enter" || e.key === " ") {
          e.preventDefault();
          toggleColorMode();
        }
      }}
      role="button"
      tabIndex={0}
      aria-label={isColorMode ? "Switch site to Black and White mode" : "Switch site to Full Color mode"}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className="relative w-[300px] h-[380px] xs:w-[330px] xs:h-[420px] sm:w-[380px] sm:h-[450px] md:w-[410px] md:h-[480px] lg:w-[450px] lg:h-[510px] xl:w-[470px] xl:h-[530px] flex items-end justify-center select-none cursor-pointer [perspective:1000px] group outline-none"
    >
      {/* Ambient Glow */}
      <div
        className={`absolute inset-x-4 bottom-2 h-[55%] rounded-2xl blur-3xl -z-10 transition-all duration-700 ${
          isColorMode
            ? "bg-gradient-to-tr from-blue-500/15 via-indigo-500/10 to-transparent"
            : "bg-gradient-to-tr from-zinc-200/50 via-zinc-100/30 to-transparent"
        }`}
        style={{
          transform: `translate3d(${coords.x * 10}px, ${coords.y * 10}px, 0)`,
          transition: smoothTransition,
        }}
      />

      {/* Decorative Outer Dashed Box Frame */}
      <div
        className="absolute inset-x-0 bottom-0 w-full h-[48%] border border-dashed border-zinc-300/70 pointer-events-none -z-10"
        style={{
          transform: `scale(1.05) rotate(${coords.x * 4}deg)`,
          transition: smoothTransition,
        }}
      />

      {/* 3D Tilting Frame */}
      <div
        className="relative w-full h-full flex items-end justify-center [transform-style:preserve-3d]"
        style={{
          transform: `rotateX(${rotX}deg) rotateY(${rotY}deg)`,
          transition: smoothTransition,
        }}
      >
        {/* ========================================================= */}
        {/* THE BOX FRAME: Sits at bottom-0 with height = 48%         */}
        {/* Top outline sits precisely at shoulder height             */}
        {/* ========================================================= */}
        <div className="absolute inset-x-0 bottom-0 w-full h-[48%]">
          {/* LAYER 1: The Box Base & Top Outline */}
          <div className="absolute inset-0 bg-gradient-to-b from-zinc-50/90 via-zinc-100/40 to-zinc-100/90 border-t-2 border-zinc-950 shadow-xl shadow-zinc-950/5 relative overflow-hidden">
            {/* Top-left and Top-right corner tick markers (┌ ┐) */}
            <div className="absolute top-0 left-0 w-3.5 h-3.5 border-l-2 border-zinc-950 pointer-events-none" />
            <div className="absolute top-0 right-0 w-3.5 h-3.5 border-r-2 border-zinc-950 pointer-events-none" />

            {/* Faint technical dot matrix pattern */}
            <div className="absolute inset-0 bg-[radial-gradient(#d4d4d8_1px,transparent_1px)] [background-size:24px_24px] opacity-35 pointer-events-none" />
          </div>

          {/* LAYER 2: Bottom Outline & Corner Ticks */}
          <div className="absolute bottom-0 inset-x-0 pointer-events-none z-10">
            {/* Solid Bottom Outline */}
            <div className="w-full h-[2px] bg-zinc-950" />
            {/* Bottom-left and Bottom-right corner tick markers */}
            <div className="absolute bottom-0 left-0 w-3.5 h-3.5 border-b-2 border-l-2 border-zinc-950" />
            <div className="absolute bottom-0 right-0 w-3.5 h-3.5 border-b-2 border-r-2 border-zinc-950" />
          </div>
        </div>

        {/* ========================================================= */}
        {/* EMMANUEL CUTOUT: BIG, full size (w-full h-full)           */}
        {/* Bottom half inside the box, head & neck pop out above     */}
        {/* ========================================================= */}
        <div
          className="absolute inset-x-0 bottom-0 w-full h-full pointer-events-none"
          style={{
            transform: `translate3d(${personTranslateX}px, ${personTranslateY}px, 25px) scale(${isHovered ? 1.03 : 1})`,
            transformOrigin: "bottom center",
            transition: smoothTransition,
          }}
        >
          {/* Base Portrait: Natural Real Photo in Color Mode, Crisp Black & White in B&W Mode */}
          <img
            src={asksWebp}
            alt="Emmanuel Chijioke"
            width={1200}
            height={1200}
            className={`w-full h-full object-contain object-bottom drop-shadow-[0_15px_25px_rgba(0,0,0,0.18)] transition-all duration-500 ${
              isColorMode
                ? "contrast-[1.02] brightness-[1.0]"
                : "grayscale contrast-[1.12] brightness-[0.98]"
            }`}
            loading="eager"
            decoding="async"
          />

          {/* Color Reveal Lens: in B&W mode, hover circumference dynamically clears B&W filter */}
          {!isColorMode && (
            <div
              className="absolute inset-0 w-full h-full pointer-events-none"
              style={{
                maskImage: `radial-gradient(circle 115px at ${mousePos.x}% ${mousePos.y}%, black 0%, black 50%, transparent 100%)`,
                WebkitMaskImage: `radial-gradient(circle 115px at ${mousePos.x}% ${mousePos.y}%, black 0%, black 50%, transparent 100%)`,
                opacity: isHovered ? 1 : 0,
                transition: isHovered ? "opacity 0.2s ease" : "opacity 0.45s ease",
              }}
            >
              <img
                src={asksWebp}
                alt=""
                aria-hidden="true"
                width={1200}
                height={1200}
                decoding="async"
                className="w-full h-full object-contain object-bottom saturate-[0.7] contrast-[1.04] brightness-[1.01]"
              />
            </div>
          )}
        </div>

        {/* ========================================================= */}
        {/* FLOATING PARALLAX BADGES                                  */}
        {/* ========================================================= */}
        {/* Badge 1: Frontend Dev (hidden on mobile to prevent floating detached in whitespace) */}
        <div
          className="hidden sm:flex absolute top-10 -left-2 sm:top-12 sm:-left-5 px-3 py-1.5 sm:px-4 sm:py-2 rounded-xl bg-white/95 backdrop-blur-md border border-zinc-200 shadow-lg items-center gap-2 text-xs sm:text-sm font-semibold text-zinc-900 [transform-style:preserve-3d]"
          style={{
            transform: `translate3d(${-badgeTranslateX}px, ${-badgeTranslateY}px, 50px)`,
            transition: smoothTransition,
          }}
        >
          <FaReact className={`text-base sm:text-lg transition-colors duration-300 ${isColorMode ? "text-[#00d8ff]" : "text-zinc-950"}`} />
          <SiTypescript className={`text-sm sm:text-base transition-colors duration-300 ${isColorMode ? "text-[#3178c6]" : "text-zinc-950"}`} />
          <span>Frontend Dev</span>
        </div>

        {/* Badge 2: Full-Stack & Systems (hidden on mobile to prevent clipping) */}
        <div
          className="hidden sm:flex absolute bottom-3 -right-2 sm:bottom-4 sm:-right-4 px-3 py-1.5 sm:px-4 sm:py-2 rounded-xl bg-white/95 backdrop-blur-md border border-zinc-200 shadow-lg items-center gap-2 text-xs sm:text-sm font-semibold text-zinc-900 [transform-style:preserve-3d]"
          style={{
            transform: `translate3d(${badgeTranslateX}px, ${badgeTranslateY}px, 50px)`,
            transition: smoothTransition,
          }}
        >
          <FaPython className={`text-base sm:text-lg transition-colors duration-300 ${isColorMode ? "text-[#3776ab]" : "text-zinc-950"}`} />
          <SiElectron className={`text-sm sm:text-base transition-colors duration-300 ${isColorMode ? "text-[#47848f]" : "text-zinc-950"}`} />
          <span>Full-Stack &amp; Systems</span>
        </div>

        {/* Badge 3: Experience Pill (snug against box edge on mobile) */}
        <div
          className="absolute bottom-[40%] -right-1 sm:-right-6 px-3 py-1 sm:px-4 sm:py-2 rounded-full bg-zinc-950 text-white text-xs sm:text-sm font-mono font-bold shadow-xl shadow-zinc-950/20 [transform-style:preserve-3d]"
          style={{
            transform: `translate3d(${badgeTranslateX * 0.8}px, ${badgeTranslateY * 0.8}px, 60px)`,
            transition: smoothTransition,
          }}
        >
          5+ Yrs
        </div>
      </div>
    </div>
  );
}
