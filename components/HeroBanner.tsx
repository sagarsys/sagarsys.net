'use client'

import { useEffect } from 'react'
import FullHeightSection from './FullHeightSection'

export default function HeroBanner() {
    const listItems = ['Passionate', 'Creative', 'Innovative', 'Dedicated']
    const taglineFontSize = 24

    useEffect(() => {
        // Generate fly animations for banner text
        // Simplified to avoid blocking - using static CSS with dynamic values
        if (typeof window === 'undefined') return

        let cancelled = false

        const generateAnimations = () => {
            if (cancelled) return

            const style = document.createElement('style')
            style.id = 'hero-banner-animations'
            style.type = 'text/css'

            // Remove existing style if present
            const existing = document.getElementById('hero-banner-animations')
            if (existing && existing.parentNode) {
                existing.parentNode.removeChild(existing)
            }

            let styleContent = ''

            // Simplified: Generate animations for 20 elements instead of 40 for better performance
            for (let i = 0; i < 20; i++) {
                const key = i + 1
                const row = Math.floor(i / 10)
                const colFloor = Math.floor(i / 2)
                const colCeil = Math.ceil(key / 2)

                // Generate pseudo-random but consistent values
                const seed = i * 123.456
                const random1 = ((Math.sin(seed) + 1) * 500) % 100
                const random2 = ((Math.cos(seed * 2) + 1) * 500) % 100
                const random3 = ((Math.sin(seed * 3) + 1) * 500) % 100
                const random4 = ((Math.cos(seed * 4) + 1) * 1500) % 3000

                const initX = random1 - 500
                const initY = random2 - 500
                const initZ = random3 - 500
                const initDepth = random4 - 2500

                const transformOriginX =
                    random1 - 50 + colFloor * 10 - row * 100
                const transformOriginY = random2 - 50 + row * 50

                const x1 = colFloor * 10 - row * 100
                const y1 = row * 50
                const x2 = colCeil * 10 - row * 100
                const y2 = row * 50 + (key % 2) * 50
                const x3 = colCeil * 10 - row * 100
                const y3 = (row + 1) * 50

                styleContent += `#banner .sagarsys:nth-child(${key}) {
  clip-path: polygon(${x1}% ${y1}%, ${x2}% ${y2}%, ${x3}% ${y3}%);
  transform-origin: ${transformOriginX}% ${transformOriginY}%;
  animation: fly${key} 5000ms ${
                    i * 80
                }ms cubic-bezier(0.36, 0.1, 0.16, 1) infinite alternate;
}
@keyframes fly${key} {
  0% {
    opacity: 0;
    transform: translate(-50%, -50%) rotateX(${initX}deg) rotateY(${initY}deg) rotateZ(${initZ}deg) translateZ(${initDepth}px);
  }
  10% {
    opacity: 0;
    transform: translate(-50%, -50%) rotateX(${initX}deg) rotateY(${initY}deg) rotateZ(${initZ}deg) translateZ(${initDepth}px);
  }
  90% {
    opacity: 1;
    transform: translate(-50%, -50%) rotate(0deg) rotateY(0deg) rotateZ(0deg) translateZ(0px);
  }
  100% {
    opacity: 1;
    transform: translate(-50%, -50%) rotate(0deg) rotateY(0deg) rotateZ(0deg) translateZ(0px);
  }
}
`
            }

            if (!cancelled) {
                style.textContent = styleContent
                document.head.appendChild(style)
            }
        }

        // Defer animation generation to next frame to avoid blocking initial render
        const timeoutId = setTimeout(() => {
            requestAnimationFrame(generateAnimations)
        }, 100)

        return () => {
            cancelled = true
            clearTimeout(timeoutId)
            const toRemove = document.getElementById('hero-banner-animations')
            if (toRemove && toRemove.parentNode) {
                toRemove.parentNode.removeChild(toRemove)
            }
        }
    }, [])

    return (
        <FullHeightSection id="home" height="60vh">
            <div className="flex flex-col h-full justify-center items-center px-6 text-center mt-[60px]">
                <div id="banner" className="relative w-full h-full">
                    {Array(20)
                        .fill(0)
                        .map((v, i) => (
                            <h1
                                key={i}
                                className="sagarsys font-neuropol text-[4rem] md:text-[8rem] leading-[4rem] md:leading-[8rem] text-secondary opacity-0 absolute top-1/2 left-1/2 mix-blend-screen"
                            >
                                SAGARSYS
                            </h1>
                        ))}
                </div>
                <div
                    className="relative mt-16"
                    style={{ height: `${taglineFontSize * 2}px` }}
                >
                    <h6
                        className="text-white flex items-start overflow-hidden relative tagline-hero h-auto md:h-[24px]"
                        style={{
                            lineHeight: `${taglineFontSize}px`,
                        }}
                    >
                        <div
                            className="inline-block overflow-y-hidden w-[150px] md:w-auto"
                            style={{
                                height: `${taglineFontSize}px`,
                            }}
                        >
                            <ul
                                className="m-0 translate-y-[1px] pl-8 pr-4 list-none text-[#ff6b47] font-bold animate-[change-text_10s_infinite] inline-block"
                                style={{
                                    height: `${taglineFontSize}px`,
                                }}
                            >
                                {listItems.map((item, i) => (
                                    <li
                                        key={i}
                                        style={{
                                            height: `${taglineFontSize}px`,
                                        }}
                                    >
                                        {item}
                                    </li>
                                ))}
                            </ul>
                        </div>
                        <span className="pr-8">
                            {' '}
                            web developer striving to make the web a better
                            place
                        </span>
                    </h6>
                </div>
            </div>
        </FullHeightSection>
    )
}
