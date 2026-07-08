import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";

export default function About() {
  return (
    <section id="about" className="mx-auto max-w-6xl px-5 py-24">
      <Reveal>
        <SectionHeading index="01" title="About" />
      </Reveal>
      <div className="grid gap-10 md:grid-cols-5">
        <Reveal className="md:col-span-3" delay={100}>
          <div className="space-y-4 leading-relaxed text-slate-400">
            <p>
              I&apos;m a Software Development Engineer who likes owning things
              end-to-end — from the first schema migration to the deploy
              pipeline. Over the last 2+ years I&apos;ve independently designed,
              built, and shipped multiple complete production platforms.
            </p>
            <p>
              At <span className="text-cyan-300">UniCourt</span> I work on an
              enterprise API SaaS platform handling litigation data and
              AI-powered docket extraction from 4000+ US courts — high-throughput
              event processing with NestJS, PostgreSQL, Redis, RabbitMQ, and
              NATS JetStream on Kubernetes.
            </p>
            <p>
              Outside of that, I&apos;ve built an{" "}
              <span className="text-cyan-300">AI model quantization platform</span>,
              a <span className="text-cyan-300">VIP event ticketing product</span>,
              and a <span className="text-cyan-300">remote hardware lab</span>{" "}
              used by engineering colleges — each one solo, from scratch, in
              production.
            </p>
          </div>
        </Reveal>
        <Reveal className="md:col-span-2" delay={200}>
          <div className="glass rounded-2xl p-6 font-mono text-sm">
            <p className="text-slate-500 mb-3">// quick_facts.ts</p>
            <p>
              <span className="text-violet-400">const</span>{" "}
              <span className="text-cyan-300">karthik</span> = {"{"}
            </p>
            <div className="pl-5 text-slate-300 space-y-1">
              <p>
                role: <span className="text-emerald-300">&quot;Software Development Engineer&quot;</span>,
              </p>
              <p>
                base: <span className="text-emerald-300">&quot;Mangalore, India&quot;</span>,
              </p>
              <p>
                degree: <span className="text-emerald-300">&quot;B.E. CSE — SMVITM, 2024&quot;</span>,
              </p>
              <p>
                focus: [<span className="text-emerald-300">&quot;backend&quot;</span>,{" "}
                <span className="text-emerald-300">&quot;real-time&quot;</span>,{" "}
                <span className="text-emerald-300">&quot;AI infra&quot;</span>],
              </p>
              <p>
                shipsToProd: <span className="text-violet-400">true</span>,
              </p>
            </div>
            <p>{"};"}</p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
