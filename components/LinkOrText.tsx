import { Link as LinkIcon } from 'lucide-react'
import { cn } from '@/lib/utils'

interface LinkOrTextProps {
  link?: string
  title: string
  color?: 'primary' | 'secondary' | 'textPrimary'
}

export function LinkOrText({ link, title, color = 'primary' }: LinkOrTextProps) {
  const colorClasses = {
    primary: 'text-primary',
    secondary: 'text-secondary',
    textPrimary: 'text-foreground',
  }

  if (link) {
    return (
      <a
        href={link}
        target="_blank"
        rel="noopener noreferrer"
        className={cn(
          'inline-flex items-center hover:underline',
          colorClasses[color]
        )}
        title="Open website link in a new tab"
      >
        {title}
        <LinkIcon className="ml-1 h-4 w-4 translate-y-[2px]" />
      </a>
    )
  }

  return <span className={colorClasses[color]}>{title}</span>
}


