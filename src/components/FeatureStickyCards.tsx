"use client";

import { useRef } from "react";
import { useScroll, useTransform, motion } from "motion/react";
import type { MotionValue } from "motion/react";
import Image from "next/image";
import HeroCTAs from "@/components/HeroCTAs";

export interface FeatureCardData {
  title: string;
  subtext: string;
  screenshotSrc: string;
  bullets: { iconSrc: string; title: string; desc: string }[];
}

function SingleCard({
  data,
  index,
  total,
  progress,
}: {
  data: FeatureCardData;
  index: number;
  total: number;
  progress: MotionValue<number>;
}) {
  // Container is (total + 1) viewports tall → each segment = 1/(total+1)
  const seg = 1 / (total + 1);
  const enterAt = index * seg;
  const enterFrom = index === 0 ? 0 : enterAt - seg * 0.4;

  // Y: entry slide + stack pushback
  const yInputs: number[] = index === 0 ? [0] : [enterFrom, enterAt];
  const yOutputs: string[] = index === 0 ? ["0px"] : ["80px", "0px"];

  for (let j = index + 1; j < total; j++) {
    yInputs.push(j * seg);
    yOutputs.push(`${-(j - index) * 10}px`);
  }
  // Ensure at least 2 keyframes
  if (yInputs.length < 2) { yInputs.push(1); yOutputs.push(yOutputs[0]); }

  // Scale: subtle pushback as later cards arrive
  const scaleInputs: number[] = [enterAt];
  const scaleOutputs: number[] = [1];
  for (let j = index + 1; j < total; j++) {
    scaleInputs.push(j * seg);
    scaleOutputs.push(1 - (j - index) * 0.025);
  }
  if (scaleInputs.length < 2) { scaleInputs.push(1); scaleOutputs.push(1); }

  const y = useTransform(progress, yInputs, yOutputs);
  const scale = useTransform(progress, scaleInputs, scaleOutputs);
  const opacityValue = useTransform(progress, [enterFrom, enterAt], [0, 1]);
  const opacity = index === 0 ? 1 : opacityValue;

  return (
    <motion.div
      className="absolute inset-0"
      style={{ y, scale, opacity, zIndex: index + 1, transformOrigin: "top center" }}
    >
      <div className="max-w-[1200px] mx-auto px-6 h-full">
        <div
          className="rounded-2xl pl-10 pt-10 pb-10 pr-0 overflow-hidden h-full"
          style={{
            background: "#FFFFFF",
            border: "1px solid #ECEDED",
            boxShadow: "0px 8px 16px 0px rgba(173,173,166,0.04)",
          }}
        >
          <div className="flex flex-col md:flex-row gap-12 items-stretch h-full">

            {/* Left */}
            <div className="flex-1 flex flex-col justify-between">
              <div>
                <h2
                  className="text-[32px] font-bold leading-[1.2] tracking-tight text-[#2B2E33] mb-4"
                  style={{ fontFamily: "var(--font-montserrat)" }}
                >
                  {data.title}
                </h2>
                <p className="text-base leading-relaxed text-[#5D636F] max-w-md">
                  {data.subtext}
                </p>
                <div className="-mt-4">
                  <HeroCTAs />
                </div>
              </div>

              <div className="h-[2px] opacity-35" style={{ background: "linear-gradient(to right, #E2E2D9, transparent)" }} />

              <div className="flex flex-col gap-7 max-w-md">
                {data.bullets.map(({ iconSrc, title, desc }) => (
                  <div key={title} className="flex items-center gap-4">
                    <div className="flex items-center justify-center shrink-0">
                      <Image src={iconSrc} alt="" width={32} height={32} />
                    </div>
                    <div>
                      <p className="text-[15px] font-bold text-[#5D636F] mb-1">{title}</p>
                      <p className="text-[15px] text-[#5D636F] leading-relaxed">{desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Right */}
            <div className="flex-1 rounded-none overflow-hidden">
              <Image
                src={data.screenshotSrc}
                alt={data.title}
                width={1200}
                height={800}
                className="w-full h-full object-cover object-left-top"
              />
            </div>

          </div>
        </div>
      </div>
    </motion.div>
  );
}

export default function FeatureStickyCards({ cards }: { cards: FeatureCardData[] }) {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: containerRef });

  return (
    <div
      ref={containerRef}
      style={{ height: `${(cards.length + 1) * 100}vh` }}
      className="relative"
    >
      <div className="sticky top-0 h-screen flex items-center overflow-hidden">
        <div className="relative w-full" style={{ height: 560 }}>
          {cards.map((card, i) => (
            <SingleCard
              key={i}
              data={card}
              index={i}
              total={cards.length}
              progress={scrollYProgress}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
