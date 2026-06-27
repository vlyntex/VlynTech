"use client";

import React, { useEffect, useState, useRef } from "react";
import { motion, useInView } from "framer-motion";

const AnimatedNumber = ({ value, suffix = "" }: { value: number; suffix?: string }) => {
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-20%" });
  const [displayValue, setDisplayValue] = useState(0);

  useEffect(() => {
    if (isInView) {
      let start = 0;
      const end = value;
      const duration = 2000;
      const frameDuration = 1000 / 60;
      const totalFrames = Math.round(duration / frameDuration);
      
      let frame = 0;
      const counter = setInterval(() => {
        frame++;
        const progress = frame / totalFrames;
        const currentCount = Math.round(end * (1 - Math.pow(1 - progress, 3))); // easeOutCubic
        
        setDisplayValue(currentCount);
        
        if (frame === totalFrames) {
          clearInterval(counter);
          setDisplayValue(end);
        }
      }, frameDuration);
      
      return () => clearInterval(counter);
    }
  }, [isInView, value]);

  return (
    <span ref={ref} className="font-geist font-semibold text-6xl md:text-8xl tracking-tighter text-text-primary">
      {displayValue}
      <span className="text-accent-green">{suffix}</span>
    </span>
  );
};

export default function PerformanceMetrics() {
  return (
    <section className="w-full py-32 bg-white flex justify-center px-6 z-20 border-y border-border">
      <div className="w-full max-w-7xl flex flex-col md:flex-row items-center justify-around gap-16 md:gap-8">
        
        <div className="flex flex-col items-center text-center">
          <AnimatedNumber value={100} suffix="M+" />
          <p className="font-inter text-text-secondary mt-4 uppercase tracking-widest text-sm font-semibold">Transactions Processed</p>
        </div>

        <div className="hidden md:block w-[1px] h-32 bg-border"></div>
        
        <div className="flex flex-col items-center text-center">
          <AnimatedNumber value={99} suffix=".9%" />
          <p className="font-inter text-text-secondary mt-4 uppercase tracking-widest text-sm font-semibold">Model Accuracy</p>
        </div>

        <div className="hidden md:block w-[1px] h-32 bg-border"></div>

        <div className="flex flex-col items-center text-center">
          <AnimatedNumber value={10} suffix="x" />
          <p className="font-inter text-text-secondary mt-4 uppercase tracking-widest text-sm font-semibold">Efficiency Multiplier</p>
        </div>

      </div>
    </section>
  );
}
