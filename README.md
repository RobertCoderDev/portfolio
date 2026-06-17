# Portfolio — Roberto Vázquez

Portafolio personal. Technical Project Manager & AI Solutions Architect.

## Stack

- **Next.js 16** (App Router, Turbopack)
- **React 19**
- **TypeScript** (strict)
- **Tailwind CSS v4**
- **motion** para animaciones

## Desarrollo

```bash
npm install
npm run dev      # http://localhost:3000
```

Otros scripts:

```bash
npm run build    # build de producción
npm run start    # servir el build
npm run lint     # ESLint
```

## Estructura

```
src/
  app/
    layout.tsx       # metadata API + fuentes
    page.tsx         # Server Component que compone las secciones
    globals.css      # Tailwind v4 + tokens de tema (dark/terminal)
  components/         # Navbar, Hero, About, Stack, Projects, Contact, Footer
  lib/
    content.ts       # contenido centralizado (perfil, stack, proyectos)
```

> Para actualizar copy, stack o proyectos, edita **`src/lib/content.ts`**.
> Los componentes solo renderizan esos datos.

## Despliegue

Desplegado en [Vercel](https://vercel.com). El dominio de producción es
`robertcoder.com`.
