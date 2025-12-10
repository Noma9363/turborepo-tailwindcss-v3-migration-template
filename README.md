# shadcn/ui monorepo template

shadcn/ui monorepo template 을 활용한 포트폴리오 입니다.

## turborepo root 기준 실행방법 
`packages/ui` 패키지에 맞춰 각 앱에서 `pnpm install` 를 입력해야 합니다.

현재 프로젝트에서는 `apps/web` 해당 디렉토리가 Vercel 에 배포될 예정입니다.

## 사용된 라이브러리

- `shadcn/ui` : 기본적인 컴포넌트의 기능을 갖추고 있는 라이브러리
- `reactbits` : `gsap` 및 애니메이션을 간단하게 제공하는 라이브러리
- `gsap` : dom 내에 요소들을 참조하여 애니메이션 생성이 가능한 라이브러리
- `tailwindCss` : 인라인 방식 클래스 스타일 라이브러리

## 프로젝트 소개
> monorepo 시스템인 turborepo 를 사용하여 SSR 어플리케이션 구축
> 
> Ui 라이브러리는 간단한 기능만 제공하는 Shadcn/ui 선정
> 
> Turborepo 구조를 활용하여 공유할 컴포넌트 및 유틸리티등 `packages/ui` 에 보관하여 각 앱에 공유

추후 Project 들을 각 `app/...` 에 구현할 예정


## 기술 스택
- HTML
- CSS
- SASS
- TailwindCSS
- Javascript
- Typescript
- Figma
- Shadcn/ui
- Turborepo

## figma link
[피그마](https://www.figma.com/design/rFAzYzvG5zkNP68ykG9pTD/Untitled?node-id=0-1&t=MSg370L0kALh6LkL-1)
## 배포 URL
[vercel 에 배포된 링크는 다음과 같습니다](https://turborepo-tailwindcss-v3-migration-template-aa24glmdj.vercel.app/)
## Usage (사용법)

```bash
pnpm dlx shadcn@latest init
```

## Adding components 컴포넌트 추가방법

컴포넌트를 추가학 위해 `web` 앱에서 아래 명령어를 입력합니다.

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
