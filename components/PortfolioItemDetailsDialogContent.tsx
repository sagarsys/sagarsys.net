'use client'

import Image from 'next/image'
import { arrayToString } from '@/helpers/string'
import { LinkOrText } from './LinkOrText'
import { LiveMedia } from './LiveMedia'
import DevicesPreview from './DevicesPreview'

interface PortfolioItemData {
  images: {
    thumb: string
    mobile?: string
    tablet?: string
    desktop?: string
  }
  title: string
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

interface PortfolioItemDetailsDialogContentProps {
  item: PortfolioItemData
}

export default function PortfolioItemDetailsDialogContent({
  item,
}: PortfolioItemDetailsDialogContentProps) {
  const {
    images,
    title,
    description,
    tech,
    client,
    clientLink,
    role,
    roleDescription,
    challenges,
    live,
  } = item

  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="flex justify-center">
          <div className="relative w-full max-w-full max-h-[70vh]">
            <Image
              src={`/${images.thumb}`}
              alt={title}
              width={800}
              height={600}
              className="object-contain w-auto max-w-full max-h-[70vh]"
            />
          </div>
        </div>

        <div className="space-y-4">
          <p className="text-foreground">{description}</p>

          {tech && (
            <p className="text-secondary">
              Technologies:{' '}
              <span className="text-foreground">{arrayToString(tech).join('')}</span>
            </p>
          )}

          {client && (
            <p className="text-secondary">
              Client:{' '}
              <span className="text-foreground">
                <LinkOrText link={clientLink} title={client} color="textPrimary" />
              </span>
            </p>
          )}

          {role && (
            <p className="text-secondary">
              Role:{' '}
              <span className="text-foreground">{role}</span>
            </p>
          )}

          {roleDescription && (
            <p className="text-secondary">
              Role description:{' '}
              <span className="text-foreground">{roleDescription}</span>
            </p>
          )}

          {challenges && (
            <div className="text-secondary">
              Challenges:{' '}
              <ul className="text-foreground list-disc list-inside mt-2 space-y-1">
                {challenges.map((item, i) => (
                  <li key={i}>{item}</li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </div>
      <LiveMedia live={live} />
      <DevicesPreview images={images} />
    </div>
  )
}


