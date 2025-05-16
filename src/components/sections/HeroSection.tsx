"use client";
import { useEffect, useRef, useState } from "react";
import AnimatedText from "@/components/AnimatedText";
import { motion, useScroll, useTransform } from "framer-motion";
import BaseVideo from "@/components/BaseVideo";
import AnimatedDiv from "@/components/AnimatedDiv";


const HeroSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLDivElement>(null);
  const [initialScale, setInitialScale] = useState({ x: 1, y: 1 });

  useEffect(() => {
    const updateSize = () => {
      if (textRef.current) {
        const textHeight = textRef.current.offsetHeight;
        const screenHeight = window.innerHeight;
        const screenWidth = window.innerWidth;

        const targetWidth = textRef.current.offsetWidth;
        const targetHeight = screenHeight - textHeight - 95;

        const scaleX = targetWidth / screenWidth;
        const scaleY = targetHeight / screenHeight;
        setInitialScale({ x: scaleX, y: scaleY });
      }
    };

    if (typeof window !== "undefined") {
      updateSize();
      window.addEventListener("resize", updateSize);
      return () => window.removeEventListener("resize", updateSize);
    }
  }, []);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"], 
  });

 
  const scaleX = useTransform(scrollYProgress, [0, 0.07], [initialScale.x, 1]);
  const scaleY = useTransform(scrollYProgress, [0, 0.07], [initialScale.y, 1]);
  const initialTranslateY = `-${(1 - initialScale.y) * 40}%`;
  const translateY = useTransform(scrollYProgress, [0, 0.02], [initialTranslateY, "0%"]);
  const borderRadius = useTransform(scrollYProgress, [0, 0.07], ["2rem", "0rem"]);


  const quoteOpacity = useTransform(scrollYProgress, [0.07, 0.1], [0, 1]);
  const quoteScale = useTransform(scrollYProgress,  [0.15, 0.6, 1.0], [1, 70, 220]);
  const quoteTranslateY = useTransform(scrollYProgress, [0.15, 0.6, 1], ["0%", "1700%","5200%"]);
  return (
    <section
      ref={sectionRef}
      className="flex flex-col mx-auto pt-19 lg:pt-0 h-[1100vh] max-w-screen z-10 bg-white"
      id="hero"
    >
      {/* TEXT */}
      <div className="mx-auto container px-4 mt-0 lg:mt-7 bg-white">
        <div className="flex items-center justify-center w-full" ref={textRef}>
          <AnimatedText
            text={
              "I'm Ha Minh Quan, also known as JellyMofii, an AI engineer crafting machines that read, think, answer and surprises you like a human would."
            }
            className="lg:text-2xl/9.5 text-[3.3vh] xl:text-3xl/11 lg:w-3/5 w-full"
            as="h1"
          />
        </div>
      </div>

      {/* VIDEO */}
      <AnimatedDiv withRotate={false} delay={1.5} className="w-full h-screen sticky top-0 m-0 overflow-hidden mx-auto">
        <motion.div
          className="relative h-full w-full"
          style={{
            scaleX,
            scaleY,
            translateY,
            borderRadius,
            overflow: "hidden",
          }}
        >
          <BaseVideo
            src="/hero/video1.webm"
            className="w-full h-full object-cover"
            style={{
              scale: `${scaleX} ${scaleY}`,
            }}
          />

          {/* QUOTE TEXT OVERLAY */}
          <motion.div
            style={{
              opacity: quoteOpacity,
              scale: quoteScale,
              translateY: quoteTranslateY,
              
            }}
            className="absolute top-1/2 -translate-y-1/2 left-1/2 text-center -translate-x-1/2 text-white   pointer-events-none uppercase font-mono tracking-widest text-[6.5vw] md:text-[5.5vw] lg:text-[4.5vw] font-bold  whitespace-nowrap transition-all duration-300 ease-in-out "
             
          >
            
            QUIET EFFORT CREATES <br/> LOUD IMPACT.
          </motion.div>
        </motion.div>
      </AnimatedDiv>
    </section>
  );
};

export default HeroSection;
