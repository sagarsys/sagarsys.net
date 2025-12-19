'use client'

import { useEffect, useRef } from 'react'
import {
    Dialog,
    DialogContent,
    DialogHeader,
    DialogTitle,
} from '@/components/ui/dialog'
import PortfolioItemDetailsDialogContent from './PortfolioItemDetailsDialogContent'

interface PortfolioItemData {
    id: string
    title: string
    titleLink?: string
    images: {
        thumb: string
        mobile?: string
        tablet?: string
        desktop?: string
    }
    description: string
    tech?: string[]
    client?: string
    clientLink?: string
    role?: string
    roleDescription?: string
    challenges?: string[]
    live?: Array<{
        title: string
        link: string
        thumb: string
    }>
    [key: string]: any
}

interface PortfolioItemDetailsDialogProps {
    open: boolean
    handleClose: () => void
    item: PortfolioItemData
}

export default function PortfolioItemDetailsDialog({
    open,
    handleClose,
    item,
}: PortfolioItemDetailsDialogProps) {
    const { title, titleLink } = item
    const contentRef = useRef<HTMLDivElement>(null)
    const dialogContentRef = useRef<HTMLDivElement>(null)

    // Reset scroll position when modal opens
    useEffect(() => {
        if (open) {
            // Use requestAnimationFrame to ensure DOM is ready
            requestAnimationFrame(() => {
                // Reset scroll on both containers (mobile and desktop)
                if (contentRef.current) {
                    contentRef.current.scrollTop = 0
                }
                if (dialogContentRef.current) {
                    dialogContentRef.current.scrollTop = 0
                }
            })
            // Also handle async content loading with a small delay
            const timeoutId = setTimeout(() => {
                if (contentRef.current) {
                    contentRef.current.scrollTop = 0
                }
                if (dialogContentRef.current) {
                    dialogContentRef.current.scrollTop = 0
                }
            }, 100)

            return () => clearTimeout(timeoutId)
        }
    }, [open, item.id])

    return (
        <Dialog open={open} onOpenChange={handleClose}>
            <DialogContent
                ref={dialogContentRef}
                aria-describedby={undefined}
                className="md:max-w-full md:max-h-screen md:h-screen md:w-screen md:rounded-none md:translate-x-0 md:translate-y-0 md:left-0 md:top-0 md:data-[state=open]:slide-in-from-left-0 md:data-[state=open]:slide-in-from-top-0 md:data-[state=closed]:slide-out-to-left-0 md:data-[state=closed]:slide-out-to-top-0 max-w-6xl max-h-[90vh] flex flex-col overflow-hidden"
            >
                <DialogHeader className="md:px-8 md:pt-6 flex-shrink-0">
                    <DialogTitle className="text-2xl">
                        {titleLink ? (
                            <a
                                href={titleLink}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-foreground hover:text-secondary hover:underline"
                            >
                                {title}
                            </a>
                        ) : (
                            <span>{title}</span>
                        )}
                    </DialogTitle>
                </DialogHeader>
                <div className="border-t border-border my-4 md:mx-8 flex-shrink-0" />
                <div
                    ref={contentRef}
                    className="overflow-y-auto flex-1 md:px-8 md:pb-8"
                >
                    <PortfolioItemDetailsDialogContent item={item} />
                </div>
            </DialogContent>
        </Dialog>
    )
}
