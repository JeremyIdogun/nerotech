# NeroTech Consulting Limited — Website

Official website for NeroTech Consulting Limited. Built with Next.js App Router, TypeScript, and Tailwind CSS. Deployed via Netlify.

## Tech Stack

| Layer | Technology |
|---|---|
| Framework | Next.js 16 (App Router) |
| Language | TypeScript |
| Styling | Tailwind CSS v4 |
| Fonts | Plus Jakarta Sans (headings), Manrope (body) |
| Icons | lucide-react |
| Animations | framer-motion |
| Forms | Server Actions + Zod validation |
| Email | Resend (optional) |
| Hosting | Netlify |
| Package manager | pnpm |

## Local Setup

```bash
# Install dependencies
pnpm install

# Copy environment variables
cp .env.example .env.local

# Start development server
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000).

## Environment Variables

Copy `.env.example` to `.env.local` and fill in values as needed.

| Variable | Required | Description |
|---|---|---|
| `NEXT_PUBLIC_SITE_URL` | No | Public URL of the site |
| `RESEND_API_KEY` | No | Resend API key for contact form emails |
| `CONTACT_TO_EMAIL` | No | Address contact submissions are sent to |
| `CONTACT_FROM_EMAIL` | No | Sender address for contact emails |
| `NEXT_PUBLIC_PLAUSIBLE_DOMAIN` | No | Plausible analytics domain |
| `NEXT_PUBLIC_GA_ID` | No | Google Analytics measurement ID |

Without `RESEND_API_KEY`, contact form submissions are logged to the console in development and succeed silently.

## Available Scripts

```bash
pnpm dev          # Start development server
pnpm build        # Production build
pnpm start        # Start production server
pnpm lint         # Run ESLint
pnpm typecheck    # Run TypeScript compiler check
pnpm format       # Format with Prettier
pnpm netlify:dev  # Local Netlify dev server (requires netlify-cli)
```

## Site Map

```
/                   Homepage
/about              About NeroTech
/services           Services overview
/services/[slug]    Individual service pages
/case-studies       Case studies (placeholder)
/insights           Insights (placeholder)
/contact            Contact form
```

## Content Editing

All site content lives in `src/content/`:

| File | Contents |
|---|---|
| `site.ts` | Company name, tagline, contact details, RC number |
| `services.ts` | Four service pillars — titles, descriptions, capabilities, outcomes |
| `navigation.ts` | Header/footer nav links |
| `case-studies.ts` | Case study entries (empty, ready to populate) |
| `insights.ts` | Insight entries (empty, ready to populate) |

Edit these TypeScript files directly. When Sanity or another CMS is added, these files are replaced by CMS queries.

## Brand Tokens

| Token | Value | Use |
|---|---|---|
| NeroTech Teal | `#12A3A2` | Primary accent, buttons, icons |
| Dark Teal | `#0D6E70` | Hover states, deeper panels |
| Charcoal | `#18232F` | Primary text, dark sections |
| Off-White | `#F3F7F7` | Main background |
| Gold | `#D9A441` | Sparse premium accent only |
| Mid Grey | `#6B7280` | Secondary body text |
| Soft Grey | `#E5ECEC` | Borders, dividers |

## Netlify Deployment

1. Push the project to a GitHub repository.
2. Connect the repository to Netlify.
3. Use build command: `pnpm build`
4. Use publish directory: `.next`
5. Set Node version to `20` in environment settings.
6. Add environment variables from `.env.example`.
7. Deploy from the `main` branch.

Pre-deployment checks:

```bash
pnpm lint
pnpm typecheck
pnpm build
```

The project uses `@netlify/plugin-nextjs` (declared in `netlify.toml`) to adapt the Next.js App Router for Netlify's runtime.
