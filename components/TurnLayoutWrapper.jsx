"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

export default function TurnLayoutWrapper({
  firstComponent,
  secondComponent,
}) {
  const ref = useRef(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end end"],
  });

  const firstX = useTransform(scrollYProgress, [0, 1], ["0%", "-100%"]);
  const secondX = useTransform(scrollYProgress, [0, 1], ["100%", "0%"]);

  return (
    <section
      ref={ref}
      className="relative h-[300vh] w-full"
    >
      <div className="sticky top-0 h-screen w-full overflow-hidden">
        {/* First Component */}
        <motion.div
          style={{ x: firstX }}
          className="absolute inset-0 h-full w-full"
        >
          {firstComponent}
        </motion.div>

        {/* Second Component */}
        <motion.div
          style={{ x: secondX }}
          className="absolute inset-0 h-full w-full"
        >
          {secondComponent}
        </motion.div>
      </div>
    </section>
  );
}