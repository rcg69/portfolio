import Image from "next/image";
import Hero from "@/components/hero";
import NextSection from "@/components/NextSection";
import Home1 from "@/components/home1";
import TheAscent from "@/components/TheAscent";
import TurnLayoutWrapper from "@/components/TurnLayoutWrapper";
import SecondComponent from "@/components/SecondComponent";
import Services from "@/components/services";
import { Timeline } from "@/components/scrollhone";
import { Gallery6 } from "@/components/projects";
export default function Home() {
  return (<>
  
    <Hero />
    <Services />
    <TheAscent></TheAscent>
     <Home1 />
     
      
      <Gallery6/>
  
    </>
  );
}
