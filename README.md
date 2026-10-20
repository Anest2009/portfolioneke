# Personal Website

A minimal, responsive personal website built with modern web technologies. Features a clean design with dark mode support, Spotify integration, and YouTube content showcase.

## 🚀 Tech Stack

### Core Technologies
- **React** - Frontend library
- **TypeScript** - Type-safe JavaScript
- **Vite** - Build tool and development server
- **Tailwind CSS** - Utility-first CSS framework

### Key Libraries
- **Framer Motion** - Animations and transitions
- **React Router** - Client-side routing
- **Axios** - HTTP client for API requests
- **React Type Animation** - Text typing effects

### APIs
- **Spotify Web API** - Real-time "Now Playing" integration
- **YouTube Data API** - Latest video showcase

## 🎯 Features

### Dark Mode
- System-based theme detection
- Manual theme toggle
- Persistent theme preference

### Responsive Design
- Mobile-first approach
- Fluid typography
- Adaptive layouts

### Sections
- **Home** - Introduction and latest content
  - Animated greeting
  - Latest YouTube videos
  - Current Spotify track
- **About** - Professional background and interests
  - Professional life
  - Content creation
  - Side projects
- **Gear** - Equipment and setup showcase
  - Computer/Workspace
  - PC Build
  - Peripherals

### Animations
- Page transitions
- Hover effects
- Loading states
- Typing animations

## 🛠 Project Structure

```text
public/          Static assets served directly
src/
  components/    Reusable UI components
  context/       Shared React context
  data/          Portfolio and page content
  hooks/         Custom React hooks
  pages/         Route-level page components
  styles/        Theme definitions
  types/         Shared TypeScript types
  utils/         Animation and rendering helpers
  App.tsx        Application routes
  main.tsx       Application entry point
```

## 💻 Local Development

With Node.js and npm installed, run these commands from the repository root:

```bash
npm ci
npm run dev
```

Open the local URL printed by Vite in your terminal.

### Production Build

```bash
npm run build
npm run preview
```

The build command runs TypeScript checks and creates the production output in
`dist/`. The preview command serves that output locally for inspection.
