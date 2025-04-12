import Image from "next/image"
import Link from "next/link"
import { ArrowLeft, ExternalLink, Github } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Footer } from "@/components/footer"
import { Header } from "@/components/header"

const projectsData = {
  "DR-Space": {
    title: "Dream Realm Space Escape",
    description: "Brain-computer interface with holographic display",
    fullDescription:
      "The Neural Interface is a cutting-edge brain-computer interface that allows direct communication between the human brain and digital systems. Using advanced neural mapping and quantum computing, this system creates a seamless connection that feels like a natural extension of human thought. The holographic display projects information directly into the user's field of vision, creating an immersive augmented reality experience without the need for external devices.",
    images: [
      {
        src: "https://www.youtube.com/watch?v=MpCNEPYQn_c",
        type: "youtube",
        display: "full",
        alt: "DR-Space gameplay video"
      },
    ],
    category: "GAME",
    technologies: ["Unity", "Blender", "Concept Art", "Game Design"],
    features: [
      "Thought-based control of digital systems",
      "Real-time neural feedback",
      "Holographic data visualization",
      "Emotional state monitoring",
      "Memory enhancement capabilities",
    ],
    year: "2025",
  },

  "DR-Concept": {
    title: "Dream Realm Concept Art",
    description: "Unhackable communication protocol using quantum entanglement",
    fullDescription:
      "The Quantum Encryption project leverages the principles of quantum entanglement to create an unhackable communication system. By utilizing entangled particle pairs, any attempt to intercept the communication automatically alters the quantum state, immediately alerting both sender and receiver to the breach. This technology represents a paradigm shift in secure communications, making traditional encryption methods obsolete.",
    images: [
      {
        src: "/DR/X.jpeg",
        type: "image",
        display: "full",
        alt: "Concept art X"
      },
      {
        src: "/DR/Y.jpeg",
        type: "image",
        display: "full",
        alt: "Concept art Y"
      },
      {
        src: "/DR/Z.jpeg",
        type: "image",
        display: "full",
        alt: "Concept art Z"
      },
      {
        src: "/DR/DRZa.png",
        type: "image",
        display: "half",
        alt: "Detailed concept art Za"
      },
      {
        src: "/DR/DRZc.png",
        type: "image",
        display: "half",
        alt: "Detailed concept art Zc"
      },
      {
        src: "/DR/p6.png",
        type: "image",
        display: "half",
        alt: "Detailed concept art 6"
      },
      {
        src: "/DR/p7.png",
        type: "image",
        display: "half",
        alt: "Detailed concept art 7"
      },
      
    ],
    category: "SECURITY",
    technologies: [
      "Photoshop",
      "Zbrush",
      "Blender",
      "Concept Art",
      "",
    ],
    features: [
      "Instantaneous breach detection",
      "Zero-latency communication",
      "Quantum key generation",
      "Cross-continental secure channels",
      "Military-grade security protocols",
    ],
    year: "2022",
  },
}

export default function ProjectPage({ params }: { params: { id: string } }) {
  const project = projectsData[params.id as keyof typeof projectsData];

  if (!project) {
    return (
      <div className="flex min-h-screen flex-col">
        <Header />
        <main className="flex-1 flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-3xl font-bold text-neon-blue">Project Not Found</h1>
            <p className="mt-4 text-muted-foreground">The project you're looking for doesn't exist.</p>
            <Link href="/projects" className="mt-6 inline-block">
              <Button variant="outline" className="border-neon-blue text-neon-blue">
                <ArrowLeft className="mr-2 h-4 w-4" />
                Back to Projects
              </Button>
            </Link>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1">
        <section className="container py-12 relative">
          <div className="absolute top-0 right-0 w-64 h-64 bg-neon-purple/10 rounded-full blur-3xl -z-10"></div>
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-neon-blue/10 rounded-full blur-3xl -z-10"></div>

          <div className="flex flex-col md:flex-row gap-12">
            <div className="md:w-2/3">
              <div className="prose prose-invert max-w-none">
                <div className="text-neon-blue text-sm tracking-widest uppercase mb-2">
                  {project.category}
                </div>
                <h1 className="text-4xl md:text-6xl font">{project.title}</h1>

                <p className="text-xl text-muted-foreground">{project.description}</p>
                <p className="mt-6">{project.fullDescription}</p>

                <h2 className="text-2xl font-bold mt-12 text-neon-blue">Features</h2>
                <ul>
                  {project.features.map((feature, index) => (
                    <li key={index}>{feature}</li>
                  ))}
                </ul>

                <div className="mt-12 flex gap-4">
                  <Button asChild className="bg-neon-blue hover:bg-neon-blue/80 text-black">
                    <a href="https://example.com" target="_blank" rel="noopener noreferrer">
                      <ExternalLink className="mr-2 h-4 w-4" />
                      Live Demo
                    </a>
                  </Button>

                  <Button variant="outline" className="border-neon-purple text-neon-purple hover:bg-neon-purple/10">
                    <Github className="mr-2 h-4 w-4" />
                    Source Code
                  </Button>
                </div>
              </div>
            </div>

            <div className="md:w-1/3">
              <div className="cyberpunk-card p-6 rounded-lg">
                <h3 className="text-xl font-bold mb-4 text-neon-purple">Project Details</h3>
                <div className="space-y-4">
                  <div>
                    <div className="text-sm text-muted-foreground">Year</div>
                    <div>{project.year}</div>
                  </div>
                  <div>
                    <div className="text-sm text-muted-foreground">Category</div>
                    <div>{project.category}</div>
                  </div>
                  <div>
                    <div className="text-sm text-muted-foreground">Technologies</div>
                    <div className="flex flex-wrap gap-2 mt-2">
                      {project.technologies.map((tech, index) => (
                        <span key={index} className="px-2 py-1 text-xs rounded-md bg-neon-blue/10 text-neon-blue">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Images Section */}
          <section className="space-y-8">
            <h2 className="text-2xl font-bold">Gallery</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {project.images.map((media, index) => (
                <div
                  key={index}
                  className={`relative overflow-hidden rounded-lg ${
                    media.display === "full" ? "md:col-span-2" : "md:col-span-1"
                  }`}
                >
                  {media.type === "image" ? (
                    <Image
                      src={media.src}
                      alt={media.alt}
                      width={1200}
                      height={800}
                      className="w-full h-auto object-cover"
                    />
                  ) : media.type === "youtube" ? (
                    <div className="relative w-full" style={{ paddingBottom: '56.25%' }}>
                      <iframe
                        src={`https://www.youtube.com/embed/${media.src.split('v=')[1]}`}
                        className="absolute top-0 left-0 w-full h-full"
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                      />
                    </div>
                  ) : (
                    <video
                      src={media.src}
                      controls
                      className="w-full h-auto"
                      poster={media.src.replace('.mp4', '.jpg')}
                    >
                      Your browser does not support the video tag.
                    </video>
                  )}
                </div>
              ))}
            </div>
          </section>

          <div className="mt-16">
            <Link href="/projects">
              <Button variant="outline" className="border-neon-blue text-neon-blue hover:bg-neon-blue hover:text-black transition-colors duration-300">
                <ArrowLeft className="mr-2 h-4 w-4" />
                Back to Projects
              </Button>
            </Link>
          </div>
        </section>

      </main>
      <Footer />
    </div>
  );
}

