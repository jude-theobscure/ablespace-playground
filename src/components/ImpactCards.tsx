"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

const STATS = [
  { icon: "🧠", text: "20,000+ Progress Notes Generated" },
  { icon: "📋", text: "35,000+ Reports Generated" },
  { icon: "🎯", text: "48,000+ IEP Goals Tracked" },
  { icon: "🏫", text: "1,200+ Schools Onboarded" },
  { icon: "⏱️", text: "3hrs Saved Per Educator Weekly" },
];

export default function ImpactCards() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex(i => (i + 1) % STATS.length);
    }, 2800);
    return () => clearInterval(interval);
  }, []);

  const prev1 = (index - 1 + STATS.length) % STATS.length;
  const prev2 = (index - 2 + STATS.length) % STATS.length;

  return (
    <div className="relative flex items-center justify-center mb-10" style={{ height: "60px", width: "360px" }}>
      {/* Shadow card 2 (furthest back) */}
      <motion.div
        key={`s2-${prev2}`}
        className="absolute w-full px-5 py-3.5 rounded-2xl bg-[#1C1C1E] border border-white/10"
        animate={{ y: 14, scale: 0.88, opacity: 0.2 }}
        transition={{ type: "spring", damping: 30, stiffness: 300 }}
        style={{ zIndex: 1 }}
      />

      {/* Shadow card 1 */}
      <motion.div
        key={`s1-${prev1}`}
        className="absolute w-full px-5 py-3.5 rounded-2xl bg-[#1C1C1E] border border-white/10"
        animate={{ y: 7, scale: 0.94, opacity: 0.45 }}
        transition={{ type: "spring", damping: 30, stiffness: 300 }}
        style={{ zIndex: 2 }}
      />

      {/* Active card */}
      <AnimatePresence mode="popLayout">
        <motion.div
          key={index}
          className="absolute w-full flex items-center gap-3 px-5 py-3.5 rounded-2xl bg-[#1C1C1E] border border-white/10"
          initial={{ y: 36, opacity: 0, scale: 0.96 }}
          animate={{ y: 0, opacity: 1, scale: 1 }}
          exit={{ y: -20, opacity: 0, scale: 0.98 }}
          transition={{ type: "spring", damping: 28, stiffness: 320 }}
          style={{ zIndex: 10 }}
        >
          <span className="text-base">{STATS[index].icon}</span>
          <span className="text-white text-sm font-medium tracking-wide">{STATS[index].text}</span>
        </motion.div>
      </AnimatePresence>
    </div>
  );
}
