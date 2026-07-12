"use client";

import { motion } from "framer-motion";

export default function SecondComponent() {
  return (
    <section className="min-h-[250vh] w-full bg-black text-white">
      {/* Hero */}
      <div className="sticky top-0 flex h-screen items-center justify-center border-b border-white/10">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <h1 className="text-7xl font-bold">The Interview I Wasn't Ready For</h1>
          <p className="mt-6 text-xl text-white/70">
            Continue scrolling...
          </p>
        </motion.div>
      </div>

      {/* Content */}

    </section>
  );
}