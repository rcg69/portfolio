"use client";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Header from "@/components/header";
import WarningRibbon from "@/components/WarningRibbon";

// Computes how much to scale the hero image down so it clears
// the mobile header instead of being cropped behind it.

function useHeroScale() {
  const [scale, setScale] = useState(1);

  useEffect(() => {
    function computeScale() {
      const width = window.innerWidth;
      const height = window.innerHeight;

      // Match this to your actual mobile header height (.hnb-mobile-bar)
      const headerHeight = width < 768 ? 72 : 0;

      const availableHeight = height - headerHeight;
      const nextScale = availableHeight / height;

      setScale(nextScale);
    }

    computeScale();
    window.addEventListener("resize", computeScale);
    window.addEventListener("orientationchange", computeScale);

    return () => {
      window.removeEventListener("resize", computeScale);
      window.removeEventListener("orientationchange", computeScale);
    };
  }, []);

  return scale;
}

export default function Hero() {
 

  return (
    <>
      <section className="relative h-screen w-full overflow-hidden">
        <section className="relative h-screen w-full overflow-hidden">
          <Header />
<img
  src="/ram3.png"
  alt="Hero"
  className="
    absolute
    bottom-0
    left-1/2
    -translate-x-1/2
    h-[calc(100dvh-72px)]
    md:h-screen
    w-auto
    object-contain
    pointer-events-none
    z-10
  "
/>
        </section>
<div className="relative h-screen pt-10">
        <img
  src="/ram3.png"
  alt="Hero1"
  className="
    absolute
    bottom-0
    left-1/2
    -translate-x-1/2
    h-[calc(100dvh-72px)]
    md:h-screen
    w-auto
    object-contain
    pointer-events-none
    select-none
    z-10
  "
/>
</div>
        {/* Hero copy — anchored bottom-right, clear of subject and nav on every screen size */}
        <div
          className="
            absolute
            bottom-[4%]
            right-[4%]
            left-[4%]
            sm:left-auto
            sm:w-[60vw]
            z-20
            flex
            flex-col
            items-end
            text-right
          "
        >
          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="
              font-[Syne]
              font-black
              text-white
              leading-[0.95]
              tracking-[-0.03em]
              text-[clamp(6rem,7vw,10rem)]
              w-full
            "
          >
            <span className="bg-gradient-to-r from-[#FFFFFF] via-[#FFFFFF] to-[#FF6A00] bg-clip-text text-transparent">
              Crafting the Future
            </span>{" "}
            <span className="bg-gradient-to-r from-[#FFFFFF] via-[#FFFFFF] to-[#FF6A00] bg-clip-text text-transparent">
              One Pixel at a Time.
            </span>
          </motion.h1>
        </div>
      </section>
    </>
  );
}