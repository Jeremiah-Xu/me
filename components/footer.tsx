import Link from "next/link"
import { Instagram, Twitter, Github } from "lucide-react"

export function Footer() {
  return (
    <footer className="relative w-full z-50 bg-black/80 backdrop-blur-sm">
      <div className="w-full">
        <div className="w-[90%] mx-[5%] flex flex-col gap-6 py-8 md:flex-row md:items-center md:justify-between">
          <div className="flex flex-col gap-2">
            <p className="text-sm text-muted-foreground">©2025 Jeremiah Xu's Personal Website. All rights reserved.</p>
          </div>
          <div className="flex gap-4">
            <Link href="#" className="text-muted-foreground hover:text-neon-blue transition-colors">
              <Github className="h-5 w-5" />
              <span className="sr-only">Github</span>
            </Link>
            <Link href="#" className="text-muted-foreground hover:text-neon-pink transition-colors">
              <Instagram className="h-5 w-5" />
              <span className="sr-only">Instagram</span>
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
