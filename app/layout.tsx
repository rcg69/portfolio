import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/header";

import { gelasio } from "@/lib/fonts";

export const metadata: Metadata = {
  title: "Ram Charan | Full Stack Developer",
  description: "Portfolio",

  icons: {
    icon: [
      {
        url: "/favicon_io/favicon-16x16.png",
        sizes: "16x16",
        type: "image/png",
      },
      {
        url: "/favicon_io/favicon-32x32.png",
        sizes: "32x32",
        type: "image/png",
      },
      {
        url: "/favicon_io/favicon.ico",
      },
    ],
    apple: "/favicon_io/apple-touch-icon.png",
    shortcut: "/favicon_io/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={gelasio.variable}>
      <body>
        <Header />
        {children}
      </body>
    </html>
  );
}