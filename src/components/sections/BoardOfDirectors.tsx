"use client";

import React from "react";
import { motion } from "framer-motion";

const DIRECTORS = [
  {
    id: 1,
    name: "Swati Chandrika",
    role: "Founder & Managing Director",
    description: "Leads precision data annotations, manages strategic client relationships, and oversees core management operations.",
    quote: `"Precision in data is the foundation of trustworthy AI."`
  },
  {
    id: 2,
    name: "Sai Koushik",
    role: "Founder & CEO",
    description: "Drives our overarching vision, specializing in scalable SaaS products and large-scale enterprise automation strategies.",
    quote: `"Scalability isn't just software; it's about automating the future."`
  },
  {
    id: 3,
    name: "Kasam Vignan",
    role: "Co-founder & COO",
    description: "Spearheads the development of advanced AI agents, complex model routing, and robust automation workflows.",
    quote: `"Intelligent agents are the new workforce multipliers."`
  }
];

export default function BoardOfDirectors() {
  return (
    <section className="relative w-full py-24 px-6 md:px-12 lg:px-24 bg-transparent overflow-hidden">
      <div className="max-w-7xl mx-auto flex flex-col items-center">
        <div className="mb-16 text-center">
          <h2 className="font-geist font-bold text-4xl md:text-5xl text-text-primary tracking-tight mb-4">
            Board of Directors
          </h2>
          <p className="font-inter text-text-secondary max-w-2xl text-lg">
            Hover over the classified profiles below to reveal the visionary leaders behind our technology.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full">
          {DIRECTORS.map((director) => (
            <div 
              key={director.id}
              className="group relative h-[400px] w-full rounded-3xl overflow-hidden border border-border shadow-sm cursor-pointer transition-all duration-700 hover:shadow-2xl hover:-translate-y-2 bg-gray-50/50"
            >
              {/* Default State: Classified / Unknown File */}
              <div className="absolute inset-0 flex flex-col items-center justify-center p-8 bg-gray-100/80 backdrop-blur-md z-10 transition-opacity duration-500 group-hover:opacity-0">
                <div className="w-24 h-24 rounded-full bg-gray-300 animate-pulse mb-6 flex items-center justify-center">
                  <svg className="w-10 h-10 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 11c0 3.517-1.009 6.799-2.753 9.571m-3.44-2.04l.054-.09A13.916 13.916 0 008 11a4 4 0 118 0c0 1.017-.07 2.019-.203 3m-2.118 6.844A21.88 21.88 0 0015.171 17m3.839 1.132c.645-2.266.99-4.659.99-7.132A8 8 0 008 4.07M3 15.364c.64-1.319 1-2.8 1-4.364 0-1.457.39-2.823 1.07-4" />
                  </svg>
                </div>
                <h3 className="font-geist font-bold text-xl md:text-2xl text-gray-500 tracking-wider uppercase mb-2 text-center px-4">{director.role}</h3>
                <p className="font-inter text-sm text-gray-400 font-medium">Hover to Reveal Profile</p>
              </div>

              {/* Hover State: Revealed Profile with Bright Glass Effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-white/90 to-white/40 backdrop-blur-xl p-8 flex flex-col justify-between opacity-0 translate-y-4 transition-all duration-700 z-20 group-hover:opacity-100 group-hover:translate-y-0">
                
                {/* Colorful glowing background behind the glass */}
                <div className="absolute inset-0 -z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-1000">
                  <div className="absolute -top-20 -right-20 w-64 h-64 bg-accent-blue/30 rounded-full blur-[80px]"></div>
                  <div className="absolute -bottom-20 -left-20 w-64 h-64 bg-accent-green/30 rounded-full blur-[80px]"></div>
                </div>

                <div className="relative z-10">
                  <h3 className="font-geist font-bold text-3xl text-text-primary mb-1">{director.name}</h3>
                  <p className="font-inter text-sm font-semibold text-accent-blue mb-6 uppercase tracking-wider">{director.role}</p>
                  
                  <p className="font-inter text-text-secondary leading-relaxed mb-6">
                    {director.description}
                  </p>
                </div>

                <div className="relative z-10 mt-auto">
                  <div className="w-8 h-1 bg-gradient-to-r from-accent-blue to-accent-green mb-4 rounded-full"></div>
                  <p className="font-geist font-medium text-lg text-text-primary italic">
                    {director.quote}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
