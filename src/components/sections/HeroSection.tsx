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
        const targetHeight = screenHeight - textHeight - 90;

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

  const scaleX = useTransform(scrollYProgress, [0, 0.3], [initialScale.x, 1]);
  const scaleY = useTransform(scrollYProgress, [0, 0.3], [initialScale.y, 1]);
  const initialTranslateY = `-${(1 - initialScale.y) * 40}%`;

  const translateY = useTransform(scrollYProgress, [0, 0.05], [ initialTranslateY, "0%"]);
  const borderRadius = useTransform(
    scrollYProgress,
    [0, 0.3],
    ["2rem", "0rem"]
  );
  return (
    <section
      ref={sectionRef}
      className="flex flex-col mx-auto pt-19  lg:pt-0  h-[300vh] max-w-screen z-10 bg-white"
      id="hero"
    >
      {/* TEXT */}
      <div className="  mx-auto container px-4 mt-0 lg:mt-7 bg-white">
        <div
          className="flex items-center justify-center text-center w-full"
          ref={textRef}
        >
          <AnimatedText
            text={
              "I'm JellyMofii A.K.A Ha Minh Quan, an AI engineer driven by a fascination with how machines understand, reason, and communicate. I create systems that think, talk, and sometimes surprise you with how human they can feel."
            }
            className="lg:text-2xl/9.5 text-[3.3vh] xl:text-3xl/11  text-left lg:w-3/5 w-full"
          />
        </div>
      </div>
      {/* VIDEO */}
      <AnimatedDiv withRotate={false} className=" w-full  h-screen sticky top-0 m-0 overflow-hidden mx-auto">
        <motion.div
          className="h-full w-full"
          style={{
            scaleX,
            scaleY,
            translateY,
            borderRadius,
            overflow: "hidden", 
          }}
        >
          <BaseVideo
            src="/hero/video.mp4"
            className="w-full h-full object-cover"
            style={{
              scale: `${scaleX} ${scaleY} `,
            }}
          />
        </motion.div>
      </AnimatedDiv>
    </section>
  );
};

export default HeroSection;
