# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Development Commands

- **Install dependencies**: `pnpm install`  
- **Development server**: `pnpm dev` (uses Turbopack for faster builds)
- **Build for production**: `pnpm build`
- **Start production server**: `pnpm start`
- **Lint code**: `pnpm lint`

## Architecture Overview

This is a Next.js 15 application using the App Router with React 19 and Tailwind CSS v4.

### Core Structure
- **App Router**: Located in `src/app/` with global layout in `app/layout.tsx`
- **Route Pattern**: Route files (e.g., `app/page.tsx`, `app/chat/page.tsx`) are minimal wrappers that import presentational components from `src/app/pages/*`
- **Global Layout**: Includes Geist fonts, Navigation, Footer, and ChatWidget components
- **TypeScript Path Alias**: `@/*` maps to `./src/*`

### Key Components
- **ChatWidget**: Floating AI chat widget (`src/app/components/ChatWidget.tsx`) injected globally in layout, toggleable via window events
- **Navigation**: Sticky header navigation (`src/app/components/Navigation.tsx`) using `next/link`
- **Pages**: Presentational components in `src/app/pages/*` (HomePage, ChatPage, etc.)

### Styling
- **Tailwind CSS v4**: Global styles in `app/globals.css` with `@import "tailwindcss"`
- **PostCSS Config**: Uses `@tailwindcss/postcss` plugin
- **Theme Tokens**: Custom CSS variables defined in `globals.css`

### Data Flow
- **Chat System**: Client-side simulation with `generateAIResponse()` function in ChatWidget
- **State Management**: Local React state, no external state library
- **Message Shape**: `{id, text, sender: "user"|"ai", timestamp}` for chat messages

## Development Conventions

### Component Guidelines
- Add `"use client"` directive only for components using hooks or browser APIs
- Keep route files minimal - main UI logic goes in `src/app/pages/*`
- Use `next/link` and `next/image` (not react-router-dom)
- Prefer Tailwind utilities over custom CSS

### File Organization
- Components: `src/app/components/`
- Pages: `src/app/pages/` (presentational components)
- Routes: `src/app/` (minimal wrappers)
- Static assets: `public/`

### TypeScript
- Strict mode enabled
- Uses `@/*` path alias for imports
- Interface definitions inline with components

## Key Features

### AI Chat Widget
- Globally available floating chat widget (bottom-right)
- Toggleable via `window.dispatchEvent(new Event("toggle-chat"))`
- Simulated AI responses with menu-aware logic
- Typing indicators and message timestamps

### Image Handling
- Local assets in `public/` directory
- Remote images from `https://images.pexels.com/photos/**` (configured in `next.config.ts`)
- Use `next/image` for optimization

## Important Notes

- Menu page has been removed in favor of global AI chat flow
- Chat responses are simulated - preserve `Message` interface and `isTyping` UX when integrating backend
- For static pages, use `export const dynamic = "force-static"`
- Don't introduce `react-router-dom` - use App Router navigation
- Remote image domains must be added to `next.config.ts`