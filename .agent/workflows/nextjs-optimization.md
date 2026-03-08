---
description: Next.js Optimization Guardrails
---

# Next.js Optimization Standard Operating Procedure

// turbo-all

This workflow dictates the strict optimization rules for all Next.js applications built for clients. These rules are mandatory to ensure buttery-smooth performance, maximum SEO rankings, and zero "chunking" or layout shift.

## 1. Image Optimization Enforcement
- NEVER use native HTML `<img>` tags.
- ALWAYS use the Next.js `next/image` component for all static and dynamic media.
- Specify accurate `width` and `height` properties to prevent Cumulative Layout Shift (CLS).
- For images rendering "above the fold" (e.g., Hero images), the `priority` tag MUST be applied.
- For all other images, rely on the default lazy-loading behavior.
- Retain raw image assets in the `public` directory, and avoid using third-party CDNs unless explicitly commanded.

## 2. Typography & Layout Efficiency
- Globally organize spacing paradigms through unified `globals.css` utility classes (e.g., `.content-safe-text`, `.media-safe-title`). 
- Prevent scattered, local Tailwind CSS adjustments that overwrite global mobile layouts. All base typography must be governed by CSS variables matching the chosen brand identity.
- Consistently enforce standardized container widths on all generic pages (e.g., `max-w-7xl` across everything) so grids align properly.

## 3. Deployment Pre-flight
Prior to committing any code, perform a local build to identify and eliminate standard HTML compilation errors using `npm run build`. 
