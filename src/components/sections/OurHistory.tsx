import React from "react";

export default function OurHistory() {
  return (
    <section className="relative w-full py-24 px-6 md:px-12 lg:px-24 bg-transparent overflow-hidden">
      <div className="max-w-5xl mx-auto flex flex-col items-center text-center">
        
        {/* Decorative subtle background blur */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-accent-blue/5 rounded-full blur-[100px] pointer-events-none z-0"></div>

        <div className="relative z-10 w-full">
          <h2 className="font-geist font-bold text-4xl md:text-5xl text-text-primary tracking-tight mb-8">
            Our Journey
          </h2>
          
          <div className="flex flex-col items-center gap-6">
            <div className="inline-flex items-center justify-center px-4 py-1.5 rounded-full bg-gray-100 border border-border mb-4">
              <span className="w-2 h-2 rounded-full bg-accent-green mr-2 animate-pulse"></span>
              <span className="font-geist font-semibold text-sm text-text-secondary tracking-wide uppercase">Founded in 2026</span>
            </div>

            <p className="font-inter text-lg md:text-2xl text-text-secondary max-w-3xl leading-relaxed">
              Vlyntech is a dynamic, rapidly growing startup currently building our industry profile. Driven by a bold vision for the future of artificial intelligence, we are dedicated to engineering successful, scalable solutions that will shape the technological landscape for years to come.
            </p>

            <div className="mt-12 w-full max-w-2xl border-t border-border pt-8 flex flex-col md:flex-row items-center justify-between gap-8 text-left">
              <div className="flex-1">
                <h4 className="font-geist font-bold text-xl text-text-primary mb-2">Our Mission</h4>
                <p className="font-inter text-text-secondary">To push the boundaries of enterprise AI, delivering premium agents, annotations, and SaaS.</p>
              </div>
              <div className="hidden md:block w-px h-16 bg-border"></div>
              <div className="flex-1">
                <h4 className="font-geist font-bold text-xl text-text-primary mb-2">The Future</h4>
                <p className="font-inter text-text-secondary">We are building the foundation today for the intelligent, automated enterprises of tomorrow.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
