"use client";

import { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

export function CustomCursor() {
  const [isHovering, setIsHovering] = useState(false);
  const [visible, setVisible] = useState(false);

  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);

  const springConfig = { stiffness: 300, damping: 28 };
  const cursorXSpring = useSpring(cursorX, springConfig);
  const cursorYSpring = useSpring(cursorY, springConfig);

  const ringXSpring = useSpring(cursorX, { stiffness: 150, damping: 20 });
  const ringYSpring = useSpring(cursorY, { stiffness: 150, damping: 20 });

  useEffect(() => {
    function move(e: MouseEvent) {
      cursorX.set(e.clientX - 4);
      cursorY.set(e.clientY - 4);
    }

    function enterInteractive(e: MouseEvent) {
      const target = e.target as HTMLElement;
      if (
        target.tagName === "A" ||
        target.tagName === "BUTTON" ||
        target.closest("a") ||
        target.closest("button") ||
        target.closest('[role="button"]')
      ) {
        setIsHovering(true);
      }
    }

    function leaveInteractive(e: MouseEvent) {
      const target = e.target as HTMLElement;
      if (
        target.tagName === "A" ||
        target.tagName === "BUTTON" ||
        target.closest("a") ||
        target.closest("button") ||
        target.closest('[role="button"]')
      ) {
        setIsHovering(false);
      }
    }

    function handleMouseEnter() {
      setVisible(true);
    }
    function handleMouseLeave() {
      setVisible(false);
    }

    document.addEventListener("mousemove", move, { passive: true });
    document.addEventListener("mouseover", enterInteractive, { passive: true });
    document.addEventListener("mouseout", leaveInteractive, { passive: true });
    document.addEventListener("mouseenter", handleMouseEnter);
    document.addEventListener("mouseleave", handleMouseLeave);

    document.body.style.cursor = "none";

    return () => {
      document.removeEventListener("mousemove", move);
      document.removeEventListener("mouseover", enterInteractive);
      document.removeEventListener("mouseout", leaveInteractive);
      document.removeEventListener("mouseenter", handleMouseEnter);
      document.removeEventListener("mouseleave", handleMouseLeave);
      document.body.style.cursor = "";
    };
  }, []);

  if (!visible) return null;

  return (
    <>
      <motion.div
        className="fixed top-0 left-0 w-2 h-2 rounded-full bg-blue pointer-events-none z-[99999] mix-blend-difference"
        style={{ x: cursorXSpring, y: cursorYSpring }}
      />
      <motion.div
        className="fixed top-0 left-0 pointer-events-none z-[99998] rounded-full border border-blue/50"
        style={{
          x: ringXSpring,
          y: ringYSpring,
          width: isHovering ? 48 : 32,
          height: isHovering ? 48 : 32,
          marginLeft: isHovering ? -24 : -16,
          marginTop: isHovering ? -24 : -16,
          transition: "width 0.2s, height 0.2s, margin 0.2s",
        }}
      />
    </>
  );
}
