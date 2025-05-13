"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from 'framer-motion'
import BaseVideo from "@/components/BaseVideo";
const AboutSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start end', 'center center'] 
  })


  const y = useTransform(scrollYProgress, [0, 1], ['-100px', '0px'])
  const x = useTransform(scrollYProgress, [0, 1], ['0px', '0px']) 

  return (
    <section
      id="introduce"
      ref={sectionRef}
      className="h-screen flex flex-col container mx-auto px-4 xl:px-7 pt-15 w-full sticky  top-0  "
    >
       <div className="flex items-center justify-center w-full h-full">
        <motion.div
          style={{ y, x }}
          className="w-3/5 h-1/2"
        >
          <BaseVideo
            src="/hero/video.mp4"
            className="w-full h-full object-cover"
        
         
          />
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;
