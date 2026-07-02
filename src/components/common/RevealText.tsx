"use client";

import { motion } from "framer-motion";

interface RevealTextProps {
  text: string;
  className?: string;
  delay?: number;
}

export function RevealText({
  text,
  className = "",
  delay = 0,
}: RevealTextProps) {
  const words = text.split(" ");

  const container = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.04,
        delayChildren: delay,
      },
    },
  };

  const child = {
    hidden: {
      y: "100%",
      opacity: 0,
    },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
        ease: [0.25, 0.1, 0.25, 1],
      },
    },
  };

  return (
    <motion.span
      variants={container}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      className={`inline-flex flex-wrap ${className}`}
    >
      {words.map((word, i) => (
        <span key={i} className="reveal-text mr-[0.25em]">
          <motion.span variants={child} className="reveal-text-word inline-block">
            {word}
          </motion.span>
        </span>
      ))}
    </motion.span>
  );
}
