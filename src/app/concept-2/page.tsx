"use client";

import HeroCTAs from "@/components/HeroCTAs";
import HeroTabsSketch from "@/components/HeroTabsSketch";
import { AIActivityBar } from "@/components/AIActivityBar";
import FeatureScrollStack from "@/components/FeatureScrollStack";
import type { FeatureCardData } from "@/components/FeatureScrollStack";
import Image from "next/image";
import { useState, useEffect } from "react";

const FEATURE_CARDS: FeatureCardData[] = [
  {
    title: "Effortless Data Tracking",
    subtext: "AbleSpace uses AI to streamline IEP goal tracking — Collect Data with a single click, Organize it automatically, and ensure nothing slips through the cracks.",
    screenshotSrc: "/assets/screenshots/data-collection.png",
    bullets: [
      { iconSrc: "/concept-2/icons/target-02.svg", title: "Collect Data with 9+ Data Types", desc: "Track IEP goals using Task Analysis, Prompts, Rating scales, and more." },
      { iconSrc: "/concept-2/icons/tags.svg", title: "Phases, Labels, and History", desc: "Organise Goals with Visual Phases, Custom Tags, and Goal History at your fingertips." },
    ],
  },
  {
    title: "Service Time Tracking",
    subtext: "Log and track service minutes for every student — stay compliant with IEP mandates and never miss a required session.",
    screenshotSrc: "/assets/screenshots/service-time-accomodations.png",
    bullets: [
      { iconSrc: "/concept-2/icons/target-02.svg", title: "Session Logging in One Click", desc: "Record service time instantly during or after sessions with zero friction." },
      { iconSrc: "/concept-2/icons/tags.svg", title: "Compliance Alerts", desc: "Get notified when students are at risk of falling behind on mandated minutes." },
    ],
  },
  {
    title: "Accommodations",
    subtext: "Track and apply student accommodations consistently across all sessions — visual aids, extra time, modified materials, and more.",
    screenshotSrc: "/concept-2/features/accommodations/screenshot.png",
    bullets: [
      { iconSrc: "/concept-2/icons/target-02.svg", title: "Accommodation Plans", desc: "Create and assign accommodation plans to students with a few clicks." },
      { iconSrc: "/concept-2/icons/tags.svg", title: "Linked to IEP Goals", desc: "Accommodations are tied directly to goals so nothing gets missed during sessions." },
    ],
  },
  {
    title: "Reports & Graphs",
    subtext: "Generate detailed progress reports and visual graphs in seconds — shareable with parents, administrators, and IEP teams.",
    screenshotSrc: "/assets/screenshots/compliance.png",
    bullets: [
      { iconSrc: "/concept-2/icons/target-02.svg", title: "Progress & Session Reports", desc: "Auto-generated reports for goals, sessions, attendance, and more." },
      { iconSrc: "/concept-2/icons/tags.svg", title: "Visual Goal Graphs", desc: "See student progress over time with clear, easy-to-read charts." },
    ],
  },
  {
    title: "Scheduling & Billing",
    subtext: "Manage student schedules and auto-generate Medicaid billing notes — reduce admin overhead and get paid faster.",
    screenshotSrc: "/concept-2/features/billing/screenshot.png",
    bullets: [
      { iconSrc: "/concept-2/icons/target-02.svg", title: "Smart Scheduling", desc: "Schedule students individually or in groups with conflict detection." },
      { iconSrc: "/concept-2/icons/tags.svg", title: "Medicaid Billing Notes", desc: "Auto-generate compliant billing notes from session data with one click." },
    ],
  },
];

const PROFESSIONS = [
  "Sped-Ed Professionals",
  "Occupational Therapists",
  "Speech Therapists",
  "Behavior Analysts",
  "Special Ed Teachers",
];

const TAB_IMAGES = [
  "/assets/screenshots/data-collection.png",
  "/assets/screenshots/service-time-accomodations.png",
  "/assets/screenshots/compliance.png",
  "/assets/screenshots/ablespace-ai.png",
  "/assets/screenshots/compliance.png",
];

export default function Home() {
  const [activeTab, setActiveTab] = useState(0);

  useEffect(() => {
    document.body.style.backgroundColor = '#ffffff';
    return () => { document.body.style.backgroundColor = ''; };
  }, []);

  return (
    <main className="flex-1">
      <section className="w-full">
      <div className="max-w-[1200px] mx-auto px-6 pt-24 pb-20 flex flex-col items-center text-center">

        <div className="mt-6 mb-[2px] w-full max-w-[272px] mx-auto">
          <AIActivityBar />
        </div>

        <h1
          className="w-full text-center text-[52px] font-extrabold leading-[1.15] tracking-tight text-[#2B2E33]"
          style={{ fontFamily: "var(--font-montserrat)" }}
        >
          AI-Powered IEP Tracking
          <br />
          for Sped-Ed Professionals
        </h1>

        <p className="mt-4 max-w-xl text-lg leading-relaxed text-[#5D636F]">
          Simplify IEP data collection, accurately track student progress over time, and generate detailed reports—all within Ablespace.
        </p>

        <HeroCTAs />

        <HeroTabsSketch onTabChange={setActiveTab} />

        <div className="mt-8 w-full relative">
          {/* Bottom fade overlay + trust content */}
          <div className="absolute bottom-0 left-0 right-0 h-[400px] pointer-events-none z-10" style={{ background: "linear-gradient(to bottom, transparent, #ffffff 50%, #ffffff)" }} />
          <div className="absolute bottom-0 left-0 right-0 z-20 flex flex-col items-center gap-6 pb-8">
            <p className="text-sm tracking-wide text-[#8C857F]">
              Trusted by <span className="font-bold">20,000+</span> Special Education Professionals
            </p>
            <div className="flex items-center justify-center flex-wrap gap-6">
              {[2,3,4,5,6,7,8,9].map(n => (
                <Image
                  key={n}
                  src={`/concept-2/logos/district-logo-white ${n}.png`}
                  alt={`District logo ${n}`}
                  width={120}
                  height={40}
                  className="h-12 w-auto object-contain opacity-60"
                />
              ))}
            </div>
          </div>
          <div className="relative w-full max-w-[1000px] mx-auto rounded-[var(--radius-xl)] border border-[#E5DDD5] p-3">
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
                  className="w-full h-auto rounded-[var(--radius-lg)]"
                />
              </div>
            ))}
          </div>
        </div>

      </div>
      </section>

      {/* Feature Cards — scroll-driven stack */}
      <FeatureScrollStack cards={FEATURE_CARDS} />

    </main>
  );
}
