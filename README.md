# Fardeen Siddiqui · Portfolio

Personal portfolio of Fardeen Siddiqui, Software Engineer (Java & Spring Boot, full-stack, AI-assisted engineering).
A static React single-page app, deployed on Cloudflare Pages.

## Features

- Pages: Home, About, Experience (timeline), Projects (case studies and project detail pages), Skills, Contact, 404.
- Professional work is presented as case studies: no proprietary code, customer data, internal URLs or screenshots.
- Resume download, GitHub, LinkedIn and email links.
- Contact form via EmailJS, with a `mailto:` fallback when EmailJS is not configured.
- Responsive layout with a mobile menu, keyboard navigation, skip link, `prefers-reduced-motion` support.
- SEO and social metadata (description, canonical, Open Graph, Twitter card, JSON-LD), `robots.txt`, `sitemap.xml`, favicon and manifest.

## Tech stack

React 18, React Router 6, Sass, EmailJS (`@emailjs/browser`), Font Awesome icons, Create React App (`react-scripts` 5).
Hosting: Cloudflare Pages (same approach as the MotionShelf project).

## Project structure

```
public/            static files: index.html, resume PDF, icons, og.png, robots.txt, sitemap.xml,
                   _redirects (SPA fallback) and _headers (security and cache headers)
src/data/profile.js  all portfolio content (experience, projects, skills, links); edit this to change text
src/pages/         route components
src/components/    Layout (header, nav, footer), ProjectCard, Seo, ErrorBoundary
src/styles/        main.scss (design tokens and styles)
```

## Getting started

Requires Node.js 18 or newer.

```bash
npm install
npm start        # dev server at http://localhost:3000
npm test         # unit tests
npm run build    # production build into build/
```

## Environment configuration

| Variable | Purpose |
|----------|---------|
| `REACT_APP_SITE_URL` | Public origin for canonical and Open Graph URLs. Set in `.env.production`. |
| `REACT_APP_EMAILJS_SERVICE_ID` | EmailJS service ID (optional) |
| `REACT_APP_EMAILJS_TEMPLATE_ID` | EmailJS template ID (optional) |
| `REACT_APP_EMAILJS_PUBLIC_KEY` | EmailJS public key (optional) |

Copy `.env.example` to `.env.local` (git-ignored) for local values. Variables prefixed `REACT_APP_` are embedded in the
public bundle, so only put public identifiers there. Never use the EmailJS private key.

### Contact form

1. Create an EmailJS account, an email service and a template.
2. The template should use these fields: `name`, `email`, `subject`, `message`.
3. Put the three IDs in `.env.local`, then rebuild.
4. In EmailJS, restrict allowed origins to your site's domain.

Without these values the form opens the visitor's email client with the message prefilled.

## Deployment (Cloudflare Pages)

The site is a static build, so no server or Docker is needed.

- Build command: `npm run build`
- Build output directory: `build`
- Node version: 18 or newer

`public/_redirects` (`/* /index.html 200`) makes React Router routes work on refresh and deep links.

**Direct upload (same as MotionShelf):**

```bash
npx wrangler login      # one time; opens the browser, no token is stored in the repo
npm run deploy          # builds and runs: wrangler pages deploy build --project-name fardeenhsiddiqui-portfolio
```

**Or Git integration:** in the Cloudflare dashboard, Workers & Pages, Create, Pages, connect this GitHub repository and use
the build settings above. Add the EmailJS variables under Settings, Environment variables.

If you use a different project name or a custom domain, update `REACT_APP_SITE_URL` in `.env.production`,
the `deploy` script in `package.json`, and the URLs in `public/robots.txt` and `public/sitemap.xml`.

## Updating content

Edit `src/data/profile.js`. Keep the resume at `public/Fardeen_Siddiqui_Resume.pdf` in sync with it.
