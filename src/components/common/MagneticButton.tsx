"use client";

import { useMotionValue, useSpring, useTransform, motion } from "framer-motion";
import type { ReactNode } from "react";

interface MagneticButtonProps {
  children: ReactNode;
  className?: string;
  as?: "div" | "span";
}

export function MagneticButton({ children, className = "", as = "div" }: MagneticButtonProps) {
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const xSpring = useSpring(x, { stiffness: 200, damping: 20 });
  const ySpring = useSpring(y, { stiffness: 200, damping: 20 });

  const translateX = useTransform(xSpring, (v) => v);
  const translateY = useTransform(ySpring, (v) => v);

  function handleMouse(e: React.MouseEvent<HTMLDivElement>) {
    const rect = e.currentTarget.getBoundingClientRect();
    const distX = e.clientX - rect.left - rect.width / 2;
    const distY = e.clientY - rect.top - rect.height / 2;
    x.set(distX * 0.15);
    y.set(distY * 0.15);
  }

  function handleLeave() {
    x.set(0);
    y.set(0);
  }

  const Component = motion(as === "span" ? "span" : "div");

  return (
    <Component
      onMouseMove={handleMouse}
      onMouseLeave={handleLeave}
      style={{ x: translateX, y: translateY }}
      className={className}
    >
      {children}
    </Component>
  );
}
