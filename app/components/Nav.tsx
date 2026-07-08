"use client";

import { useState } from "react";

const links = [
  { href: "#about", label: "About" },
  { href: "#experience", label: "Experience" },
  { href: "#projects", label: "Projects" },
  { href: "#skills", label: "Skills" },
  { href: "#contact", label: "Contact" },
];

export default function Nav() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed top-0 inset-x-0 z-50">
      <div className="mx-auto max-w-6xl px-5">
        <nav className="glass mt-4 flex items-center justify-between rounded-2xl px-5 py-3">
          <a href="#home" className="font-mono text-sm tracking-widest">
            <span className="text-cyan-400">&lt;</span>
            <span className="text-slate-100 font-semibold">KS</span>
            <span className="text-cyan-400"> /&gt;</span>
          </a>

          <div className="hidden md:flex items-center gap-8">
            {links.map((link, i) => (
              <a
                key={link.href}
                href={link.href}
                className="group text-sm text-slate-400 hover:text-cyan-300 transition-colors"
              >
                <span className="font-mono text-cyan-500/70 mr-1 text-xs">
                  0{i + 1}.
                </span>
                {link.label}
              </a>
            ))}
            <a
              href="/resume.pdf"
              target="_blank"
              className="rounded-lg border border-cyan-500/40 px-4 py-1.5 text-sm text-cyan-300 hover:bg-cyan-500/10 transition-colors"
            >
              Resume
            </a>
          </div>

          <button
            onClick={() => setOpen(!open)}
            className="md:hidden text-slate-300"
            aria-label="Toggle menu"
          >
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              {open ? (
                <path d="M18 6 6 18M6 6l12 12" />
              ) : (
                <path d="M4 7h16M4 12h16M4 17h16" />
              )}
            </svg>
          </button>
        </nav>

        {open && (
          <div className="glass md:hidden mt-2 rounded-2xl px-5 py-4 flex flex-col gap-4">
            {links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="text-sm text-slate-300 hover:text-cyan-300"
              >
                {link.label}
              </a>
            ))}
            <a
              href="/resume.pdf"
              target="_blank"
              className="text-sm text-cyan-300"
            >
              Resume ↗
            </a>
          </div>
        )}
      </div>
    </header>
  );
}
