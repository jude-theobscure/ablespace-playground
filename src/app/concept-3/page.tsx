"use client";

import HeroCTAs from "@/components/HeroCTAs";
import HeroTabs from "@/components/HeroTabs";
import { AnimatedShinyText } from "@/components/ui/animated-shiny-text";
import Image from "next/image";
import { useState, useEffect } from "react";
import { LayoutGroup, motion } from "motion/react";
import { TextRotate } from "@/components/ui/text-rotate";

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
];

const PAGE_BG = "#F8EEE2";

export default function Concept3() {
  const [activeTab, setActiveTab] = useState(0);

  useEffect(() => {
    document.body.style.backgroundColor = PAGE_BG;
    return () => { document.body.style.backgroundColor = ""; };
  }, []);

  return (
    <>
    <style>{`
      header { background-color: ${PAGE_BG} !important; }
      header a[style*="gradient"] { background: #D9614C !important; color: #FFFBFA !important; }
      header nav div a:not([style]):hover { background-color: #FFFDFA !important; color: #403B36 !important; }
      .concept-3 h1, .concept-3 h2, .concept-3 h3 { font-family: var(--font-montserrat) !important; color: #1C1A17 !important; }
      .concept-3 h1 span, .concept-3 h2 span, .concept-3 h3 span { color: inherit !important; }
      .concept-3 p, .concept-3 span:not([class*="text-"]) { color: #403B36; }
      body::after {
        content: '';
        position: fixed;
        inset: 0;
        pointer-events: none;
        z-index: 9999;
        opacity: 0.35;
        background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E");
        background-repeat: repeat;
        background-size: 128px 128px;
      }
    `}</style>
    <main className="flex-1 concept-3">
      <section className="w-full relative overflow-hidden">
<div className="max-w-[1200px] mx-auto px-6 pt-24 pb-20 flex flex-col items-center text-center relative z-10">

        <h1
          className="max-w-3xl text-[52px] font-extrabold leading-[1.15] tracking-tight"
          style={{ fontFamily: "var(--font-montserrat)", color: "#1C1A17" }}
        >
          <LayoutGroup>
            <motion.span className="flex flex-wrap items-center justify-center gap-x-4 gap-y-3" layout>
              <motion.span layout>IEP Tracking Platform for</motion.span>
              <TextRotate
                texts={PROFESSIONS}
                mainClassName="text-[#2B3033] px-4 py-2 ml-2 bg-[#E5D5C5] overflow-hidden rounded-[14px] justify-center font-black italic"
                staggerFrom="first"
                initial={{ y: "100%", opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: "-120%", opacity: 0 }}
                staggerDuration={0.018}
                splitLevelClassName="overflow-hidden"
                transition={{ type: "tween", duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                rotationInterval={2800}
              />
            </motion.span>
          </LayoutGroup>
        </h1>

        <p className="mt-4 max-w-xl text-lg leading-relaxed text-[#403B36]">
          Simplify IEP data collection, accurately track student progress over time, and generate detailed reports—all within Ablespace.
        </p>

        <div className="relative z-[10000]">
          <HeroCTAs primaryBg="#D9614C" primaryText="#FFFBFA" secondaryBg="#FFFDFA" secondaryText="#403B36" />
        </div>

        <div className="mt-8 flex items-center gap-4">
          <Image src="/assets/icons/security/Navbar/FERPA Compliant 1.png" alt="FERPA Compliant" width={90} height={36} className="h-9 w-auto" style={{ filter: "brightness(0)", opacity: 0.45 }} />
          <Image src="/assets/icons/security/Navbar/HIPAA 1.png" alt="HIPAA" width={90} height={36} className="h-9 w-auto" style={{ filter: "brightness(0)", opacity: 0.45 }} />
          <Image src="/assets/icons/security/Navbar/ISO 27001 Certified 1.png" alt="ISO 27001 Certified" width={90} height={36} className="h-9 w-auto" style={{ filter: "brightness(0)", opacity: 0.45 }} />
        </div>

        <HeroTabs onTabChange={setActiveTab} />

        <div className="mt-8 w-full relative">
          {/* Bottom fade */}
          <div className="absolute bottom-0 left-0 right-0 h-[75%] pointer-events-none z-10" style={{ background: `linear-gradient(to bottom, transparent, ${PAGE_BG} 60%, ${PAGE_BG})` }} />
          {/* Trust bar on top of gradient */}
          <div className="absolute bottom-6 left-0 right-0 z-20 flex flex-col items-center gap-6">
            <p className="text-base tracking-wide text-[#403B36]">
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
                  className="h-12 w-auto object-contain opacity-75"
                />
              ))}
            </div>
          </div>
          <div className="relative w-full max-w-[1000px] mx-auto rounded-[var(--radius-xl)] border border-[#F2F1F1] bg-[#FFFDFA]/50 p-3">
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

      {/* Feature Card */}
      <section className="w-full py-20">
        <div className="max-w-[1200px] mx-auto px-6">
          <div className="flex items-center justify-between pl-10">
            <div style={{ width: 480 }}>
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-[8px] mb-4" style={{ background: "#E5D5C5" }}>
                <Image src="/assets/icons/target.svg" alt="" width={16} height={16} style={{ filter: "brightness(0) saturate(100%) invert(36%) sepia(8%) saturate(500%) hue-rotate(10deg) brightness(95%)" }} />
                <span className="text-sm font-semibold text-[#595550]">IEP Tracking</span>
              </div>
              <h2
                className="text-[44px] font-black leading-[1.15] tracking-tight text-[#2B2E33]"
                style={{ fontFamily: "var(--font-heading)" }}
              >
                Smarter Way<br />to Track IEP Goals
              </h2>
            </div>
            <Image src="/assets/illustrations/char-girl.svg" alt="" width={240} height={240} className="mr-10" />
          </div>
          <div
            className="rounded-2xl pl-10 pt-10 pb-0 pr-0 overflow-hidden"
            style={{
              background: "#FFFDFA",
              border: "1px solid rgba(225,224,223,0.5)",
              boxShadow: "0px 8px 16px 0px rgba(173,173,166,0.04)",
              height: 520,
            }}
          >
            <div className="flex flex-row gap-12 items-stretch h-full">
              {/* Left */}
              <div className="flex-1 flex flex-col justify-between pb-10">
                <div>
                  <h2
                    className="text-[26px] font-[700] leading-[1.2] tracking-tight text-[#2B2E33] mb-3"
                    style={{ fontFamily: "var(--font-heading)" }}
                  >
                    Effortless Data Tracking
                  </h2>
                  <p className="text-base leading-relaxed text-[#5D636F] max-w-md">
                    AbleSpace uses AI to streamline IEP goal tracking — Collect Data with a single click, Organize it automatically, and ensure nothing slips through the cracks.
                  </p>
                  <div className="-mt-2"><HeroCTAs textSize="text-sm" paddingY="py-[12px]" paddingX="px-[16px]" iconSize={18} radius="rounded-[10px]" equalWidth primaryBg="#D9614C" primaryText="#FFFBFA" /></div>
                </div>
                {/* Testimonial */}
                <div className="max-w-sm">
                  <div className="h-px bg-[#E8E4DF] mb-5" />
                  <p className="text-[15px] leading-relaxed text-[#5D636F] mb-4">
                    "It's so intuitive. I save hours every week, and nothing slips through the cracks anymore. This tool was clearly built with teachers in mind."
                  </p>
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-lg bg-[#ECEAE7] shrink-0" />
                    <div>
                      <p className="text-sm font-bold text-[#2B2E33]">Jane Doe</p>
                      <p className="text-sm text-[#8C8882]">Special Education Teacher</p>
                    </div>
                  </div>
                </div>
              </div>
              {/* Right — screenshot */}
              <div className="flex-1 overflow-hidden relative">
                <Image
                  src="/assets/screenshots/data-collection.png"
                  alt="Data collection screenshot"
                  fill
                  style={{ objectFit: "cover", objectPosition: "left top" }}
                />
              </div>
            </div>
          </div>

          {/* Two smaller cards */}
          <div className="mt-4 grid grid-cols-2 gap-4">
            {[
              { title: "Rubrics and 8+ Goal Data Types", desc: "Generate session reports and progress summaries, with detailed IEP tracking built in.", img: "/assets/features/data-collection/data-types.png" },
              { title: "Reports and Graphs", desc: "Generate session reports and progress summaries, with detailed IEP tracking built in.", img: "/assets/features/data-collection/reports-graphs.png" },
            ].map(({ title, desc, img }) => (
              <div
                key={title}
                className="rounded-2xl pt-8 px-8 pb-0 overflow-hidden flex flex-col"
                style={{
                  background: "#FFFDFA",
                  border: "1px solid rgba(225,224,223,0.5)",
                  boxShadow: "0px 8px 16px 0px rgba(173,173,166,0.04)",
                  height: 640,
                }}
              >
                <h3
                  className="text-[20px] font-bold leading-[1.2] tracking-tight text-[#2B2E33] mb-3"
                  style={{ fontFamily: "var(--font-heading)" }}
                >
                  {title}
                </h3>
                <p className="text-base leading-relaxed text-[#5D636F] mb-6">{desc}</p>
                <div className="flex-1 relative min-h-[200px]">
                  <Image
                    src={img}
                    alt={title}
                    fill
                    style={{ objectFit: "cover", objectPosition: "left top" }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonial */}
      <section className="w-full py-[160px]">
        <div className="max-w-[800px] mx-auto px-6 flex flex-col items-center text-center relative">
          <Image src="/assets/icons/quote.svg" alt="" width={64} height={64} className="absolute -top-4 -left-4 opacity-40" />
          <p className="text-[32px] font-black text-[#403830] mb-6" style={{ fontFamily: "var(--font-heading)", lineHeight: 1.2 }}>
            Ablespace AI has saved me so much time.<br />Writing IEP goals and notes is faster, easier,<br />and actually enjoyable now!
          </p>
          <p className="text-[18px] font-bold text-[#89837D]">Josephine Williams, Special Ed. Teacher</p>
        </div>
      </section>

      {/* Feature Card 2 */}
      <section className="w-full py-20">
        <div className="max-w-[1200px] mx-auto px-6">
          <div className="flex items-center justify-between pl-10">
            <div style={{ width: 480 }}>
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-[8px] mb-4" style={{ background: "#E5D5C5" }}>
                <Image src="/assets/icons/target.svg" alt="" width={16} height={16} style={{ filter: "brightness(0) saturate(100%) invert(36%) sepia(8%) saturate(500%) hue-rotate(10deg) brightness(95%)" }} />
                <span className="text-sm font-semibold text-[#595550]">IEP Tracking</span>
              </div>
              <h2
                className="text-[44px] font-black leading-[1.15] tracking-tight text-[#2B2E33]"
                style={{ fontFamily: "var(--font-heading)" }}
              >
                Smarter Way<br />to Track IEP Goals
              </h2>
            </div>
            <Image src="/assets/illustrations/char-girl.svg" alt="" width={240} height={240} className="mr-10" />
          </div>
          <div
            className="rounded-2xl pl-10 pt-10 pb-0 pr-0 overflow-hidden"
            style={{
              background: "#FFFDFA",
              border: "1px solid rgba(225,224,223,0.5)",
              boxShadow: "0px 8px 16px 0px rgba(173,173,166,0.04)",
              height: 520,
            }}
          >
            <div className="flex flex-row gap-12 items-stretch h-full">
              {/* Left */}
              <div className="flex-1 flex flex-col justify-between pb-10">
                <div>
                  <h2
                    className="text-[26px] font-[700] leading-[1.2] tracking-tight text-[#2B2E33] mb-3"
                    style={{ fontFamily: "var(--font-heading)" }}
                  >
                    Effortless Data Tracking
                  </h2>
                  <p className="text-base leading-relaxed text-[#5D636F] max-w-md">
                    AbleSpace uses AI to streamline IEP goal tracking — Collect Data with a single click, Organize it automatically, and ensure nothing slips through the cracks.
                  </p>
                  <div className="-mt-2"><HeroCTAs textSize="text-sm" paddingY="py-[12px]" paddingX="px-[16px]" iconSize={18} radius="rounded-[10px]" equalWidth primaryBg="#D9614C" primaryText="#FFFBFA" /></div>
                </div>
                {/* Testimonial */}
                <div className="max-w-sm">
                  <div className="h-px bg-[#E8E4DF] mb-5" />
                  <p className="text-[15px] leading-relaxed text-[#5D636F] mb-4">
                    "It's so intuitive. I save hours every week, and nothing slips through the cracks anymore. This tool was clearly built with teachers in mind."
                  </p>
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-lg bg-[#ECEAE7] shrink-0" />
                    <div>
                      <p className="text-sm font-bold text-[#2B2E33]">Jane Doe</p>
                      <p className="text-sm text-[#8C8882]">Special Education Teacher</p>
                    </div>
                  </div>
                </div>
              </div>
              {/* Right — screenshot */}
              <div className="flex-1 overflow-hidden relative">
                <Image
                  src="/assets/screenshots/data-collection.png"
                  alt="Data collection screenshot"
                  fill
                  style={{ objectFit: "cover", objectPosition: "left top" }}
                />
              </div>
            </div>
          </div>

          {/* Two smaller cards */}
          <div className="mt-4 grid grid-cols-2 gap-4">
            {[
              { title: "Rubrics and 8+ Goal Data Types", desc: "Generate session reports and progress summaries, with detailed IEP tracking built in.", img: "/assets/features/data-collection/data-types.png" },
              { title: "Reports and Graphs", desc: "Generate session reports and progress summaries, with detailed IEP tracking built in.", img: "/assets/features/data-collection/reports-graphs.png" },
            ].map(({ title, desc, img }) => (
              <div
                key={title}
                className="rounded-2xl pt-8 px-8 pb-0 overflow-hidden flex flex-col"
                style={{
                  background: "#FFFDFA",
                  border: "1px solid rgba(225,224,223,0.5)",
                  boxShadow: "0px 8px 16px 0px rgba(173,173,166,0.04)",
                  height: 640,
                }}
              >
                <h3
                  className="text-[20px] font-bold leading-[1.2] tracking-tight text-[#2B2E33] mb-3"
                  style={{ fontFamily: "var(--font-heading)" }}
                >
                  {title}
                </h3>
                <p className="text-base leading-relaxed text-[#5D636F] mb-6">{desc}</p>
                <div className="flex-1 relative min-h-[200px]">
                  <Image
                    src={img}
                    alt={title}
                    fill
                    style={{ objectFit: "cover", objectPosition: "left top" }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Bar */}
      <section className="w-full py-16">
        <div className="max-w-[1200px] mx-auto px-6">
          <div className="grid grid-cols-4 gap-8">
            {[
              { value: "6.25mil", label: "Reports Generated" },
              { value: "120k",    label: "Goals" },
              { value: "220k",    label: "Something Here" },
              { value: "7.5mil",  label: "Notes Added" },
            ].map(({ value, label }) => (
              <div key={label} className="flex flex-col items-center text-center gap-2">
                <span
                  className="text-[56px] font-black text-[#2B2E33] leading-none tracking-tight"
                  style={{ fontFamily: "var(--font-heading)" }}
                >
                  {value}
                </span>
                <span className="text-base text-[#5D636F]">{label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

</section>
    </main>
    </>
  );
}
