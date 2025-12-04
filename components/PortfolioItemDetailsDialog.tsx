'use client'

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

    return (
        <Dialog open={open} onOpenChange={handleClose}>
            <DialogContent className="max-w-6xl max-h-[90vh] overflow-y-auto">
                <DialogHeader>
                    <DialogTitle className="text-2xl">
                        {titleLink ? (
                            <a
                                href={titleLink}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-secondary hover:underline"
                            >
                                {title}
                            </a>
                        ) : (
                            <span>{title}</span>
                        )}
                    </DialogTitle>
                </DialogHeader>
                <div className="border-t border-border my-4" />
                <PortfolioItemDetailsDialogContent item={item} />
            </DialogContent>
        </Dialog>
    )
}
