"use client";

import React from "react";
import Image from "next/image";
import { FaInstagram, FaWhatsapp, FaTwitter, FaFacebook } from "react-icons/fa";
import { SiGmail } from "react-icons/si";
import { motion } from "framer-motion";

export default function CaseStudies() {
  return (
    <section className="relative w-full py-32 bg-secondary flex flex-col items-center px-6 z-20 overflow-hidden">
      
      {/* Title */}
      <div className="w-full max-w-7xl mb-24 text-center">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="font-geist font-semibold text-4xl md:text-6xl tracking-tight text-text-primary mb-6"
        >
          Proven Impact.
        </motion.h2>
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="font-inter text-lg md:text-xl text-text-secondary max-w-2xl mx-auto"
        >
          De-risked deployments delivering unprecedented ROI across all AI verticals.
        </motion.p>
      </div>

      <div className="w-full max-w-7xl flex flex-col gap-40">
        
        {/* SECTION 1: DATA ANNOTATION */}
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="flex flex-col items-center"
        >
          <div className="mb-12 text-center">
            <h3 className="font-geist font-semibold text-3xl md:text-4xl text-text-primary mb-4">
              Data Annotation Showcase
            </h3>
            <p className="font-inter text-text-secondary">Precision labeling that forms the bedrock of reliable AI.</p>
          </div>
          
          {/* User's 4 uploaded images */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-10 w-full">
             {/* Image 1: LLM Evaluation */}
             <div className="flex flex-col gap-4">
               <div className="group relative rounded-3xl overflow-hidden border border-border bg-white shadow-sm h-[300px] md:h-[400px]">
                 <Image src="/images/data-1.png" alt="LLM Evaluation" fill className="object-contain p-4 group-hover:scale-105 transition-transform duration-700" />
                 <div className="absolute inset-0 bg-black/5 group-hover:bg-transparent transition-colors duration-500"></div>
               </div>
               <p className="font-geist font-semibold text-xl text-text-primary text-center">LLM Evaluation</p>
             </div>
             
             {/* Image 2: Security Bounding Box */}
             <div className="flex flex-col gap-4">
               <div className="group relative rounded-3xl overflow-hidden border border-border bg-white shadow-sm h-[300px] md:h-[400px]">
                 <Image src="/images/data-2.png" alt="Security Bounding Box" fill className="object-contain p-4 group-hover:scale-105 transition-transform duration-700" />
                 <div className="absolute inset-0 bg-black/5 group-hover:bg-transparent transition-colors duration-500"></div>
               </div>
               <p className="font-geist font-semibold text-xl text-text-primary text-center">Security Bounding Box</p>
             </div>

             {/* Image 3: Semantic Segmentation */}
             <div className="flex flex-col gap-4">
               <div className="group relative rounded-3xl overflow-hidden border border-border bg-white shadow-sm h-[300px] md:h-[400px]">
                 <Image src="/images/data-3.png" alt="Semantic Segmentation" fill className="object-contain p-4 group-hover:scale-105 transition-transform duration-700" />
                 <div className="absolute inset-0 bg-black/5 group-hover:bg-transparent transition-colors duration-500"></div>
               </div>
               <p className="font-geist font-semibold text-xl text-text-primary text-center">Semantic Segmentation</p>
             </div>

             {/* Image 4: X-Ray Images */}
             <div className="flex flex-col gap-4">
               <div className="group relative rounded-3xl overflow-hidden border border-border bg-white shadow-sm h-[300px] md:h-[400px]">
                 <Image src="/images/data-4.png" alt="X-Ray Images" fill className="object-contain p-4 group-hover:scale-105 transition-transform duration-700" />
                 <div className="absolute inset-0 bg-black/5 group-hover:bg-transparent transition-colors duration-500"></div>
               </div>
               <p className="font-geist font-semibold text-xl text-text-primary text-center">X-Ray Images</p>
             </div>
          </div>
        </motion.div>

        {/* SECTION 2: AI AGENTS */}
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="flex flex-col items-center"
        >
          <div className="mb-12 text-center">
            <h3 className="font-geist font-semibold text-3xl md:text-4xl text-text-primary mb-4">
              AI Agents & Automation
            </h3>
            <p className="font-inter text-text-secondary">Deploy tireless digital workers across all your preferred platforms.</p>
          </div>

          <div className="flex flex-col md:flex-row gap-8 w-full justify-center">
             {/* Social Media Automation Card */}
             <div className="flex-1 bg-white/50 backdrop-blur-xl border border-white/60 rounded-[32px] p-12 flex flex-col justify-center items-center text-center shadow-[0_8px_32px_rgba(0,0,0,0.04)] hover:shadow-[0_16px_48px_rgba(0,0,0,0.08)] transition-all duration-300 group">
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-purple-500 to-pink-500 mb-6 text-white flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
                  <FaInstagram className="w-8 h-8" />
                </div>
                <h4 className="font-geist font-semibold text-2xl text-text-primary mb-2">Social Media Automation</h4>
                <p className="font-inter text-text-secondary mb-8">Autonomous content scheduling, generation, and cross-platform engagement.</p>
                
                <div className="flex gap-4 items-center">
                   <div className="w-14 h-14 rounded-full bg-[#E1306C]/10 text-[#E1306C] flex items-center justify-center text-2xl hover:scale-110 transition-transform cursor-pointer shadow-sm"><FaInstagram /></div>
                   <div className="w-14 h-14 rounded-full bg-[#1DA1F2]/10 text-[#1DA1F2] flex items-center justify-center text-2xl hover:scale-110 transition-transform cursor-pointer shadow-sm"><FaTwitter /></div>
                   <div className="w-14 h-14 rounded-full bg-[#1877F2]/10 text-[#1877F2] flex items-center justify-center text-2xl hover:scale-110 transition-transform cursor-pointer shadow-sm"><FaFacebook /></div>
                </div>
             </div>

             {/* Email Automation Card */}
             <div className="flex-1 bg-white/50 backdrop-blur-xl border border-white/60 rounded-[32px] p-12 flex flex-col justify-center items-center text-center shadow-[0_8px_32px_rgba(0,0,0,0.04)] hover:shadow-[0_16px_48px_rgba(0,0,0,0.08)] transition-all duration-300 group">
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-green-400 to-emerald-600 mb-6 text-white flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
                  <FaWhatsapp className="w-8 h-8" />
                </div>
                <h4 className="font-geist font-semibold text-2xl text-text-primary mb-2">Email & Messaging Agents</h4>
                <p className="font-inter text-text-secondary mb-8">Intelligent inbox triage, automated drafting, and seamless instant messaging.</p>
                
                <div className="flex gap-4 items-center">
                   <div className="w-14 h-14 rounded-full bg-[#EA4335]/10 text-[#EA4335] flex items-center justify-center text-2xl hover:scale-110 transition-transform cursor-pointer shadow-sm"><SiGmail /></div>
                   <div className="w-14 h-14 rounded-full bg-[#25D366]/10 text-[#25D366] flex items-center justify-center text-2xl hover:scale-110 transition-transform cursor-pointer shadow-sm"><FaWhatsapp /></div>
                </div>
             </div>
          </div>
        </motion.div>

        {/* SECTION 3: SaaS */}
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="flex flex-col items-center"
        >
          <div className="mb-12 text-center">
            <h3 className="font-geist font-semibold text-3xl md:text-4xl text-text-primary mb-4">
              SaaS & Custom Software
            </h3>
            <p className="font-inter text-text-secondary">Bespoke dashboards and analytics platforms for Founders and CEOs.</p>
          </div>

          <div className="w-full relative rounded-[40px] overflow-hidden border border-white/20 bg-[#0A0A0A] shadow-2xl h-[400px] md:h-[700px] flex items-center justify-center group">
            <Image 
               src="/images/ceo-dashboard.png"
               alt="CEO Analytics Dashboard"
               fill
               className="object-cover opacity-90 group-hover:scale-105 transition-transform duration-1000 ease-out"
            />
            {/* Dark gradient overlay to make text pop */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent"></div>
            
            <div className="absolute bottom-12 left-12 text-white z-10 max-w-xl">
               <h4 className="font-geist font-bold text-4xl mb-3 leading-tight tracking-tight text-white drop-shadow-md">Founder & CEO <br/><span className="text-accent-green">Command Center</span></h4>
               <p className="font-inter text-white/80 text-lg leading-relaxed drop-shadow-sm">Real-time metrics, automated reporting, and AI-driven insights integrated perfectly into a premium dark-mode interface.</p>
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
