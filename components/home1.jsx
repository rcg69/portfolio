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
            The Spark
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
              src="/anvaya.png"
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
              Anvaya was my first real project — built with zero web dev
              experience, six full rebuilds, and a lot of trial and error over
              a month and a half. I&apos;ve left it untouched on purpose: it&apos;s
              not my best work, but it&apos;s the milestone that started
              everything.
            </Text>
             <span className="mt-1 h-28 w-[2px] bg-[#DC2F02] shrink-0 rounded-full" />
            {/* Desktop: full text, scroll-driven crossfade per paragraph */}
            <div className="hidden lg:flex lg:flex-col lg:gap-10">
                <StoryBlock>
              <ScrollFadeParagraph className="text-2xl font-medium text-white leading-9 text-right">
                Anvaya was my first real web project. When I started, I knew
                almost nothing about web development. React, Node.js,
                routing, APIs—everything was new to me. I relied heavily on
                ChatGPT, experimenting with every suggestion and learning
                through constant trial and error.
                
              </ScrollFadeParagraph>
              </StoryBlock>
              <StoryBlock>
              <ScrollFadeParagraph className="text-2xl font-medium text-white leading-9 text-right">
                The website wasn&apos;t built in a single attempt. It took six
                complete rebuilds over the course of one and a half months
                before I had something that partially worked. Along the way,
                I gradually learned the fundamentals of React, Node.js,
                debugging, and how web applications actually come together.
              </ScrollFadeParagraph>
</StoryBlock>
              <StoryBlock>
              <ScrollFadeParagraph className="text-2xl font-medium text-white leading-9 text-right">
                Looking back, I could easily rebuild or improve Anvaya today,
                but I&apos;ve deliberately left it untouched. It represents
                where I started—not where I am now. Every mistake, broken
                feature, and imperfect implementation reminds me of the
                persistence that shaped my journey.
              </ScrollFadeParagraph>
</StoryBlock> <StoryBlock>
              <ScrollFadeParagraph className="text-2xl font-bold text-white leading-9 text-right">
                Anvaya isn&apos;t my best project. It&apos;s my first
                milestone—the foundation that sparked everything that
                followed.
              </ScrollFadeParagraph>
</StoryBlock>
              <motion.a
                href="https://anvaya-dm8j.onrender.com/"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ x: 4, y: -4 }}
                transition={{ duration: 0.25 }}
                className="inline-flex items-center gap-3 text-white hover:text-orange-500 transition-colors duration-300 lg:ml-auto"
              >
                Visit Anvaya
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="26"
                  height="26"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71" />
                  <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71" />
                </svg>
              </motion.a>
            </div>

            {/* Visit link for mobile/tablet only */}
            <motion.a
              href="https://anvaya-dm8j.onrender.com/"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ x: 4, y: -4 }}
              transition={{ duration: 0.25 }}
              className="mt-8 lg:hidden inline-flex items-center gap-3 text-white hover:text-orange-500 transition-colors duration-300"
            >
              Visit Anvaya
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="26"
                height="26"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71" />
                <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71" />
              </svg>
            </motion.a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}