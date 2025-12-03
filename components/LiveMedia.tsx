'use client'

import MediaThumbCard from './MediaThumbCard'

interface LiveMediaItem {
  title: string
  link: string
  thumb: string
}

interface LiveMediaProps {
  live?: LiveMediaItem[]
}

export function LiveMedia({ live }: LiveMediaProps) {
  if (!live || live.length === 0) return null

  return (
    <div className="space-y-4">
      <p className="text-secondary text-lg">Live:</p>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {live.map((media, i) => (
          <MediaThumbCard
            key={i}
            title={media.title}
            link={media.link}
            thumb={media.thumb}
          />
        ))}
      </div>
    </div>
  )
}


