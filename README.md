# Dakarai Mitcham Portfolio

A polished React portfolio site built to showcase my software engineering projects, technical stack, resume, and contact links in a recruiter-friendly format.

The site uses a dark command-center visual style with project cards, a technical hero section, resume access, and clear links to live projects and source code.

## Live Site

https://portfolio-dakaraicodes-projects.vercel.app

## Features

- Responsive single-page portfolio layout
- Technical hero section with code-editor inspired visuals
- Featured project cards for full-stack and AI-focused work
- Tech stack grid with custom icons and visual grouping
- Resume download link
- GitHub, LinkedIn, and email contact links
- Vercel-ready static deployment setup

## Tech Stack

- React
- Vite
- JavaScript
- Tailwind CSS
- lucide-react
- Vercel

## Project Structure

```text
portfolio/
|-- public/
|   |-- Resume.pdf
|   `-- icons.svg
|-- src/
|   |-- App.jsx
|   |-- index.css
|   `-- main.jsx
|-- index.html
|-- package.json
`-- vite.config.js
```

## Local Setup

### Prerequisites

- Node.js 20+
- npm

### Install dependencies

```bash
npm install
```

### Start the development server

```bash
npm run dev
```

The app runs locally at the Vite-provided localhost URL, usually:

```text
http://localhost:5173
```

### Build for production

```bash
npm run build
```

### Preview the production build

```bash
npm run preview
```

## Available Scripts

| Command | Purpose |
| --- | --- |
| `npm run dev` | Start the local Vite dev server |
| `npm run build` | Build the production bundle |
| `npm run lint` | Run ESLint |
| `npm run preview` | Preview the production build locally |

## Featured Projects

The portfolio currently highlights:

- EvalForge, an LLM evaluation platform
- NeuraGraph, an AI knowledge graph builder
- TeamBoard, a planned project management app concept

## Future Improvements

- Replace placeholder project links once new projects are public
- Add screenshots or short demo GIFs for featured projects
- Add a dedicated project detail page or modal for deeper case studies
- Add automated build checks through GitHub Actions
- Add accessibility and Lighthouse score badges once measured

## Author

Built by Dakarai Mitcham as a personal software engineering portfolio.