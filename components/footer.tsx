import Link from "next/link"
import { Instagram, Twitter, Github } from "lucide-react"

export function Footer() {
  return (
    <footer className="border-t border-neon-blue/30 bg-background">
      <div className="container flex flex-col gap-6 py-8 md:flex-row md:items-center md:justify-between md:py-12">
        <div className="flex flex-col gap-2">
          <Link href="/" className="font-cyber text-lg text-neon-blue">
            Jeremiah<span className="text-neon-purple">Xu</span>
          </Link>
          <p className="text-sm text-muted-foreground">© 2025 All rights reserved.</p>
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
    </footer>
  )
}
