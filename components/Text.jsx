"use client";

export default function Text({
  children,
  size = "text-2xl",
  weight = "font-normal",
  color = "text-white",
  font = "font-[Syne]",
  position = "relative",
  top = "auto",
  left = "auto",
  right = "auto",
  bottom = "auto",
  zIndex = "auto",
  textAlign = "left",
  opacity = 1,
  className = "",
}) {
  return (
    <div
      className={`${position} ${size} ${weight} ${color} ${font} ${className}`}
      style={{
        top,
        left,
        right,
        bottom,
        zIndex,
        textAlign,
        opacity,
      }}
    >
      {children}
    </div>
  );
}