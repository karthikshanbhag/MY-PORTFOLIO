export default function Footer() {
  return (
    <footer className="border-t border-slate-800/70">
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-2 px-5 py-8 text-center">
        <p className="font-mono text-xs text-slate-500">
          Designed &amp; built by{" "}
          <span className="text-cyan-400">Karthik Shanbhag</span>
        </p>
        <p className="font-mono text-xs text-slate-600">
          © {new Date().getFullYear()} — Next.js · Tailwind CSS
        </p>
      </div>
    </footer>
  );
}
