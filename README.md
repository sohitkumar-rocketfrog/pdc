# Patient.com Data Ecosystem Unfold

A modern React/TypeScript application showcasing the Patient.com enterprise data architecture with interactive category exploration, capability details, and dataset visualization.

## Technology Stack

- **Frontend**: React 19 + TypeScript
- **Framework**: TanStack Start (fullstack React framework)
- **Build Tool**: Vite
- **Styling**: Tailwind CSS 4
- **UI Components**: Radix UI + shadcn/ui
- **Package Manager**: Bun
- **Deployment**: GitHub Pages

## Project Structure

```
.
├── src/
│   ├── components/          # React components
│   ├── routes/              # TanStack Router pages
│   ├── content/             # Data files (strategy.ts)
│   ├── lib/                 # Utilities and configs
│   ├── styles/              # Global styles
│   ├── router.tsx           # Route definitions
│   ├── root.tsx             # Root layout
│   └── start.ts             # Entry point
├── public/                  # Static assets
├── vite.config.ts          # Vite configuration
├── package.json            # Dependencies
└── .github/workflows/      # CI/CD pipelines
```

## Development Setup

### Prerequisites

- Bun 1.0+ (https://bun.sh)
- Or Node.js 20+ with npm/yarn/pnpm

### Installation

```bash
# Using Bun
bun install

# Using npm
npm install
```

### Development Server

```bash
# Using Bun
bun run dev

# Using npm
npm run dev
```

The app will be available at `http://localhost:5173`

### Build for Production

```bash
# Using Bun
bun run build

# Using npm
npm run build
```

Built files will be in the `dist/` directory.

### Preview Production Build

```bash
# Using Bun
bun run preview

# Using npm
npm run preview
```

## Deployment

This project is automatically deployed to GitHub Pages via GitHub Actions when you push to the `main` branch.

### Manual Deployment

If needed, you can manually build and deploy:

```bash
bun run build
# Then commit and push the dist/ folder to gh-pages branch
```

## Project Branches

- **main**: Source code and development (automatic build & deploy)
- **gh-pages**: Deployed application (auto-generated)

## Features

- **Interactive Architecture Map**: Explore the five core architecture categories
- **Capability Details**: Dive into individual capabilities and their data requirements
- **Dataset Visualization**: Understanding data flows and dependencies
- **Responsive Design**: Mobile-friendly interface
- **Dark Mode**: Built-in dark theme

## Customization

### Content Updates

Edit `src/content/strategy.ts` to update architecture data.

### Component Styling

Modify Tailwind configuration in `tailwind.config.js` or component classes directly.

### Adding Routes

Create new files in `src/routes/` following the TanStack Router file-based routing convention.

## Contributing

1. Clone the repository
2. Create a feature branch
3. Make your changes
4. Push to GitHub
5. Open a Pull Request

## License

Copyright © 2024. All rights reserved.
