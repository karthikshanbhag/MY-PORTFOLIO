import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";

const jobs = [
  {
    company: "Qwodel",
    role: "Software Engineer",
    period: "Jan 2026 — Present",
    points: [
      "Built Qwodel.com, an artifact-first AI model quantization orchestration platform for large-scale quantization and optimization of AI models.",
      "Designed the core orchestration engine supporting multi-GPU workflows, fused kernels, runtime estimation, accuracy tracking, and deterministic pipelines.",
      "Developed infrastructure for portable, versioned, audit-ready model artifacts deployable across cloud, on-prem, or edge.",
    ],
    tags: ["AI Infrastructure", "Orchestration", "Multi-GPU"],
  },
  {
    company: "Redrhynos",
    role: "Software Engineer",
    period: "Jan 2026 — Present",
    points: [
      "Developed MVPSuites.com, an end-to-end booking platform for premium VIP tickets and suites — concerts, sports, and theater.",
      "Built the full backend, frontend, booking logic, and infrastructure from scratch, enabling secure online bookings.",
    ],
    tags: ["Full-Stack", "Bookings", "Payments"],
  },
  {
    company: "Anmaya.in",
    role: "Software Engineer",
    period: "Jan 2026 — Present",
    points: [
      "Independently built a remote laboratory platform adopted by multiple engineering colleges for ECE students.",
      "Students compile Verilog on server infrastructure that executes on real Raspberry Pi hardware, with a live video feed of LED outputs.",
      "Owned the full stack: compilation pipeline, hardware integration, and real-time video streaming.",
    ],
    tags: ["Hardware", "Real-Time Video", "Verilog"],
  },
  {
    company: "UniCourt India",
    role: "Software Engineer",
    period: "Aug 2024 — Present",
    points: [
      "Core engineer on UniCourt's enterprise API SaaS platform for litigation data, analytics, and AI-powered docket extraction from 4000+ US courts.",
      "Built scalable backend services with NestJS v11, PostgreSQL, Redis, RabbitMQ, Bull queues, and NATS for high-throughput event processing.",
      "Cut average API response times by 80% through query and API-logic optimization.",
      "Designed Redis-based real-time systems: TTL connection tracking, WebSocket lifecycle management, Lua scripts, and distributed locking.",
      "Shipped product-facing UI with Next.js and Shadcn; ran event-driven workloads on Kubernetes.",
    ],
    tags: ["NestJS", "PostgreSQL", "NATS JetStream", "Kubernetes"],
  },
];

export default function Experience() {
  return (
    <section id="experience" className="mx-auto max-w-6xl px-5 py-24">
      <Reveal>
        <SectionHeading index="02" title="Experience" />
      </Reveal>
      <div className="relative ml-2 border-l border-slate-800 pl-8 space-y-12">
        {jobs.map((job, i) => (
          <Reveal key={job.company} delay={i * 100}>
            <div className="timeline-dot relative">
              <div className="flex flex-wrap items-baseline justify-between gap-2">
                <h3 className="text-xl font-semibold text-slate-100">
                  {job.role}{" "}
                  <span className="text-cyan-300">@ {job.company}</span>
                </h3>
                <span className="font-mono text-xs text-slate-500">
                  {job.period}
                </span>
              </div>
              <ul className="mt-4 space-y-2">
                {job.points.map((point) => (
                  <li key={point} className="flex gap-3 text-sm leading-relaxed text-slate-400">
                    <span className="mt-1 shrink-0 text-cyan-500">▹</span>
                    {point}
                  </li>
                ))}
              </ul>
              <div className="mt-4 flex flex-wrap gap-2">
                {job.tags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-full border border-slate-700/80 bg-slate-800/40 px-3 py-1 font-mono text-xs text-slate-300"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
