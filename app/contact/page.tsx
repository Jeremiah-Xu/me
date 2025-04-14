"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { toast } from "sonner"
import { Footer } from "@/components/footer"
import { Header } from "@/components/header"

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    try {
      const response = await fetch("/api/send-email", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      })

      if (!response.ok) {
        throw new Error("Failed to send message")
      }

      toast.success("Message sent successfully!")
      setFormData({ name: "", email: "", message: "" })
    } catch (error) {
      toast.error("Failed to send message. Please try again.")
    } finally {
      setIsSubmitting(false)
    }
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1">
        <section className="container py-12 md:py-24 lg:py-32">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h1 className="text-3xl font-cyber tracking-tighter sm:text-5xl">Contact</h1>
              <p className="max-w-[600px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Get in touch for commissions, game development, or just to say hello
              </p>
            </div>
          </div>
          <div className="mx-auto grid max-w-5xl gap-6 py-12 lg:grid-cols-2 lg:gap-12">
            <div className="space-y-4">
              <div className="space-y-2">
                <h2 className="text-2xl font-bold">Contact Information</h2>
                <p className="text-muted-foreground">Feel free to reach out through any of these channels</p>
              </div>
              <div className="grid gap-4">
                <div className="space-y-1">
                  <h3 className="font-medium">Email</h3>
                  <p className="text-muted-foreground">jx2515@columbia.edu</p>
                </div>
                <div className="space-y-1">
                  <h3 className="font-medium">Wechat</h3>
                  <p className="text-muted-foreground">JX2089370781</p>
                </div>
                <div className="space-y-1">
                  <h3 className="font-medium">Instagram</h3>
                  <p className="text-muted-foreground">@jezzaxu</p>
                </div>
                <div className="space-y-1">
                  <h3 className="font-medium">LinkedIn</h3>
                  <p className="text-muted-foreground">
                    <a href="https://www.linkedin.com/in/jeremiah-xu-73b982262/" target="_blank" rel="noopener noreferrer" className="text-neon-blue hover:underline">
                      Jeremiah Xu
                    </a>
                  </p>
                </div>
              </div>
            </div>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="space-y-2">
                <label htmlFor="name" className="text-sm font-medium">
                  Name
                </label>
                <Input
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="bg-background"
                />
              </div>
              <div className="space-y-2">
                <label htmlFor="email" className="text-sm font-medium">
                  Email
                </label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="bg-background"
                />
              </div>
              <div className="space-y-2">
                <label htmlFor="message" className="text-sm font-medium">
                  Message
                </label>
                <Textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  className="min-h-[150px] bg-background"
                />
              </div>
              <Button 
                type="submit" 
                disabled={isSubmitting} 
                className="w-full bg-white text-black hover:bg-gray-200 border border-black"
              >
                {isSubmitting ? "Sending..." : "Send Message"}
              </Button>
            </form>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
