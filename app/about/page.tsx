"use client"

import { useState } from "react"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { toast } from "sonner"
import { Footer } from "@/components/footer"
import { Header } from "@/components/header"
import { SectionNav } from "@/components/section-nav"
import { motion, AnimatePresence } from "framer-motion"
import { ChevronDown } from "lucide-react"
import SkillsFlowingMenu from '@/components/SkillsFlowingMenu'
import TextPressure from '@/components/textpressure';

const sections = [
  { id: "intro", label: "Introduction" },
  { id: "skills", label: "Skills" },
  { id: "socials", label: "Socials" },
  { id: "contact", label: "Contact" },
]

const skillMenuItems = [
  {
    text: "Fine Arts",
    link: "#fine-arts",
    image: "/skills/fine-arts.jpg", // Add appropriate images
  },
  {
    text: "Digital Art",
    link: "#digital-art",
    image: "/skills/digital-art.jpg",
  },
  {
    text: "Development",
    link: "#development",
    image: "/skills/development.jpg",
  },
]

// Add this type for our skills data
interface SkillCategory {
  title: string
  color: string
  skills: {
    name: string
    proficiency?: string
    description?: string
  }[]
}
// ... sections & skillMenuItems remain unchanged

const skillsData: SkillCategory[] = [
  {
    title: "Art",
    color: "neon-blue",
    skills: [
      {
        name: "Oil Painting",
        description: "Oil on canvas and board — mastery of traditional techniques through portrait and figure painting, emphasizing realism and texture."
      },
      {
        name: "Drawing",
        description: "Charcoal and graphite — expertise in capturing gesture, anatomy, and form through classical and observational drawing methods."
      },
      {
        name: "Mixed Media",
        description: "Paper, textiles, found objects, and acrylics — innovative use of varied materials and experimental layering to produce textured, expressive pieces."
      },
      {
        name: "Figure Drawing",
        description: "Charcoal, pencil, and ink — life drawing and anatomical studies rooted in classical training, capturing dynamic movement and proportion."
      },
      {
        name: "Ceramics",
        description: "Clay, and glaze."
      },
      {
        name: "Animation",
        description: "<strong>Blender</strong>, and <strong>After Effects</strong> — creating 2D and 3D animations that blend movement, timing, and visual storytelling."
      }
    ]
  },
  {
    title: "Design",
    color: "neon-purple",
    skills: [
      {
        name: "Concept Art",
        description: "<strong>Photoshop</strong> and <strong>Procreate</strong> — development of immersive character and environment designs for games and narratives."
      },
      {
        name: "3D Modeling",
        description: "<strong>Blender</strong>, <strong>ZBrush</strong>, <strong>Maya</strong> — proficiency in sculpting, texturing, and animating models for static and dynamic applications."
      },
      {
        name: "VR Development",
        description: "<strong>Unity</strong> and <strong>Unreal Engine</strong> — creating interactive VR experiences that merge storytelling, interactivity, and technical precision."
      },
      {
        name: "Digital Painting",
        description: "<strong>Photoshop</strong> and <strong>Procreate</strong> — crafting stylized visuals for characters, environments, and narrative assets."
      },
    ]
  },
  {
    title: "Tech",
    color: "neon-blue",
    skills: [
      {
        name: "Front-end Development",
        description: "<strong>HTML</strong>, <strong>CSS</strong>, <strong>JavaScript</strong>, <strong>React</strong>, <strong>Next.js</strong>, <strong>TypeScript</strong> — building responsive, interactive interfaces across modern web stacks."
      },
      {
        name: "Game Development",
        description: "<strong>Unity</strong> and <strong>C#</strong> — creating engaging game experiences by blending mechanics, design, and interaction."
      },
      {
        name: "Interactive Design",
        description: "<strong>Figma</strong>, <strong>JavaScript</strong>, and <strong>React</strong> — enhancing user experience through intuitive, responsive, and accessible digital products."
      },
      {
        name: "UI/UX Design",
        description: "<strong>Figma</strong> — designing seamless user journeys and visually clean interfaces based on research and iterative testing."
      },
      {
        name: "Data Visualization",
        description: "<strong>Tableau</strong> and <strong>D3.js</strong> — translating complex datasets into compelling visuals that drive insights and narrative clarity."
      },
      {
        name: "Database Systems",
        description: "<strong>SQL</strong>, <strong>MongoDB</strong> — designing and managing scalable data architectures and integrating them into full-stack applications."
      }
    ]
  },
  {
    title: "FIlm Theater Music",
    color: "neon-pink",
    skills: [
      {
        name: "Performance Arts",
        description: "Voice, movement, and stagecraft — extensive experience in acting, singing, and production across musical theater and drama."
      },
      {
        name: "Film Direction",
        description: "<strong>Adobe Premiere Pro</strong> and <strong>After Effects</strong> — crafting short films with strong storytelling, cinematography, and editing."
      },
      {
        name: "Vocal Performance",
        description: "A cappella ensemble leadership — solo and group singing with emphasis on vocal blend, harmony, and musicality."
      },
      {
        name: "Creative Collaboration",
        description: "Cross-disciplinary production tools — directing and producing collaborative projects across performance, film, and visual art."
      }
    ]
  }  
]


function SkillDropdown({ category }: { category: SkillCategory }) {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div className="w-full">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={`w-full p-4 flex items-center justify-between rounded-lg 
          border border-${category.color}/30 hover:border-${category.color} 
          transition-colors group`}
      >
        <h3 className={`text-xl font-bold text-${category.color}`}>
          {category.title}
        </h3>
        <motion.div
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.3 }}
        >
          <ChevronDown className={`w-5 h-5 text-${category.color}`} />
        </motion.div>
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="overflow-hidden"
          >
            <div className={`mt-2 p-4 rounded-lg border border-${category.color}/10 
              bg-${category.color}/5 backdrop-blur-sm space-y-4`}>
              {category.skills.map((skill, index) => (
                <motion.div
                  key={skill.name}
                  initial={{ x: -20, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ delay: index * 0.1 }}
                  className="space-y-1"
                >
                  <h4 className="font-medium text-white">{skill.name}</h4>
                  {skill.description && (
                    <p className="text-sm text-muted-foreground">
                      {skill.description}
                    </p>
                  )}
                </motion.div>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

export default function AboutPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [activeSkill, setActiveSkill] = useState<string | null>(null)

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
    <div className="w-[80%] mx-[10%] flex min-h-screen flex-col">
      <Header />
      <main className="flex-1 relative">
        <SectionNav sections={sections} />
        
        {/* Introduction Section */}
        <section id="intro" className="min-h-screen flex items-center justify-center">
          <div className="container">
            <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 max-w-6xl mx-auto">
              <div className="flex-col justify-center space-y-4">
                <div className="space-y-2">
                  <div style={{ position: 'relative', height: '200px' }}>
                    <TextPressure
                      text="About Me"
                      flex={true}
                      alpha={false}
                      stroke={false}
                      width={true}
                      weight={true}
                      italic={true}
                      textColor="#ffffff"
                      strokeColor="#ff0000"
                      minFontSize={36}
                    />
                  </div>
                  <p className="max-w-[600px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                    Artist, Creator, and Game Developer
                  </p>
                </div>
                <div className="space-y-4 text-sm text-muted-foreground p-5">
                  <p>
                  I am a multidisciplinary artist. As a junior at Columbia University, majoring in Computer Science and Visual Arts, my art navigates two creative paths: one grounded in traditional fine arts—oil painting, drawing, and mixed media—and the other in digital expressions such as game concept art and 3D modeling.
                  </p>
                  <p>
                  Though these paths diverge in medium, they are unified by the themes I explore. My visual work moves fluidly between introspection and imagination. I delve deeply into personal narratives—such as the complexities of the seven deadly sins and their reflections in human nature—while also bringing to life surreal and fantastical concepts, like dragons emerging from the human soul. This duality between the inward and the otherworldly fuels my practice, pushing the boundaries of how art can represent the inner and outer dimensions of experience.
                  </p>
                  <p>
                  In traditional media, I am particularly drawn to oil paint and conte crayon for their tactile textures and expressive potential. Through deliberate strokes and gestural marks, I express what words often cannot—emotions, movement, and atmosphere. My aim is to create work that contemplates the coexistence of human emotions with elements of myth and dream, visualizing alternate dimensions where reality and fantasy meet.
                  </p>
                  <p>
                  Beyond the studio, I am also a front-end developer who builds interactive websites and data visualizations. My passion for technology and design extends into independent game development, where 3D modeling and animation allow me to construct immersive worlds and characters I imagined. In these digital spaces, I become a kind of architect of the unreal—a “god” of dreamlike environments where art and code converge to shape new realities.
                  </p>
                  <p>
                  This is my art—an imaginative journey through the human experience, where introspection and fantasy coexist, and where each work becomes a portal between the seen and the unseen.
                  </p>
                </div>
              </div>
              <div className="flex flex-col items-center justify-center">
                  <div className="space-y-2 cyberpunk-border relative w-[450px] h-[600px] overflow-hidden rounded-lg mt-60">
                    <Image
                      src="/shared/self.jpg"
                      alt="Artist portrait"
                      fill
                      className="object-cover"
                    />
                  </div>
                <div className="text-center border border-neon-blue/30">
                  <p className="text-muted-foreground p-2">
                    Eton College 2020-2022
                  </p>
                  <p className="text-muted-foreground p-2">
                    Columbia University in the City of New York
                  </p>
                  <p className="text-muted-foreground">
                    Bachelor of Arts in Visual Arts and Computer Science
                  </p>
                  <p className="text-muted-foreground">
                    Class of 2026
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>


        {/* Skills Section */}
        <section id="skills" className="py-16">
          <div className="container">
            <h2 className="text-3xl font-cyber sm:text-4xl mb-10">
              SKILLS
            </h2>
            
            <div className="w-full">
              <SkillsFlowingMenu
                items={skillsData.map(category => ({
                  title: category.title,
                  color: category.color,
                  // image: `/skills/${category.title.toLowerCase().replace(' ', '-')}.jpg`,
                  skills: category.skills.map(skill => ({
                    ...skill,
                  })),
                  onClick: () => setActiveSkill(category.title)
                }))}
              />
            </div>
          </div>
        </section>


        {/* Socials Section */}
        <section id="socials" className="py-16">
          <div className="container">
              <h2 className="text-3xl font-cyber tracking-tighter sm:text-4xl mb-10">
                SOCTIALS
              </h2>
              <div className="grid text-center gap-4 md:grid-cols-2 lg:grid-cols-6">
                <a
                  href="https://www.instagram.com/jeremiahxart/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group p-4 border border-neon-blue/30 rounded-lg hover:border-neon-blue transition-colors"
                >
                  <h3 className="font-bold text-neon-blue">Instagram</h3>
                  <p className="text-sm text-muted-foreground">@jeremiahxart</p>
                </a>
                <a
                  href="https://www.linkedin.com/in/jeremiah-xu-73b982262/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group p-4 border border-neon-purple/30 rounded-lg hover:border-neon-purple transition-colors"
                >
                  <h3 className="font-bold text-neon-purple">LinkedIn</h3>
                  <p className="text-sm text-muted-foreground">Jeremiah Xu</p>
                </a>
                <div className="p-4 border border-neon-pink/30 rounded-lg">
                  <h3 className="font-bold text-neon-pink">WeChat</h3>
                  <p className="text-sm text-muted-foreground">JX2089370781</p>
                </div>
                <div className="p-4 border border-neon-blue/30 rounded-lg">
                  <h3 className="font-bold text-neon-blue">Email</h3>
                  <p className="text-sm text-muted-foreground">jezxax@gmail.com</p>
                </div>
                <div className="p-4 border border-neon-blue/30 rounded-lg">
                  <h3 className="font-bold text-neon-blue">Youtube</h3>
                  <p className="text-sm text-muted-foreground">Jeremiah Xu</p>
                </div>
                <div className="p-4 border border-neon-blue/30 rounded-lg">
                  <h3 className="font-bold text-neon-blue">bilibili</h3>
                  <p className="text-sm text-muted-foreground"></p>
                </div>
              </div>
          </div>
        </section>

        {/* Contact Form Section */}
        <section id="contact" className="py-16">
            <div className="container">
              <h2 className="text-3xl font-cyber tracking-tighter sm:text-4xl mb-10">GET IN TOUCH</h2>
              <p className="text-muted-foreground text-center">
                -----EMAIL FUNCTIONALITY COMING SOON-----
              </p>
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
                className="w-full bg-neon-blue hover:bg-neon-blue/80 text-black"
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