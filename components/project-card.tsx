import Image from "next/image"
import Link from "next/link"
import { ArrowUpRight } from "lucide-react"

interface ProjectCardProps {
  id: string
  title: string
  description: string
  image: string
  category: string
}

export function ProjectCard({ id, title, description, image, category }: ProjectCardProps) {
  return (
    <Link href={`/projects/${id}`}>
      <div className="w-full h-full flex flex-col group relative overflow-hidden rounded-lg cyberpunk-card transition-all duration-300 hover:scale-[1.02]">

        <div className="relative w-full aspect-[7/8] flex-1">
          <Image
            src={image || "/placeholder.svg"}
            alt={title}
            fill
            className="object-contain transition-transform group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent"></div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 p-4">
          <div className="flex items-center justify-between">
            <div>
              <div className="text-xs text-neon-blue uppercase tracking-wider mb-1">{category}</div>
              <h3 className="font-bold text-lg group-hover:text-neon-blue transition-colors">{title}</h3>
              <p className="text-sm text-muted-foreground line-clamp-2">{description}</p>
            </div>
            <ArrowUpRight className="h-5 w-5 text-neon-blue opacity-0 group-hover:opacity-100 transition-opacity" />
          </div>
        </div>
      </div>
    </Link>
  )
}
