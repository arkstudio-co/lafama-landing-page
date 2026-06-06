<!-- BEGIN:nextjs-agent-rules -->
# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` before writing any code. Heed deprecation notices.
<!-- END:nextjs-agent-rules -->

<!-- BEGIN:project-conventions -->
# La Fama Landing Page — Project Conventions

## Adding a new section

1. **Create the component** in `src/components/` following the existing patterns:
   - Use `<section>` with `id="section-name"` and `style={{ scrollMarginTop: 100 }}`
   - Use `py-section-gap` for vertical padding and `px-6 md:px-margin-edge` for horizontal padding
   - Apply responsive image heights: `h-[300px] md:h-[500px]`
   - Wrap text/heading content in a `max-w-container-max mx-auto` container

2. **Register it in `src/app/page.tsx`** wrapping it with `<AnimatedSection>` (choose animation: `fade-up`, `slide-left`, `slide-right`, `scale-in`)

3. **Add nav link** in `src/data/navigation.ts` with href pointing to `#section-name`

4. **Unify WhatsApp number**: always use `573195020806`

## Code style
- Server components by default; use `"use client"` only for interactivity (refs, state, effects, event handlers)
- All static content in `src/data/`, not in components
- Tailwind v4 classes; avoid inline `style` when possible
- `@theme` tokens: `--spacing-container-max`, `--spacing-margin-edge`, `--spacing-section-gap`, `--radius-btn`
<!-- END:project-conventions -->
