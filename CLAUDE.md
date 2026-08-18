# ProDesignity — Design System & Engineering Documentation

This document outlines the design tokens, theme configurations, component architecture, and responsive layouts for the ProDesignity web application.

---

## 1. Brand Color Palette & Theme Tokens

### Light Theme

- **Primary:** `#6366f1` (Indigo)[cite: 5, 6]
- **Primary Hover:** `#4f46e5`[cite: 5, 6]
- **Brand Violet:** `#7c3aed`[cite: 5, 6]
- **Brand Blue:** `#3b82f6`[cite: 5, 6]
- **Brand Orange (Accent):** `#f97316`[cite: 5, 6]
- **Card Background:** `rgba(255, 255, 255, 0.85)`[cite: 5, 6]
- **Border Color:** `#e2e8f0`[cite: 5, 6]

### Dark Theme

- **Dark Primary:** `#818cf8`[cite: 5, 6]
- **Dark Primary Hover:** `#6366f1`[cite: 5, 6]
- **Dark Brand Violet:** `#8b5cf6`[cite: 5, 6]
- **Dark Brand Blue:** `#60a5fa`[cite: 5, 6]
- **Dark Brand Orange:** `#fb923c`[cite: 5, 6]
- **Dark Background:** `#090d16`
- **Dark Card Background:** `rgba(15, 23, 42, 0.85)`[cite: 5, 6]
- **Dark Border Color:** `#1e293b`[cite: 5, 6]

---

## 2. Core Stylesheet Setup (`globals.css`)

```css
@import "tailwindcss";

@custom-variant dark (&:where(.dark, .dark *));

@theme {
    --color-primary: #6366f1;
    --color-primary-hover: #4f46e5;
    --color-brand-violet: #7c3aed;
    --color-brand-blue: #3b82f6;
    --color-brand-orange: #f97316;
    --color-card-bg: rgba(255, 255, 255, 0.85);
    --color-border-color: #e2e8f0;

    /* dark colors */
    --color-dark-primary: #818cf8;
    --color-dark-primary-hover: #6366f1;
    --color-dark-brand-violet: #8b5cf6;
    --color-dark-brand-blue: #60a5fa;
    --color-dark-brand-orange: #fb923c;
    --color-dark-card-bg: rgba(15, 23, 42, 0.85);
    --color-dark-border-color: #1e293b;

    --font-sans: var(--font-geist-sans);
    --font-mono: var(--font-geist-mono);
}
```
