"use client";

import HeroCTAs from "@/components/HeroCTAs";
import HeroTabs from "@/components/HeroTabs";
import Image from "next/image";
import { useState } from "react";

const TAB_IMAGES = [
  "/assets/screenshots/data-collection.png",
  "/assets/screenshots/service-time-accomodations.png",
  "/assets/screenshots/compliance.png",
  "/assets/screenshots/ablespace-ai.png",
];

export default function Home() {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <main className="flex-1">
      <section className="w-full">
      <div className="max-w-[1200px] mx-auto px-6 pt-24 pb-20 flex flex-col items-center text-center">

        <h1
          className="max-w-3xl text-[52px] font-bold leading-[1.15] tracking-tight text-[#2B3033]"
          style={{ fontFamily: "var(--font-heading)" }}
        >
          AI-Powered IEP Tracking
          <br />
          for Sped-Ed Professionals
        </h1>

        <p className="mt-4 max-w-xl text-lg leading-relaxed text-[#5D696F]">
          Simplify IEP data collection, accurately track student progress over time, and generate detailed reports—all within Ablespace.
        </p>

        <HeroCTAs />

        <div className="mt-8 flex items-center gap-4">
          <Image src="/assets/icons/security/Navbar/FERPA Compliant 1.png" alt="FERPA Compliant" width={90} height={36} className="h-9 w-auto" />
          <Image src="/assets/icons/security/Navbar/HIPAA 1.png" alt="HIPAA" width={90} height={36} className="h-9 w-auto" />
          <Image src="/assets/icons/security/Navbar/ISO 27001 Certified 1.png" alt="ISO 27001 Certified" width={90} height={36} className="h-9 w-auto" />
        </div>

        <HeroTabs onTabChange={setActiveTab} />

        <div className="mt-8 w-full relative">
          <div className="relative w-full max-w-[1000px] mx-auto">
            {TAB_IMAGES.map((src, index) => (
              <div
                key={src}
                className={`transition-opacity duration-300 ${
                  activeTab === index ? "opacity-100 relative" : "opacity-0 absolute top-0 left-0 w-full pointer-events-none"
                }`}
              >
                <Image
                  src={src}
                  alt={`Tab ${index + 1} Interface`}
                  width={1200}
                  height={800}
                  className="w-full h-auto rounded-[var(--radius-xl)] shadow-lg"
                />
              </div>
            ))}
          </div>
        </div>

      </div>
      </section>
    </main>
  );
}
