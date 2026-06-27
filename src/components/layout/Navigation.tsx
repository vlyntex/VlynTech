"use client";

import React, { useState } from "react";
import { motion, useScroll, useMotionValueEvent } from "framer-motion";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navigation() {
  const { scrollY } = useScroll();
  const pathname = usePathname();
  const [hidden, setHidden] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useMotionValueEvent(scrollY, "change", (latest) => {
    const previous = scrollY.getPrevious() ?? 0;
    
    if (latest > 50) {
      setScrolled(true);
    } else {
      setScrolled(false);
    }

    if (latest > 150 && latest > previous) {
      setHidden(true);
    } else {
      setHidden(false);
    }
  });

  const links = [
    { name: "Home", href: "/" },
    { name: "Solutions", href: "/solutions" },
    { name: "Technology", href: "/technology" },
    { name: "Company", href: "/company" },
  ];

  return (
    <motion.header
      variants={{
        visible: { y: 0, opacity: 1 },
        hidden: { y: "-100%", opacity: 0 },
      }}
      animate={hidden ? "hidden" : "visible"}
      transition={{ duration: 0.35, ease: "easeInOut" }}
      className={`fixed top-0 left-0 right-0 z-[100] flex justify-center w-full transition-all duration-300 border-b ${
        scrolled 
          ? "bg-white/70 backdrop-blur-2xl border-black/10 shadow-sm py-1" 
          : "bg-white/40 backdrop-blur-xl border-transparent py-2"
      }`}
    >
      <div className="flex items-center justify-between w-full px-8 md:px-12 transition-all duration-500">
        <Link href="/" className="group relative z-10 flex items-center gap-2">
          <img src="/logo.png" alt="VlynTech Logo" className="h-9 w-auto object-contain -mt-1" />
          <div className="flex items-center gap-2">
            <span className="font-geist font-black text-3xl tracking-tighter text-black">
              VlynTech
            </span>
            <span className="text-black/30 text-3xl font-light leading-none -mt-1">|</span>
            <span className="font-inter text-xs font-bold text-black/60 hidden lg:block tracking-[0.15em] uppercase mt-0.5">
              Annotate &bull; Automate &bull; Innovate
            </span>
          </div>
        </Link>

        <div className="flex items-center gap-16">
          <nav className="hidden md:flex items-center gap-4">
            {links.map((item) => {
              const isActive = pathname === item.href;
              return (
                <Link
                  key={item.name}
                  href={item.href}
                  className={`relative px-5 py-2 text-xl font-medium transition-all duration-300 rounded-full ${
                    isActive 
                      ? "bg-black text-white shadow-md" 
                      : "text-black/80 hover:bg-black/10 hover:text-black"
                  }`}
                >
                  {item.name}
                </Link>
              );
            })}
          </nav>

          <Link
            href="/contact"
            className="group relative inline-flex items-center justify-center px-8 py-3 text-lg font-semibold text-white bg-black rounded-full overflow-hidden transition-all duration-300 hover:scale-105 active:scale-95 hover:bg-accent-green hover:text-black shadow-md"
          >
            <span className="relative z-10">Book a Demo</span>
          </Link>
        </div>
      </div>
    </motion.header>
  );
}
