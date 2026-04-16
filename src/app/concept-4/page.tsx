"use client";

import HeroCTAs from "@/components/HeroCTAs";
import HeroTabs from "@/components/HeroTabs";
import HowItWorksSection from "@/components/HowItWorksSection";
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
  "/concept-4/screenshots/data-collection.png",
  "/concept-4/screenshots/service-time-accomodations.png",
  "/concept-4/screenshots/compliance.png",
  "/concept-4/screenshots/ablespace-ai.png",
];

const PAGE_BG = "#F8EEE2";

const FEATURE_TABS = [
  {
    label: "Data Collection",
    heading: "Capture Every Data Point Effortlessly",
    desc: "Log student performance during live sessions — no clipboards, no delays. AbleSpace makes data collection feel natural.",
    bullets: ["8+ goal data types including trials, rubrics & duration", "One-tap logging during sessions", "Auto-synced across your whole team"],
    img: "/concept-4/screenshots/data-collection.png",
  },
  {
    label: "Reports",
    heading: "Reports That Write Themselves",
    desc: "Generate progress reports, session summaries, and IEP goal updates in seconds — ready to share with families and administrators.",
    bullets: ["AI-generated progress narratives", "Graph-ready data visualizations", "Export to PDF or share directly"],
    img: "/concept-4/screenshots/data-collection.png",
  },
  {
    label: "Scheduling",
    heading: "Service Time, Always Accounted For",
    desc: "Track every minute of service time against IEP mandates. Know instantly who's on track and who needs attention.",
    bullets: ["Real-time service minute tracking", "Accommodation scheduling built in", "Alerts for missed or incomplete sessions"],
    img: "/concept-4/screenshots/service-time-accomodations.png",
  },
  {
    label: "AI Tools",
    heading: "Your AI-Powered Co-Therapist",
    desc: "AbleSpace AI helps you write goals, draft notes, and surface insights — so you can focus on students, not paperwork.",
    bullets: ["Goal writing with one prompt", "Session note generation", "Progress trend detection"],
    img: "/concept-4/screenshots/ablespace-ai.png",
  },
  {
    label: "Compliance",
    heading: "Stay Compliant Without the Stress",
    desc: "Built-in compliance tracking keeps your documentation audit-ready at all times — FERPA, HIPAA, and IDEA aligned.",
    bullets: ["Automated compliance checklists", "Audit trail for every action", "District-level reporting dashboards"],
    img: "/concept-4/screenshots/compliance.png",
  },
];

const WORKFLOWS = [
  {
    num: "01",
    label: "Capture",
    heading: "Session data in seconds, not hours",
    desc: "During a session, tap once to log a trial, rate a rubric, or mark a behavior. AbleSpace stays out of your way so you can stay present with your student.",
    details: ["Works offline — syncs when you're back online", "Customizable data sheets per student", "Voice-to-note for quick session logs"],
    color: "#F2E5D5",
  },
  {
    num: "02",
    label: "Analyze",
    heading: "Insights that used to take hours",
    desc: "AbleSpace automatically plots your data into graphs, flags plateau trends, and surfaces the insights you need for your next IEP meeting — before you even ask.",
    details: ["Trend analysis across any date range", "Goal mastery predictions", "Side-by-side progress comparisons"],
    color: "#E8F0E0",
  },
  {
    num: "03",
    label: "Manage",
    heading: "One place for your whole caseload",
    desc: "From scheduling to compliance to parent communication — manage every student, every goal, and every deadline from a single, beautifully organized dashboard.",
    details: ["Full caseload overview at a glance", "IEP deadline reminders", "Collaborate with co-therapists in real time"],
    color: "#E8E4F0",
  },
];

const PERSONAS = [
  {
    role: "Occupational Therapist",
    headline: "Less admin. More therapy.",
    desc: "Stop spending evenings on session notes. AbleSpace OTs report saving 5+ hours per week on documentation alone.",
    accent: "#D9614C",
    bg: "#FFF3F0",
  },
  {
    role: "Speech-Language Pathologist",
    headline: "Goals tracked. Progress proven.",
    desc: "Track articulation, language, and fluency goals with data types built specifically for SLPs — then generate reports families actually understand.",
    accent: "#5B7FA6",
    bg: "#EFF4FB",
  },
  {
    role: "Special Education Teacher",
    headline: "Your whole caseload, under control.",
    desc: "Manage 20+ students, coordinate with your team, and stay ahead of IEP deadlines — all from one organized workspace.",
    accent: "#6A9B6A",
    bg: "#EFF6EF",
  },
  {
    role: "School Administrator",
    headline: "Compliance without the chaos.",
    desc: "District-wide dashboards give you real-time visibility into service delivery, compliance status, and provider performance.",
    accent: "#8A6AC8",
    bg: "#F3F0FB",
  },
];

const TIMELINE = [
  { week: "Week 1", heading: "You're set up in under an hour", desc: "Import your caseload, set up goals, and invite your team. No training required — AbleSpace is built to feel familiar from day one." },
  { week: "Week 2", heading: "Data flows in, stress flows out", desc: "Your first week of session data is in. Graphs auto-populate. You spend zero time on formatting or calculations." },
  { week: "Week 3", heading: "Your first AI-generated report", desc: "AbleSpace drafts your progress reports. You review, tweak, and send in minutes instead of hours." },
  { week: "Week 4", heading: "IEP meeting? You're ready.", desc: "Walk into your next IEP meeting with clean data, clear graphs, and AI-drafted goal updates. Parents and admins are impressed. You feel confident." },
];

const TESTIMONIALS = [
  {
    quote: "I used to spend Sunday nights catching up on session notes. Now I leave work on time every day. AbleSpace genuinely changed my life.",
    name: "Marissa T.",
    role: "Occupational Therapist, Chicago Public Schools",
    stars: 5,
  },
  {
    quote: "The AI goal writing feature alone is worth it. What used to take 45 minutes per student now takes 3. My IEP meetings have never been smoother.",
    name: "Derek W.",
    role: "Special Education Teacher, Austin ISD",
    stars: 5,
  },
  {
    quote: "As a school psychologist overseeing 12 providers, AbleSpace's compliance dashboard is the first thing I open every morning. I finally feel in control.",
    name: "Sandra K.",
    role: "School Psychologist, Miami-Dade County",
    stars: 5,
  },
];

export default function Concept4() {
  const [activeTab, setActiveTab] = useState(0);
  const [activeFeatureTab, setActiveFeatureTab] = useState(0);

  useEffect(() => {
    document.body.style.backgroundColor = PAGE_BG;
    return () => { document.body.style.backgroundColor = ""; };
  }, []);

  return (
    <>
    <style>{`
      header { background-color: ${PAGE_BG} !important; border-color: #F2E5D5 !important; }
      header a[style*="gradient"] { background: #D9614C !important; color: #FFFBFA !important; }
      header nav div a:not([style]):hover { background-color: #FFFDFA !important; color: #403B36 !important; }
      .concept-4 h1, .concept-4 h2, .concept-4 h3 { font-family: var(--font-heading) !important; color: #1C1A17 !important; }
      .concept-4 h1 span, .concept-4 h2 span, .concept-4 h3 span { color: inherit !important; }
      .concept-4 .dark-section h2, .concept-4 .dark-section h2 span { color: #FFFDFA !important; }
      .concept-4 p, .concept-4 span:not([class*="text-"]) { color: #403B36; }
      @keyframes marquee {
        0%   { transform: translateX(0); }
        100% { transform: translateX(-50%); }
      }
      .marquee-track { animation: marquee 28s linear infinite; }
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
    <main className="flex-1 concept-4">
      <section className="w-full relative">
<div className="max-w-[1200px] mx-auto px-6 pt-[72px] pb-20 flex flex-col items-center text-center relative z-10">

        <div
          className="inline-flex items-center gap-2 px-4 py-1.5 font-semibold mb-4"
          style={{ background: "#FFFDFA", color: "#595550", borderRadius: 999, border: "1px solid #F2E5D5", fontSize: 13 }}
        >
          <Image src="/concept-4/icons/star.svg" alt="" width={16} height={16} />
          Loved by 20,000+ Providers
        </div>
        <h1
          className="max-w-3xl text-[52px] font-extrabold leading-[1.15] tracking-tight"
          style={{ fontFamily: "var(--font-heading)", color: "#1C1A17" }}
        >
          <LayoutGroup>
            <motion.span className="flex flex-wrap items-center justify-center gap-x-4 gap-y-3" layout>
              <motion.span layout>IEP Tracking Platform for</motion.span>
              <TextRotate
                texts={PROFESSIONS}
                mainClassName="text-[#2B3033] px-4 py-2 ml-2 bg-[#E5D5C5] overflow-hidden rounded-[14px] justify-center font-black"
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
          <Image src="/concept-4/icons/security/FERPA Compliant 1.png" alt="FERPA Compliant" width={90} height={36} className="h-9 w-auto" style={{ filter: "brightness(0)", opacity: 0.45 }} />
          <Image src="/concept-4/icons/security/HIPAA 1.png" alt="HIPAA" width={90} height={36} className="h-9 w-auto" style={{ filter: "brightness(0)", opacity: 0.45 }} />
          <Image src="/concept-4/icons/security/ISO 27001 Certified 1.png" alt="ISO 27001 Certified" width={90} height={36} className="h-9 w-auto" style={{ filter: "brightness(0)", opacity: 0.45 }} />
        </div>

        <div className="w-full flex justify-center" style={{ marginTop: 96 }}>
          <HeroTabs onTabChange={setActiveTab} />
        </div>

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
                  src={`/concept-4/logos/district-logo-white ${n}.png`}
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
          <div className="flex flex-col items-center text-center pl-5 mb-8">
            <h2
              className="text-[56px] font-bold leading-[1.15] tracking-tight text-[#2B2E33] whitespace-nowrap"
              style={{ fontFamily: "var(--font-heading)" }}
            >
              <span className="font-bold">Smarter</span> IEP Tracking
            </h2>
            <p className="font-normal mt-4 mb-[40px]" style={{ color: "#595550", fontSize: 18, maxWidth: 720 }}>
              From capturing session data to generating meaningful insights, seamlessly track student progress and identify trends that help improve outcomes.
            </p>
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
                  src="/concept-4/screenshots/data-collection.png"
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
              { title: "Rubrics and 8+ Goal Data Types", desc: "Generate session reports and progress summaries, with detailed IEP tracking built in.", img: "/concept-4/features/data-types.png" },
              { title: "Reports and Graphs", desc: "Generate session reports and progress summaries, with detailed IEP tracking built in.", img: "/concept-4/features/reports-graphs.png" },
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

          {/* 3-col icon row */}
          <div className="mt-16 grid grid-cols-3 gap-8">
            {[
              { icon: "/concept-4/icons/task-done-02.svg",  text: "Generate clear documentation to verify correct and compliant service delivery." },
              { icon: "/concept-4/icons/date-time.svg",     text: "Maintain accurate records for attendance, goals, and all delivered services." },
              { icon: "/concept-4/icons/analytics-01.svg",  text: "Ensure students receive required IEP minutes while quickly identifying service gaps." },
            ].map(({ icon, text }) => (
              <div key={text} className="flex flex-col items-center text-center gap-4">
                <Image src={icon} alt="" width={44} height={44} />
                <p className="text-base leading-relaxed" style={{ color: "#595550", maxWidth: 260 }}>{text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      <div className="my-[96px]">
        <HowItWorksSection />
      </div>

      {/* Feature Card 2 */}
      <section className="w-full py-20">
        <div className="max-w-[1200px] mx-auto px-6">
          <div className="flex flex-col items-center text-center pl-5 mb-8">
            <h2
              className="text-[56px] font-bold leading-[1.15] tracking-tight text-[#2B2E33] whitespace-nowrap"
              style={{ fontFamily: "var(--font-heading)" }}
            >
              Powered by AI
            </h2>
            <p className="font-normal mt-4 mb-[40px]" style={{ color: "#595550", fontSize: 18, maxWidth: 720 }}>
              From capturing session data to generating meaningful insights, seamlessly track student progress and identify trends that help improve outcomes.
            </p>
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
                  src="/concept-4/screenshots/data-collection.png"
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
              { title: "Rubrics and 8+ Goal Data Types", desc: "Generate session reports and progress summaries, with detailed IEP tracking built in.", img: "/concept-4/features/data-types.png" },
              { title: "Reports and Graphs", desc: "Generate session reports and progress summaries, with detailed IEP tracking built in.", img: "/concept-4/features/reports-graphs.png" },
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

      {/* Feature Card 3 */}
      <section className="w-full py-20">
        <div className="max-w-[1200px] mx-auto px-6">
          <div className="flex flex-col items-center text-center pl-5 mb-8">
            <h2
              className="text-[56px] font-bold leading-[1.15] tracking-tight text-[#2B2E33] whitespace-nowrap"
              style={{ fontFamily: "var(--font-heading)" }}
            >
              Powered by AI
            </h2>
            <p className="font-normal mt-4 mb-[40px]" style={{ color: "#595550", fontSize: 18, maxWidth: 720 }}>
              From capturing session data to generating meaningful insights, seamlessly track student progress and identify trends that help improve outcomes.
            </p>
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
                  src="/concept-4/screenshots/data-collection.png"
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
              { title: "Rubrics and 8+ Goal Data Types", desc: "Generate session reports and progress summaries, with detailed IEP tracking built in.", img: "/concept-4/features/data-types.png" },
              { title: "Reports and Graphs", desc: "Generate session reports and progress summaries, with detailed IEP tracking built in.", img: "/concept-4/features/reports-graphs.png" },
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

      {/* ── Schools & Districts ───────────────────────────────── */}
      <section className="w-full py-24">
        <div className="max-w-[1200px] mx-auto px-6">
          {/* Text + Buttons */}
          <div className="flex flex-row items-center justify-between mb-14">
            <div className="flex flex-col items-start text-left">
              <h2 className="text-[56px] font-bold leading-[1.15] tracking-tight text-[#2B2E33]" style={{ fontFamily: "var(--font-heading)" }}>
                Specially Designed for<br />Schools and Districts
              </h2>
              <p className="font-normal mt-4" style={{ color: "#595550", fontSize: 18, maxWidth: 560 }}>
                From small private practices to large public school districts — AbleSpace scales to fit every team size and structure.
              </p>
            </div>
            <div className="shrink-0">
              <HeroCTAs primaryBg="#D9614C" primaryText="#FFFBFA" secondaryBg="#FFFDFA" secondaryText="#403B36" swap equalWidth />
            </div>
          </div>

          {/* Screenshot + gradient + marquee */}
          <div className="relative w-full rounded-2xl overflow-hidden" style={{ height: 480, border: "1px solid rgba(225,224,223,0.5)", boxShadow: "0px 16px 48px 0px rgba(173,173,166,0.1)" }}>
            <Image
              src="/concept-4/screenshots/compliance.png"
              alt="AbleSpace district dashboard"
              fill
              style={{ objectFit: "cover", objectPosition: "top" }}
            />
            {/* Bottom gradient */}
            <div className="absolute bottom-0 left-0 right-0 h-[75%] pointer-events-none z-10" style={{ background: `linear-gradient(to bottom, transparent, ${PAGE_BG} 60%, ${PAGE_BG})` }} />
            {/* Marquee on top of gradient */}
            <div className="absolute bottom-8 left-0 right-0 overflow-hidden" style={{ maskImage: "linear-gradient(to right, transparent, black 12%, black 88%, transparent)" }}>
              <div className="flex marquee-track" style={{ width: "max-content", gap: 40 }}>
                {[...Array(2)].flatMap(() =>
                  [2,3,4,5,6,7,8,9].map((n, i) => (
                    <Image
                      key={`${n}-${i}`}
                      src={`/concept-4/logos/district-logo-white ${n}.png`}
                      alt={`District logo ${n}`}
                      width={120}
                      height={40}
                      className="h-10 w-auto object-contain"
                      style={{ filter: "brightness(0)", opacity: 0.4 }}
                    />
                  ))
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Get to Know AbleSpace ─────────────────────────────── */}
      <section className="w-full py-24">
        <div className="max-w-[1200px] mx-auto px-6">
          <div className="flex flex-col items-center text-center mb-12">
            <div className="inline-flex items-center px-4 py-1.5 font-semibold mb-4" style={{ background: "#F2E5D5", color: "#4A4540", borderRadius: 999, fontSize: 13, border: "1px solid #EAD5C0" }}>
              Everything in one place
            </div>
            <h2 className="text-[56px] font-bold leading-[1.15] tracking-tight text-[#2B2E33]" style={{ fontFamily: "var(--font-heading)" }}>
              Get to Know AbleSpace
            </h2>
            <p className="font-normal mt-4" style={{ color: "#595550", fontSize: 18, maxWidth: 600 }}>
              One platform. Every tool your team needs to deliver compliant, data-driven special education services.
            </p>
          </div>

          {/* Tab pills */}
          <div className="flex items-center justify-center gap-2 mb-10 flex-wrap">
            {FEATURE_TABS.map((tab, i) => (
              <button
                key={tab.label}
                onClick={() => setActiveFeatureTab(i)}
                className="px-5 py-2.5 rounded-full text-sm font-semibold transition-all duration-200"
                style={{
                  background: activeFeatureTab === i ? "#1C1A17" : "#F2E5D5",
                  color: activeFeatureTab === i ? "#FFFDFA" : "#4A4540",
                }}
              >
                {tab.label}
              </button>
            ))}
          </div>

          {/* Tab panel */}
          <div className="rounded-2xl overflow-hidden" style={{ background: "#FFFDFA", border: "1px solid rgba(225,224,223,0.5)", boxShadow: "0px 8px 32px 0px rgba(173,173,166,0.08)" }}>
            {FEATURE_TABS.map((tab, i) => (
              <div key={tab.label} className={i === activeFeatureTab ? "flex flex-row items-stretch" : "hidden"} style={{ minHeight: 460 }}>
                {/* Left: text */}
                <div className="flex flex-col justify-center p-12" style={{ width: 420, flexShrink: 0 }}>
                  <h3 className="text-[26px] font-bold leading-[1.2] tracking-tight text-[#2B2E33] mb-3" style={{ fontFamily: "var(--font-heading)" }}>{tab.heading}</h3>
                  <p className="text-base leading-relaxed mb-6" style={{ color: "#595550" }}>{tab.desc}</p>
                  <ul className="flex flex-col gap-3">
                    {tab.bullets.map(b => (
                      <li key={b} className="flex items-start gap-2.5 text-sm" style={{ color: "#595550" }}>
                        <span className="mt-1.5 w-1.5 h-1.5 rounded-full shrink-0" style={{ background: "#D9614C" }} />
                        {b}
                      </li>
                    ))}
                  </ul>
                </div>
                {/* Right: screenshot */}
                <div className="flex-1 relative overflow-hidden" style={{ borderLeft: "1px solid rgba(225,224,223,0.5)" }}>
                  <Image src={tab.img} alt={tab.label} fill style={{ objectFit: "cover", objectPosition: "left top" }} />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Deep Feature Storytelling: Capture → Analyze → Manage ── */}
      <section className="w-full py-24" style={{ background: "#FFFDFA" }}>
        <div className="max-w-[1200px] mx-auto px-6">
          <div className="flex flex-col items-center text-center mb-20">
            <div className="inline-flex items-center px-4 py-1.5 font-semibold mb-4" style={{ background: "#F2E5D5", color: "#4A4540", borderRadius: 999, fontSize: 13, border: "1px solid #EAD5C0" }}>
              The AbleSpace Workflow
            </div>
            <h2 className="text-[56px] font-bold leading-[1.15] tracking-tight text-[#2B2E33]" style={{ fontFamily: "var(--font-heading)" }}>
              From session to insight<br />in three steps
            </h2>
            <p className="font-normal mt-4" style={{ color: "#595550", fontSize: 18, maxWidth: 580 }}>
              AbleSpace is designed around how special educators actually work — not the other way around.
            </p>
          </div>

          <div className="flex flex-col gap-6">
            {WORKFLOWS.map((w, i) => (
              <div
                key={w.num}
                className="rounded-2xl p-10 flex flex-row items-center gap-12"
                style={{ background: w.color, minHeight: 220 }}
              >
                {/* Number + label */}
                <div className="flex flex-col items-center shrink-0" style={{ width: 100 }}>
                  <span className="text-[64px] font-black leading-none tracking-tight text-[#2B2E33]" style={{ fontFamily: "var(--font-heading)", opacity: 0.15 }}>{w.num}</span>
                  <span className="text-sm font-bold uppercase tracking-widest mt-1" style={{ color: "#D9614C" }}>{w.label}</span>
                </div>
                {/* Divider */}
                <div className="w-px self-stretch" style={{ background: "rgba(0,0,0,0.08)" }} />
                {/* Text */}
                <div className="flex-1">
                  <h3 className="text-[28px] font-bold leading-[1.2] tracking-tight text-[#2B2E33] mb-3" style={{ fontFamily: "var(--font-heading)" }}>{w.heading}</h3>
                  <p className="text-base leading-relaxed mb-5" style={{ color: "#595550", maxWidth: 560 }}>{w.desc}</p>
                  <ul className="flex flex-row gap-6 flex-wrap">
                    {w.details.map(d => (
                      <li key={d} className="flex items-center gap-2 text-sm font-medium" style={{ color: "#595550" }}>
                        <span className="w-1.5 h-1.5 rounded-full shrink-0" style={{ background: "#D9614C" }} />
                        {d}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Persona / Use Case Section ────────────────────────── */}
      <section className="w-full py-24">
        <div className="max-w-[1200px] mx-auto px-6">
          <div className="flex flex-col items-center text-center mb-16">
            <div className="inline-flex items-center px-4 py-1.5 font-semibold mb-4" style={{ background: "#F2E5D5", color: "#4A4540", borderRadius: 999, fontSize: 13, border: "1px solid #EAD5C0" }}>
              Built for your role
            </div>
            <h2 className="text-[56px] font-bold leading-[1.15] tracking-tight text-[#2B2E33]" style={{ fontFamily: "var(--font-heading)" }}>
              Whoever you are,<br />AbleSpace works for you
            </h2>
            <p className="font-normal mt-4" style={{ color: "#595550", fontSize: 18, maxWidth: 560 }}>
              From solo practitioners to district-wide teams — AbleSpace adapts to how your role actually works.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-5">
            {PERSONAS.map(p => (
              <div
                key={p.role}
                className="rounded-2xl p-8 flex flex-col gap-4"
                style={{ background: p.bg, border: `1px solid ${p.accent}22` }}
              >
                <div className="w-10 h-10 rounded-xl shrink-0" style={{ background: p.accent + "22" }}>
                  <div className="w-full h-full rounded-xl" style={{ background: p.accent, opacity: 0.15 }} />
                </div>
                <div>
                  <p className="text-xs font-bold uppercase tracking-widest mb-1" style={{ color: p.accent }}>{p.role}</p>
                  <h3 className="text-[22px] font-bold leading-[1.2] tracking-tight text-[#2B2E33] mb-2" style={{ fontFamily: "var(--font-heading)" }}>{p.headline}</h3>
                  <p className="text-base leading-relaxed" style={{ color: "#595550" }}>{p.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 30-Day Timeline ───────────────────────────────────── */}
      <section className="w-full py-24" style={{ background: "#31302E", borderRadius: 44 }}>
        {/* Noise overlay */}
        <div className="absolute inset-0 pointer-events-none rounded-[44px]" style={{ opacity: 0.15, backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`, backgroundRepeat: "repeat", backgroundSize: "128px 128px" }} />
        <div className="relative z-10 max-w-[1200px] mx-auto px-6">
          <div className="flex flex-col items-center text-center mb-16">
            <div className="inline-flex items-center px-4 py-1.5 font-semibold mb-4" style={{ background: "#4A4540", color: "#F8EEE2", borderRadius: 999, fontSize: 13 }}>
              What happens when you join
            </div>
            <h2 className="text-[56px] font-bold leading-[1.15] tracking-tight" style={{ fontFamily: "var(--font-heading)", color: "#FFFDFA" }}>
              What you achieve<br />in your first 30 days
            </h2>
            <p className="font-normal mt-4" style={{ color: "#9E9590", fontSize: 18, maxWidth: 540 }}>
              Most providers are fully up and running — and already saving time — within their first week.
            </p>
          </div>

          <div className="grid grid-cols-4 gap-5">
            {TIMELINE.map((t, i) => (
              <div key={t.week} className="rounded-2xl p-7 flex flex-col gap-4" style={{ background: "#3E3C3A" }}>
                <div className="flex items-center gap-3">
                  <span className="w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold shrink-0" style={{ background: "#D9614C", color: "#FFFDFA" }}>{i + 1}</span>
                  <span className="text-xs font-bold uppercase tracking-widest" style={{ color: "#D9614C" }}>{t.week}</span>
                </div>
                <h3 className="text-[18px] font-bold leading-[1.3] tracking-tight" style={{ fontFamily: "var(--font-heading)", color: "#FFFDFA" }}>{t.heading}</h3>
                <p className="text-sm leading-relaxed" style={{ color: "#9E9590" }}>{t.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Testimonials ──────────────────────────────────────── */}
      <section className="w-full py-24">
        <div className="max-w-[1200px] mx-auto px-6">
          <div className="flex flex-col items-center text-center mb-16">
            <div className="inline-flex items-center px-4 py-1.5 font-semibold mb-4" style={{ background: "#F2E5D5", color: "#4A4540", borderRadius: 999, fontSize: 13, border: "1px solid #EAD5C0" }}>
              Real providers. Real results.
            </div>
            <h2 className="text-[56px] font-bold leading-[1.15] tracking-tight text-[#2B2E33]" style={{ fontFamily: "var(--font-heading)" }}>
              Loved by 20,000+<br />special educators
            </h2>
          </div>

          <div className="grid grid-cols-3 gap-5">
            {TESTIMONIALS.map(t => (
              <div key={t.name} className="rounded-2xl p-8 flex flex-col gap-5" style={{ background: "#FFFDFA", border: "1px solid rgba(225,224,223,0.5)", boxShadow: "0px 8px 16px 0px rgba(173,173,166,0.04)" }}>
                {/* Stars */}
                <div className="flex items-center gap-1">
                  {Array.from({ length: t.stars }).map((_, i) => (
                    <svg key={i} width="16" height="16" viewBox="0 0 16 16" fill="#D9614C"><path d="M8 1l1.8 3.6L14 5.3l-3 2.9.7 4.1L8 10.4l-3.7 1.9.7-4.1-3-2.9 4.2-.7z"/></svg>
                  ))}
                </div>
                <p className="text-[15px] leading-relaxed flex-1" style={{ color: "#403B36" }}>"{t.quote}"</p>
                <div className="flex items-center gap-3 pt-4" style={{ borderTop: "1px solid #F2E5D5" }}>
                  <div className="w-9 h-9 rounded-lg shrink-0" style={{ background: "#E8E4DF" }} />
                  <div>
                    <p className="text-sm font-bold text-[#2B2E33]">{t.name}</p>
                    <p className="text-xs" style={{ color: "#8C8882" }}>{t.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Trust & Compliance ────────────────────────────────── */}
      <section className="w-full py-24" style={{ background: "#FFFDFA" }}>
        <div className="max-w-[1200px] mx-auto px-6">
          <div className="flex flex-col items-center text-center mb-16">
            <div className="inline-flex items-center px-4 py-1.5 font-semibold mb-4" style={{ background: "#F2E5D5", color: "#4A4540", borderRadius: 999, fontSize: 13, border: "1px solid #EAD5C0" }}>
              Security & compliance
            </div>
            <h2 className="text-[56px] font-bold leading-[1.15] tracking-tight text-[#2B2E33]" style={{ fontFamily: "var(--font-heading)" }}>
              Student data is safe<br />with AbleSpace
            </h2>
            <p className="font-normal mt-4" style={{ color: "#595550", fontSize: 18, maxWidth: 520 }}>
              We take compliance seriously so your district doesn't have to. AbleSpace is built to the highest standards of student data security.
            </p>
          </div>

          {/* Badges */}
          <div className="flex items-center justify-center gap-8 mb-16 flex-wrap">
            <Image src="/concept-4/icons/security/ferpa.png" alt="FERPA Compliant" width={120} height={48} className="h-12 w-auto" style={{ filter: "brightness(0)", opacity: 0.5 }} />
            <Image src="/concept-4/icons/security/hipaa.png" alt="HIPAA" width={120} height={48} className="h-12 w-auto" style={{ filter: "brightness(0)", opacity: 0.5 }} />
            <Image src="/concept-4/icons/security/iso-27001.png" alt="ISO 27001" width={120} height={48} className="h-12 w-auto" style={{ filter: "brightness(0)", opacity: 0.5 }} />
          </div>

          {/* Feature grid */}
          <div className="grid grid-cols-3 gap-5">
            {[
              { heading: "End-to-End Encryption", desc: "All student data is encrypted in transit and at rest using AES-256 — the same standard used by banks." },
              { heading: "Role-Based Access", desc: "Control exactly who can see what. Providers only access their own caseload. Admins get the full picture." },
              { heading: "IDEA & FERPA Aligned", desc: "Every feature is designed with federal special education law in mind. Stay compliant without thinking about it." },
              { heading: "SOC 2 Type II Certified", desc: "Independently audited security controls — so your IT department can approve AbleSpace with confidence." },
              { heading: "99.9% Uptime SLA", desc: "Built on enterprise infrastructure. Your team can always access the data they need, when they need it." },
              { heading: "Data Residency Controls", desc: "Choose where your district's data is stored. Required for many state-level compliance frameworks." },
            ].map(({ heading, desc }) => (
              <div key={heading} className="rounded-2xl p-7" style={{ background: PAGE_BG, border: "1px solid rgba(225,224,223,0.5)" }}>
                <h3 className="text-[17px] font-bold text-[#2B2E33] mb-2" style={{ fontFamily: "var(--font-heading)" }}>{heading}</h3>
                <p className="text-sm leading-relaxed" style={{ color: "#595550" }}>{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Final CTA ─────────────────────────────────────────── */}
      <section className="w-full py-32 relative overflow-hidden" style={{ background: "#1C1A17", borderRadius: 44 }}>
        <div className="absolute inset-0 pointer-events-none" style={{ opacity: 0.2, backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`, backgroundRepeat: "repeat", backgroundSize: "128px 128px" }} />
        <div className="relative z-10 max-w-[860px] mx-auto px-6 flex flex-col items-center text-center">
          <p className="text-sm font-bold uppercase tracking-widest mb-6" style={{ color: "#D9614C" }}>Start your free trial today</p>
          <h2 className="text-[64px] font-bold leading-[1.1] tracking-tight mb-6" style={{ fontFamily: "var(--font-heading)", color: "#FFFDFA" }}>
            Your students deserve<br />better than spreadsheets.
          </h2>
          <p className="text-lg leading-relaxed mb-10" style={{ color: "#9E9590", maxWidth: 520 }}>
            Join 20,000+ special education professionals who've taken back their evenings, their weekends, and their passion for the work.
          </p>
          <div className="relative z-[10000]">
            <HeroCTAs primaryBg="#D9614C" primaryText="#FFFDFA" secondaryBg="#FFFFFF14" secondaryText="#FFFDFA" />
          </div>
          <p className="mt-6 text-sm" style={{ color: "#6B6560" }}>Free 14-day trial · No credit card required · Cancel anytime</p>
        </div>
      </section>

      </section>
    </main>
    </>
  );
}
