"use client";
import Image from "next/image";
import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import FullText from "@/components/fulltext";

function ServiceCard({
  title,
  description,
  src = "",
  points = [],
  number = "01",
}) {
  return (
    <motion.div
      whileHover={{ y: -10, scale: 1.02 }}
      transition={{ duration: 0.35 }}
      className="group relative flex min-h-[650px] flex-col overflow-hidden border border-neutral-800 bg-neutral-950 p-8 transition-all duration-500 hover:border-[#DC2F02] hover:shadow-[0_0_50px_rgba(220,47,2,0.18)]"
    >
      {/* Animated Top Line */}
      <div className="absolute left-0 top-0 h-[3px] w-0 bg-[#DC2F02] transition-all duration-500 group-hover:w-full" />

      {/* Large Background Number */}
   {/* Large Background Number */}
<span
  className="
    pointer-events-none
    absolute
    inset-0
    flex
    items-center
    justify-center
    select-none
    font-[Syne]
    text-[18rem]
    font-extrabold
    leading-none
    tracking-[-0.08em]
    text-white/[0.03]
    transition-all
    duration-500
    group-hover:scale-105
    group-hover:text-[#DC2F02]/8
  "
>
  {number}
</span>

      {/* Content */}
      <div className="relative z-10">
        <h3 className="mb-4 font-[Syne] text-3xl font-bold text-white">
          {title}
        </h3>

        <p className="font-[Syne] text-[15px] leading-7 text-neutral-400">
          {description}
        </p>

        <ul className="mt-8 space-y-4">
          {points.map((point, index) => (
            <li
              key={index}
              className="flex items-center gap-3 font-[Syne] text-[20px] text-neutral-300"
            >
              <span className="h-2.5 w-2.5 rounded-full bg-[#DC2F02] transition-transform duration-300 group-hover:scale-125" />
              {point}
            </li>
          ))}
        </ul>
      </div>


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
              <h2 className=" font-[Syne] text-4xl font-bold text-white sm:text-5xl lg:text-6xl">
                Services
              </h2>
              <div className="mt-3 h-[3px]  w-32 bg-[#DC2F02] sm:w-40 lg:w-48" />
            </div>

            {/* Cards */}
            <div className="min-h-[650px] grid grid-cols-1 gap-5 sm:grid-cols-2 sm:gap-6 lg:grid-cols-3">
             <ServiceCard
  number="01"
  src="/ram1.png"
  title="Web Development"
  description="Custom, responsive, and high-performance websites built with modern technologies."
  points={[
    "React & Next.js",
    "Responsive Design",
    "Fast Performance",
    "Modern UI/UX",
    "API Integration",
  ]}
/>

<ServiceCard
  number="02"
  src="/ram1.png"
  title="Web Maintenance"
  description="Reliable support and continuous improvements after deployment."
  points={[
    "Bug Fixes",
    "Security Updates",
    "Performance Optimization",
    "Backups",
    "24/7 Monitoring",
  ]}
/>

<ServiceCard
  number="03"
  src="/ram1.png"
  title="SEO"
  description="Improve your search rankings and website visibility."
  points={[
    "Technical SEO",
    "On-Page Optimization",
    "Core Web Vitals",
    "Schema Markup",
    "Analytics & Reports",
  ]}
/>
            </div>
          </div>
        </motion.section>
      </div>
    </div>
  );
}