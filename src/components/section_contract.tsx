// components/sections/section_contract.tsx
import React from 'react';
import FishBody from './fish_body';
import { motion } from 'framer-motion';

export default function SectionContract() {
  return (
    <section id="contract" className="h-screen relative w-full flex items-center justify-center">
      <div className="absolute top-0 left-0 w-full h-1/2 bg-white"></div>
      <div className="absolute bottom-0 left-0 w-full h-1/2 bg-red-900"></div>
      <div className="absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 z-10 border-white border-10  bg-indigo-900 w-[20vw] h-[30vh] ">
      
      </div>
      <motion.div 
        initial={{ y: 100, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="relative z-45 "
      >
        <FishBody />
      </motion.div>
    </section>
  );
}
