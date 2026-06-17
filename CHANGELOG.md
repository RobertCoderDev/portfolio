# Changelog

## [1.1.0] - 2026-06-17

Rediseño de contenido y estructura con información real (reemplazando los
supuestos del brief de LLM). Reposicionamiento con trayectoria de 12 años.

### Añadido
- Foto editorial B&W (`yoNew.png`) como protagonista del Hero, enmarcada
  como ventana de terminal
- Sección **Trayectoria** (`Experience`): timeline 2014 → 2024 → 2025
  (freelance → Itelisoft Dev → PM → Ozaru premiado)
- Sección **Impacto** (`Impact`): métricas (12 años, 2 como PM, producto
  premiado, SOC 2) + clientes enterprise (Telcel, Nadro, Lamosa, Citrofrut)
- **Case studies** reales (`CaseStudies`): screenshot del producto en marco de
  navegador, badges (GESA Award, SOC 2), rol, highlights, clientes, link vivo
- Screenshots de producto en `public/projects/` (ozaru.png, prisma.png)

### Cambiado
- Copy reescrito (auditoría marketing + reclutador): hero/about con verbo de
  creador, métricas reencuadradas (2 plataformas en producción · GESA '25),
  timeline cerrado con "Creador de Prisma", contacto abierto a reclutadores
- QA visual desktop + móvil: Stack rebalanceado a 3 categorías parejas
  (Datadog movido a Infra) en grid de 3 columnas; diagrama de arquitectura
  legible en móvil con scroll horizontal
- Prisma: descripción corregida a su producto REAL (RAG documental), no el
  "motor interno" que decía el brief; reposicionado como idea/creación propia
- Diagrama de arquitectura: ahora solo en Ozaru, como "el motor por dentro"
  (no como decoración en cada tarjeta)
- Estructura: Hero → Impacto → Trayectoria → Proyectos → Stack → Contacto

### Eliminado
- Sección "Sobre mí" (texto integrado como intro de Trayectoria)
- TaraOS del portafolio (decisión: enfoque en Ozaru y Prisma)
- Diagramas de TaraOS y Prisma
- Limpieza pre-deploy: 20 assets sin uso del portfolio viejo (iconos de
  tecnologías y sociales, fotos e imágenes viejas) — `public/` de ~8 MB a 1.3 MB
- `diagrams/puppeteer.config.json` (ruta absoluta de máquina; ahora gitignored)

### Optimizado
- Foto `yoNew.png` (2528px, 6.6 MB) → `yoNew.jpg` (1600px, 460 KB) sin pérdida
  de calidad visible

## [1.0.0] - 2026-06-17

Rediseño y reconstrucción completa del portafolio. Reposicionamiento del perfil
de Junior/Estudiante a **Technical Project Manager & AI Solutions Architect**.

### Stack
- Next.js `13.4.1` → **16.2.9** (App Router, Turbopack)
- React `18.2.0` → **19.2.7**
- Migración de JavaScript a **TypeScript** (strict mode)
- CSS Modules → **Tailwind CSS v4** (config CSS-first)
- `framer-motion` → **motion 12** (sucesor oficial)

### Añadido
- Diseño dark mode / estética terminal con grid técnico de fondo
- Tipografías: Inter (sans) + JetBrains Mono (mono) vía `next/font/google`
- Contenido centralizado en `src/lib/content.ts` (datos separados de presentación)
- Componente `Reveal` reutilizable para animaciones de scroll
- Metadata API con OpenGraph, Twitter cards, canonical y keywords
- Secciones: Hero (terminal), Sobre mí, Arquitectura & Stack, Trabajo destacado,
  Contacto
- Proyectos destacados: Ozaru One, TaraOS, Prisma Engine
- Diagramas de arquitectura por proyecto (Mermaid → SVG dark/emerald),
  renderizados como código en `diagrams/` y servidos desde `public/diagrams/`
- Navbar responsive con menú móvil accesible

### Eliminado
- `head.js` (patrón deprecado) → metadata API
- `@next/font` (deprecado), `react-scroll`, `@lottiefiles/react-lottie-player`
  (URL temporal que caducaba)
- Bugs corregidos: `setFoto(foto)` (auto-asignación en Hero), `for=` → `htmlFor`,
  `font-size: 62.5%` mal aplicado a `*`, `alt="Rick and Morty"` residual,
  `cssMOdules` typo en config
- Página completa marcada como `"use client"` → ahora Server Component (SSR)

### Notas
- 2 vulnerabilidades moderate (postcss bundleado dentro de Next) NO se corrigen:
  el `audit fix --force` degradaría Next a la v9. Se resuelve cuando Next
  actualice su postcss interno.
