# Nailea Nails Studio — Website Project Brief

## 1. Project Overview

Build a premium, modern, English-language website for **Nailea Nails Studio**, a Bali-based nail service brand focused on **home-service manicure, gel nails and nail art**.

The website should feel like a luxury beauty brand rather than a generic salon website.

The primary website experience is a **single-page corporate landing page**, supported by:

- SEO-focused service/location landing pages
- Blog-style SEO content pages
- A dedicated customer reviews page
- Instagram and WhatsApp conversion links

The main business goal is to generate:

1. WhatsApp conversations
2. Instagram visits / DMs
3. Organic Google traffic from nail-related searches in Bali

The website must be built with **Next.js**.

---

# 2. Brand

## Brand Name

**Nailea Nails Studio**

## Positioning

Nailea is a premium nail service designed around convenience, aesthetics and personal service.

A major differentiator is:

> **Professional nail services delivered to the customer's location in Bali.**

The website should communicate:

- Premium service
- Home-service convenience
- Modern nail art
- Clean and elegant aesthetics
- Personal attention
- Easy booking
- Bali lifestyle

Avoid making the brand look overly cute, childish or like a discount beauty salon.

The overall visual direction should feel closer to a **modern fashion / beauty brand**.

---

# 3. Visual Identity

## Primary Colors

### Brand Pink

Use the same soft blush-pink tone used in Nailea's current social media and Facebook cover artwork.

Suggested fallback:

```css
--brand-pink: #f5c1ca;
```

The final implementation should preferably sample the exact color from the existing brand artwork.

### Black

```css
--brand-black: #080808;
```

### White

```css
--white: #ffffff;
```

The primary design language should mostly be:

```text
Pink background
+
Black typography
+
Black logo
+
Large amounts of whitespace
```

Occasional black sections with pink typography can be used for contrast.

---

# 4. Logo

The Nailea logo uses:

- A strong geometric triangular form
- Black typography
- Bold modern sans-serif lettering
- Minimal fashion-brand visual language

The logo should be displayed clearly but should not dominate every section.

Recommended placements:

- Navbar
- Hero
- Footer
- Mobile menu
- Open Graph / social branding

Do not redesign or reinterpret the logo unless explicitly requested.

---

# 5. Typography

The typography should be:

- Modern
- Sans-serif
- Strong
- Clean
- Editorial
- Premium

Suggested direction:

### Display / Headings

Examples:

- Helvetica Neue
- Neue Haas Grotesk
- Inter Tight
- Manrope
- Geist
- similar geometric / editorial sans-serif

### Body

Examples:

- Inter
- Geist Sans
- Manrope

Use strong typography hierarchy.

Large headlines are encouraged.

Avoid overly decorative fonts.

---

# 6. Technical Stack

Use:

```text
Next.js latest stable
App Router
TypeScript
React
Tailwind CSS
```

Recommended:

```text
next/image
next/font
MDX or structured content files
Server Components by default
Static Generation where possible
```

Optional:

```text
Framer Motion
```

Only use animation where it improves the premium feeling.

Avoid excessive motion.

---

# 7. Primary Website Structure

The main website should have a premium **single-page landing experience**.

Recommended homepage sections:

```text
Navbar
Hero
Trust / Value Proposition
Services
Nail Art Styles
Home Service
Portfolio / Recent Work
Why Nailea
How It Works
Customer Reviews Preview
Service Areas
FAQ
Booking CTA
Instagram Section
Footer
```

---

# 8. Navbar

Minimal navbar.

Desktop example:

```text
NAILEA LOGO

Services
Nail Art
Gallery
Reviews
FAQ

Instagram
Book via WhatsApp
```

Mobile:

Use a clean full-screen or sheet-style menu.

The main CTA should remain obvious:

```text
Book via WhatsApp
```

---

# 9. Hero Section

The hero needs to immediately explain the business.

Suggested content direction:

## Eyebrow

```text
NAILEA NAILS STUDIO — BALI
```

## Main Heading

Example:

```text
Beautiful Nails.
Without Leaving Home.
```

Alternative:

```text
Luxury Nail Service,
Delivered to You.
```

## Supporting Text

Example:

```text
Premium manicure, gel nails and nail art in the comfort of your home, villa or hotel in Bali.
```

## CTAs

Primary:

```text
Book via WhatsApp
```

Secondary:

```text
View Our Work
```

Optionally:

```text
Instagram
```

Hero imagery should use high-quality real Nailea nail work wherever possible.

---

# 10. Core Value Proposition

Clearly communicate the home-service model.

Example message:

```text
Your nails. Your space. Your time.

Nailea brings a premium nail studio experience directly to your home, villa or hotel in Bali.
```

Important benefits:

- No travel required
- Private appointment
- Comfortable environment
- Professional tools and service
- Modern nail designs
- Flexible booking

---

# 11. Services Section

The website should clearly explain the available nail services.

Possible categories:

```text
Manicure
Gel Nails
Gel Polish
Nail Extensions
French Tips
Nail Art
Chrome Nails
Cat Eye
Floral Nail Art
Minimal Nail Art
3D Nail Art
Custom Designs
```

Do not display exact pricing unless it is intentionally added later.

Instead use:

```text
For pricing, please contact us via WhatsApp or Instagram.
```

CTA:

```text
Ask for Pricing
```

---

# 12. Nail Shapes / Styles Section

The website may visually show common nail shapes.

Examples:

```text
Short Natural
Oval
Almond
Square
Coffin
French
```

This section should be visual rather than text-heavy.

Use simple illustrations or real work.

---

# 13. Nail Art Styles

Display nail-art styles using real customer work whenever possible.

Example categories:

```text
French Tips
Chrome
Floral Art
Minimal Line Art
Cat Eye
3D Details
Glitter
Aura Nails
Marble
Custom Nail Art
```

Each item can link to a corresponding SEO/service page if available.

---

# 14. Portfolio / Recent Work

Portfolio photography is one of the most important parts of the site.

Display real work in a premium editorial grid.

Suggested format:

```text
2 real nail photographs
1 brand/design tile
2 real nail photographs
1 brand/design tile
```

This can visually follow the existing Nailea Instagram strategy.

Possible content tile messages:

```text
Home Service
New Sets
Nail Art
Book Now
Made for You
Beauty Comes to You
```

Avoid generic stock photography when real Nailea work exists.

---

# 15. Home Service Section

This should be a major conversion section.

Suggested heading:

```text
The Nail Studio Comes to You.
```

Suggested copy:

```text
Book your appointment and enjoy a professional nail service at your home, villa or hotel.

No traffic.
No waiting.
Just your appointment, your space and your new nails.
```

CTA:

```text
Book Home Service
```

Link to WhatsApp.

---

# 16. How It Works

Keep this very simple.

Example:

### 01 — Choose Your Style

Browse our services and recent nail designs.

### 02 — Message Us

Contact Nailea through WhatsApp or Instagram.

### 03 — Confirm Your Appointment

Choose your service, location and preferred time.

### 04 — We Come to You

Enjoy your nail appointment at your home, villa or hotel.

---

# 17. Reviews

Create a dedicated page:

```text
/reviews
```

It should display approximately **20–25 customer reviews**.

Recommended review fields:

```ts
type Review = {
  name: string;
  rating: 5 | 4;
  text: string;
  date?: string;
  service?: string;
  location?: string;
  source?: "Google" | "Instagram" | "WhatsApp" | "Direct";
};
```

Reviews should visually look elegant and editorial.

Do not make the layout look like generic review cards from a template marketplace.

Possible layout:

```text
large featured review
+
masonry / grid review cards
```

Only publish genuine or business-approved reviews.

If development fixtures are needed before final copy is available, mark them clearly in the code as placeholder content and replace them before production.

Homepage should show approximately:

```text
3–6 reviews
```

with CTA:

```text
Read More Reviews
```

---

# 18. Instagram

Instagram is a major trust and portfolio channel.

Add Instagram links in:

- Navbar
- Portfolio
- CTA sections
- Footer

Suggested component:

```text
Follow our latest work
@NAILEA...
```

Optionally display 3–6 recent images manually.

Do not make page performance dependent on an unstable Instagram embed.

A manually managed gallery linking to Instagram is preferred.

---

# 19. WhatsApp

WhatsApp is the primary conversion channel.

Use WhatsApp links throughout the website.

Primary CTA examples:

```text
Book via WhatsApp
Ask for Pricing
Check Availability
Send Us Your Nail Inspiration
```

Recommended link format:

```text
https://wa.me/<number>?text=<encoded-message>
```

Suggested default message:

```text
Hi Nailea! I would like to book a nail appointment in Bali.
```

Add the phone number later through environment/configuration data instead of hardcoding it throughout components.

Example:

```ts
export const contact = {
  whatsapp: "...",
  instagram: "...",
};
```

On mobile, consider a small sticky WhatsApp booking button.

It must not obstruct content.

---

# 20. SEO Strategy

SEO is a core requirement.

The target is to rank for relevant nail searches in Bali.

The website must not depend only on the homepage.

Build a reusable SEO content system.

---

# 21. Target Search Themes

Examples:

```text
nails bali
nail salon bali
nail art bali
manicure bali
gel nails bali
home service nails bali
mobile nail service bali
nail artist bali
nail extensions bali
french nails bali
chrome nails bali
nail art service bali
```

Location-oriented searches may include areas the business genuinely serves.

Examples:

```text
nails canggu
nail salon canggu
home service nails canggu

nails seminyak
nail salon seminyak

nails kerobokan
nail service kerobokan

nails ubud
nail salon ubud
```

Only create location pages for areas that Nailea actually serves.

---

# 22. SEO Page Model

Create a generic data-driven page system.

Recommended route:

```text
/services/[slug]
```

and optionally:

```text
/locations/[slug]
```

Possible examples:

```text
/services/nail-art-bali
/services/gel-nails-bali
/services/home-service-nails-bali
/services/french-nails-bali
/services/chrome-nails-bali
```

Location examples:

```text
/locations/canggu
/locations/seminyak
/locations/kerobokan
```

Do not build hundreds of thin keyword pages.

Each page must contain genuinely useful and unique content.

Avoid doorway-page SEO patterns.

---

# 23. SEO Content Schema

Each SEO page should be generated from structured content.

Example:

```ts
export type SeoPage = {
  slug: string;
  keyword: string;

  title: string;
  metaTitle: string;
  metaDescription: string;

  eyebrow?: string;
  heroTitle: string;
  heroDescription: string;

  intro: string;

  sections: {
    title: string;
    content: string;
  }[];

  faq?: {
    question: string;
    answer: string;
  }[];

  relatedServices?: string[];
  relatedLocations?: string[];

  image?: string;
};
```

Content can live in:

```text
/content/services/
/content/locations/
/content/blog/
```

Recommended format:

```text
MDX
```

or structured TypeScript / JSON content.

MDX is preferred for longer SEO content.

---

# 24. Blog / Editorial SEO Content

Create an editorial content section.

Suggested route:

```text
/blog/[slug]
```

Examples:

```text
Best Nail Styles for Bali Holidays
Gel Nails vs Regular Polish in Bali
Best Nail Shapes for Short Fingers
How Long Do Gel Nails Last in Bali?
Nail Care Tips for Tropical Weather
French Nail Ideas for Your Bali Holiday
Minimal Nail Art Ideas
Chrome Nail Trends
What to Know Before Booking a Home Nail Service in Bali
Nail Appointment at Your Bali Villa
```

These pages should be helpful first and SEO-oriented second.

Avoid keyword stuffing.

---

# 25. Blog Page Structure

Each article should include:

```text
Breadcrumb
H1
Short introduction
Hero image
Article sections
Relevant nail photos
FAQ
Related services
Related articles
Booking CTA
```

Every post should naturally lead to:

```text
Book via WhatsApp
```

---

# 26. Internal Linking

SEO pages should strongly cross-link.

Example:

```text
Chrome Nails Bali
    → Nail Art Bali
    → Home Service Nails Bali
    → Canggu Nail Service
    → Booking CTA
```

Blog content should link back to relevant service pages.

The homepage should link to the most important SEO landing pages.

---

# 27. Metadata

Use Next.js Metadata API.

Every page needs unique:

```text
title
meta description
canonical URL
Open Graph title
Open Graph description
Open Graph image
Twitter card data
```

Do not duplicate titles/descriptions across keyword pages.

---

# 28. Structured Data

Where appropriate add Schema.org structured data.

Recommended schemas:

```text
LocalBusiness
BeautySalon / NailSalon
Service
Review
AggregateRating
FAQPage
Article
BreadcrumbList
```

Only include rating/review data that is actually visible and valid on the website.

---

# 29. Local SEO Content

Clearly communicate:

```text
Home nail service in Bali
```

Include a genuine service-area section.

Example:

```text
Serving clients across selected areas of Bali.
```

Then list only areas actually covered.

Do not claim locations where the service is unavailable.

---

# 30. Google Search Content Quality

The project should prioritize useful content over mass-generated pages.

Rules:

- No duplicated pages with only the location name changed
- No keyword stuffing
- No hidden SEO text
- No auto-generated nonsense paragraphs
- No hundreds of low-quality landing pages
- Every SEO page should answer a real search intent
- Use unique headings and FAQs
- Add relevant images
- Link naturally to booking/service pages

The generic system should make it easy to create quality pages, not spam pages.

---

# 31. Homepage SEO

Suggested homepage title direction:

```text
Nailea Nails Studio | Home Nail Service in Bali
```

Suggested homepage description direction:

```text
Premium manicure, gel nails and nail art delivered to your home, villa or hotel in Bali. Discover Nailea Nails Studio and book your appointment via WhatsApp.
```

Do not hardcode this exact copy if a better final copy is produced during implementation.

---

# 32. FAQ

Recommended questions:

```text
Do you provide home nail service in Bali?
Which areas of Bali do you cover?
How do I book an appointment?
How can I check prices?
Do you offer nail art?
Do you provide gel nails?
Can I send you a reference design?
Can I book at my villa or hotel?
How long does an appointment take?
How far in advance should I book?
```

Answers should be concise and factual.

Do not invent operational policies that have not been provided.

Use placeholders marked `TODO` where business confirmation is required.

---

# 33. Conversion Strategy

The website should make booking extremely easy.

Main conversion:

```text
WhatsApp
```

Secondary conversion:

```text
Instagram DM
```

Important CTAs:

```text
Book via WhatsApp
Ask for Pricing
Check Availability
View Our Work
Follow on Instagram
Send Your Inspiration
```

Avoid excessive forms.

A full booking system is not required for the first version.

---

# 34. Mobile UX

The majority of traffic is expected to be mobile.

Design mobile-first.

Requirements:

- Large tap targets
- Fast loading
- Clear WhatsApp CTA
- No tiny typography
- No oversized animations
- No horizontal overflow
- Optimized images
- Easy gallery browsing
- Sticky booking CTA can be used

---

# 35. Image Strategy

Use:

```text
AVIF / WebP
Next/Image
responsive image sizes
lazy loading below the fold
```

Hero should be optimized carefully for LCP.

Use genuine Nailea work whenever available.

Store image metadata centrally where useful.

Example:

```ts
{
  src,
  alt,
  width,
  height,
}
```

All important images need useful alt text.

Avoid keyword-stuffed alt attributes.

---

# 36. Performance Requirements

Target:

```text
Lighthouse Performance: 90+
SEO: 95+
Accessibility: 95+
Best Practices: 95+
```

Aim for excellent Core Web Vitals.

Keep JS bundle small.

Avoid unnecessary client components.

---

# 37. Accessibility

Requirements:

- Semantic HTML
- Correct heading hierarchy
- Keyboard accessible
- Visible focus states
- Sufficient contrast
- Descriptive links
- Accessible buttons
- Image alt text
- Respect prefers-reduced-motion

---

# 38. Suggested Component Architecture

Example:

```text
components/
  layout/
    Header.tsx
    Footer.tsx
    MobileMenu.tsx

  home/
    Hero.tsx
    ValueProposition.tsx
    Services.tsx
    NailStyles.tsx
    HomeService.tsx
    Portfolio.tsx
    HowItWorks.tsx
    ReviewsPreview.tsx
    ServiceAreas.tsx
    FAQ.tsx
    BookingCTA.tsx

  shared/
    SectionHeading.tsx
    WhatsAppButton.tsx
    InstagramButton.tsx
    ReviewCard.tsx
    NailGallery.tsx
    TriangleBrandMark.tsx
    CTA.tsx

  seo/
    SeoHero.tsx
    SeoContent.tsx
    RelatedServices.tsx
    RelatedArticles.tsx
    JsonLd.tsx
```

---

# 39. Suggested App Structure

Example:

```text
app/
  layout.tsx
  page.tsx

  reviews/
    page.tsx

  services/
    [slug]/
      page.tsx

  locations/
    [slug]/
      page.tsx

  blog/
    page.tsx
    [slug]/
      page.tsx

  sitemap.ts
  robots.ts
```

Content:

```text
content/
  services/
  locations/
  blog/
```

Configuration:

```text
config/
  brand.ts
  contact.ts
  navigation.ts
```

---

# 40. Brand Configuration

Create a central brand file.

Example:

```ts
export const brand = {
  name: "Nailea Nails Studio",

  colors: {
    pink: "#f5c1ca",
    black: "#080808",
    white: "#ffffff",
  },

  social: {
    instagram: "",
    whatsapp: "",
  },
};
```

Actual URLs must be provided before production.

---

# 41. Analytics

Prepare for:

```text
Google Analytics
Google Search Console
Meta Pixel (optional)
```

Track useful conversion events:

```text
whatsapp_click
instagram_click
portfolio_view
pricing_click
booking_click
```

Do not add trackers until the relevant IDs and consent requirements are defined.

---

# 42. Footer

Keep minimal.

Example:

```text
NAILEA NAILS STUDIO

Luxury Home Nail Service in Bali

Instagram
WhatsApp

Services
Gallery
Reviews
Blog

© Nailea Nails Studio
```

---

# 43. Design Rules

## Do

- Use large typography
- Use whitespace
- Keep layouts editorial
- Use real nail photography
- Use the pink / black system consistently
- Use the triangle motif selectively
- Keep CTAs obvious
- Prioritize mobile
- Maintain a luxury fashion/beauty feel

## Do Not

- Use generic salon templates
- Use gold gradients everywhere
- Use excessive shadows
- Use too many icons
- Use dozens of different fonts
- Use excessive animation
- Use stereotypical beauty imagery
- Make every section pink-on-pink without contrast
- Overload the page with copy

---

# 44. Copywriting Style

Website language:

```text
English
```

Tone:

```text
Premium
Warm
Confident
Modern
Feminine
Simple
```

Avoid:

```text
Corporate jargon
Overly cute language
Aggressive sales copy
Cheap / discount messaging
Too many emojis
```

Good example:

```text
Beautiful nails, without leaving home.
```

Bad example:

```text
OMG GIRLS!!! Get your dream nails NOW!!! 💅💖✨
```

---

# 45. Required Initial Pages

Version 1 should include:

```text
/
 /reviews
 /blog
 /blog/[slug]
 /services/[slug]
```

Optional but recommended:

```text
/locations/[slug]
```

---

# 46. Initial SEO Pages

Suggested initial high-quality pages:

```text
/services/home-service-nails-bali
/services/nail-art-bali
/services/gel-nails-bali
/services/manicure-bali
/services/french-nails-bali
/services/chrome-nails-bali
```

Do not publish a page until it has sufficient unique content.

---

# 47. Suggested Initial Blog Content

Start with approximately 6–10 strong articles rather than publishing dozens of thin articles.

Initial ideas:

```text
1. The Best Nail Styles for a Bali Holiday
2. Gel Nails vs Regular Polish: Which Is Better in Bali?
3. Minimal Nail Art Ideas for Your Bali Trip
4. How Long Do Gel Nails Last?
5. How to Choose the Best Nail Shape for You
6. French Nail Ideas for a Timeless Look
7. Chrome Nails: Everything You Need to Know
8. Booking a Home Nail Service in Bali
9. Nail Care Tips for Bali's Tropical Climate
10. Nail Inspiration for Brides in Bali
```

---

# 48. Content Management

For the first version, a full CMS is not required.

Use MDX/content files so the owner or an AI coding agent can easily add pages.

Example:

```text
content/blog/chrome-nails-bali.mdx
```

Frontmatter:

```yaml
---
title: "Chrome Nails in Bali"
description: "..."
slug: "chrome-nails-bali"
publishedAt: "YYYY-MM-DD"
image: "/images/blog/chrome-nails.jpg"
keywords:
  - chrome nails bali
  - nail art bali
---
```

---

# 49. Future Expansion

Architecture should allow future additions:

```text
Online booking
Service pricing
Multi-language support
Customer gallery
CMS
Google Reviews integration
Instagram feed integration
Appointment availability
Payments
```

Do not build these unless requested.

---

# 50. Missing Information / TODO

The developer or AI agent must not invent the following.

Keep them as configuration placeholders until supplied:

```text
WhatsApp number
Instagram username / URL
Business email
Exact service area
Opening hours
Exact service list
Pricing
Review content
Google Business Profile URL
Final logo files
Final brand pink hex
Analytics IDs
Domain
```

---

# 51. Definition of Done

The initial website should be considered complete when:

- Next.js production build passes
- Fully responsive
- Homepage looks premium on mobile and desktop
- WhatsApp CTA works
- Instagram links work
- Reviews page supports 20–25 reviews
- SEO landing-page system works from structured content
- Blog system works
- Metadata is dynamic and unique
- Sitemap is generated
- robots.txt is configured
- JSON-LD is implemented where appropriate
- Images are optimized
- No major accessibility issues
- No horizontal overflow
- Lighthouse targets are reasonably met
- No placeholder reviews or fake business facts remain in production
- Brand design remains consistent with Nailea's pink / black visual identity

---

# 52. Core Product Principle

The website should communicate one idea extremely clearly:

> **Nailea gives clients beautiful, premium nails without requiring them to leave their home, villa or hotel in Bali.**

Every major page should ultimately make it easy for the visitor to:

```text
See the work
Trust the brand
Choose a service
Message Nailea
Book an appointment
```
