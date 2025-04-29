"use client";

import {
  motion,
  useScroll,
  useTransform,
  useMotionValueEvent,
} from "framer-motion";
import { useRef, useState, useEffect } from "react";
import AnimatedText from "../AnimatedText";
import BaseVideo from "../BaseVideo";

const HeroSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const videoContainerRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end end"],
  });

  const { scrollYProgress: videoScrollYProgress } = useScroll({
    target: videoContainerRef,
    offset: ["center center", "start start"],
  });
  
  const [isFixed, setIsFixed] = useState(false);
  const [isSectionEnd, setIsSectionEnd] = useState(false);

  const [videoContainerHeight, setVideoContainerHeight] = useState<number>(0);
  const isInitialMount = useRef(true);

  useMotionValueEvent(videoScrollYProgress, "change", (latest) => {
    if (isInitialMount.current) {
      isInitialMount.current = false;
      return;
    }
    
    if (latest > 0) {
      setIsFixed(true);
    } else {
      setIsFixed(false);
    }
  });

  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    if (latest >= 1) {
      setIsSectionEnd(true);
    } else {
      setIsSectionEnd(false);
    }
  });


  useEffect(() => {
    const updateHeight = () => {
      if (textRef.current) {
        const textHeight = textRef.current.offsetHeight;
        const screenHeight = window.innerHeight;
        setVideoContainerHeight(screenHeight - textHeight);
      }
    };

    updateHeight();
    window.addEventListener("resize", updateHeight); 
    return () => window.removeEventListener("resize", updateHeight);
  }, []);

  const width = useTransform(scrollYProgress, [0.2, 0.5], ["80%", "100%"]);
  const height = useTransform(scrollYProgress, [0.2, 0.5], ["80%", "100%"]);
  const borderRadius = useTransform(scrollYProgress, [0.2, 0.5], ["2rem", "0rem"]);

  return (
    <section
      ref={sectionRef}
      className="flex flex-col h-[300vh]"
      id="hero"
    >
      {/* TEXT */}
      <motion.h1
        ref={textRef}
        className="flex items-center justify-center text-center z-20 container mx-auto px-4 py-4 xl:px-7"
      >
        <AnimatedText
          text={"Bonjour! I'm Hà Minh Quân, an AI engineer dedicated to crafting machines that think, speak, and connect like humans."}
          className="text-[4vh] text-left md:w-1/2 w-full mt-10 md:mt-0"
        />
      </motion.h1>

      {/* VIDEO */}
      <div
        ref={videoContainerRef}
        className={` relative flex items-center justify-center ${
            isSectionEnd ? "mt-auto min-h-[100vh]" : ""
          }`}
        style={{ height: `${videoContainerHeight}px` }} 
      >
        <motion.div
          style={{
            width,
            height,
            borderRadius,
          }}
          className={`
            ${
              isFixed && !isSectionEnd
                ? "fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full"
                : "relative w-full min-h-full"
            }
            bg-black overflow-hidden z-10 mb-5
          `}
        >
          <BaseVideo
            src="/welcome/video.mp4"
            className="w-full h-full object-cover "
          />
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
