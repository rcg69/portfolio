"use client";
import ImageContainer from "@/components/container";
import { motion } from "framer-motion";
import Image from "next/image";
import Text from "@/components/Text";
function Milestone({ year, title, description }) {
  return (
    <motion.div
      whileHover={{ x: 10 }}
      className="border-l-2 border-[#DC2F02] pl-8 py-2"
    >
      <p className="text-sm tracking-[0.4em] text-orange-500 uppercase">
        {year}
      </p>

      <h3 className="mt-2 text-3xl font-[Syne] text-white">
        {title}
      </h3>

      <p className="mt-2 text-neutral-400 leading-8">
        {description}
      </p>
    </motion.div>
  );
}
export default function TheAscent() {
  return (
<section className="relative w-full bg-black py-24 overflow-hidden">
  <div className="mx-auto grid max-w-[1700px] grid-cols-1 lg:grid-cols-2 gap-20">

    {/* LEFT */}
    <div className="flex flex-col justify-center">

      <Text
        size="text-8xl"
        weight="font-bold"
        color="text-white"
      >
        THE ASCENT
      </Text>

      <p className="mt-10 text-xl text-neutral-400 leading-9">
        Curiosity became consistency. Small experiments became real
        applications, and every challenge became another step toward becoming a
        full-stack engineer.
      </p>

      {/* Timeline Cards */}

      <div className="mt-20 space-y-8">

        <Milestone
          year="2024"
          title="Frontend"
          description="React • Next.js • Tailwind • Framer Motion"
        />

        <Milestone
          year="2025"
          title="Backend"
          description="Spring Boot • Node • PostgreSQL • JWT"
        />

        <Milestone
          year="2026"
          title="Building Products"
          description="IRAH TECH • AABHARNAM • Portfolio"
        />

        <Milestone
          year="Today"
          title="Full Stack Developer"
          description="Building modern web experiences with AI."
        />

      </div>

    </div>

    {/* RIGHT */}

    <div className="sticky top-24 h-[80vh]">
      <ImageContainer
        src="/ram1.png"
        width="100%"
        height="100%"
        objectFit="contain"
        position="relative"
      />
    </div>

  </div>
</section>
  );
}