"use client";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

interface AnimatedDivProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  withRotate?: boolean;
  initialScale?: number;
  finalScale?: number;
}

const AnimatedDiv = ({ 
  children, 
  className = "", 
  delay = 0,
  withRotate = true,
  initialScale = 1,
  finalScale = 1
}: AnimatedDivProps) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const initialAnimation = {
    opacity: 0,
    y: 50,
    scale: initialScale,
    ...(withRotate && { rotate: 5 })
  };

  const animateAnimation = {
    opacity: 1,
    y: 0,
    scale: finalScale,
    ...(withRotate && { rotate: 0 })
  };

  return (
    <motion.div
      ref={ref}
      initial={initialAnimation}
      animate={isInView ? animateAnimation : initialAnimation}
      transition={{
        duration: 0.8,
        delay: delay,
        type: "spring",
        ease: "easeInOut",
        stiffness: 100
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
};

export default AnimatedDiv;
