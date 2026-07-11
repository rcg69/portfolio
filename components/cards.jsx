"use client";

import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";

function Cards({
  image,
  title,
  width = "100%",
  height = "100%",
  className = "",
  speed = 50, // controls parallax intensity
}) {
  const { scrollYProgress } = useScroll();

  // Image moves slower than the page
  const y = useTransform(scrollYProgress, [0, 1], [-speed, speed]);

  return (
    <div
      className={`relative overflow-hidden ${className}`}
      style={{ width, height }}
    >
      <motion.div
        style={{ y }}
        className="absolute inset-0 scale-110"
      >
        <Image
          src={image}
          alt={title}
          fill
          className="object-cover"
          priority
        />
      </motion.div>

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/30" />

      {/* Title */}
      <div className="absolute inset-0 flex items-end p-6">
        <h2 className="text-white text-2xl font-bold">{title}</h2>
      </div>
    </div>
  );
}

export default Cards;