import type { ReactNode } from "react";
import { useInView } from "../hooks/useInView";

type AnimationType = "fade-up" | "fade-down" | "fade-left" | "fade-right" | "zoom" | "flip";

type RevealProps = {
  children: ReactNode;
  delayMs?: number;
  animation?: AnimationType;
  duration?: number;
  distance?: number;
};

export default function Reveal({ 
  children, 
  delayMs = 0, 
  animation = "fade-up",
  duration = 10000,
  distance = 4
}: RevealProps) {
  const { ref, inView } = useInView<HTMLDivElement>({
    threshold: 0.1,
    rootMargin: "0px 0px -10% 0px"
  });

  const getAnimationClass = (type: AnimationType, isInView: boolean) => {
    const baseClasses = `transform transition will-change-auto`;
    const durationClass = `duration-${duration}`;
    
    const animationClasses = {
      'fade-up': isInView
        ? 'opacity-100 translate-y-0'
        : `opacity-0 translate-y-[${distance}px]`,
      'fade-down': isInView
        ? 'opacity-100 translate-y-0'
        : `opacity-0 -translate-y-[${distance}px]`,
      'fade-left': isInView
        ? 'opacity-100 translate-x-0'
        : `opacity-0 translate-x-[${distance}px]`,
      'fade-right': isInView
        ? 'opacity-100 translate-x-0'
        : `opacity-0 -translate-x-[${distance}px]`,
      'zoom': isInView
        ? 'opacity-100 scale-100'
        : 'opacity-0 scale-95',
      'flip': isInView
        ? 'opacity-100 rotate-0'
        : 'opacity-0 -rotate-12'
    };

    return `${baseClasses} ${durationClass} ease-out ${animationClasses[type]}`;
  };

  return (
    <div
      ref={ref}
      style={{ 
        transitionDelay: `${delayMs}ms`,
        transitionTimingFunction: "cubic-bezier(0.4, 0, 0.2, 1)"
      }}
      className={getAnimationClass(animation, inView)}
    >
      {children}
    </div>
  );
}


