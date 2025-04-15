import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"

const dreamRealmProjects = [
  { id: "DR-Space", title: "Dream Realm Space Escape" },
  { id: "DR-Concept", title: "Dream Realm Concept Art" }, // Highlighted or default
]

export default function DreamRealmButtons() {
  return (
    <section className="py-10 container">
      <h2 className="text-3xl font-bold text-neon-purple mb-6">Dream Realm Projects</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {dreamRealmProjects.map((project) => (
          <Link href={`/projects/${project.id}`} key={project.id}>
            <Button
              className={`w-full text-left justify-between px-6 py-4 bg-gradient-to-r from-neon-blue to-neon-purple hover:text-neon-purple hover:text-neon-blue text-black text-lg`}
            >
              {project.title}
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
          </Link>
        ))}
      </div>
    </section>
  )
}
