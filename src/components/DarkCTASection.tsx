"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import HeroCTAs from "@/components/HeroCTAs";

export default function DarkCTASection() {
  const screenshotRef = useRef<HTMLDivElement>(null);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = screenshotRef.current;
    if (!el) return;

    // Entrance
    el.style.opacity = "0";
    el.style.transform = "perspective(1200px) rotateX(8deg) rotateY(-4deg) translateY(24px)";
    const timeout = setTimeout(() => {
      el.style.transition = "all 1.4s cubic-bezier(0.16, 1, 0.3, 1)";
      el.style.opacity = "1";
      el.style.transform = "perspective(1200px) rotateX(4deg) rotateY(-2deg) translateY(0px)";
    }, 300);

    const handleMouseMove = (e: MouseEvent) => {
      const section = sectionRef.current;
      if (!section) return;
      const rect = section.getBoundingClientRect();
      const cx = rect.left + rect.width / 2;
      const cy = rect.top + rect.height / 2;
      const dx = (e.clientX - cx) / rect.width;
      const dy = (e.clientY - cy) / rect.height;
      el.style.transition = "transform 0.3s ease";
      el.style.transform = `perspective(1200px) rotateX(${4 - dy * 5}deg) rotateY(${-2 + dx * 5}deg)`;
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      clearTimeout(timeout);
    };
  }, []);

  return (
    <div style={{ height: "180vh" }} className="relative">
      <div
        ref={sectionRef}
        className="sticky top-0 w-full h-screen overflow-hidden flex flex-col items-center justify-center"
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

        <div className="relative z-10 w-full max-w-[900px] mx-auto px-6 flex flex-col items-center text-center">
          {/* Text */}
          <h2
            className="font-bold leading-[1.1] tracking-tight mb-3"
            style={{ fontFamily: "var(--font-montserrat)", color: "#FFFDFA", fontSize: 48 }}
          >
            <span className="font-extrabold italic">Collect</span> Data in Seconds
          </h2>
          <p className="text-base mb-8 max-w-md" style={{ color: "#9E9590" }}>
            One click, instant capture. AbleSpace makes IEP data collection so fast it disappears into your workflow.
          </p>

          <div className="relative z-[10000]">
            <HeroCTAs
              primaryBg="#D9614C"
              primaryText="#FFFDFA"
              secondaryBg="#3E3C39"
              secondaryText="#FFFDFA"
              secondaryBorder="#5A5854"
            />
          </div>

          {/* Screenshot */}
          <div className="mt-10 w-full">
            <div
              ref={screenshotRef}
              style={{ willChange: "transform" }}
            >
              <Image
                src="/assets/screenshots/data-collection.png"
                alt="Data collection"
                width={900}
                height={580}
                className="w-full h-auto rounded-xl"
                style={{
                  boxShadow: "0 24px 64px rgba(0,0,0,0.5), 0 0 0 1px rgba(255,255,255,0.07)",
                }}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
