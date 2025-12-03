'use client'

import Image from 'next/image'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardFooter } from '@/components/ui/card'

interface MediaThumbCardProps {
  title: string
  link: string
  thumb: string
}

export default function MediaThumbCard({
  title,
  link,
  thumb,
}: MediaThumbCardProps) {
  const handleClick = () => {
    window.open(link, '_blank', 'noopener,noreferrer')
  }

  return (
    <Card
      className="max-w-[350px] mb-10 cursor-pointer hover:shadow-xl transition-shadow"
      title="Click to open link"
      onClick={handleClick}
    >
      <div className="relative w-full h-[200px]">
        <Image
          src={`/${thumb}`}
          alt={title}
          fill
          className="object-cover rounded-t-lg"
        />
      </div>
      <CardContent className="pt-6">
        <h5 className="text-xl">{title}</h5>
      </CardContent>
      <CardFooter className="p-4 pt-0">
        <Button
          className="w-full"
          size="sm"
          variant="secondary"
          onClick={(e) => {
            e.stopPropagation()
            handleClick()
          }}
        >
          Open link
        </Button>
      </CardFooter>
    </Card>
  )
}


