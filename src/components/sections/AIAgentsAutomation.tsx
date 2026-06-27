"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { 
  Share2, Mail, Bot, Lightbulb, Briefcase, TrendingUp, Mic,
  ChevronLeft, ChevronRight
} from "lucide-react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper/modules";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/navigation";

const SERVICES = [
  { id: 1, title: "Social Media Automation", icon: Share2, description: "Autonomous content generation, scheduling, and community engagement." },
  { id: 2, title: "Email Automation", icon: Mail, description: "Intelligent inbox routing, auto-drafting, and hyper-personalized outreach." },
  { id: 3, title: "Personal AI Agents", icon: Bot, description: "Bespoke digital assistants that learn your preferences and manage daily workflows." },
  { id: 4, title: "AI Insights", icon: Lightbulb, description: "Real-time data synthesis extracting actionable business intelligence from raw metrics." },
  { id: 5, title: "Business Agent", icon: Briefcase, description: "Enterprise-wide agents handling procurement, scheduling, and internal operations." },
  { id: 6, title: "Sales Agents", icon: TrendingUp, description: "24/7 autonomous deal-qualification and conversational lead nurturing." },
  { id: 7, title: "Voice Agents", icon: Mic, description: "Ultra-low latency conversational AI for dynamic phone and customer support." },
];

export default function AIAgentsAutomation() {
  return (
    <section id="ai-agents" className="relative w-full py-32 bg-secondary flex flex-col items-center overflow-hidden">
      {/* Background ambient blobs for the frosted glass to blur - Using blue/purple to differentiate from Data Annotation */}
      <div className="absolute top-40 -right-20 w-[500px] h-[500px] bg-blue-500/5 rounded-full blur-[100px] pointer-events-none"></div>
      <div className="absolute bottom-20 -left-20 w-[600px] h-[600px] bg-purple-500/5 rounded-full blur-[120px] pointer-events-none"></div>

      <div className="w-full max-w-7xl relative z-10 px-6 mb-16 text-center">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="font-geist font-semibold text-4xl md:text-6xl tracking-tight text-text-primary mb-6"
        >
          AI Agents & Automation
        </motion.h2>
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="font-inter text-lg md:text-xl text-text-secondary max-w-2xl mx-auto"
        >
          Deploy autonomous digital workers that execute complex workflows, synthesize insights, and scale your operations infinitely.
        </motion.p>
      </div>

      {/* 2x2 Dual-Row Swiper Layout */}
      <div className="w-full max-w-7xl relative z-10 px-4 md:px-12">
        <div className="flex flex-col gap-6 [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)] py-4">
          {/* TOP ROW */}
          <Swiper
            slidesPerView={'auto'}
            spaceBetween={16}
            loop={true}
            speed={1500}
            autoplay={{
              delay: 2000,
              disableOnInteraction: false,
              pauseOnMouseEnter: true,
            }}
            navigation={{
              prevEl: '.swiper-button-prev-custom-ai',
              nextEl: '.swiper-button-next-custom-ai',
            }}
            modules={[Autoplay, Navigation]}
            className="w-full !overflow-visible"
          >
            {[...SERVICES, ...SERVICES].slice(0, 7).map((service, index) => {
              const Icon = service.icon;
              return (
                <SwiperSlide key={`top-${service.id}-${index}`} className="!w-[300px] md:!w-[380px] !h-auto">
                  <div className="group relative flex flex-col p-8 h-full min-h-[340px] rounded-3xl bg-white/50 backdrop-blur-2xl border border-white/60 shadow-[0_8px_32px_rgba(0,0,0,0.04)] hover:shadow-[0_16px_48px_rgba(0,0,0,0.08)] transition-all duration-300 overflow-hidden cursor-pointer select-none">
                    <div className="absolute inset-0 bg-gradient-to-br from-white/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-0"></div>
                    <div className="relative z-10 mb-6 w-14 h-14 rounded-2xl bg-white flex items-center justify-center shadow-sm border border-black/5 text-text-primary group-hover:scale-110 transition-transform duration-300">
                      <Icon className="w-7 h-7" />
                    </div>
                    <h3 className="relative z-10 font-geist font-medium text-xl text-text-primary mb-3 transition-all duration-300 group-hover:font-bold group-hover:text-black">
                      {service.title}
                    </h3>
                    <p className="relative z-10 font-inter text-sm text-text-secondary leading-relaxed">
                      {service.description}
                    </p>
                  </div>
                </SwiperSlide>
              );
            })}
          </Swiper>

          {/* BOTTOM ROW */}
          <Swiper
            slidesPerView={'auto'}
            spaceBetween={16}
            loop={true}
            speed={1500}
            autoplay={{
              delay: 2000,
              disableOnInteraction: false,
              pauseOnMouseEnter: true,
            }}
            navigation={{
              prevEl: '.swiper-button-prev-custom-ai',
              nextEl: '.swiper-button-next-custom-ai',
            }}
            modules={[Autoplay, Navigation]}
            className="w-full !overflow-visible"
          >
            {[...SERVICES, ...SERVICES].slice(7, 14).map((service, index) => {
              const Icon = service.icon;
              return (
                <SwiperSlide key={`bot-${service.id}-${index}`} className="!w-[300px] md:!w-[380px] !h-auto">
                  <div className="group relative flex flex-col p-8 h-full min-h-[340px] rounded-3xl bg-white/50 backdrop-blur-2xl border border-white/60 shadow-[0_8px_32px_rgba(0,0,0,0.04)] hover:shadow-[0_16px_48px_rgba(0,0,0,0.08)] transition-all duration-300 overflow-hidden cursor-pointer select-none">
                    <div className="absolute inset-0 bg-gradient-to-br from-white/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-0"></div>
                    <div className="relative z-10 mb-6 w-14 h-14 rounded-2xl bg-white flex items-center justify-center shadow-sm border border-black/5 text-text-primary group-hover:scale-110 transition-transform duration-300">
                      <Icon className="w-7 h-7" />
                    </div>
                    <h3 className="relative z-10 font-geist font-medium text-xl text-text-primary mb-3 transition-all duration-300 group-hover:font-bold group-hover:text-black">
                      {service.title}
                    </h3>
                    <p className="relative z-10 font-inter text-sm text-text-secondary leading-relaxed">
                      {service.description}
                    </p>
                  </div>
                </SwiperSlide>
              );
            })}
          </Swiper>
        </div>

        {/* Custom Navigation Arrows */}
        <div className="absolute top-1/2 -translate-y-1/2 left-0 md:-left-4 z-20 swiper-button-prev-custom-ai flex items-center justify-center w-12 h-12 rounded-full bg-white/80 backdrop-blur-md shadow-md border border-border cursor-pointer hover:bg-white hover:scale-110 transition-all text-text-primary">
          <ChevronLeft className="w-6 h-6" />
        </div>
        <div className="absolute top-1/2 -translate-y-1/2 right-0 md:-right-4 z-20 swiper-button-next-custom-ai flex items-center justify-center w-12 h-12 rounded-full bg-white/80 backdrop-blur-md shadow-md border border-border cursor-pointer hover:bg-white hover:scale-110 transition-all text-text-primary">
          <ChevronRight className="w-6 h-6" />
        </div>
      </div>
    </section>
  );
}
