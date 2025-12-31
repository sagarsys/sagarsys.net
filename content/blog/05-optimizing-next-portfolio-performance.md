---
title: "Optimizing My Portfolio's Performance Without Sacrificing the Cool Stuff"
description: A story of debugging Lighthouse scores, taming Framer Motion, and learning that you CAN have smooth animations AND fast load times - with a little help from AI.
date: 2025-12-19
author: Sagar Sawuck
categories:
  - Web Development
  - Performance
tags:
  - nextjs
  - performance
  - lighthouse
  - framer-motion
  - optimization
  - pwa
  - webp
  - caching
featured: true
image: /images/blog/05-optimizing-next-portfolio-performance/cover.png
order: 5
---

## The Moment Everything Went Red

Picture this: You've just finished building a beautiful portfolio site. Smooth Framer Motion animations. A mesmerizing particle background. Crisp WebP images. Everything looks *chef's kiss*.

Then you run Lighthouse.

**LCP: 9.4 seconds. TBT: 1,060ms.**

![Lighthouse scores went red](/images/blog/05-optimizing-next-portfolio-performance/lighthouse-red.png)

My beautiful, animation-rich portfolio was performing like it was running on a potato. The question was: do I strip out all the nice things to chase a green score, or is there a way to keep both?

Spoiler: There's a way. And AI-assisted debugging made finding it surprisingly fun.

## The Diagnosis: What Was Actually Slow?

Before blindly optimizing, I needed to understand *what* was slow. This is where Lighthouse's breakdown became invaluable.

### The Culprits

1. **Element Render Delay: 4,000ms** - The LCP element (my hero title) was waiting 4 seconds before painting
2. **Forced Reflows** - `ParticleBackground.tsx` was causing layout recalculations
3. **Main Thread Work: 3.7s** - JavaScript was blocking the main thread
4. **No Cache Headers** - Static assets weren't being cached efficiently

The biggest surprise? The delay wasn't from loading resources - it was from my **animation delays**.

```javascript
// The original HeroContent.tsx
<motion.h2
  initial={{ opacity: 0, y: 20 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 1.2, delay: 1.2 }} // 👈 This was the problem
>
  Senior Fullstack Developer...
</motion.h2>
```

That `delay: 1.2` meant the LCP element was **intentionally hidden** for 1.2 seconds. Lighthouse saw this as a 1.2s render delay - and it was right.

## The AI-Assisted Debugging Journey

Here's where things got interesting. Instead of randomly tweaking things, I used Cursor as a debugging partner. The workflow looked like this:

### Step 1: Share the Problem

I pasted the Lighthouse report directly into the chat:

> "Lighthouse scores took a major hit. LCP: 9.4s, TBT: 1,060ms. What's causing this?"

### Step 2: Generate Hypotheses

The AI immediately identified potential causes:

1. **Framer Motion animation delays** blocking LCP paint
2. **ParticleBackground** reading `scrollHeight` every animation frame
3. **Dev mode** artificially inflating the scores (important caveat!)
4. **Large images** not being optimized for WebP

### Step 3: Validate with Evidence

```javascript
// ParticleBackground.tsx - The problematic line
const animate = () => {
  const maxScroll = document.documentElement.scrollHeight - window.innerHeight
  // ☝️ This was being called every frame, forcing layout recalculation
}
```

Reading `scrollHeight` triggers a [forced reflow](https://gist.github.com/paulirish/5d52fb081b3570c81e3a) - the browser has to recalculate the entire layout to give you the answer. Doing this 60 times per second was killing performance.

## The Fixes: Keeping Animations AND Performance

### 1. Lazy-Load Non-Critical Components

The particle background looks cool, but it's not critical for the initial paint. Solution: lazy-load it.

```typescript
// LazyParticleBackground.tsx
import dynamic from 'next/dynamic'

const ParticleBackground = dynamic(
  () => import('./ParticleBackground'),
  { ssr: false, loading: () => null }
)

export default function LazyParticleBackground() {
  return <ParticleBackground />
}
```

This defers the particle animation until after the critical content loads.

📚 [Next.js Dynamic Imports Documentation](https://nextjs.org/docs/pages/building-your-application/optimizing/lazy-loading)

### 2. Cache Expensive Calculations

Instead of reading `scrollHeight` every frame, cache it and only recalculate on resize:

```typescript
// Before: Reading every frame
const animate = () => {
  const maxScroll = document.documentElement.scrollHeight - window.innerHeight
}

// After: Cached with resize listener
const [scrollHeight, setScrollHeight] = useState(0)

useEffect(() => {
  const updateScrollHeight = () => {
    setScrollHeight(document.documentElement.scrollHeight - window.innerHeight)
  }
  updateScrollHeight()
  window.addEventListener('resize', updateScrollHeight)
  return () => window.removeEventListener('resize', updateScrollHeight)
}, [])
```

### 3. The Animation Compromise

This was the trickiest part. My first instinct was to replace Framer Motion with CSS animations. The AI even helped implement it:

```css
@keyframes fade-in-up {
  from { opacity: 0; transform: translateY(20px); }
  to { opacity: 1; transform: translateY(0); }
}

.animate-fade-in-up {
  animation: fade-in-up 0.6s ease-out forwards;
}
```

But honestly? I didn't like it. The staggered Framer Motion animations had a certain *feel* that CSS couldn't replicate.

So I pushed back:

> "No, I don't like it. I'm willing to compromise a little but I prefer the Framer Motion animations. Please restore them and just decrease the timings of LCP critical items only."

The result? A **middle ground** that worked:

- **Greeting**: 0.5s → 0.3s
- **Name (h1)**: 0.8s → 0.3s
- **Title (h2 - LCP)**: 1.2s → **0.5s** ← the critical one
- **Tech pills**: 1.6s → 0.5s

The LCP delay dropped from 1.2s to 0.5s - still animated, but not blocking the Lighthouse score.

### 4. Proper Cache Headers in AWS

Static assets were being re-downloaded on every visit. The fix was setting proper `Cache-Control` headers during S3 deployment:

```yaml
# GitHub Actions workflow
- name: Deploy static assets (long cache)
  run: |
    aws s3 sync out/ s3://${{ secrets.AWS_BUCKET }} \
      --exclude "*" \
      --include "*.js" --include "*.css" \
      --include "*.woff2" --include "*.webp" \
      --cache-control "public, max-age=31536000, immutable"

- name: Deploy HTML (no cache)
  run: |
    aws s3 sync out/ s3://${{ secrets.AWS_BUCKET }} \
      --exclude "*" --include "*.html" \
      --cache-control "public, max-age=0, must-revalidate"
```

### 5. Image Optimization Pipeline

Images are often the heaviest assets on a page. I built a multi-layered approach:

**A. Build-time WebP Generation**

I created a Node.js script using [Sharp](https://sharp.pixelplumbing.com/) that runs before each build:

```javascript
// scripts/optimize-images.js
const sharp = require('sharp')

async function optimizeImage(inputPath) {
  const image = sharp(inputPath)
  const metadata = await image.metadata()
  
  // WebP has dimension limits (16383px max)
  if (metadata.width > 16383 || metadata.height > 16383) {
    console.log(`⚠️ Skipping ${inputPath} - exceeds WebP limits`)
    return
  }
  
  await image
    .webp({ quality: 80 })
    .toFile(inputPath.replace(/\.(png|jpg)$/, '.webp'))
}
```

This pre-generates WebP versions of all images, so Next.js doesn't have to do runtime conversion.

**B. Smart Image Loading with Next/Image**

Next.js's `Image` component handles responsive sizing and lazy loading automatically:

```tsx
<Image
  src={heroImage}
  alt={post.frontmatter.title}
  fill
  className="object-cover"
  priority // 👈 Only for above-the-fold images
/>
```

The `priority` prop tells Next.js to preload this image - use it sparingly, only for LCP candidates.

**C. The WebP Gotcha**

One image refused to convert: `bengalivo-mobile.png` at **16,384 pixels tall** (a full-page mobile screenshot). WebP has a hard limit of 16,383px on any dimension. The script now detects and skips these edge cases.

### 6. Service Worker for Offline & Caching

For repeat visitors, a service worker can dramatically improve perceived performance by caching assets locally.

I used [next-pwa](https://github.com/shadowwalker/next-pwa) which auto-generates a service worker:

```javascript
// next.config.js
const withPWA = require('next-pwa')({
  dest: 'public',
  disable: process.env.NODE_ENV === 'development',
  runtimeCaching: [
    {
      urlPattern: /^https:\/\/fonts\.googleapis\.com/,
      handler: 'CacheFirst',
    },
    {
      urlPattern: /\.(?:png|jpg|jpeg|webp|svg)$/,
      handler: 'CacheFirst',
      options: {
        cacheName: 'images',
        expiration: { maxEntries: 50, maxAgeSeconds: 30 * 24 * 60 * 60 },
      },
    },
  ],
})
```

The result: returning visitors load the site almost instantly from cache, with the service worker fetching updates in the background.

### 7. GitHub Actions Build Caching

Every CI build was starting fresh, taking 3-4 minutes. Adding proper caching cut this significantly:

```yaml
# .github/workflows/build-and-deploy.yml
- uses: actions/setup-node@v4
  with:
    node-version: '22'
    cache: 'npm'  # Cache node_modules

- name: Cache Next.js build
  uses: actions/cache@v4
  with:
    path: .next/cache
    key: nextjs-${{ hashFiles('**/package-lock.json') }}
```

First build populates the cache; subsequent builds reuse it. Build times dropped from ~4 minutes to under 1 minute.

## Bonus: Hydration Errors & Stale Cache

One unexpected performance killer: **hydration mismatches**.

After renaming a file from `.ts` to `.tsx`, I got cryptic errors like:

> "Cannot read properties of undefined (reading 'call')"

The culprit? **Stale Next.js cache**. The `.next` folder was referencing the old file path. The fix was simple but easy to miss:

```bash
rm -rf .next && npm run dev
```

Lesson: When things break mysteriously after file changes, clear the cache first.

## Lighthouse Best Practices: Beyond Performance

Lighthouse doesn't just measure speed - it audits **Performance**, **Accessibility**, **Best Practices**, **SEO**, and **PWA**. Here's what we implemented to score well across all categories:

### PWA: Offline-Ready

The service worker mentioned earlier does more than caching - it enables **offline functionality**. Lighthouse checks for:

- ✅ **Installable** - Has a web app manifest with icons
- ✅ **Offline fallback** - Returns a 200 when offline
- ✅ **HTTPS** - Required for service workers

```json
// public/manifest.json
{
  "name": "Sagar Sawuck - Developer Portfolio",
  "short_name": "SagarSys",
  "start_url": "/",
  "display": "standalone",
  "theme_color": "#0f172a",
  "background_color": "#0f172a",
  "icons": [
    { "src": "/icons/icon-192.png", "sizes": "192x192", "type": "image/png" },
    { "src": "/icons/icon-512.png", "sizes": "512x512", "type": "image/png" }
  ]
}
```

### Accessibility: Skip Links & Focus Management

Lighthouse penalizes missing accessibility features. Quick wins:

```tsx
// Skip to main content link (hidden until focused)
<a href="#main-content" className="sr-only focus:not-sr-only">
  Skip to main content
</a>

// Proper heading hierarchy (h1 → h2 → h3, never skip)
// Alt text on all images
// Sufficient color contrast (checked via Tailwind)
```

### SEO: Structured Data & Meta Tags

For the SEO audit, we added **JSON-LD structured data**:

```tsx
// Tells Google this is a professional service
<script type="application/ld+json">
{
  "@type": "ProfessionalService",
  "name": "Sagar Sawuck",
  "description": "Senior Fullstack Developer...",
  "address": { "@type": "PostalAddress", "addressCountry": "NL" }
}
</script>

// Article schema for blog posts
<script type="application/ld+json">
{
  "@type": "Article",
  "headline": "...",
  "datePublished": "...",
  "author": { "@type": "Person", "name": "Sagar Sawuck" }
}
</script>
```

This helps Google understand the content and can enable rich results in search.

### Best Practices: The Easy Wins

- ✅ **HTTPS everywhere** - S3 + CloudFront handles this
- ✅ **No console errors** - Clean up debugging logs
- ✅ **No deprecated APIs** - Keep dependencies updated
- ✅ **Proper image aspect ratios** - Prevents layout shift (CLS)

## The Results

After all optimizations:

- **LCP**: 9.4s → ~2s (production build)
- **TBT**: 1,060ms → ~300ms
- **Animations**: Still smooth ✨
- **Particles**: Still floating ✨

The key insight: **You don't have to choose between aesthetics and performance.** You just need to be strategic about *when* things load.

## What I Learned About AI-Assisted Debugging

This experience changed how I think about using AI for development:

### 1. It's a Hypothesis Generator

Instead of blindly trying things, the AI helped me form **structured hypotheses** about what could be wrong. "Is it animation delays? Is it forced reflows? Is it the dev server?" - having these questions made debugging systematic rather than random.

### 2. It Knows the Documentation

When I asked "how do I add cache headers in AWS?", I got a complete workflow configuration. When I needed to understand `scrollHeight` performance implications, it linked to the exact resources. It's like having a senior dev who actually reads documentation.

### 3. You Can Push Back

The AI suggested replacing Framer Motion with CSS animations. I said no. It adapted and found a compromise. This back-and-forth led to a better solution than either of us would have found alone.

### 4. Complex Debugging is Faster

What might have taken hours of trial and error took about 30 minutes. Not because the AI did the work for me, but because it helped me **ask better questions** and **validate hypotheses faster**.

## Key Takeaways

1. **Test in production mode** - Dev mode Lighthouse scores are misleading due to unminified code and hot reloading
2. **Animation delays affect LCP** - The element isn't "rendered" until it's visible to Lighthouse
3. **Forced reflows are expensive** - Cache DOM measurements like `scrollHeight`, don't read every frame
4. **Lazy-load non-critical content** - Particles, animations, and heavy components can wait
5. **Cache everything** - HTTP headers for CDN, service workers for browsers, build cache for CI
6. **Pre-generate images** - Build-time WebP conversion beats runtime processing
7. **Clear cache when debugging** - Stale `.next` folders cause mysterious errors

## Resources

- 📚 [Web Vitals - Google](https://web.dev/vitals/)
- 📚 [What forces layout/reflow](https://gist.github.com/paulirish/5d52fb081b3570c81e3a)
- 📚 [Next.js Dynamic Imports](https://nextjs.org/docs/pages/building-your-application/optimizing/lazy-loading)
- 📚 [Next.js Image Optimization](https://nextjs.org/docs/pages/building-your-application/optimizing/images)
- 📚 [Sharp - High performance image processing](https://sharp.pixelplumbing.com/)
- 📚 [Framer Motion Performance](https://www.framer.com/motion/guide-reduce-bundle-size/)
- 📚 [next-pwa - Service Workers for Next.js](https://github.com/shadowwalker/next-pwa)
- 🔗 [This portfolio's source code](https://github.com/sagarsys/sagarsys.net)

---

*Performance optimization doesn't have to mean sacrificing what makes your site special. Sometimes you just need to be smarter about when the cool stuff loads.* 🚀
