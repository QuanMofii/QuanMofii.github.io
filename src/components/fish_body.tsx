"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { useFishStore } from "@/store/fishStore";
import BaseImage from "@/components/base_image";

export default function FishBody() {
  const [isFixed, setIsFixed] = useState(false);
  const [show, setShow] = useState(true);
  const { setIsFlying, isFlying } = useFishStore();

  const handleClick = () => {
    setIsFixed(true);

   
    const contractSection = document.getElementById("contract");
    if (contractSection) {
      contractSection.scrollIntoView({ behavior: "smooth" });

    
      setTimeout(() => {
        const welcomeSection = document.getElementById("welcome");
        if (welcomeSection) {
          welcomeSection.scrollIntoView({ behavior: "smooth" });


          setTimeout(() => {
            setIsFlying(true);
          }, 1000);

       
          setTimeout(() => {
            setShow(false);
          }, 7000);
        }
      }, 1000);
    }
  };

  if (!show) return null;




  return (
    <div
      className={`${
        isFixed
          ? "fixed top-1/2 right-0 -translate-y-1/2 w-screen h-screen z-45 pointer-events-none"
          : "relative h-screen w-screen"
      }`}
    >
      {/* 🐟 Body (clickable) */}
      <motion.div
        onClick={handleClick}
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
        animate={
          isFlying
            ? {
                y: [0, 50, -2000],
              }
            : {
                opacity: [1, 0.7, 1],
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
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut",
              }
        }
      >
        <BaseImage
          src="/contract/fish_body.png"
          alt="Fish Body"
          width={0}
          height={0}
          draggable={false}
          className={`cursor-pointer select-none object-contain transition-all duration-300 w-[20vw] min-w-[249.6px] z-50 ${
            !isFlying ? "grayscale" : ""
          }`}
        />
      </motion.div>
    </div>
  );
}
