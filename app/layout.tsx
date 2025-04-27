import type React from "react"
import "@/app/globals.css"
import type { Metadata } from "next"
import { yourFont } from './fonts'
import { secondFont } from './fonts'
import { thirdFont } from './fonts'
import { ThemeProvider } from "@/components/theme-provider"
import { Toaster } from "@/components/ui/toaster"

export const metadata: Metadata = {
  title: "Jeremiah Xu",
  description: "Futuristic project showcase in cyberpunk style",
  icons: {
    icon: "/logox4.png", // or "/favicon.png"
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${yourFont.variable} ${secondFont.variable} ${thirdFont.variable}`}>
      <body className="bg-black text-white font-third">
        <div className="w-[100%] mx-[0%]">
          <ThemeProvider attribute="class" defaultTheme="dark" enableSystem disableTransitionOnChange>
            {children}
            <Toaster />
          </ThemeProvider>
        </div>
      </body>
    </html>
  )
}