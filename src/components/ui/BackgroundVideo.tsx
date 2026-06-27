"use client";

import React from "react";

interface BackgroundVideoProps {
  src: string;
  poster?: string;
  overlayOpacity?: number;
}

export default function BackgroundVideo({ 
  src, 
  poster,
  overlayOpacity = 0.4 
}: BackgroundVideoProps) {
  return (
    <div className="absolute inset-0 w-full h-full z-0 overflow-hidden">
      <video
        autoPlay
        loop
        muted
        playsInline
        poster={poster}
        className="absolute top-1/2 left-1/2 min-w-full min-h-full w-auto h-auto object-cover -translate-x-1/2 -translate-y-1/2"
      >
        <source src={src} type="video/mp4" />
        {/* Fallback webm if provided, but mostly mp4 is standard now */}
      </video>
      
      {/* Premium overlay to ensure text readability and blend with the theme */}
      <div 
        className="absolute inset-0 bg-white"
        style={{ opacity: overlayOpacity }}
      ></div>
      
      {/* Soft gradient from bottom to blend into the next section */}
      <div className="absolute inset-0 bg-gradient-to-t from-white to-transparent opacity-50"></div>
    </div>
  );
}
