import Link from "next/link"
import { ArrowRight, Mail } from "lucide-react"

import { Button } from "@/components/ui/button"
import { ProjectCard } from "@/components/project-card"
import { Footer } from "@/components/footer"
import { Header } from "@/components/header"
import { Hero } from "@/components/hero"

const projects = [
  {
    id: "DR-Space",
    title: "Dream Realm Space Escape",
    description: "Space Fighter Game",
    image: "/DRspace/coverplane.png",
    category: "GAME",
  },
  {
    id: "DR-Concept",
    title: "Dream Realm Concept Art",
    description: "Concept art for the Dream Realm universe",
    image: "/DR/DRZb.png",
    category: "CONCEPT ART",
  },
  // {
  //   id: "DR-3D",
  //   title: "Dream Realm 3D Models",
  //   description: "3D models and animations for Dream Realm",
  //   image: "/DR/DRZvideo.mp4",
  //   category: "3D",
  // },
]

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1">
        <Hero />
        <section className="container py-12 md:py-24 lg:py-32 relative">
          <div className="absolute top-0 right-0 w-64 h-64 bg-neon-purple/10 rounded-full blur-3xl -z-10"></div>
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-neon-blue/10 rounded-full blur-3xl -z-10"></div>

          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-cyber tracking-tighter sm:text-5xl">
                <span className="text-neon-blue">FEATURED</span> <span className="glitch-text" data-text="PROJECTS">PROJECTS</span>
              </h2>
              <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Pushing the boundaries of what's possible
              </p>
            </div>
          </div>
          <div className="mx-auto grid max-w-5xl gap-8 py-8 md:grid-cols-2 lg:grid-cols-3">
            {projects.map((project) => (
              <ProjectCard
                key={project.id}
                id={project.id}
                title={project.title}
                description={project.description}
                image={project.image}
                category={project.category}
              />
            ))}
          </div>
          <div className="flex justify-center">
            <Link href="/projects">
              <Button variant="outline" className="gap-1 border-neon-blue text-neon-blue hover:bg-neon-blue hover:text-black transition-colors duration-300">
                View All Projects
                <ArrowRight className="h-4 w-4" />
              </Button>
            </Link>
          </div>
        </section>
        <section className="py-12 md:py-24 lg:py-32 relative">
          <div className="absolute inset-0 bg-gradient-to-r from-neon-blue/5 to-neon-purple/5"></div>
          <div className="container flex flex-col items-center justify-center space-y-4 text-center relative z-10">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                <span className="text-neon-purple">CONNECT</span>
              </h2>
              <p className="max-w-[600px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Interested in collaboration or have questions about my projects?
              </p>
            </div>
            <div className="mx-auto w-full max-w-sm space-y-2">
              <Link href="/contact">
                <Button className="w-full gap-1 bg-neon-purple hover:bg-neon-purple/80 text-white">
                  <Mail className="h-4 w-4" />
                  Contact Me
                </Button>
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
