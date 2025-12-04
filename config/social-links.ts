import {
    Github,
    Linkedin,
    Twitter,
    Instagram,
    Youtube,
    Music,
    Code,
    Mail,
} from 'lucide-react'
import type { ContactInfo } from '@/types'

export interface SocialLink {
    name: string
    url: string
    icon: React.FC<{ className?: string }>
    hoverColor: string
}

export function getSocialLinks(contactInfo: ContactInfo): SocialLink[] {
    return [
        {
            name: 'GitHub',
            url: contactInfo.github,
            icon: Github,
            hoverColor: 'hover:bg-white hover:text-gray-900',
        },
        {
            name: 'LinkedIn',
            url: contactInfo.linkedin,
            icon: Linkedin,
            hoverColor: 'hover:bg-[#0A66C2] hover:text-white',
        },
        {
            name: 'Twitter',
            url: contactInfo.twitter,
            icon: Twitter,
            hoverColor: 'hover:bg-[#1DA1F2] hover:text-white',
        },
        {
            name: 'Instagram',
            url: contactInfo.instagram,
            icon: Instagram,
            hoverColor: 'hover:bg-[#E4405F] hover:text-white',
        },
        {
            name: 'YouTube',
            url: contactInfo.youtube,
            icon: Youtube,
            hoverColor: 'hover:bg-[#FF0000] hover:text-white',
        },
        {
            name: 'SoundCloud',
            url: contactInfo.soundcloud,
            icon: Music,
            hoverColor: 'hover:bg-[#FF5500] hover:text-white',
        },
        {
            name: 'StackBlitz',
            url: contactInfo.stackblitz,
            icon: Code,
            hoverColor: 'hover:bg-[#1389FD] hover:text-white',
        },
        {
            name: 'CodeSandbox',
            url: contactInfo.codeSandbox,
            icon: Code,
            hoverColor: 'hover:bg-black hover:text-white',
        },
    ]
}

// Footer uses only essential links
export function getEssentialLinks(contactInfo: ContactInfo): SocialLink[] {
    return [
        {
            name: 'GitHub',
            url: contactInfo.github,
            icon: Github,
            hoverColor: 'hover:bg-white hover:text-gray-900',
        },
        {
            name: 'LinkedIn',
            url: contactInfo.linkedin,
            icon: Linkedin,
            hoverColor: 'hover:bg-[#0A66C2] hover:text-white',
        },
        {
            name: 'Email',
            url: `mailto:${contactInfo.email}`,
            icon: Mail,
            hoverColor: 'hover:bg-secondary hover:text-white',
        },
    ]
}
