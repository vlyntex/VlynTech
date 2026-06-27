"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { 
  FileText, MonitorPlay, Mic, ShieldAlert, Layers, Image as ImageIcon, 
  Car, Stethoscope, FileJson, CheckSquare, Sparkles, BrainCircuit,
  Eye, Square, Hexagon, Box, ScanText, Radar, MapPin, Cloud,
  ChevronLeft, ChevronRight
} from "lucide-react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper/modules";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/navigation";

const SERVICES = [
  { id: 1, title: "LLM Evaluation", icon: BrainCircuit, description: "Rigorous testing and benchmarking for Large Language Models." },
  { id: 2, title: "RLHF", icon: Sparkles, description: "Reinforcement Learning from Human Feedback for AI alignment." },
  { id: 3, title: "Video Annotation", icon: MonitorPlay, description: "Frame-by-frame tracking and classification for video datasets." },
  { id: 4, title: "Audio Annotation", icon: Mic, description: "Precise labeling of speech, intent, and acoustic events." },
  { id: 5, title: "Security X-ray", icon: ShieldAlert, description: "Detailed threat and anomaly detection in security scans." },
  { id: 6, title: "Segmentation", icon: Layers, description: "Pixel-perfect semantic and instance image segmentation." },
  { id: 7, title: "Image Annotation", icon: ImageIcon, description: "Bounding boxes, polygons, and keypoints for computer vision." },
  { id: 8, title: "Autonomous Driving", icon: Car, description: "LiDAR and camera annotation for self-driving models." },
  { id: 9, title: "Transcriptions", icon: FileText, description: "High-accuracy multi-language audio-to-text transcription." },
  { id: 10, title: "Medical & Health", icon: Stethoscope, description: "HIPAA-compliant medical imaging and clinical data labeling." },
  { id: 11, title: "Text Annotation", icon: FileJson, description: "NER, sentiment analysis, and syntax parsing for NLP." },
  { id: 12, title: "NLP Annotation", icon: CheckSquare, description: "Linguistic annotations for natural language processing." },
  { id: 13, title: "Computer Vision Annotations", icon: Eye, description: "Comprehensive visual data labeling for model training." },
  { id: 14, title: "Bounding Box Annotation", icon: Square, description: "Accurate object localization with precise 2D bounding boxes." },
  { id: 15, title: "Polygon Annotation", icon: Hexagon, description: "Complex shape outlines for irregular object detection." },
  { id: 16, title: "2D or 3D Annotation", icon: Box, description: "Spatial labeling spanning flat images to volumetric spaces." },
  { id: 17, title: "OCR or Document Annotation", icon: ScanText, description: "Extracting and structuring text from documents and images." },
  { id: 18, title: "LiDAR Annotation", icon: Radar, description: "3D sensor data labeling for spatial awareness and robotics." },
  { id: 19, title: "Key Point Annotation", icon: MapPin, description: "Skeletal tracking and facial landmark identification." },
  { id: 20, title: "Point Cloud Annotation", icon: Cloud, description: "Semantic segmentation for 3D point cloud environments." },
];

export default function DataAnnotationServices() {
  return (
    <section id="data-annotation" className="relative w-full py-32 bg-secondary flex flex-col items-center overflow-hidden">
      {/* Background ambient blobs for the frosted glass to blur */}
      <div className="absolute top-40 -left-20 w-[500px] h-[500px] bg-accent-green/10 rounded-full blur-[100px] pointer-events-none"></div>
      <div className="absolute bottom-20 -right-20 w-[600px] h-[600px] bg-accent-lime/10 rounded-full blur-[120px] pointer-events-none"></div>

      <div className="w-full max-w-7xl relative z-10 px-6 mb-16 text-center">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="font-geist font-semibold text-4xl md:text-6xl tracking-tight text-text-primary mb-6"
        >
          Data Annotation Services
        </motion.h2>
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="font-inter text-lg md:text-xl text-text-secondary max-w-2xl mx-auto"
        >
          Proprietary human-in-the-loop workflows across every modality to train the world's most advanced AI models.
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
              prevEl: '.swiper-button-prev-custom',
              nextEl: '.swiper-button-next-custom',
            }}
            modules={[Autoplay, Navigation]}
            className="w-full !overflow-visible"
          >
            {SERVICES.slice(0, 10).map((service) => {
              const Icon = service.icon;
              return (
                <SwiperSlide key={service.id} className="!w-[300px] md:!w-[380px] !h-auto">
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
              prevEl: '.swiper-button-prev-custom',
              nextEl: '.swiper-button-next-custom',
            }}
            modules={[Autoplay, Navigation]}
            className="w-full !overflow-visible"
          >
            {SERVICES.slice(10, 20).map((service) => {
              const Icon = service.icon;
              return (
                <SwiperSlide key={service.id} className="!w-[300px] md:!w-[380px] !h-auto">
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

        {/* Shared Custom Navigation Arrows - Placed outside the flex column to vertically center alongside both rows */}
        <div className="absolute top-1/2 -translate-y-1/2 left-0 md:-left-4 z-20 swiper-button-prev-custom flex items-center justify-center w-12 h-12 rounded-full bg-white/80 backdrop-blur-md shadow-md border border-border cursor-pointer hover:bg-white hover:scale-110 transition-all text-text-primary">
          <ChevronLeft className="w-6 h-6" />
        </div>
        <div className="absolute top-1/2 -translate-y-1/2 right-0 md:-right-4 z-20 swiper-button-next-custom flex items-center justify-center w-12 h-12 rounded-full bg-white/80 backdrop-blur-md shadow-md border border-border cursor-pointer hover:bg-white hover:scale-110 transition-all text-text-primary">
          <ChevronRight className="w-6 h-6" />
        </div>
      </div>
    </section>
  );
}
