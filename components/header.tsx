"use client"

import Link from "next/link"
import Image from "next/image"
import { usePathname } from "next/navigation"
import { useState, useEffect } from "react"
import { Menu } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"

export function Header() {
  const pathname = usePathname()
  const [showLogo, setShowLogo] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => setShowLogo(true), 1000)
    return () => clearTimeout(timer)
  }, [])

  const routes = [
    { href: "/", label: "HOME" },
    { href: "/projects", label: "PROJECTS" },
    { href: "/gallery", label: "GALLERY" },
    { href: "/about", label: "ABOUT" },
    { href: "/contact", label: "CONTACT" },
  ]

  return (
    <header className="sticky top-0 z-50 w-full border-b border-neon-blue/30 bg-background/95 backdrop-blur">
      <div className="container flex h-20 items-center justify-between">
        <Link href="/" className="font-cyber text-xl text-neon-blue">
          <span className="flex items-center">
            <span className="shoot-text-left">Jeremiah</span>
            <Image
              src="/logo4.png"
              alt="Logo"
              width={54}
              height={54}
              className={`mr-1 mb-1 transition-opacity duration-300 ${showLogo ? "opacity-100" : "opacity-0"}`}
              priority
            />
            <span className="shoot-text-right text-neon-purple">Xu</span>
          </span>
        </Link>
        <nav className="hidden md:flex gap-6">
          {routes.map((route) => (
            <Link
              key={route.href}
              href={route.href}
              className={`font-cyber text-sm tracking-wider transition-colors hover:text-neon-blue ${
                pathname === route.href ? "text-neon-blue" : "text-muted-foreground"
              }`}
            >
              {route.label}
            </Link>
          ))}
        </nav>
        <Sheet>
          <SheetTrigger asChild className="md:hidden">
            <Button variant="outline" size="icon" className="border-neon-blue/50 hover:border-neon-blue">
              <Menu className="h-5 w-5 text-neon-blue" />
              <span className="sr-only">Toggle menu</span>
            </Button>
          </SheetTrigger>
          <SheetContent side="right" className="border-l-neon-blue/30 bg-background/95 backdrop-blur">
            <nav className="flex flex-col gap-4 mt-8">
              {routes.map((route) => (
                <Link
                key={route.href}
                href={route.href}
                className={`font-cyber text-lg tracking-wider transition-colors hover:text-neon-blue ${
                  pathname === route.href ? "text-neon-blue" : "text-muted-foreground"
                }`}
              >
                {route.label}
              </Link>

              ))}
            </nav>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  )
}
