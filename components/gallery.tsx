"use client"

import { useState } from "react"
import Image from "next/image"

import { Card } from "@/components/ui/card"
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

const artworks = [
  {
    id: 1,
    title: "Abstract Composition",
    description: "Mixed media on canvas, 2023",
    category: "abstract",
    image: "/placeholder.svg?height=400&width=300",
  },
  {
    id: 2,
    title: "Urban Landscape",
    description: "Oil on canvas, 2022",
    category: "landscape",
    image: "/placeholder.svg?height=400&width=300",
  },
  {
    id: 3,
    title: "Portrait Study",
    description: "Charcoal on paper, 2023",
    category: "portrait",
    image: "/placeholder.svg?height=400&width=300",
  },
  {
    id: 4,
    title: "Geometric Forms",
    description: "Acrylic on canvas, 2023",
    category: "abstract",
    image: "/placeholder.svg?height=400&width=300",
  },
  {
    id: 5,
    title: "Seascape at Dawn",
    description: "Oil on canvas, 2022",
    category: "landscape",
    image: "/placeholder.svg?height=400&width=300",
  },
  {
    id: 6,
    title: "Self Portrait",
    description: "Oil on canvas, 2021",
    category: "portrait",
    image: "/placeholder.svg?height=400&width=300",
  },
  {
    id: 7,
    title: "Color Study #1",
    description: "Mixed media, 2023",
    category: "abstract",
    image: "/placeholder.svg?height=400&width=300",
  },
  {
    id: 8,
    title: "Mountain View",
    description: "Watercolor on paper, 2022",
    category: "landscape",
    image: "/placeholder.svg?height=400&width=300",
  },
  {
    id: 9,
    title: "Figure Drawing",
    description: "Charcoal on paper, 2022",
    category: "portrait",
    image: "/placeholder.svg?height=400&width=300",
  },
]

export function Gallery() {
  const [selectedCategory, setSelectedCategory] = useState("all")

  const filteredArtworks =
    selectedCategory === "all" ? artworks : artworks.filter((artwork) => artwork.category === selectedCategory)

  return (
    <div className="space-y-8 py-8">
      <Tabs defaultValue="all" className="w-full" onValueChange={setSelectedCategory}>
        <div className="flex justify-center">
          <TabsList>
            <TabsTrigger value="all">All</TabsTrigger>
            <TabsTrigger value="abstract">Abstract</TabsTrigger>
            <TabsTrigger value="landscape">Landscape</TabsTrigger>
            <TabsTrigger value="portrait">Portrait</TabsTrigger>
          </TabsList>
        </div>
        <TabsContent value="all" className="mt-6">
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {filteredArtworks.map((artwork) => (
              <ArtworkCard key={artwork.id} artwork={artwork} />
            ))}
          </div>
        </TabsContent>
        <TabsContent value="abstract" className="mt-6">
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {filteredArtworks.map((artwork) => (
              <ArtworkCard key={artwork.id} artwork={artwork} />
            ))}
          </div>
        </TabsContent>
        <TabsContent value="landscape" className="mt-6">
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {filteredArtworks.map((artwork) => (
              <ArtworkCard key={artwork.id} artwork={artwork} />
            ))}
          </div>
        </TabsContent>
        <TabsContent value="portrait" className="mt-6">
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {filteredArtworks.map((artwork) => (
              <ArtworkCard key={artwork.id} artwork={artwork} />
            ))}
          </div>
        </TabsContent>
      </Tabs>
    </div>
  )
}

interface ArtworkCardProps {
  artwork: {
    id: number
    title: string
    description: string
    category: string
    image: string
  }
}

function ArtworkCard({ artwork }: ArtworkCardProps) {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Card className="overflow-hidden cursor-pointer transition-all hover:shadow-lg border border-muted">
          <div className="relative aspect-[3/4] w-full">
            <Image
              src={artwork.image || "/placeholder.svg"}
              alt={artwork.title}
              fill
              className="object-cover transition-transform hover:scale-105"
            />
          </div>
          <div className="p-4">
            <h3 className="font-semibold">{artwork.title}</h3>
            <p className="text-sm text-muted-foreground">{artwork.description}</p>
          </div>
          
        </Card>
      </DialogTrigger>
      <DialogContent className="max-w-2xl">
        <div className="grid gap-4 py-4 md:grid-cols-[1fr_300px]">
          <div className="relative aspect-[4/3] w-full md:aspect-auto md:h-full">
            <Image src={artwork.image || "/placeholder.svg"} alt={artwork.title} fill className="object-contain" />
          </div>
          <div className="space-y-2">
            <h2 className="text-xl font-bold">{artwork.title}</h2>
            <p className="text-muted-foreground">{artwork.description}</p>
            <div className="pt-4">
              <h3 className="font-medium">Details</h3>
              <p className="text-sm text-muted-foreground">
                Size: 24" x 36"
                <br />
                Year: 2023
                <br />
                Medium: Oil on canvas
                <br />
                Status: Available
              </p>
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  )
}
