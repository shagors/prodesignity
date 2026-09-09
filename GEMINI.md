# Prodesignity Project Instructions

This file contains the foundational mandates, architecture, and workflows for the Prodesignity project.

## Project Overview
Prodesignity is a high-performance agency website built with Next.js, TypeScript, and Tailwind CSS (or Vanilla CSS as per project evolution). It features a rich, interactive portfolio and service showcases.

## Tech Stack
- **Framework:** Next.js (App Router)
- **Language:** TypeScript
- **Styling:** CSS Modules / Tailwind / Framer Motion
- **Animations:** GSAP, Framer Motion
- **Icons:** Lucide React

## Development Standards
- **React Patterns:** 
    - Avoid `useEffect` for state synchronization; prefer `key` props for resetting state or adjusting state during render.
    - Use "use client" only when necessary for interactivity or browser APIs.
- **Components:** 
    - Keep components surgical and modular.
    - Follow existing naming conventions (PascalCase for components).
- **Images:** Always use the `SmartImage` wrapper to handle broken assets gracefully.

## Workflows
- **Linting:** Run `pnpm run lint` before committing.
- **Building:** Run `pnpm run build` to verify production readiness.
- **Portfolios:** New portfolio types should be added to `portfolioData.ts` and mapped in `PortfolioModal.tsx`.
