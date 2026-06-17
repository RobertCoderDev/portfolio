# Diagramas de arquitectura

Fuente de los diagramas (Mermaid) que se muestran en las tarjetas de proyecto.
Los SVG renderizados viven en `public/diagrams/` y se sirven de forma estática.

## Re-renderizar

`mermaid-cli` usa Puppeteer, que necesita un Chrome headless instalado una vez:

```bash
npx puppeteer browsers install chrome-headless-shell
```

Crea un `puppeteer.config.json` local (no versionado) apuntando al binario que
imprimió el comando anterior:

```json
{ "executablePath": "/ruta/a/chrome-headless-shell", "args": ["--no-sandbox"] }
```

Y renderiza:

```bash
npx @mermaid-js/mermaid-cli \
  -i diagrams/ozaru-one.mmd \
  -o public/diagrams/ozaru-one.svg \
  -c diagrams/mermaid.config.json \
  -p puppeteer.config.json \
  -b transparent
```

El tema (colores dark/emerald) se controla en `diagrams/mermaid.config.json`.
