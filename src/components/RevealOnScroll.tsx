import { useEffect, useRef, useState, type ReactNode } from "react";

type RevealOnScrollProps = {
  children: ReactNode;
  /** Delay in ms before the fade-in starts after entering the viewport */
  delay?: number;
  /** Optional className to merge on the wrapper */
  className?: string;
};

/**
 * Wraps a section and fades it in (soft upward fade ~400ms) the first time it
 * scrolls into view. Uses IntersectionObserver and respects prefers-reduced-motion.
 */
const RevealOnScroll = ({ children, delay = 0, className = "" }: RevealOnScrollProps) => {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const reduceMotion =
      typeof window !== "undefined" &&
      window.matchMedia?.("(prefers-reduced-motion: reduce)").matches;

    if (reduceMotion) {
      setVisible(true);
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisible(true);
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -8% 0px" },
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      style={{
        opacity: visible ? 1 : 0,
        transform: visible ? "translateY(0)" : "translateY(16px)",
        transition: `opacity 400ms ease-out ${delay}ms, transform 400ms ease-out ${delay}ms`,
        willChange: "opacity, transform",
      }}
      className={className}
    >
      {children}
    </div>
  );
};

export default RevealOnScroll;
