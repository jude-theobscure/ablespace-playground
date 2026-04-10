"use client";

import { useState, useEffect } from "react";
import { motion } from "motion/react";
import Image from "next/image";

const TASKS = [
  { icon: "/concept-2/icons/1. AI Element.svg", text: "35,000+ Reports Generated",  bg: "#FFEEE5", color: "#ED573C" },
  { icon: "/concept-2/icons/2. AI Element.svg", text: "1,200+ Schools Onboarded",    bg: "#FFECF6", color: "#CE4A98" },
  { icon: "/concept-2/icons/3. AI Element.svg", text: "48,000+ IEP Goals Tracked",   bg: "#E5FADD", color: "#759768" },
];

export function AIActivityBar() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const t = setInterval(() => {
      setIndex(i => (i + 1) % TASKS.length);
    }, 2400);
    return () => clearInterval(t);
  }, []);

  const visible = [0, 1, 2].map(offset => ({
    task: TASKS[(index + offset) % TASKS.length],
    offset,
  }));

  return (
    <div style={{ width: 272, maxWidth: "100%", position: "relative", height: 72, margin: "0 auto" }}>
      {[...visible].reverse().map(({ task, offset }) => (
        <motion.div
          key={`${index}-${offset}`}
          animate={{
            y: offset * 12,
            scale: 1 - offset * 0.05,
            opacity: offset === 0 ? 1 : offset === 1 ? 0.55 : 0.25,
            zIndex: 3 - offset,
          }}
          initial={
            offset === 0
              ? { y: 36, scale: 0.9, opacity: 0 }
              : undefined
          }
          transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            background: offset === 0 ? task.bg : "var(--color-neutral-0)",
            border: "none",
            borderRadius: 10,
            padding: "0 16px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            gap: 10,
            boxShadow: offset === 0 ? "var(--shadow-md)" : "none",
            height: 44,
            transformOrigin: "top center",
            pointerEvents: "none",
          }}
        >
          {offset === 0 && (
            <Image
              src={task.icon}
              alt=""
              width={20}
              height={20}
              style={{ flexShrink: 0, width: 20, height: 20 }}
            />
          )}
          <div
            style={{
              overflow: "hidden",
              fontSize: 14,
              fontWeight: 500,
              color: offset === 0 ? task.color : "var(--color-neutral-400)",
              whiteSpace: "nowrap",
              textOverflow: "ellipsis",
              fontFamily: "var(--font-sans)",
              textAlign: "center",
            }}
          >
            {task.text}
          </div>
        </motion.div>
      ))}
    </div>
  );
}
