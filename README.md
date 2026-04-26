# Abdul Rahman J H — Angular 20 Portfolio

A modern, production-ready personal portfolio built with **Angular 20+**, using standalone components, signals, and the latest Angular control flow syntax.

---

## 🚀 Quick Start

```bash
# 1. Install dependencies
npm install

# 2. Start the dev server
npm start
# → http://localhost:4200

# 3. Build for production
npm run build
```

---

## 📁 Folder Structure

```
portfolio/
├── public/
│   └── resume.json          ← All portfolio data (single source of truth)
├── src/
│   ├── main.ts              ← App bootstrapper
│   ├── index.html
│   ├── styles.scss          ← Global styles + CSS variables (light/dark)
│   └── app/
│       ├── app.component.ts ← Root component with @defer lazy loading
│       ├── app.config.ts    ← ApplicationConfig (no NgModules)
│       ├── models/
│       │   └── portfolio.model.ts   ← TypeScript interfaces
│       ├── services/
│       │   └── portfolio.service.ts ← Signals-based state service
│       └── components/
│           ├── nav/                 ← Sticky navbar + dark mode toggle
│           ├── hero/                ← Animated hero with stats
│           ├── about/               ← Bio + certifications
│           ├── skills/              ← Categorized skill bars (IntersectionObserver)
│           ├── experience/          ← Timeline format
│           ├── projects/            ← Cards with tech filter
│           ├── education/           ← Edu cards
│           ├── contact/             ← Contact form UI
│           ├── section-wrapper/     ← Reusable section shell
│           ├── skill-bar/           ← Animated progress bar
│           ├── project-card/        ← Project card with hover effects
│           └── loading-placeholder/ ← Shimmer skeleton loader
```

---

## ✨ Angular 20+ Features Used

| Feature | Where |
|---------|-------|
| **Standalone components** | Every component (`standalone: true`) |
| **Signals** (`signal`, `computed`) | `PortfolioService` for all state |
| **`input()`** | `SkillBarComponent`, `ProjectCardComponent`, `SectionWrapperComponent` |
| **`@if` / `@for` / `@empty`** | All templates (no `*ngIf` / `*ngFor`) |
| **`@defer`** | Lazy-loads all sections on viewport |
| **`@defer @loading`** | Shows shimmer placeholders |
| **No NgModules** | `appConfig` uses `ApplicationConfig` |

---

## 🎨 Design System

- **Fonts**: Space Grotesk (headings) + JetBrains Mono (code/labels) + DM Sans (body)
- **Colors**: Indigo accent `#5046e5` (light) / `#7c6efd` (dark)
- **Dark/Light**: CSS custom properties toggled via Signal
- **Animations**: CSS-only fade/slide + IntersectionObserver for skill bars

---

## 🔧 Customization

To update your portfolio data, **only edit `public/resume.json`** — no component code needed.

```json
{
  "name": "Your Name",
  "title": "Your Title",
  "skills": [{ "name": "Angular", "level": 95, "category": "Frontend" }],
  "projects": [{ "name": "My App", "tech": ["Angular"], ... }]
}
```

---

## 🚢 Deployment

```bash
npm run build
# Upload dist/portfolio/ to any static host:
# Vercel, Netlify, Firebase Hosting, GitHub Pages
```

For **Vercel**: add a `vercel.json` at root:
```json
{ "rewrites": [{ "source": "/(.*)", "destination": "/index.html" }] }
```
