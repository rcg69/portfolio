"use client";

import { motion } from "framer-motion";

export default function NextSection() {
  return (
    <section className="
      relative
      h-screen
      w-full
      overflow-hidden
      bg-black
    ">

      {/* Full Screen Video */}
      <video
        className="
          absolute
          inset-0
          h-full
          w-full
          object-cover
        "
        autoPlay
        muted
        loop
        playsInline
        preload="auto"
      >
        <source src="/demo.mp4" type="video/mp4" />
      </video>


      {/* Dark cinematic overlay */}
      <div
        className="
          absolute
          inset-0
          bg-black/40
        "
      />


      {/* Optional text over video */}
      <motion.div
        initial={{
          opacity:0,
          y:50
        }}
        whileInView={{
          opacity:1,
          y:0
        }}
        transition={{
          duration:1
        }}
        className="
          relative
          z-10
          h-full
          flex
          items-center
          justify-center
          text-center
          px-6
        "
      >

        <h2
          className="
          text-white
          text-5xl
          md:text-7xl
          font-bold
          tracking-tight
          "
        >
          Building Digital
          <br/>
          Experiences
        </h2>

      </motion.div>


    </section>
  );
}