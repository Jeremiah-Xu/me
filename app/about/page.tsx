import Image from "next/image"

import { Footer } from "@/components/footer"
import { Header } from "@/components/header"

export default function AboutPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1">
        <section className="container py-12 md:py-24 lg:py-32">
          <div className="grid gap-6 lg:grid-cols-2 lg:gap-12">
            <div className="flex flex-col justify-center space-y-4">
              <div className="space-y-2">
                <h1 className="text-3xl font-cyber tracking-tighter sm:text-5xl">About Me</h1>
                <p className="max-w-[600px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Artist, Creator, and Game Developer
                </p>
              </div>
              <div className="space-y-4 text-muted-foreground">
                <p>
                I’m a junior at Columbia University, majoring in Computer Science and Visual Arts. As both a technologist and an artist, I split my time  navigating two creative paths: one grounded in traditional fine arts—oil painting, drawing, and mixed media—and the other in digital expressions-Game Concept Art, 3D, and VR.
                </p>
                <p>
                My visual work shifts fluidly between introspection and imagination. I’m especially drawn to oil paint and conte crayon, captivated by their expressive textures, directional strokes, and the atmosphere they help create. I find beauty in the movement, emotion, and personality that emerge through their tactile qualities.
                </p>
                <p>
                In addition to my studio practice, I’m a front-end developer who builds interactive websites and data visualizations. I'm also diving into independent game development—dreaming of becoming a "god" of future virtual worlds, where art and code converge to shape entirely new realities.
                </p>
              </div>
            </div>
            <div className="flex items-center justify-center">
              <div className="cyberpunk-border relative h-[400px] w-[300px] overflow-hidden rounded-lg">
                <Image
                  src="/shared/self.jpg"
                  alt="Artist portrait"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </section>
        <section className="bg-muted py-12 md:py-24 lg:py-32">
          <div className="container space-y-6 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">Education & Experience</h2>
            </div>
            <div className="mx-auto grid max-w-3xl gap-8">
              <div className="space-y-2">
                <h3 className="text-xl font-bold">BA in Visual Arts</h3>
                <p className="text-muted-foreground">Columbia University in the City of NewYork, 2022-2026</p>
              </div>
              <div className="space-y-2">
                <h3 className="text-xl font-bold">BA in Computer Science</h3>
                <p className="text-muted-foreground">Columbia University in the City of NewYork, 20222-2026</p>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
