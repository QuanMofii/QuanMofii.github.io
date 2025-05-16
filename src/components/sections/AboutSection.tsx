"use client";

import { useRef } from "react";

const AboutSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);


  return (
    <section
      id="introduce"
      ref={sectionRef}
      className="h-screen flex flex-col container mx-auto px-4 xl:px-7 pt-15 w-full sticky  top-0  "
    >
       <div className="flex items-center justify-center w-full h-full">
        
      </div>
    </section>
  );
};

export default AboutSection;
