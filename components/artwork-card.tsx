import { useState } from "react"
import Image from "next/image"
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog"
import { Badge } from "@/components/ui/badge"
import { Expand } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { ArrowRight } from "lucide-react"

interface ArtworkCardProps {
  artwork: {
    id: number
    title: string
    description: string
    type: string
    image: string
    year: string
    medium: string
    mediaType?: "image" | "video"
    project?: string // Add project field
    size: string
  }
}

export function ArtworkCard({ artwork }: ArtworkCardProps) {
  const [isHovered, setIsHovered] = useState(false)
  const [activeArtwork, setActiveArtwork] = useState<string | null>(null)

  const renderMedia = (isDialog = false) => {
    if (artwork.mediaType === "video") {
      return (
        <div className="flex items-center justify-center w-full h-full">
          <iframe
            src={`https://www.youtube.com/embed/${artwork.image.split('v=')[1]}`}
            className="w-full h-full"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            title={artwork.title}
          />
        </div>
      )
    } else {
      return (
        <Image
          src={artwork.image || "/placeholder.svg"}
          alt={artwork.title}
          fill
          className="object-contain transition-transform group-hover:scale-105"
        />
      )
    }
  }

  const handleCardClick = (name: string) => {
    setActiveArtwork(activeArtwork === name ? null : name)
  }

  return (
    <Dialog>
      <DialogTrigger asChild>
        <div
          className="group relative overflow-hidden rounded-xl cyberpunk-card transition-all duration-300 hover:scale-[1.05] cursor-pointer w-full max-w-[300px] min-h-[300px]"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          <div className="relative w-full h-[400px] md:h-[400px] flex items-center justify-center">
            {renderMedia()}
            <div
              className={`absolute inset-0 flex items-center justify-center transition-opacity duration-300 ${
                isHovered ? "opacity-100" : "opacity-0"
              }`}
            >
              <div className="rounded-full bg-neon-blue/20 p-3 backdrop-blur-sm">
                <Expand className="h-6 w-6 text-white" />
              </div>
            </div>
          </div>
          {/* <div className="p-6 space-y-2">
            <h3 className="font text-l md:text-l group-hover:text-neon-blue transition-colors">
              {artwork.title}
            </h3>
            <p className="text-base text-muted-foreground">{artwork.description}</p>
          </div> */}
        </div>
      </DialogTrigger>
      <DialogContent className="max-w-full h-full bg-black/90 border border-neon-blue/50">
        <div className="grid gap-6 py-4 md:grid-cols-[1fr_300px]">
          <div className="relative w-full h-[90vh] md:h-[90vh]">
            {renderMedia(true)}
          </div>
          <div className="space-y-4">
            <Badge
              className={`${
                artwork.type === "painting"
                  ? "bg-neon-blue/20 text-neon-blue"
                  : artwork.type === "digital"
                  ? "bg-neon-purple/20 text-neon-purple"
                  : "bg-neon-pink/20 text-neon-pink"
              }`}
            >
              {artwork.type.toUpperCase()}
            </Badge>
            <h2 className="text-2xl font-bold">{artwork.title}</h2>
            <p className="text-muted-foreground">{artwork.description}</p>
            <div className="pt-4 space-y-2 border-t border-neon-blue/20">
              <div className="flex justify-between">
                <span className="text-sm text-muted-foreground">Year</span>
                <span className="text-sm">{artwork.year}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-sm text-muted-foreground">Medium</span>
                <span className="text-sm">{artwork.medium}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-sm text-muted-foreground">Size</span>
                <span className="text-sm">{artwork.size}</span>
              </div>
            </div>
            
            <div className="p-20">
            {artwork.project === "DR-Concept" && (
              <Link href={`/projects/${artwork.project}`} passHref>
                <Button variant="outline" className="border-neon-pink text-neon-pink">
                  <ArrowRight className="mr-2 h-4 w-4" />
                  Dream Realm Project
                </Button>
              </Link>
            )}
            </div>
          </div>
        </div>
        <div className="mt-4 text-center">
          <button onClick={() => handleCardClick(artwork.title)} className="text-sm text-neon-blue">
            {activeArtwork === artwork.title ? "Hide Details" : "Show Details"}
          </button>
          {activeArtwork === artwork.title && (
            <div className="mt-2 text-sm text-muted-foreground">
              <p>{artwork.description}</p>
              <p>Size: {artwork.size}</p>
            </div>
          )}
        </div>
      </DialogContent>
    </Dialog>
  )
}
