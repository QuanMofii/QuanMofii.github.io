import { useEffect, useState } from "react";
import { motion } from "framer-motion";

interface TypingTextProps {
  words: string[];
  className?: string;
}

export default function TypingText({ words, className = "" }: TypingTextProps) {
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [displayText, setDisplayText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    let timeout: NodeJS.Timeout;
    const currentWord = words[currentWordIndex];

    if (!isDeleting && displayText.length < currentWord.length) {
      timeout = setTimeout(() => {
        setDisplayText(currentWord.slice(0, displayText.length + 1));
      }, 150);
    } else if (isDeleting && displayText.length > 0) {
      timeout = setTimeout(() => {
        setDisplayText(currentWord.slice(0, displayText.length - 1));
      }, 100);
    } else if (!isDeleting && displayText === currentWord) {
      timeout = setTimeout(() => setIsDeleting(true), 3000);
    } else if (isDeleting && displayText === "") {
      timeout = setTimeout(() => {
        setIsDeleting(false);
        setCurrentWordIndex((prev) => (prev + 1) % words.length);
      }, 400);
    }

    return () => clearTimeout(timeout);
  }, [currentWordIndex, displayText, isDeleting, words]);

  return (
    <motion.span
      key={displayText}
      className={`${className} flex items-start`}
    >
      {displayText}
      <span className="animate-blink">|</span>
    </motion.span>
  );
} 