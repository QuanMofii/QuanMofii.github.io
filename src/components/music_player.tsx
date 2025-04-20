"use client";


import React, { useState, useEffect, useRef } from "react";
import { Pause, Play } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import BaseImage from "@/components/base_image";

const basePath = process.env.NEXT_PUBLIC_BASE_PATH || '';

type Props = {
  src: string;
  songTitle: string;
  songImage: string;
};

const MusicPlayer: React.FC<Props> = ({ src, songTitle, songImage }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isPlaying, setIsPlaying] = useState(true);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.play().catch(() => {});
    }
  }, []);

  const togglePlay = () => {
    if (!audioRef.current) return;
    if (isPlaying) {
      audioRef.current.pause();
    } else {
      audioRef.current.play();
    }
    setIsPlaying(!isPlaying);
  };

  return (
    <div
      onMouseEnter={() => setIsOpen(true)}
      onMouseLeave={() => setIsOpen(false)}
      className="fixed top-4 right-4 z-50"
    >
      <div className="flex items-center bg-white shadow-md rounded-md h-12 overflow-hidden cursor-pointer">
        {/* Ảnh nằm ngoài motion để không bị ảnh hưởng width */}
        <motion.div
          className="flex-shrink-0 items-center justify-center"
          animate={{
            opacity: isOpen ? 1 : isPlaying ? [0.4, 1, 0.4] : 0.5,
          }}
          transition={{
            duration: isOpen ? 0.2 :  3,
            ease: "easeInOut",
            repeat: isOpen || !isPlaying ? 0 : Infinity,
          }}
        >
          <BaseImage
            src={songImage}
            alt="Song"
            width={36}
            height={36}
            className="rounded-md mx-2"
          />
        </motion.div>

        {/* Khối mở rộng */}
        <motion.div
          initial={{ width: 0 }}
          animate={{ width: isOpen ? 144 : 0 }}
          transition={{
            duration: isOpen ? 0.4 : 0.1,
            ease: isOpen ? [0.42, 0, 0.58, 1] : "easeIn",
          }}
          className="overflow-hidden"
        >
          <AnimatePresence>
            {isOpen && (
              <motion.div
                className="flex items-center pr-3 py-1"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 20 }}
                transition={{
                  duration: 0.4,
                  ease: [0.42, 0, 0.58, 1],
                }}
              >
                <div className="flex flex-col flex-grow overflow-hidden mr-2 min-w-[120px]">
                  {/* Marquee */}
                  <div className="relative overflow-hidden h-[20px] w-full">
                    {isPlaying ? (
                      <motion.div
                        className="flex whitespace-nowrap absolute text-sm"
                        initial={{ x: 0 }}
                        animate={{ x: "-100%" }}
                        transition={{
                          duration: 20,
                          repeat: Infinity,
                          ease: "linear",
                        }}
                      >
                        <span className="mr-4">{songTitle}</span>
                        <span className="mr-4">{songTitle}</span>
                        <span className="mr-4">{songTitle}</span>
                      </motion.div>
                    ) : (
                      <div className="text-sm whitespace-nowrap">{songTitle}</div>
                    )}
                  </div>

                  {/* Control & visualizer */}
                  <div className="flex items-center gap-2 mt-1">
                    <button onClick={togglePlay}>
                      {isPlaying ? <Pause size={16} /> : <Play size={16} />}
                    </button>
                    <div className="flex gap-[2px]">
                      {[...Array(15)].map((_, i) => (
                        <motion.div
                          key={i}
                          className="w-[3px] bg-pink-400 rounded-sm"
                          style={{ height: "8px" }}
                          animate={
                            isPlaying
                              ? { height: [6, 14, 6] }
                              : { height: 6 }
                          }
                          transition={
                            isPlaying
                              ? {
                                  repeat: Infinity,
                                  duration: 1.2, // chậm hơn
                                  delay: i * 0.15,
                                }
                              : { duration: 0.2 }
                          }
                        />
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
      </div>

      <audio src={`${basePath}${src}`} ref={audioRef} autoPlay loop />
    </div>
  );
};

export default MusicPlayer;
