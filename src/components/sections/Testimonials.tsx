"use client";

import React from "react";
import { motion } from "framer-motion";

const QUOTES = [
  { text: "VlynTech didn't just automate our workflow; they fundamentally re-architected how our enterprise operates.", author: "VP of Engineering, Fortune 100" },
  { text: "The cleanest integration we've ever experienced. Their infrastructure is miles ahead of the competition.", author: "CTO, Global Logistics" },
  { text: "Sub-10ms latency at global scale wasn't a promise, it was a baseline. Truly impressive.", author: "Head of Data, Fintech Unicorn" },
  { text: "Their machine learning models predicted market shifts three days before our internal quants.", author: "Director of Analytics, Tier 1 Bank" },
];

export default function Testimonials() {
  return (
    <section className="relative w-full py-32 bg-[#0A0A0A] overflow-hidden flex flex-col justify-center z-20">
      
      <div className="w-full text-center mb-20 px-6">
        <h2 className="font-geist font-semibold text-4xl md:text-5xl tracking-tight text-white mb-4">
          Trusted by Industry Leaders.
        </h2>
        <p className="font-inter text-text-secondary">
          What the world's most demanding engineering teams say about us.
        </p>
      </div>

      <div className="relative flex w-[200%] md:w-[150%] lg:w-[120%] -rotate-2">
        <motion.div
          animate={{ x: [0, -1000] }}
          transition={{ repeat: Infinity, ease: "linear", duration: 20 }}
          className="flex gap-8 px-4"
        >
          {/* We duplicate the array a few times to create a seamless infinite loop */}
          {[...QUOTES, ...QUOTES, ...QUOTES].map((quote, idx) => (
            <div 
              key={idx}
              className="flex-shrink-0 w-[400px] md:w-[500px] p-8 md:p-12 rounded-[32px] bg-white/5 border border-white/10 backdrop-blur-md"
            >
              <p className="font-geist text-xl md:text-2xl text-white/90 leading-tight mb-8">
                "{quote.text}"
              </p>
              <p className="font-inter text-accent-green font-medium text-sm tracking-wide uppercase">
                {quote.author}
              </p>
            </div>
          ))}
        </motion.div>
      </div>
      
      {/* Soft overlay gradients to fade edges */}
      <div className="absolute top-0 bottom-0 left-0 w-32 bg-gradient-to-r from-[#0A0A0A] to-transparent pointer-events-none z-10"></div>
      <div className="absolute top-0 bottom-0 right-0 w-32 bg-gradient-to-l from-[#0A0A0A] to-transparent pointer-events-none z-10"></div>
    </section>
  );
}
