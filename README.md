# ProDesignity — Full Project Specification & Implementation Guide

An end-to-end Next.js application built from scratch to replace the previous multi-file static HTML website. This document contains the complete technical architecture, routing, component specifications, metadata configuration, deployment workflows, and post-launch checklists.

---

## 1. Executive Summary & Tech Stack

- **Framework:** Next.js 14+ (App Router)
- **Language:** TypeScript
- **Rendering Strategy:** React Server Components (RSC) with selective Client Components (`"use client"`)
- **Styling:** Tailwind CSS / CSS Modules
- **SEO & Metadata:** Next.js App Router Metadata API & dynamic JSON-LD schema
- **Form Handling:** Formspree API integration / Direct WhatsApp & Email handlers

---

## 2. Complete Project Directory Layout

```text
prodesignity/
├── public/
│   ├── assets/
│   │   ├── logo.svg
│   │   ├── favicon.ico
│   │   └── og-banner.png       # 1200x630 Open Graph banner image
│   └── robots.txt              # Static crawler directives fallback
├── src/
│   ├── app/
│   │   ├── layout.tsx          # Root layout (Header, Footer, fonts, global JSON-LD)
│   │   ├── page.tsx            # Home page (`/`)
│   │   ├── services/
│   │   │   └── page.tsx        # Services page (`/services`)
│   │   ├── about/
│   │   │   └── page.tsx        # About page (`/about`)
│   │   ├── contact/
│   │   │   └── page.tsx        # Contact page (`/contact`)
│   │   ├── not-found.tsx       # Custom 404 error page
│   │   ├── robots.ts           # Dynamic robots.txt generation
│   │   └── sitemap.ts          # Dynamic sitemap.xml generator
│   ├── components/
│   │   ├── Navbar.tsx          # Client-side navigation with Next/Link
│   │   ├── Footer.tsx          # Global footer with social profiles & JSON-LD reference
│   │   ├── TeamSection.tsx     # Team cards, bios, avatars, and social links
│   │   ├── ContactForm.tsx     # Interactive form with WhatsApp / Email / Formspree support
│   │   └── SeoSchema.tsx       # Reusable JSON-LD script component
│   ├── lib/
│   │   ├── constants.ts        # Site configuration, domain URL, contact endpoints
│   │   └── metadata.ts         # Base metadata builder for all routes
│   └── styles/
│       └── globals.css         # Global CSS and Tailwind directives
├── .env.example                # Example environment variables template
├── .env.local                  # Local environment configuration
├── next.config.mjs             # Next.js bundler and build configuration
├── package.json                # Project dependencies and run scripts
├── tsconfig.json               # TypeScript compiler configuration
└── README.md
```
