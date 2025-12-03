'use client'

import {
  Twitter,
  Github,
  Linkedin,
  Instagram,
  Code,
  Youtube,
  Music,
} from 'lucide-react'
import { Button } from '@/components/ui/button'
import useResizer from '@/hooks/useResizer'
import { cn } from '@/lib/utils'

interface SocialData {
  github: string
  instagram: string
  linkedIn: string
  twitter: string
  stackblitz: string
  codeSandbox: string
  youtube: string
  soundcloud: string
}

interface SocialLinksProps {
  data: SocialData
}

export default function SocialLinks({ data }: SocialLinksProps) {
  const isMobile = useResizer()
  const {
    github,
    instagram,
    linkedIn,
    twitter,
    stackblitz,
    codeSandbox,
    youtube,
    soundcloud,
  } = data

  return (
    <div
      className={cn(
        isMobile ? 'text-center pt-8 mb-4' : 'text-right'
      )}
    >
      <Button
        variant="ghost"
        size="icon"
        className="text-secondary hover:text-secondary hover:bg-transparent"
        aria-label="Link to Github"
        title="Link to Github"
        asChild
      >
        <a href={github} target="_blank" rel="noreferrer">
          <Github size={32} />
        </a>
      </Button>
      <Button
        variant="ghost"
        size="icon"
        className="text-secondary hover:text-secondary hover:bg-transparent"
        aria-label="Link to Twitter"
        title="Link to Twitter"
        asChild
      >
        <a href={twitter} target="_blank" rel="noreferrer">
          <Twitter size={32} />
        </a>
      </Button>
      <Button
        variant="ghost"
        size="icon"
        className="text-secondary hover:text-secondary hover:bg-transparent"
        aria-label="Link to LinkedIn"
        title="Link to LinkedIn"
        asChild
      >
        <a href={linkedIn} target="_blank" rel="noreferrer">
          <Linkedin size={32} />
        </a>
      </Button>
      <Button
        variant="ghost"
        size="icon"
        className="text-secondary hover:text-secondary hover:bg-transparent"
        aria-label="Link to Stackblitz"
        title="Link to Stackblitz"
        asChild
      >
        <a href={stackblitz} target="_blank" rel="noreferrer">
          <Code size={32} />
        </a>
      </Button>
      <Button
        variant="ghost"
        size="icon"
        className="text-secondary hover:text-secondary hover:bg-transparent"
        aria-label="Link to CodeSandbox"
        title="Link to CodeSandbox"
        asChild
      >
        <a href={codeSandbox} target="_blank" rel="noreferrer">
          <svg width="23" height="23" fill="none" viewBox="0 0 23 23">
            <path
              fill="currentColor"
              fillRule="evenodd"
              d="M11.5 11.617v11.17a.897.897 0 00.497-.142l8.944-5.111c.354-.202.498-.516.498-.923V6.247a.87.87 0 00-.143-.497l-9.51 5.373a.568.568 0 00-.286.494zm4.97 6.414c0 .284-.107.426-.356.568l-2.981 1.703c-.213.142-.497.072-.497-.212v-7.596c0-.203.179-.467.355-.568l6.815-3.904c.189-.11.354.065.354.284v4.046c0 .21-.098.398-.284.497l-3.052 1.633c-.185.098-.355.287-.355.496v3.053z"
              clipRule="evenodd"
            />
            <path
              fill="currentColor"
              fillRule="evenodd"
              d="M1.562 16.611V6.247c0-.408.214-.792.568-.994L10.79.355c.187-.099.497-.142.71-.142.213 0 .541.053.71.142l8.59 4.898c.17.1.4.332.496.497l-9.512 5.395a.572.572 0 00-.284.497v11.145c-.194 0-.393-.042-.568-.142l-8.731-5.04c-.354-.202-.64-.586-.64-.994zM2.84 8.305v4.047c0 .284.07.426.354.568l2.982 1.703a.585.585 0 01.355.568v2.84c0 .284.07.426.355.568l2.981 1.703c.284.142.497.071.497-.213v-7.595a.585.585 0 00-.355-.568L3.336 8.092c-.212-.141-.496-.07-.496.213zm11.642-4.827L11.855 4.97a.645.645 0 01-.71 0L8.52 3.479a.588.588 0 00-.568 0L4.685 5.323c-.284.142-.284.426 0 .568l6.531 3.762c.175.1.393.1.568 0l6.53-3.762c.214-.142.285-.426 0-.568L15.05 3.478a.588.588 0 00-.567 0z"
              clipRule="evenodd"
            />
          </svg>
        </a>
      </Button>
      <Button
        variant="ghost"
        size="icon"
        className="text-secondary hover:text-secondary hover:bg-transparent"
        aria-label="Link to Instagram"
        title="Link to Instagram"
        asChild
      >
        <a href={instagram} target="_blank" rel="noreferrer">
          <Instagram size={32} />
        </a>
      </Button>
      <Button
        variant="ghost"
        size="icon"
        className="text-secondary hover:text-secondary hover:bg-transparent"
        aria-label="Link to YouTube"
        title="Link to YouTube"
        asChild
      >
        <a href={youtube} target="_blank" rel="noreferrer">
          <Youtube size={32} />
        </a>
      </Button>
      <Button
        variant="ghost"
        size="icon"
        className="text-secondary hover:text-secondary hover:bg-transparent"
        aria-label="Link to Soundcloud"
        title="Link to Soundcloud"
        asChild
      >
        <a href={soundcloud} target="_blank" rel="noreferrer">
          <Music size={32} />
        </a>
      </Button>
    </div>
  )
}


