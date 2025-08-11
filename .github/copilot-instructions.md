# Copilot Instructions for meenu-web-public

Repo is Next.js 15 (App Router) + React 19 + Tailwind CSS v4. Use pnpm.

## Architecture

- App Router in `src/app` with global shell in `app/layout.tsx` (Geist fonts, sticky header, nav via `next/link`, `<main>{children}</main>`).
- Route wrappers are minimal and import presentational pages from `src/app/pages/*`:
  - `app/page.tsx` → `pages/HomePage.tsx`
  - `app/chat/page.tsx` → `pages/ChatPage.tsx`
- Styling via Tailwind v4: `@import "tailwindcss"` in `app/globals.css` and `postcss.config.mjs` with `@tailwindcss/postcss`. Theme tokens set in `@theme inline` + CSS vars.
- Images: `next.config.ts` allows `https://images.pexels.com/photos/**`; local assets under `public/`.
- TS path alias: `@/*` → `./src/*` (see `tsconfig.json`). Icons: `lucide-react`.

## Conventions

- Keep route files tiny; put most UI in `src/app/pages/*`.
- Mark client-interactive components with "use client" at file top.
- Use `next/link`, `next/image` (not `react-router-dom`). `src/app/components/Navigation.tsx` provides a simple header.
- Use Tailwind utilities in JSX; rely on theme tokens from `globals.css`.
- For static pages, opt into pre-rendering with `export const dynamic = "force-static";`.

## Data & state

- Menu page has been removed in favor of a global AI chat flow.
- Chat is a client-only simulation in `ChatPage.tsx` with `generateAIResponse`. Preserve the `Message` shape and `isTyping` UX if integrating a backend.

## Workflows

- Install: pnpm install
- Dev (Turbopack): pnpm dev
- Build/Start: pnpm build && pnpm start
- Lint: pnpm lint (ESLint flat config extends Next + TS)

## File pointers

- Shell/Nav example: `app/layout.tsx`
- Home patterns + icons: `app/pages/HomePage.tsx`
- Floating chat widget is injected globally via `app/layout.tsx` and implemented in `app/components/ChatWidget.tsx`.
- Chat list, typing indicator, input handling: `app/pages/ChatPage.tsx`
- Theme and tokens: `app/globals.css`

## Pitfalls

- Don’t introduce `react-router-dom` in App Router code.
- Add "use client" only where needed (components using hooks/browser APIs).
- If adding remote images, update `next.config.ts` domains.

If any workflow or pattern seems missing (tests, API layer, deploy), ask before scaffolding.
