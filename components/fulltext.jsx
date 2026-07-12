"use client";

export default function FullText({
  text = "THE SPARK",
}) {
  return (
    <section className="relative flex h-screen w-full items-center justify-center overflow-hidden bg-black">
      <h1
        className="glitch font-bold text-white text-[clamp(4rem,10vw,10rem)] uppercase tracking-wide"
        data-text={text}
      >
        {text}
      </h1>

      <style jsx>{`
        .glitch {
          position: relative;
          display: inline-block;
          line-height: 1;
        }

        .glitch::before,
        .glitch::after {
          content: attr(data-text);
          position: absolute;
          inset: 0;
          pointer-events: none;
        }

        .glitch::before {
          color: #e0ac1d;
          animation: glitch1 2.5s infinite linear alternate-reverse;
        }

        .glitch::after {
          color: #ff7b00;
          animation: glitch2 2.5s infinite linear alternate-reverse;
        }

        @keyframes glitch1 {
          0% {
            transform: translate(0);
            clip-path: inset(0 0 85% 0);
          }
          20% {
            transform: translate(-3px, -2px);
            clip-path: inset(25% 0 45% 0);
          }
          40% {
            transform: translate(3px, 2px);
            clip-path: inset(70% 0 10% 0);
          }
          60% {
            transform: translate(-2px, 1px);
            clip-path: inset(45% 0 25% 0);
          }
          80% {
            transform: translate(2px, -1px);
            clip-path: inset(10% 0 70% 0);
          }
          100% {
            transform: translate(0);
            clip-path: inset(0 0 85% 0);
          }
        }

        @keyframes glitch2 {
          0% {
            transform: translate(0);
            clip-path: inset(85% 0 0 0);
          }
          20% {
            transform: translate(3px, 2px);
            clip-path: inset(45% 0 25% 0);
          }
          40% {
            transform: translate(-3px, -2px);
            clip-path: inset(5% 0 80% 0);
          }
          60% {
            transform: translate(2px, -1px);
            clip-path: inset(60% 0 15% 0);
          }
          80% {
            transform: translate(-2px, 1px);
            clip-path: inset(20% 0 55% 0);
          }
          100% {
            transform: translate(0);
            clip-path: inset(85% 0 0 0);
          }
        }
      `}</style>
    </section>
  );
}