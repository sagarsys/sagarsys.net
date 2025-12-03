'use client'

import { useEffect } from 'react'
import FullHeightSection from './FullHeightSection'
import useResizer from '@/hooks/useResizer'
import { cn } from '@/lib/utils'

export default function HeroBanner() {
  const listItems = ['Passionate', 'Creative', 'Innovative', 'Dedicated']
  const isMobile = useResizer()
  const taglineFontSize = 24

  useEffect(() => {
    // Generate fly animations for banner text
    if (typeof window === 'undefined') return
    
    const style = document.createElement('style')
    style.id = 'hero-banner-animations'
    
    // Remove existing style if present
    const existing = document.getElementById('hero-banner-animations')
    if (existing) existing.remove()
    
    for (let i = 0; i < 40; i++) {
      const key = i + 1
      const row = Math.floor(i / 20)
      const col = i % 20
      
      // Generate random transforms for each character (consistent per render)
      const seed = i * 123.456
      const initX = (Math.sin(seed) * 500) % 500
      const initY = (Math.cos(seed * 2) * 500) % 500
      const initZ = (Math.sin(seed * 3) * 500) % 500
      const initDepth = (Math.cos(seed * 4) * 1500) - 2000

      style.textContent += `
        #banner .sagarsys:nth-child(${key}) {
          clip-path: polygon(
            ${col * 5}% ${row * 50}%,
            ${(col + 1) * 5}% ${row * 50 + (key % 2) * 50}%,
            ${(col + 0.5) * 5}% ${(row + 1) * 50}%
          );
          transform-origin: ${50 + col * 5}% ${50 + row * 50}%;
          animation: fly${key} 5000ms ${i * 40}ms cubic-bezier(0.36, 0.1, 0.16, 1) infinite alternate;
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
    document.head.appendChild(style)
    return () => {
      const toRemove = document.getElementById('hero-banner-animations')
      if (toRemove) document.head.removeChild(toRemove)
    }
  }, [])

  return (
    <FullHeightSection id="home" height="60vh">
      <div className="flex flex-col h-full justify-center items-center px-6 text-center mt-[60px]">
        <div id="banner" className="relative w-full h-full">
          {Array(40)
            .fill(0)
            .map((v, i) => (
              <h1
                key={i}
                className="sagarsys font-neuropol text-[8rem] md:text-[8rem] sm:text-[4rem] leading-[8rem] sm:leading-[4rem] text-secondary opacity-0 absolute top-1/2 left-1/2 mix-blend-screen"
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
            className={cn(
              'text-white flex items-start overflow-hidden',
              isMobile ? 'h-auto' : `h-[${taglineFontSize}px]`
            )}
            style={{
              lineHeight: `${taglineFontSize}px`,
            }}
          >
            <div
              className={cn(
                'h-[24px]',
                isMobile ? 'overflow-y-hidden w-[150px]' : 'overflow-y-visible w-auto'
              )}
            >
              <ul
                className="m-0 translate-y-[1px] pl-8 pr-4 list-none text-[#ff6b47] font-bold animate-[change-text_10s_infinite]"
                style={{
                  height: `${taglineFontSize}px`,
                }}
              >
                {listItems.map((item, i) => (
                  <li key={i} style={{ height: `${taglineFontSize}px` }}>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <span className="pr-8">
              {' '}
              web developer striving to make the web a better place
            </span>
            <span className="relative text-[22px] sm:text-[44px] top-[-2px] sm:top-[10px] animate-[opacity_2s_infinite]">
              [
            </span>
            <span className="relative text-[22px] sm:text-[44px] top-[-2px] sm:top-[10px] animate-[opacity_2s_infinite]">
              ]
            </span>
          </h6>
        </div>
      </div>
    </FullHeightSection>
  )
}

