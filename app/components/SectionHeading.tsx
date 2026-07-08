export default function SectionHeading({
  index,
  title,
}: {
  index: string;
  title: string;
}) {
  return (
    <div className="mb-12 flex items-center gap-4">
      <span className="font-mono text-sm text-cyan-400">{index}.</span>
      <h2 className="text-3xl sm:text-4xl font-bold text-slate-50">{title}</h2>
      <div className="h-px flex-1 bg-gradient-to-r from-slate-700 to-transparent" />
    </div>
  );
}
