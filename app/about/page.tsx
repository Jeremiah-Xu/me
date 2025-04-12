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
                  I am a contemporary artist based in New York City, working primarily with oil paints, mixed media, and
                  digital art. My work explores the intersection of nature and urban environments, seeking to find
                  harmony in contrasting elements.
                </p>
                <p>
                  After graduating from the School of Visual Arts in 2015, I've exhibited my work in galleries across
                  the United States and Europe. My artistic practice is informed by my travels and observations of
                  changing landscapes and cultural shifts.
                </p>
                <p>
                  When I'm not in my studio, I teach workshops and mentor emerging artists. I believe in the power of
                  art to transform perspectives and create meaningful dialogue about our shared experiences.
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
                <h3 className="text-xl font-bold">MFA in Fine Arts</h3>
                <p className="text-muted-foreground">School of Visual Arts, New York — 2015</p>
              </div>
              <div className="space-y-2">
                <h3 className="text-xl font-bold">BFA in Painting</h3>
                <p className="text-muted-foreground">Rhode Island School of Design — 2013</p>
              </div>
              <div className="space-y-2">
                <h3 className="text-xl font-bold">Selected Exhibitions</h3>
                <p className="text-muted-foreground">
                  Solo Show, Gallery 23, New York — 2023
                  <br />
                  Group Exhibition, Modern Art Museum, Berlin — 2022
                  <br />
                  Annual Showcase, Contemporary Arts Center, Chicago — 2021
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
