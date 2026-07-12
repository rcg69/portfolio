"use client";

import Image from "next/image";

export default function ImageContainer({
  src,
  alt = "",
  width = "100%",
  height = "100%",
  position = "absolute",
  top = "auto",
  left = "auto",
  right = "auto",
  bottom = "auto",
  className = "",
  objectFit = "contain",
  priority = false,
}) {
  return (
    <div
      className={className}
      style={{
        position,
        width,
        height,
        top,
        left,
        right,
        bottom,
      }}
    >
      <Image
        src={src}
        alt={alt}
        fill
        priority={priority}
        style={{ objectFit }}
      />
    </div>
  );
}