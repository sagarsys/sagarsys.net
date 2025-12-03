'use client'

import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogFooter,
} from '@/components/ui/dialog'
import { Button } from '@/components/ui/button'
import { X } from 'lucide-react'
import PortfolioItemDetailsDialogContent from './PortfolioItemDetailsDialogContent'
import { LinkOrText } from './LinkOrText'

interface PortfolioItemData {
  id: string
  title: string
  titleLink?: string
  images: {
    thumb: string
    mobile?: string
    tablet?: string
    desktop?: string
  }
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

interface PortfolioItemDetailsDialogProps {
  open: boolean
  handleClose: () => void
  item: PortfolioItemData
}

export default function PortfolioItemDetailsDialog({
  open,
  handleClose,
  item,
}: PortfolioItemDetailsDialogProps) {
  const { title, titleLink } = item

  return (
    <Dialog open={open} onOpenChange={handleClose}>
      <DialogContent className="max-w-6xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <div className="flex justify-between items-center">
            <DialogTitle className="text-2xl">
              <LinkOrText link={titleLink} title={title} color="secondary" />
            </DialogTitle>
            <Button
              variant="ghost"
              size="icon"
              onClick={handleClose}
              className="ml-auto"
              aria-label="close"
            >
              <X className="h-4 w-4" />
            </Button>
          </div>
        </DialogHeader>
        <div className="border-t border-border my-4" />
        <PortfolioItemDetailsDialogContent item={item} />
        <DialogFooter>
          <Button onClick={handleClose} variant="default">
            Close
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}

