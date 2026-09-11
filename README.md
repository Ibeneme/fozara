````markdown
# Fozara Demo

Welcome to the Fozara Demo repository. This is a modern, high-performance frontend web application for a global fintech platform designed to bridge digital assets, crypto, and local fiat financial systems.

---

## What is Fozara?

Fozara is a unified financial network where money enters once, whether digital or fiat, and can be easily converted, moved across borders, or spent locally. This web application showcases that vision with smooth animations, responsive mobile-friendly layouts, and lightning-fast performance.

---

## The Technology Stack

The project is built using industry-standard, modern web technologies:

- React 19: A powerful library for building interactive user interfaces.
- Vite: A next-generation frontend build tool that makes local development lightning fast.
- TypeScript: Adds type safety to code to prevent bugs before they happen.
- Tailwind CSS (v4): Used for styling modern, beautiful, and responsive designs.
- GSAP & Framer Motion: Used for smooth, professional scroll-based animations and transitions.

---

## Project Folder Structure

Here is how the project files are organized inside the src folder:

```text
fozara-demo/
├── public/                 # Static assets like your SVG logo and icons
├── src/
│   ├── assets/             # Local fonts and image files
│   ├── components/         # Reusable UI pieces, broken down by complexity:
│   │   ├── atoms/          # Smallest building blocks (e.g., custom tags, basic elements)
│   │   ├── molecules/      # Combinations of atoms (e.g., dropdown cards, input groups)
│   │   └── sections/       # Full-page sections (e.g., Hero, How Money Travels, Footer)
│   ├── constants/          # Static data constants (e.g., image paths, city lists)
│   ├── pages/              # Page views (e.g., Home page)
│   ├── utils/              # Helper utilities (e.g., QR code generators)
│   ├── App.tsx             # Main application entry point
│   ├── index.css           # Global styles and Tailwind configurations
│   └── main.tsx            # React DOM mounting script
├── index.html              # Main HTML template with SEO and social tags
├── package.json            # Project dependencies and script shortcuts
└── vite.config.ts          # Vite build and performance configurations
```
````

---

## How to Run This Project Locally

If you want to run or test this project on your computer, follow these simple steps:

### 1. Prerequisites

Make sure you have Node.js installed on your computer.

### 2. Install Dependencies

Open your terminal inside the project folder and run:

```bash
npm install

```

### 3. Start the Development Server

To launch the live local preview server, run:

```bash
npm run dev

```

Open the provided local link (usually http://localhost:5173) in your web browser to view the app.

---

## Available Scripts

Inside your terminal, you can run the following commands:

- `npm run dev` - Starts the local development server with hot-reloading.
- `npm run build` - Compiles and optimizes the project into production-ready static files.
- `npm run lint` - Checks your code for formatting and syntax errors.
- `npm run preview` - Locally preview the production build before deploying.

---

## Author

Built by [Ibeneme Ikenna](https://www.ibeneme.com)

```

```
