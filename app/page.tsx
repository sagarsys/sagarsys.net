'use client'

import AppBar from '@/components/AppBar'
import HeroBanner from '@/components/HeroBanner'
import About from '@/components/About'
import Portfolio from '@/components/Portfolio'
import Career from '@/components/Career'
import Contact from '@/components/Contact'
import Footer from '@/components/Footer'
import ScrollTop from '@/components/ScrollTop'

export default function Home() {
  return (
    <div className="min-h-screen">
      <div id="back-to-top-anchor" className="h-0 min-h-0" />
      <AppBar />
      <HeroBanner />
      <About />
      <Portfolio />
      <Career />
      <Contact />
      <Footer />
      <ScrollTop />
    </div>
  )
}


