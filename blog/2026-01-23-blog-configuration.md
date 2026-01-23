---
slug: blog-configuration
title: Setting up my Docusaurus Blog from the Boilerplate - Setup Part 4
authors: [raghavendra]
tags: [docusaurus setup, blog section]
---

# Understanding the Docusaurus Blog System

_A mental model for structured, time-based publishing_

When you first open a fresh Docusaurus project, the `/blog` folder can feel deceptively simple. A few Markdown files, maybe a folder or two, some YAML files — and yet a fully functional blog magically appears at `/blog`.

<!-- truncate -->

This post explains **how the Docusaurus blogging system actually works**, what each file is responsible for, and how to think about blogs vs docs when building a serious content platform.

---

## The Big Picture: What the Docusaurus Blog Is

Docusaurus ships with two core content systems:

- **Docs** → structured, hierarchical, sidebar-driven knowledge
- **Blog** → flat, chronological, time-based publishing

The blog plugin is optimized for:

- Announcements
- Studio updates
- Research notes
- Essays and long-form writing
- Dev logs and changelogs

If docs are your _knowledge base_, the blog is your _stream of thought over time_.

---

## The `/blog` Folder Is the Entire Blog

Everything under:

```
/blog
```

is managed by the Docusaurus blog plugin.

There is no registration step. No config per post. Docusaurus automatically:

- Discovers blog posts
- Generates URLs
- Creates the blog index
- Builds tag and author pages
- Produces RSS feeds

If a file lives in `/blog`, Docusaurus treats it as publishable content.

---

## Two Valid Blog Post Formats

Docusaurus supports **two equally valid ways** to create a blog post.

### 1. Flat File Posts

Example:

```
blog/
  2019-05-28-first-blog-post.md
```

Characteristics:

- Filename usually starts with `YYYY-MM-DD`
- The date influences post ordering
- The filename becomes the URL slug (unless overridden)

Resulting URL:

```
/blog/first-blog-post
```

This format is simple and works well for short posts.

---

### 2. Folder-Based Posts (Recommended)

Example:

```
blog/
  2021-08-26-welcome/
    index.md
    banner.jpeg
```

Characteristics:

- Folder represents a single post
- `index.md` or `index.mdx` is the entry point
- Assets live next to the content

Resulting URL:

```
/blog/welcome
```

This format is ideal for:

- Posts with images
- Research articles
- Long-form essays
- Studio or project updates

For most serious projects, **folder-based posts scale better**.

---

## Front Matter: The Control Panel of a Post

Every blog post begins with front matter:

```md
---
title: Welcome to Fluxainē Studios
slug: welcome
authors: [studio]
tags: [announcement, studio]
draft: true
---
```

Common fields:

| Field     | Purpose                       |
| --------- | ----------------------------- |
| `title`   | Display title                 |
| `slug`    | URL override                  |
| `date`    | Publish date                  |
| `authors` | Maps to `authors.yml`         |
| `tags`    | Freeform or predefined        |
| `draft`   | Excludes post from production |

Front matter controls **how the post is published**, not just how it looks.

---

## Drafts, Previews, and Publishing

Docusaurus has a built-in draft workflow.

If a post includes:

```md
draft: true
```

Then:

- It appears in local development
- It is excluded from production builds
- It does not appear in RSS feeds
- It is not indexed

To publish a post, simply remove the `draft` flag.

This gives you a clean:
**draft → preview → publish**
workflow without a CMS.

---

## Authors and Tags (Optional but Powerful)

### `authors.yml`

This file defines reusable author profiles:

```yml
studio:
  name: Fluxainē Studios
  title: Research & Systems
```

Used in posts like:

```md
authors: [studio]
```

Docusaurus automatically generates author pages.

---

### `tags.yml`

Tags work even without this file, but `tags.yml` lets you add metadata:

```yml
research:
  label: Research
  description: Exploratory and theoretical work
```

Each tag automatically gets its own page:

```
/blog/tags/research
```

---

## Markdown vs MDX

You’ll notice both `.md` and `.mdx` files in the blog.

- **`.md`** → pure writing, essays, notes
- **`.mdx`** → Markdown + React components

Use MDX when you need:

- Custom components
- Interactive examples
- Embedded diagrams or demos

Both formats coexist seamlessly.

---

## How Blog Routes Are Generated

Without any manual wiring, Docusaurus creates:

| Page         | Route                    |
| ------------ | ------------------------ |
| Blog index   | `/blog`                  |
| Blog post    | `/blog/<slug>`           |
| Tag pages    | `/blog/tags/<tag>`       |
| Author pages | `/blog/authors/<author>` |
| RSS feed     | `/blog/rss.xml`          |

Everything is derived from files and front matter.

---

## Blogs Are Flat by Design

Unlike docs:

- Blog posts do not nest
- There is no sidebar hierarchy
- Ordering is purely chronological

This is intentional.

If content needs:

- Structure
- Navigation
- Long-term discoverability

→ it belongs in **Docs**

If content represents:

- Thought
- Progress
- Updates over time

→ it belongs in the **Blog**

---

## What to Do With the Boilerplate Posts

The default blog posts exist to demonstrate:

- Flat vs folder formats
- MD vs MDX
- Tags and authors

You can safely:

- Delete them
- Rewrite them
- Replace them with studio-specific content

Nothing in the system depends on them.

---

## A Recommended Blog Strategy

For a studio or research-driven site:

- Prefer **folder-based posts**
- Keep posts as drafts until ready
- Use tags as _themes_, not categories
- Treat the blog as a thinking log
- Promote mature ideas into Docs later

This creates a clean pipeline from:
**exploration → articulation → canon**

---

## Closing Thoughts

Docusaurus blogging is deceptively simple on the surface, but extremely powerful once you understand the mental model:

> Files become posts.
> Front matter becomes behavior.
> Time becomes structure.

Once that clicks, the blog system gets out of your way — and lets you focus on writing.
