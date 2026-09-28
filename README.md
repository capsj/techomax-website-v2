# TechoMax — sitio web

Sitio de TechoMax reconstruido en **Next.js 15 + React 19** a partir del diseño publicado en Framer.
Es código fuente editable: componentes React, un solo archivo de estilos y todo el contenido
centralizado en un archivo.

```bash
npm install
npm run dev     # http://localhost:3000
npm run build   # build de producción
```

## Estructura

```
app/
  layout.tsx            fuentes, metadata global, <html>
  globals.css           tokens de diseño + todos los estilos (desktop / tablet / mobile)
  page.tsx              Home  (/)
  servicios/page.tsx    /servicios
  proyectos/page.tsx    /proyectos
  fonts/                Poppins, Be Vietnam Pro e Inter (self-hosted)
components/
  Header.tsx            nav fija con blur al scrollear + menú mobile
  Footer.tsx
  CtaBanner.tsx         banner "Pedí tu cotización ahora"
  ServiceRow.tsx        bloque texto + imagen (se usa en Home y Servicios)
  Ticker.tsx            marquesina infinita (carrusel del hero y logos)
  Blobs.tsx             manchas de color desenfocadas de los heros
  Reveal.tsx            animación de aparición al hacer scroll
  ScrollTop.tsx         botón "volver arriba"
  SiteShell.tsx         header + CTA + footer comunes
  Tag.tsx               pill con texto en degradé
lib/
  content.ts            ← TEXTOS, LINKS E IMÁGENES DE TODO EL SITIO
public/
  images/               imágenes optimizadas, con nombres descriptivos
```

## Cómo editar

- **Textos, links, datos de contacto, métricas, testimonios:** `lib/content.ts`.
- **Colores, tipografías, espaciados:** variables en `:root` al principio de `app/globals.css`.
- **Imágenes:** reemplazá el archivo en `public/images/` (mismo nombre) o cambiá la ruta en `content.ts`.
- **Nueva página:** creá `app/<ruta>/page.tsx` y envolvé el contenido en `<SiteShell>`.

## Breakpoints

Igual que en Framer: desktop ≥ 1200px · tablet 810–1199px · mobile < 810px.

## Pendientes de contenido

Heredados del sitio de Framer, marcados con `TODO` en el código:

- `/contacto` y `/sobrenosotros` están en el menú pero todavía no existen (en Framer tampoco).
- Texto de plantilla en inglés en el hero de Servicios y en "Mantenimiento Programado".
- "Términos de Servicio" y "Políticas de Privacidad" no tienen página.
- Definí `NEXT_PUBLIC_SITE_URL` (ej. `https://techomax.com.ar`) para que la imagen OG use URL absoluta.

## Deploy

Listo para Vercel: importá el repo, framework Next.js, sin configuración extra.
