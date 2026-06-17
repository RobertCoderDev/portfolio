import { experience, profile } from "@/lib/content";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";

export default function Experience() {
  return (
    <section
      id="experience"
      className="mx-auto max-w-5xl scroll-mt-24 px-6 py-24"
    >
      <Reveal>
        <SectionHeading
          index="01"
          command="git log --author=roberto"
          title="Trayectoria"
        />
      </Reveal>

      <Reveal>
        <p className="mb-12 max-w-2xl text-pretty text-lg leading-relaxed text-muted">
          {profile.about}
        </p>
      </Reveal>

      <ol className="relative ml-3 border-l border-border">
        {experience.map((item, i) => (
          <li key={item.year} className="relative pl-8 pb-12 last:pb-0">
            <span className="absolute -left-[7px] top-1.5 h-3 w-3 rounded-full border-2 border-accent bg-bg" />
            <Reveal delay={i * 0.08}>
              <div className="flex flex-wrap items-baseline gap-x-3 gap-y-1">
                <span className="font-mono text-sm text-accent">
                  {item.year}
                </span>
                <h3 className="text-lg font-medium text-fg">{item.role}</h3>
              </div>
              <p className="mt-0.5 font-mono text-xs uppercase tracking-wider text-muted">
                {item.org}
              </p>
              <p className="mt-3 max-w-2xl text-pretty leading-relaxed text-muted">
                {item.description}
              </p>
            </Reveal>
          </li>
        ))}
      </ol>
    </section>
  );
}
