import Image from "next/image"
import Link from "next/link"

import { Card, CardContent } from "@/components/ui/card"

interface FeaturedWorkProps {
  title: string
  description: string
  image: string
}

export function FeaturedWork({ title, description, image }: FeaturedWorkProps) {
  return (
    <Link href="/gallery">
      <Card className="overflow-hidden transition-all hover:shadow-lg border border-muted">
        <div className="relative aspect-[3/4] w-full">
          <Image
            src={image || "/placeholder.svg"}
            alt={title}
            fill
            className="object-cover transition-transform hover:scale-105"
          />
        </div>
        <CardContent className="p-4">
          <h3 className="font-semibold">{title}</h3>
          <p className="text-sm text-muted-foreground">{description}</p>
        </CardContent>
      </Card>
    </Link>
  )
}
