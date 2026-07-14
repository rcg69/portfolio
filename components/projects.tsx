"use client";

import { ArrowLeft, ArrowRight, ArrowUpRight } from "lucide-react";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";

interface GalleryItem {
  id: string;
  title: string;
  summary: string;
  url: string;
  image: string;
}

interface Gallery6Props {
  heading?: string;
  demoUrl?: string;
  items?: GalleryItem[];
}

const Gallery6 = ({
  heading = "My Projects",
  demoUrl = "/work",
  items = [
    {
      id: "project-1",
      title: "IRAH TECH",
      summary:
        "A premium digital agency website focused on modern web development, responsive design, smooth animations with Framer Motion, and a high-end user experience built using Next.js and Tailwind CSS.",
      url: "https://irahtech.in",
      image: "/irah.png",
    },
    {
      id: "project-2",
      title: "SLV",
      summary:
        "A business website designed with a clean and elegant interface, emphasizing responsive layouts, performance optimization, and a seamless browsing experience across all devices.",
      url: "https://slvbanquethalls.com/",
      image: "/slv.png",
    },
    {
      id: "project-3",
      title: "AABHARNAM",
      summary:
        "A luxury jewellery e-commerce experience featuring premium visuals, intuitive navigation, responsive product pages, and a refined shopping experience built with modern web technologies.",
      url: "#",
      image: "/AABHARNAM.png",
    },
  ],
}: Gallery6Props) => {
  
  return (
  <section className="bg-black py-24">
    
    <div className="mx-auto w-[92%] max-w-7xl">
      {/* Heading */}
      <div className="mb-16 flex flex-col justify-between gap-6 md:flex-row md:items-end">
        <div>
          <h2 className="font-[Syne] text-5xl font-bold text-white md:text-6xl">
  {heading}
</h2>

<div className="mt-3 h-[3px] w-44 bg-[#DC2F02]" />
        </div>


      </div>

      {/* Projects */}
      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {items.map((item, index) => (
          <motion.a
            key={item.id}
            href={item.url}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{
              delay: index * 0.12,
              duration: 0.6,
            }}
            whileHover={{ y: -10 }}
            className="group overflow-hidden rounded-2xl border border-neutral-800 bg-neutral-950"
          >
            {/* Image */}
            <div className="relative aspect-[16/10] overflow-hidden">
              <Image
                src={item.image}
                alt={item.title}
                fill
                className="object-cover transition duration-700 group-hover:scale-110"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent" />
            </div>

            {/* Content */}
            <div className="p-7">
              <h3 className="mb-4 font-[Syne] text-2xl font-bold text-white">
                {item.title}
              </h3>

              <p className="mb-8 leading-7 text-neutral-400">
                {item.summary}
              </p>

            
            </div>
          </motion.a>
        ))}
      </div>
    </div>
  </section>
);
};

export { Gallery6 };
