import Image from "next/image";
import Hero from "@/components/hero";
import NextSection from "@/components/NextSection";
import Home1 from "@/components/home1";
import TheAscent from "@/components/TheAscent";
import TurnLayoutWrapper from "@/components/TurnLayoutWrapper";
import SecondComponent from "@/components/SecondComponent";
import Services from "@/components/services";
import { Timeline } from "@/components/scrollhone";

export default function Home() {
  return (<>
  
    <Hero />
     <Home1 />
     <TheAscent></TheAscent>
      <Services />
   
          {/* <TurnLayoutWrapper
        firstComponent={<FullText text="THE Turn" />}
        secondComponent={<SecondComponent />}
      /> */}
     {/*  <Timeline /> */}
  
    </>
  );
}
