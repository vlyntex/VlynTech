"use client";

import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Link from "next/link";
import BackgroundVideo from "../ui/BackgroundVideo";
import { ArrowRight } from "lucide-react";

export default function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);
  const blur = useTransform(scrollYProgress, [0, 1], ["blur(0px)", "blur(10px)"]);

  const textVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.15,
        duration: 1,
        ease: [0.16, 1, 0.3, 1] as const, // Apple-like ease out
      },
    }),
  };

  return (
    <section
      ref={containerRef}
      className="relative h-screen w-full flex flex-col items-center justify-center overflow-hidden"
    >
      {/* 
        Replace the src below with the path to your actual production video 
        e.g., "/videos/hero-background.mp4" (place the video in the /public/videos/ folder)
      */}
      <BackgroundVideo src="/videos/hero-background.mp4" overlayOpacity={0.2} />

      <motion.div
        style={{ y, opacity, filter: blur }}
        className="relative z-10 flex flex-col items-center text-center px-4 w-full max-w-7xl mx-auto"
      >
        <motion.h1
          custom={1}
          initial="hidden"
          animate="visible"
          variants={textVariants}
          className="font-geist font-bold text-5xl md:text-6xl lg:text-7xl xl:text-[5.5rem] leading-[1.05] tracking-tight text-text-primary mb-8 w-full"
        >
          Building Intelligence
          <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-text-primary to-text-secondary">
            That Powers Tomorrow.
          </span>
        </motion.h1>

        <motion.p
          custom={2}
          initial="hidden"
          animate="visible"
          variants={textVariants}
          className="font-inter text-lg md:text-2xl text-text-secondary max-w-2xl leading-relaxed mb-12 font-medium"
        >
          Enterprise AI Automation, Machine Learning, Data Annotation, and
          Intelligent Digital Transformation.
        </motion.p>

        <motion.div
          custom={3}
          initial="hidden"
          animate="visible"
          variants={textVariants}
          className="flex flex-col sm:flex-row items-center gap-6"
        >
          <Link href="/contact" className="group relative inline-flex items-center justify-center px-8 py-4 text-lg font-semibold text-white bg-black rounded-full overflow-hidden transition-all duration-300 hover:scale-105 active:scale-95 hover:bg-accent-green hover:text-black shadow-md">
            <span className="relative z-10">Book a Demo</span>
          </Link>
          
          <Link href="/solutions" className="group flex items-center justify-center gap-2 px-8 py-4 bg-transparent text-text-primary rounded-full font-medium text-lg transition-transform duration-300 hover:scale-105 active:scale-95 border border-border hover:border-text-secondary/50">
            Explore Solutions
          </Link>
        </motion.div>
      </motion.div>
    </section>
  );
}
