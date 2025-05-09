"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState, useRef, useEffect, useMemo } from "react";
import AnimatedText from "./AnimatedText";
import { ArrowUpRight } from "lucide-react";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");
  const menuRef = useRef<HTMLDivElement>(null);

  const menuItems = useMemo(
    () => [
      { name: "Hero", href: "#hero" },
      { name: "Introduce", href: "#introduct" },
      { name: "Project", href: "#project" },
      { name: "Contact", href: "#contact-scroll-anchor" },
    ],
    []
  );

  const handleScroll = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setIsOpen(false);
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      const sections = menuItems.map((item) => item.href.substring(1));
      const currentSection = sections.find((section) => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });
      setActiveSection(currentSection || "");
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, [menuItems]);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <>
      <header className="fixed top-0 left-0 w-full z-40 bg-transparent text-white">
        <div className="container mx-auto px-4 pt-7 xl:px-7 flex justify-between items-center ">
          {/* Logo */}
          <div className="relative inline-block text-4xl">
        
            {/* <span
              className="absolute inset-0 z-0 text-4xl pointer-events-none select-none"
              style={{
                WebkitTextStroke: "2px white",
                color: "transparent",
              }}
            >
              LilDucks
            </span> */}

            <AnimatedText
              text="DuckMofii"
              className="text-4xl text-black relative z-10"
            />
          </div>

          {/* Menu Button */}
          <div className="relative" ref={menuRef}>
            <motion.button
              onClick={() => setIsOpen(!isOpen)}
              className="rounded-full px-6 py-2 bg-gray-200 hover:bg-gray-300 transition-all cursor-pointer text-black"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <motion.span
                className="text-xl"
                key={isOpen ? "close" : "menu"}
                initial={{ y: -20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: 20, opacity: 0 }}
              >
                {isOpen ? "Close" : "Menu"}
              </motion.span>
            </motion.button>

            {/* Dropdown Menu */}
            <AnimatePresence>
              {isOpen && (
                <>
                  <motion.div
                    initial={{ opacity: 0, y: -20, rotate: -5 }}
                    animate={{ opacity: 1, y: 0, rotate: 0 }}
                    exit={{ opacity: 0, y: 20, rotate: 5 }}
                    transition={{
                      type: "spring",
                      stiffness: 500,
                      damping: 25,
                    }}
                    className="absolute right-0 mt-2 w-60 bg-white rounded-lg shadow-2xl overflow-hidden"
                  >
                    {menuItems.map((item, index) => (
                      <motion.a
                        key={item.name}
                        href={item.href}
                        onClick={(e) => {
                          e.preventDefault();
                          handleScroll(item.href);
                        }}
                        className="px-6 py-4 text-gray-800 hover:bg-gray-200 flex items-center justify-between transition-all duration-300 text-2xl"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: index * 0.1 }}
                      >
                        <span>{item.name}</span>
                        {activeSection === item.href.substring(1) && (
                          <motion.div
                            initial={{ scale: 0 }}
                            animate={{ scale: 1 }}
                            className="w-2.5 h-2.5 bg-black rounded-full"
                          />
                        )}
                      </motion.a>
                    ))}
                  </motion.div>

                  {/* GitHub Link */}
                  <motion.a
                    href="https://github.com/JellyMofii"
                    target="_blank"
                    rel="noopener noreferrer"
                    initial={{ opacity: 0, y: -20, rotate: 5 }}
                    animate={{ opacity: 1, y: 0, rotate: 0 }}
                    exit={{ opacity: 0, y: 20, rotate: -5 }}
                    transition={{
                      type: "spring",
                      stiffness: 500,
                      damping: 25,
                    }}
                    className="absolute right-0 w-60 mt-68 bg-black rounded-lg shadow-lg overflow-hidden text-2xl block"
                  >
                   
                     
                      <motion.div 
                      className="px-6 py-4 flex items-center justify-between gap-2 text-white group"
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
             
                      >
                        <span>My Github</span>
                        <ArrowUpRight size={20} />
                      </motion.div>
                 
                  </motion.a>
                </>
              )}
            </AnimatePresence>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
