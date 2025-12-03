'use client'

import { useState } from 'react'
import Image from 'next/image'
import { ArrowRight } from 'lucide-react'
import { truncateMultiLineString } from '@/lib/utils'
import PortfolioItemDetailsDialog from './PortfolioItemDetailsDialog'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardFooter } from '@/components/ui/card'

interface PortfolioItemData {
    id: string
    title: string
    description: string
    images: {
        thumb: string
    }
    [key: string]: any
}

interface PortfolioItemProps {
    item: PortfolioItemData
}

export default function PortfolioItem({ item }: PortfolioItemProps) {
    const [open, setOpen] = useState(false)

    const handleClickOpen = () => {
        setOpen(true)
    }
    const handleClose = () => {
        setOpen(false)
    }
    const thumb = (item.images && item.images.thumb) || null

    return (
        <div className="mt-6 mb-8">
            <Card
                className="mx-auto min-w-[240px] max-w-[400px] cursor-pointer hover:shadow-xl transition-shadow"
                onClick={handleClickOpen}
                title="Click to learn more"
            >
                <div className="relative w-full h-[240px]">
                    {thumb && (
                        <Image
                            src={`/${thumb}`}
                            alt={item.title}
                            fill
                            className="object-cover"
                        />
                    )}
                </div>
                <CardContent className="min-h-[150px] pt-6">
                    <h5 className="text-secondary text-2xl mb-4">
                        {item.title}
                    </h5>
                    <p className="text-gray-400 text-sm">
                        {truncateMultiLineString(item.description, 5, 64)}
                    </p>
                </CardContent>
                <CardFooter className="p-4 pt-0">
                    <Button
                        className="w-full bg-secondary hover:bg-[#e64a19] text-white"
                        size="sm"
                        variant="secondary"
                        onClick={(e) => {
                            e.stopPropagation()
                            handleClickOpen()
                        }}
                    >
                        <ArrowRight className="mr-2 h-4 w-4" />
                        Learn more
                    </Button>
                </CardFooter>
            </Card>
            <PortfolioItemDetailsDialog
                open={open}
                handleClose={handleClose}
                item={item}
            />
        </div>
    )
}
