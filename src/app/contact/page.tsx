"use client";

import React, { useState } from "react";
import Navigation from "@/components/layout/Navigation";
import Footer from "@/components/layout/Footer";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

export default function ContactPage() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [company, setCompany] = useState("");
  const [service, setService] = useState("");
  const [requirements, setRequirements] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    
    try {
      await fetch("https://script.google.com/macros/s/AKfycbyOmTh8IsaWqT1WY-ZzUGlob6ZsRY5qNkXchxQWOmjlvPzoVgMjgpMz06NPPTU3QH7-Qw/exec", {
        method: "POST",
        body: JSON.stringify({ name, email, phone, company, service, requirements, message }),
      });
      setSuccess(true);
      setName("");
      setEmail("");
      setPhone("");
      setCompany("");
      setService("");
      setRequirements("");
      setMessage("");
    } catch (error) {
      console.error(error);
      alert("Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <main className="relative flex min-h-screen flex-col items-center justify-start w-full overflow-hidden bg-white">
      {/* Fixed Full-Page Vibrant Glow Effects */}
      <div className="fixed inset-0 w-full h-full pointer-events-none z-0 overflow-hidden">
        <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-pink-500/20 rounded-full blur-[120px] -translate-x-1/3 -translate-y-1/3"></div>
        <div className="absolute bottom-0 left-10 w-[400px] h-[400px] bg-emerald-600/20 rounded-full blur-[120px] -translate-x-1/2 translate-y-1/4"></div>
        <div className="absolute top-0 right-0 w-[450px] h-[450px] bg-yellow-300/20 rounded-full blur-[120px] translate-x-1/3 -translate-y-1/4"></div>
        <div className="absolute bottom-0 right-10 w-[550px] h-[550px] bg-sky-400/20 rounded-full blur-[120px] translate-x-1/4 translate-y-1/4"></div>
      </div>
      <Navigation />
      
      <section className="relative w-full pt-48 pb-32 flex flex-col items-center justify-center px-6 z-20">
        


        <div className="w-full max-w-5xl grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          <div>
            <h1 className="font-geist font-bold text-5xl md:text-7xl tracking-tighter text-text-primary mb-6">
              Start Building <br />
              <span className="text-text-secondary/50">Tomorrow.</span>
            </h1>
            <p className="font-inter text-lg text-text-secondary mb-12 max-w-md">
              Whether you need to optimize a global supply chain or deploy custom LLMs on-premise, our engineering team is ready to scope your architecture.
            </p>
            
            <div className="space-y-6">
              <div>
                <p className="font-geist font-semibold text-text-primary">Sales & Contact</p>
                <p className="font-inter text-text-secondary">info@vlynTech.com</p>
              </div>
            </div>
          </div>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="w-full p-8 md:p-12 rounded-[32px] bg-white border border-border shadow-[0_20px_60px_rgba(0,0,0,0.05)] relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 w-64 h-64 bg-accent-green/10 rounded-full blur-3xl -z-10 -translate-y-1/2 translate-x-1/2"></div>
            
            {success ? (
              <div className="flex flex-col items-center justify-center text-center gap-4 py-12">
                <div className="w-16 h-16 bg-accent-green/20 rounded-full flex items-center justify-center text-accent-green mb-2">
                  <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <h3 className="font-geist font-semibold text-2xl text-text-primary">Request Received</h3>
                <p className="font-inter text-text-secondary">We'll be in touch with you shortly.</p>
                <button 
                  onClick={() => setSuccess(false)}
                  className="mt-6 text-sm font-inter text-accent-green hover:underline"
                >
                  Submit another inquiry
                </button>
              </div>
            ) : (
              <form className="flex flex-col gap-6" onSubmit={handleSubmit}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="flex flex-col gap-2">
                    <label className="font-inter text-sm font-medium text-text-primary">Name</label>
                    <input 
                      type="text" 
                      required
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      placeholder="Full Name" 
                      className="w-full px-4 py-3 rounded-xl border border-border bg-secondary/50 focus:bg-white focus:outline-none focus:ring-2 focus:ring-accent-green/50 transition-all font-inter"
                    />
                  </div>
                  <div className="flex flex-col gap-2">
                    <label className="font-inter text-sm font-medium text-text-primary">Work Email</label>
                    <input 
                      type="email" 
                      required
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="name@company.com" 
                      className="w-full px-4 py-3 rounded-xl border border-border bg-secondary/50 focus:bg-white focus:outline-none focus:ring-2 focus:ring-accent-green/50 transition-all font-inter"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="flex flex-col gap-2">
                    <label className="font-inter text-sm font-medium text-text-primary">Phone</label>
                    <input 
                      type="tel" 
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      placeholder="+1 (555) 000-0000" 
                      className="w-full px-4 py-3 rounded-xl border border-border bg-secondary/50 focus:bg-white focus:outline-none focus:ring-2 focus:ring-accent-green/50 transition-all font-inter"
                    />
                  </div>
                  <div className="flex flex-col gap-2">
                    <label className="font-inter text-sm font-medium text-text-primary">Company</label>
                    <input 
                      type="text" 
                      required
                      value={company}
                      onChange={(e) => setCompany(e.target.value)}
                      placeholder="Company Name" 
                      className="w-full px-4 py-3 rounded-xl border border-border bg-secondary/50 focus:bg-white focus:outline-none focus:ring-2 focus:ring-accent-green/50 transition-all font-inter"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="flex flex-col gap-2">
                    <label className="font-inter text-sm font-medium text-text-primary">Service</label>
                    <select 
                      required
                      value={service}
                      onChange={(e) => setService(e.target.value)}
                      className="w-full px-4 py-3 rounded-xl border border-border bg-secondary/50 focus:bg-white focus:outline-none focus:ring-2 focus:ring-accent-green/50 transition-all font-inter appearance-none cursor-pointer text-text-secondary"
                    >
                      <option value="" disabled>Select a service</option>
                      <option value="Data Annotation">Data Annotation</option>
                      <option value="AI Agents & Automation">AI Agents & Automation</option>
                      <option value="SaaS & Custom Software">SaaS & Custom Software</option>
                      <option value="Other">Other</option>
                    </select>
                  </div>
                  <div className="flex flex-col gap-2">
                    <label className="font-inter text-sm font-medium text-text-primary">Requirements</label>
                    <select 
                      required
                      value={requirements}
                      onChange={(e) => setRequirements(e.target.value)}
                      className="w-full px-4 py-3 rounded-xl border border-border bg-secondary/50 focus:bg-white focus:outline-none focus:ring-2 focus:ring-accent-green/50 transition-all font-inter appearance-none cursor-pointer text-text-secondary"
                    >
                      <option value="" disabled>Select requirement</option>
                      <option value="Enterprise Solution">Enterprise Solution</option>
                      <option value="Technical Support">Technical Support</option>
                      <option value="Partnership">Partnership</option>
                      <option value="General Inquiry">General Inquiry</option>
                    </select>
                  </div>
                </div>
                <div className="flex flex-col gap-2">
                  <label className="font-inter text-sm font-medium text-text-primary">How can we help?</label>
                  <textarea 
                    rows={4}
                    required
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    placeholder="Tell us about your infrastructure goals..." 
                    className="w-full px-4 py-3 rounded-xl border border-border bg-secondary/50 focus:bg-white focus:outline-none focus:ring-2 focus:ring-accent-green/50 transition-all font-inter resize-none"
                  />
                </div>
                
                <button 
                  disabled={loading}
                  className="group relative inline-flex items-center justify-center w-full px-6 py-4 mt-4 text-lg font-semibold text-white bg-black rounded-xl overflow-hidden transition-all duration-300 hover:scale-[1.02] active:scale-[0.98] disabled:opacity-70 disabled:cursor-not-allowed disabled:hover:scale-100 disabled:hover:bg-black disabled:hover:text-white hover:bg-accent-green hover:text-black shadow-md"
                >
                  <span className="relative z-10">{loading ? "Submitting..." : "Request Architecture Review"}</span>
                </button>
              </form>
            )}
          </motion.div>
        </div>
      </section>
      
      <Footer />
    </main>
  );
}
