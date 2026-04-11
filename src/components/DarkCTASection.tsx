"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import HeroCTAs from "@/components/HeroCTAs";

export default function DarkCTASection() {
  const canvasRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    // Entrance animation
    canvas.style.opacity = "0";
    canvas.style.transform = "rotateX(6deg) rotateY(-6deg) scale(0.96)";
    const timeout = setTimeout(() => {
      canvas.style.transition = "all 1.6s cubic-bezier(0.16, 1, 0.3, 1)";
      canvas.style.opacity = "1";
      canvas.style.transform = "rotateX(2deg) rotateY(-2deg) scale(1)";
    }, 200);

    const handleMouseMove = (e: MouseEvent) => {
      const x = (window.innerWidth / 2 - e.pageX) / 40;
      const y = (window.innerHeight / 2 - e.pageY) / 40;
      canvas.style.transition = "transform 0.4s ease";
      canvas.style.transform = `rotateX(${2 + y * 0.4}deg) rotateY(${-2 - x * 0.4}deg)`;
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      clearTimeout(timeout);
    };
  }, []);

  return (
    <div style={{ height: "160vh" }} className="relative">
      <section
        className="sticky top-0 w-full h-screen flex flex-col items-center justify-center overflow-hidden"
        style={{ background: "#31302E" }}
      >
        {/* Noise overlay */}
        <div
          className="absolute inset-0 pointer-events-none z-0"
          style={{
            opacity: 0.25,
            backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`,
            backgroundRepeat: "repeat",
            backgroundSize: "128px 128px",
          }}
        />

        <div className="relative z-10 max-w-[1200px] mx-auto px-6 flex flex-col items-center text-center">
          <h2
            className="text-[60px] font-bold leading-[1.1] tracking-tight whitespace-nowrap mb-4"
            style={{ fontFamily: "var(--font-montserrat)", color: "#FFFDFA" }}
          >
            <span className="font-extrabold italic">Collect</span> Data in Seconds
          </h2>
          <p className="text-lg mb-8 max-w-lg" style={{ color: "#B8AFA8" }}>
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

          {/* 3D Screenshot */}
          <div className="mt-12" style={{ perspective: "1400px" }}>
            <div
              ref={canvasRef}
              style={{
                transformStyle: "preserve-3d",
                willChange: "transform",
              }}
            >
              <Image
                src="/assets/screenshots/data-collection.png"
                alt="Data collection"
                width={860}
                height={560}
                className="rounded-xl"
                style={{
                  boxShadow: "0 32px 80px rgba(0,0,0,0.5), 0 0 0 1px rgba(255,255,255,0.06)",
                }}
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
