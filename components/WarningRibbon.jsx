"use client";

import { motion } from "framer-motion";

export default function WarningRibbon({
  top,
  left,
  right,
  bottom,
  rotate = 0,
  scale = 1,
  width = "1200px",
  opacity = 1,
  zIndex = 1,
}) {
  return (
    <motion.img
      src="/ribbon1.png"
      alt=""
      draggable={false}
      className="absolute select-none pointer-events-none"
      style={{
        top,
        left,
        right,
        bottom,
        width,
        opacity,
        zIndex,
        rotate,
        scale,
        transformOrigin: "center",
      }}

      // Smooth flowing movement
      animate={{
        x: [0, 30, 0, -30, 0],
        y: [0, -3, 0, 3, 0],
      }}

      transition={{
        x: {
          duration: 100,
          repeat: Infinity,
          ease: "linear",
        },
        y: {
          duration: 100,
          repeat: Infinity,
          ease: "easeInOut",
        },
      }}
    />
  );
}