import { useRef } from "react";
import AnimatedText from "@/components/AnimatedText";
import { motion, useInView } from "framer-motion";
import ButtonDownloadCV from "@/components/ButtonDownloadCV";

const IntroduceSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { once: false });

  return (
    <section
      ref={sectionRef}
      className="min-h-screen flex flex-col container mx-auto px-4 xl:px-7 pt-15 w-full z-10 "
      id="introduct"
    >
      <div className="flex flex-col justify-between mt-50 mb-20 overflow-hidden text-6xl sm:text-[10vw]/22 lg:text-9xl">
        <motion.div
          initial={{ y: -100, x: -200, opacity: 0 }}
          animate={isInView ? { y: 0, x: 0, opacity: 1 } : { y: -100, x: -200, opacity: 0 }}
          transition={{
            y: {
              type: "tween",
              ease: "easeInOut",
              duration: 0.5,
              delay: 1
            },
            x: {
              type: "tween",
              ease: "easeInOut",
              duration: 0.8,
              delay: 1.5
            },
            opacity: {
              duration: 0.5,
              delay: 1
            }
          }}
          className="self-center"
        >
          <AnimatedText text={"Artificial Minds"} />
        </motion.div>
        <motion.div
          initial={{ y: 100, x: 200, opacity: 0 }}
          animate={isInView ? { y: 0, x: 0, opacity: 1 } : { y: 100, x: 200, opacity: 0 }}
          transition={{
            y: {
              type: "tween",
              ease: "easeInOut",
              duration: 0.5,
              delay: 1
            },
            x: {
              type: "tween",
              ease: "easeInOut",
              duration: 0.8,
              delay: 1.5
            },
            opacity: {
              duration: 0.5,
              delay: 1
            }
          }}
        >
          <AnimatedText text={"Natural Words"}/>
        </motion.div>
      </div>
      <div className="w-full lg:w-1/2 self-end h-screen text-xl md:text-2xl">
        <p>I&apos;m an AI engineer driven by a passion for language, cognition, 
          and the potential of intelligent systems. With a deep foundation in
          natural language processing, large language models, autonomous agents,
          my work aims to create accessible, high-impact AI language solutions. 
          </p> 
        <p className="mt-10 mb-20"> My vision is to bring intelligence closer to daily 
          life—making it more human, more intuitive, and ultimately more valuable.</p>
      
            <ButtonDownloadCV
            href="https://github.com/JellyMofii"
            content="Download CV"
          />
      </div>
    </section>
  );
};

export default IntroduceSection;
