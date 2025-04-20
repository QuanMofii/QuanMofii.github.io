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

  // Shared animation config
  const flyingAnimation = {
    y: [0, 50, -2000],
    scale: [1, 1, 1],
    opacity: [1, 1, 1],
    transition: {
      duration: 2.5,
      ease: "linear",
      times: [0, 0.8, 1],
    },
  };

  return (
    <div
      className={`${
        isFixed
          ? "fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-screen h-screen z-45 pointer-events-none"
          : "relative"
      }`}
    >
      <div className="w-fit h-fit pointer-events-auto z-45">
        {/* 🐟 Body (clickable) */}
        <motion.div
          onClick={handleClick}
          animate={isFlying ? flyingAnimation : {
            opacity: [1, 0.7, 1],
            transition: {
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut"
            }
          }}
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-45"
        >
          <BaseImage
            src="/contract/fish_body.png"
            alt="Fish Body"
            width={250}
            height={250}
            className={`cursor-pointer select-none w-[193px] min-w-[193px] sm:min-w-[370px] sm:w-[35vw] sm:h-[35vh] object-contain transition-all duration-300 z-45 ${!isFlying ? 'grayscale' : ''}`}
            draggable={false}
          />
        </motion.div>
      </div>
    </div>
  );
}
