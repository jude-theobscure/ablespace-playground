"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import HeroCTAs from "@/components/HeroCTAs";

export default function DarkCTASection() {
  const wrapperRef = useRef<HTMLDivElement>(null);
  const screenshotRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const wrapper = wrapperRef.current;
    const screenshot = screenshotRef.current;
    const text = textRef.current;
    if (!wrapper || !screenshot || !text) return;

    const onScroll = () => {
      const rect = wrapper.getBoundingClientRect();
      const totalHeight = wrapper.offsetHeight - window.innerHeight;
      const scrolled = -rect.top;
      const progress = Math.max(0, Math.min(1, scrolled / totalHeight));

      // Screenshot rises from below as you scroll in
      const screenshotY = 80 - progress * 80;
      screenshot.style.transform = `perspective(1200px) rotateX(${6 - progress * 4}deg) translateY(${screenshotY}px)`;
      screenshot.style.opacity = String(Math.min(1, progress * 2));

      // Text fades in quickly
      text.style.opacity = String(Math.min(1, progress * 3));
      text.style.transform = `translateY(${(1 - Math.min(1, progress * 3)) * 20}px)`;
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();

    // Mouse tilt on screenshot
    const onMouseMove = (e: MouseEvent) => {
      const rect = wrapper.getBoundingClientRect();
      if (rect.top > 0 || rect.bottom < 0) return;
      const cx = rect.left + rect.width / 2;
      const cy = rect.top + window.innerHeight / 2;
      const dx = (e.clientX - cx) / (rect.width / 2);
      const dy = (e.clientY - cy) / (window.innerHeight / 2);
      const totalHeight = wrapper.offsetHeight - window.innerHeight;
      const progress = Math.max(0, Math.min(1, -rect.top / totalHeight));
      const screenshotY = 80 - progress * 80;
      screenshot.style.transition = "transform 0.2s ease";
      screenshot.style.transform = `perspective(1200px) rotateX(${6 - progress * 4 - dy * 3}deg) rotateY(${dx * 4}deg) translateY(${screenshotY}px)`;
    };

    window.addEventListener("mousemove", onMouseMove, { passive: true });

    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("mousemove", onMouseMove);
    };
  }, []);

  return (
    <div ref={wrapperRef} style={{ height: "220vh" }} className="relative">
      <div
        className="sticky top-0 w-full h-screen overflow-hidden flex flex-col items-center justify-start pt-20"
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
          {/* Text group */}
          <div ref={textRef} style={{ opacity: 0, transition: "opacity 0.1s, transform 0.1s" }}>
            <h2
              className="font-bold leading-[1.1] tracking-tight mb-3"
              style={{ fontFamily: "var(--font-montserrat)", color: "#FFFDFA", fontSize: 48 }}
            >
              <span className="font-extrabold italic">Collect</span> Data in Seconds
            </h2>
            <p className="text-base mb-8 max-w-md mx-auto" style={{ color: "#9E9590" }}>
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
          </div>

          {/* Screenshot with parallax */}
          <div
            ref={screenshotRef}
            className="mt-10 w-full"
            style={{
              opacity: 0,
              transform: "perspective(1200px) rotateX(6deg) translateY(80px)",
              willChange: "transform, opacity",
            }}
          >
            <Image
              src="/assets/screenshots/data-collection.png"
              alt="Data collection"
              width={900}
              height={580}
              className="w-full h-auto rounded-xl"
              style={{
                boxShadow: "0 24px 64px rgba(0,0,0,0.6), 0 0 0 1px rgba(255,255,255,0.07)",
              }}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
