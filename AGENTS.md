# Repository Guidelines

## Project Structure & Module Organization
This is a Vite + React + TypeScript portfolio app.

- `src/index.tsx`: app entry point and router mount.
- `src/router.tsx`: route definitions (`/` and `/cv`).
- `src/pages/*`: page-level features (for example `src/pages/main/main.tsx`).
- `src/components/*`: reusable UI blocks (for example `title`, `navbar`).
- `src/styles/*`: global styles, variables, and font imports.
- `src/assets/fonts/*`: bundled font files.
- `public/`: static assets served as-is.

Keep component styles colocated using `*.module.css` next to the component/page.

## Build, Test, and Development Commands
- `npm run dev`: starts local dev server on port `3000`.
- `npm run build`: runs TypeScript project build (`tsc -b`) and production Vite build.
- `npm run lint`: runs ESLint across the repo.
- `npm run preview`: serves the production build locally.

Typical local validation before opening a PR:
1. `npm run lint`
2. `npm run build`

## Coding Style & Naming Conventions
- Language: TypeScript (`.ts`/`.tsx`) with React function components.
- Indentation: tabs (follow existing files).
- Components: `PascalCase` exports (example: `Navbar`, `MainPage`).
- File names: lowercase, feature-based folders (example: `src/components/navbar/navbar.tsx`).
- CSS Modules: class names in `camelCase` (example: `navButton`).
- Prefer small, focused components and keep route/page composition in `src/pages`.

Formatting/linting is enforced with ESLint (`eslint.config.js`). Fix lint warnings before merge.

## Testing Guidelines
No automated test framework is configured yet. For now:
- run `npm run lint` and `npm run build` on every change;
- verify UI changes manually in `npm run dev`;
- include clear reproduction/verification steps in PRs.

If tests are added, place them near the feature (`Component.test.tsx`).

## Commit & Pull Request Guidelines
Use Conventional Commit style seen in history:
- `feat: ...`
- `fix: ...`
- `chore: ...`
- `refactor: ...`

PRs should include:
- concise summary of what changed and why;
- linked issue/task (if available);
- screenshots or short video for visual changes;
- notes on affected routes/components and manual test steps.
