# Copilot Instructions for dash-introslides

## Project Overview

This is a React-based presentation framework using **Spectacle** for creating interactive slides. It's built with React 19, TypeScript, and Vite for fast development and optimized production builds.

## Build, Test & Lint Commands

### Development
```bash
yarn dev         # Start Vite dev server (HMR enabled, typically on http://localhost:5173)
```

### Production
```bash
yarn build       # Compile TypeScript (tsc -b) then build with Vite
yarn preview     # Preview production build locally
```

### Code Quality
```bash
yarn lint        # Run ESLint on all files (ESLint flat config)
```

## Architecture

### Core Structure
- **src/App.tsx** - Main Spectacle Deck component. Contains slide layouts using Spectacle components (Deck, Slide, Heading, etc.)
- **src/main.tsx** - React entry point. Creates root and renders App with StrictMode
- **src/index.css** - Global styles for Spectacle presentation
- **vite.config.ts** - Vite configuration with React plugin (uses Oxc for JSX)
- **eslint.config.js** - ESLint flat config with TypeScript, React Hooks, and React Refresh support

### Dependencies
- **spectacle** - Presentation framework built on React. Core components: `Deck`, `Slide`, `Heading`, `DefaultTemplate`
- **react** + **react-dom** - React 19 framework
- **@vitejs/plugin-react** - Vite React plugin with Oxc support

### TypeScript Configuration
- **tsconfig.app.json** - App compilation. Target: ES2023, JSX: react-jsx, bundler module resolution
- **tsconfig.node.json** - Build tool configuration
- **tsBuildInfoFile** - Located in node_modules/.tmp for incremental builds

## Key Conventions

### React & Spectacle Patterns
- Components are functional components with TypeScript interfaces where needed
- Slides are built as direct children of the `<Deck>` component using `<Slide>` wrappers
- The `<DefaultTemplate>` provides consistent theming/layout across slides
- Use Spectacle's built-in components (`Heading`, `Text`, `Image`, etc.) for consistency

### TypeScript Settings
- **Strict checks enabled**: `noUnusedLocals`, `noUnusedParameters`, `noFallthroughCasesInSwitch`
- JSX is configured as `react-jsx` (newer JSX transform, no React import needed in components)
- Module resolution uses `bundler` mode for optimal Vite integration

### ESLint Configuration
- Flat config format (`eslint.config.js`)
- Covers TypeScript, React Hooks best practices, and React Refresh
- Ignores the `dist/` directory (build output)
- Browser globals are available

### Development Workflow
- HMR (Hot Module Replacement) is active during `yarn dev`
- Type checking via TypeScript during build; separate from linting
- Build process runs `tsc -b` for incremental type checking before Vite bundling
