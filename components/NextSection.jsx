"use client";

import Image from "next/image";
import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import FullText from "@/components/fulltext";
function Cards({ image, title, className, speed = 80,bg = "bg-black",text="white" }) {
  const ref = useRef(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], [-speed, speed]);

  return (
    <div
      ref={ref}
      className={`relative overflow-hidden ${bg} ${className}`}
    >
      <motion.div
  style={{ y }}
  whileHover={{ scale: 1.08 }}
  transition={{ duration: 0.4 }}
  className="absolute inset-0 scale-110"
>
        <Image
          src={image}
          alt={title}
          fill
          className="object-cover"
        />
      </motion.div>

      <div className="absolute inset-0  flex items-end p-6">
        <h2 className={`text-${text} text-2xl font-[Syne]`}>
          {title}
        </h2>
      </div>
    </div>
  );
}
function Text({
  size = "text-2xl",
  weight = "font-normal",
  color = "text-black",
  position = "relative",
   font = "font-[Syne]",
  top = "auto",
  left = "auto",
  right = "auto",
  bottom = "auto",
  className = "",
  children,
}) {
  return (
    <div
      className={`${position} ${size} ${weight} ${color} ${className} ${font}`}
      style={{ top, left, right, bottom }}
    >
      {children}
    </div>
  );
}


export default function NextSection() {
  return (<>
    <section className="relative h-screen w-full overflow-hidden bg-black flex items-center justify-center">

      {/* Wrapper */}
      <div className="w-[99%] h-[80%] flex flex-col gap-4">

        <div className="group inline-block cursor-pointer">
  <Text
    size="text-7xl"
    weight="font-bold"
    color="text-white"
  >
    My Projects
  </Text>

  <span
  className="
    mt-2 block h-[2px] w-70 rounded-full
    bg-black
    transition-all duration-300 ease-in-out

    group-hover:h-[5px]
    group-hover:bg-gradient-to-r
    group-hover:from-[#DC2F02]
    group-hover:via-[#FF7B00]
    group-hover:to-[#FFD60A]
  "
></span>
</div>
        {/* Cards Container */}
        <div className="flex-1 bg-black p-[3px] md:p-[6px] w-[calc(100%-2px)] h-[calc(100%-2px)] mx-auto my-auto">
  <div className="grid h-full grid-cols-2 grid-rows-[1fr_1.2fr] gap-[3px] md:gap-[6px] md:flex">
            <Cards
  image="/irah.png"
  title="IRAH TECH"
  className="col-span-1 md:flex-1"
  speed={40}
/>

<Cards
  image="/slv.png"
  title="AABHARNAM"
  className="col-span-1 md:flex-1"
  speed={70}
  bg="bg-white"
  text="black"
/>

<Cards
  image="/AABHARNAM.png"
  title="AABHARNAM"
  className="col-span-2 md:flex-[2]"
  speed={70}
  bg="bg-white"
  text="black"
/>

          </div>
          
        </div>

      </div>

    </section>
    </>
  );
}