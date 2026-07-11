"use client";
import { motion } from "framer-motion";
import Header from "@/components/header";
import WarningRibbon from "@/components/WarningRibbon";
export default function Hero() {
  return (<>
    <section className="relative h-screen w-full overflow-hidden">
      {/* Background Video */}
      {/* <video
        className="absolute inset-0 h-full w-full object-cover"
        autoPlay
        muted
        loop
        playsInline
        preload="auto"
      >
        <source src="/ram.mp4" type="video/mp4" />
        
      </video> */}
      <section className="relative h-screen w-full overflow-hidden">

    <Header />

    <WarningRibbon
  top="120px"
  left="80px"
  rotate={-5}
  scale={1.5}
  width="1400px"
  opacity={0.9}
  zIndex={5}
/>
<WarningRibbon
  top="20px"
  left="78px"
  rotate={10}
  scale={1.5}
  width="1400px"
  opacity={0.9}
  zIndex={5}
  duration={8}
/>

    <img
      src="/ram.png"
      alt="Hero"
      className="
      absolute
      bottom-0
      left-1/2
      -translate-x-1/2
      h-[100vh]
      w-auto
      object-contain
      z-10
      pointer-events-none
      "
    />

    {/* Hero Text */}

</section>
        <img
    src="/ram.png"
    alt="Hero"
    className="
      absolute
      bottom-0
      left-1/2
      -translate-x-1/2
      h-[100vh]
      w-auto
      object-contain
      pointer-events-none
      select-none
      z-10
    "
  />

      {/* Dark overlay for text legibility — heavier on the right where copy sits */}

      {/* Hero copy — anchored bottom-right, clear of subject and nav on every screen size */}
     <div
  className="
    absolute
    bottom-[4%]
    right-[4%]

    w-[60vw]
    

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

  text-[clamp(1.5rem,7vw,13rem)]

  w-full
"
        >
          Crafting the Future{" "}
      <span className="bg-gradient-to-r from-[#D90429] via-[#FF3C00] to-[#FF6A00] bg-clip-text text-transparent">
  One Pixel at a Time.
</span>
        </motion.h1>

{/*         <motion.p
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.25, ease: [0.22, 1, 0.36, 1] }}
          className="
            mt-4 text-black
            text-[clamp(0.9rem,1.3vw,1.1rem)]
            max-w-[38ch] ml-auto
            leading-relaxed
          "
        >
          IRAH TECH crafts high-performance web apps, storefronts, and brand
          systems for businesses ready to grow.
        </motion.p> */}
      </div>
    </section></>
   
  );
}