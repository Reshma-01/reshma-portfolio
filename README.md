# Reshma Babu — Portfolio (React + Vite)

A personal portfolio site built from scratch as a React project.

## Run it locally

```bash
npm install
npm run dev
```

Then open the local URL shown in the terminal (usually `http://localhost:5173`).

## Build for deployment

```bash
npm run build
```

This outputs a static site to the `dist/` folder, which you can deploy to
Netlify, Vercel, GitHub Pages, or any static host.

## Add your photo

A placeholder avatar (purple gradient with "RB") is currently used at:

```
src/assets/profile.svg
```

To use your real photo:

1. Add your image file to `src/assets/` — e.g. `src/assets/profile.jpg`
2. Open `src/components/Hero.jsx`
3. Change this line:
   ```js
   import profileImg from "../assets/profile.svg";
   ```
   to:
   ```js
   import profileImg from "../assets/profile.jpg";
   ```

The photo will automatically appear in the tilted rounded frame in the hero
section, cropped to a square — so a centered headshot works best.

## Project structure

```
src/
  components/
    Header.jsx      nav bar
    Hero.jsx         name, tagline, photo, stats
    About.jsx        summary + quick facts
    Skills.jsx       grouped skill chips
    Experience.jsx   timeline of roles
    Projects.jsx     project cards
    Education.jsx    degree + certifications
    Contact.jsx      email/phone/LinkedIn/GitHub + footer
  data.js            all resume content in one place
  App.jsx            assembles the page
  index.css          design tokens + all styles
  main.jsx           React entry point
```

## Editing content

All resume content (experience, projects, skills, etc.) lives in a single
file: `src/data.js`. Update the text there and it flows through to every
component automatically — no need to touch the component files for content
changes.

## Color theme

Colors are defined as CSS variables at the top of `src/index.css`:

```css
--accent: #7C3AED;      /* primary violet */
--accent-deep: #5B21B6; /* deeper violet, used for text/hover */
--accent-soft: #EFE7FC; /* light tint, used for chip backgrounds */
```

Change these three values to retheme the entire site.
