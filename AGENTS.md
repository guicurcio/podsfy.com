# Repository Overview

This repository contains the source code for **podsfy.com**, a Next.js 14 application built with TypeScript. It uses the **app** directory structure along with modern React features. The codebase integrates Tailwind CSS for styling, Prisma for database ORM, Nhost for authentication, and Hasura GraphQL.

Key directories:

- `src/app` – Next.js "app" router with folders like `(auth)`, `(home)`, `(company)`, `(podcast)`.
- `src/ui` – Reusable UI components and hooks.
- `src/components` – Feature‑specific React components.
- `src/lib` – Utility libraries, database setup, and constants.
- `src/data` and `src/json` – Static data and large JSON datasets for podcasts and episodes.
- `scripts` – Node scripts for data processing/compression.
- `prisma` – Prisma schema and migrations.

Configuration highlights:

- ESLint rules defined in `.eslintrc.cjs` with TypeScript support.
- Prettier formatting via `prettier.config.cjs`.
- Tailwind configuration in `tailwind.config.js`.
- Docker Compose files for local Postgres and Hasura.

Development commands (from `package.json`):

- `pnpm dev` – Run the Next.js development server.
- `pnpm build` – Build the app (linting disabled by default).
- `pnpm prisma:generate` – Generate Prisma client code.
- `pnpm graphql:codegen` – Generate TypeScript types for GraphQL queries.

No automated tests are included in this repository.

# Agent Guidelines

When working in this repository:

1. Follow the existing project structure and TypeScript conventions.
2. Keep imports absolute using the configured path aliases (e.g. `@/lib/…`).
3. Use Prettier and ESLint configurations provided in the repo when modifying code.
4. Run `pnpm prisma:generate` if you change `schema.prisma`.
5. Large JSON assets live under `src/json` and should not be committed if generated.
6. There is no test suite. After changes, ensure `pnpm build` runs without errors.

