'use client'

import { motion } from 'framer-motion'
import { useEffect, useState, useRef } from 'react'

interface AnimatedTextProps {
  text: string
  className?: string
  as?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'p' | 'span' | 'div'
  withRotate?: boolean
  style?: React.CSSProperties;
}

const AnimatedText = ({ 
  text, 
  className = "", 
  as = 'div',
  withRotate = true ,
  style 
}: AnimatedTextProps) => {
  const [isVisible, setIsVisible] = useState(false)
  const words = text.match(/\S+\s*/g) || []  
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

  const Component = as

  return (
    <Component ref={textRef} className={`flex flex-wrap justify-start ${className}`} style={style}>
      {words.map((word, index) => (
        <motion.div
          key={index}
          initial={{ 
            y: 20, 
            opacity: 0,
            ...(withRotate && { rotate: 5 })
          }}
          animate={isVisible ? { 
            y: 0, 
            opacity: 1,
            ...(withRotate && { rotate: 0 })
          } : { 
            y: 20, 
            opacity: 0,
            ...(withRotate && { rotate: 5 })
          }}
          transition={{ 
            delay: index * 0.1,
            duration: 0.2,
            type: "spring",
            stiffness: 50,
            damping: 10
          }}
          className="mr-2 "
        >
          {word}
        </motion.div>
      ))}
    </Component>
  )
}

export default AnimatedText