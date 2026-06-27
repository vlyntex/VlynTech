"use server";

import { headers } from "next/headers";

// Basic in-memory rate limiting (per cold start on Vercel)
const ipRequests = new Map<string, { count: number; timestamp: number }>();
const RATE_LIMIT_WINDOW = 60 * 1000; // 1 minute window
const MAX_REQUESTS_PER_WINDOW = 3;

export async function submitContactForm(prevState: any, formData: FormData) {
  // 1. Bot Protection: Check Honeypot field
  const honeypot = formData.get("aether_website_url");
  if (honeypot) {
    // Silently return success to fool bots
    return { success: true, message: "Request Received" };
  }

  // 2. Rate Limiting
  const headersList = await headers();
  const ip = headersList.get("x-forwarded-for") || "unknown_ip";
  const now = Date.now();
  const requestData = ipRequests.get(ip) || { count: 0, timestamp: now };

  if (now - requestData.timestamp > RATE_LIMIT_WINDOW) {
    requestData.count = 1;
    requestData.timestamp = now;
  } else {
    requestData.count++;
  }

  ipRequests.set(ip, requestData);

  if (requestData.count > MAX_REQUESTS_PER_WINDOW) {
    return { success: false, error: "Too many requests. Please try again later." };
  }

  // 3. Extract Form Fields
  const payload = {
    name: formData.get("name"),
    email: formData.get("email"),
    phone: formData.get("phone") || "N/A",
    company: formData.get("company"),
    service: formData.get("service"),
    requirements: formData.get("requirements"),
    message: formData.get("message"),
  };

  // 4. Secure Backend Submit (URL is hidden from client)
  try {
    const GOOGLE_SCRIPT_URL = "https://script.google.com/macros/s/AKfycbyOmTh8IsaWqT1WY-ZzUGlob6ZsRY5qNkXchxQWOmjlvPzoVgMjgpMz06NPPTU3QH7-Qw/exec";
    
    const response = await fetch(GOOGLE_SCRIPT_URL, {
      method: "POST",
      body: JSON.stringify(payload),
      headers: {
        "Content-Type": "text/plain;charset=utf-8",
      },
    });

    if (!response.ok) {
      throw new Error("Failed to submit to Google Script");
    }

    return { success: true, message: "Request Received" };
  } catch (error) {
    console.error("Submission error:", error);
    return { success: false, error: "Failed to submit form. Please try again." };
  }
}
