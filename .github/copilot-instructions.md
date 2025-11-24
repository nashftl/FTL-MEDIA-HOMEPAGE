<!-- .github/copilot-instructions.md -->
# Quick notes for AI coding agents working on this repository

This file contains focused, actionable information to help an AI agent be productive in the `web-services-portfolio` project.

- Project type: React (JSX) + Vite app using Tailwind CSS. Entry: `index.html` -> `src/main.jsx` -> `src/App.jsx`.
- Dev commands (use the project root):
  - Start dev server: `npm run dev` (Vite, HMR)
  - Build production bundle: `npm run build` then `npm run preview` to serve `dist` locally
  - Lint: `npm run lint` (project uses `eslint.config.js`)

- Key files & structure to reference when making code changes:
  - `src/` — main source. All UI components live in `src/components/` as small functional React components (JSX files).
  - `src/main.jsx` — React bootstrap (imports `index.css`, mounts `<App />`, uses `React.StrictMode`).
  - `src/index.css` — imports Tailwind (`@import "tailwindcss"`) — Tailwind classes are used inline in components.
  - `eslint.config.js` — project lint rules. Note: `no-unused-vars` is configured with `varsIgnorePattern: '^[A-Z_]'` (identifiers that start with an uppercase letter or underscore are ignored).
  - `public/` and `src/assets/` — static images; some images are duplicated (Figma exports in `img/figma-design/` and `public/images/projects/`).

- Architecture & conventions (concrete, discoverable):
  - UI is component-driven with presentational components. Components are simple, often using local `useState` (see `src/components/Header.jsx` for a mobile menu pattern).
  - CSS is applied via Tailwind utility classes inside JSX — prefer editing classes on elements rather than adding component-specific CSS files.
  - No global state management, routing, or backend integration present. Forms are implemented as client-side UI and use `mailto:` links (see `src/components/Contact.jsx`).
  - File extensions: `.jsx`. Keep new React components as `.jsx` unless the repository is migrated to TypeScript.

- Patterns & examples to follow when modifying or adding code:
  - Accessibility: existing components use semantic tags (`<header>`, `<nav>`, `<section>`) and `aria-*` attributes — preserve these patterns.
  - Responsive classes: observe `md:` / `lg:` Tailwind prefixes used in `Header.jsx`, `Contact.jsx` (mobile-first).
  - Asset paths: components reference images with absolute paths that start with `/src/` or `/public/` (e.g. `<img src="/src/assets/icons/logo.svg" />`). Keep path style consistent.

- Linting & code style notes:
  - ESLint config is in `eslint.config.js` and is run by `npm run lint`.
  - The project targets modern ECMAScript modules (`type: "module"` in `package.json`) and uses JSX syntax.

- What an agent should avoid doing:
  - Do not add new runtime dependencies unless strictly necessary. The project is intentionally minimal (only `react`, `react-dom` + Vite plugins).
  - Avoid converting files to TypeScript or changing project-wide config without explicit instruction from the maintainer.
  - Do not change public-facing copy (text, contact email/phone) unless asked — these are site content, not structural bugs.

- Helpful quick examples to reference in PRs or suggestions:
  - Add a new component: create `src/components/MyComponent.jsx`, export default a functional component, import it in `src/App.jsx` and add to the component tree.
  - Local state pattern: use `useState` and event handlers (see `Header.jsx` toggleMenu or `Contact.jsx` input handlers).
  - Mail form: to preserve current behavior, leave `mailto:` anchor approach in `Contact.jsx` unless the user requests backend/email integration.

- Verification checklist for small PRs (what to run locally):
  1. `npm run dev` — confirm dev server starts and page renders without console errors
 2. `npm run lint` — ensure no new lint errors
 3. `npm run build` + `npm run preview` — optional for changes affecting build output

If any of these notes are unclear or you need more detail (tests, CI, deployment targets), tell me which area to expand and I will update this file.
