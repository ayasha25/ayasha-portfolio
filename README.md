# Ayasha Portfolio (React + GitHub Pages)

Modern React portfolio with dark/light mode and data-driven project cards.

## Local Dev

```bash
npm install
npm run dev
```

## Build

```bash
npm run build
```

## Deploy (GitHub Pages)

Deployment is automatic via GitHub Actions on every push to `master`.

### One-time GitHub setting
In your repo settings:
1. Go to **Settings → Pages**
2. Under **Build and deployment**, choose **Source: GitHub Actions**

Then push any commit and your site will go live at:

`https://ayasha25.github.io/ayasha-portfolio/`

## Customize

- Edit portfolio content in `src/App.jsx`
- Manage projects in `src/projects.js`
- Tweak design tokens in `src/styles.css`
