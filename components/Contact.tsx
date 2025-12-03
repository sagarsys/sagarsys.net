'use client'

import SocialLinks from './SocialLinks'
import useFetchData from '@/hooks/useFetchData'
import { ContactAnimation } from './ContactAnimation'

interface AboutData {
  social: {
    email: string
    github: string
    instagram: string
    youtube: string
    soundcloud: string
    twitter: string
    linkedIn: string
    stackblitz: string
    codeSandbox: string
  }
}

export default function Contact() {
  const apiUrl = `/data/about.json`
  const { data, isLoading } = useFetchData<AboutData>(
    apiUrl,
    'about section data'
  )

  if (isLoading || !data) return null

  const { social } = data
  const { email } = social
  return (
    <div className="max-w-7xl mx-auto px-4 flex justify-center">
      <section id="contact">
        <ContactAnimation email={email} />
        <SocialLinks data={social} />
      </section>
    </div>
  )
}


