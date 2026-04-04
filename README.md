> ## 🤔 What is this template all about?
>
> - This template can be used as a base layer for ReactJS UI projects.
> - Make the project easy to maintain with **7 issue templates**.
> - Quick-start documentation with an extraordinary README structure.
> - Manage issues with **20 issue labels**.
> - Make _community healthier_ with all the guides like code of conduct, contributing, support, security...
> - Learn more with the [official GitHub guide on creating repositories from a template](https://docs.github.com/en/github/creating-cloning-and-archiving-repositories/creating-a-repository-from-a-template).
> - To start using it, click **[Use this template](https://github.com/IQKV/standard-mantine-ui-project-layout/generate)** to create your new repository.

---

# 🚀 IQScaffold Mantine UI Project Layout

## 📜 Description

React + TypeScript + Vite + TanStack Router + Mantine UI Template

> A modern, feature-rich template for building scalable React applications with the latest tools and best practices.

## 🔑 Key Features

### 🚀 **Core Technologies**

- **React 19** - Latest React with concurrent features and improved performance
- **Vite 7** - Lightning-fast development with instant HMR and optimized builds
- **TypeScript 5.9** - Type-safe development with strict configuration
- **PNPM** - Fast, disk space efficient package manager

### 🎨 **UI & Styling**

- **Mantine UI 8** - Modern React components library with comprehensive theming
- **Mantine Notifications** - Toast notification system
- **Mantine Modals** - Modal manager with context
- **Tabler Icons** - Beautiful SVG icons optimized for React
- **XYFlow React** - Node-based UI / flow diagrams
  -️ **Lottie Web** - High-quality animations

### 🔄 **State Management & Data**

- **TanStack Router** - Type-safe file-based routing with code splitting and search params
- **TanStack Query** - Powerful data synchronization and caching
- **Axios** - Promise-based HTTP client for API calls
- **React Hook Form + Zod** - Type-safe form validation and management
  -️ **Zustand** - Lightweight state management with Immer support
- **JS Cookie** - Simple cookie management
- **nuqs** - Type-safe URL search params state management
- **jwt-decode** - JWT token decoding

### 🌐 **Internationalization & Accessibility**

- **Lingui 5** - Modern i18n framework with macro support and pluralization
  -️ **Locales: English, Russian, Italian** - PO-based catalogs with dynamic loading
- **Cookie-based locale detection** - Persists user language preference

### 🧪 **Testing & Quality**

- **Vitest** - Fast unit testing with coverage reports and UI
- **Playwright** - Reliable end-to-end testing (Chromium, Firefox, WebKit)
- **Mock Service Worker** - Client-agnostic API mocking for development and testing
- **Testing Library** - Simple and complete testing utilities for React
- **Architecture tests** - FSD boundary enforcement via `src/architecture.test.ts`

### 🔍 **Code Quality & Development**

- **OxLint** - Ultra-fast linting with type-aware rules
- **OxFmt** - Fast opinionatted code formatting
- **Stylelint** - CSS linting for consistent styling
- **Husky** - Git hooks for pre-commit validation
- **Commitlint** - Conventional commit message validation
- **Knip** - Dead code elimination and dependency analysis

### 👷 **DevOps & Automation**

- **GitHub Actions** - CI/CD workflows for build, test, and PR validation
- **Dependabot** - Automated dependency updates and security monitoring
- **Release-it** - Automated versioning and changelog generation
- **Docker Compose** - Local SonarQube instance for code quality analysis
- **SonarQube** - Code quality and security analysis

### 🏗️ **Architecture & Patterns**

- **Feature-Sliced Design** - Scalable frontend architecture methodology
- **Runtime Config** - `public/config.js` overrides build-time env vars at runtime
- **TypeScript Strict Mode** - Enhanced type safety with strict configuration
- **Hot Module Replacement** - Instant updates during development

## � Documentation

> [!TIP]
>
> #### Install Prerequisites:
>
> - [Node LTS version](https://nodejs.org/en/blog/release/v22.15.0/)
> - [pnpm](https://pnpm.io/installation)
> - [Git](https://git-scm.com/)
> - [Docker](https://www.docker.com/get-started/) _(optional, for SonarQube)_
> - [Docker Compose](https://docs.docker.com/compose/) _(optional)_

### 🔺 Using This Template

#### Option 1: Use GitHub Template (Recommended)

1. Click **[Use this template](https://github.com/IQKV/standard-mantine-ui-project-layout/generate)** button
2. Create your new repository
3. Clone your new repository
4. Follow the setup steps below

#### Option 2: Clone Directly

```shell
# Clone the repository
git clone https://github.com/IQKV/standard-mantine-ui-project-layout.git my-app

# Navigate to project directory
cd my-app

# Remove the original git history (optional)
rm -rf .git
git init
git add .
git commit -m "feat: initial commit from template"
```

### 🔺 Local Development Setup

```shell
# Install dependencies
pnpm install

# Copy environment variables
cp .env.example .env

# (Optional) Start local SonarQube in Docker
docker compose -f compose.yaml up -d

# Start development server
pnpm dev
```

The application will be available at `http://localhost:5173`

### ⚙️ Runtime Configuration

This project supports overriding build-time env vars at runtime via `public/config.js`. Useful for containerized deployments where you don't want to rebuild per environment.

```shell
cp public/config.js.example public/config.js
# Edit public/config.js with your environment values
```

`public/config.js` is loaded before the app bundle and sets values on `window.*`, which take precedence over `VITE_*` build-time variables. Do **not** commit secrets here.

### 🎨 Template Customization

After creating your project from this template, you'll want to customize it:

#### 1. Update Project Information

- [ ] Update `package.json` name, description, and repository URLs
- [ ] Update `README.md` title and description
- [ ] Update `LICENSE` file with your information
- [ ] Update GitHub repository settings and topics

#### 2. Customize Branding

- [ ] Update the app title in `src/pages/__root.tsx`
- [ ] Modify the theme in `src/app/theme.ts` with your brand colors
- [ ] Replace favicon and other icons in `public/` directory
- [ ] Update meta tags in `index.html`

#### 3. Configure Environment

- [ ] Update `.env.example` with your API endpoints
- [ ] Set `VITE_API_SERVER_URL` to your backend base URL
- [ ] Add extra env keys to `src/app/config/runtime-env.ts` if needed
- [ ] Set up API clients under `src/shared/api/`

#### 4. Configure i18n

- [ ] Add or remove locales in `lingui.config.ts`
- [ ] Run `pnpm messages:extract` after adding new translatable strings
- [ ] Translate strings in `locales/*.po` files
- [ ] Run `pnpm messages:compile` to compile catalogs

#### 5. Set Up CI/CD

- [ ] Configure GitHub Actions secrets for deployment
- [ ] Update SonarQube configuration in `sonar-project.properties`
- [ ] Set up deployment targets in GitHub Actions workflows

### 📃 Available Scripts

| Command                   | Description                                       |
| ------------------------- | ------------------------------------------------- |
| `pnpm dev`                | Start development server                          |
| `pnpm build`              | Build for production (includes i18n compile)      |
| `pnpm preview`            | Preview production build                          |
| `pnpm test`               | Run unit tests with Vitest                        |
| `pnpm test:ui`            | Run tests with UI interface                       |
| `pnpm test:coverage`      | Run tests with coverage report                    |
| `pnpm test:arch`          | Run FSD architecture boundary tests               |
| `pnpm e2e`                | Run end-to-end tests with Playwright              |
| `pnpm e2e:ui`             | Run e2e tests with UI interface                   |
| `pnpm e2e:headed`         | Run e2e tests in headed mode                      |
| `pnpm e2e:smoke`          | Run smoke tests on Chromium                       |
| `pnpm e2e:auth`           | Run auth-specific e2e tests                       |
| `pnpm e2e:chrome`         | Run e2e tests on Chromium only                    |
| `pnpm e2e:firefox`        | Run e2e tests on Firefox only                     |
| `pnpm e2e:webkit`         | Run e2e tests on WebKit only                      |
| `pnpm e2e:all-browsers`   | Run e2e tests on all browsers                     |
| `pnpm e2e:report`         | Open last Playwright HTML report                  |
| `pnpm e2e:update`         | Update Playwright snapshots                       |
| `pnpm e2e:debug`          | Debug e2e tests (PWDEBUG)                         |
| `pnpm playwright:install` | Install Playwright browsers                       |
| `pnpm lint`               | Lint code with OxLint (type-aware)                |
| `pnpm lint:fix`           | Fix linting issues and format automatically       |
| `pnpm lint:stylelint`     | Lint CSS files with Stylelint                     |
| `pnpm formatter:check`    | Check code formatting with OxFmt                  |
| `pnpm formatter:write`    | Format code with OxFmt                            |
| `pnpm type-check`         | Check TypeScript types                            |
| `pnpm messages:extract`   | Extract i18n messages from source                 |
| `pnpm messages:compile`   | Compile i18n PO catalogs to TypeScript            |
| `pnpm knip`               | Detect unused exports and dependencies            |
| `pnpm cleanup`            | Remove dist, .tanstack, coverage, stylelint cache |
| `pnpm cleanup:all`        | Full cleanup including node_modules               |
| `pnpm release`            | Automate versioning and changelog generation      |

### 🏗️ **Feature-Sliced Design Architecture**

This project follows **Feature-Sliced Design (FSD)** methodology for scalable frontend architecture.

```
src/
├── app/            # App initialization, providers, router, theme, config
│   └── config/     # Runtime env config (VITE_* + window.* override)
├── processes/      # Cross-feature flows (e.g. auth session, logout)
├── pages/          # Route components (__root, index, 404)
├── widgets/        # Composite UI blocks assembled from features/entities
├── features/       # User interactions and business logic (forms, actions)
├── entities/       # Business entities and their pure API methods
├── shared/         # Reusable utilities, UI kit, API clients, mocks, types
│   ├── api/        # Axios/fetch clients and base API setup
│   ├── lib/        # Utility functions and helpers
│   ├── locales/    # i18n initialization and locale detection
│   ├── mocks/      # MSW handlers for development and testing
│   ├── types/      # Shared TypeScript types
│   └── ui/         # Shared UI components (AppLayout, LoadingOverlay, ErrorBoundary)
└── types/          # Global type declarations (locales, reset)
```

### 📚 **Architecture Documentation**

- 📚 [**API Documentation**](docs/api/README.md)
- 📖 [**Architecture Overview**](docs/architecture/README.md)
- 🚀 [**Deployment Guide**](docs/deployment/README.md)
- 🙏 [**Contributing Guidelines**](.github/CONTRIBUTING.md)

### Environment Variables

| Variable              | Description                          | Default                     |
| --------------------- | ------------------------------------ | --------------------------- |
| `VITE_API_SERVER_URL` | Backend API base URL                 | `http://localhost:8080/api` |
| `VITE_LOG_LEVEL`      | Log level: `silent`, `info`, `debug` | `info`                      |

> Variables can be overridden at runtime via `public/config.js` without rebuilding. See [Runtime Configuration](#️-runtime-configuration).

---

## 🧪 E2E Testing (Playwright)

- Install browsers (first time): `pnpm playwright:install`
- Run tests: `pnpm e2e`
- UI mode: `pnpm e2e:ui`
- Headed: `pnpm e2e:headed`
- Smoke only: `pnpm e2e:smoke`
- Report: `pnpm e2e:report`

Locally runs Chromium only by default. Firefox and WebKit are added in CI or when `ALL_BROWSERS=true`.
The dev server is auto-started by Playwright via `webServer` in `playwright.config.ts`.
CI runs Playwright on PRs/pushes via `.github/workflows/build-nodejs-project.yml`.

## 🌍 Internationalization

Supported locales: **English** (`en`), **Russian** (`ru`), **Italian** (`it`).

Locale is detected from a `locale` cookie, then browser language, falling back to `en`.
Catalogs live in `locales/*.po` and are compiled to `locales/*.ts` via Lingui.

```shell
# After adding new Trans/t`` usages in source:
pnpm messages:extract

# After editing .po translation files:
pnpm messages:compile
```

## 📆 Changelog

Conventional changelog located [here](CHANGELOG.md).

## 🙏 Community & Contributions

Please follow [Contributing](.github/CONTRIBUTING.md) page.

## 📙 Code of Conduct

Please follow [Code of Conduct](.github/CODE_OF_CONDUCT.md) page.

<a name="license"></a>

## 📑 License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for more details.

---

## _GitHub Project Tooling Overview_

A concise summary of automation and quality tooling. For full details, see the docs folder.

### CI/CD (GitHub Actions)

- `.github/workflows/build-nodejs-project.yml` – build & test pipeline
- `.github/workflows/check-pr-title.yml` – PR naming conventions
- `.github/workflows/check-commit-message.yml` – commit message validation
- `.github/workflows/auto-approve-dependabot-pr.yml` – auto-approve Dependabot PRs
- `.github/workflows/use-template.yml` – one-time template setup

### Local Automation (Husky)

- `.husky/pre-commit` – triggers lint-staged checks
- `.husky/commit-msg` – runs commitlint
- `commitlint.config.js` – enforces conventional commit messages

### Quality Gates

- OxLint – type-aware linting via `pnpm lint`
- OxFmt – formatting via `pnpm formatter:check`
- Stylelint – CSS linting via `pnpm lint:stylelint`
- TypeScript – `pnpm type-check`
- Architecture – `pnpm test:arch`

See the Available Scripts section above for everyday commands.
