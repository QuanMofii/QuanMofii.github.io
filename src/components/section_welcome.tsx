"use client";

import BaseImage from "@/components/base_image";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { useFishStore } from "@/store/fishStore";
import TypingText from "./typing_text";

export default function SectionWelcome() {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: false });
  const { isFlying } = useFishStore();

  const words = ["QUAN", "vitdonut"];

  return (
    <section
      id="welcome"
      ref={sectionRef}
      className="h-screen relative w-full flex items-center justify-center bg-white"
    >
      <div className="relative h-[36vh] w-[60vw] z-20 rounded-md">
        {/* 🐟 Fish Head */}
        <motion.div
          className="absolute -top-8 left-1/2 -translate-x-1/2 sm:-top-[25vh] sm:left-1/2 sm:-translate-x-1/2 z-50"
          initial={{ opacity: 0, y: -50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: -50 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <motion.div
            animate={
              isFlying
                ? {
                    y: [0, 50, -2000],
                    transition: {
                      duration: 2.5,
                      ease: "linear",
                      times: [0, 0.8, 1],
                    },
                  }
                : {}
            }
          >
            <BaseImage
              src="/welcome/fish_head.png"
              alt="Fish Head"
              width={0}
              height={0}
              sizes="15vw"
              className="w-33 min-h-[143px] min-w-33 h-[143px] sm:min-w-[240px] sm:w-[39vw] sm:h-[39vh] object-contain"
            />
          </motion.div>
        </motion.div>

        {/* 🐟 Fish Tail */}
        <motion.div
          className="absolute -bottom-37 left-1/2 -translate-x-8/15 sm:-bottom-[37.5vh] sm:left-1/2 sm:-translate-x-8/15 z-50"
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <motion.div
            animate={
              isFlying
                ? {
                    y: [0, 50, -2000],
                    transition: {
                      duration: 2.5,
                      ease: "linear",
                      times: [0, 0.8, 1],
                    },
                  }
                : {}
            }
          >
            <BaseImage
              src="/welcome/fish_tail.png"
              alt="Fish Tail"
              width={0}
              height={0}
              sizes="15vw"
              className="w-33 min-h-[266px] min-w-33 h-[40vh] sm:min-w-[240px] sm:w-[40vw] sm:h-[40vh] object-contain"
            />
          </motion.div>
        </motion.div>

        {/* 🎥 Video */}
        <video
          className="absolute inset-0 w-full h-full object-cover scale-95 z-35"
          autoPlay
          loop
          muted
          playsInline
        >
          <source src="/welcome/video2.mp4" type="video/mp4" />
        </video>

        {/* 🎤 Masked Text */}
        <div className="absolute inset-0 bg-white text-2xl md:text-[4vw] leading-none flex flex-col items-center justify-center justify-items-end font-extrabold text-center mix-blend-screen z-40">
          <motion.h1
            initial={{ opacity: 0, x: 100 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 100 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className={`flex gap-2 relative sm:ml-0  ${isFlying ? " ml-0" : " ml-3"} text-nowrap`}
          >
            {isFlying ? "BYE" : "HI!"} MY NAME IS
            <TypingText
              words={words}
              className="text-red-600 text-sm leading-none absolute top-10.5 -right-0 translate-x-2/3 transform rotate-90 w-[90px] sm:static sm:top-auto sm:right-auto sm:translate-x-0 sm:rotate-0 sm:w-auto sm:text-[4vw]"
            />
          </motion.h1>

          <motion.h1
            initial={{ opacity: 0, x: -100 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -100 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="my-1 sm:my-0 text-nowrap"
          >
            I&apos;M AI ENGINEER
          </motion.h1>

          <motion.div
            initial={{ opacity: 0, y: 100 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 100 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <div className="flex flex-row items-center justify-center text-xs md:text-[1.7vw] min-w-[220px]  md:w-[36vw] gap-3 md:mt-3">
              <h1>Porfolio</h1>
              <div className="grow border-1 md:border-[0.3vh] rounded-full" />
              <h1>2002</h1>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
