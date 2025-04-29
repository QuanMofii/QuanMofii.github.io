'use client'
import { useRef } from "react";
import AnimatedText from "@/components/AnimatedText";
import BaseImage from "@/components/BaseImage";
import Link from "next/link";

const Footer = () => {
  const sectionRef = useRef<HTMLDivElement>(null);

  return (
    <footer
      ref={sectionRef}
      className="min-h-screen flex flex-col container mx-auto px-4 xl:px-7 pt-15 w-full bg-white text-black"
      id="contact"
    >
      <div className="flex flex-col md:flex-row-reverse justify-between mb-16">
        <AnimatedText text={"Contact"} className="text-6xl md:text-[9vw]" />
        <div className="text-sm md:text-[1.2vw] mt-5 md:mt-0 flex flex-col md:items-start item-start justify-end">
          <AnimatedText text="Don't Follow Your Dream" />
          <AnimatedText text="Follow My Social Media " />
    
        </div>
      </div>
      <div className="min-h-screen h-screen flex-1 flex flex-col">
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
            <AnimatedText text="Tân Bình, HCM" />
            <AnimatedText text="0376316144" />

            <div className="md:hidden mt-5">
              <AnimatedText text="Email For Work" />
              <AnimatedText text="haminhquan12c7" />
              <AnimatedText text="@gmail.com" />
              <AnimatedText text="Zalo message" className="mt-5" />
              <AnimatedText text="0376316144" />
            </div>
          </div>

          <div className="col-span-1 flex flex-col justify-start md:justify-evenly">
            <div className="flex flex-col w-fit">
            <Link 
                href="https://github.com/vitdonut"
                target="_blank"
                rel="noopener noreferrer"
              >
                <AnimatedText text="@Github" />
              </Link>
              <Link
                href="https://www.linkedin.com/in/ha-minh-quan-b10717294/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <AnimatedText text="@Linkedin" />
              </Link>
              <Link
                href="https://www.facebook.com/haminhqquan"
                target="_blank"
                rel="noopener noreferrer"
              >
                <AnimatedText text="@Facebook" />
              </Link>
              <Link
                href="https://www.instagram.com/vitdonut._/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <AnimatedText text="@Instagram" />
              </Link>
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
          <Link
                href="https://github.com/vitdonut/portfolio"
                target="_blank"
                rel="noopener noreferrer"
              >
            <AnimatedText
              text="#github.com/vitdonut/portfolio"
              className="text-lg"
            />
            </Link>
          </div>
          <div className="col-span-1 text-center">
            <AnimatedText text="Built by Quan❤️" className="text-lg" />
          </div>
          <div className="col-span-1 text-center">
            <AnimatedText text="©Copyright by vitdonut" className="text-lg" />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer ;
