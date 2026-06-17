type SectionHeadingProps = {
  index: string;
  command: string;
  title: string;
};

// Terminal-style section header: index marker + mono command + title.
export default function SectionHeading({
  index,
  command,
  title,
}: SectionHeadingProps) {
  return (
    <div className="mb-10 flex flex-col gap-3">
      <div className="flex items-center gap-3 font-mono text-sm">
        <span className="text-accent">{index}</span>
        <span className="text-muted">~/ {command}</span>
      </div>
      <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">
        {title}
      </h2>
      <div className="h-px w-full bg-border" />
    </div>
  );
}
