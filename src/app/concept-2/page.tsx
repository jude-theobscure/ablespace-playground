"use client";

import HeroCTAs from "@/components/HeroCTAs";
import HeroTabsSketch from "@/components/HeroTabsSketch";
import { AIActivityBar } from "@/components/AIActivityBar";
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

      {/* Feature Cards */}
      <section className="w-full py-20 flex flex-col gap-6">
        <div className="max-w-[1200px] mx-auto px-6">
          <div
            className="rounded-2xl pl-10 pt-10 pb-10 pr-0 overflow-hidden"
            style={{
              background: "#FFFFFF",
              border: "1px solid #ECEDED",
              boxShadow: "0px 8px 16px 0px rgba(173,173,166,0.04)",
              height: 560,
            }}
          >
            <div className="flex flex-col md:flex-row gap-12 items-stretch h-full">

              {/* Left — text content */}
              <div className="flex-1 flex flex-col justify-between">

                {/* Group 1: Heading + subtext + CTAs */}
                <div>
                  <h2
                    className="text-[32px] font-bold leading-[1.2] tracking-tight text-[#2B2E33] mb-4"
                    style={{ fontFamily: "var(--font-montserrat)" }}
                  >
                    Effortless Data Tracking
                  </h2>

                  <p className="text-base leading-relaxed text-[#5D636F] max-w-md">
                    AbleSpace uses AI to streamline IEP goal tracking — Collect Data with a single click, Organize it automatically, and ensure nothing slips through the cracks.
                  </p>

                  <div className="-mt-4">
                    <HeroCTAs />
                  </div>
                </div>

                <div className="h-[2px] opacity-35" style={{ background: "linear-gradient(to right, #E2E2D9, transparent)" }} />

                {/* Group 2: Bullet features */}
                <div className="flex flex-col gap-7 max-w-md">
                  {[
                    {
                      icon: <Image src="/concept-2/icons/target-02.svg" alt="" width={32} height={32} />,
                      title: "Collect Data with 9+ Data Types",
                      desc: "Track IEP goals using Task Analysis, Prompts, Rating scales, and more.",
                    },
                    {
                      icon: <Image src="/concept-2/icons/tags.svg" alt="" width={32} height={32} />,
                      title: "Phases, Labels, and History",
                      desc: "Organise Goals with Visual Phases, Custom Tags, and Goal History at your fingertips.",
                    },
                  ].map(({ icon, title, desc }) => (
                    <div key={title} className="flex items-center gap-4">
                      <div className="flex items-center justify-center shrink-0">
                        {icon}
                      </div>
                      <div>
                        <p className="text-[15px] font-bold text-[#5D636F] mb-1">{title}</p>
                        <p className="text-[15px] text-[#5D636F] leading-relaxed">{desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Right — screenshot */}
              <div className="flex-1 rounded-none overflow-hidden">
                <Image
                  src="/assets/screenshots/data-collection.png"
                  alt="IEP Goal Tracking screenshot"
                  width={1200}
                  height={800}
                  className="w-full h-full object-cover object-left-top"
                />
              </div>

            </div>
          </div>
        </div>

        {/* Service Time */}
        <div className="max-w-[1200px] mx-auto px-6 w-full">
          <div
            className="rounded-2xl pl-10 pt-10 pb-10 pr-0 overflow-hidden"
            style={{ background: "#FFFFFF", border: "1px solid #ECEDED", boxShadow: "0px 8px 16px 0px rgba(173,173,166,0.04)", height: 560 }}
          >
            <div className="flex flex-col md:flex-row gap-12 items-stretch h-full">
              <div className="flex-1 flex flex-col justify-between">
                <div>
                  <h2 className="text-[32px] font-bold leading-[1.2] tracking-tight text-[#2B2E33] mb-4" style={{ fontFamily: "var(--font-montserrat)" }}>
                    Service Time Tracking
                  </h2>
                  <p className="text-base leading-relaxed text-[#5D636F] max-w-md">
                    Log and track service minutes for every student — stay compliant with IEP mandates and never miss a required session.
                  </p>
                  <div className="-mt-4"><HeroCTAs /></div>
                </div>
                <div className="h-[2px] opacity-35" style={{ background: "linear-gradient(to right, #E2E2D9, transparent)" }} />
                <div className="flex flex-col gap-7 max-w-md">
                  {[
                    { icon: <Image src="/concept-2/icons/target-02.svg" alt="" width={32} height={32} />, title: "Session Logging in One Click", desc: "Record service time instantly during or after sessions with zero friction." },
                    { icon: <Image src="/concept-2/icons/tags.svg" alt="" width={32} height={32} />, title: "Compliance Alerts", desc: "Get notified when students are at risk of falling behind on mandated minutes." },
                  ].map(({ icon, title, desc }) => (
                    <div key={title} className="flex items-center gap-4">
                      <div className="flex items-center justify-center shrink-0">{icon}</div>
                      <div>
                        <p className="text-[15px] font-bold text-[#5D636F] mb-1">{title}</p>
                        <p className="text-[15px] text-[#5D636F] leading-relaxed">{desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              <div className="flex-1 rounded-none overflow-hidden">
                <Image src="/assets/screenshots/service-time-accomodations.png" alt="Service Time screenshot" width={1200} height={800} className="w-full h-full object-cover object-left-top" />
              </div>
            </div>
          </div>
        </div>

        {/* Accommodations */}
        <div className="max-w-[1200px] mx-auto px-6 w-full">
          <div
            className="rounded-2xl pl-10 pt-10 pb-10 pr-0 overflow-hidden"
            style={{ background: "#FFFFFF", border: "1px solid #ECEDED", boxShadow: "0px 8px 16px 0px rgba(173,173,166,0.04)", height: 560 }}
          >
            <div className="flex flex-col md:flex-row gap-12 items-stretch h-full">
              <div className="flex-1 flex flex-col justify-between">
                <div>
                  <h2 className="text-[32px] font-bold leading-[1.2] tracking-tight text-[#2B2E33] mb-4" style={{ fontFamily: "var(--font-montserrat)" }}>
                    Accommodations
                  </h2>
                  <p className="text-base leading-relaxed text-[#5D636F] max-w-md">
                    Track and apply student accommodations consistently across all sessions — visual aids, extra time, modified materials, and more.
                  </p>
                  <div className="-mt-4"><HeroCTAs /></div>
                </div>
                <div className="h-[2px] opacity-35" style={{ background: "linear-gradient(to right, #E2E2D9, transparent)" }} />
                <div className="flex flex-col gap-7 max-w-md">
                  {[
                    { icon: <Image src="/concept-2/icons/target-02.svg" alt="" width={32} height={32} />, title: "Accommodation Plans", desc: "Create and assign accommodation plans to students with a few clicks." },
                    { icon: <Image src="/concept-2/icons/tags.svg" alt="" width={32} height={32} />, title: "Linked to IEP Goals", desc: "Accommodations are tied directly to goals so nothing gets missed during sessions." },
                  ].map(({ icon, title, desc }) => (
                    <div key={title} className="flex items-center gap-4">
                      <div className="flex items-center justify-center shrink-0">{icon}</div>
                      <div>
                        <p className="text-[15px] font-bold text-[#5D636F] mb-1">{title}</p>
                        <p className="text-[15px] text-[#5D636F] leading-relaxed">{desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              <div className="flex-1 rounded-none overflow-hidden">
                <Image src="/concept-2/features/accommodations/screenshot.png" alt="Accommodations screenshot" width={1200} height={800} className="w-full h-full object-cover object-left-top" />
              </div>
            </div>
          </div>
        </div>

        {/* Reports and Graphs */}
        <div className="max-w-[1200px] mx-auto px-6 w-full">
          <div
            className="rounded-2xl pl-10 pt-10 pb-10 pr-0 overflow-hidden"
            style={{ background: "#FFFFFF", border: "1px solid #ECEDED", boxShadow: "0px 8px 16px 0px rgba(173,173,166,0.04)", height: 560 }}
          >
            <div className="flex flex-col md:flex-row gap-12 items-stretch h-full">
              <div className="flex-1 flex flex-col justify-between">
                <div>
                  <h2 className="text-[32px] font-bold leading-[1.2] tracking-tight text-[#2B2E33] mb-4" style={{ fontFamily: "var(--font-montserrat)" }}>
                    Reports & Graphs
                  </h2>
                  <p className="text-base leading-relaxed text-[#5D636F] max-w-md">
                    Generate detailed progress reports and visual graphs in seconds — shareable with parents, administrators, and IEP teams.
                  </p>
                  <div className="-mt-4"><HeroCTAs /></div>
                </div>
                <div className="h-[2px] opacity-35" style={{ background: "linear-gradient(to right, #E2E2D9, transparent)" }} />
                <div className="flex flex-col gap-7 max-w-md">
                  {[
                    { icon: <Image src="/concept-2/icons/target-02.svg" alt="" width={32} height={32} />, title: "Progress & Session Reports", desc: "Auto-generated reports for goals, sessions, attendance, and more." },
                    { icon: <Image src="/concept-2/icons/tags.svg" alt="" width={32} height={32} />, title: "Visual Goal Graphs", desc: "See student progress over time with clear, easy-to-read charts." },
                  ].map(({ icon, title, desc }) => (
                    <div key={title} className="flex items-center gap-4">
                      <div className="flex items-center justify-center shrink-0">{icon}</div>
                      <div>
                        <p className="text-[15px] font-bold text-[#5D636F] mb-1">{title}</p>
                        <p className="text-[15px] text-[#5D636F] leading-relaxed">{desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              <div className="flex-1 rounded-none overflow-hidden">
                <Image src="/assets/screenshots/compliance.png" alt="Reports screenshot" width={1200} height={800} className="w-full h-full object-cover object-left-top" />
              </div>
            </div>
          </div>
        </div>

        {/* Scheduling and Billing */}
        <div className="max-w-[1200px] mx-auto px-6 w-full">
          <div
            className="rounded-2xl pl-10 pt-10 pb-10 pr-0 overflow-hidden"
            style={{ background: "#FFFFFF", border: "1px solid #ECEDED", boxShadow: "0px 8px 16px 0px rgba(173,173,166,0.04)", height: 560 }}
          >
            <div className="flex flex-col md:flex-row gap-12 items-stretch h-full">
              <div className="flex-1 flex flex-col justify-between">
                <div>
                  <h2 className="text-[32px] font-bold leading-[1.2] tracking-tight text-[#2B2E33] mb-4" style={{ fontFamily: "var(--font-montserrat)" }}>
                    Scheduling & Billing
                  </h2>
                  <p className="text-base leading-relaxed text-[#5D636F] max-w-md">
                    Manage student schedules and auto-generate Medicaid billing notes — reduce admin overhead and get paid faster.
                  </p>
                  <div className="-mt-4"><HeroCTAs /></div>
                </div>
                <div className="h-[2px] opacity-35" style={{ background: "linear-gradient(to right, #E2E2D9, transparent)" }} />
                <div className="flex flex-col gap-7 max-w-md">
                  {[
                    { icon: <Image src="/concept-2/icons/target-02.svg" alt="" width={32} height={32} />, title: "Smart Scheduling", desc: "Schedule students individually or in groups with conflict detection." },
                    { icon: <Image src="/concept-2/icons/tags.svg" alt="" width={32} height={32} />, title: "Medicaid Billing Notes", desc: "Auto-generate compliant billing notes from session data with one click." },
                  ].map(({ icon, title, desc }) => (
                    <div key={title} className="flex items-center gap-4">
                      <div className="flex items-center justify-center shrink-0">{icon}</div>
                      <div>
                        <p className="text-[15px] font-bold text-[#5D636F] mb-1">{title}</p>
                        <p className="text-[15px] text-[#5D636F] leading-relaxed">{desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              <div className="flex-1 rounded-none overflow-hidden">
                <Image src="/concept-2/features/billing/screenshot.png" alt="Scheduling & Billing screenshot" width={1200} height={800} className="w-full h-full object-cover object-left-top" />
              </div>
            </div>
          </div>
        </div>

      </section>

    </main>
  );
}
