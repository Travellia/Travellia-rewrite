"use client";

import { useEffect, useState } from "react";
import { Settings, Wrench, Code2 } from "lucide-react";

const tasks = [
  { label: "UI / Design", done: true  },
  { label: "Frontend",    done: true  },
  { label: "Backend",     done: false },
  { label: "Testing",     done: false },
];

export default function UnderConstruction() {
  const [dots, setDots]         = useState("");
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const id = setInterval(() => setDots(d => (d.length >= 3 ? "" : d + ".")), 500);
    return () => clearInterval(id);
  }, []);

  useEffect(() => {
    const id = setInterval(() => {
      setProgress(p => (p >= 100 ? 0 : p + 0.6));
    }, 30);
    return () => clearInterval(id);
  }, []);

  return (
    <div
      className="min-h-screen flex flex-col items-center justify-center overflow-hidden relative"
      style={{ background: "oklch(0.08 0 0)" }}
    >
      {/* grid overlay */}
      <div
        className="absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage:
            "linear-gradient(oklch(1 0 0) 1px, transparent 1px), linear-gradient(90deg, oklch(1 0 0) 1px, transparent 1px)",
          backgroundSize: "48px 48px",
        }}
      />

      {/* ambient glows */}
      <div
        className="absolute top-1/3 left-1/4 w-96 h-96 rounded-full blur-[120px] animate-pulse"
        style={{ background: "oklch(0.7474 0.142 89.95 / 0.12)", animationDuration: "4s" }}
      />
      <div
        className="absolute bottom-1/4 right-1/4 w-80 h-80 rounded-full blur-[100px] animate-pulse"
        style={{ background: "oklch(0.7474 0.142 89.95 / 0.07)", animationDuration: "6s", animationDelay: "2s" }}
      />

      {/* main content */}
      <div className="relative z-10 flex flex-col items-center gap-8 px-6 text-center max-w-2xl w-full">

        {/* brand label */}
        <p
          className="text-xs font-mono tracking-[0.6em] uppercase"
          style={{ color: "oklch(0.7474 0.142 89.95 / 0.7)" }}
        >
          Travellia
        </p>

        {/* icon cluster */}
        <div className="flex items-center gap-3">
          <Settings
            className="w-9 h-9 animate-spin"
            style={{ color: "oklch(0.7474 0.142 89.95)", animationDuration: "4s" }}
          />
          <Wrench
            className="w-5 h-5 animate-bounce"
            style={{ color: "oklch(0.7474 0.142 89.95 / 0.6)", animationDuration: "1.4s" }}
          />
          <Settings
            className="w-6 h-6 animate-spin"
            style={{ color: "oklch(0.7474 0.142 89.95 / 0.5)", animationDuration: "2.5s", animationDirection: "reverse" }}
          />
          <Code2
            className="w-5 h-5 animate-pulse"
            style={{ color: "oklch(0.7474 0.142 89.95 / 0.6)" }}
          />
        </div>

        {/* heading */}
        <div className="flex flex-col items-center gap-1">
          <h1
            className="text-5xl sm:text-6xl md:text-7xl font-bold tracking-tight leading-tight"
            style={{ color: "oklch(0.95 0 0)" }}
          >
            Site Under
          </h1>
          <div className="flex items-end gap-2">
            <h1
              className="text-5xl sm:text-6xl md:text-7xl font-bold tracking-tight leading-tight"
              style={{ color: "oklch(0.7474 0.142 89.95)" }}
            >
              Development
            </h1>
            <span
              className="inline-block w-[4px] rounded-sm mb-2 animate-pulse"
              style={{ height: "52px", background: "oklch(0.7474 0.142 89.95)", animationDuration: "0.8s" }}
            />
          </div>
        </div>

        {/* subtitle */}
        <p className="text-base sm:text-lg max-w-sm" style={{ color: "oklch(0.6 0 0)" }}>
          We&apos;re working hard to bring you an amazing travel experience{dots}
        </p>

        {/* progress bar */}
        <div className="w-full max-w-sm flex flex-col gap-2">
          <div
            className="w-full h-[3px] rounded-full overflow-hidden"
            style={{ background: "oklch(0.2 0 0)" }}
          >
            <div
              className="h-full rounded-full transition-all duration-100 relative overflow-hidden"
              style={{ width: `${progress}%`, background: "oklch(0.7474 0.142 89.95)" }}
            >
              <div
                className="absolute inset-0"
                style={{
                  background: "linear-gradient(90deg, transparent 0%, oklch(1 0 0 / 0.4) 50%, transparent 100%)",
                  animation: "shimmer 1.2s infinite",
                }}
              />
            </div>
          </div>
          <p className="text-xs font-mono text-right" style={{ color: "oklch(0.45 0 0)" }}>
            {Math.round(progress)}%
          </p>
        </div>

        {/* task status row */}
        <div className="flex flex-wrap justify-center gap-x-6 gap-y-3 mt-1">
          {tasks.map(({ label, done }, i) => (
            <div key={label} className="flex items-center gap-2">
              <span
                className="w-2 h-2 rounded-full"
                style={{
                  background: done ? "oklch(0.7474 0.142 89.95)" : "oklch(0.4 0 0)",
                  boxShadow: done ? "0 0 6px oklch(0.7474 0.142 89.95 / 0.8)" : "none",
                  animation: !done ? `ping-slow 1.8s ${i * 0.4}s infinite` : "none",
                }}
              />
              <span
                className="text-sm font-mono"
                style={{ color: done ? "oklch(0.7474 0.142 89.95)" : "oklch(0.4 0 0)" }}
              >
                {label}
              </span>
              {done && (
                <span className="text-xs" style={{ color: "oklch(0.7474 0.142 89.95 / 0.6)" }}>✓</span>
              )}
            </div>
          ))}
        </div>

        {/* terminal line */}
        <div
          className="w-full max-w-sm rounded-lg px-4 py-3 font-mono text-xs text-left"
          style={{ background: "oklch(0.12 0 0)", color: "oklch(0.5 0 0)" }}
        >
          <span style={{ color: "oklch(0.7474 0.142 89.95 / 0.7)" }}>$ </span>
          <span style={{ color: "oklch(0.65 0 0)" }}>npm run build</span>
          <span className="animate-pulse">▍</span>
        </div>
      </div>

      <style>{`
        @keyframes shimmer {
          0%   { transform: translateX(-100%); }
          100% { transform: translateX(200%); }
        }
        @keyframes ping-slow {
          0%, 100% { opacity: 0.3; transform: scale(1); }
          50%       { opacity: 1;   transform: scale(1.4); }
        }
      `}</style>
    </div>
  );
}
