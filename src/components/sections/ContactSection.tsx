import { useRef } from "react";
import AnimatedText from "@/components/AnimatedText";
import BaseImage from "@/components/BaseImage";

const ContactSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);

  return (
    <section
      ref={sectionRef}
      className="min-h-screen flex flex-col container mx-auto px-4 xl:px-15 pt-15 w-full"
      id="contact"
    >
      <div className="grid grid-cols-2 md:grid-cols-4 gap-8 flex-1 text-lg">
  
        <div className="col-span-2 md:order-last order-first flex items-center justify-center flex-col">
          <div className="relative w-1/3 md:w-1/2 aspect-square">
            <BaseImage
              src="/contract/avatar.jpg"
              alt="Avatar"
              className="object-cover rounded-lg"
            />
          </div>
        </div>

  
        <div className="col-span-1 flex flex-col items-start justify-start md:justify-center ">
          <AnimatedText text="Tan Binh, TP.HCM" />
          <AnimatedText text="0376316144" />
 
          <div className="md:hidden mt-5">
            <AnimatedText text="Email For Work" />
            <AnimatedText text="haminhquan12c7" />
            <AnimatedText text="@gmail.com" />
            <AnimatedText text="Zalo message" className="mt-5"/>
            <AnimatedText text="0376316144" />
          </div>
        </div>

   
        <div className="col-span-1 flex flex-col justify-start md:justify-evenly">
          <div className="flex flex-col w-fit">
            <a
              href="https://github.com/vitdonut"
              target="_blank"
              rel="noopener noreferrer"
            >
              <AnimatedText text="@Github" />
            </a>
            <a
              href="https://www.linkedin.com/in/ha-minh-quan-b10717294/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <AnimatedText text="@Linkedin" />
            </a>
            <a
              href="https://www.facebook.com/haminhqquan"
              target="_blank"
              rel="noopener noreferrer"
            >
              <AnimatedText text="@Facebook" />
            </a>
            <a
              href="https://www.instagram.com/vitdonut._/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <AnimatedText text="@Instagram" />
            </a>
          </div>
          <div className="hidden md:block text-center">
            <AnimatedText text="Email For Work" />
            <AnimatedText text="haminhquan12c7@gmail.com" />
          </div>
          <div className="hidden md:block text-center">
            <AnimatedText text="Zalo message" />
            <AnimatedText text="0376316144" />
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-4 md:gap-8 mt-8 mb-4">
        <div className="col-span-1 md:col-span-2 text-center">
          <AnimatedText text="#github.com/vitdonut/portfolio" className="text-lg" />
        </div>
        <div className="col-span-1 text-center">
          <AnimatedText text="Built by Quan❤️" className="text-lg" />
        </div>
        <div className="col-span-1 text-center">
          <AnimatedText text="©Copyright by vitdonut" className="text-lg" />
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
