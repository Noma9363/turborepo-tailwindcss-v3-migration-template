# shadcn/ui monorepo template

This template is for creating a monorepo with shadcn/ui.

## Usage

```bash
pnpm dlx shadcn@latest init
```

## Adding components

To add components to your app, run the following command at the root of your `web` app:

```bash
pnpm dlx shadcn@latest add button -c apps/web
```

This will place the ui components in the `packages/ui/src/components` directory.

## Tailwind

Your `tailwind.config.ts` and `globals.css` are already set up to use the components from the `ui` package.

## Using components

To use the components in your app, import them from the `ui` package.

```tsx
import { Button } from "@workspace/ui/components/button"
```

## Turbo-repo Project Structure 

This template documents how to add and configure Zustand state management in Turborepo-monorepo with Next.js apps.

```text
mono-portfolio/
├── README.md
├── apps/
│   ├── blog/       # Next.js app (copied from web)
│   └── web/        # Next.js app
└── packages/
    ├── ui/         # Shared UI
    └── zustand/    # Shared Zustand
        └── stores
```
## Setup Steps

### Create package structure: 
```bash
  mkdir -p packages/zustand/src
```
### configure package
`mono-protfolio/packages/zustand/package.json : `

```json
{
  "name": "@workspace/zustand",
  "version": "0.0.1",
  "private": true,
  "description": "zustand state management",
  "main": "./src/store.ts",
  "types": "./src/store.ts",
  "exports": {
    ".": "./src/store.ts"
  },
  "scripts": {
    "lint": "eslint . --max-warnings 0",
    "typecheck": "tsc --noEmit"
  },
  "dependencies": {
    "zustand": "^5.0.8"
  },
  "devDependencies": {
    "@workspace/typescript-config": "workspace:*",
    "typescript": "^5.9.3"
  },
  "keywords": [],
  "author": "",
  "license": "ISC",
  "packageManager": "pnpm@10.4.1"
}
```
- key point is use `.ts` extensions not `.js` for TypeScript files
- export the main store file
- use workspace protocol for internal dependencies

## Manual copy `app` 
### if you need template
```bash
    # from mono-portfolio/apps... Copy existing app
    cp -r apps/web apps/template-name
    
    # rename "name" package.json attribute from copied app  
    # ex) clone-app/package.json...
    # "name": "web" -> "name": "cloneApp"
    
    # install dependencies
    pnpm install
```
## tailwindcss v3 migration
