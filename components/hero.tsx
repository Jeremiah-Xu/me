"use client"
import Link from "next/link"
import Image from "next/image"
import { ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"

export function Hero() {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48 bg-background relative overflow-hidden">
      <div className="absolute inset-0 z-0 opacity-10">
        <div className="absolute inset-0 bg-grid-pattern"></div>
      </div>
      <div className="container px-4 md:px-6 relative z-10">
        <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]">
          <div className="flex flex-col justify-center space-y-4">
            <div className="space-y-2">
              <h1 className="font-cyber text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
                <span className="glitch-text" data-text="REDEFINED">
                REDEFINED
                </span>{" "} 
                <span className="text-neon-blue">INNOVATIVE</span> <span className="text-neon-purple">ART</span>
              </h1>
              <p className="font-unbound max-w-[600px] text-muted-foreground md:text-xl">
                Explore my innovative projects and artworks at the intersection of technology and creativity.
              </p>
            </div>
            <div className="flex flex-col gap-2 min-[400px]:flex-row">
              <Link href="/projects">
                <Button className="gap-1 bg-neon-blue hover:bg-neon-blue/80 text-black">
                  View Projects
                  <ArrowRight className="h-4 w-4" />
                </Button>
              </Link>
              <Link href="/about">
                <Button variant="outline" className="border-neon-purple text-neon-purple hover:bg-neon-purple/10">
                  About Me
                </Button>
              </Link>
            </div>
          </div>
          <div className="relative aspect-[4/6] overflow-hidden rounded-xl sm:h-[700px] lg:h-[800px] cyberpunk-border ml-20">
            <Image
              src="/gallery/2.jpg"
              alt="Featured project"
              fill
              className="object-cover"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent"></div>
            <div className="absolute bottom-0 left-0 right-0 p-4">
              <div className="text-neon-blue font-cyber">I'm Jeremiah</div>
              <h3 className="text-white font-cyber">Artist, Game, Software Dev</h3>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}