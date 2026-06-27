"use client";

import React from "react";
import { motion } from "framer-motion";

const STORY_DATA = [
  {
    id: "01",
    title: "AI Automation",
    subtitle: "Enterprise Workflow",
    description: "Replace manual bottlenecks with intelligent pipelines that process, route, and execute tasks in milliseconds.",
    metrics: "10x Faster Processing",
  },
  {
    id: "02",
    title: "Machine Learning",
    subtitle: "Predictive Intelligence",
    description: "Harness continuous data streams to anticipate trends, detect anomalies, and make decisions before issues arise.",
    metrics: "99.9% Uptime Analytics",
  },
  {
    id: "03",
    title: "Data Annotation",
    subtitle: "Absolute Precision",
    description: "Proprietary synthetic generation and human-in-the-loop verification for flawless training datasets.",
    metrics: "Zero Margin Error",
  },
  {
    id: "04",
    title: "SaaS & Custom Software",
    subtitle: "Scalable Architecture",
    description: "End-to-end development of robust SaaS platforms and custom enterprise software tailored to your exact operational needs.",
    metrics: "100% Custom Built",
  },
];

const StoryItem = ({ 
  data, 
  index,
}: { 
  data: typeof STORY_DATA[0]; 
  index: number; 
}) => {
  return (
    <div
      className={`w-full max-w-6xl mx-auto flex flex-col ${
        index % 2 === 1 ? "md:flex-row-reverse" : "md:flex-row"
      } items-center gap-12 md:gap-20`}
    >
      <div className="flex-1 flex flex-col items-start text-left">
        <p className="text-accent-green font-mono text-sm tracking-widest mb-4">
          {data.id}
        </p>
        <h3 className="font-geist font-semibold text-4xl md:text-6xl tracking-tight text-text-primary mb-6">
          {data.title}
        </h3>
        <p className="font-inter text-xl md:text-2xl text-text-secondary mb-6 font-medium">
          {data.subtitle}
        </p>
        <p className="font-inter text-lg text-text-secondary/80 leading-relaxed">
          {data.description}
        </p>
      </div>
      
      <div className="flex-1 flex flex-col items-center justify-center w-full">
        {/* Glass Card Metric */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: "-20%" }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="relative w-full max-w-md p-10 rounded-3xl bg-white/60 backdrop-blur-2xl border border-border shadow-[0_8px_40px_rgba(0,0,0,0.04)] flex flex-col items-center justify-center text-center overflow-hidden hover:scale-105 transition-transform duration-500"
        >
          <div className="absolute inset-0 bg-gradient-to-br from-white/80 to-transparent z-0"></div>
          
          <p className="relative z-10 text-text-secondary/60 text-sm uppercase tracking-widest font-bold mb-3">
            Performance
          </p>
          <p className="relative z-10 font-geist text-3xl md:text-5xl font-bold text-text-primary">
            {data.metrics}
          </p>
          
          {/* Animated network lines decoration inside card */}
          <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-accent-green/20 rounded-full blur-3xl"></div>
          <div className="absolute -top-10 -left-10 w-40 h-40 bg-accent-lime/20 rounded-full blur-3xl"></div>
        </motion.div>
      </div>
    </div>
  );
};

export default function SolutionsStory() {
  return (
    <section className="relative w-full bg-secondary py-32 px-6 overflow-hidden">
      <div className="flex flex-col gap-32 md:gap-48">
        {STORY_DATA.map((data, index) => (
          <StoryItem 
            key={data.id} 
            data={data} 
            index={index} 
          />
        ))}
      </div>
    </section>
  );
}
