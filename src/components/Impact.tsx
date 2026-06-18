import { clients, metrics } from "@/lib/content";
import Reveal from "./Reveal";

export default function Impact() {
  return (
    <section className="mx-auto max-w-5xl px-6 py-12">
      <Reveal>
        <div className="rounded-2xl border border-border bg-surface/40 p-8 sm:p-10">
          <dl className="grid grid-cols-2 gap-8 sm:grid-cols-4">
            {metrics.map((metric) => (
              <div
                key={metric.label}
                className="flex flex-col items-center gap-2 text-center"
              >
                <dt className="text-3xl font-semibold tracking-tight text-accent sm:text-4xl">
                  {metric.value}
                </dt>
                <dd className="text-sm leading-snug text-muted">
                  {metric.label}
                </dd>
              </div>
            ))}
          </dl>

          <div className="mt-10 border-t border-border pt-8">
            <span className="font-mono text-xs uppercase tracking-wider text-muted">
              Clientes enterprise
            </span>
            <ul className="mt-5 flex flex-wrap items-center gap-x-8 gap-y-3 sm:justify-between">
              {clients.map((client) => (
                <li
                  key={client}
                  className="text-lg font-medium tracking-tight text-fg/80"
                >
                  {client}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Reveal>
    </section>
  );
}
