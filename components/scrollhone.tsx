"use client";
import { useScroll, useTransform, motion, MotionValue } from "framer-motion";
import Image from "next/image";
import React, { useRef } from "react";

interface TimelineEntry {
  title: string;
  content: React.ReactNode;
  image: string;
}

const data: TimelineEntry[] = [
  {
    title: "The Spark",
    image: "/ram.png",
    content: (
      <div className="space-y-3">
        <h4 className="font-[Syne] text-2xl font-bold text-white sm:text-3xl">
          Every journey starts with curiosity.
        </h4>
        <p className="font-[Syne] leading-relaxed text-neutral-400">
          A single question—"How are websites built?"—turned into countless
          hours of learning, experimenting, and creating. That curiosity
          became the foundation of everything that followed.
        </p>
      </div>
    ),
  },
  {
    title: "Learning",
    image: "/ram.png",
    content: (
      <div className="space-y-3">
        <h4 className="font-[Syne] text-2xl font-bold text-white sm:text-3xl">
          Building the fundamentals.
        </h4>
        <p className="font-[Syne] leading-relaxed text-neutral-400">
          Mastered HTML, CSS, JavaScript, and modern React development while
          understanding how beautiful interfaces and user experiences come
          together.
        </p>
      </div>
    ),
  },
  {
    title: "Frontend",
    image: "/ram.png",
    content: (
      <div className="space-y-3">
        <h4 className="font-[Syne] text-2xl font-bold text-white sm:text-3xl">
          Bringing ideas to life.
        </h4>
        <p className="font-[Syne] leading-relaxed text-neutral-400">
          Developed responsive, animated, and high-performance applications
          using React, Next.js, Tailwind CSS, and Framer Motion, focusing on
          pixel-perfect design and smooth interactions.
        </p>
      </div>
    ),
  },
  {
    title: "Backend",
    image: "/ram.png",
    content: (
      <div className="space-y-3">
        <h4 className="font-[Syne] text-2xl font-bold text-white sm:text-3xl">
          Engineering scalable systems.
        </h4>
        <p className="font-[Syne] leading-relaxed text-neutral-400">
          Built secure REST APIs with Spring Boot and Node.js, implemented JWT
          authentication, integrated PostgreSQL and MongoDB, and designed
          scalable backend architectures.
        </p>
      </div>
    ),
  },
  {
    title: "Projects",
    image: "/ram.png",
    content: (
      <div className="space-y-3">
        <h4 className="font-[Syne] text-2xl font-bold text-white sm:text-3xl">
          Turning knowledge into products.
        </h4>
        <p className="font-[Syne] leading-relaxed text-neutral-400">
          Created production-ready applications including e-commerce
          platforms, AI-powered solutions, portfolio experiences, and custom
          web applications for clients.
        </p>
      </div>
    ),
  },
  {
    title: "Innovation",
    image: "/ram.png",
    content: (
      <div className="space-y-3">
        <h4 className="font-[Syne] text-2xl font-bold text-white sm:text-3xl">
          Exploring AI and intelligent systems.
        </h4>
        <p className="font-[Syne] leading-relaxed text-neutral-400">
          Expanded into Generative AI, Retrieval-Augmented Generation (RAG),
          intelligent assistants, and workflow automation to build smarter
          digital experiences.
        </p>
      </div>
    ),
  },
  {
    title: "Today",
    image: "/ram.png",
    content: (
      <div className="space-y-3">
        <h4 className="font-[Syne] text-2xl font-bold text-white sm:text-3xl">
          Building what's next.
        </h4>
        <p className="font-[Syne] leading-relaxed text-neutral-400">
          Continuously designing, developing, and delivering modern web
          applications that combine elegant design, robust engineering, and
          cutting-edge technology.
        </p>
      </div>
    ),
  },
];

function TimelineSlide({
  entry,
  index,
  total,
  progress,
}: {
  entry: TimelineEntry;
  index: number;
  total: number;
  progress: MotionValue<number>;
}) {
  const sliceSize = 1 / total;
  const sliceStart = index * sliceSize;
  const sliceEnd = sliceStart + sliceSize;

  // Content + image: enter over first ~25%, hold, exit over last ~25%
  const enterEnd = sliceStart + sliceSize * 0.25;
  const exitStart = sliceEnd - sliceSize * 0.25;

  const y = useTransform(
    progress,
    [sliceStart, enterEnd, exitStart, sliceEnd],
    index === 0 ? [0, 0, 0, -80] : [80, 0, 0, -80]
  );
  const contentOpacity = useTransform(
    progress,
    [sliceStart, enterEnd, exitStart, sliceEnd],
    index === 0 ? [1, 1, 1, 0] : [0, 1, 1, 0]
  );

  // TITLE: fades in fast (first 12% of its slice) and stays fully visible
  // almost the entire slice — only fading out right at the very end (last 8%),
  // so it's readable the whole time you're scrolling through this section
  // instead of disappearing along with the paragraph text.
  const titleFadeInEnd = sliceStart + sliceSize * 0.12;
  const titleFadeOutStart = sliceEnd - sliceSize * 0.08;
  const titleOpacity = useTransform(
    progress,
    [sliceStart, titleFadeInEnd, titleFadeOutStart, sliceEnd],
    index === 0 ? [1, 1, 1, 0] : [0, 1, 1, 0]
  );
  const titleY = useTransform(
    progress,
    [sliceStart, titleFadeInEnd],
    index === 0 ? [0, 0] : [30, 0]
  );

  const visibility = useTransform(
    progress,
    [sliceStart, sliceStart + 0.001, sliceEnd - 0.001, sliceEnd],
    ["hidden", "visible", "visible", "hidden"]
  );
  const pointerEvents = useTransform(contentOpacity, (v): "auto" | "none" =>
    v > 0.05 ? "auto" : "none"
  );

  return (
    <motion.div
      style={{ visibility, pointerEvents }}
      className="absolute inset-0 flex flex-col items-center justify-center overflow-y-auto px-4 py-24 sm:px-6 md:overflow-visible md:py-0 md:pl-28 md:pr-8 lg:pr-16"
    >
      <div className="mx-auto flex w-full max-w-6xl flex-col items-center gap-8 md:flex-row md:items-center md:gap-10 lg:gap-16">
        {/* TEXT COLUMN */}
        <motion.div
          style={{ y, opacity: contentOpacity }}
          className="order-2 w-full max-w-xl text-center md:order-1 md:w-1/2 md:text-left"
        >
          <span className="mb-2 block font-[Space_Mono] text-xs tracking-widest text-neutral-500">
            {String(index + 1).padStart(2, "0")} / {String(total).padStart(2, "0")}
          </span>

          {/* Title — independent, more persistent opacity/entrance */}
          <motion.h3
            style={{ opacity: titleOpacity, y: titleY }}
            className="mb-4 font-[Syne] text-3xl font-bold text-white sm:text-4xl md:text-5xl"
          >
            {entry.title}
          </motion.h3>

          {entry.content}
        </motion.div>

        {/* IMAGE COLUMN — responsive across all breakpoints */}
        <motion.div
          style={{ y, opacity: contentOpacity }}
          className="order-1 w-full max-w-xs md:order-2 md:w-1/2 md:max-w-none"
        >
          <div className="relative aspect-square w-full overflow-hidden rounded-2xl border border-neutral-800 bg-neutral-950 sm:aspect-[4/3] md:aspect-square">
            <Image
              src={entry.image}
              alt={entry.title}
              fill
              className="object-cover"
              sizes="(max-width: 768px) 90vw, (max-width: 1024px) 40vw, 480px"
              priority={index === 0}
            />
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
}

export const Timeline = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const total = data.length;

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  const fillHeight = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);
  const dotTop = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  return (
    <div className="w-full bg-black font-[Syne]">
      <div className="mx-auto max-w-7xl px-4 py-20 md:px-8 lg:px-10">
        <h2 className="mb-4 max-w-4xl font-[Syne] text-lg text-white md:text-4xl">
          Changelog from my journey
        </h2>
        <p className="max-w-sm font-[Syne] text-sm text-neutral-400 md:text-base">
          Here's a timeline of my journey — scroll to move through it.
        </p>
      </div>

      <div ref={containerRef} className="relative" style={{ height: `${total * 100}svh` }}>
        <div className="sticky top-0 h-[100svh] w-full overflow-hidden">
          <div className="absolute left-8 top-1/2 hidden h-[55vh] w-[2px] -translate-y-1/2 bg-neutral-800 md:block">
            <motion.div
              style={{ height: fillHeight }}
              className="absolute left-0 top-0 w-full rounded-full bg-gradient-to-b from-purple-500 via-blue-500 to-transparent"
            />
            <motion.div
              style={{ top: dotTop }}
              className="absolute left-1/2 h-4 w-4 -translate-x-1/2 -translate-y-1/2 rounded-full bg-white shadow-[0_0_20px_rgba(168,85,247,0.8)]"
            />
          </div>

          {data.map((entry, i) => (
            <TimelineSlide
              key={entry.title}
              entry={entry}
              index={i}
              total={total}
              progress={scrollYProgress}
            />
          ))}
        </div>
      </div>
    </div>
  );
};