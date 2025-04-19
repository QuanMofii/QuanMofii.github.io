"use client";

import Image from "next/image";
import { useState } from "react";
import { motion } from "framer-motion";
import { useFishStore } from "@/store/fishStore";

export default function FishBody() {
  const [isFixed, setIsFixed] = useState(false);
  const [show, setShow] = useState(true);
  const { setIsFlying } = useFishStore();

  const handleClick = () => {
    setIsFixed(true);

    const welcomeSection = document.getElementById("welcome");
    if (welcomeSection) {
      welcomeSection.scrollIntoView({ behavior: "smooth" });

      setTimeout(() => {
        setIsFlying(true);
      }, 2000);

      setTimeout(() => {
        setShow(false);
      }, 7000); 
    }
  };

  if (!show) return null;

  // Shared animation config
  const flyingAnimation = {
    y: -1000,
    opacity: 0,
    transition: {
      duration: 5,
      ease: [0.19, 1, 0.22, 1], 
    },
  };

  return (
    <div
      className={`${
        isFixed
          ? "fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-[999]"
          : "relative"
      } w-fit h-fit pointer-events-auto`}
    >
      
      {/* 🐟 Body (clickable) */}
      <motion.div
        onClick={handleClick}
        animate={useFishStore.getState().isFlying ? flyingAnimation : {}}
        className="relative z-50 cursor-pointer"
      >
        <Image
          src="/welcome/fish_body.png"
          alt="Fish Body"
          width={250}
          height={250}
          className="pointer-events-auto select-none"
          draggable={false}
        />
      </motion.div>
    </div>
  );
}
