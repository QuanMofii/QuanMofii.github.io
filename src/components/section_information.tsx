"use client";

import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import BaseImage from "./base_image";

export default function SectionInformation() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  const leftImageX = useTransform(
    scrollYProgress,
    [0, 0.5, 1],
    ["-100%", "0%", "0%"]
  );
  const centerImageOpacity = useTransform(
    scrollYProgress,
    [0, 0.5, 1],
    [0, 1, 1]
  );
  const rightContentX = useTransform(
    scrollYProgress,
    [0, 0.5, 1],
    ["100%", "0%", "0%"]
  );

  return (
    <section
      ref={sectionRef}
      id="infor"
      className="min-h-screen h-full w-full relative overflow-hidden"
    >
      {/* Left background (45%) */}
      <motion.div
        className="absolute left-0 top-0 w-[45%] h-full overflow-hidden"
        style={{ x: leftImageX }}
      >
        <div className="absolute inset-0">
          {/* Ảnh gốc */}
          <BaseImage
            src="/information/layer.jpg"
            alt="Background image"
            width={0}
            height={0}
            className="w-full h-full object-cover filter grayscale"
          />

          {/* Lớp phủ màu đen mờ */}
          <div className="absolute inset-0 bg-black/30 mix-blend-multiply pointer-events-none z-10" />

          {/* Gradient trên */}
          <div className="absolute top-0 left-0 w-full h-24 bg-gradient-to-b from-white to-transparent z-20 pointer-events-none" />

          {/* Gradient dưới */}
          <div className="absolute bottom-0 left-0 w-full h-24 bg-gradient-to-t from-white to-transparent z-20 pointer-events-none" />
        </div>
      </motion.div>

      {/* Right background (55%) */}
      <div className="absolute right-0 top-0 w-[55%] h-full bg-white flex flex-col justify-center">
        <motion.div
          className="text-left absolute top-[calc(50%+125px)] left-0 w-full "
          style={{ x: rightContentX }}
        >
          <p className="text-sm ">Họ và tên: [Your Name]</p>
          <p className="text-sm ">Nghề nghiệp: [Your Profession]</p>
          <p className="text-sm ">Email: [Your Email]</p>
          <p className="text-sm">Số điện thoại: [Your Phone]</p>
          <p className="text-sm">Số điện thoại: [Your Phone]</p>
          <p className="text-sm">Số điện thoại: [Your Phone]</p>
          <p className="text-sm">Số điện thoại: [Your Phone]</p>
        </motion.div>
      </div>

      {/* Center content */}
      <div className="relative z-10 h-screen w-full flex flex-col items-center justify-center">
        {/* Main image container */}
        <motion.div
  className="w-[250px] h-[250px] relative cursor-grab active:cursor-grabbing"
  drag
  dragElastic={0.1}
  dragConstraints={sectionRef}
  whileDrag={{ scale: 1.05 }}
  style={{ zIndex: 50 }}
>
  {/* Border trắng ngoài cùng */}
  <motion.div
    className="w-full h-full bg-transparent border-[10px] border-white relative overflow-hidden"
    style={{ opacity: centerImageOpacity }}
    dragConstraints={sectionRef}
  >
    {/* Ảnh hiển thị */}
    <BaseImage
      src="/information/layer.jpg"
      alt="Main image"
      width={0}
      height={0}
      className="w-full h-full object-cover pointer-events-none"
    />

    {/* Lớp phủ trắng đen (chỉ phủ lên ảnh, không phủ border) */}
    <div className="absolute inset-0 bg-black/0 filter grayscale pointer-events-none z-10" />
  </motion.div>
</motion.div>

      </div>
    </section>
  );
}
