import Image from "next/image";
import Hero from "@/components/hero";
import NextSection from "@/components/NextSection";
import Home1 from "@/components/home1";
import FullText from "@/components/fulltext";
import TurnLayoutWrapper from "@/components/TurnLayoutWrapper";
import SecondComponent from "@/components/SecondComponent";

export default function Home() {
  return (<>
  
    <Hero />
    <Home1 />
          <TurnLayoutWrapper
        firstComponent={<FullText text="THE Turn" />}
        secondComponent={<SecondComponent />}
      />

    </>
  );
}
