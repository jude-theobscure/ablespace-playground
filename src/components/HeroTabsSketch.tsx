"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";

const TABS = [
  { label: "IEP Goal\nTracking",         icon: "/concept-2/icons/IEP Goal Tracking.svg" },
  { label: "Services &\nAccommodations", icon: "/concept-2/icons/Services & Accommodations.svg" },
  { label: "Reports &\nProgress",        icon: "/concept-2/icons/Reports.svg" },
  { label: "Calendar &\nScheduling",     icon: "/concept-2/icons/Scheduling.svg" },
  { label: "Admin Tools &\nCompliance",  icon: "/concept-2/icons/Admin Tools & Compliance.svg" },
];

interface HeroTabsSketchProps {
  onTabChange?: (index: number) => void;
}

export default function HeroTabsSketch({ onTabChange }: HeroTabsSketchProps) {
  const [active, setActive] = useState(0);
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null);

  const resetTimer = () => {
    if (timerRef.current) clearInterval(timerRef.current);
    timerRef.current = setInterval(() => {
      setActive(prev => {
        const next = prev === TABS.length - 1 ? 0 : prev + 1;
        setTimeout(() => onTabChange?.(next), 0);
        return next;
      });
    }, 7000);
  };

  useEffect(() => {
    resetTimer();
    return () => { if (timerRef.current) clearInterval(timerRef.current); };
  }, []);

  const handleTabChange = (index: number) => {
    setActive(index);
    onTabChange?.(index);
    resetTimer();
  };

  return (
    <div className="mt-24 w-full max-w-[720px] mx-auto flex items-start justify-between gap-4">
      {TABS.map((tab, i) => (
        <button
          key={tab.label}
          onClick={() => handleTabChange(i)}
          className="flex flex-col items-center gap-3 flex-1"
        >
          <Image
            src={tab.icon}
            alt={tab.label}
            width={52}
            height={52}
            className={`w-10 h-10 transition-opacity duration-200 ${active === i ? "opacity-100" : "opacity-40"}`}
          />
          <span
            className={`text-[13px] text-center leading-snug transition-colors duration-200 whitespace-pre-line ${
              active === i ? "font-bold text-[#403830]" : "font-medium text-[#8C857F]"
            }`}
          >
            {tab.label}
          </span>
        </button>
      ))}
    </div>
  );
}
