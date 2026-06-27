"use client";

import React, { useRef, useState } from "react";
import Link from "next/link";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";

export default function CTA() {
  const buttonRef = useRef<HTMLAnchorElement>(null);
  const [isHovered, setIsHovered] = useState(false);
  
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseXSpring = useSpring(x, { stiffness: 150, damping: 15, mass: 0.1 });
  const mouseYSpring = useSpring(y, { stiffness: 150, damping: 15, mass: 0.1 });

  function handleMouseMove(e: React.MouseEvent<HTMLAnchorElement>) {
    if (!buttonRef.current) return;
    const rect = buttonRef.current.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const mouseX = e.clientX - rect.left - width / 2;
    const mouseY = e.clientY - rect.top - height / 2;
    
    // Magnetic pull is 20% of the distance from center
    x.set(mouseX * 0.2);
    y.set(mouseY * 0.2);
  }

  function handleMouseLeave() {
    setIsHovered(false);
    x.set(0);
    y.set(0);
  }

  return (
    <section className="relative w-full py-48 bg-transparent flex justify-center px-6 z-20 overflow-hidden">
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <div className="w-[800px] h-[800px] bg-accent-green/5 rounded-full blur-[100px]"></div>
      </div>

      <div className="relative z-10 w-full max-w-4xl text-center flex flex-col items-center">
        <h2 className="font-geist font-bold text-5xl md:text-8xl tracking-tighter text-text-primary mb-8">
          Ready to scale?
        </h2>
        <p className="font-inter text-xl md:text-2xl text-text-secondary max-w-2xl mb-16">
          Join the enterprises already building the future with VlynTech's intelligence infrastructure.
        </p>

        <motion.div style={{ x: mouseXSpring, y: mouseYSpring }}>
          <Link
            href="/contact"
            ref={buttonRef}
            onMouseMove={handleMouseMove}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={handleMouseLeave}
            className="group relative inline-flex items-center justify-center px-12 py-6 font-semibold text-white bg-black rounded-full overflow-hidden transition-all duration-300 hover:scale-105 active:scale-95 hover:bg-accent-green hover:text-black shadow-[0_20px_40px_rgba(0,0,0,0.1)] text-xl md:text-2xl"
          >
            <span className="relative z-10">Start Your Transformation</span>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
