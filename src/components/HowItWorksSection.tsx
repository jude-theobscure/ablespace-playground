"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";

const CARDS = [
  { num: "01", title: "Capture", desc: "Easily log student data during sessions—no paperwork, no friction.", img: "/common/illustrations/process-1.svg", rotate: -3, bg: "#F8EEE2", speed: 0.06 },
  { num: "02", title: "Analyze", desc: "Automatically generate graphs, reports, and insights in seconds.", img: "/common/illustrations/process-2.svg", rotate: 1.5, bg: "#F6E7D5", speed: 0.10 },
  { num: "03", title: "Improve", desc: "Track progress, spot trends, & make smarter decisions for students.", img: "/common/illustrations/process-3.svg", rotate: -2, bg: "#F8EEE2", speed: 0.07 },
];

export default function HowItWorksSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const cardRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const onScroll = () => {
      const rect = section.getBoundingClientRect();
      const sectionCenter = rect.top + rect.height / 2;
      const viewportCenter = window.innerHeight / 2;
      const offset = sectionCenter - viewportCenter;

      cardRefs.current.forEach((card, i) => {
        if (!card) return;
        const y = offset * CARDS[i].speed;
        const r = CARDS[i].rotate;
        card.style.transform = `rotate(${r}deg) translateY(${y}px)`;
      });
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <section ref={sectionRef} className="w-full py-[128px] dark-section relative" style={{ background: "#31302E", borderRadius: 44 }}>
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
        <div
          className="inline-flex items-center px-4 py-1.5 font-semibold text-sm mb-4"
          style={{ background: "#4A4540", color: "#F8EEE2", borderRadius: 4 }}
        >
          Simple. Easy. Powerful.
        </div>
        <h2
          className="text-[56px] font-extrabold leading-[1.15] tracking-tight"
          style={{ fontFamily: "var(--font-heading)" }}
        >
          How AbleSpace <span className="font-black">Works</span>
        </h2>
        <p className="font-medium mt-4 mb-12" style={{ color: "#9E9590", fontSize: 20, maxWidth: 720 }}>
          From capturing session data to generating meaningful insights, seamlessly track student progress and identify trends that help improve outcomes.
        </p>

        <div className="grid grid-cols-3 gap-4 w-full">
          {CARDS.map(({ num, title, desc, img, rotate, bg }, i) => (
            <div
              key={num}
              ref={el => { cardRefs.current[i] = el; }}
              className="rounded-3xl p-8 flex flex-col items-center text-center"
              style={{ background: bg, transform: `rotate(${rotate}deg)`, willChange: "transform" }}
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
    </section>
  );
}
