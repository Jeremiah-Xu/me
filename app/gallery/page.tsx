"use client"
import { useState } from "react"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { ArtworkCard } from "@/components/artwork-card"
import { motion } from "framer-motion"
import Image from "next/image"
import SplashCursor from "@/components/splashcursor"
interface Artwork {
  id: number
  title: string
  // description: string
  type: string
  image: string
  year: string
  medium: string
  mediaType?: "video" | "image"
  project?: string
  poster?: string
  size?: string
}

// Your artwork data here...
const artworks: Artwork[] = [
  // Fine Arts
  {
    id: 1,
    title: "Old Man with Enormous Wings",
    // description: "A surreal portrait exploring the intersection of reality and fantasy",
    type: "fine art",
    image: "/gallery/1.jpg",
    year: "2024",
    size: "60x50in",
    medium: "Conte Crayon On Paper",
    mediaType: "image"
  },
  {
    id: 2,
    title: "Superimposed Self",
    // description: "A self-portrait exploring the layers of identity and perception",
    type: "fine art",
    image: "/gallery/2.jpg",
    year: "2025",
    size: "60x40in",
    medium: "Conte Crayon On Papers",
    mediaType: "image"
  },
  {
    id: 3,
    title: "Metropolitan Gaze II",
    // description: "A study of urban life and human connection in the digital age",
    type: "fine art",
    image: "/gallery/3.jpg",
    year: "2024",
    size: "65x40in",
    medium: "Conte Crayon On Papers",
    mediaType: "image"
  },
  {
    id: 4,
    title: "Blazing Sun",
    // description: "An abstract representation of energy and transformation",
    type: "fine art",
    image: "/gallery/4.jpg",
    year: "2024",
    size: "60x45in",
    medium: "Oil on canvas",
    mediaType: "image"
  },
  {
    id: 5,
    title: "Pride",
    // description: "A surreal exploration of dreams and reality",
    type: "fine art",
    image: "/gallery/sds1.jpg",
    year: "2024",
    size: "50x40in",
    medium: "Ink on Paper",
    mediaType: "image"
  },
  {
    id: 6,
    title: "Metropolitan Gaze",
    // description: "A contemplative study of urban landscapes and human presence",
    type: "fine art",
    image: "/gallery/6.jpg",
    year: "2024",
    size: "60x50in",
    medium: "Oil On Canvas Sheet",
    mediaType: "image"
  },
  {
    id: 7,
    title: "Sparks of Love",
    // description: "An emotional exploration of connection and energy",
    type: "fine art", 
    image: "/gallery/10.jpg",
    year: "2024",
    size: "50x40in",
    medium: "Oil On Canvas",
    mediaType: "image"
  },
  {
    id: 7.5,
    title: "Ups",
    // description: "A dynamic composition exploring movement and balance",
    type: "fine art",
    image: "/gallery/5.jpg",
    year: "2022",
    size: "60x40in",
    medium: "Oil On Canvas Sheet",
    mediaType: "image"
  },
  {
    id: 8,
    title: "Glass of the Fallen",
    // description: "A symbolic representation of fragility and resilience",
    type: "fine art",
    image: "/gallery/8.jpeg",
    size: "20x26in",
    year: "2022",
    medium: "Oil On Canvas Sheet",
    mediaType: "image"
  },

  {
    id: 9,
    title: "Holding Lights",
    // description: "A study of light, form, and human connection",
    type: "fine art",
    image: "/gallery/9.jpg",
    year: "2024",
    size: "20x24in",
    medium: "Oil On Canvas Sheet",
    mediaType: "image"
  },
  {
    id: 10,
    title: "30mins Classwork",
    // description: "A spontaneous exploration of form and composition",
    type: "fine art",
    image: "/gallery/7.jpg",
    year: "2022",
    size: "24x26in",
    medium: "Oil On Canvas Sheet",
    mediaType: "image"
  },
  {
    id: 11,
    title: "Vanitas",
    // description: "A contemporary interpretation of the traditional vanitas theme",
    type: "fine art",
    image: "/gallery/11.jpeg",
    year: "2022",
    size: "26x30in",
    medium: "Oil On Canvas Sheet",
    mediaType: "image"
  },
  {
    id: 12,
    title: "",
    // description: "A surreal exploration of dreams and reality",
    type: "fine art",
    image: "/gallery/ink1.jpg",
    year: "2024",
    medium: "Ink on Paper",
    mediaType: "image"
  },
  {
    id: 13,
    title: "",
    // description: "A surreal exploration of dreams and reality",
    type: "fine art",
    image: "/gallery/ink2.jpg",
    year: "2024",
    medium: "Ink on Paper",
  },
  {
    id: 14,
    title: "",
    // description: "A surreal exploration of dreams and reality",
    type: "fine art",
    image: "/gallery/s1.jpg",
    year: "2024",
    medium: "Sketch",
  },  {
    id: 15,
    title: "",
    // description: "A surreal exploration of dreams and reality",
    type: "fine art",
    image: "/gallery/s2.jpg",
    year: "2024",
    medium: "Sketch",
  },  {
    id: 16,
    title: "",
    // description: "A surreal exploration of dreams and reality",
    type: "fine art",
    image: "/gallery/s3.jpg",
    year: "2024",
    medium: "Sketch",
  },  {
    id: 17,
    title: "",
    // description: "A surreal exploration of dreams and reality",
    type: "fine art",
    image: "/gallery/s4.jpg",
    year: "2024",
    medium: "Sketch",
  },  {
    id: 18,
    title: "",
    // description: "A surreal exploration of dreams and reality",
    type: "fine art",
    image: "/gallery/s5.jpg",
    year: "2024",
    medium: "Conte Crayon On Paper",
  },
  //Digitial
  {
    id: 19,
    title: "Dream Realm Blood Moon Town",
    // description: "A digital landscape featuring a town under a blood moon",
    type: "digital",
    image: "/DR/DR-landscape1.png",
    year: "2023",
    medium: "Digital (Photoshop)",
    project: "DR-Concept",
    mediaType: "image"
  },
  {
    id: 20,
    title: "Dream Realm Fall of Loong",
    // description: "A digital illustration depicting a dramatic scene from the Dream Realm",
    type: "digital",
    image: "/DR/DR-landscape2.jpg",
    year: "2022",
    medium: "Digital (Photoshop)",
    project: "DR-Concept",
    mediaType: "image"
  },
  {
    id: 21,
    title: "Dream Realm Matrix City",
    // description: "A 3D architectural visualization of a futuristic cityscape",
    type: "digital",
    image: "/DR/DR-landscape3.jpg",
    year: "2023",
    medium: "Digital (Photoshop)",
    project: "DR-Concept",
    mediaType: "image"
  },
  {
    id: 22,
    title: "Dream Realm X",
    // description: "A digital exploration of futuristic architecture and design",
    type: "digital",
    image: "/DR/DR-X.png",
    year: "2023",
    medium: "Digital (Photoshop)",
    project: "DR-Concept",
    mediaType: "image"
  },
  {
    id: 23,
    title: "Dream Realm Y",
    // description: "A conceptual design for a futuristic urban environment",
    type: "digital",
    image: "/DR/DR-Y.png",
    year: "2023",
    medium: "Digital (Photoshop)",
    project: "DR-Concept",
    mediaType: "image"
  },
  {
    id: 24,
    title: "Dream Realm Z",
    // description: "A digital illustration of a cyberpunk-inspired character",
    type: "digital",
    image: "/DR/DR-Z.png",
    year: "2023",
    medium: "Digital (Photoshop)",
    project: "DR-Concept",
    mediaType: "image"
  },
  {
    id: 25,
    title: "Dream Realm D",
    // description: "A digital concept art piece for the Dream Realm universe",
    type: "digital",
    image: "/DR/DR-D.png",
    year: "2023",
    medium: "Digital (Photoshop)",
    project: "DR-Concept",
    mediaType: "image"
  },
  {
    id: 26,
    title: "DR-Z Sword Model",
    // description: "3D animation of DRZ wielding a sword",
    type: "3d",
    image: "https://www.youtube.com/watch?v=LIVJl6HuqEc",
    year: "2024",
    medium: "Blender & Zbrush",
    mediaType: "video",
    project: "DR-Concept",
    poster: "/DR/DRZsword-poster.jpg"
  },
  {
    id: 27,
    title: "DR-Z Character Model",
    // description: "3D animation showcasing DRZ's character design",
    type: "3d",
    image: "https://www.youtube.com/watch?v=kNkLzU4tFx8",
    year: "2024",
    medium: "Blender & Zbrush",
    mediaType: "video",
    project: "DR-Concept",
    poster: "/DR/DRZvideo-poster.jpg"
  },
  {
    id: 28,
    title: "DR-Z Sword Animation",
    // description: "3D animation of DRS in space environment",
    type: "3d",
    image: "https://www.youtube.com/watch?v=7khujINffxE",
    year: "2024",
    medium: "Blender & Zbrush",
    mediaType: "video",
    project: "DR-Concept",
    poster: "/DR/DRSvideo-poster.jpg"
  },
  {
    id: 29,
    title: "mbti-vector",
    //description: "Architectural concept for future living spaces",
    type: "digital",
    image: "/gallery/mbti_vector.png",
    year: "2025",
    medium: "figma",
  },
]


export default function GalleryPage() {
  const [selectedCategory, setSelectedCategory] = useState("all")

  const filteredArtworks =
    selectedCategory === "all" ? artworks : artworks.filter((artwork) => artwork.type === selectedCategory)

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 },
  }

  return (
    <div className="w-[80%] mx-[10%] flex min-h-screen flex-col">
      <Header />
      <SplashCursor/>
      <main className="flex-1">
        <section className="container py-12 md:py-24 lg:py-32 relative">
          <div className="absolute top-0 right-0 w-64 h-64 bg-neon-purple/10 rounded-full blur-3xl -z-10"></div>
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-neon-blue/10 rounded-full blur-3xl -z-10"></div>

          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <div className="font-unbound text-neon-blue tracking-widest uppercase">Collection</div>
              <h1 className="text-3xl font-normal tracking-tighter sm:text-5xl">
                <span className="font-cyber glitch-text" data-text="Gallery">Gallery</span>
              </h1>
              <p className="max-w-[900px] text-muted-foreground text-sm">
                Explore my artistic creations across different mediums
              </p>
            </div>
          </div>

          <div className="mt-12">
            <Tabs defaultValue="all" className="w-full" onValueChange={setSelectedCategory}>
              <div className="flex justify-center">
                <TabsList className="grid grid-cols-4 w-full max-w-md">
                  <TabsTrigger value="all" className="data-[state=active]:bg-neon-blue data-[state=active]:text-black">
                    ALL
                  </TabsTrigger>
                  <TabsTrigger
                    value="fine art"
                    className="data-[state=active]:bg-neon-blue data-[state=active]:text-black"
                  >
                    FINE ART
                  </TabsTrigger>
                  <TabsTrigger
                    value="digital"
                    className="data-[state=active]:bg-neon-purple data-[state=active]:text-white"
                  >
                    DIGITAL
                  </TabsTrigger>
                  <TabsTrigger value="3d" className="data-[state=active]:bg-neon-pink data-[state=active]:text-white">
                    3D
                  </TabsTrigger>
                </TabsList>
              </div>

              <motion.div
                variants={container}
                initial="hidden"
                animate="show"
                className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 mt-8"
              >
                {filteredArtworks.map((artwork) => (
                  <motion.div key={artwork.id} variants={item}>
                    <div>
                      <ArtworkCard artwork={artwork} />
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            </Tabs>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}

