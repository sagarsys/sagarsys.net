import { Card, CardContent, CardFooter } from '@/components/ui/card'

export default function PortfolioItemSkeleton() {
  return (
    <div className="mt-6 mb-8">
      <Card className="mx-auto min-w-[240px] max-w-[400px]">
        <div className="w-full h-[240px] bg-gray-700 rounded-t-lg animate-pulse" />
        <CardContent className="min-h-[150px] pt-6">
          <div className="h-6 w-40 bg-gray-700 rounded animate-pulse mb-4" />
          <div className="space-y-2">
            <div className="h-4 bg-gray-700 rounded animate-pulse" />
            <div className="h-4 bg-gray-700 rounded animate-pulse" />
            <div className="h-4 bg-gray-700 rounded animate-pulse" />
            <div className="h-4 bg-gray-700 rounded animate-pulse" />
            <div className="h-4 bg-gray-700 rounded animate-pulse" />
          </div>
        </CardContent>
        <CardFooter className="p-4 pt-0">
          <div className="w-full h-10 bg-gray-700 rounded animate-pulse" />
        </CardFooter>
      </Card>
    </div>
  )
}


