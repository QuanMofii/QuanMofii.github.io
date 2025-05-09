'use client'

import { motion } from 'framer-motion'
import {  Download } from 'lucide-react'
import Link from 'next/link'

interface ButtonRedirectProps {
  href: string
  content: string
}

const ButtonDownloadCV = ({ href, content }: ButtonRedirectProps) => {
  return (
    <Link href={href} target="_blank" rel="noopener noreferrer">
      <motion.div
        initial={{ y: 100, opacity: 0, rotate: 5 }}
        whileInView={{ y: 0, opacity: 1, rotate: 0 }}
        exit={{ y: -100, opacity: 0, rotate: -5 }}
        viewport={{ once: true, amount: 0.5 }}
        transition={{
          duration: 0.5,
          type: "spring",
          stiffness: 100
        }}
        className="group relative overflow-hidden rounded-full bg-white cursor-pointer shadow-xl shadow-inherit px-6 py-3 transition-colors duration-300 hover:bg-sky-400 w-fit"
      >
        <div className="flex items-center justify-center gap-3 transition-transform duration-300 -translate-x-4 group-hover:translate-x-0">
          <div className="text-2xl mb-1 font-semibold opacity-0 -translate-x-5 transition-all duration-300 group-hover:opacity-100 text-black group-hover:text-white group-hover:translate-x-0">
            < Download size={22} />
          </div>
          <span className=" font-bold text-black group-hover:text-white  text-xl transition-colors duration-300 -translate-y-[0.1rem]">
            {content}
          </span>
          <div className=" w-2 h-2 bg-black rounded-full opacity-100 group-hover:opacity-0 group-hover:translate-x-4 transform transition-all duration-300 group-hover:scale-0" />
        </div>
      </motion.div>
    </Link>
  )
}

export default ButtonDownloadCV 
