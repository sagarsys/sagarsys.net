'use client'

import Image from 'next/image'
import useResizer from '@/hooks/useResizer'
import { cn } from '@/lib/utils'

interface AboutData {
  name: string
  title: string
  description: string
}

interface AboutContentProps {
  data: AboutData | null
}

export default function AboutContent({ data }: AboutContentProps) {
  const isMobile = useResizer()

  if (!data) return null
  const { name, title, description } = data
  const descriptions = description.split('|')

  return (
    <>
      <h6 className="text-secondary text-xl mb-4">
        {name}: {title}
      </h6>

      <div
        className={cn(
          'flex items-center',
          isMobile ? 'flex-col mt-8' : 'flex-row'
        )}
      >
        <div
          className={cn(
            'relative rounded-full overflow-hidden flex-shrink-0',
            isMobile ? 'mb-8' : 'mr-8'
          )}
          style={{ width: '100px', height: '100px' }}
        >
          <Image
            src="/images/img/sagar.jpeg"
            alt="Sagar Sawuck"
            fill
            className="object-cover"
          />
        </div>
        <div>
          {descriptions.map((item, index) => (
            <p key={`${item}-${index}`} className="mb-2">
              - {item}
            </p>
          ))}
        </div>
      </div>
    </>
  )
}


