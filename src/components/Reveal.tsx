import type { ReactNode, CSSProperties } from "react";
import { useInView } from "../hooks/useInView";

type AnimationType = "fade-up" | "fade-down" | "fade-left" | "fade-right" | "zoom" | "flip";

type RevealProps = {
  children: ReactNode;
  delayMs?: number;
  animation?: AnimationType;
  duration?: number;
  distance?: number;
  className?: string;
};

export default function Reveal({ 
  children, 
  delayMs = 0, 
  animation = "fade-up",
  duration = 750,
  distance = 24,
  className = ""
}: RevealProps) {
  const { ref, inView } = useInView<HTMLDivElement>({
    threshold: 0.1,
    rootMargin: "0px 0px -6% 0px"
  });

  const getTransform = (type: AnimationType): string => {
    if (inView) return "translate3d(0, 0, 0) scale(1)";
    switch (type) {
      case "fade-up":
        return `translate3d(0, ${distance}px, 0) scale(0.985)`;
      case "fade-down":
        return `translate3d(0, -${distance}px, 0) scale(0.985)`;
      case "fade-left":
        return `translate3d(${distance}px, 0, 0) scale(0.985)`;
      case "fade-right":
        return `translate3d(-${distance}px, 0, 0) scale(0.985)`;
      case "zoom":
        return "scale(0.94)";
      case "flip":
        return "rotate(-8deg) scale(0.96)";
      default:
        return `translate3d(0, ${distance}px, 0) scale(0.985)`;
    }
  };

  const style: CSSProperties = {
    opacity: inView ? 1 : 0,
    transform: getTransform(animation),
    transitionProperty: "opacity, transform",
    transitionDuration: `${duration}ms`,
    transitionDelay: `${delayMs}ms`,
    transitionTimingFunction: "cubic-bezier(0.16, 1, 0.3, 1)",
    willChange: "opacity, transform",
  };

  return (
    <div ref={ref} style={style} className={className}>
      {children}
    </div>
  );
}
