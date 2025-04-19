'use client';

import { useState, useEffect, useRef } from 'react';
import { ArrowUp, ArrowDown } from 'lucide-react';
import { useFishStore } from "@/store/fishStore";


type Section = {
  id: string;
  name: string;
};

const sections: Section[] = [
  { id: 'welcome', name: 'WELCOME' },
  { id: 'infor', name: 'INFORMATION' },
  { id: 'experience', name: 'EXPERIENCE' },
  { id: 'project', name: 'PROJECT' },
  { id: 'contract', name: 'CONTRACT' },
];

export default function Navigation() {
  const [currentSection, setCurrentSection] = useState(0);
  const prevSectionRef = useRef(currentSection);
  const containerRef = useRef<HTMLDivElement>(null);
  const { isFlying } = useFishStore();

  const getNextSection = (current: number): number => 
    current === sections.length - 1 ? 0 : current + 1;

  const getPrevSection = (current: number): number => 
    current === 0 ? sections.length - 1 : current - 1;

  const scrollToSection = (index: number) => {
    const element = document.getElementById(sections[index].id);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    const handleScroll = () => {
      const windowHeight = window.innerHeight;
      
      sections.forEach((section, index) => {
        const element = document.getElementById(section.id);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= windowHeight / 2 && rect.bottom >= windowHeight / 2) {
            if (index !== prevSectionRef.current) {
              prevSectionRef.current = index;
              setCurrentSection(index);
            }
          }
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="fixed left-0 top-1/2 -translate-y-1/2 z-50 group flex flex-col items-center justify-between h-[200px] w-[10vw] min-w-[40px]">
      <button
        onClick={() => scrollToSection(getPrevSection(currentSection))}
        className="opacity-0 group-hover:opacity-100 transition-all duration-400"
      >
        <ArrowUp className="w-5 h-5 text-gray-600 hover:text-gray-900" />
      </button>
      
      <div className="relative h-[120px] w-full overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full " />
        <div className="absolute bottom-0 left-0 w-full h-full  " />
        <div 
          ref={containerRef}
          className="flex flex-col items-center transition-transform duration-800"
          style={{ transform: `translateY(-${currentSection * 123}px)` }}
        >
          {sections.map((section, index) => (
            <div 
              key={section.id}
              className={`transform text-sm lg:text-[1vw] -rotate-90  font-semibold tracking-widest h-[123px] flex items-center ${
                index === currentSection ? 'text-gray-900' : 'text-gray-400'
              }`}
            >
              {section.id === 'welcome' && isFlying ? 'GOODBYE' : section.name}
            </div>
          ))}
        </div>
      </div>

      <button
        onClick={() => scrollToSection(getNextSection(currentSection))}
        className="opacity-0 group-hover:opacity-100 transition-all duration-400 cursor-point"
      >
        <ArrowDown className="w-5 h-5 text-gray-600 hover:text-gray-900" />
      </button>
    </div>
  );
}
