import Image from "next/image";
import { projects } from "@/lib/content";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";

export default function CaseStudies() {
  return (
    <section id="work" className="mx-auto max-w-5xl scroll-mt-24 px-6 py-24">
      <Reveal>
        <SectionHeading index="02" command="ls ./work" title="Proyectos" />
      </Reveal>

      <div className="flex flex-col gap-10">
        {projects.map((project, i) => (
          <Reveal key={project.name} delay={i * 0.05}>
            <article className="overflow-hidden rounded-2xl border border-border bg-surface/50">
              {/* Product screenshot framed as a browser window */}
              {project.image && (
                <div className="border-b border-border bg-bg/40 p-5 sm:p-8">
                  <div className="overflow-hidden rounded-lg border border-border shadow-2xl">
                    <div className="flex items-center gap-2 border-b border-border bg-surface-2 px-3 py-2">
                      <span className="h-2.5 w-2.5 rounded-full bg-[#ff5f57]" />
                      <span className="h-2.5 w-2.5 rounded-full bg-[#febc2e]" />
                      <span className="h-2.5 w-2.5 rounded-full bg-[#28c840]" />
                      {project.href && (
                        <span className="ml-2 truncate font-mono text-[11px] text-muted">
                          {project.href.replace("https://", "")}
                        </span>
                      )}
                    </div>
                    <Image
                      src={project.image}
                      alt={`Producto ${project.name}`}
                      width={1440}
                      height={900}
                      className="h-auto w-full"
                    />
                  </div>
                </div>
              )}

              <div className="p-7 sm:p-9">
                <div className="flex flex-col gap-2 sm:flex-row sm:items-start sm:justify-between">
                  <div>
                    <div className="flex flex-wrap items-center gap-3">
                      <h3 className="text-2xl font-semibold tracking-tight text-fg">
                        {project.name}
                      </h3>
                      {project.badges?.map((badge) => (
                        <span
                          key={badge}
                          className="rounded-full border border-accent/40 bg-accent/10 px-3 py-1 font-mono text-xs text-accent"
                        >
                          {badge}
                        </span>
                      ))}
                    </div>
                    <p className="mt-1 font-mono text-xs uppercase tracking-wider text-accent">
                      {project.kind}
                    </p>
                  </div>
                  {project.href && (
                    <a
                      href={project.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="shrink-0 rounded-md border border-border px-4 py-2 text-sm font-medium text-fg transition-colors hover:border-accent/50 hover:text-accent"
                    >
                      Visitar ↗
                    </a>
                  )}
                </div>

                <p className="mt-2 font-mono text-sm text-muted">
                  <span className="text-fg/70">rol:</span> {project.role}
                </p>

                <p className="mt-5 max-w-2xl text-pretty leading-relaxed text-muted">
                  {project.summary}
                </p>

                <ul className="mt-5 flex flex-col gap-2.5">
                  {project.highlights.map((highlight) => (
                    <li
                      key={highlight}
                      className="flex gap-3 text-sm leading-relaxed text-muted"
                    >
                      <span className="mt-1 font-mono text-accent">▸</span>
                      <span>{highlight}</span>
                    </li>
                  ))}
                </ul>

                {project.clients && (
                  <div className="mt-6 flex flex-wrap items-center gap-x-6 gap-y-2">
                    <span className="font-mono text-xs uppercase tracking-wider text-muted">
                      Clientes
                    </span>
                    {project.clients.map((client) => (
                      <span key={client} className="text-sm text-fg/80">
                        {client}
                      </span>
                    ))}
                  </div>
                )}

                <div className="mt-6 flex flex-wrap gap-2 border-t border-border pt-6">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-md bg-surface-2 px-2.5 py-1 font-mono text-xs text-muted"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {project.diagram && (
                  <div className="mt-8">
                    <div className="mb-3 flex items-center gap-2 font-mono text-xs">
                      <span className="text-accent">$</span>
                      <span className="text-muted">cat architecture.svg</span>
                    </div>
                    <div className="overflow-x-auto rounded-lg border border-border bg-bg/40 p-4">
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img
                        src={project.diagram}
                        alt={`Diagrama de arquitectura de ${project.name}`}
                        className="h-auto w-full min-w-[420px] max-w-2xl sm:mx-auto sm:min-w-0"
                        loading="lazy"
                      />
                    </div>
                  </div>
                )}
              </div>
            </article>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
