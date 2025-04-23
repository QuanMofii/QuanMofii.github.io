"use client";

import BaseImage from "@/components/base_image";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { useFishStore } from "@/store/fishStore";
import TypingText from "./typing_text";
const basePath = process.env.NEXT_PUBLIC_BASE_PATH || "";
export default function SectionWelcome() {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: false });
  const { isFlying } = useFishStore();

  const words = ["QUAN", "vitdonut"];

  return (
    <section
      id="welcome"
      ref={sectionRef}
      className="h-screen relative w-full max-w-full overflow-hidden flex items-center justify-center "
    >
      <div className="absolute shrink-0  h-screen w-[20vw] min-w-[249.6px] flex flex-col justify-center items-center ">
        {/* fish_head */}
        <motion.div
          className="flex-1 z-50 flex justify-end flex-col w-full "
          initial={{ opacity: 0, y: -50 }}
          animate={{
            opacity: isInView ? 1 : 0,
            y: isFlying ? [isInView ? 0 : -50, 50, -2000] : isInView ? 0 : -50,
          }}
          transition={{
            duration: isFlying ? 2.5 : 0.8,
            ease: isFlying ? "linear" : "easeOut",
            times: isFlying ? [0, 0.8, 1] : undefined,
          }}
        >
          <BaseImage
            src="/welcome/fish_head.png"
            alt="Fish Head"
            width={0}
            height={0}
            className="relative w-[70%] shrink-0 z-50 object-contain mb-[7%] mx-auto mt-[32%]"
          />
        </motion.div>
    
        {/* 🐟 Fish Tail */}
        <motion.div
          className="flex-1 flex justify-start flex-col z-40 w-full "
          initial={{ opacity: 0, y: 50 }}
          animate={
            isFlying
              ? {
                  opacity: 1,
                  y: [0, 50, -2000],
                }
              : {
                  opacity: isInView ? 1 : 0,
                  y: isInView ? 0 : 50,
                }
          }
          transition={
            isFlying
              ? {
                  duration: 2.5,
                  ease: "linear",
                  times: [0, 0.8, 1],
                }
              : {
                  duration: 0.8,
                  ease: "easeOut",
                }
          }
        >
          <BaseImage
            src="/welcome/fish_tail.png"
            alt="Fish Tail"
            width={0}
            height={0}
            className="relative w-[70%] z-50  object-contain mt-[26%] ml-[10%]"
          />
        </motion.div>
      </div>
      <div className="relative h-[36vh] w-[60vw] z-20 rounded-md">
        {/* 🎥 Video */}
        <video
          className="absolute inset-0 w-full h-full object-cover scale-95 z-35"
          autoPlay
          loop
          muted
          playsInline
        >
          <source src={`${basePath}/welcome/video2.mp4`} type="video/mp4" />
        </video>

        {/* 🎤 Masked Text */}
        <div className="absolute inset-0 bg-stone-100 sm:text-2xl md:text-[4vw] leading-none flex flex-col items-center justify-center justify-items-end font-extrabold text-center mix-blend-screen z-40">
          <motion.h1
            initial={{ opacity: 0, x: 100 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 100 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className={`flex gap-2 relative sm:ml-0  ${
              isFlying ? " ml-0" : " ml-3"
            } text-nowrap`}
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
            <div className="flex flex-row items-center justify-center text-xs md:text-[1.7vw] sm:min-w-[220px] min-w-[150px]  md:w-[36vw] gap-3 md:mt-3">
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
