# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

VIN decoder application using the NHTSA API. React SPA with Tailwind CSS and Radix UI, deployed to GitHub Pages.

## Key Commands

- `npm run dev` - Start Vite dev server
- `npm run build` - Production build (outputs to `dist/`, base path `/vin-car-decode/`)
- `npm run preview` - Preview production build locally
- `npm run deploy` - Deploy to GitHub Pages (runs `predeploy` and `postbuild` automatically)

## Architecture

### Routing & Navigation

Uses React Router with dynamic basename from Vite's `BASE_URL`. Two main routes:
- `/` - Home page ([src/pages/Home.jsx](src/pages/Home.jsx))
- `/:vin?` - Search page with optional VIN param ([src/pages/Search.jsx](src/pages/Search.jsx))

Router configured in [src/main.jsx](src/main.jsx) with `RootLayout` wrapper ([src/layouts/RootLayout.jsx](src/layouts/RootLayout.jsx)).

### VIN Decoding Logic

**Core component**: [src/components/VinForm.jsx](src/components/VinForm.jsx)
- Fetches from NHTSA API: `https://vpic.nhtsa.dot.gov/api/vehicles/DecodeVinExtended/{VIN}?format=json`
- Reads VIN from URL params on mount
- Updates URL when search is performed (via `navigate`)
- Groups results by semantic categories (manufacturer, engine, safety, etc.)

**Variable metadata**: [src/config/vinVariables.js](src/config/vinVariables.js)
- Maps NHTSA `VariableId` to localized labels and descriptions
- Defines grouping categories (`VIN_GROUPS`) like `general`, `manufacturer`, `engine`, `safety`, etc.
- Lookup maps: `VIN_VARIABLE_BY_ID`, `VIN_VARIABLE_BY_KEY`

### Internationalization

**Context**: [src/context/LanguageContext.jsx](src/context/LanguageContext.jsx)
- Stores language in localStorage (`lang` key)
- Default: `uk` (Ukrainian)
- Hook: `useLanguage()`

**Translations**: [src/i18n/index.js](src/i18n/index.js)
- Supports `en` and `uk`
- Helper: `getMessage(lang, path, fallback)`
- Variable labels and descriptions in [vinVariables.js](src/config/vinVariables.js) have `{ en, uk }` objects

### UI Components

**Custom UI primitives** (in `src/components/ui/`):
- [Button.jsx](src/components/ui/Button.jsx), [Input.jsx](src/components/ui/Input.jsx), [Checkbox.jsx](src/components/ui/Checkbox.jsx), [Select.jsx](src/components/ui/Select.jsx), [Tooltip.jsx](src/components/ui/Tooltip.jsx)
- Built with `class-variance-authority` for variant styling

**Main components**:
- [Header.jsx](src/components/Header.jsx), [Footer.jsx](src/components/Footer.jsx), [Logo.jsx](src/components/Logo.jsx)
- [LanguageSwitcher.jsx](src/components/LanguageSwitcher.jsx) - UI for changing language

### Styling

Tailwind CSS ([tailwind.config.js](tailwind.config.js)) + Radix UI Themes (configured in [main.jsx](src/main.jsx) with `indigo` accent, `slate` gray, `large` radius).

### Deployment

**GitHub Pages**:
- Vite base path set to `/vin-car-decode/` in [vite.config.js](vite.config.js)
- `postbuild` script copies `index.html` to `404.html` for client-side routing
- GitHub Actions workflow uses Node.js v20 ([.github/workflows/](. github/workflows/))

## Notes

- API calls via axios (bare instance in [src/service/api.js](src/service/api.js), though VinForm uses axios directly)
- No backend, fully client-side
- When adding VIN variables, update [vinVariables.js](src/config/vinVariables.js) with `variableId`, `group`, and bilingual labels/descriptions
