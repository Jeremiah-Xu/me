"use client"
import { useState } from "react"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { ArtworkCard } from "@/components/artwork-card"
import { motion } from "framer-motion"

interface Artwork {
  id: number
  title: string
  description: string
  type: string
  image: string
  year: string
  medium: string
  size?: string
  mediaType?: "video" | "image"
  project?: string
  poster?: string
}

// Your artwork data here...
const artworks: Artwork[] = [
  // Fine Arts
  {
    id: 1,
    title: "Old Man with Enormous Wings",
    // description: "Urban landscape with neon lighting",
    type: "fine art",
    image: "/gallery/1.jpg",
    year: "2024",
    size: "60x50in",
    medium: "Conte Crayon On Paper"
  },
  {
    id: 2,
    title: "Superimposed Self",
    // description: "Abstract representation of human-machine interface",
    type: "fine art",
    image: "/gallery/2.jpg",
    year: "2025",
    size: "60x40in",
    medium: "Conte Crayon On Papers"
  },
  {
    id: 3,
    title: "Metropolitan Gaze II",
    // description: "Portrait exploring AI consciousness",
    type: "fine art",
    image: "/gallery/3.jpg",
    year: "2024",
    size: "65x40in",
    medium: "Conte Crayon On Papers",
  },
  {
    id: 4,
    title: "Blazing Sun",
    // description: "Abstract visualization of information flow",
    type: "fine art",
    image: "/gallery/4.jpg",
    year: "2024",
    size: "60x45in",
    medium: "Oil on canvas",
  },

  {
    id: 5,
    title: "Ups",
    // description: "Digital visualization of AI thought processes",
    type: "fine art",
    image: "/gallery/5.jpg",
    year: "2022",
    size: "60x40in",
    medium: "Oil On Canvas Sheet",
  },
  {
    id: 6,
    title: "Metropolitan Gaze",
    // description: "Exploration of digital personas",
    type: "fine art",
    image: "/gallery/6.jpg",
    year: "2024",
    size: "60x50in",
    medium: "Oil On Canvas Sheet",
  },
  {
    id: 7,
    title: "Sparks of Love",
    // description: "Conceptual design of brain augmentation",
    type: "fine art", 
    image: "/gallery/10.jpg",
    year: "2024",
    size: "50x40in",
    medium: "Oil On Canvas",
  },
  {
    id: 8,
    title: "Glass of the Fallen",
    // description: "Digital recreation of synthetic memories",
    type: "fine art",
    image: "/gallery/8.jpeg",
    size: "20x26in",
    year: "2022",
    medium: "Oil On Canvas Sheet",
  },

  {
    id: 9,
    title: "Holding Lights",
    // description: "3D sculpture of cybernetic organ",
    type: "fine art",
    image: "/gallery/9.jpg",
    year: "2024",
    size: "20x24in",
    medium: "Oil On Canvas Sheet",
  },
  {
    id: 10,
    title: "30mins Classwork",
    // description: "Abstract representation of quantum computing",
    type: "fine art",
    image: "/gallery/7.jpg",
    year: "2022",
    size: "24x26in",
    medium: "Oil On Canvas Sheet",
  },
  {
    id: 11,
    title: "Vanitas",
    // description: "Speculative life form design",
    type: "fine art",
    image: "/gallery/11.jpeg",
    year: "2022",
    size: "26x30in",
    medium: "Oil On Canvas Sheet",
  },
  {
    id: 12,
    title: "Dreamt",
    // description: "Architectural concept for future living spaces",
    type: "fine art",
    image: "/gallery/12.jpg",
    year: "2024",
    medium: "Oil On Canvas Sheet",
  },
  //Digitial
  {
    id: 13,
    title: "Dream Realm X",
    // description: "Architectural concept for future living spaces",
    type: "digital",
    image: "/DR/DR-X.png",
    year: "2023",
    medium: "Ditial(Photoshop)",
    project: "DR-Concept"
  },
  {
    id: 14,
    title: "Dream Realm Y",
    // description: "Architectural concept for future living spaces",
    type: "digital",
    image: "/DR/DR-Y.png",
    year: "2023",
    medium: "Ditial(Photoshop)",
    project: "DR-Concept"
  },
  {
    id: 15,
    title: "Dream Realm Z",
    // description: "Architectural concept for future living spaces",
    type: "digital",
    image: "/DR/DR-Z.png",
    year: "2023",
    medium: "Ditial(Photoshop)",
    project: "DR-Concept"
  },
  {
    id: 16,
    title: "Dream Realm D",
    // description: "Architectural concept for future living spaces",
    type: "digital",
    image: "/DR/DR-D.png",
    year: "2023",
    medium: "Ditial(Photoshop)",
    project: "DR-Concept"
  },
  {
    id: 17,
    title: "Dream Realm Blood Moon Town",
    // description: "Architectural concept for future living spaces",
    type: "digital",
    image: "/DR/DR-landscape1.png",
    year: "2023",
    medium: "Ditial(Photoshop)",
    project: "DR-Concept"
  },
  {
    id: 18,
    title: "Dream Realm Fall of Loong",
    // description: "Architectural concept for future living spaces",
    type: "digital",
    image: "/DR/DR-landscape2.jpg",
    year: "2022",
    medium: "Ditial(Photoshop)",
    project: "DR-Concept"
  },
  {
    id: 19,
    title: "Dream Realm Matrix City",
    // description: "Architectural concept for future living spaces",
    type: "digital",
    image: "/DR/DR-landscape3.jpg",
    year: "2022",
    medium: "3D printed architectural model with electronics",
    project: "DR-Concept"
  },
  {
    id: 20,
    title: "DRZ Sword Animation",
    description: "3D animation of DRZ's sword",
    category: "Animation",
    image: "/static/videos/DRZsword.mp4",
    mediaType: "video",
    poster: "/DR/DRZsword-poster.jpg"
  },
  {
    id: 21,
    title: "DRZ Character Animation",
    description: "3D animation of DRZ character",
    category: "Animation",
    image: "/static/videos/DRZvideo.mp4",
    mediaType: "video",
    poster: "/DR/DRZvideo-poster.jpg"
  },
  {
    id: 22,
    title: "DRS Character Animation",
    description: "3D animation of DRS character",
    category: "Animation",
    image: "/static/videos/DRSvideo.mp4",
    mediaType: "video",
    poster: "/DR/DRSvideo-poster.jpg"
  },
  // {
  //   id: 23,
  //   title: "mbti-vector",
  //   description: "Architectural concept for future living spaces",
  //   type: "digital",
  //   image: "/gallery/mbti_vector.png",
  //   year: "2025",
  //   medium: "figma",
  // },
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
    <div className="flex min-h-screen flex-col">
      <Header />
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

