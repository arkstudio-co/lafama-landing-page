# Handoff — sesión del hero (mobile art direction)

Último commit al momento de escribir esto: `77275aa`.
Rama `main`, sincronizada con `origin/main`, working tree limpio.

## Qué se hizo en esta sesión

El hero usaba un video de 8.3 MB. Se reemplazó por una imagen y luego se
resolvió que en móvil se veía borroso y con el texto encima del rostro.

| Commit | Cambio |
|---|---|
| `6051ff7` | Video de 8.3 MB → imagen estática `hero-image.JPG` |
| `6171b6b` | Art direction: foto distinta en móvil vía `<picture>` |
| `77275aa` | Foto móvil → `portafolio/6.jpeg` + h1 corto en móvil |

## ⚠️ Pendiente de revisión visual

**Nada de esto se ha visto en un navegador.** Se commiteó basándose en
cálculos de dimensiones y en el HTML servido. Al abrir `npm run dev`, revisar
a 390px:

1. Que `portafolio/6.jpeg` no tenga un rostro visible.
2. Que el h1 corto ya no tape el tatuaje. **El texto sigue centrado sobre la
   foto** — acortarlo no lo movió de sitio.
3. Que el recorte no corte el tatuaje por un lado.

Si falla, `git revert 77275aa` vuelve a `6171b6b`.

## Hallazgo clave: el texto del hero NO se puede bajar en móvil

Se evaluó bajar el bloque de texto al tercio inferior (lo pidió el usuario) y
**es inviable en el home**. No lo intentes sin antes cambiar el layout.

Valores reales medidos (iPhone 390×844):

- `NavBar.tsx:45` — `h-24` = 96px, en flujo normal (no es `fixed`)
- `Hero.tsx` — el section es `h-screen` = 844px, así que **termina 96px por
  debajo del borde inferior de la pantalla**
- `globals.css:344` — `.sticky-mobile-cta` es `position: fixed; bottom: 0;
  z-index: 90`, mide ~76px + `env(safe-area-inset-bottom)` (~34px) ≈ 110px

Resultado: espacio usable de 96px a 734px. El bloque de texto del home ya
ocupa ~428px (h1 de 4 líneas + subtítulo + **dos** CTAs apilados) y centrado
termina en 732px, a **2px de la barra CTA**. No hay hacia dónde bajar.

`/tattoo-el-poblado` tiene un poco más de aire porque su hero es `h-[85vh]`,
pero el padding necesario sería distinto por página, lo cual es frágil.

**Si de verdad se quiere el texto fuera de la foto**, la única vía es
rediseñar el hero móvil: imagen arriba con altura fija + texto debajo sobre
el fondo. No es un ajuste de clases.

## Cómo funciona el art direction actual

`src/components/HeroImage.tsx` (compartido por los dos heroes) usa
`getImageProps` + `<picture>`:

- `<source media="(min-width: 768px)">` → `hero-image.JPG` (1080×670, q=100)
- `<img>` por defecto → `portafolio/6.jpeg` (3024×4032, q=90) en móvil

Detalles que NO son obvios y costaron trabajo:

1. **Un solo `<img>` dentro de `<picture>`** ⇒ una sola descarga por viewport.
   No usar dos `<Image>` con `hidden`/`block`, eso descarga ambas.
2. **`<picture>` no emite preload**, así que el LCP se habría degradado.
   Por eso hay dos `ReactDOM.preload` con rangos `media` **complementarios**:
   `max-width: 767px` y `min-width: 768px`. Si uno se queda sin `media`,
   en escritorio se precargan **las dos** imágenes.
3. `quality` debe estar en `[75, 90, 100]` (`next.config.ts:5`).
4. `getImageProps` exige `width`/`height` explícitos; no admite `fill`.
5. El alt debe ser un solo string que valga para las dos variantes.

## Pendientes sueltos (nunca se tocaron)

1. **`public/videos/video-hero.mp4` (8.3 MB) está huérfano** desde
   `6051ff7`. No se borró por si se quiere de respaldo.
2. **`Hero.tsx` tiene textos hardcodeados** mientras `LandingHero.tsx` usa
   i18n (`t.hero.*`). Unificar el home al sistema de traducciones.
3. **`portafolio/6.jpeg` aparece dos veces** en móvil: hero + carrusel de
   portafolio (`src/data/portafolio.ts:7`). El usuario lo aceptó, pero vale la
   pena revisarlo cuando se vea el resultado.
4. Repetido también con `asesoria-image.jpg` en la sección Asesoria — ya no se
   usa, quedó solo en `Asesoria.tsx:11`.

## Limitación del agente

Este modelo **no puede ver imágenes**. Toda decisión sobre composición,
encuadre o si una foto tiene rostro se tomó por cálculo de dimensiones
o por lo que dijo el usuario. Confirmar siempre visualmente.