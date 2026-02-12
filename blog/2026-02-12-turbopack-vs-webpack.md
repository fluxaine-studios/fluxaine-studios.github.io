---
slug: turbopacl-vs-webpack
title: Turbopack vs. Webpack for Build and Deploy.
authors: [raghavendra]
tags: [turbopack, webpack, nextjs, pwa]
---

Turbopack vs. Webpack is a foundational question. 

If you understand this properly, you stop being “React dev who runs npm run dev” and start thinking like an engineer who controls the build system.

<!-- truncate -->

Let’s break it down cleanly.

---

## 1️⃣ What is Webpack?

### 🧱 Webpack

#### In simple terms:

Webpack is a **module bundler**.

Your app has:

* `.tsx`
* `.ts`
* `.css`
* images
* fonts
* environment variables
* dynamic imports

Webpack takes all of that and:

1. Builds a dependency graph
2. Bundles everything into optimized JS/CSS files
3. Splits code (code splitting)
4. Minifies for production
5. Injects assets into HTML

Without a bundler, the browser can’t understand your modern React app structure.

#### In your Habit Tracker PWA context:

Webpack:

* Transpiles your TS → JS
* Bundles your dashboard routes
* Splits `/habits/[id]/analytics`
* Optimizes production builds

It has been the industry standard for years.

But…

It’s JavaScript-based and can be slow on large projects.

---

## 2️⃣ What is Turbopack?

### ⚡ Turbopack

Turbopack is:

* Built by the team behind Next.js
* Written in Rust
* Designed to replace Webpack in Next.js

#### Core difference:

Turbopack is built for **incremental builds at scale**.

It only recompiles what changed.

Webpack:

> Rebuilds large chunks of your app.

Turbopack:

> Rebuilds only the minimal affected modules.

That’s why Turbopack is dramatically faster in dev mode.

---

## 3️⃣ Turbopack vs Webpack — For Habit Trackr PWA

If you are building:

* Next.js App Router
* Client components
* IndexedDB
* Dynamic routes
* Possibly service workers later

Here’s what actually matters:

| Area              | Webpack         | Turbopack                 |
| ----------------- | --------------- | ------------------------- |
| Dev server speed  | Slower          | Much faster               |
| HMR (hot reload)  | Good            | Extremely fast            |
| Production build  | Mature & stable | Still evolving            |
| Ecosystem plugins | Massive         | Limited (still growing)   |
| Default in Next   | Older versions  | Newer versions (dev mode) |

#### Critical Reality (2026 state)

In modern Next.js:

* Turbopack is primarily used in **development**
* Production builds still rely heavily on Webpack internally (depending on Next version)

So for your PWA:

You probably:

* Are already using Turbopack in dev
* Use Webpack for production build output

And you didn’t have to configure either.

That’s the power of Next.js.

For illustrating the differnce between the two, you’d say:

> Webpack is a mature JS-based bundler that builds dependency graphs and outputs optimized bundles. Turbopack is a Rust-based incremental bundler designed for high-performance dev workflows in Next.js. For production PWA builds, service workers and manifest configuration matter far more than bundler choice.

---

## 4️⃣ What is ACTUALLY necessary to build a PWA today?

This is the important part.

A bundler is not what makes something a PWA.

To make your app a real PWA, you need:

---

### 🧩 1. Web App Manifest (example)

```json
{
  "name": "Habit Trackr",
  "short_name": "Habit",
  "display": "standalone",
  "start_url": "/",
  "background_color": "#000000",
  "theme_color": "#000000",
  "icons": [...]
}
```

This makes it installable.

---

### 🔄 2. Service Worker

This is what makes it:

* Offline-capable
* Cache-aware
* Background sync capable

Without a service worker → not a real PWA.

You can use:

* Custom service worker
* Or something like Workbox

---

### 📦 3. HTTPS

Required for:

* Service workers
* Installability

Vercel already handles this.

---

### 🧠 4. Proper caching strategy

For your app, you might cache:

* Static assets
* App shell
* IndexedDB persistence fallback

Since you're already using IndexedDB:
You’re halfway to offline-first architecture.

---

Yes. Clean and simple — here are the **only changes you need** in `package.json` to make your PWA build correctly with Next.js 16 + `next-pwa`.

---

## ✅ Required Script Changes

You must explicitly force **Webpack** for both dev and build.

### Replace your scripts section with this:

```json
{
  "scripts": {
    "dev": "next dev --webpack", 
    "build": "next build --webpack", 
    "start": "next start"
  }
}
```

- ensure this config is the case for your vercel deployment settings also

---

## 🎯 Why this is necessary

* Next.js 16 defaults to **Turbopack**
* `next-pwa` depends on **Webpack** (as of *Feb 2026*)
* Without `--webpack`, build will fail
* This ensures:

  * Service worker gets generated
  * `sw.js` appears in `public/`
  * PWA works in production




