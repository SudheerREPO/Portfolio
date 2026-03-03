# SudheerDev Portfolio

## Project Overview
A modern, responsive developer portfolio website for **Sudheer Gupta** — a Backend Developer specializing in Java, PHP, and Laravel. Built with Laravel + React (Inertia.js) + TailwindCSS v4, supporting both **static** and **dynamic** deployment modes.

## Tech Stack
| Layer      | Technology                                                    |
|------------|---------------------------------------------------------------|
| Backend    | Laravel 12, PHP 8.x                                          |
| Frontend   | React 19, TypeScript, Inertia.js                              |
| Styling    | TailwindCSS v4, CSS custom properties (dark/light theme)       |
| UI Library | Radix UI primitives, Lucide React icons                        |
| Build      | Vite 7, laravel-vite-plugin                                    |
| Linting    | ESLint, Prettier, Pint (PHP)                                   |

## Architecture
- **Hybrid Static/Dynamic**: All portfolio data lives in a centralized `portfolioData.ts` config file with sensible defaults. When a Laravel backend with a database is available, data is fetched via Inertia props and merged with defaults. When deployed statically (e.g., GitHub Pages, Netlify), only the default static data is used.
- **Single Page Application**: All sections (Hero, About, Experience, Projects, Contact, Footer) render on a single scrollable page with smooth-scroll navigation.
- **Theme System**: Light (default) and Dark themes using CSS custom properties on `:root` and `.dark` class. Toggle persisted in `localStorage`.

## Personal Info (Sudheer Gupta)
| Field          | Value                                      |
|----------------|---------------------------------------------|
| Name           | Sudheer Gupta                               |
| Title          | Backend Developer                           |
| Tagline        | I build reliable backend systems with Java, PHP & Laravel |
| Education      | B.Sc. IT (2024)                             |
| Location       | Navi Mumbai, India                          |
| Availability   | Remote / Full-time                          |
| Email          | sudheergupta@example.com                    |
| GitHub         | https://github.com/sudheergupta             |
| LinkedIn       | https://linkedin.com/in/sudheergupta        |
| WhatsApp       | (to be configured)                          |

## Sections
1. **Navbar** — Sticky top navigation with logo, nav links (Home, About, Projects, Contact), theme toggle (moon icon)
2. **Hero** — Gradient headline, subtitle, CTA buttons, workspace illustration
3. **About** — Quick facts cards (Education, Availability, Location), bio description
4. **Experience** — Professional timeline with role, company, responsibilities
5. **Projects** — Grid of project cards with tech badges, links
6. **Contact** — CTA heading, social links (WhatsApp, LinkedIn, GitHub, Email), contact form
7. **Footer** — Brand, navigation, services list, copyright

## Design Reference
- **Stitch Project**: https://stitch.withgoogle.com/projects/17738204778498215733
- **Color Scheme**:
  - Light: White background, teal/cyan accent (#25c0f4)
  - Dark: Deep navy/black background (#0B1120), high-contrast cyan accent
- **Font**: Inter (self-hosted)
- **Border Radius**: 8px (rounded-lg)

## Deployment Modes
### Static (Priority)
- Build with `npm run build` → deploy `dist/` to any static host
- All data comes from `portfolioData.ts` defaults
- No server-side rendering needed

### Dynamic (Laravel)
- Full Laravel app with database
- Admin can update portfolio content via API
- Data passed via Inertia.js props, falls back to static defaults

## Commit Strategy
Each feature/phase is committed independently for a clean commit history:
1. `feat: project setup and design system`
2. `feat: navbar with theme toggle`
3. `feat: hero section`
4. `feat: about section`
5. `feat: experience section`
6. `feat: projects section`
7. `feat: contact section`
8. `feat: footer`
9. `feat: responsive design and polish`
10. `feat: SEO and performance optimization`
