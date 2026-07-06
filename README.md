# Core Engine Lab — XStakUp Website

Official marketing website for **XStakUp**, a custom enterprise software development company based in Lagos, Nigeria.

## Tech Stack

- **Framework:** [Next.js 15](https://nextjs.org/) (App Router) with Turbopack
- **Language:** TypeScript
- **Styling:** [Tailwind CSS 4](https://tailwindcss.com/) with CSS variables
- **Animation:** [Framer Motion](https://www.framer.com/motion/) + [Lenis](https://lenis.darkroom.engineering/) (smooth scroll)
- **UI Components:** [Radix UI](https://www.radix-ui.com/) primitives (shadcn/ui patterns)
- **Data Fetching:** [TanStack React Query](https://tanstack.com/query)
- **Forms:** React Hook Form + Zod

## Getting Started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Scripts

| Command           | Description                 |
| ----------------- | --------------------------- |
| `npm run dev`     | Start dev server (Turbopack) |
| `npm run build`   | Production build             |
| `npm run preview` | Preview production build     |
| `npm run lint`    | Run ESLint                   |
| `npm run format`  | Format code with Prettier    |
| `npm test`        | Run tests (Vitest)           |

## Project Structure

```
src/
├── app/            # Next.js App Router pages & API routes
├── components/     # React components
│   ├── common/     # Reusable primitives (buttons, cards, etc.)
│   ├── home/       # Homepage-specific sections
│   ├── layout/     # Navbar, Footer
│   ├── pages/      # Page-level orchestrators
│   ├── sections/   # Page-specific sections (about, careers, etc.)
│   └── ui/         # shadcn-style UI components
├── data/           # Content data (services, case studies, team, etc.)
├── hooks/          # Custom React hooks
├── lib/            # Utility functions
└── types/          # TypeScript interfaces
```

## Routes

- `/` — Home
- `/about` — About the company
- `/services`, `/services/[slug]` — Services & detail
- `/work`, `/work/[slug]` — Case studies
- `/expertise` — Engineering expertise
- `/industries` — Industries served
- `/process` — Development process
- `/insights`, `/insights/[slug]` — Blog/insights
- `/careers` — Job openings
- `/community` — Engineering community
- `/clients` — Client showcase
- `/contact` — Contact form
- `POST /api/contact` — Contact form API

## Data

All content is defined in `src/data/` as TypeScript files. The `CardColor` type and shared color constants are defined in `src/data/index.ts`. Page-specific content is organized into separate files by domain (`about.ts`, `careers.ts`, `community.ts`, `expertise.ts`, `home.ts`, `blog.ts`).
