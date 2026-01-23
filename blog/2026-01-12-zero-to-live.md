---
slug: zero-to-live-post
title: From Zero to Live - Setup Part 1
authors: [raghavendra]
tags: [first-post, docusaurus setup]
---

# From Zero to Live

###### _Setting Up Fluxainē Studios on GitHub Pages with Docusaurus_

This post documents the complete, _correct_ setup of the **Fluxainē Studios** website — from an empty GitHub repository to a fully deployed, production-ready site using **Docusaurus**, **TypeScript**, and **GitHub Actions**, hosted on **GitHub Pages**.

<!-- truncate -->

The goal was to create a **stable, long-term foundation** for publishing blogs, research, and documentation — without unnecessary services, lock-in, or hidden complexity.

---

## Goals

Before writing a single line of code, the constraints were clear:

- Static-first architecture
- Git as the single source of truth
- Clean publishing pipeline
- Long-term maintainability
- No CMS dependencies required at launch
- Hosted at `https://fluxaine-studios.github.io`

---

## Phase 1 — Repository Setup

### 1. Create the GitHub Pages repository

Create a repository named:

```
fluxaine-studios.github.io

```

This naming convention enables **GitHub Pages organization root hosting**, meaning the site will live directly at:

```
https://fluxaine-studios.github.io

```

Clone the repository locally.

---

## Phase 2 — Scaffold Docusaurus (TypeScript)

### 2. Generate the Docusaurus site

From inside the repository directory:

```bash
npx create-docusaurus@latest website classic --typescript

```

This scaffolds a full Docusaurus project using:

- the **classic preset**
- **TypeScript**
- modern defaults

At this stage, the site lives in a `website/` subdirectory.

---

### 3. Move Docusaurus to the repository root

To keep the repository clean and conventional, move the scaffolded files up one level:

```bash
mv website/* website/.* . 2>/dev/null
rmdir website

```

The repository root now contains:

```
docusaurus.config.ts
package.json
src/
static/
sidebars.ts

```

---

### 4. Verify local development

Install dependencies and start the dev server:

```bash
npm install
npm run start

```

Confirm the site runs locally at:

```
http://localhost:3000

```

At this point, the local development environment is fully functional.

---

## Phase 3 — Configure Site Metadata

### 5. Update Docusaurus configuration

Edit `docusaurus.config.ts` to reflect the real site identity:

```tsx
title: 'Fluxainē Studios',
url: 'https://fluxaine-studios.github.io',
baseUrl: '/',
organizationName: 'fluxaine-studios',
projectName: 'fluxaine-studios.github.io',
deploymentBranch: 'gh-pages',

```

Because this is an **organization root site**, `baseUrl` remains `/`.

---

### 6. Commit the baseline

This is the first stable checkpoint:

```bash
git add .
git commit -m "chore: initial Docusaurus site scaffold (TypeScript)"

```

---

## Phase 4 — GitHub Actions Deployment

To deploy automatically on every push to `main`, a GitHub Actions workflow is added.

---

### 7. Create the deployment workflow

Create:

```
.github/workflows/deploy.yml

```

```yaml
name: Deploy to GitHub Pages

on:
  push:
    branches:
      - main

jobs:
  deploy:
    runs-on: ubuntu-latest
    permissions:
      contents: write

    steps:
      - name: Checkout
        uses: actions/checkout@v4

      - name: Setup Node
        uses: actions/setup-node@v4
        with:
          node-version: 20
          cache: npm

      - name: Install dependencies
        run: npm ci

      - name: Build website
        run: npm run build

      - name: Deploy to GitHub Pages
        uses: peaceiris/actions-gh-pages@v4
        with:
          github_token: ${{ secrets.GITHUB_TOKEN }}
          publish_dir: ./build
```

Key decisions:

- **Node 20** is used to meet modern Docusaurus requirements
- Deployment targets the `gh-pages` branch
- No manual secrets are required

---

### 8. Push and deploy

Commit and push:

```bash
git add .github
git commit -m "ci: deploy Docusaurus site to GitHub Pages"
git push origin main

```

GitHub Actions will:

1. Build the site
2. Create the `gh-pages` branch
3. Publish the static output

---

## Phase 5 — Enable GitHub Pages

Once the first deployment completes:

1. Go to **Repository Settings → Pages**
2. Set:
   - Source: **Deploy from a branch**
   - Branch: `gh-pages`
   - Folder: `/ (root)`
3. Save

Within minutes, the site becomes publicly accessible at:

```

A clean Docusaurus + TypeScript codebase
Automated CI/CD via GitHub Actions
GitHub Pages hosting with zero vendor lock-in
A foundation ready for blogs, research, and long-form writing
No CMS, no auth proxies, no hidden services — just a clear, durable publishing system.
What Comes Next
With the infrastructure complete, future work can focus on:
Content architecture (blogs, research, essays)
Editorial conventions
Preview builds for pull requests
Long-term studio publishing workflows
All without revisiting deployment complexity.https://fluxaine-studios.github.io

```

---

## Final Result

At the end of Phase 5, Fluxainē Studios has:

- A live, production-ready website
- A clean Docusaurus + TypeScript codebase
- Automated CI/CD via GitHub Actions
- GitHub Pages hosting with zero vendor lock-in
- A foundation ready for blogs, research, and long-form writing

No CMS, no auth proxies, no hidden services — just a **clear, durable publishing system**.

---

## What Comes Next

With the infrastructure complete, future work can focus on:

- Content architecture (blogs, research, essays)
- Editorial conventions
- Preview builds for pull requests
- Long-term studio publishing workflows

All without revisiting deployment complexity.
