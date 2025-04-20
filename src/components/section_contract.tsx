// components/sections/section_contract.tsx
import React, { useState } from "react";
import FishBody from "@/components/fish_body";
import { motion } from "framer-motion";
import TypingText from "@/components/typing_text";
import { Heart, MessageCircle, Share2 } from "lucide-react";

export default function SectionContract() {
  const socialMedia = ["GITHUB", "LINKEDIN","INSTAGRAM", "FACEBOOK"];
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
      className="h-screen relative w-full flex items-center justify-center"
    >
      <div className="absolute top-0 left-0 w-full h-1/2 bg-white"></div>
      <div className="absolute bottom-0 left-0 w-full h-1/2 bg-blue-900"></div>
      <div className="absolute text-xs top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 flex flex-col z-10 bg-white p-3 h-[160px] w-[170px] sm:w-[270px] sm:h-[242px] ">
        <div className="flex-1 bg-gray-300"></div>
        <div className="absolute h-[160px] w-[180px] sm:w-[280px] sm:h-[242px] top-0 left-0 translate-x-[-100%]  flex-col flex justify-center items-end  ">
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
        <div className="absolute h-[160px] w-[180px] sm:w-[280px] sm:h-[242px] top-0 right-0 translate-x-[100%]  flex-col flex justify-center items-start  ">
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

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="relative z-45"
      >
        <FishBody />

        <div className="absolute h-[120px] w-[170px] sm:w-[270px] sm:h-[120px] -top-0 left-0 translate-x-[-50%] translate-y-[60%] sm:translate-y-[100%] flex-col flex bg-white px-3 pb-3">
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
            <span className="font-bold md:font-black">vitdonut</span > did u happy today yet?
          </div>
          <div className="flex flex-wrap gap-1  sm:text-sm leading-none flex-1 items-end text-xs">
            <a href="https://github.com/vitdonut/" target="_blank" className="hover:text-cyan-600 transition duration-150">
              <span>#github</span>
            </a>
            <a href="https://www.linkedin.com/in/ha-minh-quan-b10717294/" target="_blank" className="hover:text-cyan-600 transition duration-150">     
            <span>#linkedin</span>
            </a>
            <a href="https://www.instagram.com/vitdonut._/" target="_blank" className="hover:text-cyan-600 transition duration-150">  
            <span>#instagram</span>
            </a>
            <a href="https://www.facebook.com/vitdonutt" target="_blank" className="hover:text-cyan-600 transition duration-150"> 
            <span>#facebook</span>
            </a>
          </div>
        </div>
      </motion.div>
      <div className="absolute bottom-0 right-1/2 translate-x-1/2 text-gray-300">@Copy right by vitdonut</div>
    </section>
  );
}
