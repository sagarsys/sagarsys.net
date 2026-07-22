#!/usr/bin/env node

/**
 * Capture real screenshots of live project demos for the projects showcase.
 *
 * Usage:
 *   node scripts/capture-project-screenshots.js
 *
 * - Screenshots each live demo below at desktop (and mobile where noted)
 * - Saves PNGs into public/images/... using the exact filenames the
 *   projects config / markdown expect
 * - After running, `npm run optimize:images` (or `npm run build`) will
 *   generate the optimized .webp variants automatically
 *
 * Requires a runnable Chromium. If Puppeteer reports it can't find Chrome,
 * run:  npx puppeteer browsers install chrome
 */

const path = require('path')
const fs = require('fs')
const puppeteer = require('puppeteer')

const PUBLIC_IMAGES = path.join(process.cwd(), 'public', 'images')

// Each target: url + output file (relative to public/images) + optional mobile
const TARGETS = [
    {
        url: 'https://vercel-ai-deep-research-chatbot.vercel.app',
        out: 'github/vercel-ai-deep-research-chatbot.png',
    },
    {
        url: 'https://photography-booking-app-nine.vercel.app/',
        out: 'github/photography-booking-app.png',
    },
    { url: 'https://vue3-tvmaze.vercel.app', out: 'github/vue3-tvmaze.png' },
    {
        url: 'https://sagar-music-player.vercel.app',
        out: 'github/react-music-player.png',
    },
    { url: 'https://zod-returns.vercel.app', out: 'github/zod-returns.png' },
    {
        url: 'https://soulblueprint.earth/',
        out: 'soul-blueprint/soul-blueprint.png',
        mobile: 'soul-blueprint/soul-blueprint-mobile.png',
    },
]

const DESKTOP = { width: 1440, height: 900, deviceScaleFactor: 2 }
const MOBILE = { width: 390, height: 844, deviceScaleFactor: 2, isMobile: true }

async function shoot(page, url, viewport, outAbs) {
    await page.setViewport(viewport)
    await page.goto(url, { waitUntil: 'networkidle2', timeout: 60000 })
    // give animations / lazy content a moment to settle
    await new Promise((r) => setTimeout(r, 3000))
    fs.mkdirSync(path.dirname(outAbs), { recursive: true })
    // above-the-fold card shot (not fullPage) for a clean thumbnail
    await page.screenshot({ path: outAbs })
    console.log('  ✔ saved', path.relative(process.cwd(), outAbs))
}

;(async () => {
    const browser = await puppeteer.launch({
        headless: 'new',
        args: ['--no-sandbox', '--disable-setuid-sandbox'],
    })
    try {
        for (const t of TARGETS) {
            console.log('▶', t.url)
            const page = await browser.newPage()
            try {
                await shoot(
                    page,
                    t.url,
                    DESKTOP,
                    path.join(PUBLIC_IMAGES, t.out)
                )
                if (t.mobile) {
                    await shoot(
                        page,
                        t.url,
                        MOBILE,
                        path.join(PUBLIC_IMAGES, t.mobile)
                    )
                }
            } catch (e) {
                console.warn('  - skipped (', e.message, ')')
            } finally {
                await page.close()
            }
        }
    } finally {
        await browser.close()
    }
    console.log(
        '\nDone. Next: run `npm run optimize:images` to generate .webp variants.'
    )
})().catch((e) => {
    console.error('Failed:', e.message)
    console.error(
        'If Chrome is missing, run: npx puppeteer browsers install chrome'
    )
    process.exit(1)
})
