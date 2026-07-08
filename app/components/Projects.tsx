import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";

const projects = [
  {
    name: "Qwodel",
    url: "https://qwodel.com",
    label: "qwodel.com",
    tagline: "AI Model Quantization Platform",
    description:
      "An artifact-first orchestration platform that quantizes and optimizes AI models at scale — multi-GPU workflows, fused kernels, runtime estimation, accuracy tracking, and deterministic pipelines producing portable, audit-ready model artifacts.",
    tags: ["AI Infrastructure", "Orchestration", "Multi-GPU", "Next.js", "NestJS"],
    accent: "from-cyan-500/20 to-transparent",
    icon: "◈",
  },
  {
    name: "MVPSuites",
    url: "https://mvpsuites.com",
    label: "mvpsuites.com",
    tagline: "Premium Event Ticketing Platform",
    description:
      "An end-to-end booking platform for premium VIP tickets and suites across concerts, sports, and theater. Full backend, frontend, booking flows, and infrastructure — designed, built, and shipped solo.",
    tags: ["Full-Stack", "Bookings", "Payments", "PostgreSQL"],
    accent: "from-violet-500/20 to-transparent",
    icon: "◍",
  },
  {
    name: "Remote Verilog Lab",
    url: "https://anmaya.in",
    label: "anmaya.in",
    tagline: "Hardware Lab as a Service",
    description:
      "A remote laboratory platform used by engineering colleges: ECE students compile Verilog on server infrastructure, execute it on real Raspberry Pi hardware, and watch LED outputs over a live video feed — real hardware, from anywhere.",
    tags: ["Raspberry Pi", "Verilog", "Live Video", "Real-Time"],
    accent: "from-pink-500/20 to-transparent",
    icon: "⬡",
  },
];

export default function Projects() {
  return (
    <section id="projects" className="mx-auto max-w-6xl px-5 py-24">
      <Reveal>
        <SectionHeading index="03" title="Flagship Projects" />
      </Reveal>
      <div className="grid gap-6 lg:grid-cols-3">
        {projects.map((project, i) => (
          <Reveal key={project.name} delay={i * 120}>
            <a
              href={project.url}
              target="_blank"
              rel="noopener noreferrer"
              className="glass glass-hover group flex h-full flex-col rounded-2xl p-7"
            >
              <div
                className={`mb-6 flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br ${project.accent} border border-slate-700/60 text-2xl text-cyan-300`}
              >
                {project.icon}
              </div>
              <div className="flex items-center justify-between">
                <h3 className="text-xl font-semibold text-slate-100 group-hover:text-cyan-300 transition-colors">
                  {project.name}
                </h3>
                <span className="text-slate-500 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1 group-hover:text-cyan-300">
                  ↗
                </span>
              </div>
              <p className="mt-1 font-mono text-xs text-cyan-400/80">
                {project.label}
              </p>
              <p className="mt-2 text-sm font-medium text-slate-300">
                {project.tagline}
              </p>
              <p className="mt-3 flex-1 text-sm leading-relaxed text-slate-400">
                {project.description}
              </p>
              <div className="mt-6 flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-full border border-slate-700/80 bg-slate-800/40 px-3 py-1 font-mono text-xs text-slate-300"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </a>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
