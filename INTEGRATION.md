# Legal pages + AI-focused SEO — integration guide

Built against your `seemol` branch: Next.js 16 App Router, Tailwind v4 `@theme`
tokens, `next-themes` with the `.dark` class. **No new dependencies.**

---

## 1. Copy the files in

```
config/site.ts                              ← new: single source of truth
data/legal/types.ts                         ← new
data/legal/privacy-policy.ts                ← new: all privacy copy
data/legal/terms-of-service.ts              ← new: all terms copy
data/legal/index.ts                         ← new
data/seo/keywords.ts                        ← new: keyword.txt, restructured
data/seo/faq.ts                             ← new: the AI-answer FAQ
lib/legal.ts                                ← new
lib/seo.ts                                  ← new
app/_components/JsonLd.tsx                  ← new
app/_components/legal/LegalDocumentView.tsx ← new
app/_components/legal/LegalToc.tsx          ← new
app/privacy-policy/page.tsx                 ← new
app/terms-of-service/page.tsx               ← new
app/robots.ts                               ← new
app/sitemap.ts                              ← new
app/llms.txt/route.ts                       ← new
app/layout.tsx                              ← REPLACES yours
```

The `@/*` path alias already exists in your `tsconfig.json`, and `cn` is
imported from `@/lib/utils`, which you already have.

## 2. Set the site URL

`.env.local`:

```
NEXT_PUBLIC_SITE_URL=http://localhost:3000
```

In Vercel → Settings → Environment Variables, add the same key with
`https://prodesignity.com` for Production. `config/site.ts` falls back to the
production domain if the variable is missing, so a forgotten env var degrades
to correct behaviour rather than broken canonicals.

## 3. Fix the footer's placeholder links

`app/_components/Footer.tsx` currently has `href="#"` in three places. Replace:

```tsx
// line ~18, in the company links array
{ name: "Privacy Policy", href: "/privacy-policy" },
{ name: "Terms of Service", href: "/terms-of-service" },

// lines ~144 and ~150, the bottom bar
<Link href="/terms-of-service">Terms of Service</Link>
<Link href="/privacy-policy">Privacy Policy</Link>
```

Legal pages that aren't linked from the footer are treated as orphans by
crawlers and, more practically, by Stripe and Meta when they review a business.

## 4. Verify

```bash
npm run dev
```

- `/privacy-policy` and `/terms-of-service` — toggle the theme, check both.
- `/robots.txt`, `/sitemap.xml`, `/llms.txt` — all should return plain text.
- View source on a legal page and confirm the `<script type="application/ld+json">`
  blocks are in the **initial HTML**, not injected later.
- Paste a page URL into the [Rich Results Test](https://search.google.com/test/rich-results)
  and the [Schema Markup Validator](https://validator.schema.org/).

```bash
npm run build   # must pass before you push — Vercel runs the same command
```

---

## How updates work

**Change a policy sentence** → edit the string in `data/legal/*.ts`. Bump
`version`, set `lastUpdated`. Done — page, sitemap `lastModified`, JSON-LD
`dateModified` and `llms.txt` all follow.

**Change the email, phone or deposit percentage** → edit `config/site.ts` once.
The policy text uses `{{email}}`, `{{legal.deposit}}` etc., so every sentence
that mentions it rewrites itself. This is the main reason for the token layer:
a value that appears in eleven clauses can never be updated in only ten of them.

**Add a Cookie Policy or DPA** → new file in `data/legal/`, add it to
`LEGAL_DOCUMENTS`, copy the 12-line `page.tsx`. The layout, contents rail,
schema and sitemap all come free.

**Hand editing to a non-developer later** → the data files are the seam. Point
`data/legal/*.ts` at a CMS (Sanity, Contentlayer, a JSON file in the repo) and
nothing in the view layer changes, because it only ever sees a `LegalDocument`.
Don't do this yet — two documents that change twice a year don't justify a CMS.

---

## The SEO part — read this before judging the results

**Your legal pages will not rank for "3D product visualization agency", and
they should not.** Nobody searching for a rendering studio wants your terms
page, and trying to force those keywords in would make the pages worse at their
actual job. What I've built instead is the SEO *infrastructure* — which is
site-wide — plus an honest map of what still has to be written.

### What's shipped and working now

| File | What it does |
|---|---|
| `lib/seo.ts` | Canonical URLs, OG/Twitter tags, and the `Organization` + `WebSite` + `FAQPage` JSON-LD graph |
| `app/robots.ts` | Explicitly allows GPTBot, ClaudeBot, PerplexityBot, Google-Extended, Applebot-Extended and the live fetchers |
| `app/sitemap.ts` | Generated from your data, so it can't go stale |
| `app/llms.txt/route.ts` | Plain-Markdown briefing for LLM crawlers |
| `data/seo/faq.ts` | Ten citable Q&A passages — the highest-leverage file here |

### Why the FAQ file matters more than the keyword list

When ChatGPT, Gemini or Perplexity answer *"who does perfume bottle CGI for
e-commerce brands"*, they aren't matching keyword density. They retrieve short,
self-contained passages and stitch them into an answer. A passage gets used when
it:

1. **Names the brand in the first sentence.** A pronoun can't be cited.
2. **Answers first, explains second.** No throat-clearing preamble.
3. **Contains a checkable specific** — a file format, a resolution, a
   turnaround, a platform requirement. Vague passages get dropped.
4. **Runs 40–90 words.** Longer gets truncated mid-thought.

Every answer in `data/seo/faq.ts` is written to that shape. Add to it whenever a
client asks you something twice — those are literally the questions being typed
into assistants.

### The uncomfortable part

Your `keyword.txt` has ~400 keywords. **You currently have four real pages**,
and `/services` and `/about` are both "coming soon" placeholders with identical
copy. No amount of metadata fixes that. AI systems recommend businesses they can
*verify* — and right now there's very little on the site to read.

`data/seo/keywords.ts` collapses the 400 into **10 clusters**, each marked
`status: "planned"`. Ordered by commercial value for you:

| Priority | Page to build | Primary keyword |
|---|---|---|
| 1 | `/industries/perfume-fragrance` | perfume packaging design |
| 2 | `/services/amazon-listing-design` | Amazon A+ Content design |
| 3 | `/services/3d-product-visualization` | 3D product visualization |
| 4 | `/services/packaging-design` | packaging design agency |
| 5 | `/industries/cosmetics-skincare` | cosmetic packaging design |

Perfume first because it's the narrowest, highest-margin niche where you're
competing against a handful of studios rather than thousands. Flip `status` to
`"live"` as each ships and the sitemap and schema pick it up automatically.

### What actually gets you cited by AI (in order)

1. **Real case studies with numbers and named constraints.** "Frosted glass
   perfume bottle, 12 SKUs, CAD supplied as STEP, 9-day turnaround" is citable.
   "We deliver stunning visuals" is not.
2. **Being mentioned on sites you don't own.** Assistants weight third-party
   corroboration heavily. Clutch and DesignRush profiles, a Behance presence, an
   answer on r/3Dmodeling that's actually useful, a guest post on an
   e-commerce blog. This is slower than on-page work and matters more.
3. **A comparison page.** "3D product rendering vs product photography: cost
   breakdown" targets a question people genuinely ask assistants, and it's the
   format that gets retrieved most.
4. **Consistent NAP** — the same name, email and location everywhere. Right now
   your title tag says "Shopify Development, Web Design & 3D/2D Animation
   Agency" while your keyword strategy is 3D product visualization and packaging.
   Pick one. The mismatch actively confuses entity resolution, and I've written
   `config/site.ts` around the product-visualization positioning — change
   `description` and `tagline` there if you'd rather lead with the other.
5. **Speed and clean HTML.** Your hero image is a **2.1 MB JPG** committed to
   `public/`. Convert it to WebP/AVIF and serve it through `next/image`. Crawlers
   with a fetch budget give up on slow pages.

### Two things to fix that aren't in this bundle

- **`/services` and `/about` are duplicate placeholder pages.** Two URLs with
  byte-identical content is a genuine quality signal problem. Either write them
  or add `robots: { index: false }` to their metadata until you do.
- **No social profiles in `siteConfig.social`.** `sameAs` is one of the
  strongest entity-verification signals available. Fill those in as soon as the
  profiles exist — the array filters out empty strings, so partial is fine.

---

## Vercel deployment

Nothing special is required. No new dependencies, no config changes, all routes
are static or statically generated.

1. Set `NEXT_PUBLIC_SITE_URL=https://prodesignity.com` for Production.
2. Push the branch; Vercel runs `next build`.
3. After the deploy: submit `https://prodesignity.com/sitemap.xml` in Google
   Search Console and Bing Webmaster Tools. Bing matters more than its market
   share suggests — it feeds ChatGPT's search layer.
4. Confirm `https://prodesignity.com/llms.txt` resolves in production.

---

## Legal caveat — please read

I'm not a lawyer and this isn't legal advice. What you have is a well-structured,
readable template that covers the ground a studio like yours needs. Before you
rely on it, have a qualified lawyer in your jurisdiction check at minimum:

- The **sub-processor table** in the privacy policy — it lists provider
  *categories*. Under GDPR you may need to name the actual companies.
- **Governing law and courts** (`config/site.ts` → `legal`). Serving US, UK and
  EU clients from Bangladesh has real implications for enforceability, and for
  whether you need a GDPR Article 27 representative in the EU/UK.
- The **liability cap and IP transfer** clauses, which are the two that get
  tested when something goes wrong.
- Whether the **retention periods** match what your accountant needs.

Every commercial number — deposit, revision rounds, refund window — is in
`config/site.ts` so your lawyer can hand you a list of changes and you can apply
them in one file.
