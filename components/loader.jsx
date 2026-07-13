"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function Loader() {
  const duration = 3000;
  const [progress, setProgress] = useState(0);
  const [exit, setExit] = useState(false);

  useEffect(() => {
    const start = Date.now();

    const interval = setInterval(() => {
      const elapsed = Date.now() - start;
      const percentage = Math.min((elapsed / duration) * 100, 100);

      setProgress(Math.round(percentage));

      if (percentage >= 100) {
        clearInterval(interval);
        setExit(true);
      }
    }, 16);

    return () => clearInterval(interval);
  }, []);

  return (
    <AnimatePresence>
      {!exit && (
       <motion.div
  className="fixed inset-0 z-[9999] flex items-center justify-center bg-black"
  initial={{ y: 0 }}
  animate={{ y: 0 }}
  exit={{ y: "-100%" }}
  transition={{
    duration: 0.9,
    ease: [0.87, 0, 0.13, 1],
  }}
>
  <motion.div
    className="flex flex-col items-center"
    exit={{
      y: "-180%",
      opacity: 0,
      scale: 0.95,
    }}
    transition={{
      duration: 0.9,
      ease: [0.87, 0, 0.13, 1],
    }}
  >
    <p className="mb-4 text-3xl font-bold text-white">
      {progress}%
    </p>

    <div className="h-2 w-80 overflow-hidden rounded-full bg-gray-800">
      <motion.div
        className="h-full bg-white"
        animate={{ width: `${progress}%` }}
        transition={{ duration: 0.08 }}
      />
    </div>
  </motion.div>
</motion.div>
      )}
    </AnimatePresence>
  );
}