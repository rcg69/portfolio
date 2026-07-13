"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import FullText from "@/components/fulltext";

function ServiceCard({ title, description }) {
  return (
    <motion.div
      whileHover={{ y: -8, scale: 1.02 }}
      transition={{ duration: 0.3 }}
      className="flex flex-col justify-between rounded-2xl border border-neutral-800 bg-neutral-950 p-6 sm:p-7 lg:p-8"
    >
      <div>
        <h3 className="mb-3 font-[Syne] text-xl font-bold text-white sm:mb-4 sm:text-2xl lg:text-3xl">
          {title}
        </h3>
        <p className="font-[Syne] text-sm leading-relaxed text-neutral-400 sm:text-base">
          {description}
        </p>
      </div>
      <button className="mt-6 w-fit border border-white px-4 py-2 font-[Syne] text-sm text-white transition hover:bg-white hover:text-black sm:mt-8 sm:px-5 sm:text-base">
        Learn More →
      </button>
    </motion.div>
  );
}

export default function Services() {
  const containerRef = useRef(null);

  // Track scroll progress through this container specifically
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  // Services panel: starts fully below the viewport, slides up to 0
  const panelY = useTransform(scrollYProgress, [0, 0.6], ["100%", "0%"]);

  // FullText: subtle recede as the panel rises (depth cue)
  const textScale = useTransform(scrollYProgress, [0, 0.6], [1, 0.92]);
  const textOpacity = useTransform(scrollYProgress, [0, 0.5, 0.6], [1, 1, 0.4]);

  return (
    // Scroll distance — increase (e.g. 250vh) for a slower, longer pull.
    <div ref={containerRef} className="relative h-[220svh] w-full bg-black">
      {/* Sticky viewport — everything pins here while the container scrolls */}
      <div className="sticky top-0 h-[100svh] w-full overflow-hidden bg-black">
        {/* FULLTEXT — fills the pinned viewport, recedes slightly as panel arrives */}
        <motion.div
          style={{ scale: textScale, opacity: textOpacity }}
          className="absolute inset-0 z-0 flex items-center justify-center"
        >
          <FullText text="Services" />
        </motion.div>

        {/* SERVICES — hidden below viewport, dragged up by scroll progress */}
        <motion.section
          style={{ y: panelY }}
          className="absolute inset-0 z-10 overflow-y-auto rounded-t-[2rem] border-t border-neutral-800 bg-black py-14 shadow-[0_-60px_100px_-40px_rgba(0,0,0,0.95)] sm:rounded-t-[2.5rem] sm:py-16 lg:rounded-t-[3rem] lg:py-20"
        >
          <div className="mx-auto flex w-[92%] max-w-7xl flex-col gap-8 sm:w-[95%] sm:gap-10 lg:gap-12">
            {/* Heading */}
            <div>
              <h2 className="font-[Syne] text-4xl font-bold text-white sm:text-5xl lg:text-6xl">
                Services
              </h2>
              <div className="mt-3 h-[3px] w-32 bg-[#DC2F02] sm:w-40 lg:w-48" />
            </div>

            {/* Cards */}
            <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 sm:gap-6 lg:grid-cols-3">
              <ServiceCard
                title="Web Development"
                description="Modern, responsive, and high-performance websites built with React, Next.js, and Tailwind CSS."
              />
              <ServiceCard
                title="UI / UX Design"
                description="Clean, intuitive interfaces focused on user experience and engaging visual design."
              />
              <ServiceCard
                title="Backend Development"
                description="Scalable REST APIs and backend systems using Spring Boot, Node.js, PostgreSQL, and MongoDB."
              />
              <ServiceCard
                title="E-Commerce"
                description="Complete online store solutions with secure authentication, payments, and admin dashboards."
              />
              <ServiceCard
                title="AI Integration"
                description="Integrate AI chatbots, RAG systems, and automation into your applications."
              />
              <ServiceCard
                title="Maintenance"
                description="Continuous support, optimization, and feature enhancements after deployment."
              />
            </div>
          </div>
        </motion.section>
      </div>
    </div>
  );
}