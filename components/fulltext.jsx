"use client";

import { useRef, useMemo } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

// simple seeded pseudo-random so jitter values stay stable across re-renders
function seededRandom(seed) {
  const x = Math.sin(seed * 9999) * 10000;
  return x - Math.floor(x);
}

function Letter({ char, index, progress }) {
  const seed = seededRandom(index);

  // stagger collapse across letters — all resolved by 0.7 scroll progress
  const start = (index / 14) * 0.25;
const end = Math.min(start + 0.4, 0.65);

  const y = useTransform(progress, [0, start, end], [0, 0, 180 + seed * 120]);
  const opacity = useTransform(progress, [start, end], [1, 0]);
  const rotate = useTransform(
    progress,
    [start, end],
    [0, (seed > 0.5 ? 1 : -1) * (15 + seed * 45)]
  );
  const x = useTransform(progress, [start, end], [0, (seed - 0.5) * 60]);

  return (
    <motion.span
      style={{ y, x, opacity, rotate }}
      className="inline-block will-change-transform"
    >
      {char === " " ? "\u00A0" : char}
    </motion.span>
  );
}

export default function FullText({ text = "THE SPARK", progress: externalProgress }) {
  const containerRef = useRef(null);

  const { scrollYProgress: internalProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  const progress = externalProgress ?? internalProgress;

  // glitch overlays fade out as the collapse finishes
 const glitchOpacity = useTransform(
  progress,
  [0, 0.05, 0.1],
  [1, 0.5, 0]
);
  const words = useMemo(() => text.split(" "), [text]);
  let globalIndex = 0;

  return (
    <div
      ref={containerRef}
      className="relative flex h-full w-full items-center justify-center overflow-hidden bg-black"
    >
      {/* noise */}
      <motion.div
        style={{ opacity: glitchOpacity }}
        className="glitch-noise pointer-events-none absolute inset-0 z-20"
      />
      {/* scanlines */}
      <motion.div
        style={{ opacity: glitchOpacity }}
        className="glitch-scanlines pointer-events-none absolute inset-0 z-20"
      />
      {/* vertical roll bar (like lost vertical hold) */}
      <motion.div
        style={{ opacity: glitchOpacity }}
        className="glitch-roll pointer-events-none absolute inset-0 z-20"
      />
      {/* vignette so edges look like a CRT */}
      <div className="pointer-events-none absolute inset-0 z-10 [background:radial-gradient(ellipse_at_center,transparent_40%,rgba(0,0,0,0.85)_100%)]" />

      <div
        className="glitch-flicker relative z-10 flex flex-wrap items-center justify-center gap-x-[0.25em] gap-y-2 px-4 text-center font-[Syne] font-bold uppercase text-white"
        style={{
          fontSize: "clamp(2.5rem, 9vw, 9rem)",
          letterSpacing: "0.02em",
          lineHeight: 1,
        }}
      >
        {words.map((word, wi) => (
          <span key={wi} className="inline-flex whitespace-nowrap">
            {word.split("").map((char) => {
              const i = globalIndex++;
              return <Letter key={i} char={char} index={i} progress={progress} />;
            })}
          </span>
        ))}
      </div>

      <svg width="0" height="0" className="absolute">
        <filter id="glitch-noise-filter">
          <feTurbulence
            type="fractalNoise"
            baseFrequency="0.85"
            numOctaves="2"
            stitchTiles="stitch"
            result="noise"
          />
          <feColorMatrix
            in="noise"
            type="matrix"
            values="0 0 0 0 1  0 0 0 0 1  0 0 0 0 1  0 0 0 0.06 0"
          />
        </filter>
      </svg>

      <style jsx>{`
        .glitch-noise {
          filter: url(#glitch-noise-filter);
          mix-blend-mode: overlay;
         animation: noise-shift 0.05s steps(5) infinite;
        }
        @keyframes noise-shift {
  0% { transform: translate(0,0); }
  25% { transform: translate(-4%,2%); }
  50% { transform: translate(5%,-3%); }
  75% { transform: translate(-3%,-2%); }
  100% { transform: translate(3%,4%); }
}

        .glitch-scanlines {
          background: repeating-linear-gradient(
            to bottom,
            rgba(255, 255, 255, 0.06) 0px,
            rgba(255, 255, 255, 0.06) 1px,
            transparent 1px,
            transparent 3px
          );
          animation: scan-move 8s linear infinite;
        }
        @keyframes scan-move {
          0% { background-position: 0 0; }
          100% { background-position: 0 100px; }
        }

        .glitch-roll {
          background: linear-gradient(
            to bottom,
            transparent 0%,
            rgba(255, 255, 255, 0.08) 48%,
            rgba(255, 255, 255, 0.15) 50%,
            rgba(255, 255, 255, 0.08) 52%,
            transparent 100%
          );
          height: 40%;
          animation: roll-move 6.5s linear infinite;
          mix-blend-mode: screen;
        }
        @keyframes roll-move {
          0% { transform: translateY(-120%); }
          100% { transform: translateY(220%); }
        }

        .glitch-flicker {
         text-shadow:
             2px 0 rgba(255, 255, 255, 0.35),
            -2px 0 rgba(255, 255, 255, 0.25),
            0 0 20px rgba(255, 255, 255, 0.15);
          animation: flicker 2.4s infinite steps(1);
        }
        @keyframes flicker {
  0%, 88%, 100% {
    opacity: 1;
    transform: translate(0,0) skewX(0deg);
    filter: brightness(1);
  }

  89% {
    transform: translate(-10px,2px) skewX(8deg);
    filter: brightness(2);
  }

  90% {
    transform: translate(8px,-3px) skewX(-10deg);
    opacity: .4;
  }

  91% {
    transform: translate(-5px,5px);
    opacity: .8;
  }

  92% {
    transform: translate(12px,-2px);
    filter: contrast(2);
  }

  93% {
    transform: translate(0,0);
    opacity: 1;
  }
}

        @media (prefers-reduced-motion: reduce) {
          .glitch-noise, .glitch-scanlines, .glitch-roll, .glitch-flicker {
            animation: none !important;
          }
        }
      `}</style>
    </div>
  );
}