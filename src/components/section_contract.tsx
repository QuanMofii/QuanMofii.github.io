// components/sections/section_contract.tsx
import React, { useState } from "react";
import FishBody from "@/components/fish_body";
import { motion } from "framer-motion";
import TypingText from "@/components/typing_text";
import { Heart, MessageCircle, Share2 } from "lucide-react";

export default function SectionContract() {
  const socialMedia = ["GITHUB", "LINKEDIN", "INSTAGRAM", "FACEBOOK"];
  const [isLiked, setIsLiked] = useState(false);

  const handleHeartClick = () => {
    setIsLiked(true);
    window.open("https://www.instagram.com/vitdonut._/", "_blank");
  };

  const handleMessageClick = () => {
    window.open(
      "https://www.linkedin.com/in/ha-minh-quan-b10717294/",
      "_blank"
    );
  };

  const handleShareClick = () => {
    navigator.clipboard.writeText(window.location.href);
  };

  return (
    <section
      id="contract"
      className="h-screen relative w-full max-w-full flex items-center justify-center"
    >
      <div className="absolute top-0 left-0 w-full h-1/2 bg-white z-10"></div>
      <div className="absolute bottom-0 left-0 w-full h-1/2 bg-blue-900 z-10"></div>
      <div className="h-full w-full flex flex-row items-center justify-center z-20">
        <div className="flex flex-col justify-center items-end text-xs text-left flex-1">
          <motion.div
            initial={{ y: -100, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="sm:text-2xl md:text-4xl font-bold  text-blue-900"
          >
            DON&apos;T FOLLOW
          </motion.div>
          <motion.div
            initial={{ x: -100, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="sm:text-2xl md:text-4xl font-bold text-white"
          >
            YOUR DREAM
          </motion.div>
        </div>

        <div className="flex flex-shrink-0 items-center justify-center z-10 bg-white h-[160px] w-[170px] sm:w-[270px] sm:h-[242px] relative">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative z-45"
          >
            <FishBody />
          </motion.div>
          <div className="absolute top-full left-1/2 -translate-x-1/2 w-full h-fit border-white border-13 bg-white z-50">
            <div className="flex py-2">
              <Heart
                className={`cursor-pointer mr-3  ${
                  isLiked ? "fill-red-500 text-red-500" : "text-black"
                }`}
                onClick={handleHeartClick}
              />
              <MessageCircle
                className="cursor-pointer mr-2"
                onClick={handleMessageClick}
              />
              <Share2 className="cursor-pointer" onClick={handleShareClick} />
            </div>
            <div className="text-xs sm:text-base ">
              <span className="font-bold md:font-black">vitdonut</span> did u
              happy today yet?
            </div>
            <div className="flex flex-wrap gap-1  sm:text-sm leading-none flex-1 items-end text-xs">
              <a
                href="https://github.com/vitdonut/"
                target="_blank"
                className="hover:text-cyan-600 transition duration-150"
              >
                <span>#github</span>
              </a>
              <a
                href="https://www.linkedin.com/in/ha-minh-quan-b10717294/"
                target="_blank"
                className="hover:text-cyan-600 transition duration-150"
              >
                <span>#linkedin</span>
              </a>
              <a
                href="https://www.instagram.com/vitdonut._/"
                target="_blank"
                className="hover:text-cyan-600 transition duration-150"
              >
                <span>#instagram</span>
              </a>
              <a
                href="https://www.facebook.com/vitdonutt"
                target="_blank"
                className="hover:text-cyan-600 transition duration-150"
              >
                <span>#facebook</span>
              </a>
            </div>
          </div>
        </div>

        <div className="flex flex-col justify-center items-start text-xs flex-1">
          <motion.div
            initial={{ x: 100, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="sm:text-2xl md:text-3xl font-bold  text-blue-900"
          >
            FOLLOW MY
          </motion.div>
          <motion.div
            initial={{ y: 100, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="sm:text-2xl md:text-3xl font-bold text-white"
          >
            <TypingText words={socialMedia} className="text-white" />
          </motion.div>
        </div>
      </div>

      <div className="absolute bottom-0 right-1/2 translate-x-1/2 text-gray-300 z-50">
        @Copy right by vitdonut
      </div>
    </section>
  );
}
