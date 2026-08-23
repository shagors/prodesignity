# Audit & update — 23 Aug 2026

Full check of the uploaded project. **The site could not build before this
pass** — two separate blockers. Both are fixed, `next build` now passes and all
10 routes prerender static.

```
✓ Compiled successfully
✓ Generating static pages (12/12)
✓ tsc --noEmit — clean
Route (app)
┌ ○ /              ├ ○ /privacy-policy   ├ ○ /robots.txt
├ ○ /about         ├ ○ /terms-of-service ├ ○ /sitemap.xml
├ ○ /contact       ├ ○ /services         └ ○ /llms.txt
```

---

## Blocker 1 — four files missing or misplaced

The integration was partial, so `next build` failed on unresolved imports.

| Problem | Fix |
|---|---|
| `privacy-policy.ts` sat in `lib/legal/` | Moved to `data/legal/`, removed the empty `lib/legal/` dir |
| `data/legal/index.ts` absent | Restored — `@/data/legal` was imported by 3 files and resolved to nothing |
| `data/seo/faq.ts` absent | Restored — imported by `lib/seo.ts` and `app/llms.txt/route.ts` |
| `app/terms-of-service/page.tsx` absent | Created — the data file existed but had no route |

Worth noting the trap: `lib/legal.ts` **and** `lib/legal/` can coexist on disk,
and `@/lib/legal` silently resolves to the `.ts` file. So the misplaced policy
was invisible — no error pointed at it, the failure surfaced elsewhere.

## Blocker 2 — `useSearchParams()` without Suspense

Pre-existing, in your `PricingSection.tsx`, unrelated to the legal work. It
fails prerendering of `/`, so **every Vercel production deploy was failing.**

The obvious fix is wrapping the section in `<Suspense>` — but that bails the
whole pricing block out of static rendering, which is the opposite of what you
want when the goal is AI crawlers reading your HTML. The hook was only read
inside a `useEffect`, which is client-only anyway, so I swapped it for
`window.location.search`. No CSR bailout, pricing stays in the prerendered HTML,
behaviour identical.

## Also fixed

**Duplicate `FAQPage` on every URL.** `siteSchema()` was rendering the studio
FAQ from the root layout, so `/privacy-policy` emitted *two* FAQPage entities —
its own plus the site-wide one. Validators flag that, and it makes it ambiguous
to a crawler which questions belong to which page. Split into `siteSchema()`
(Organization + WebSite, root layout) and `homeSchema()` (FAQPage, homepage
only). Verified: exactly one FAQPage per URL now.

**Footer legal links.** All three `href="#"` placeholders now point at the real
routes, and Terms was added to the company links list.

**Root layout was never replaced**, so the site had no `metadataBase`, no title
template and no Organization schema. Replaced. Titles now render as
`Privacy Policy | ProDesignity`, canonicals resolve absolute.

**Sitemap contradicted itself.** `/about` and `/services` are still duplicate
placeholder pages, so I gave them `robots: { index: false }` — but they were
also listed in the sitemap, which tells a crawler two opposite things. Removed
them from `STATIC_ROUTES` with a comment to add them back when they have content.

**Copy.** `{{brand}} ({{legalName}}, "we"...)` rendered as
"ProDesignity (ProDesignity, "we"...)" because `legalName` is still the
placeholder. Reworded both intros. Also fixed "brands in United States" in
`llms.txt`.

---

## Verified against a running production server

- One `FAQPage` per URL — `/` 1, `/privacy-policy` 1, `/terms-of-service` 1, `/about` 0
- Schema graph parses: `ProfessionalService`, `WebSite`, `WebPage`,
  `BreadcrumbList`, `OfferCatalog` with 10 `Service` nodes, 15 `Question` nodes
- `/robots.txt`, `/sitemap.xml`, `/llms.txt` all 200 with correct content types
- Canonical: `https://prodesignity.com/privacy-policy`
- **Zero unresolved `{{tokens}}`** in rendered HTML
- `noindex, follow` on `/about`, `index, follow` on the legal pages

---

## Still on you

**Blocking-ish, before you trust the pages:**
1. `config/site.ts` still has every `TODO` unfilled — `legalName`, `founded`,
   street address, and all five social URLs. `sameAs` is one of the strongest
   entity-verification signals AI systems have, and it's currently empty.
2. Lawyer review of the sub-processor table, governing law, and the liability
   cap. Serving US/UK/EU clients from Bangladesh has real implications.

**Not blocking, but it's what actually decides whether AI cites you:**
3. `/about` and `/services` are still byte-identical placeholders. Noindex is a
   holding action, not a fix.
4. All 10 keyword clusters are still `status: "planned"`. You have four real
   pages. Metadata can't compensate for that — build perfume first.
5. The hero JPG is **2.1 MB** committed to `public/`. Convert to WebP/AVIF.
6. Three pre-existing `react-hooks/set-state-in-effect` lint errors in
   `portfolio/LiveViews.tsx` and `portfolio/SmartImage.tsx`. They don't fail the
   build, so Vercel won't block on them, but they cause cascading re-renders.

**Positioning conflict, worth a decision.** Your old title tag said "Shopify
Development, Web Design & 3D/2D Animation Agency"; your keyword list is 3D
product visualization and packaging. I've written `config/site.ts` around the
product-visualization positioning. If you'd rather lead with the other, change
`description` and `tagline` there — but pick one. Mixed signals actively hurt
entity resolution.

---

## Deploying

Nothing special. No new dependencies.

1. Vercel → Settings → Environment Variables →
   `NEXT_PUBLIC_SITE_URL=https://prodesignity.com` (Production).
2. Push; Vercel runs `next build`, which now passes.
3. Submit `/sitemap.xml` to Google Search Console **and** Bing Webmaster Tools —
   Bing feeds ChatGPT's search layer, so it matters more than its market share.
4. Confirm `https://prodesignity.com/llms.txt` resolves in production.
