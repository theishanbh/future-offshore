# Future Offshore

Corporate website for **Future Offshore** — an offshore engineering company providing personalised, flexible, and innovation-driven services.

Built with Next.js, Tailwind CSS, and Framer Motion.

## Getting Started

```bash
pnpm install
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) to view the site.

### Other Commands

```bash
pnpm build          # Production build
pnpm format:write   # Format code with Prettier (run before committing)
```

## Pages

| Page           | Route              | Description                                                                    |
| -------------- | ------------------ | ------------------------------------------------------------------------------ |
| Home           | `/`                | Hero carousel, about intro, services overview, stats, core values, CTA         |
| About          | `/about`           | Company info, quote, mission, experience, leadership, values, quality & safety |
| Services       | `/services`        | Service cards grouped by category (Project Support, Technical Support)         |
| Service Detail | `/services/[slug]` | Individual service pages with features, image, and CTA                         |
| Contact        | `/contact`         | Contact form and company details                                               |

## Currently Disabled

The following features are built but currently disabled/hidden from the live site:

| Feature                      | Location                                      | Notes                                                                                                                      |
| ---------------------------- | --------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------- |
| **Projects page**            | `src/app/projects/page.tsx`                   | Page exists but removed from Header and Footer navigation. Route `/projects` still accessible directly.                    |
| **Testimonials section**     | `src/app/page.tsx` (`Testimonials` component) | Component exists in the file but removed from the Home page render. 4 client testimonials with auto-rotating carousel.     |
| **Theme toggle (dark mode)** | `src/components/ThemeToggle.tsx`              | Component exists but removed from Header. Theme is forced to light mode via `forcedTheme="light"` in `src/app/layout.tsx`. |

## Tech Stack

- **Framework**: Next.js (App Router)
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **UI Components**: Custom components based on Radix UI primitives
- **Fonts**: General Sans, Cabinet Grotesk (local)
- **Package Manager**: pnpm

## Project Structure

```
src/
├── app/
│   ├── page.tsx              # Home page
│   ├── about/page.tsx        # About page
│   ├── services/page.tsx     # Services listing
│   ├── services/[slug]/      # Individual service pages
│   ├── contact/page.tsx      # Contact page
│   ├── projects/page.tsx     # Projects page (disabled)
│   └── layout.tsx            # Root layout
├── components/
│   ├── Header.tsx            # Navigation with services dropdown
│   ├── Footer.tsx            # Site footer
│   ├── ThemeToggle.tsx       # Dark mode toggle (disabled)
│   └── ui/                   # Reusable UI components
├── data/
│   ├── services.ts           # Services data
│   └── projects.ts           # Projects data (disabled)
└── public/
    └── images/               # Local images (WebP optimised)
```
