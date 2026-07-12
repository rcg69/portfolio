"use client";

export default function Loader() {
  return (
    <div className="fixed inset-0 z-[9999] flex items-center justify-center bg-black">
      <div className="h-16 w-16 animate-spin rounded-full border-4 border-gray-700 border-t-white"></div>
    </div>
  );
}