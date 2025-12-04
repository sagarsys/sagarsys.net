'use client'

import { useEffect, useRef } from 'react'
import { useTheme } from 'next-themes'

interface Particle {
    x: number
    y: number
    vx: number
    vy: number
    hue: number
}

export default function ParticleBackground() {
    const canvasRef = useRef<HTMLCanvasElement>(null)
    const { theme } = useTheme()
    const particlesRef = useRef<Particle[]>([])
    const mouseRef = useRef({ x: 0, y: 0 })
    const scrollRef = useRef(0)
    const hueRef = useRef(0)

    useEffect(() => {
        const canvas = canvasRef.current
        if (!canvas) return

        const ctx = canvas.getContext('2d')
        if (!ctx) return

        // Set canvas size
        const resizeCanvas = () => {
            canvas.width = window.innerWidth
            canvas.height = window.innerHeight
        }
        resizeCanvas()

        // Responsive particle count
        const isMobile = window.innerWidth < 768
        const particleCount = isMobile ? 30 : 60

        // Initialize particles
        if (particlesRef.current.length === 0) {
            for (let i = 0; i < particleCount; i++) {
                particlesRef.current.push({
                    x: Math.random() * canvas.width,
                    y: Math.random() * canvas.height,
                    vx: (Math.random() - 0.5) * 0.3,
                    vy: (Math.random() - 0.5) * 0.3,
                    hue: Math.random() * 60 + 240, // Start in blue-purple range
                })
            }
        }

        let animationFrameId: number

        function animate() {
            if (!ctx || !canvas) return

            // Subtle scroll-based opacity
            const scrollPercent =
                scrollRef.current /
                (document.documentElement.scrollHeight - window.innerHeight)
            const baseOpacity = 0.7 - scrollPercent * 0.3 // More visible particles

            ctx.clearRect(0, 0, canvas.width, canvas.height)

            // Slowly cycle through colors (blue → purple → pink → blue)
            hueRef.current = (hueRef.current + 0.1) % 360

            particlesRef.current.forEach((p, i) => {
                // Update position
                p.x += p.vx
                p.y += p.vy

                // Bounce off edges
                if (p.x < 0 || p.x > canvas.width) p.vx *= -1
                if (p.y < 0 || p.y > canvas.height) p.vy *= -1

                // Keep within bounds
                p.x = Math.max(0, Math.min(canvas.width, p.x))
                p.y = Math.max(0, Math.min(canvas.height, p.y))

                // Update particle hue (shifts through gradient colors)
                p.hue = (hueRef.current + i * 6) % 360

                // Draw particle
                const particleColor = `hsla(${
                    260 + Math.sin((p.hue * Math.PI) / 180) * 40
                }, 70%, 65%, ${baseOpacity})`

                ctx.beginPath()
                ctx.arc(p.x, p.y, 2, 0, Math.PI * 2)
                ctx.fillStyle = particleColor
                ctx.fill()

                // Draw connections
                particlesRef.current.forEach((p2, j) => {
                    if (i === j) return
                    const dx = p.x - p2.x
                    const dy = p.y - p2.y
                    const distance = Math.sqrt(dx * dx + dy * dy)

                    if (distance < 120) {
                        const connectionOpacity =
                            (1 - distance / 120) * baseOpacity * 0.5
                        const lineColor = `hsla(${
                            260 + Math.sin((p.hue * Math.PI) / 180) * 40
                        }, 70%, 65%, ${connectionOpacity})`

                        ctx.beginPath()
                        ctx.moveTo(p.x, p.y)
                        ctx.lineTo(p2.x, p2.y)
                        ctx.strokeStyle = lineColor
                        ctx.lineWidth = 0.5
                        ctx.stroke()
                    }
                })
            })

            animationFrameId = requestAnimationFrame(animate)
        }

        animate()

        // Event listeners
        const handleResize = () => {
            resizeCanvas()
        }

        const handleScroll = () => {
            scrollRef.current = window.scrollY
        }

        const handleMouseMove = (e: MouseEvent) => {
            mouseRef.current = { x: e.clientX, y: e.clientY }
        }

        window.addEventListener('resize', handleResize, { passive: true })
        window.addEventListener('scroll', handleScroll, { passive: true })
        window.addEventListener('mousemove', handleMouseMove, { passive: true })

        return () => {
            cancelAnimationFrame(animationFrameId)
            window.removeEventListener('resize', handleResize)
            window.removeEventListener('scroll', handleScroll)
            window.removeEventListener('mousemove', handleMouseMove)
        }
    }, [theme])

    return (
        <canvas
            ref={canvasRef}
            className="fixed inset-0 pointer-events-none z-0"
            style={{ mixBlendMode: 'screen' }}
        />
    )
}
