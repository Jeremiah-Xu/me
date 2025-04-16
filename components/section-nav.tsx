"use client"

import { useEffect, useState } from "react"

interface SectionNavProps {
  sections: { id: string; label: string }[]
}

export function SectionNav({ sections }: SectionNavProps) {
  const [activeSection, setActiveSection] = useState(sections[0].id)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id)
          }
        })
      },
      { threshold: 0.5 }
    )

    sections.forEach(({ id }) => {
      const element = document.getElementById(id)
      if (element) observer.observe(element)
    })

    return () => observer.disconnect()
  }, [sections])

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <nav className="fixed right-8 top-1/2 -translate-y-1/2 space-y-2 z-50">
      {sections.map(({ id, label }) => (
        <button
          key={id}
          onClick={() => scrollToSection(id)}
          className={`flex items-center gap-2 transition-all ${
            activeSection === id
              ? "text-neon-blue"
              : "text-muted-foreground hover:text-neon-blue"
          }`}
        >
          <div className="h-2 w-2 rounded-full border border-current" />
          <span className="text-sm font-medium">{label}</span>
        </button>
      ))}
    </nav>
  )
}