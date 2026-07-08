import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";

const groups = [
  {
    title: "Languages",
    skills: ["TypeScript", "JavaScript", "Python"],
  },
  {
    title: "Backend",
    skills: ["NestJS", "Node.js", "REST APIs", "Event-Driven Architecture", "WebSockets"],
  },
  {
    title: "Frontend",
    skills: ["React", "Next.js", "Shadcn", "Tailwind CSS"],
  },
  {
    title: "Data & Caching",
    skills: ["PostgreSQL", "Redis", "MongoDB", "Lua Scripts"],
  },
  {
    title: "Messaging & Queues",
    skills: ["RabbitMQ", "NATS JetStream", "Bull"],
  },
  {
    title: "Infrastructure",
    skills: ["Docker", "Kubernetes", "Cloud-Native", "CI/CD"],
  },
];

export default function Skills() {
  return (
    <section id="skills" className="mx-auto max-w-6xl px-5 py-24">
      <Reveal>
        <SectionHeading index="04" title="Skill Matrix" />
      </Reveal>
      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {groups.map((group, i) => (
          <Reveal key={group.title} delay={i * 80}>
            <div className="glass glass-hover h-full rounded-2xl p-6">
              <h3 className="font-mono text-sm tracking-wider text-cyan-400">
                {group.title.toUpperCase()}
              </h3>
              <div className="mt-4 flex flex-wrap gap-2">
                {group.skills.map((skill) => (
                  <span
                    key={skill}
                    className="rounded-lg border border-slate-700/80 bg-slate-800/50 px-3 py-1.5 text-sm text-slate-200"
                  >
                    {skill}
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
