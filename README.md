# Orchid Properties — Frontend

Premium real estate website for **Orchid Properties**, built with React + Vite + Tailwind CSS v4.

## Tech Stack

- **React 19** — UI framework
- **Vite 8** — Build tool & dev server
- **Tailwind CSS 4** — Utility-first styling
- **React Router 7** — Client-side routing

## Project Structure

```
├── public/              # Static assets served as-is
│   ├── projects/        # Project images (jpg/png)
│   ├── logo.png         # Brand logo
│   ├── favicon.svg      # Favicon
│   ├── icons.svg        # Icon sprite
│   └── _redirects       # Netlify SPA redirect
├── src/
│   ├── components/      # Reusable UI components
│   │   ├── Navbar.jsx
│   │   └── Footer.jsx
│   ├── hooks/           # Custom React hooks
│   │   └── useScrollEffects.js
│   ├── pages/           # Route-level pages
│   │   ├── Home.jsx
│   │   ├── About.jsx
│   │   ├── Contact.jsx
│   │   └── ProjectDetails.jsx
│   ├── App.jsx          # Root component with routing
│   ├── main.jsx         # Entry point
│   └── index.css        # Global styles & design tokens
├── index.html           # Vite HTML entry
├── vite.config.js       # Vite configuration
├── vercel.json          # Vercel SPA rewrite rules
├── package.json
└── .gitignore
```

## Getting Started

```bash
# Install dependencies
npm install

# Start dev server
npm run dev

# Production build
npm run build

# Preview production build
npm run preview
```

## Deployment

### Vercel
Connect the GitHub repo — Vercel auto-detects the Vite framework. SPA routing is handled by `vercel.json`.

### Netlify
Connect the GitHub repo with build command `npm run build` and publish directory `dist`. SPA routing is handled by `public/_redirects`.

## License

Private — Orchid Properties © 2026
