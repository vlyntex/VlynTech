import React from "react";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="w-full bg-white border-t border-border pt-24 pb-12 px-6 flex flex-col items-center z-20 relative">
      <div className="w-full max-w-7xl">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-24">
          <div className="col-span-1 md:col-span-2">
            <Link href="/" className="inline-flex items-center gap-2 group mb-6">
              <img src="/logo.png" alt="VlynTech Logo" className="h-9 w-auto object-contain -mt-1" />
              <span className="font-geist font-black text-3xl tracking-tighter text-text-primary">
                VlynTech
              </span>
            </Link>
            <p className="font-inter text-text-secondary max-w-xs leading-relaxed">
              Architecting intelligence that redefines what’s possible at enterprise scale.
            </p>
          </div>
          
          <div>
            <h4 className="font-geist font-semibold text-text-primary mb-6">Platform</h4>
            <ul className="space-y-4 font-inter text-text-secondary">
              <li><Link href="/technology#ai-agents" className="hover:text-accent-green transition-colors">AI Agents & Automation</Link></li>
              <li><Link href="/technology#data-annotation" className="hover:text-accent-green transition-colors">Data Annotation</Link></li>
              <li><Link href="/technology#saas" className="hover:text-accent-green transition-colors">SaaS & Custom Software</Link></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-geist font-semibold text-text-primary mb-6">Company</h4>
            <ul className="space-y-4 font-inter text-text-secondary">
              <li><Link href="/company" className="hover:text-accent-green transition-colors">About</Link></li>
              <li><Link href="/contact" className="hover:text-accent-green transition-colors">Contact</Link></li>
            </ul>
          </div>
        </div>
        
        <div className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-border gap-4">
          <p className="font-inter text-sm text-text-secondary">
            © {new Date().getFullYear()} VlynTech. All rights reserved.
          </p>
          <div className="flex gap-6 font-inter text-sm text-text-secondary">
            <Link href="/" className="hover:text-text-primary transition-colors">Privacy Policy</Link>
            <Link href="/" className="hover:text-text-primary transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
