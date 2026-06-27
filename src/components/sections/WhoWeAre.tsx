"use client";

import React, { useRef, useState, useEffect } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

const TRIANGLE_DATA = [
  { id: 1, size: 45, x: 10, y: 20, duration: 8, delay: 0, rot: 15 },
  { id: 2, size: 25, x: 85, y: 15, duration: 6, delay: 2, rot: 45 },
  { id: 3, size: 35, x: 75, y: 80, duration: 10, delay: 1, rot: 90 },
  { id: 4, size: 50, x: 20, y: 75, duration: 7, delay: 3, rot: -20 },
  { id: 5, size: 30, x: 50, y: 10, duration: 9, delay: 4, rot: 60 },
  { id: 6, size: 40, x: 90, y: 50, duration: 12, delay: 1.5, rot: 180 },
  { id: 7, size: 20, x: 5, y: 50, duration: 5, delay: 0.5, rot: -45 },
  { id: 8, size: 55, x: 30, y: 30, duration: 11, delay: 1, rot: 120 },
  { id: 9, size: 15, x: 60, y: 65, duration: 4, delay: 2.5, rot: -90 },
  { id: 10, size: 38, x: 40, y: 85, duration: 8, delay: 0, rot: 30 },
  { id: 11, size: 28, x: 15, y: 45, duration: 6, delay: 3, rot: -15 },
  { id: 12, size: 42, x: 70, y: 35, duration: 10, delay: 1.2, rot: 210 },
];

export default function WhoWeAre() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 80%", "end 20%"],
  });

  const y = useTransform(scrollYProgress, [0, 1], [100, 0]);
  const opacity = useTransform(scrollYProgress, [0, 0.5, 1], [0, 1, 1]);

  const [mounted, setMounted] = useState(false);
  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <section
      ref={containerRef}
      className="relative w-full py-32 md:py-48 flex items-center justify-center px-6 bg-white z-20 overflow-hidden"
    >
      {/* Background Floating Triangles */}
      {mounted && (
        <div className="absolute inset-0 w-full h-full pointer-events-none z-0">
          {TRIANGLE_DATA.map((t) => (
            <motion.div
              key={t.id}
              className="absolute"
              style={{
                left: `${t.x}%`,
                top: `${t.y}%`,
                width: t.size,
                height: t.size,
              }}
              animate={{
                y: [0, -100, 0],
                x: [0, 80, 0],
                rotate: [t.rot, t.rot + 180, t.rot],
              }}
              transition={{
                duration: t.duration,
                repeat: Infinity,
                ease: "easeInOut",
                delay: t.delay,
              }}
            >
              <svg viewBox="0 0 100 100" className="w-full h-full text-black fill-current">
                <polygon points="50,15 100,100 0,100" />
              </svg>
            </motion.div>
          ))}
        </div>
      )}

      {/* Foreground Content */}
      <motion.div
        style={{ y, opacity }}
        className="max-w-5xl text-center relative z-10"
      >
        <h2 className="font-geist font-medium text-4xl md:text-6xl lg:text-[80px] leading-[1.1] tracking-tight text-text-primary">
          We don’t just build software.{" "}
          <span className="text-text-secondary/50">
            We architect intelligence that redefines what’s possible at scale.
          </span>
        </h2>
      </motion.div>
    </section>
  );
}
