import { useRef } from "react";
import AnimatedText from "@/components/AnimatedText";

const AboutSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);

  return (
    <section
      ref={sectionRef}
      className="min-h-screen flex flex-col container mx-auto px-4 xl:px-7 pt-15 w-full"
      id="about"
    >
      <div className="flex items-center justify-center h-full w-full flex-1">
        <AnimatedText text="Chưa có làm phần này má" className="text-lg" />
      </div>
    </section>
  );
};

export default AboutSection;
