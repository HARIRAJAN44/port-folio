<!-- BEGIN:nextjs-agent-rules -->

# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` (resolved from this file's directory; in monorepos the `next` package may not be visible from the repo root) before writing any code. Heed deprecation notices.

This block is written and re-added by `next dev` — verify at `node_modules/next/dist/server/lib/generate-agent-files.js`. Removing it from a diff only re-creates the uncommitted change; committing it with your work keeps the tree clean.

<!-- END:nextjs-agent-rules -->

# Project-Specific Rules

1. portfolio-data.md is the authoritative source for all personal content.
2. design-system.md is the authoritative source for visual design.
3. Never invent personal information, achievements, experience, certifications,
   project statistics, dates, links, companies, clients, or results.
4. Use Next.js App Router and TypeScript.
5. Use Server Components by default.
6. Use Client Components only when interactivity or Motion requires them.
7. Use Motion for React from "motion/react".
8. Use shadcn/Base UI components where appropriate.
9. Keep components reusable and organized.
10. Follow the design system strictly.
11. Maintain accessibility and responsive behavior.
12. Avoid unnecessary dependencies.
13. Do not create generic AI-looking UI.
14. Do not use excessive gradients, glassmorphism, animations, shadows,
    rounded cards, or decorative elements.
15. Run npm run build after significant implementation changes.
16. Never remove working functionality without a reason.
