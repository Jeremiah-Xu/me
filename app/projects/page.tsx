import { ProjectCard } from "@/components/project-card"
import { Footer } from "@/components/footer"
import { Header } from "@/components/header"

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
    description: "Unhackable communication protocol using quantum entanglement",
    image: "/DR/DRZb.png",
    category: "CONCEPT ART",
  },
  {
    id: "augmented-reality",
    title: "AR Overlay",
    description: "City-wide augmented reality information system",
    image: "/placeholder.svg?height=400&width=300",
    category: "SOFTWARE",
  },
]

export default function ProjectsPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1">
        <section className="container py-12 md:py-24 lg:py-32 relative">
          <div className="absolute top-0 right-0 w-64 h-64 bg-neon-purple/10 rounded-full blur-3xl -z-10"></div>
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-neon-blue/10 rounded-full blur-3xl -z-10"></div>
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <div className="text-neon-blue text-sm tracking-widest uppercase">Portfolio</div>
              <h1 className="font-cyber text-3xl tracking-tighter sm:text-5xl">
                <span className="glitch-text" data-text="Projects">Projects</span>
              </h1>
              <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Explore the creatives projects
              </p>
            </div>
          </div>
          <div className="mx-auto grid max-w-6xl gap-8 py-8 sm:grid-cols-2 lg:grid-cols-3">
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
        </section>
      </main>
      <Footer />
    </div>
  )
}
