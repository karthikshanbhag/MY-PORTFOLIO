"use client";

import { useEffect, useState } from "react";

const roles = [
  "scalable SaaS platforms",
  "real-time systems",
  "AI infrastructure",
  "event-driven backends",
  "full-stack products",
];

function useTypewriter() {
  const [text, setText] = useState("");
  const [roleIndex, setRoleIndex] = useState(0);
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const current = roles[roleIndex];
    const speed = deleting ? 40 : 80;

    const tick = setTimeout(() => {
      if (!deleting) {
        const next = current.slice(0, text.length + 1);
        setText(next);
        if (next === current) {
          setTimeout(() => setDeleting(true), 1600);
        }
      } else {
        const next = current.slice(0, text.length - 1);
        setText(next);
        if (next === "") {
          setDeleting(false);
          setRoleIndex((roleIndex + 1) % roles.length);
        }
      }
    }, speed);

    return () => clearTimeout(tick);
  }, [text, deleting, roleIndex]);

  return text;
}

const stats = [
  { value: "2+", label: "years of experience" },
  { value: "4", label: "production platforms shipped" },
  { value: "80%", label: "API latency reduction" },
  { value: "4000+", label: "US courts' data processed" },
];

export default function Hero() {
  const typed = useTypewriter();

  return (
    <section id="home" className="relative flex min-h-screen flex-col justify-center overflow-hidden">
      {/* background layers */}
      <div className="bg-grid absolute inset-0" />
      <div className="aurora absolute -top-32 -left-32 h-[480px] w-[480px] rounded-full bg-cyan-500" />
      <div className="aurora aurora-2 absolute top-1/3 -right-40 h-[520px] w-[520px] rounded-full bg-violet-600" />

      <div className="relative mx-auto w-full max-w-6xl px-5 pt-32 pb-16">
        <p className="font-mono text-sm text-cyan-400 mb-5 tracking-wider">
          // SOFTWARE DEVELOPMENT ENGINEER
        </p>
        <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold tracking-tight text-slate-50">
          Karthik <span className="text-glow">Shanbhag</span>
        </h1>
        <h2 className="mt-6 text-2xl sm:text-3xl font-medium text-slate-400">
          I build{" "}
          <span className="text-slate-100">{typed}</span>
          <span className="cursor-blink text-cyan-400">▍</span>
        </h2>
        <p className="mt-6 max-w-2xl leading-relaxed text-slate-400">
          Engineer with 2+ years of experience designing, building, and shipping
          complete production platforms from scratch — from AI model quantization
          infrastructure to remote hardware labs and enterprise SaaS APIs.
          Deep in NestJS, PostgreSQL, Redis, event-driven architecture, React,
          and Next.js.
        </p>

        <div className="mt-10 flex flex-wrap gap-4">
          <a
            href="#projects"
            className="btn-primary rounded-xl px-7 py-3 font-medium text-white"
          >
            View Projects
          </a>
          <a
            href="/resume.pdf"
            target="_blank"
            className="rounded-xl border border-slate-700 px-7 py-3 font-medium text-slate-200 hover:border-cyan-400/60 hover:text-cyan-300 transition-colors"
          >
            Download Resume ↓
          </a>
        </div>

        <div className="mt-20 grid grid-cols-2 gap-4 sm:grid-cols-4">
          {stats.map((s) => (
            <div key={s.label} className="glass rounded-2xl p-5">
              <div className="text-3xl font-bold text-glow">{s.value}</div>
              <div className="mt-1 text-xs text-slate-400">{s.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
