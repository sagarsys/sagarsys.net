'use client'

import { useState } from 'react'
import Image from 'next/image'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { Monitor, Tablet, Smartphone } from 'lucide-react'

interface DevicesPreviewProps {
  images: {
    mobile?: string
    tablet?: string
    desktop?: string
  }
}

export default function DevicesPreview({ images }: DevicesPreviewProps) {
  const { mobile, tablet, desktop } = images
  const startIndex = desktop ? 'desktop' : tablet ? 'tablet' : 'mobile'
  const [value, setValue] = useState(startIndex)

  if (!desktop && !tablet && !mobile) return null

  return (
    <div className="space-y-4">
      <p className="text-secondary text-lg">Preview:</p>
      <Tabs value={value} onValueChange={setValue} className="w-full">
        <TabsList className="grid w-full grid-cols-3">
          {desktop && (
            <TabsTrigger value="desktop" className="flex items-center gap-2">
              <Monitor className="h-4 w-4" />
              Desktop
            </TabsTrigger>
          )}
          {tablet && (
            <TabsTrigger value="tablet" className="flex items-center gap-2">
              <Tablet className="h-4 w-4" />
              Tablet
            </TabsTrigger>
          )}
          {mobile && (
            <TabsTrigger value="mobile" className="flex items-center gap-2">
              <Smartphone className="h-4 w-4" />
              Mobile
            </TabsTrigger>
          )}
        </TabsList>
        {desktop && (
          <TabsContent value="desktop" className="mt-4">
            <div className="flex justify-center">
              <div className="relative w-full max-w-full">
                <Image
                  src={`/${desktop}`}
                  alt="Desktop preview"
                  width={1200}
                  height={800}
                  className="object-contain w-auto max-w-full"
                />
              </div>
            </div>
          </TabsContent>
        )}
        {tablet && (
          <TabsContent value="tablet" className="mt-4">
            <div className="flex justify-center">
              <div className="relative w-full max-w-full">
                <Image
                  src={`/${tablet}`}
                  alt="Tablet preview"
                  width={800}
                  height={600}
                  className="object-contain w-auto max-w-full"
                />
              </div>
            </div>
          </TabsContent>
        )}
        {mobile && (
          <TabsContent value="mobile" className="mt-4">
            <div className="flex justify-center">
              <div className="relative w-full max-w-full">
                <Image
                  src={`/${mobile}`}
                  alt="Mobile preview"
                  width={400}
                  height={600}
                  className="object-contain w-auto max-w-full"
                />
              </div>
            </div>
          </TabsContent>
        )}
      </Tabs>
    </div>
  )
}


