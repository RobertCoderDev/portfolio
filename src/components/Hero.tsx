"use client";

import Image from "next/image";
import { motion } from "motion/react";
import { profile, socials } from "@/lib/content";

const fade = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
};

export default function Hero() {
  return (
    <section
      id="home"
      className="relative mx-auto flex min-h-screen max-w-5xl flex-col justify-center px-6 pt-28 pb-16"
    >
      <div className="grid items-center gap-12 lg:grid-cols-[1.05fr_0.95fr]">
        <div>
          <motion.p
            {...fade}
            transition={{ duration: 0.5 }}
            className="mb-5 font-mono text-sm text-accent"
          >
            $ whoami
          </motion.p>

          <motion.h1
            {...fade}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-balance text-4xl font-semibold leading-[1.05] tracking-tight sm:text-5xl lg:text-6xl"
          >
            {profile.name}
          </motion.h1>

          <motion.p
            {...fade}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mt-4 font-mono text-base text-accent sm:text-lg"
          >
            {profile.role}
          </motion.p>

          <motion.p
            {...fade}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mt-6 max-w-xl text-pretty text-base leading-relaxed text-muted sm:text-lg"
          >
            {profile.tagline}
          </motion.p>

          <motion.div
            {...fade}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mt-9 flex flex-wrap items-center gap-3"
          >
            <a
              href="#work"
              className="rounded-md bg-accent px-5 py-2.5 text-sm font-medium text-bg transition-opacity hover:opacity-90"
            >
              Ver proyectos
            </a>
            <a
              href={profile.cv}
              download
              className="rounded-md border border-border px-5 py-2.5 text-sm font-medium text-fg transition-colors hover:border-muted"
            >
              Descargar CV
            </a>
            <a
              href={socials.github}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-md px-3 py-2.5 font-mono text-sm text-muted transition-colors hover:text-fg"
            >
              GitHub ↗
            </a>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
          className="relative"
        >
          <div className="absolute -inset-4 -z-10 rounded-2xl bg-accent/10 blur-2xl" />
          <div className="overflow-hidden rounded-xl border border-border bg-surface shadow-2xl">
            <div className="flex items-center gap-2 border-b border-border bg-surface-2 px-4 py-2.5">
              <span className="h-3 w-3 rounded-full bg-[#ff5f57]" />
              <span className="h-3 w-3 rounded-full bg-[#febc2e]" />
              <span className="h-3 w-3 rounded-full bg-[#28c840]" />
              <span className="ml-2 font-mono text-xs text-muted">
                roberto@itelisoft ~ portrait
              </span>
            </div>
            <div className="relative aspect-[3/2] w-full">
              <Image
                src={profile.photo}
                alt={`Retrato de ${profile.name}`}
                fill
                sizes="(max-width: 1024px) 100vw, 480px"
                className="object-cover"
                priority
              />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
