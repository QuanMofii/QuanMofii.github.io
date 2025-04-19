"use client";

import Image from "next/image";
import { motion, useInView,  } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { useFishStore } from "@/store/fishStore";

export default function SectionWelcome() {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: false });
  const { isFlying } = useFishStore();

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const words = ["QUAN", "vitdonut"];
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [displayText, setDisplayText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);


  useEffect(() => {
    let timeout: NodeJS.Timeout;
    const currentWord = words[currentWordIndex];

    if (!isDeleting && displayText.length < currentWord.length) {
      timeout = setTimeout(() => {
        setDisplayText(currentWord.slice(0, displayText.length + 1));
      }, 150);
    } else if (isDeleting && displayText.length > 0) {
      timeout = setTimeout(() => {
        setDisplayText(currentWord.slice(0, displayText.length - 1));
      }, 100);
    } else if (!isDeleting && displayText === currentWord) {
      timeout = setTimeout(() => setIsDeleting(true), 3000);
    } else if (isDeleting && displayText === "") {
      timeout = setTimeout(() => {
        setIsDeleting(false);
        setCurrentWordIndex((prev) => (prev + 1) % words.length);
      }, 400);
    }

    return () => clearTimeout(timeout);
  }, [currentWordIndex, displayText, isDeleting, words]);

  return (
    <section
      id="welcome"
      ref={sectionRef}
      className="h-screen relative w-full flex items-center justify-center bg-white"
    >

      <div className="relative h-[36vh] w-[60vw] z-20 rounded-md">
        {/* 🐟 Fish Head */}
        <motion.div
          className="absolute -top-[25vh] left-1/2 -translate-x-1/2 z-50"
          initial={{ opacity: 0, y: -50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: -50 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <motion.div
            animate={isFlying ? {
              y: -1000,
              opacity: 0,
              transition: {
                duration: 5,
                ease: [0.19, 1, 0.22, 1],
              },
            } : {}}
          >
            <Image
              src="/welcome/fish_head.png"
              alt="Fish Head"
              width={0}
              height={0}
              sizes="15vw"
              className="min-w-[240px] w-[39vw] h-[39vh] object-contain"
            />
          </motion.div>
        </motion.div>
        
         {/* 🐟 Body (clickable) */}
      <motion.div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-45"
        initial={{ opacity: 0, y: -50 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: -50 }}
        transition={{ duration: 0.8, ease: "easeOut" }}

      >
        <Image
          src="/welcome/fish_body2.png"
          alt="Fish Body"
          width={250}
          height={250}
          className="pointer-events-auto select-none min-w-[240px] w-[35vw] h-[35vh] object-contain"
          draggable={false}
          
        />
      </motion.div>

        {/* 🐟 Fish Tail */}
        <motion.div
          className="absolute -bottom-[29vh] left-1/2 -translate-x-8/15 z-50"
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <motion.div
            animate={isFlying ? {
              y: -1000,
              opacity: 0,
              transition: {
                duration: 5,
                ease: [0.19, 1, 0.22, 1],
              },
            } : {}}
          >
            <Image
              src="/welcome/fish_tail.png"
              alt="Fish Tail"
              width={0}
              height={0}
              sizes="15vw"
              className="min-w-[240px] w-[35vw] h-[35vh] object-contain"
            />
          </motion.div>
        </motion.div>

        {/* 🎥 Video */}
        <video
          className="absolute inset-0 w-full h-full object-cover scale-95"
          autoPlay
          loop
          muted
          playsInline
        >
          <source src="/welcome/video2.mp4" type="video/mp4" />
        </video>

        {/* 🎤 Masked Text */}
        <div className="absolute inset-0 bg-white text-xl md:text-[4vw] leading-none flex flex-col items-center justify-center font-extrabold text-center mix-blend-screen z-40">
          <motion.h1
            initial={{ opacity: 0, x: 100 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 100 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="flex gap-2"
          >
            HI! MY NAME IS
            <motion.span key={displayText} className="text-red-600">
              {displayText}
              <span className="animate-blink">|</span>
            </motion.span>
          </motion.h1>

          <motion.h1
            initial={{ opacity: 0, x: -100 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -100 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            I&apos;M AI ENGINEER
          </motion.h1>

          <motion.div
            initial={{ opacity: 0, y: 100 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 100 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <div className="flex flex-row items-center justify-center text-[1.7vw] w-[36vw] gap-3 mt-3">
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
