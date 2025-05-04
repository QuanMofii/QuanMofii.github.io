import { useRef } from "react";
import AnimatedText from "@/components/AnimatedText";

const AboutSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);

  return (
    <section
      ref={sectionRef}
      className="min-h-screen flex flex-col container mx-auto px-4 xl:px-7 pt-15 w-full "
      id="about"
    >
     <div className="flex flex-col  justify-between mb-30">
        <AnimatedText text={"My Work"} className="text-6xl md:text-[9vw]" />
        <AnimatedText text={"My Work"} className="text-6xl md:text-[9vw]" />
      </div>
    </section>
  );
};

export default AboutSection;
