---
slug: homepage-features-refactor
title: Refactoring Homepage Features from the Boilerplate - Setup Part 3
authors: [raghavendra]
tags: [docusaurus setup, feature section]
---

# Migrating Homepage Features from SVGs to High-Resolution PNGs in Docusaurus

While refining the Fluxainē Studios homepage, I made a small but important UI refactor: replacing the default SVG-based feature icons with custom 1080×1080 PNG images.

Although this sounds simple, it touches **React component design**, **TypeScript module resolution**, and **Docusaurus asset handling**. This post walks through each change with a clear _before → after_ comparison.

<!-- truncate -->

---

## Why Change the Default SVG Setup?

The Docusaurus homepage template assumes:

- Feature images are **SVGs**
- SVGs are imported as **React components**
- Styling is controlled via SVG props

For Fluxainē Studios, this wasn’t ideal:

- The visual identity required **high-resolution, circular PNG artwork**
- The images needed to behave like traditional media assets
- SVG-as-component semantics were no longer a good fit

So the goal became:

> Replace SVG React components with standard PNG images — cleanly and type-safely.

---

## 1. Updating the Feature Data Model

### Before: SVG as a React Component

```tsx
// src/components/HomepageFeatures/index.tsx

type FeatureItem = {
  title: string;
  Svg: React.ComponentType<React.ComponentProps<"svg">>;
  description: ReactNode;
};
```

Each feature expected a renderable SVG component.

---

### After: Image Path Instead of Component

```tsx
// src/components/HomepageFeatures/index.tsx

type FeatureItem = {
  title: string;
  image: string;
  description: ReactNode;
};
```

This better reflects reality: PNGs are **assets**, not components.

---

## 2. Updating the Feature List

### Before: SVG imports via `require`

```tsx
// src/components/HomepageFeatures/index.tsx

{
  title: "Applied Research",
  Svg: require("@site/static/img/research-feature-image.svg").default,
  description: (
    <>
      Extend or customize your website layout by reusing React.
    </>
  ),
}
```

This pattern is specific to SVG loaders.

---

### After: PNG imports as modules

```tsx
// src/components/HomepageFeatures/index.tsx

import researchImg from "@site/static/img/research-feature-image.png";

{
  title: "Applied Research",
  image: researchImg,
  description: (
    <>
      Extend or customize your website layout by reusing React.
    </>
  ),
}
```

Here, the feature images were placed into `static/img/` directory.

```bash
static/img/culture-feature-image.png
static/img/research-feature-image.png
static/img/tech-feature-image.png
```

This approach is:

- More explicit
- Type-safe
- Easier to refactor later

---

## 3. Updating the Feature Component

### Before: Rendering an SVG Component

```tsx
// src/components/HomepageFeatures/index.tsx

function Feature({ title, Svg, description }: FeatureItem) {
  return (
    <div className={clsx("col col--4")}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <Heading as="h3">{title}</Heading>
        <p>{description}</p>
      </div>
    </div>
  );
}
```

The component assumed SVG-specific behavior.

---

### After: Rendering a Standard Image

```tsx
// src/components/HomepageFeatures/index.tsx

function Feature({ title, image, description }: FeatureItem) {
  return (
    <div className={clsx("col col--4")}>
      <div className="text--center">
        <img
          src={image}
          alt={title}
          className={styles.featureImage}
          loading="lazy"
        />
      </div>
      <div className="text--center padding-horiz--md">
        <Heading as="h3">{title}</Heading>
        <p>{description}</p>
      </div>
    </div>
  );
}
```

This aligns with standard HTML semantics and improves accessibility.

---

## 4. Handling TypeScript PNG Import Errors

After switching to PNG imports, TypeScript raised the following error:

```
Cannot find module '*.png' or its corresponding type declarations
```

This happens because **TypeScript does not understand non-code assets by default**.

---

### The Fix: Declare Image Modules

A global declaration file was added:

```ts
// src/types/images.d.ts

declare module "*.png" {
  const src: string;
  export default src;
}

declare module "*.jpg" {
  const src: string;
  export default src;
}

declare module "*.jpeg" {
  const src: string;
  export default src;
}

declare module "*.webp" {
  const src: string;
  export default src;
}

declare module "*.svg" {
  const src: string;
  export default src;
}
```

With this in place, TypeScript correctly understands image imports across the project.

---

## 5. Styling High-Resolution Images Responsibly

Even though the source images are **1080×1080**, they should never render at that size.

Instead, CSS controls display size:

```css
/* src/components/HomepageFeatures/styles.module.css */

.featureImage {
  width: 250px;
  height: auto;
  margin: 1rem;
  border-radius: 50%; /* circular feature image */
}
```

This preserves:

- Sharpness on retina displays
- Layout consistency
- Performance

---

## Final Result

After these changes, the homepage feature section:

- Uses **custom, high-resolution PNG artwork**
- Avoids SVG-specific assumptions
- Remains fully type-safe
- Is easier to theme, animate, and extend

Most importantly, the code now reflects the **design intent** of the site rather than the defaults of the template.

---

## Closing Thoughts

This refactor is a good reminder that:

> Boilerplate is a starting point — not a constraint.

Small structural changes like this compound over time and make future design and content decisions significantly easier.
