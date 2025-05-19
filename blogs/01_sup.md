---
title: "SSG-SSR-CSR-ISG: What even are these?"
date: "2025-05-13"
description: ["Talks about some of the common frontend building methods — comparing setup and performance of each."]
---

## SSG (Static Site Generation)
- HTML is pre-rendered at **build time**.
- Served instantly from CDN/static server.
- Fastest among all.
- **Hydration** required on the client for interactivity and dynamic behavior.

## SSR (Server Side Rendering)
- Renders HTML **per request** on the server.
- Ideal when SEO is needed but content is **dynamic**.
- Leverages server power to generate complete HTML.
- Followed by **hydration** on the client.

## CSR (Client Side Rendering)
- Sends a minimal HTML + JS/CSS to client.
- Browser builds the page entirely.
- Slowest; poor for SEO.
- Used when content is highly dynamic and SEO is not a concern.

## ISR (Incremental Static Regeneration)
- Combines **SSG + SSR**.
- Uses `revalidate` prop in `getStaticProps`.
- When revalidate time expires:
  - A **new static page is built** in the background.
  - Meanwhile, **stale page is served**.
- Best for mostly-static content that updates occasionally.
