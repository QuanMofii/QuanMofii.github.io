'use client'

import { motion } from 'framer-motion'
import { useEffect, useState, useRef } from 'react'

interface AnimatedTextProps {
  text: string
  className?: string
}

const AnimatedText = ({ text, className = "" }: AnimatedTextProps) => {
  const [isVisible, setIsVisible] = useState(false)
  const words = text.split(" ")
  const textRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const element = textRef.current
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        } else {
          setIsVisible(false)
        }
      },
      { threshold: 0.1 }
    )

    if (element) {
      observer.observe(element)
    }

    return () => {
      if (element) {
        observer.unobserve(element)
      }
    }
  }, [])

  return (
    <div ref={textRef} className={`flex flex-wrap justify-start ${className}`}>
      {words.map((word, index) => (
        <motion.div
          key={index}
          initial={{ y: 20, opacity: 0 }}
          animate={isVisible ? { y: 0, opacity: 1 } : { y: 20, opacity: 0 }}
          transition={{ 
            delay: index * 0.1,
            duration: 0.2,
            type: "spring",
            stiffness: 400,
            damping: 15
          }}
          className="mr-2"
        >
          {word}
        </motion.div>
      ))}
    </div>
  )
}

export default AnimatedText