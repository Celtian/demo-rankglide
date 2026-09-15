# Repository Guidance

## Project overview

- This repository is a static TypeScript application built with Vite 8 and Tailwind CSS 4.
- Source files live in `src/`, and production output is generated in `dist/`.
- GitHub Pages deployment is configured in `.github/workflows/main.yaml`.
- Use Bun for dependency management and scripts.
- Use the Node.js version declared in `.nvmrc`.

## Common commands

```sh
nvm use
bun install
bun run dev
bun run lint
bun run build
bun run preview
```

Before handing off changes, run `bun run lint`, `bun run build`, and `git diff --check`.

## Code and configuration conventions

- Keep the application framework-free unless a task explicitly requires a framework.
- Use strict TypeScript and ESM syntax throughout.
- Follow the existing formatting: two spaces, single quotes, and semicolons.
- Keep Tailwind and global styling changes in the existing CSS and PostCSS structure.
- Do not edit or commit generated `dist/` output.
- Keep `package.json` and `bun.lock` synchronized.
- Preserve unrelated changes in the working tree.
