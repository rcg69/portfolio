"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";

const logoVariants = {
  hidden: {
    opacity: 0,
    x: -24,
  },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.5,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

export default function Logo() {
  return (
    <motion.div
      variants={logoVariants}
      initial="hidden"
      animate="visible"
      style={{
        position: "absolute",
        top: 0,
        left: 0,
        zIndex: 9999,
        display: "flex",
        flexDirection: "column",
        justifyContent: "flex-start",
        padding: "32px 0 32px 40px",
        pointerEvents: "none",
      }}
    >
      <Link
        href="/"
        style={{
          display: "flex",
          alignItems: "center",
          width: "fit-content",
          textDecoration: "none",
          pointerEvents: "auto",
        }}
      >
        <Image
          src="/logo.png"
          alt="RCG Logo"
          width={400}
          height={400}
          priority
        />
      </Link>
    </motion.div>
  );
}