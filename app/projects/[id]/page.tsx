import Image from "next/image"
import Link from "next/link"
import { ArrowLeft, ExternalLink, Github } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Footer } from "@/components/footer"
import { Header } from "@/components/header"

const projectsData = {
  "DR-Space": {
    title: "Dream Realm Space Escape",
    description: "3D Space Shooter Game Made with Unity",
    fullDescription:
      "This game expands upon my earlier concept, Dream Realm. Instead of controlling a human within the dream world, players now assume the role of a plane pilot traversing diverse dream dimensions, seeking the elusive cognitive pathway that leads to awakening. The entire game was independently designed and developed.",
    images: [
      {
        src: "https://www.youtube.com/watch?v=MpCNEPYQn_c",
        type: "youtube",
        display: "full",
        alt: "DR-Space gameplay video"
      },
      {
        src: "/DRspace/s1.png",
        type: "image",
        display: "half",
        alt: "game image"
      },
      {
        src: "/DRspace/s2.png",
        type: "image",
        display: "half",
        alt: "game image"
      },
      {
        src: "/DRspace/s3.png",
        type: "image",
        display: "half",
        alt: "game image"
      },
      {
        src: "/DRspace/s6.png",
        type: "image",
        display: "half",
        alt: "game image"
      },
      {
        src: "/DRspace/s4.png",
        type: "image",
        display: "half",
        alt: "game image"
      },
      {
        src: "/DRspace/s5.png",
        type: "image",
        display: "half",
        alt: "game image"
      },
    ],
    category: "GAME",
    technologies: ["Unity", "Blender", "figma", "Concept Art", "Game Design"],
    features: [
      "Unity Camera System",
      "Outer Space Environment",
      "Free-roam flight in 3D space",
      "Shields, hull damage, and repair mechanics",
      "Customization & Upgrades",
    ],
    year: "2025",
    link: "https://jeremiahxu.itch.io/dream-realm-space-escape",
  },

  "DR-Concept": {
    title: "Dream Realm Concept Art",
    description: "A world shared by all through dreams, yet forgotten upon waking",
    fullDescription:
      "The main character, Jezza, wields a weapon nicknamed “Coffin”—a mysterious material capable of transforming into any form he can imagine. Unbound by the limitations of the physical world, it grants him near-limitless power. Below are several variations of combat outfits and weapon forms Jezza may equip.",
    images: [
      {
        src: "/DR/DR-X.png",
        type: "image",
        display: "mid",
        alt: "Detailed concept art"
      },
      {
        src: "/DR/DR-Y.png",
        type: "image",
        display: "mid",
        alt: "Detailed concept art"
      },
      {
        src: "/DR/DR-Z.png",
        type: "image",
        display: "mid",
        alt: "Detailed concept art"
      },
      {
        src: "/DR/DR-D.png",
        type: "image",
        display: "mid",
        alt: "Detailed concept art"
      },
      {
        src: "/DR/DR-landscape1.png",
        type: "image",
        display: "mid",
        alt: "Detailed concept art"
      },
      {
        src: "/DR/DR-landscape2.jpg",
        type: "image",
        display: "mid",
        alt: "Detailed concept art"
      },
      {
        src: "/DR/DR-landscape3.jpg",
        type: "image",
        display: "half",
        alt: "Detailed concept art"
      },
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
        display: "mid",
        alt: "Detailed concept art Za"
      },
      {
        src: "/DR/DRZc.png",
        type: "image",
        display: "mid",
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
      {
        src: "/DR/DRZm+s1.png",
        type: "image",
        display: "mid",
        alt: "Detailed concept art 8"
      },
      {
        src: "Models made with Zrbush and Blender",
        type: "text",
        display: "mid",
        alt: ""
      },
    ],
    category: "Concept Art",
    technologies: ["Photoshop", "Zbrush", "Blender", "Concept Art"],
    features: [
      "Conceptual Charatcer Design",
      "3D Hardsurface Modelling",
      "Landscape Design",
      "Illustration",
    ],
    year: "2024",
    link: "https://www.instagram.com/dream_realm_art/",
  },
  "Fate-of-Lifrun": {
    title: "Fate of Lifrun",
    description: "Defending Greenary against the invading forces",
    fullDescription:
      "A Week School Gamejam(Lionjam) project made with Unity.",
    images: [
      {
        src: "/FOL/1.png",
        type: "image",
        display: "full",
        alt: "FOL gameplay image"
      },
      {
        src: "https://www.youtube.com/watch?v=P5ABqHAO4Gs",
        type: "youtube",
        display: "full",
        alt: "FOL gameplay video"
      },
      {
        src: "/FOL/48x48 trees1.png",
        type: "image",
        display: "small",
        alt: "FOL gameplay image"
      },
      {
        src: "/FOL/48x48 trees2.png",
        type: "image",
        display: "small",
        alt: "FOL gameplay image"
      },
      {
        src: "/FOL/48x48 trees3.png",
        type: "image",
        display: "small",
        alt: "FOL gameplay image"
      },
      {
        src: "/FOL/48x48 trees4.png",
        type: "image",
        display: "mid",
        alt: "FOL gameplay image"
      },
      {
        src: "/FOL/a.png",
        type: "image",
        display: "small",
        alt: "FOL gameplay image"
      },
      {
        src: "/FOL/s.png",
        type: "image",
        display: "small",
        alt: "FOL gameplay image"
      },
      {
        src: "/FOL/w.png",
        type: "image",
        display: "small",
        alt: "FOL gameplay image"
      },

      {
        src: "/FOL/1.gif",
        type: "image",
        display: "extra-small",
        alt: "FOL gameplay image"
      },
      {
        src: "/FOL/2.gif",
        type: "image",
        display: "small",
        alt: "FOL gameplay image"
      },
      {
        src: "/FOL/3.gif",
        type: "image",
        display: "small",
        alt: "FOL gameplay image"
      },
      {
        src: "/FOL/4.gif",
        type: "image",
        display: "small",
        alt: "FOL gameplay image"
      },
      {
        src: "/FOL/5.gif",
        type: "image",
        display: "small",
        alt: "FOL gameplay image"
      },
      {
        src: "/FOL/6.gif",
        type: "image",
        display: "small",
        alt: "FOL gameplay image"
      },
      {
        src:"Assets I originally created with Aesprite",
        type: "text",
        display: "half",
        alt:"Assets"
      }
      
    ],
    category: "Game",
    technologies: ["Aesprite", "Unity"],
    features: [
      "Game Design",
      "Animation",
      "Level Design",
      "Pixel Art",
    ],
    year: "2025",
    link: "https://anoikis.itch.io/fate-of-lifrun",
  },
}

export async function generateStaticParams() {
  const projectIds = Object.keys(projectsData);
  return projectIds.map((id) => ({
    id,
  }));
}

export default async function ProjectPage({ params }: { params: { id: string } }) {
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
    <div className="w-[80%] mx-[10%] flex min-h-screen flex-col">
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
                <h1 className="font-cyber text-4xl md:text-5xl">{project.title}</h1>

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
                    <a href={project.link} target="_blank" rel="noopener noreferrer">
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
            <h2 className="text-2xl p-10 font-bold">Gallery</h2>
            <div className="grid grid-cols-1 md:grid-cols-12 gap-1">
              {project.images.map((media, index) => (
                <div p-10="true"
                  key={index}
                  className={`p-2 relative overflow-hidden rounded-lg ${
                    media.display === "full"
                      ? "md:col-span-12"
                      : media.display === "half"
                      ? "md:col-span-6"
                      : media.display === "mid"
                      ? "md:col-span-3"
                      : media.display === "small"
                      ? "md:col-span-2"
                      : media.display === "extra-small"
                      ? "md:col-span-1"
                      : ""
                  }`}
                >
                  {media.type === "image" && (
                    <Image
                      src={media.src}
                      alt={media.alt}
                      width={1200}
                      height={800}
                      className="w-full h-auto object-cover rounded-md"
                    />
                  )}
                  {media.type === "youtube" && (
                      <div className="relative w-full pt-[56.25%]">
                      <iframe
                        src={media.src.replace("watch?v=", "embed/")}
                        title={media.alt}
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                        className="absolute top-0 left-0 w-full h-full"
                      ></iframe>
                    </div>
                  )}
                  {media.type === "text" && (
                    <div className="font-cyber flex items-center justify-center w-full h-full text-center text-lg">
                      {media.src || "No text provided."}
                    </div>
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

