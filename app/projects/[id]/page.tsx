import Image from "next/image"
import Link from "next/link"
import { ArrowLeft, ExternalLink, Github } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Footer } from "@/components/footer"
import { Header } from "@/components/header"

const projectsData = {
  "DR-Space": {
    title: "Dream Realm Space Escape",
    description: "3D Space Shooter Game Made with Unity",
    fullDescription:
      "This game expands upon my earlier concept, Dream Realm. Instead of controlling a human within the dream world, players now assume the role of a plane pilot traversing diverse dream dimensions, seeking the elusive cognitive pathway that leads to awakening. The entire game was independently designed and developed.",
    images: [
      {
        src: ".",
        type: "text",
        display: "full",
        alt: "game image"
      },
      {
        src: "Demo Video",
        type: "text",
        display: "full",
        alt: "game image"
      },
      {
        src: "https://www.youtube.com/watch?v=vcT65BCcmpA",
        type: "youtube",
        display: "full",
        alt: "game image" 
      },   
      {
        src: ".",
        type: "text",
        display: "full",
        alt: "game image"
      },
      {
        src: "Development Log",
        type: "text",
        display: "full",
        alt: "game image"
      },
      {
        src: "/DRspace/home.png",
        type: "image",
        display: "mid",
        alt: "game image"
      },
      {
        src: "/DRspace/s2.png",
        type: "image",
        display: "half",
        alt: "game image"
      },
      {
        src: "/DRspace/s1.png",
        type: "image",
        display: "mid",
        alt: "game image"
      },
      {
        src: ".",
        type: "text",
        display: "full",
        alt: "game image"
      },
      {
        src: "Version 1.0",
        type: "text",
        display: "full",
        alt: "game image"
      },
      {
        src: "1. Set up the basic game environment.",
        type: "text",
        display: "half",
        alt: "game image"
      },
      {
        src: "2. Added Player Ship",
        type: "text",
        display: "half",
        alt: "game image"
      },
      {
        src: "/DRspace/s3.png",
        type: "image",
        display: "mid",
        alt: "game image"
      },
      {
        src: "3. Added Basic Shooting Mechanics.",
        type: "text",
        display: "half",
        alt: "game image"
      },
      {
        src: "/DRspace/s6.png",
        type: "image",
        display: "mid",
        alt: "game image"
      },
      {
        src: "4. Added Enemy Prefabs",
        type: "text",
        display: "half",
        alt: "game image"
      },
      {
        src: "/DRspace/s4.png",
        type: "image",
        display: "mid",
        alt: "game image"
      },
      {
        src: "/DRspace/s5.png",
        type: "image",
        display: "mid",
        alt: "game image"
      },
      {
        src: ".",
        type: "text",
        display: "full",
        alt: "game image"
      },
      {
        src: "Version 1.2",
        type: "text",
        display: "full",
        alt: "game image"
      },
      {
        src: "1. Adjusted Cameras",
        type: "text",
        display: "half",
        alt: "game image"
      },  
      {
        src: "2. Fixed Enemy AI",
        type: "text",
        display: "half",
        alt: "game image"
      },
      {
        src: "/DRspace/2.1.png",
        type: "image",
        display: "mid",
        alt: "game image"
      },
      {
        src: "/DRspace/2.2.png",
        type: "image",
        display: "mid",
        alt: "game image"
      },
      {
        src: "/DRspace/2.3.png",
        type: "image",
        display: "mid",
        alt: "game image"
      },
      {
        src: "/DRspace/2.4.png",
        type: "image",
        display: "mid",
        alt: "game image"
      },
      {
        src: ".",
        type: "text",
        display: "full",
        alt: "game image"
      },
      {
        src: "Version 1.5",
        type: "text",
        display: "full",
        alt: "game image"
      },
      {
        src: "1. Updated Level System",
        type: "text",
        display: "half",
        alt: "game image"
      },
      {
        src: "/DRspace/4.1.png",
        type: "image",
        display: "mid",
        alt: "game image"
      },
      {
        src: "/DRspace/4.2.png",
        type: "image",
        display: "mid",
        alt: "game image"
      },
      {
        src: "/DRspace/4.4.png",
        type: "image",
        display: "mid",
        alt: "game image"
      },
      {
        src: "/DRspace/4.5.png",
        type: "image",
        display: "mid",
        alt: "game image"
      },
      {
        src: "/DRspace/4.6.png",
        type: "image",
        display: "mid",
        alt: "game image"
      },
      {
        src: "/DRspace/4.7.png",
        type: "image",
        display: "mid",
        alt: "game image"
      },
      {
        src: "/DRspace/4.3.png",
        type: "image",
        display: "half",
        alt: "game image"
      },
      {
        src: "2. Added Mod Upgrade Shop",
        type: "text",
        display: "half",
        alt: "game image"
      },
      {
        src: "3. Added Mods Icons and Cards",
        type: "text",
        display: "half",
        alt: "game image"
      },
      {
        src: "/DRspace/4.10.png",
        type: "image",
        display: "mid",
        alt: "game image"
      },
      {
        src: "/DRspace/4.9.png",
        type: "image",
        display: "mid",
        alt: "game image"
      },
      {
        src: ".",
        type: "text",
        display: "full",
        alt: "game image"
      },
      {
        src: "Version 2.0",
        type: "text",
        display: "full",
        alt: "game image"
      },
      {
        src: "1.Updated UI for 4K HUD display",
        type: "text",
        display: "full",
        alt: "game image"
      },
      {
        src: "2. Added New Boss",
        type: "text",
        display: "full",
        alt: "game image"
      },
      {
        src: "/DRspace/5.1.png",
        type: "image",
        display: "mid",
        alt: "game image" 
      },
      {
        src: "/DRspace/5.1.5.png",
        type: "image",
        display: "mid",
        alt: "game image" 
      },
      {
        src: "/DRspace/5.2.png",
        type: "image",
        display: "mid",
        alt: "game image" 
      },    
      {
        src: "/DRspace/5.4.png",
        type: "image",
        display: "mid",
        alt: "game image"
      },  
      {
        src: "/DRspace/5.5.png",
        type: "image",
        display: "mid",
        alt: "game image"
      },  
      {
        src: "/DRspace/5.8.png",
        type: "image",
        display: "mid",
        alt: "game image"
      },  
      {
        src: "/DRspace/5.9.png",
        type: "image",
        display: "mid",
        alt: "game image"
      },    
      {
        src: "/DRspace/5.10.png",
        type: "image",
        display: "mid",
        alt: "game image"
      },
      {
        src: "/DRspace/5.11.png",
        type: "image",
        display: "half",
        alt: "game image"
      },         
      {
        src: "/DRspace/5.3.png",
        type: "image",
        display: "half",
        alt: "game image"
      },   
      {
        src: ".",
        type: "text",
        display: "full",
        alt: ""
      },
      {
        src: ".",
        type: "text",
        display: "full",
        alt: ""
      },
      {
        src: "Version 2.5",
        type: "text",
        display: "full",
        alt: "game image"
      },
      {
        src: "/DRspace/6.1.png",
        type: "image",
        display: "full",
        alt: "game image" 
      },   
      {
        src: "/DRspace/6.2.png",
        type: "image",
        display: "mid",
        alt: "game image"
      },   
      {
        src: "/DRspace/6.3.png",
        type: "image",
        display: "mid",
        alt: "game image"
      },   
      {
        src: "1. Modified Color Palette",
        type: "text",
        display: "half",
        alt: "game image"
      },
      {
        src: "/DRspace/6.4.png",
        type: "image",
        display: "mid",
        alt: "game image"
      },   
      {
        src: "/DRspace/6.5.png",
        type: "image",
        display: "mid",
        alt: "game image"
      },  
      {
        src: "2. Added Enemy variants",
        type: "text",
        display: "mid",
        alt: "game image"
      },
      {
        src: "/DRspace/6.6.png",
        type: "image",
        display: "mid",
        alt: "game image"
      },  
      {
        src: "/DRspace/6.9.png",
        type: "image",
        display: "mid",
        alt: "game image"
      },    
      {
        src: "3. Added Death Explosion Effect",
        type: "text",
        display: "mid",
        alt: "game image"
      },
      {
        src: "/DRspace/6.8.png",
        type: "image",
        display: "half",
        alt: "game image"
      },    
      {
        src: "/DRspace/6.10.png",
        type: "image",
        display: "mid",
        alt: "game image"
      },    
      {
        src: "/DRspace/6.11.png",
        type: "image",
        display: "mid",
        alt: "game image"
      },   
      {
        src: "4. Added Motion Blur",
        type: "text",
        display: "mid",
        alt: "game image"
      },
      {
        src: "/DRspace/6.13.png",
        type: "image",
        display: "mid",
        alt: "game image"
      },      
      {
        src: "/DRspace/6.7.png",
        type: "image",
        display: "half",
        alt: "game image"
      },  
      {
        src: "/DRspace/6.12.png",
        type: "image",
        display: "half",
        alt: "game image"
      }, 
      {
        src: ".",
        type: "text",
        display: "full",
        alt: "game image"
      },    
      {
        src: ".",
        type: "text",
        display: "full",
        alt: "game image"
      },   
      {
        src: "---Version 3.0 (Demo)---",
        type: "text",
        display: "full",
        alt: "game image"
      },   
      {
        src: ".",
        type: "text",
        display: "full",
        alt: "game image"
      }, 
      {
        src: "/DRspace/7.5.png",
        type: "image",
        display: "mid",
        alt: "game image"
      },  
      {
        src: "/DRspace/7.6.png",
        type: "image",
        display: "mid",
        alt: "game image"
      },  
      {
        src: "Home & Tutorial ",
        type: "text",
        display: "mid",
        alt: "text"
      }, 
      {
        src: "/DRspace/7.1.png",
        type: "image",
        display: "half",
        alt: "game image"
      }, 
      {
        src: "/DRspace/7.2.png",
        type: "image",
        display: "half",
        alt: "game image"
      },   
      {
        src: "/DRspace/7.7.png",
        type: "image",
        display: "mid",
        alt: "game image"
      },  
      {
        src: "/DRspace/7.8.png",
        type: "image",
        display: "mid",
        alt: "game image"
      }, 
      {
        src: "/DRspace/7.9.png",
        type: "image",
        display: "mid",
        alt: "game image"
      }, 
      {
        src: "New Levels & Enemies",
        type: "text",
        display: "mid",
        alt: "text"
      }, 
      {
        src: "/DRspace/7.10.png",
        type: "image",
        display: "mid",
        alt: "game image"
      },  
      {
        src: "/DRspace/7.11.png",
        type: "image",
        display: "half",
        alt: "game image"
      },    
      {
        src: "/DRspace/7.12.png",
        type: "image",
        display: "mid",
        alt: "game image"
      },  
      {
        src: "New landscapes & Environments",
        type: "text",
        display: "mid",
        alt: "text"
      },   
      {
        src: "/DRspace/7.13.png",
        type: "image",
        display: "half",
        alt: "game image"
      },  
      {
        src: "Abilties and Special power ups",
        type: "text",
        display: "mid",
        alt: "text"
      },   
      {
        src: "/DRspace/7.3.png",
        type: "image",
        display: "half",
        alt: "game image"
      },  
      {
        src: "/DRspace/7.4.png",
        type: "image",
        display: "half",
        alt: "game image"
      },   
      {
        src: "Combat Footages",
        type: "text",
        display: "half",
        alt: "Local video section"
      },
      {
        src: "/videos/DR 8.5.mp4",
        type: "video",
        display: "half",
        alt: "DR-Space gameplay video"
      },
      {
        src: ".",
        type: "text",
        display: "full",
        alt: "Local video section"
      },
      {
        src: ".",
        type: "text",
        display: "full",
        alt: "Local video section"
      },
      {
        src: "Full Demo in progress",
        type: "text",
        display: "full",
        alt: "Local video section"
      },      {
        src: "Expected date: September 2025",
        type: "text",
        display: "full",
        alt: "Local video section"
      },


      // {
      //   src: "https://www.youtube.com/watch?v=MpCNEPYQn_c",
      //   type: "youtube",
      //   display: "half",
      //   alt: "DR-Space gameplay video"
      // },
      // {
      //   src: "(中国无法访问Youtube, 请使用VPN:或者哔哩哔哩链接:https://www.bilibili.com/video/BV1jDGkzaEZG/?vd_source=fcdc7cf5dcaef5cf806d139c014f9b66)",
      //   type: "text",
      //   display: "half",
      //   alt: ""
      // },
    ],
    category: "GAME",
    technologies: ["Unity", "Blender", "figma", "Concept Art", "Game Design"],
    features: [
      "3D Modelling",
      "GUI Design",
      "Unity Camera System",
      "Free-roam flight in 3D space",
      "Shields, hull damage, and repair mechanics",
      "Customization & Upgrades",
    ],
    year: "2025",
    link: "https://jezxaxu.itch.io/drealm?secret=lMOg2fENU2IRRk7GxHrx46tvWE",
  },

  "DR-Concept": {
    title: "Dream Realm Concept Art",
    description: "A world shared by all through dreams, yet forgotten upon waking",
    fullDescription:
      "The main character, Jezza, wields a weapon nicknamed 'Coffin'—a mysterious material capable of transforming into any form he can imagine. Unbound by the limitations of the physical world, it grants him near-limitless power. Below are several variations of combat outfits and weapon forms Jezza may equip.",
    images: [
      {
        src: "/DR/GD2.0.png",
        type: "image",
        display: "full",
        alt: "Game Design Concept"
      },
      {
        src: "Character Concept",
        type: "text",
        display: "full",
        alt: ""
      },
      {
        src: "/DR/DR-X.png",
        type: "image",
        display: "mid",
        alt: "Detailed concept art"
      },
      {
        src: "/DR/DR-Y.png",
        type: "image",
        display: "mid",
        alt: "Detailed concept art"
      },
      {
        src: "/DR/DR-Z.png",
        type: "image",
        display: "mid",
        alt: "Detailed concept art"
      },
      {
        src: "/DR/DR-D.png",
        type: "image",
        display: "mid",
        alt: "Detailed concept art"
      },
      {
        src: "Landscape Concept",
        type: "text",
        display: "full",
        alt: ""
      },
      {
        src: "/DR/DR-landscape1.png",
        type: "image",
        display: "mid",
        alt: "Detailed concept art"
      },
      {
        src: "/DR/DR-landscape2.jpg",
        type: "image",
        display: "mid",
        alt: "Detailed concept art"
      },
      {
        src: "/DR/DR-landscape3.jpg",
        type: "image",
        display: "half",
        alt: "Detailed concept art"
      },
      {
        src: "Weapon Forms + Animation Concept",
        type: "text",
        display: "full",
        alt: ""
      },
      {
        src: "/DR/X.jpeg",
        type: "image",
        display: "full",
        alt: "Concept art X"
      },
      {
        src: "/DR/Y.jpeg",
        type: "image",
        display: "full",
        alt: "Concept art Y"
      },
      {
        src: "/DR/Z.jpeg",
        type: "image",
        display: "full",
        alt: "Concept art Z"
      },
      {
        src: "3D",
        type: "text",
        display: "full",
        alt: ""
      },
      {
        src: "/DR/DRZa.png",
        type: "image",
        display: "mid",
        alt: "Detailed concept art Za"
      },
      {
        src: "/DR/DRZc.png",
        type: "image",
        display: "mid",
        alt: "Detailed concept art Zc"
      },
      {
        src: "/DR/p6.png",
        type: "image",
        display: "half",
        alt: "Detailed concept art 6"
      },
      {
        src: "/DR/p7.png",
        type: "image",
        display: "half",
        alt: "Detailed concept art 7"
      },
      {
        src: "/DR/DRZm+s1.png",
        type: "image",
        display: "mid",
        alt: "Detailed concept art 8"
      },
      {
        src: "Handcrafted 3D models created from scratch in ZBrush and Blender",
        type: "text",
        display: "mid",
        alt: ""
      },
      {
        src:"/videos/DRSvideo.gif",
        type: "image",
        display: "half",
        alt: "DR-Space gameplay video"
      },
      {
        src:"/videos/DRZsword.gif",
        type: "image",
        display: "half",
        alt: "DR-Space gameplay video"
      },


    ],
    category: "Concept Art",
    technologies: ["Photoshop", "Zbrush", "Blender", "Concept Art"],
    features: [
      "Conceptual Charatcer Design",
      "3D Hardsurface Modelling",
      "Landscape Design",
      "Illustration",
    ],
    year: "2024",
    link: "",
  },
  "Fate-of-Lifrun": {
    title: "Fate of Lifrun",
    description: "Defending Greenary against the invading forces",
    fullDescription:
      "A Week School Gamejam(Lionjam) project made with Unity.",
    images: [
      {
        src: "/FOL/1.png",
        type: "image",
        display: "full",
        alt: "FOL gameplay image"
      },
      {
        src: "/FOL/48x48 trees1.png",
        type: "image",
        display: "small",
        alt: "FOL gameplay image"
      },
      {
        src: "/FOL/48x48 trees2.png",
        type: "image",
        display: "small",
        alt: "FOL gameplay image"
      },
      {
        src: "/FOL/48x48 trees3.png",
        type: "image",
        display: "small",
        alt: "FOL gameplay image"
      },
      {
        src: "/FOL/48x48 trees4.png",
        type: "image",
        display: "mid",
        alt: "FOL gameplay image"
      },
      {
        src: "/FOL/a.png",
        type: "image",
        display: "small",
        alt: "FOL gameplay image"
      },
      {
        src: "/FOL/s.png",
        type: "image",
        display: "small",
        alt: "FOL gameplay image"
      },
      {
        src: "/FOL/w.png",
        type: "image",
        display: "small",
        alt: "FOL gameplay image"
      },

      {
        src: "/FOL/1.gif",
        type: "image",
        display: "extra-small",
        alt: "FOL gameplay image"
      },
      {
        src: "/FOL/2.gif",
        type: "image",
        display: "small",
        alt: "FOL gameplay image"
      },
      {
        src: "/FOL/3.gif",
        type: "image",
        display: "small",
        alt: "FOL gameplay image"
      },
      {
        src: "/FOL/4.gif",
        type: "image",
        display: "small",
        alt: "FOL gameplay image"
      },
      {
        src: "/FOL/5.gif",
        type: "image",
        display: "small",
        alt: "FOL gameplay image"
      },
      {
        src: "/FOL/6.gif",
        type: "image",
        display: "small",
        alt: "FOL gameplay image"
      },
      {
        src:"Assets I originally created with Aesprite",
        type: "text",
        display: "half",
        alt:"Assets"
      },
      {
        src: "https://www.youtube.com/watch?v=P5ABqHAO4Gs",
        type: "youtube",
        display: "full",
        alt: "FOL gameplay video"
      },
      
    ],
    category: "Game",
    technologies: ["Aesprite", "Unity"],
    features: [
      "Game Design",
      "Animation",
      "Level Design",
      "Pixel Art",
    ],
    year: "2025",
    link: "https://anoikis.itch.io/fate-of-lifrun",
  },

  "Mech-Survivor": {
    title: "Mech Survivor",
    description: "2D Survival Game",
    fullDescription:
      "...",
    images: [
      {
        src: "/MechSurvivor/1.png",
        type: "image",
        display: "full",
        alt: "game image"
      },
    ],
    category: "GAME",
    technologies: ["Unity", "PS", "figma", "Concept Art", "Game Design"],
    features: [
      "Unity 2D",
      "GUI Design",
      "Vampire survivor style game in 2D space",
      "Customization & Upgrades",
    ],
    year: "2025",
    link: "",
  },

  "Cyber-Runaway": {
    title: "Cyber Runaway",     
    description: "2070 Hopeless Girl Escaping from assasination",
    fullDescription:  
      "...",
    images: [
      {
        src: "/AI/1.png",
        type: "image",
        display: "half",
        alt: "game image"
      },
      {
        src: "/AI/2.png",
        type: "image",
        display: "half",
        alt: "game image"
      },
      {
        src: "Vehicle Design",
        type: "text",
        display: "full",
        alt: "game image"
      },
      {
        src: "/AI/p2.png",
        type: "image",
        display: "half",
        alt: "game image"
      },
      {
        src: "/AI/3.png",
        type: "image",
        display: "half",
        alt: "game image"
      },
      {
        src: "/AI/4.png",
        type: "image",
        display: "half",
        alt: "game image"
      },
    ],
    category: "GAME",
    technologies: ["Unity", "PS", "ComfyUI", "Concept Art"],
    features: [
      "Concept Art",
      "AI Assisted Art",
      "Character Design",
    ],
    year: "2025",
    link: "",
  },

  "Magic-in-Loop": {
    title: "Magic in Loop",
    description: "Strategic rune-based combat game (GMTK Game Jam 2025)",
    fullDescription:
      "A strategic puzzle game where players draw magical loops using different rune types to defeat enemies. Each rune type has unique abilities - Fire burns grass for extra collection, Water washes enclosed runes, Grass heals, Dark increases spawn rates, Arcane provides ink, and Light transforms into your most common element. Players must strategically group elements, use counter mechanics, and manage their ink supply to create powerful formations and defeat all enemies.",
    images: [
      {
        src: "Game Overview",
        type: "text",
        display: "full",
        alt: "Magic in Loop overview"
      },
      {
        src: "Try it out on: https://jezxaxu.itch.io/magicinloop",
        type: "text",
        display: "full",
        alt: "Game instructions"
      },
      {
        src: "https://www.youtube.com/watch?v=r3ayax-rgho",
        type: "youtube",
        display: "full",
        alt: "Magic in Loop gameplay video"
      },
      {
        src: "/MIL/3.png",
        type: "image",
        display: "half",
        alt: "game image"
      },      
      {
        src: "/MIL/4.png",
        type: "image",
        display: "half",
        alt: "game image"
      },
      {
        src: "/MIL/5.png",
        type: "image",
        display: "half",
        alt: "game image"
      },
      {
        src: "/MIL/6.png",
        type: "image",
        display: "half",
        alt: "game image"
      },
      {
        src: "Local Video Example",
        type: "text",
        display: "full",
        alt: "Local video section"
      },
      {
        src: "/videos/magic-in-loop-gameplay.mp4",
        type: "video",
        display: "full",
        alt: "Magic in Loop gameplay video"
      },
    ],
    category: "GAME",
    technologies: ["Unity", "C#", "Aseprite", "Audacity", "Game Design"],
    features: [
      "Strategic Rune-Based Combat",
      "Element Counter System",
      "Ink Management Mechanics",
      "Special Rune Abilities",
      "Formation-Based Damage",
      "Real-time Strategy Gameplay",
    ],
    year: "2025",
    link: "https://jezxaxu.itch.io/magicinloop",
  },
}

export async function generateStaticParams() {
  const projectIds = Object.keys(projectsData);
  return projectIds.map((id) => ({
    id,
  }));
}

export default async function ProjectPage({ params }: { params: { id: string } }) {
  const project = projectsData[params.id as keyof typeof projectsData];

  if (!project) {
    return (
      <div className="flex min-h-screen flex-col">
        <Header />
        <main className="flex-1 flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-3xl font-bold text-neon-blue">Project Not Found</h1>
            <p className="mt-4 text-muted-foreground">The project you're looking for doesn't exist.</p>
            <Link href="/projects" className="mt-6 inline-block">
              <Button variant="outline" className="border-neon-blue text-neon-blue">
                <ArrowLeft className="mr-2 h-4 w-4" />
                Back to Projects
              </Button>
            </Link>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  return (
    <div className="w-[80%] mx-[10%] flex min-h-screen flex-col">
      <Header />
      <main className="flex-1">
        <section className="container py-12 relative">
          <div className="absolute top-0 right-0 w-64 h-64 bg-neon-purple/10 rounded-full blur-3xl -z-10"></div>
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-neon-blue/10 rounded-full blur-3xl -z-10"></div>

          <div className="flex flex-col md:flex-row gap-12">
            <div className="md:w-2/3">
              <div className="prose prose-invert max-w-none">
                <div className="text-neon-blue text-sm tracking-widest uppercase mb-2">
                  {project.category}
                </div>
                <h1 className="font-cyber text-4xl md:text-5xl">{project.title}</h1>

                <p className="text-xl text-muted-foreground">{project.description}</p>
                <p className="mt-6">{project.fullDescription}</p>

                <div className="mt-12 relative">
                <div className="flex items-center justify-between">
                  <h2 className="text-2xl font-bold text-neon-blue">Features</h2>
                </div>

                <ul className="mt-4">
                  {project.features.map((feature, index) => (
                    <li key={index}>{feature}</li>
                  ))}
                </ul>
              </div>

              </div>
            </div>

            <div className="md:w-1/3">
              <div className="cyberpunk-card p-6 rounded-lg">
                <h3 className="text-xl font-bold mb-4 text-neon-purple">Project Details</h3>
                <div className="space-y-4">
                  <div>
                    <div className="text-sm text-muted-foreground">Year</div>
                    <div>{project.year}</div>
                  </div>
                  <div>
                    <div className="text-sm text-muted-foreground">Category</div>
                    <div>{project.category}</div>
                  </div>
                  <div>
                    <div className="text-sm text-muted-foreground">Technologies</div>
                    <div className="flex flex-wrap gap-2 mt-2">
                      {project.technologies.map((tech, index) => (
                        <span key={index} className="px-2 py-1 text-xs rounded-md bg-neon-blue/10 text-neon-blue">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex justify-end pt-20">
                {project.link ? (
                  <Button asChild className="bg-neon-blue hover:bg-neon-blue/80 text-black">
                    <a href={project.link} target="_blank" rel="noopener noreferrer">
                      <ExternalLink className="mr-2 h-4 w-4" />
                      Live Demo
                    </a>
                  </Button>
                ) : (
                  <div className="text-center p-4 border border-yellow-500/30 rounded-lg bg-yellow-500/10">
                    <p className="text-yellow-400 text-sm font-medium">No live demo available currently</p>
                    <p className="text-yellow-300/70 text-xs mt-1">Check back later for updates</p>
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* Images Section */}
          <section className="space-y-8 py-10">
            <div className="grid grid-cols-1 md:grid-cols-12 gap-1">
              {project.images.map((media, index) => (
                <div p-10="true"
                  key={index}
                  className={`p-2 relative overflow-hidden rounded-lg ${
                    media.display === "full"
                      ? "md:col-span-12"
                      : media.display === "half"
                      ? "md:col-span-6"
                      : media.display === "mid"
                      ? "md:col-span-3"
                      : media.display === "small"
                      ? "md:col-span-2"
                      : media.display === "extra-small"
                      ? "md:col-span-1"
                      : ""
                  }`}
                >
                  {media.type === "image" && (
                    <Image
                      src={media.src}
                      alt={media.alt}
                      width={1200}
                      height={800}
                      className="w-full h-auto object-cover rounded-md"
                    />
                  )}
                  {media.type === "youtube" && (
                    <div className="relative w-full pt-[56.25%]">
                      <iframe
                        src={media.src.replace("watch?v=", "embed/")}
                        title={media.alt}
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                        className="absolute top-0 left-0 w-full h-full"
                      ></iframe>
                    </div>
                  )}
                  {media.type === "bilibili" && (
                    <div className="relative w-full pt-[56.25%]">
                      <iframe
                        src={media.src.replace("/video/", "/player.html?bvid=").replace("/?vd_source=", "&")}
                        title={media.alt}
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                        className="absolute top-0 left-0 w-full h-full"
                      ></iframe>
                    </div>
                  )}
                  {media.type === "video" && (
                    <div className="relative w-full">
                      <video
                        src={media.src}
                        controls
                        className="w-full h-auto rounded-md"
                        preload="metadata"
                      >
                        Your browser does not support the video tag.
                      </video>
                    </div>
                  )}
                  {media.type === "text" && (
                    <div className=" flex items-center justify-center w-full h-full text-center text-lg">
                      {media.src || "No text provided."}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </section>

          <div className="mt-16">
            <Link href="/projects">
              <Button variant="outline" className="border-neon-blue text-neon-blue hover:bg-neon-blue hover:text-black transition-colors duration-300">
                <ArrowLeft className="mr-2 h-4 w-4" />
                Back to Projects
              </Button>
            </Link>
          </div>
        </section>

      </main>
      <Footer />
    </div>
  );
}

