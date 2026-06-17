import { stack } from "@/lib/content";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";

export default function Stack() {
  return (
    <section id="stack" className="mx-auto max-w-5xl scroll-mt-24 px-6 py-24">
      <Reveal>
        <SectionHeading
          index="03"
          command="stack --ls"
          title="Arquitectura & Stack"
        />
      </Reveal>

      <div className="grid gap-5 md:grid-cols-3">
        {stack.map((category, i) => (
          <Reveal key={category.label} delay={i * 0.08}>
            <div className="h-full rounded-xl border border-border bg-surface/50 p-6 transition-colors hover:border-muted/60">
              <div className="mb-4 flex items-baseline gap-2 font-mono text-sm">
                <span className="text-accent">$</span>
                <span className="text-muted">{category.command}</span>
              </div>
              <h3 className="mb-4 text-lg font-medium text-fg">
                {category.label}
              </h3>
              <ul className="flex flex-wrap gap-2">
                {category.items.map((item) => (
                  <li
                    key={item}
                    className="rounded-md border border-border bg-surface-2 px-3 py-1.5 font-mono text-[13px] text-muted"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
