"use client";

import { useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

export function useScrollZoom(
  inputRange: [number, number] = [0, 1],
  outputRange: [number, number] = [1, 1.15],
) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  const scale = useTransform(scrollYProgress, inputRange, outputRange);

  return { ref, scale };
}
