"use client";

import { useEffect, useState } from "react";
import { Bouncy } from "ldrs/react";
import { Reuleaux } from "ldrs/react";
import "ldrs/react/Bouncy.css";
import 'ldrs/react/Reuleaux.css'


export default function LoadingScreen() {
  const [showLoader, setShowLoader] = useState(true);
  const [animateOut, setAnimateOut] = useState(false);

  useEffect(() => {
    const loadingTimeout = setTimeout(() => {
      setAnimateOut(true);
      setTimeout(() => setShowLoader(false), 1000);
    }, 3000);

    return () => {
      clearTimeout(loadingTimeout);
    };
  }, []);

  if (!showLoader) return null;

  return (
    <div
      className={`fixed inset-0 bg-white z-50 flex items-center justify-center overflow-hidden
        ${animateOut ? "h-0" : "h-screen"} transition-all duration-1000`}
    >
      <div className={`flex flex-col items-center justify-center gap-4 transition-opacity duration-500
        ${animateOut ? "opacity-0" : "opacity-100"}`}>
        <Reuleaux
          size="37"
          stroke="5"
          strokeLength="0.15"
          bgOpacity="0.1"
          speed="1.2"
          color="black"
          
        />
        <Bouncy 
          size="45" 
          speed="1.75" 
          color="black" 
        />
      </div>
    </div>
  );
}
