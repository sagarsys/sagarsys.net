/** @type {import('next').NextConfig} */
const nextConfig = {
    output: 'export',
    distDir: 'build',
    images: {
        unoptimized: true,
    },
    trailingSlash: true,
}

module.exports = nextConfig
