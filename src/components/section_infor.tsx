"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import React, { useRef } from "react";
import BaseImage from "./base_image";

export default function SectionInfor() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const textLines = [
    {
      text: "Xin chào! Mình là",
      x: useTransform(
        scrollYProgress,
        [0, 0.4, 0.5, 0.6, 1],
        ["-400px", "-200px", "0px", "-200px", "400px"]
      ),
      y: useTransform(
        scrollYProgress,
        [0, 0.4, 0.5, 0.6, 1],
        ["-200px", "-100px", "0px", "100px", "200px"]
      ),
    },
    {
      text: "Hà Minh Quân",
      x: useTransform(
        scrollYProgress,
        [0, 0.4, 0.5, 0.6, 1],
        ["400px", "200px",  "0px", "200px", "-400px"]
      ),
      y: useTransform(
        scrollYProgress,
        [0, 0.4, 0.5, 0.6, 1],
        ["200px", "100px", "0px", "-100px", "-200px"]
      ),
    },
    {
      text: "một AI Engineer",
      x: useTransform(
        scrollYProgress,
        [0, 0.4, 0.5, 0.6, 1],
        ["-300px", "-150px",  "0px", "-150px", "300px"]
      ),
      y: useTransform(
        scrollYProgress,
        [0, 0.4, 0.5, 0.6, 1],
        ["150px", "75px",  "0px", "75px", "150px"]
      ),
    },
    {
      text: "với niềm đam mê",
      x: useTransform(
        scrollYProgress,
        [0, 0.4, 0.5, 0.6, 1],
        ["300px", "150px",  "0px", "150px", "-300px"]
      ),
      y: useTransform(
        scrollYProgress,
        [0, 0.4, 0.5, 0.6, 1],
        ["-150px", "-75px",  "0px", "-75px", "-150px"]
      ),
    },
    {
      text: "về công nghệ và",
      x: useTransform(
        scrollYProgress,
        [0, 0.4, 0.5, 0.6, 1],
        ["-500px", "-250px",  "0px", "-250px", "500px"]
      ),
      y: useTransform(
        scrollYProgress,
        [0, 0.4, 0.5, 0.6, 1],
        ["-180px", "-90px",  "0px", "-90px", "-180px"]
      ),
    },
    {
      text: "trí tuệ nhân tạo",
      x: useTransform(
        scrollYProgress,
        [0, 0.4, 0.5, 0.6, 1],
        ["500px", "250px",  "0px", "250px", "-500px"]
      ),
      y: useTransform(
        scrollYProgress,
        [0, 0.4, 0.5, 0.6, 1],
        ["180px", "90px",  "0px", "90px", "180px"]
      ),
    },
  ];

  return (
    <section
      ref={ref}
      id="infor"
      className="w-full h-screen overflow-hidden relative grid place-items-center"
    >
      {/* Ảnh chính giữa */}
      <div className="absolute top-1/2 right-3/5 translate-x-1/2 -translate-y-1/2 z-0 flex items-center justify-center">
        <BaseImage
          src="/information/layer.png"
          alt="Profile"
          width={0}
          height={0}
         
          className="sm:w-[40vw] sm:h-[80vh] w-[400px] h-[300px] object-fit rounded-lg"
        />
      </div>

      {/* Text parallax với vị trí ngẫu nhiên */}
      <div className="absolute inset-0 flex items-center justify-center">
        {textLines.map((line, index) => (
          <motion.div
            key={index}
            style={{
              x: line.x,
              y: line.y,
              position: "absolute",
            }}
            className={`text-lg sm:text-2xl font-bold whitespace-nowrap`}
          >
            {line.text}
          </motion.div>
        ))}
      </div>
    </section>
  );
}