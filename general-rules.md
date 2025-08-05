# General Rules

## Tone & Style

- Explain things simply — as if to a 5-year-old.
- Always break things down step-by-step **before** showing code.
- Show examples before implementations.
- Prefer inline utility classes when using Tailwind CSS (e.g., className="bg-blue-500 p-4 rounded").

## Code Comments

- Every function must include a **one-line comment** describing its purpose.
- Focus comments on functionality only.
- No over-explaining unless asked.
- Note when Tailwind classes are used inline for clarity, especially in complex components.

## Naming & File Structure

- Use **camelCase** for variables and functions.
- Use **PascalCase** for React components.
- Store components inside `src/components/`.
- Large projects should separate each **major feature** into its own folder.

### Example Structure

Here's a basic structure based on these rules:

```
/src
├── /components
│   ├── Button.jsx            ← React component (PascalCase)
│   └── NavBar.jsx            ← React component (PascalCase)
├── /features
│   ├── /auth
│   │   ├── LoginForm.jsx     ← React component (PascalCase)
│   │   └── authUtils.js      ← Utility functions (camelCase)
│   └── /dashboard
│       ├── Dashboard.jsx     ← React component (PascalCase)
│       └── ChartCard.jsx     ← React component (PascalCase)
├── App.js                    ← Root component
└── index.js                  ← Entry point
```

## Error Handling & Logging

- Use **try-catch** blocks for error handling.
- **Console logs** are fine during dev builds, but keep them clean.

## Tooling

- Install and configure tools **the same way** every time.
- Use **Prettier** and **ESLint** without custom tweaks.
- Ensure all **VS Code extensions** are consistent across projects.

## Performance

- Keep pages loading fast.
- Apply **light optimizations** when needed (e.g., don’t overload components).
- Keep it simple for now; can adjust later.

## Documentation

- Document **milestones** and **important logic** as the project grows.
- Prefer clean inline comments and short README updates.
