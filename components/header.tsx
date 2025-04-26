"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import Image from "next/image"
import { usePathname } from "next/navigation"
import { Menu } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"

export function Header() {
  const pathname = usePathname()
  const [showLogo, setShowLogo] = useState(false)

  useEffect(() => {
    const timeout = setTimeout(() => {
      setShowLogo(true)
    }, 800)

    return () => clearTimeout(timeout)
  }, [])

  const routes = [
    { href: "/", label: "HOME" },
    { href: "/projects", label: "PROJECTS" },
    { href: "/gallery", label: "GALLERY" },
    { href: "/about", label: "ABOUT" },
  ]

  return (
    <>
      <header className="fixed top-0 left-0 w-full z-50 bg-black/80 backdrop-blur-sm">
        <div className="w-full h-20 flex items-center">
          <div className="w-[90%] mx-[5%] flex items-center justify-between">
            <Link href="/" className="font-cyber text-xl text-neon-blue">
              <span className="flex items-center">
                <span className="shoot-text-left">Jeremiah</span>
                {showLogo && (
                  <Image
                    src="/logoxj2.png"
                    alt="Logo"
                    width={54}
                    height={54}
                    className="mx-2 transition-opacity duration-500 opacity-100"
                    priority
                  />
                )}
                {!showLogo && (
                  <div className="w-[48px] h-[48px] mx-2 opacity-0" />
                )}
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
        </div>
        <div className="absolute bottom-0 left-0 w-full h-[1px] bg-neon-blue/30" />
      </header>

      <div className="h-20" />
    </>
  )
}
