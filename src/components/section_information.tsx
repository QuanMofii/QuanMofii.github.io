"use client";

import React, { useRef } from "react";
// import { motion, useScroll, useTransform } from "framer-motion";

// import {motion} from "framer-motion";
// import BaseImage from "./base_image";
import SwipeRedirect from "./test";

export default function SectionInformation() {
  const sectionRef = useRef<HTMLDivElement>(null);
  // const { scrollYProgress } = useScroll({
  //   target: sectionRef,
  //   offset: ["start end", "end start"],
  // });

  // const leftImageX = useTransform(
  //   scrollYProgress,
  //   [0, 0.5, 1],
  //   ["-100%", "0%", "0%"]
  // );
  // const centerImageOpacity = useTransform(
  //   scrollYProgress,
  //   [0, 0.5, 1],
  //   [0, 1, 1]
  // );
  // const rightContentX = useTransform(
  //   scrollYProgress,
  //   [0, 0.5, 1],
  //   ["100%", "0%", "0%"]
  // );

  return (
    <section
      ref={sectionRef}
      id="infor"
      className="min-h-screen h-full w-full relative overflow-hidden"
    >
     <SwipeRedirect/>

    
    </section>
  );
}
