import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";

const socials = [
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/karthik-shanbhag-9339631bb",
  },
  {
    label: "Instagram",
    href: "https://www.instagram.com/karthik__shanbhag/",
  },
  {
    label: "Email",
    href: "mailto:karthikshanbhag969@gmail.com",
  },
];

export default function Contact() {
  return (
    <section id="contact" className="mx-auto max-w-6xl px-5 py-24">
      <Reveal>
        <SectionHeading index="05" title="Get In Touch" />
      </Reveal>
      <div className="grid gap-10 md:grid-cols-2">
        <Reveal delay={100}>
          <div>
            <p className="leading-relaxed text-slate-400">
              I&apos;m open to interesting problems — especially anything
              involving backend systems, real-time infrastructure, or AI
              platforms. Drop a message and I&apos;ll get back to you.
            </p>
            <div className="mt-8 space-y-4 font-mono text-sm">
              <p className="text-slate-300">
                <span className="text-cyan-400 mr-3">@</span>
                karthikshanbhag969@gmail.com
              </p>
              <p className="text-slate-300">
                <span className="text-cyan-400 mr-3">#</span>
                +91 95912 82025
              </p>
            </div>
            <div className="mt-8 flex gap-4">
              {socials.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-lg border border-slate-700 px-4 py-2 text-sm text-slate-300 hover:border-cyan-400/60 hover:text-cyan-300 transition-colors"
                >
                  {social.label} ↗
                </a>
              ))}
            </div>
          </div>
        </Reveal>
        <Reveal delay={200}>
          <form
            action="https://formspree.io/f/meqnyvqy"
            method="POST"
            className="glass rounded-2xl p-7 space-y-5"
          >
            <div>
              <label htmlFor="name" className="mb-1.5 block font-mono text-xs text-slate-400">
                NAME
              </label>
              <input
                type="text"
                id="name"
                name="name"
                required
                className="w-full rounded-lg border border-slate-700 bg-slate-900/60 px-4 py-2.5 text-sm text-slate-100 outline-none focus:border-cyan-400/70 transition-colors"
              />
            </div>
            <div>
              <label htmlFor="email" className="mb-1.5 block font-mono text-xs text-slate-400">
                EMAIL
              </label>
              <input
                type="email"
                id="email"
                name="email"
                required
                className="w-full rounded-lg border border-slate-700 bg-slate-900/60 px-4 py-2.5 text-sm text-slate-100 outline-none focus:border-cyan-400/70 transition-colors"
              />
            </div>
            <div>
              <label htmlFor="message" className="mb-1.5 block font-mono text-xs text-slate-400">
                MESSAGE
              </label>
              <textarea
                id="message"
                name="message"
                rows={4}
                required
                className="w-full resize-none rounded-lg border border-slate-700 bg-slate-900/60 px-4 py-2.5 text-sm text-slate-100 outline-none focus:border-cyan-400/70 transition-colors"
              />
            </div>
            <button
              type="submit"
              className="btn-primary w-full rounded-xl py-3 font-medium text-white"
            >
              Send Message →
            </button>
          </form>
        </Reveal>
      </div>
    </section>
  );
}
