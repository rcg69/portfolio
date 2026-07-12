import {
  Gelasio,
  Alumni_Sans_Collegiate_One,
} from "next/font/google";

export const gelasio = Gelasio({
  subsets: ["latin"],
  variable: "--font-gelasio",
});

export const alumniSansCollegiateOne = Alumni_Sans_Collegiate_One({
  subsets: ["latin"],
  weight: "400", // This font only has one weight
  variable: "--font-alumni-sans-collegiate-one",
});