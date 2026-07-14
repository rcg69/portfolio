"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import ImageContainer from "./container";
import Text from "@/components/Text";

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (delay = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, delay, ease: [0.25, 0.1, 0.25, 1] },
  }),
};
function StoryBlock({ children, className = "" }) {
  return (
    <div className={`flex items-stretch gap-6 ${className}`}>
      <div className="flex-1">
        {children}
      </div>

      <span className="w-[2px] self-stretch rounded-full bg-[#DC2F02] shrink-0" />
    </div>
  );
}
// Desktop-only: each paragraph fades in as it enters the viewport
// and fades out as it scrolls past — old context dissolves as new appears.
function ScrollFadeParagraph({ children, className = "" }) {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start 0.85", "start 0.35", "end 0.65", "end 0.15"],
  });

  const opacity = useTransform(scrollYProgress, [0, 1, 2, 3], [0, 1, 1, 0]);
  const y = useTransform(scrollYProgress, [0, 1, 2, 3], [24, 0, 0, -24]);

  return (
    <motion.p ref={ref} style={{ opacity, y }} className={className}>
      {children}
    </motion.p>
  );
}

export default function Home1() {
  return (
    <section className="relative w-full bg-black overflow-hidden lg:overflow-visible py-16 px-4 sm:px-8 lg:py-24 lg:px-16">
     <div className="flex flex-col items-center gap-8 w-full max-w-[1700px] mx-auto">
        {/* Heading — standalone, centered, above everything on all screen sizes */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={fadeUp}
          custom={0}
          className="w-full text-center"
        >
          <Text
  size="text-7xl sm:text-8xl lg:text-9xl xl:text-[10rem]"
  weight="font-bold"
  color="text-white"
>
  Tech Stack
</Text>
        </motion.div>

        {/* Image + Text — two-column on desktop, stacked on mobile */}
        <div className="flex flex-col items-center gap-8 w-full lg:grid lg:grid-cols-2 lg:gap-16 lg:items-start">
          {/* Image */}
          <motion.a
            href="https://anvaya-dm8j.onrender.com/"
            target="_blank"
            rel="noopener noreferrer"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={fadeUp}
            custom={0.15}
            className="block cursor-pointer w-full max-w-sm sm:max-w-md aspect-square lg:aspect-auto lg:max-w-none lg:w-full lg:h-[70vh] lg:sticky lg:top-24"
          >
            <ImageContainer
              src="/LOGO.png"
              width="100%"
              height="100%"
              objectFit="contain"
              position="relative"
            />
          </motion.a>

          {/* Text card */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={fadeUp}
            custom={0.3}
            className="w-full bg-black rounded-[20px] p-6 sm:p-8 lg:p-12"
          >
            {/* Mobile / tablet: summarized, static reveal */}
            <Text
  size="text-base sm:text-lg"
  weight="font-medium"
  color="text-white"
  className="leading-7 lg:hidden text-left"
>
  Over the years I've explored modern frontend, backend, databases, and AI
  technologies. Every project has helped me build a stronger understanding of
  creating scalable, high-performance web applications.
</Text>
             <span className="mt-1 h-28 w-[2px] bg-[#DC2F02] shrink-0 rounded-full" />
            {/* Desktop: full text, scroll-driven crossfade per paragraph */}
            <div className="hidden lg:flex lg:flex-col lg:gap-10">
                <StoryBlock>
              <ScrollFadeParagraph className="text-2xl font-medium text-white leading-9 text-right">
  My journey began with curiosity and gradually evolved into mastering modern
  web technologies. Every project introduced new challenges that expanded my
  understanding of building complete digital products.
</ScrollFadeParagraph>
              </StoryBlock>
              <StoryBlock>
              <ScrollFadeParagraph className="text-2xl font-medium text-white leading-9 text-right">
  On the frontend, I primarily work with React, Next.js, Tailwind CSS,
  JavaScript, and Framer Motion to create responsive, interactive, and visually
  engaging user experiences.
</ScrollFadeParagraph>
</StoryBlock>
              <StoryBlock>
             <ScrollFadeParagraph className="text-2xl font-medium text-white leading-9 text-right">
  For backend development I use Spring Boot, Node.js, Express, PostgreSQL, and
  MongoDB to build secure REST APIs, authentication systems, and scalable
  database architectures.
</ScrollFadeParagraph>
</StoryBlock> <StoryBlock>
              <ScrollFadeParagraph className="text-2xl font-bold text-white leading-9 text-right">
  Today my stack extends beyond development into AI integration, deployment,
  and performance optimization—allowing me to transform ideas into production
  ready applications.
</ScrollFadeParagraph>
</StoryBlock>
              
            </div>


          </motion.div>
        </div>
      </div>
    </section>
  );
}