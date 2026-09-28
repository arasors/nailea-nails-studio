# Nailea Nails Art Studio

Premium home-service nails website for Bali, built with Next.js 16, React 19 and Tailwind CSS 4.

## Local development

```bash
cp .env.example .env.local
npm install
npm run dev
```

Open `http://localhost:3000`. The first visit redirects to `/en`, `/id` or `/ru` from the browser language; unsupported languages fall back to English. The navigation switcher stores an explicit choice in the `nailea_locale` cookie and keeps the current service, area or article path when changing language.

Contact links, localized WhatsApp defaults and service-area summaries are configured in `.env.local`; see `.env.example` for every supported value. Replace the example `NEXT_PUBLIC_SITE_URL` with the final production domain before deployment so canonical URLs, hreflang links, the sitemap and structured data all use the correct origin.

## Quality checks

```bash
npm run check
```

This runs ESLint, TypeScript and a production build. On Vercel, the repository's `next.config.ts` leaves deployment output to the platform adapter; local and Docker builds retain standalone output.
