"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";

const CARDS = [
  { num: "01", title: "Capture", desc: "Easily log student data during sessions—no paperwork, no friction.", img: "/assets/illustrations/process-1.svg" },
  { num: "02", title: "Analyze", desc: "Automatically generate graphs, reports, and insights in seconds.", img: "/assets/illustrations/process-2.svg" },
  { num: "03", title: "Improve", desc: "Track progress, spot trends, & make smarter decisions for students.", img: "/assets/illustrations/process-3.svg" },
];

export default function HowItWorksSection() {
  const wrapperRef = useRef<HTMLDivElement>(null);
  const headingRef = useRef<HTMLDivElement>(null);
  const cardRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const wrapper = wrapperRef.current;
    if (!wrapper) return;

    const onScroll = () => {
      const rect = wrapper.getBoundingClientRect();
      const totalScroll = wrapper.offsetHeight - window.innerHeight;
      const progress = Math.max(0, Math.min(1, -rect.top / totalScroll));

      // Heading fades + rises in
      if (headingRef.current) {
        const p = Math.min(1, progress * 4);
        headingRef.current.style.opacity = String(p);
        headingRef.current.style.transform = `translateY(${(1 - p) * 32}px)`;
      }

      // Cards stagger in
      cardRefs.current.forEach((card, i) => {
        if (!card) return;
        const delay = i * 0.15;
        const p = Math.min(1, Math.max(0, (progress - delay) * 4));
        card.style.opacity = String(p);
        card.style.transform = `translateY(${(1 - p) * 48}px)`;
      });
    };

    // Set initial hidden state
    if (headingRef.current) {
      headingRef.current.style.opacity = "0";
      headingRef.current.style.transform = "translateY(32px)";
    }
    cardRefs.current.forEach((card) => {
      if (!card) return;
      card.style.opacity = "0";
      card.style.transform = "translateY(48px)";
    });

    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div ref={wrapperRef} style={{ height: "200vh" }} className="relative">
      <div
        className="sticky top-0 w-full h-screen flex items-center dark-section"
        style={{ background: "#31302E" }}
      >
        {/* Noise */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            opacity: 0.2,
            backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`,
            backgroundRepeat: "repeat",
            backgroundSize: "128px 128px",
          }}
        />

        <div className="relative z-10 w-full max-w-[1200px] mx-auto px-6 flex flex-col items-center text-center">
          {/* Heading */}
          <div ref={headingRef} style={{ transition: "opacity 0.1s, transform 0.1s", willChange: "transform, opacity" }}>
            <h2
              className="text-[56px] font-extrabold leading-[1.15] tracking-tight"
              style={{ fontFamily: "var(--font-heading)" }}
            >
              How AbleSpace <span className="font-black">Works</span>
            </h2>
            <p className="font-medium mt-4 mb-16" style={{ color: "#9E9590", fontSize: 20, maxWidth: 720 }}>
              From capturing session data to generating meaningful insights, seamlessly track student progress and identify trends that help improve outcomes.
            </p>
          </div>

          {/* Cards */}
          <div className="grid grid-cols-3 gap-4 w-full">
            {CARDS.map(({ num, title, desc, img }, i) => (
              <div
                key={num}
                ref={(el) => { cardRefs.current[i] = el; }}
                className="rounded-3xl p-8 flex flex-col items-center text-center"
                style={{ background: "#F8EEE2", transition: "opacity 0.1s, transform 0.1s", willChange: "transform, opacity" }}
              >
                <div className="flex flex-col items-center mb-10">
                  <span className="font-semibold" style={{ color: "#9E9590", marginBottom: 2, fontSize: 17 }}>{num}</span>
                  <h3
                    className="text-[28px] font-extrabold leading-[1.15] tracking-tight"
                    style={{ fontFamily: "var(--font-heading)", color: "#1C1A17" }}
                  >
                    {title}
                  </h3>
                </div>
                <div className="flex flex-col items-center">
                  <Image src={img} alt={title} width={180} height={180} className="mb-4" />
                  <p className="font-medium leading-relaxed" style={{ color: "#595550", fontSize: 17 }}>{desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
