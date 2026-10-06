# Katie Reed – Developer & Designer Portfolio

[![React](https://img.shields.io/badge/React-19.2-61DAFB?logo=react&logoColor=black)](https://react.dev/)
[![Vite](https://img.shields.io/badge/Vite-8.2-646CFF?logo=vite&logoColor=white)](https://vitejs.dev/)
[![Bootstrap](https://img.shields.io/badge/Bootstrap-5.3-7952B3?logo=bootstrap&logoColor=white)](https://getbootstrap.com/)
[![Oxlint](https://img.shields.io/badge/Oxlint-1.79-FFA000)](https://oxc.rs/)
[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](LICENSE)

A clean, modern, single-page developer portfolio built with **React 19**, **Vite**, and **Bootstrap 5**. Designed with an editorial monochrome aesthetic, modular component architecture, and smooth in-page navigation.

---

## Overview

- **What the project does:** Serves as a personal developer portfolio showcasing Katie Reed's background, core focus areas, technical competencies with proficiency bars, educational background, past project domains, and direct contact channels.
- **What problem it solves:** Delivers a fast-loading, responsive digital resume and portfolio that organizes skills, qualifications, and past work into an easily scannable interface for recruiters, clients, and technical hiring managers.
- **Main purpose:** Built as an ITI React application demonstrating modern React component composition, clean layout architecture, and zero-overhead performance.

---

## Live Demo

- **Live URL:** [Live Demo](YOUR_LIVE_DEMO_URL)
- **Repository:** [GitHub Repository](https://github.com/youssifmo2025/-Katie-Reed-Developer-Designer-Portfolio)

---

## Screenshots

> *Replace the placeholder paths below with your actual project screenshots.*

### Desktop View
```
+--------------------------------------------------------------------------+
|  KR                                      ABOUT   SKILLS   PORTFOLIO  ... |
|--------------------------------------------------------------------------|
|                                     |                                    |
|   Katie Reed                        |          [ Portrait Image ]        |
|   Web Developer & Designer          |                                    |
|   [ Contact Me ]                    |                                    |
|                                     |                                    |
+--------------------------------------------------------------------------+
```
![Desktop Preview](docs/screenshots/desktop-preview.png)

### Mobile View
![Mobile Preview](docs/screenshots/mobile-preview.png)

### Key Sections
| Skills & Competencies | Education & Credentials | Portfolio Grid |
| :---: | :---: | :---: |
| ![Skills](docs/screenshots/skills-section.png) | ![Education](docs/screenshots/education-section.png) | ![Portfolio](docs/screenshots/portfolio-section.png) |

---

## Features

- **Responsive Single-Page Layout:** Fluid layout built on Bootstrap 5 grid system that adapts smoothly from desktop displays down to mobile screens.
- **Sticky / Collapsible Navigation:** Dark navbar with brand identity (`KR`), collapsible hamburger menu for mobile viewports, and active hash navigation anchors.
- **Smooth Section Navigation:** In-page anchor navigation (`#hero`, `#about`, `#skills`, `#education`, `#portfolio`, `#contact`) enhanced with CSS smooth scrolling and custom scroll-margin offsets.
- **Editorial Hero Section:** High-contrast split-column hero presentation pairing large-type typography and a "Contact Me" call-to-action button with a grayscale portrait visual.
- **About & Bio Presentation:** Two-column profile narrative with a direct one-click "Download Resume" action linking to `/resume.pdf`.
- **Dynamic Skills Visualization:**
  - Reusable progress-bar subcomponents (`SkillBar`) rendering quantified proficiency levels across 8 technical areas (HTML, CSS, JavaScript, React, Photoshop, Adobe XD, Node.js, WordPress).
  - Categorized "My Focus" list emphasizing core competencies (UI/UX Design, Responsive Design, Web Design, Mobile App Design).
- **Education & Training Timeline:** 3-column card layout (`EducationCard`) with subtle hover micro-interactions highlighting degrees, diplomas, and bootcamp qualifications.
- **Portfolio Showcase Grid:** 6-card curated grid (`ProjectCard`) highlighting core service and delivery areas (Web Design, Mobile Design, Logo Design, Web App Development, Mobile App Development, PWA Development) with hover opacity transitions.
- **Quick-Connect Footer:** Direct email communication trigger (`mailto:` link), direct telephone display, Font Awesome social channels (LinkedIn, Facebook, Twitter) with interactive hover states, and copyright info.

### Missing / Non-Applicable Features
- **API Integration:** [TODO] *(All content is currently driven by local structured data arrays)*
- **Authentication:** [TODO] *(Not applicable for a public portfolio site)*
- **Forms & Validation:** [TODO] *(Contact section currently utilizes a direct `mailto:` action and static contact details)*
- **Search, Filtering & Pagination:** [TODO] *(Static curated showcase; not implemented)*
- **Client-Side Routing:** [TODO] *(Single-page layout using in-page hash anchors; `react-router-dom` is not installed)*

---

## Tech Stack

### Core Technologies
- **React 19 (`^19.2.8`):** Latest functional React with modern component rendering.
- **React DOM (`^19.2.8`):** Client-side DOM rendering engine.
- **JavaScript (ES6+ / JSX):** Component logic, modular exports, and declarative UI.
- **HTML5 & CSS3:** Semantic structure, CSS smooth scrolling, and layout styling.

### Build Tools & Compilers
- **Vite (`^8.2.2`):** Next-generation frontend build tool and development server.
- **React Compiler (`babel-plugin-react-compiler` `^1.0.0`):** Automatic compile-time memoization and re-render optimization via `@rolldown/plugin-babel` and `@vitejs/plugin-react`.
- **Oxlint (`^1.79.0`):** Ultra-fast Rust-based linter enforcing `react/rules-of-hooks` and `react/only-export-components`.

### Styling & Assets
- **Bootstrap 5 (`5.3.3` via CDN):** Responsive 12-column grid system, flex utilities, and navbar toggling.
- **Font Awesome 6 (`6.5.2` via CDN):** Vector icons for contact details and social media links.
- **Google Fonts:** `Inter` and `Playfair Display` typefaces, paired with Georgia and Helvetica typography.

*(Note: No external CSS preprocessors, Tailwind CSS, or third-party state managers are used in this project.)*

---

## React Architecture

### Component Hierarchy
```
main.jsx (createRoot + StrictMode)
└── App.jsx
    ├── Navbar.jsx
    ├── Hero.jsx
    ├── About.jsx
    ├── Skills.jsx
    │   └── SkillBar (Reusable internal subcomponent)
    ├── Education.jsx
    │   └── EducationCard (Reusable internal subcomponent)
    ├── Portfolio.jsx
    │   └── ProjectCard (Reusable internal subcomponent)
    └── Footer.jsx
```

### Reusable Components
- **`SkillBar({ name, percent })`** in `Skills.jsx`: Parameterized progress bar component accepting a skill label and numerical completion percentage to dynamically render styled progress indicators.
- **`EducationCard({ year, degree, institution, description })`** in `Education.jsx`: Modular card component rendering credentials, date badges, and institution descriptions with integrated hover state transitions.
- **`ProjectCard({ title, bg })`** in `Portfolio.jsx`: Visual tile component accepting a project category and background color hex to render standardized showcase tiles with hover interactions.

### State Management
- Pure presentational architecture with no external state library.
- Data is structured into clean, immutable in-memory JavaScript collections (`skills`, `focusAreas`, `educationData`, `projects`, social media objects) mapped to JSX elements.
- Global state management (Context API / Redux / Zustand): [TODO] *(Not required for current static scope)*.

### Routing
- Built as a single-page application (SPA) utilizing native browser hash links (`#hero`, `#about`, `#skills`, `#education`, `#portfolio`, `#contact`).
- Enhanced in `src/index.css` with `scroll-behavior: smooth` and `scroll-margin-top: 56px` to avoid header clipping under the fixed navigation bar.
- Multi-page routing (`react-router-dom`): [TODO].

### API & Data Fetching
- [TODO] *(Data is currently defined statically in component modules. No external REST/GraphQL API calls or asynchronous fetch requests are made).*

### Custom Hooks & Services
- [TODO] *(No custom hooks or services exist; component logic is kept lean and self-contained).*

### Key Architectural Decisions
1. **Sectional Component Decoupling:** Every visual section lives in its own dedicated file under `src/components/`, ensuring maintainability and easy updates.
2. **React Compiler Optimization:** Integrated the official React Compiler preset at the build step (`vite.config.js`), eliminating the need for manual `useMemo` and `useCallback` ceremony.
3. **Hybrid Styling Strategy:** Combines Bootstrap 5's responsive grid classes (`row`, `col-lg-6`, `col-md-4`) with custom inline styles for fine-grained typographic and color control.

---

## Project Structure

```
task-1/
├── public/
│   ├── favicon.svg             # Application favicon
│   ├── icons.svg               # SVG asset icons
│   └── Lab 1.pdf               # Project design specification / brief
├── src/
│   ├── assets/
│   │   ├── hero.png            # Local hero graphic
│   │   ├── react.svg           # React logo asset
│   │   └── vite.svg            # Vite logo asset
│   ├── components/
│   │   ├── About.jsx           # Bio narrative & resume download trigger
│   │   ├── Education.jsx       # Academic credentials & EducationCard component
│   │   ├── Footer.jsx          # Contact information & social channels
│   │   ├── Hero.jsx            # Headline introduction & CTA button
│   │   ├── Navbar.jsx          # Top navigation bar & mobile collapse toggle
│   │   ├── Portfolio.jsx       # Service showcase & ProjectCard component
│   │   └── Skills.jsx          # SkillBar component & focus competencies
│   ├── App.css                 # Component-level stylesheet overrides (reserved)
│   ├── App.jsx                 # Root layout composer assembling sections
│   ├── index.css               # Global CSS reset, typography, and scroll behavior
│   └── main.jsx                # React DOM entry point with StrictMode
├── .gitignore                  # Git untracked files and dependencies
├── .oxlintrc.json              # Oxlint linting rules configuration
├── index.html                  # HTML entry point with CDN stylesheets and fonts
├── package.json                # Project dependencies, scripts, and metadata
└── vite.config.js              # Vite configuration with React Compiler plugin
```

---

## API Integration

- **Current Status:** [TODO] – Not implemented.
- **Data Source:** All portfolio information (skills percentages, educational history, project titles, contact links) is currently stored as static in-memory data arrays directly inside each respective component.
- **Handling Loading & Errors:** [TODO] – Not applicable (no asynchronous requests).
- **Authentication:** [TODO] – Not applicable.

> *Future architectural extension:* An API integration layer could be introduced to dynamically fetch project repositories via the GitHub REST API or content from a headless CMS (e.g., Strapi, Sanity), complete with loading skeleton states and error boundaries.

---

## Responsive Design

The interface employs mobile-first responsive principles powered by Bootstrap 5's 12-column grid:

- **Mobile Viewports (< 768px):**
  - Navbar collapses automatically into an expandable toggle menu.
  - The Hero split collapses to a single column, stacking introductory text above the portrait visual.
  - About, Skills, Education, and Portfolio grids transform from multi-column rows into clean, full-width single-column cards (`col-md-4` and `col-lg-6` stretch to 100% width).
  - Footer elements stack vertically with centered alignment for quick thumb navigation.
- **Tablet Viewports (768px – 991px):**
  - Education and Portfolio grids adopt multi-column layouts (`col-md-4`), presenting cards in organized rows.
  - Spacing and container gutters automatically scale to preserve readability.
- **Desktop Viewports (≥ 992px):**
  - Navbar links expand horizontally with hover transitions.
  - Hero section displays a balanced 50/50 side-by-side split (`col-lg-6`) spanning `minHeight: 85vh`.
  - About and Skills sections adopt asymmetrical 4:8 column distributions (`col-lg-4` for labels, `col-lg-8` for content).
  - Footer expands into a 3-column contact bar with right-aligned social media icons.

---

## Challenges & Solutions

### 1. In-Page Anchor Navigation Offset with Sticky Navbar
- **Challenge:** Navigating via native anchor hashes (`#skills`, `#portfolio`, etc.) caused section headings to be partially obscured behind the fixed navigation bar upon scrolling.
- **Solution:** Configured global smooth scrolling in `src/index.css` alongside a targeted scroll offset rule:
  ```css
  section[id], footer[id] {
    scroll-margin-top: 56px;
  }
  ```
  This creates a precise 56px offset that ensures all section headings land cleanly in the user's viewport without JavaScript scroll listeners.

### 2. React 19 Build Pipeline with Experimental React Compiler
- **Challenge:** Setting up React 19 with the new automated React Compiler required modern build-time Babel transformations that could easily slow down or break standard Vite bundler workflows.
- **Solution:** Configured `vite.config.js` using `@rolldown/plugin-babel` and the official `reactCompilerPreset()` from `@vitejs/plugin-react`:
  ```javascript
  plugins: [
    react(),
    babel({ presets: [reactCompilerPreset()] })
  ]
  ```
  This enables automated re-render memoization without requiring manual `useMemo` or `useCallback` calls throughout the codebase.

### 3. Component Reusability Without Extra State Overhead
- **Challenge:** Creating multiple data-dense sections (skills with progress bars, education history, portfolio services) without duplicate JSX code or bloated dependencies.
- **Solution:** Extracted internal subcomponents (`SkillBar`, `EducationCard`, `ProjectCard`) that consume clean JavaScript data structures. Each card encapsulates its own hover styles via event handlers (`onMouseEnter`/`onMouseLeave`), keeping the components lightweight and self-contained.

---

## Performance & Code Quality

- **React Compiler Enabled:** Automated compile-time memoization eliminates redundant component re-evaluations without manual hook boilerplate.
- **Fast Static Linting with Oxlint:** Configured `.oxlintrc.json` with Rust-powered `oxlint` enforcing React rules of hooks (`react/rules-of-hooks: error`) and component export standards (`react/only-export-components: warn`).
- **Minimal Runtime Footprint:** Lean dependency graph containing only two core runtime dependencies (`react` and `react-dom`), resulting in rapid cold starts and tiny bundle sizes.
- **Component Separation:** Codebase is organized into 7 distinct, single-responsibility components under `src/components/`.
- **CDN Asset Caching:** External styling and icon libraries (Bootstrap 5, Font Awesome 6) leverage global CDN caching for instantaneous browser loads.
- **Techniques Not Yet Present:**
  - Dynamic `React.lazy` / Code Splitting: [TODO] *(All components are currently statically imported)*
  - Manual memoization (`useMemo`, `useCallback`, `React.memo`): [TODO] *(Handled automatically by the React Compiler)*

---

## Installation

Follow these steps to run the project locally on your machine:

### Prerequisites
- **Node.js** (v18.0.0 or higher recommended)
- **npm** (or yarn / pnpm)

### Step-by-Step Setup

1. **Clone the repository:**
   ```bash
   git clone https://github.com/youssifmo2025/-Katie-Reed-Developer-Designer-Portfolio.git
   cd -Katie-Reed-Developer-Designer-Portfolio
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Start the local development server:**
   ```bash
   npm run dev
   ```
   Open your browser and navigate to `http://localhost:5173`.

4. **Run code linting:**
   ```bash
   npm run lint
   ```

5. **Build for production:**
   ```bash
   npm run build
   ```

6. **Preview the production build locally:**
   ```bash
   npm run preview
   ```

---

## Environment Variables

- **Required Variables:** No environment variables are currently required to run this project.
- **Future Configuration:** [TODO] If connecting an external contact form endpoint or CMS API, create a `.env` file in the root directory:
  ```env
  VITE_API_BASE_URL=https://api.example.com
  ```

---

## Future Improvements

- [ ] **Interactive Contact Form:** Replace the direct `mailto:` action with a functional contact form utilizing React Hook Form and EmailJS / Formspree with validation and feedback alerts.
- [ ] **Dynamic Data via API:** Connect to the GitHub REST API or a headless CMS (Sanity / Contentful) to dynamically populate portfolio projects and skills.
- [ ] **Dark / Light Theme Toggle:** Implement a theme toggle utilizing CSS custom variables and React Context for accessible contrast preferences.
- [ ] **Multi-Page Routing:** Integrate `react-router-dom` to support dedicated project case study detail pages.
- [ ] **Automated Testing:** Implement unit and integration tests using Vitest and React Testing Library.
- [ ] **TypeScript Migration:** Convert `.jsx` files to `.tsx` for static type safety, autocomplete, and enhanced maintainability.
- [ ] **Asset Localization & Bundling:** Bundle Bootstrap and Font Awesome via npm rather than CDN for offline capability and CSS tree-shaking.

---

## Author

**Frontend React Developer**

- **GitHub:** [@youssifmo2025](https://github.com/youssifmo2025)
- **LinkedIn:** [linkedin.com/in/YOUR_LINKEDIN_PROFILE](https://linkedin.com/in/YOUR_LINKEDIN_PROFILE)
- **Portfolio:** [YOUR_PORTFOLIO_URL](YOUR_PORTFOLIO_URL)
- **Email:** [youssifamen45@gmail.com](mailto:youssifamen45@gmail.com)

---

*This project was developed as part of the ITI (Information Technology Institute) Frontend Development Track.*
