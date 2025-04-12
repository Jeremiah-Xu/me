import type React from "react"
import "@/app/globals.css"
import type { Metadata } from "next"
import { yourFont } from './fonts'
import { ThemeProvider } from "@/components/theme-provider"
import { Toaster } from "@/components/ui/toaster"

export const metadata: Metadata = {
  title: "Cyberpunk Portfolio",
  description: "Futuristic project showcase in cyberpunk style",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={yourFont.variable}>
      <body className="font-your-font">
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem disableTransitionOnChange>
          {children}
          <Toaster />
        </ThemeProvider>
      </body>
    </html>
  )
}