"use client";

import { useEffect, useRef, useState } from "react";

interface StaggerProps {
  children: React.ReactNode[];
  gap?: number;
  className?: string;
}

export function Stagger({ children, gap = 0.09, className = "" }: StaggerProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.12 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <div ref={ref} className={className}>
      {(Array.isArray(children) ? children : [children]).map((child, i) => (
        <div
          key={i}
          style={{
            opacity: visible ? 1 : 0,
            transform: visible ? "translateY(0)" : "translateY(22px)",
            transition: `opacity 0.65s ease ${i * gap}s, transform 0.65s ease ${i * gap}s`,
          }}
        >
          {child}
        </div>
      ))}
    </div>
  );
}
