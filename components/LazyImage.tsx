'use client'

import { useState, useRef, useEffect } from 'react'
import Image from 'next/image'

interface LazyImageProps {
    src: string
    alt: string
    width?: number
    height?: number
    fill?: boolean
    className?: string
    priority?: boolean
    placeholder?: 'blur' | 'empty'
    blurDataURL?: string
    sizes?: string
    onLoad?: () => void
    onError?: () => void
}

/**
 * LazyImage component with intersection observer
 *
 * Only loads images when they're about to enter the viewport,
 * reducing initial page load and improving performance.
 */
export default function LazyImage({
    src,
    alt,
    width,
    height,
    fill = false,
    className = '',
    priority = false,
    placeholder = 'empty',
    blurDataURL,
    sizes,
    onLoad,
    onError,
}: LazyImageProps) {
    const [isInView, setIsInView] = useState(priority)
    const [isLoaded, setIsLoaded] = useState(false)
    const imgRef = useRef<HTMLDivElement>(null)

    useEffect(() => {
        if (priority || isInView) return

        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        setIsInView(true)
                        observer.disconnect()
                    }
                })
            },
            {
                rootMargin: '50px', // Start loading 50px before entering viewport
                threshold: 0.01,
            }
        )

        if (imgRef.current) {
            observer.observe(imgRef.current)
        }

        return () => {
            observer.disconnect()
        }
    }, [priority, isInView])

    const handleLoad = () => {
        setIsLoaded(true)
        onLoad?.()
    }

    const handleError = () => {
        onError?.()
    }

    return (
        <div
            ref={imgRef}
            className={`relative ${className}`}
            style={{
                width: fill ? '100%' : width,
                height: fill ? '100%' : height,
            }}
        >
            {/* Blur placeholder */}
            {placeholder === 'blur' && blurDataURL && !isLoaded && (
                <div
                    className="absolute inset-0 bg-cover bg-center blur-sm scale-110"
                    style={{
                        backgroundImage: `url(${blurDataURL})`,
                    }}
                />
            )}

            {/* Loading skeleton */}
            {!isLoaded && !blurDataURL && (
                <div className="absolute inset-0 bg-slate-700 animate-pulse" />
            )}

            {/* Actual image */}
            {isInView && (
                <Image
                    src={src}
                    alt={alt}
                    width={fill ? undefined : width}
                    height={fill ? undefined : height}
                    fill={fill}
                    className={`transition-opacity duration-300 ${
                        isLoaded ? 'opacity-100' : 'opacity-0'
                    } ${className}`}
                    loading={priority ? 'eager' : 'lazy'}
                    sizes={sizes}
                    unoptimized
                    onLoad={handleLoad}
                    onError={handleError}
                />
            )}
        </div>
    )
}
