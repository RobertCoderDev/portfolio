import { profile, socials } from "@/lib/content";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";

const links = [
  { label: "Email", value: profile.email, href: `mailto:${profile.email}` },
  { label: "GitHub", value: "github.com/RobertCoderDev", href: socials.github },
  { label: "X", value: "@robertcoderdev", href: socials.x },
  { label: "Instagram", value: "@robertcoderdev", href: socials.instagram },
];

export default function Contact() {
  return (
    <section id="contact" className="mx-auto max-w-5xl scroll-mt-24 px-6 py-24">
      <Reveal>
        <SectionHeading
          index="04"
          command="./contact.sh"
          title="Hablemos"
        />
      </Reveal>

      <Reveal delay={0.1}>
        <p className="mb-8 max-w-xl text-pretty text-lg leading-relaxed text-muted">
          ¿Un producto de IA por construir, un equipo que liderar o una idea que
          quieres llevar a producción? Hablemos —directo, sin formularios.
        </p>

        <div className="grid gap-3 sm:grid-cols-2">
          {links.map((link) => (
            <a
              key={link.label}
              href={link.href}
              target={link.href.startsWith("mailto:") ? undefined : "_blank"}
              rel="noopener noreferrer"
              className="group flex items-center justify-between rounded-xl border border-border bg-surface/50 px-5 py-4 transition-colors hover:border-accent/40"
            >
              <span className="flex flex-col">
                <span className="font-mono text-xs uppercase tracking-wider text-muted">
                  {link.label}
                </span>
                <span className="text-fg">{link.value}</span>
              </span>
              <span className="font-mono text-muted transition-transform group-hover:translate-x-0.5 group-hover:text-accent">
                ↗
              </span>
            </a>
          ))}
        </div>
      </Reveal>
    </section>
  );
}
