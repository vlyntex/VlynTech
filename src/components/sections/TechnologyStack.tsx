"use client";

import React, { useRef, useState, useEffect } from "react";
import { motion, useInView } from "framer-motion";

const TERMINAL_LINES = [
  { text: "$ vlyn-cli cluster init --region global-edge", color: "text-white" },
  { text: "> Initializing globally distributed AI fabric...", color: "text-white/50" },
  { text: "> Mounting VlynEngine redundancy matrix...", color: "text-white/50" },
  { text: "[OK] VlynEngine mounted (Latency: 8ms)", color: "text-accent-green" },
  { text: "> Loading model: vlyn-transformer-v4...", color: "text-white/50" },
  { text: "[OK] Model deployed to Edge Registry", color: "text-accent-green" },
  { text: "> Establishing E2E encrypted stream (aes-256-gcm)...", color: "text-white/50" },
  { text: "[OK] Secure tunnel established", color: "text-accent-green" },
  { text: "> Status: INTELLIGENCE_ROUTED", color: "text-accent-lime font-bold" },
  { text: "> Active Throughput: 423,109 req/s", color: "text-accent-yellow" },
  { text: "> Listening for incoming streams...", color: "text-white/30 animate-pulse" }
];

export default function TechnologyStack() {
  const containerRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(containerRef, { once: true, margin: "-20%" });
  const [visibleLines, setVisibleLines] = useState<number>(0);

  useEffect(() => {
    if (!isInView) return;

    let timeout: NodeJS.Timeout;
    
    const runSequence = (currentLine: number) => {
      setVisibleLines(currentLine);
      
      if (currentLine < TERMINAL_LINES.length) {
        // Vary the speed depending on the line to simulate real loading
        const delay = currentLine === 0 ? 600 : (currentLine % 2 === 0 ? 800 : 200);
        timeout = setTimeout(() => runSequence(currentLine + 1), delay);
      } else {
        // Reset and loop after a long pause
        timeout = setTimeout(() => runSequence(0), 4000);
      }
    };

    runSequence(1); // Start with the first line immediately

    return () => clearTimeout(timeout);
  }, [isInView]);

  return (
    <section ref={containerRef} className="relative w-full py-32 bg-white flex justify-center px-6 z-20">
      <div className="w-full max-w-7xl flex flex-col lg:flex-row items-center gap-16">
        <div className="flex-1 text-center lg:text-left">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="font-geist font-semibold text-5xl md:text-6xl tracking-tight text-text-primary mb-6"
          >
            Built for Scale.
            <br />
            <span className="text-text-secondary/50">Wired for Speed.</span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="font-inter text-lg md:text-xl text-text-secondary leading-relaxed max-w-lg mx-auto lg:mx-0"
          >
            Integrate seamlessly with your existing infrastructure using our developer-friendly APIs. Our architecture guarantees sub-10ms latency at global scale, fully encrypted end-to-end.
          </motion.p>
        </div>

        <motion.div 
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="flex-1 w-full max-w-2xl relative rounded-2xl overflow-hidden bg-[#0A0A0A] shadow-[0_32px_64px_rgba(0,0,0,0.15)] border border-white/10 group"
        >
          {/* Mac window controls */}
          <div className="flex items-center gap-2 px-4 py-3 bg-[#111111] border-b border-white/5">
            <div className="w-3 h-3 rounded-full bg-red-500/20 border border-red-500/50"></div>
            <div className="w-3 h-3 rounded-full bg-yellow-500/20 border border-yellow-500/50"></div>
            <div className="w-3 h-3 rounded-full bg-green-500/20 border border-green-500/50"></div>
            <span className="ml-4 text-xs font-mono text-white/30">vlyn-terminal ~ root</span>
          </div>
          
          <div className="p-6 md:p-8 min-h-[360px] font-mono text-sm md:text-base leading-loose overflow-hidden flex flex-col items-start justify-start">
            {TERMINAL_LINES.slice(0, visibleLines).map((line, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, x: -5 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.2 }}
                className={`${line.color} whitespace-nowrap`}
              >
                {line.text}
              </motion.div>
            ))}
            {/* Blinking Cursor */}
            {visibleLines < TERMINAL_LINES.length && (
              <div className="w-2 h-5 bg-white/50 animate-pulse mt-2"></div>
            )}
          </div>
          
          {/* Subtle glow behind the window */}
          <div className="absolute -inset-1 bg-gradient-to-r from-accent-green to-accent-lime rounded-2xl blur-xl opacity-0 group-hover:opacity-10 transition-opacity duration-700 -z-10 pointer-events-none"></div>
        </motion.div>
      </div>
    </section>
  );
}
